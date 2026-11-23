import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logsDir = path.join(__dirname, '..', 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}
const logFile = path.join(logsDir, 'email-notifications.log');

// Log email event to file
function logEmailToFile(type, details) {
  const timestamp = new Date().toISOString();
  const logEntry = `\n[${timestamp}] [${type.toUpperCase()}]\n${JSON.stringify(details, null, 2)}\n----------------------------------------\n`;
  try {
    fs.appendFileSync(logFile, logEntry, 'utf8');
  } catch (err) {
    console.error('Failed to write email log:', err);
  }
}

// Create Nodemailer Transporter
let transporter = null;

export function resetTransporter() {
  transporter = null;
}

function getTransporter() {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = (process.env.SMTP_USER || 'ourdreamtrip1@gmail.com').trim();
  const pass = (process.env.SMTP_PASS || '').replace(/\s+/g, '').trim(); // Remove all spaces from 16-char app password!

  if (user && pass) {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    });
  } else {
    // Development fallback mock transporter
    transporter = {
      sendMail: async (mailOptions) => {
        console.log('----------------------------------------------------');
        console.log('📧 [MOCK EMAIL DISPATCHED TO MAILBOX]');
        console.log(`To: ${mailOptions.to}`);
        console.log(`Subject: ${mailOptions.subject}`);
        console.log('----------------------------------------------------');
        return { messageId: `mock-${Date.now()}` };
      }
    };
  }
  return transporter;
}

/**
 * Send Test Email to verify SMTP configuration
 */
