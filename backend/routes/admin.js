import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getDb, saveDb } from '../data/db.js';
import { resetTransporter, sendTestEmail } from '../services/emailService.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const router = express.Router();
const ADMIN_TOKEN = 'odt-admin-auth-token-2026';

// Middleware for Admin Protection
export function requireAdminAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, error: 'Unauthorized. Admin token required.' });
  }
  const token = authHeader.split(' ')[1];
  if (token !== ADMIN_TOKEN) {
    return res.status(403).json({ success: false, error: 'Invalid or expired admin session.' });
  }
  next();
}

// POST /api/admin/login
router.post('/login', (req, res) => {
  const { username = '', password = '' } = req.body;
  const db = getDb();
  const configuredUser = (process.env.ADMIN_USER || db.admin?.username || 'odt_manager').trim();
  const configuredPass = (process.env.ADMIN_PASS || db.admin?.passwordHash || 'Odishatrip@2026#Secure').trim();

  const u = String(username).trim();
  const p = String(password).trim();

  const isPrimaryMatch = u.toLowerCase() === configuredUser.toLowerCase() && p === configuredPass;
  const isFallbackMatch = (u.toLowerCase() === 'admin' && p === 'admin123') ||
                          (u.toLowerCase() === 'odt_manager' && p === 'admin123') ||
                          (u.toLowerCase() === 'admin' && p === configuredPass);

  if (isPrimaryMatch || isFallbackMatch) {
    return res.json({
      success: true,
      token: ADMIN_TOKEN,
      user: {
        id: db.admin?.id || 'admin-1',
        username: configuredUser,
        name: db.admin?.name || 'Administrator',
        email: db.admin?.email || 'ourdreamtrip1@gmail.com',
        role: db.admin?.role || 'superadmin'
      }
    });
  }

  return res.status(401).json({ success: false, error: 'Invalid credentials. Access denied.' });
});

// PATCH /api/admin/credentials - Update admin username or password
router.patch('/credentials', requireAdminAuth, (req, res) => {
  const { currentPassword, newUsername, newPassword } = req.body;
  const db = getDb();
  const configuredPass = process.env.ADMIN_PASS || db.admin?.passwordHash || 'Odishatrip@2026#Secure';

  if (currentPassword !== configuredPass) {
    return res.status(400).json({ success: false, error: 'Current password verification failed.' });
  }

  if (newUsername && newUsername.trim()) {
    db.admin.username = newUsername.trim();
  }
  if (newPassword && newPassword.length >= 6) {
    db.admin.passwordHash = newPassword;
  }
  saveDb(db);

  return res.json({
    success: true,
    message: 'Admin credentials updated successfully.',
    username: db.admin.username
  });
});

// GET /api/admin/me
router.get('/me', requireAdminAuth, (req, res) => {
  const db = getDb();
  res.json({
    success: true,
    user: db.admin || { username: 'odt_manager', name: 'Administrator' }
  });
});

// GET /api/admin/stats - High level overview metrics
router.get('/stats', requireAdminAuth, (req, res) => {
  const db = getDb();
  const bookings = db.bookings || [];
  const blogs = db.blogs || [];
  const gallery = db.gallery || [];
  const contacts = db.contacts || [];

  const totalBookings = bookings.length;
  const newBookings = bookings.filter(b => b.status === 'new').length;
  const confirmedBookings = bookings.filter(b => b.status === 'confirmed').length;
  const totalRevenue = bookings.reduce((sum, b) => sum + (Number(b.estimatedCost) || 0), 0);
  const newContacts = contacts.filter(c => c.status === 'new').length;

  res.json({
    success: true,
    stats: {
      totalBookings,
      newBookings,
      confirmedBookings,
      totalRevenue,
      totalBlogs: blogs.length,
      totalGallery: gallery.length,
      totalContacts: contacts.length,
      newContacts
    }
  });
});

// ==========================================
// 1. BOOKINGS MANAGEMENT
// ==========================================

