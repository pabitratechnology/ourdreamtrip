import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import bookingsRouter from './routes/bookings.js';
import contactsRouter from './routes/contacts.js';
import blogsRouter from './routes/blogs.js';
import galleryRouter from './routes/gallery.js';
import packagesRouter from './routes/packages.js';
import adminRouter from './routes/admin.js';
import uploadRouter from './routes/upload.js';
import { getDb } from './data/db.js';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

// Static serving for uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Request Logger
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
  });
  next();
});

// Initialize Database on startup
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
    time: new Date().toISOString()
  });
});

// Serve SEO Crawlers (robots.txt & sitemap.xml)
const frontendPublic = path.join(__dirname, '../frontend/public');
app.get('/robots.txt', (req, res) => res.sendFile(path.join(frontendPublic, 'robots.txt')));
app.get('/sitemap.xml', (req, res) => res.sendFile(path.join(frontendPublic, 'sitemap.xml')));
app.get('/sitemap.html', (req, res) => res.sendFile(path.join(frontendPublic, 'sitemap.html')));

// 404 handler for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// Start Server
app.listen(PORT, () => {
  console.log('====================================================');
  console.log(`🚀 Our Dream Trip API Backend running on http://localhost:${PORT}`);
  console.log(`📨 Email notifications configured for: ${process.env.ADMIN_NOTIFICATION_EMAIL || 'ourdreamtrip1@gmail.com'}`);
  console.log(`🔒 Admin endpoints active on /api/admin`);
  console.log('====================================================');
});
