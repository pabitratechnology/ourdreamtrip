import express from 'express';
import { getDb } from '../data/db.js';

const router = express.Router();

// GET /api/gallery - List gallery photos with optional category filter
router.get('/', (req, res) => {
  const db = getDb();
  const { category } = req.query;
  let items = db.gallery || [];

  if (category && category !== 'all') {
    items = items.filter(img => (img.category || '').toLowerCase() === category.toLowerCase());
  }

  res.json({ success: true, gallery: items });
});

export default router;
