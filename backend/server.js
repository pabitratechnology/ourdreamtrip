import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

import bookingsRouter from './routes/bookings.js';
import contactsRouter from './routes/contacts.js';
import blogsRouter from './routes/blogs.js';
import galleryRouter from './routes/gallery.js';
import packagesRouter from './routes/packages.js';
import adminRouter from './routes/admin.js';
import uploadRouter from './routes/upload.js';
import { getDb } from './data/db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5005;

// Production Domain & CORS Configuration
const allowedOrigins = [
  'https://www.ourdreamtrip.com',
  'https://ourdreamtrip.com',
  'http://www.ourdreamtrip.com',
  'http://ourdreamtrip.com',
  'http://localhost:5173',
  'http://localhost:5005',
  'http://localhost:5000',
  'http://localhost:3000'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1 || origin.endsWith('.ourdreamtrip.com')) {
      return callback(null, true);
    }
    if (origin.startsWith('http://localhost:')) {
      return callback(null, true);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

// Static serving for uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Canonical Host Redirect (redirect ourdreamtrip.com to www.ourdreamtrip.com in production)
app.use((req, res, next) => {
  const host = req.headers.host;
  if (host === 'ourdreamtrip.com') {
    return res.redirect(301, `https://www.ourdreamtrip.com${req.url}`);
  }
  next();
});

// Request Logger
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
  });
  next();
});

// Initialize Database on startup with backup verification
getDb();

// API Routes
app.use('/api/bookings', bookingsRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api/blogs', blogsRouter);
app.use('/api/gallery', galleryRouter);
app.use('/api/packages', packagesRouter);
app.use('/api/admin', adminRouter);
app.use('/api/upload', uploadRouter);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'Our Dream Trip Backend API',
    domain: 'https://www.ourdreamtrip.com',
    time: new Date().toISOString()
  });
});

// Serve SEO Crawlers (robots.txt & sitemap.xml)
const frontendPublic = path.join(__dirname, '../frontend/public');
app.get('/robots.txt', (req, res) => res.sendFile(path.join(frontendPublic, 'robots.txt')));
app.get('/sitemap.xml', (req, res) => res.sendFile(path.join(frontendPublic, 'sitemap.xml')));
app.get('/sitemap.html', (req, res) => res.sendFile(path.join(frontendPublic, 'sitemap.html')));

// Production Frontend Static File Serving (Single Deploy Mode)
const frontendDist = path.join(__dirname, '../frontend/dist');
if (fs.existsSync(frontendDist)) {
  app.use(express.static(frontendDist));
  app.get('*', (req, res, next) => {
    if (req.originalUrl.startsWith('/api') || req.originalUrl.startsWith('/uploads')) {
      return next();
    }
    res.sendFile(path.join(frontendDist, 'index.html'));
  });
}

// 404 handler for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// Start Server
app.listen(PORT, () => {
  console.log('====================================================');
  console.log(`🚀 Our Dream Trip API Backend running on http://localhost:${PORT}`);
  console.log(`🌐 Configured for production domain: https://www.ourdreamtrip.com`);
  console.log(`📨 Email notifications configured for: ${process.env.ADMIN_NOTIFICATION_EMAIL || 'ourdreamtrip1@gmail.com'}`);
  console.log(`🔒 Admin endpoints active on /api/admin`);
  console.log('====================================================');
});
