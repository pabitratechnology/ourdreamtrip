import express from 'express';
import { getDb, saveDb } from '../data/db.js';
import { sendContactEmail } from '../services/emailService.js';

const router = express.Router();

// POST /api/contacts - Submit contact enquiry
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || (!email && !phone)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide your name and contact details (email or phone).'
      });
    }

    const db = getDb();
    const contactItem = {
      id: `cnt-${Date.now()}`,
      name,
      email: email || '',
      phone: phone || '',
      subject: subject || 'General Tour Inquiry',
      message: message || '',
      status: 'new',
      createdAt: new Date().toISOString()
    };

    db.contacts.unshift(contactItem);
    saveDb(db);

    const emailResult = await sendContactEmail(contactItem);

    return res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you shortly.',
      contactId: contactItem.id,
      emailSent: emailResult.success
    });
  } catch (err) {
    console.error('Error handling contact form:', err);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

export default router;