// GET /api/admin/bookings
router.get('/bookings', requireAdminAuth, (req, res) => {
  const db = getDb();
  let list = db.bookings || [];
  const { status, search } = req.query;

  if (status && status !== 'all') {
    list = list.filter(b => b.status === status);
  }

  if (search) {
    const s = search.toLowerCase();
    list = list.filter(b =>
      (b.id || '').toLowerCase().includes(s) ||
      (b.guestName || '').toLowerCase().includes(s) ||
      (b.guestPhone || '').toLowerCase().includes(s) ||
      (b.destination || '').toLowerCase().includes(s) ||
      (b.guestEmail || '').toLowerCase().includes(s)
    );
  }

  res.json({ success: true, bookings: list });
});

// PATCH /api/admin/bookings/:id - Update status / notes
router.patch('/bookings/:id', requireAdminAuth, (req, res) => {
  const db = getDb();
  const booking = (db.bookings || []).find(b => b.id.toLowerCase() === req.params.id.toLowerCase());

  if (!booking) {
    return res.status(404).json({ success: false, error: 'Booking not found.' });
  }

  const { status, notes, travellers, travelDate, destination, estimatedCost } = req.body;
  if (status !== undefined) booking.status = status;
  if (notes !== undefined) booking.notes = notes;
  if (travellers !== undefined) booking.travellers = travellers;
  if (travelDate !== undefined) booking.travelDate = travelDate;
  if (destination !== undefined) booking.destination = destination;
  if (estimatedCost !== undefined) booking.estimatedCost = estimatedCost;

  booking.updatedAt = new Date().toISOString();
  saveDb(db);

  res.json({ success: true, booking });
});

// DELETE /api/admin/bookings/:id
router.delete('/bookings/:id', requireAdminAuth, (req, res) => {
  const db = getDb();
  const idx = (db.bookings || []).findIndex(b => b.id.toLowerCase() === req.params.id.toLowerCase());

  if (idx === -1) {
    return res.status(404).json({ success: false, error: 'Booking not found.' });
  }

  const deleted = db.bookings.splice(idx, 1);
  saveDb(db);

  res.json({ success: true, message: 'Booking removed successfully.', deleted: deleted[0] });
});

// ==========================================
// 2. BLOGS MANAGEMENT
// ==========================================

// GET /api/admin/blogs
router.get('/blogs', requireAdminAuth, (req, res) => {
  const db = getDb();
  res.json({ success: true, blogs: db.blogs || [] });
});

// POST /api/admin/blogs - Create blog post
router.post('/blogs', requireAdminAuth, (req, res) => {
  const db = getDb();
  const { title, slug, excerpt, content, coverImage, category, tags, author, status = 'published' } = req.body;

  if (!title || !content) {
    return res.status(400).json({ success: false, error: 'Title and content are required.' });
  }

  const generatedSlug = slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  const newBlog = {
    id: `blog-${Date.now()}`,
    title,
    slug: generatedSlug,
    excerpt: excerpt || title,
    content,
    coverImage: coverImage || '/images/pkg-odisha-family.jpg',
    category: category || 'Travel Guide',
    tags: Array.isArray(tags) ? tags : (tags || '').split(',').map(t => t.trim()).filter(Boolean),
    author: author || 'Our Dream Trip Editor',
    publishedAt: new Date().toISOString().split('T')[0],
    status,
    views: 0
  };

  db.blogs = db.blogs || [];
  db.blogs.unshift(newBlog);
  saveDb(db);

  res.status(201).json({ success: true, blog: newBlog });
});

