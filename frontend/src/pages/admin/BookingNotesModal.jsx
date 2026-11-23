import { FaTimes, FaSave } from 'react-icons/fa';

export default function BookingNotesModal({
  booking,
  onClose,
  onSave
}) {
  if (!booking) return null;

  return (
    <div className="admin-modal-backdrop" onClick={onClose}>
      <div className="admin-modal-card glass-card" onClick={e => e.stopPropagation()} style={{ maxWidth: '600px', width: '92%' }}>
        <div className="admin-modal-head">
          <h3>Staff Notes for Booking #{booking.id}</h3>
          <button className="close-btn" onClick={onClose}><FaTimes /></button>
        </div>

        <div className="booking-modal-summary" style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '8px', marginBottom: '1rem', border: '1px solid #e2e8f0' }}>
          <strong>{booking.guestName}</strong> ({booking.guestPhone}) · <span>{booking.destination}</span>
        </div>

        <div className="form-field-group">
          <label>Private Internal Notes &amp; Follow-up Log</label>
          <textarea
            rows={5}
            defaultValue={booking.notes || ''}
            id="edit-booking-notes-input"
            placeholder="e.g. Spoke on phone. Customer confirmed 2 adults + 1 child. Advance payment received. Assigned driver Manoranjan with Innova Crysta."
            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1' }}
          />
        </div>

        <div className="modal-actions-row">
          <button type="button" className="btn btn-navy-outline" onClick={onClose}>
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-yellow"
            onClick={() => {
              const val = document.getElementById('edit-booking-notes-input')?.value || '';
              onSave(booking.id, val);
            }}
          >
            <FaSave /> Save Notes
          </button>
        </div>
      </div>
    </div>
  );
}
