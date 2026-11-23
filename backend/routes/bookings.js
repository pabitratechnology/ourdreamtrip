import express from 'express';
import { getDb, saveDb } from '../data/db.js';
import { sendBookingEmail } from '../services/emailService.js';

const router = express.Router();

// POST /api/bookings - Create new tour booking / hero enquiry
router.post('/', async (req, res) => {
  try {
    const {
      source = 'Website Booking',
      destination,
      travelDate,
      travellers = 2,
      guestName,
      guestPhone,
      guestEmail,
      packageSlug,
      packageTitle,
      estimatedCost,
      notes
    } = req.body;

    if (!guestPhone && !guestEmail) {
      return res.status(400).json({
        success: false,
        error: 'Please provide either a phone number or email address for your booking.'
      });
    }

    const db = getDb();
    const currentYear = new Date().getFullYear();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const bookingId = `ODT-${currentYear}-${randomSuffix}`;

    const newBooking = {
      id: bookingId,
      source,
      destination: destination || 'Odisha Tour',
      travelDate: travelDate || 'Flexible',
      travellers: Number(travellers) || 2,
      guestName: guestName || 'Guest',
      guestPhone: guestPhone || '',
      guestEmail: guestEmail || '',
      packageSlug: packageSlug || '',
      packageTitle: packageTitle || '',
      estimatedCost: estimatedCost ? Number(estimatedCost) : null,
      notes: notes || '',
      status: 'new',
      createdAt: new Date().toISOString()
    };

    // Save to database
    db.bookings.unshift(newBooking);
    saveDb(db);

    // Direct email dispatch to admin mailbox
    const emailResult = await sendBookingEmail(newBooking);

    return res.status(201).json({
      success: true,
      bookingId: newBooking.id,
      booking: newBooking,
      emailSent: emailResult.success,
      message: 'Your booking has been received and dispatched directly to our travel experts!'
    });
  } catch (err) {
    console.error('Error handling booking creation:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to process booking. Please contact our support team on WhatsApp.'
    });
  }
});

// GET /api/bookings/verify/:id - Verify booking reference status
router.get('/verify/:id', (req, res) => {
  const db = getDb();
  const found = db.bookings.find(b => b.id.toLowerCase() === req.params.id.toLowerCase());
  if (!found) {
    return res.status(404).json({ success: false, error: 'Booking reference not found.' });
  }
  return res.json({
    success: true,
    booking: {
      id: found.id,
      destination: found.destination,
      travelDate: found.travelDate,
      travellers: found.travellers,
      status: found.status,
      createdAt: found.createdAt
    }
  });
});

export default router;