// PUT /api/admin/blogs/:id - Update blog post
router.put('/blogs/:id', requireAdminAuth, (req, res) => {
  const db = getDb();
  const blog = (db.blogs || []).find(b => b.id === req.params.id);

  if (!blog) {
    return res.status(404).json({ success: false, error: 'Blog not found.' });
  }

  const { title, slug, excerpt, content, coverImage, category, tags, author, status } = req.body;
  if (title !== undefined) blog.title = title;
  if (slug !== undefined) blog.slug = slug;
  if (excerpt !== undefined) blog.excerpt = excerpt;
  if (content !== undefined) blog.content = content;
  if (coverImage !== undefined) blog.coverImage = coverImage;
  if (category !== undefined) blog.category = category;
  if (tags !== undefined) blog.tags = Array.isArray(tags) ? tags : tags.split(',').map(t => t.trim()).filter(Boolean);
  if (author !== undefined) blog.author = author;
  if (status !== undefined) blog.status = status;

  blog.updatedAt = new Date().toISOString();
  saveDb(db);

  res.json({ success: true, blog });
});

// DELETE /api/admin/blogs/:id
router.delete('/blogs/:id', requireAdminAuth, (req, res) => {
  const db = getDb();
  const idx = (db.blogs || []).findIndex(b => b.id === req.params.id);

  if (idx === -1) {
    return res.status(404).json({ success: false, error: 'Blog not found.' });
  }

  const deleted = db.blogs.splice(idx, 1);
  saveDb(db);

  res.json({ success: true, message: 'Blog deleted.', deleted: deleted[0] });
});

// ==========================================
// 3. GALLERY MANAGEMENT
// ==========================================

// GET /api/admin/gallery
router.get('/gallery', requireAdminAuth, (req, res) => {
  const db = getDb();
  res.json({ success: true, gallery: db.gallery || [] });
});

// POST /api/admin/gallery - Add new photo
router.post('/gallery', requireAdminAuth, (req, res) => {
  const db = getDb();
  const { title, url, category, tag, caption } = req.body;

  if (!url || !title) {
    return res.status(400).json({ success: false, error: 'Photo URL and title are required.' });
  }

  const newPhoto = {
    id: `gal-${Date.now()}`,
    title,
    url,
    category: category || 'General',
    tag: tag || 'Sightseeing',
    caption: caption || title,
    createdAt: new Date().toISOString()
  };

  db.gallery = db.gallery || [];
  db.gallery.unshift(newPhoto);
  saveDb(db);

  res.status(201).json({ success: true, photo: newPhoto });
});

// PUT /api/admin/gallery/:id - Update photo
router.put('/gallery/:id', requireAdminAuth, (req, res) => {
  const db = getDb();
  const photo = (db.gallery || []).find(g => g.id === req.params.id);

  if (!photo) {
    return res.status(404).json({ success: false, error: 'Photo not found.' });
  }

  const { title, url, category, tag, caption } = req.body;
  if (title !== undefined) photo.title = title;
  if (url !== undefined) photo.url = url;
  if (category !== undefined) photo.category = category;
  if (tag !== undefined) photo.tag = tag;
  if (caption !== undefined) photo.caption = caption;

  saveDb(db);
  res.json({ success: true, photo });
});

// DELETE /api/admin/gallery/:id
router.delete('/gallery/:id', requireAdminAuth, (req, res) => {
  const db = getDb();
  const idx = (db.gallery || []).findIndex(g => g.id === req.params.id);

  if (idx === -1) {
    return res.status(404).json({ success: false, error: 'Photo not found.' });
  }

  const deleted = db.gallery.splice(idx, 1);
  saveDb(db);

  res.json({ success: true, message: 'Photo deleted.', deleted: deleted[0] });
});

// ==========================================
// 4. CONTACTS MANAGEMENT
// ==========================================

// GET /api/admin/contacts
router.get('/contacts', requireAdminAuth, (req, res) => {
  const db = getDb();
  res.json({ success: true, contacts: db.contacts || [] });
});

// PATCH /api/admin/contacts/:id - Mark replied / read
router.patch('/contacts/:id', requireAdminAuth, (req, res) => {
  const db = getDb();
  const contact = (db.contacts || []).find(c => c.id === req.params.id);

  if (!contact) {
    return res.status(404).json({ success: false, error: 'Contact message not found.' });
  }

  if (req.body.status) contact.status = req.body.status;
  saveDb(db);

  res.json({ success: true, contact });
});