export async function sendTestEmail(targetEmail) {
  const recipient = targetEmail || process.env.ADMIN_NOTIFICATION_EMAIL || 'ourdreamtrip1@gmail.com';
  const transport = getTransporter();

  const mailOptions = {
    from: `"Our Dream Trip Alerts" <${process.env.SMTP_USER || 'ourdreamtrip1@gmail.com'}>`,
    to: recipient,
    subject: `✅ [SMTP TEST] Email Notification System Connected Successfully!`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; background: #f8fafc; border-radius: 12px; color: #1e293b;">
        <h2 style="color: #06245F;">🎉 Nodemailer SMTP Configuration Verified!</h2>
        <p>This is a live test notification from <strong>Our Dream Trip</strong> booking server.</p>
        <p>Your 16-character Google App Password is properly configured and operational.</p>
        <div style="background: #e0f2fe; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #0284c7; margin: 16px 0;">
          <strong>Target Inbox:</strong> ${recipient}<br/>
          <strong>Dispatched At:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)
        </div>
        <p style="font-size: 13px; color: #64748b;">All future tour enquiries and customer bookings will now arrive directly here in real-time.</p>
      </div>
    `
  };

  try {
    const info = await transport.sendMail(mailOptions);
    logEmailToFile('test_email', { recipient, messageId: info.messageId });
    return { success: true, messageId: info.messageId, recipient };
  } catch (err) {
    logEmailToFile('test_email_error', { recipient, error: err.message });
    throw err;
  }
}

/**
 * Send Tour Booking / Hero Quick Enquiry Notification Email
 */
export async function sendBookingEmail(booking) {
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || 'ourdreamtrip1@gmail.com';
  const cleanPhone = (booking.guestPhone || '').replace(/[^0-9]/g, '');
  const waLink = cleanPhone ? `https://wa.me/${cleanPhone.startsWith('91') ? cleanPhone : '91' + cleanPhone}` : null;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 24px; }
        .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
        .header { background: linear-gradient(135deg, #0A1E42 0%, #173874 100%); padding: 28px; color: #ffffff; text-align: center; }
        .header h1 { margin: 0 0 6px; font-size: 22px; font-weight: 800; color: #F59E0B; }
        .header p { margin: 0; font-size: 14px; color: #cbd5e1; }
        .badge { display: inline-block; background: #F59E0B; color: #ffffff; font-weight: 700; font-size: 12px; padding: 4px 12px; border-radius: 999px; margin-top: 10px; }
        .content { padding: 28px; }
        .info-table { width: 100%; border-collapse: collapse; margin-top: 16px; margin-bottom: 24px; }
        .info-table th, .info-table td { padding: 12px 14px; text-align: left; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
        .info-table th { color: #64748b; font-weight: 600; width: 35%; background: #f8fafc; }
        .info-table td { color: #0f172a; font-weight: 700; }
        .highlight-row td { color: #0284c7 !important; font-size: 16px; }
        .wa-btn { display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 14px; margin-right: 8px; }
        .call-btn { display: inline-block; background: #0A1E42; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 14px; }
        .footer { background: #f8fafc; padding: 16px 28px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h1>🚨 New Tour Booking Received!</h1>
          <p>Our Dream Trip - Holiday Booking Desk</p>
          <span class="badge">Reference ID: ${booking.id}</span>
        </div>

        <div class="content">
          <p style="font-size: 15px; line-height: 1.5; color: #334155;">
            A new traveler has submitted a booking / trip enquiry through the <strong>${booking.source || 'Website'}</strong>.
          </p>

          <table class="info-table">
            <tr>
              <th>Booking ID</th>
              <td>${booking.id}</td>
            </tr>
            <tr class="highlight-row">
              <th>Destination</th>
              <td>${booking.destination || 'Not Specified'}</td>
            </tr>
            <tr>
              <th>Travel Date</th>
              <td>${booking.travelDate || 'Flexible'}</td>
            </tr>
            <tr>
              <th>Travellers / Guests</th>
              <td>${booking.travellers || 2} Person(s)</td>
            </tr>
            <tr>
              <th>Customer Name</th>
              <td>${booking.guestName || 'Guest'}</td>
            </tr>
            <tr>
              <th>WhatsApp / Mobile</th>
              <td>${booking.guestPhone || 'Direct Web Inquiry'}</td>
            </tr>
            <tr>
              <th>Customer Email</th>
              <td>${booking.guestEmail || 'Not Provided'}</td>
            </tr>
            ${booking.packageTitle ? `
            <tr>
              <th>Package Selected</th>
              <td>${booking.packageTitle}</td>
            </tr>
            ` : ''}
            ${booking.estimatedCost ? `
            <tr>
              <th>Estimated Total</th>
              <td style="color: #059669; font-size: 16px;">₹${Number(booking.estimatedCost).toLocaleString('en-IN')}</td>
            </tr>
            ` : ''}
            ${booking.notes ? `
            <tr>
              <th>Special Message / Notes</th>
              <td>${booking.notes}</td>
            </tr>
            ` : ''}
            <tr>
              <th>Submission Time</th>
              <td>${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</td>
            </tr>
          </table>

          <div style="text-align: center; margin-top: 24px;">
            ${waLink ? `<a href="${waLink}" class="wa-btn" target="_blank">📱 Chat on WhatsApp</a>` : ''}
            <a href="tel:${booking.guestPhone}" class="call-btn">📞 Call Customer</a>
          </div>
        </div>

        <div class="footer">
          Our Dream Trip (ourdreamtrip.com) · Plot No. 42, Jayadev Vihar, Bhubaneswar, Odisha<br>
          Automated Booking Dispatcher · 24x7 Customer Support Desk
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: `"Our Dream Trip Desk" <${process.env.SMTP_USER || 'ourdreamtrip1@gmail.com'}>`,
    to: adminEmail,
    subject: `🚨 [NEW TOUR BOOKING] ${booking.id} - ${booking.destination} (${booking.guestName || booking.guestPhone || 'Guest'})`,
    html: htmlContent
  };

  try {
    const t = getTransporter();
    const info = await t.sendMail(mailOptions);
    logEmailToFile('booking_success', { bookingId: booking.id, to: adminEmail, info });
    return { success: true, messageId: info.messageId };
  } catch (err) {
    console.error('Error sending booking email:', err);
    logEmailToFile('booking_error', { bookingId: booking.id, error: err.message });
    return { success: false, error: err.message };
  }
}

/**
 * Send Contact Us Inquiry Email
 */
export async function sendContactEmail(contact) {
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || 'ourdreamtrip1@gmail.com';

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; padding: 24px; color: #1e293b; }
        .card { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
        .header { background: #0A1E42; padding: 24px; color: #ffffff; text-align: center; }
        .content { padding: 28px; }
        .msg-box { background: #f1f5f9; padding: 16px; border-radius: 8px; border-left: 4px solid #F59E0B; margin: 16px 0; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h2 style="margin:0; color:#F59E0B;">📩 New Contact Inquiry Received</h2>
          <p style="margin:4px 0 0; font-size:13px; color:#cbd5e1;">Reference: ${contact.id}</p>
        </div>
        <div class="content">
          <p><strong>From:</strong> ${contact.name} (${contact.email})</p>
          <p><strong>Phone:</strong> ${contact.phone || 'N/A'}</p>
          <p><strong>Subject:</strong> ${contact.subject || 'General Inquiry'}</p>
          <div class="msg-box">
            <strong>Message:</strong><br>
            ${contact.message}
          </div>
          <p style="font-size:12px; color:#64748b;">Received at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: `"Our Dream Trip Contact" <${process.env.SMTP_USER || 'ourdreamtrip1@gmail.com'}>`,
    to: adminEmail,
    subject: `📩 [CONTACT MESSAGE] ${contact.subject || 'Inquiry'} from ${contact.name}`,
    html: htmlContent
  };

  try {
    const t = getTransporter();
    const info = await t.sendMail(mailOptions);
    logEmailToFile('contact_success', { contactId: contact.id, to: adminEmail, info });
    return { success: true, messageId: info.messageId };
  } catch (err) {
    console.error('Error sending contact email:', err);
    logEmailToFile('contact_error', { contactId: contact.id, error: err.message });
    return { success: false, error: err.message };
  }
}
