import express from 'express';
import { getDb, saveDb } from '../data/db.js';

const router = express.Router();

// GET /api/blogs - List all published blogs
router.get('/', (req, res) => {
  const db = getDb();
  const published = (db.blogs || []).filter(b => b.status === 'published');
  res.json({ success: true, blogs: published });
});

// GET /api/blogs/:slug - Get blog post by slug
router.get('/:slug', (req, res) => {
  const db = getDb();
  const blog = (db.blogs || []).find(b => b.slug === req.params.slug);
  if (!blog) {
    return res.status(404).json({ success: false, error: 'Blog post not found.' });
  }

  // Increment views
  blog.views = (blog.views || 0) + 1;
  saveDb(db);

  res.json({ success: true, blog });
});

export default router;