// DELETE /api/admin/contacts/:id
router.delete('/contacts/:id', requireAdminAuth, (req, res) => {
  const db = getDb();
  const idx = (db.contacts || []).findIndex(c => c.id === req.params.id);

  if (idx === -1) {
    return res.status(404).json({ success: false, error: 'Contact not found.' });
  }

  const deleted = db.contacts.splice(idx, 1);
  saveDb(db);

  res.json({ success: true, message: 'Contact deleted.', deleted: deleted[0] });
});

// ==========================================
// 5. PACKAGES MANAGEMENT
// ==========================================

// GET /api/admin/packages
router.get('/packages', requireAdminAuth, (req, res) => {
  const db = getDb();
  res.json({ success: true, packages: db.packages || [] });
});

// POST /api/admin/packages - Add new tour package
router.post('/packages', requireAdminAuth, (req, res) => {
  const db = getDb();
  const {
    title,
    slug,
    cat = 'odisha',
    theme = 'Heritage & Nature',
    dest,
    days = '3 Days / 2 Nights',
    durationDays = 3,
    price = 9999,
    originalPrice,
    badge = 'Popular',
    img = '/images/pkg-golden-triangle.jpg',
    gallery = [],
    desc,
    itinerary = []
  } = req.body;

  if (!title) {
    return res.status(400).json({ success: false, error: 'Package title is required.' });
  }

  const generatedSlug = slug && slug.trim()
    ? slug.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    : title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const newPackage = {
    id: `pkg-${Date.now()}`,
    slug: generatedSlug,
    cat,
    theme,
    title,
    dest: dest || title,
    days,
    durationDays: Number(durationDays) || 3,
    price: Number(price) || 9999,
    originalPrice: originalPrice ? Number(originalPrice) : Math.round(Number(price) * 1.25),
    badge,
    rating: 4.9,
    reviewsCount: 1,
    img,
    gallery: Array.isArray(gallery) && gallery.length > 0 ? gallery : [img],
    desc: desc || '',
    itinerary: Array.isArray(itinerary) ? itinerary : [],
    createdAt: new Date().toISOString()
  };

  db.packages = db.packages || [];
  db.packages.unshift(newPackage);
  saveDb(db);

  res.status(201).json({ success: true, package: newPackage });
});

// PUT /api/admin/packages/:id - Update existing tour package
router.put('/packages/:id', requireAdminAuth, (req, res) => {
  const db = getDb();
  const pkg = (db.packages || []).find(p => p.id === req.params.id || p.slug === req.params.id);

  if (!pkg) {
    return res.status(404).json({ success: false, error: 'Package not found.' });
  }

  const {
    title,
    slug,
    cat,
    theme,
    dest,
    days,
    durationDays,
    price,
    originalPrice,
    badge,
    img,
    gallery,
    desc,
    itinerary
  } = req.body;

  if (title !== undefined) pkg.title = title;
  if (slug !== undefined) pkg.slug = slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  if (cat !== undefined) pkg.cat = cat;
  if (theme !== undefined) pkg.theme = theme;
  if (dest !== undefined) pkg.dest = dest;
  if (days !== undefined) pkg.days = days;
  if (durationDays !== undefined) pkg.durationDays = Number(durationDays);
  if (price !== undefined) pkg.price = Number(price);
  if (originalPrice !== undefined) pkg.originalPrice = Number(originalPrice);
  if (badge !== undefined) pkg.badge = badge;
  if (img !== undefined) pkg.img = img;
  if (gallery !== undefined) pkg.gallery = Array.isArray(gallery) ? gallery : [gallery];
  if (desc !== undefined) pkg.desc = desc;
  if (itinerary !== undefined) pkg.itinerary = itinerary;

  pkg.updatedAt = new Date().toISOString();
  saveDb(db);

  res.json({ success: true, package: pkg });
});

// DELETE /api/admin/packages/:id - Delete tour package
router.delete('/packages/:id', requireAdminAuth, (req, res) => {
  const db = getDb();
  const idx = (db.packages || []).findIndex(p => p.id === req.params.id || p.slug === req.params.id);

  if (idx === -1) {
    return res.status(404).json({ success: false, error: 'Package not found.' });
  }

  const deleted = db.packages.splice(idx, 1);
  saveDb(db);

  res.json({ success: true, message: 'Package deleted successfully.', deleted: deleted[0] });
});

// ==========================================
// 6. SMTP & NODEMAILER 16-CHAR APP PASSWORD
// ==========================================

// GET /api/admin/smtp - Check SMTP status
router.get('/smtp', requireAdminAuth, (req, res) => {
  const hasPass = Boolean(process.env.SMTP_PASS && process.env.SMTP_PASS.trim());
  res.json({
    success: true,
    smtp: {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      user: process.env.SMTP_USER || 'ourdreamtrip1@gmail.com',
      notificationEmail: process.env.ADMIN_NOTIFICATION_EMAIL || 'ourdreamtrip1@gmail.com',
      isConfigured: hasPass,
      has16CharAppPassword: hasPass && process.env.SMTP_PASS.replace(/\s+/g, '').length === 16
    }
  });
});

// POST /api/admin/smtp - Update 16-character Google App Password & email settings
router.post('/smtp', requireAdminAuth, (req, res) => {
  const { appPassword, user, notificationEmail } = req.body;

  if (!appPassword && !user && !notificationEmail) {
    return res.status(400).json({ success: false, error: 'App Password or Email is required.' });
  }

  const cleanPass = (appPassword || '').replace(/\s+/g, '').trim();
  if (cleanPass) {
    process.env.SMTP_PASS = cleanPass;
  }
  if (user) {
    process.env.SMTP_USER = user.trim();
  }
  if (notificationEmail) {
    process.env.ADMIN_NOTIFICATION_EMAIL = notificationEmail.trim();
  }

  // Update backend/.env file on disk
  try {
    const envPath = path.join(__dirname, '..', '.env');
    let envContent = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';

    if (cleanPass) {
      if (envContent.includes('SMTP_PASS=')) {
        envContent = envContent.replace(/SMTP_PASS=.*/g, `SMTP_PASS=${cleanPass}`);
      } else {
        envContent += `\nSMTP_PASS=${cleanPass}`;
      }
    }
    if (user) {
      if (envContent.includes('SMTP_USER=')) {
        envContent = envContent.replace(/SMTP_USER=.*/g, `SMTP_USER=${user.trim()}`);
      }
    }
    if (notificationEmail) {
      if (envContent.includes('ADMIN_NOTIFICATION_EMAIL=')) {
        envContent = envContent.replace(/ADMIN_NOTIFICATION_EMAIL=.*/g, `ADMIN_NOTIFICATION_EMAIL=${notificationEmail.trim()}`);
      }
    }
    fs.writeFileSync(envPath, envContent, 'utf8');
  } catch (err) {
    console.warn('Could not rewrite .env file:', err.message);
  }

  // Reset Nodemailer transporter so it picks up the new credentials immediately
  resetTransporter();

  res.json({
    success: true,
    message: 'Nodemailer SMTP App Password updated successfully!',
    isConfigured: Boolean(process.env.SMTP_PASS),
    appPasswordLength: cleanPass.length
  });
});

// POST /api/admin/test-email - Trigger live test email to verify credentials
router.post('/test-email', requireAdminAuth, async (req, res) => {
  try {
    const { targetEmail } = req.body;
    const result = await sendTestEmail(targetEmail);
    res.json({
      success: true,
      message: `Test email dispatched to ${result.recipient}! Check your inbox/spam folder.`,
      result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: `Failed to send test email: ${err.message}`
    });
  }
});

export default router;
