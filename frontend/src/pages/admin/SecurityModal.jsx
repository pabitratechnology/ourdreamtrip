import { useState } from 'react';
import { FaTimes, FaShieldAlt, FaLock, FaUser, FaKey } from 'react-icons/fa';

export default function SecurityModal({
  onClose,
  onChangeCredentials,
  credLoading,
  credMsg,
  credErr
}) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeCredentials({
      currentPassword,
      newUsername: newUsername.trim() || undefined,
      newPassword: newPassword || undefined
    });
  };

  return (
    <div className="admin-modal-backdrop" onClick={onClose}>
      <div className="admin-modal-card glass-card" onClick={e => e.stopPropagation()} style={{ maxWidth: '550px', width: '92%' }}>
        <div className="admin-modal-head">
          <h3 style={{ display: 'flex', alignItems: 'center' }}>
            <FaShieldAlt style={{ color: '#ffb300', marginRight: '8px' }} /> Update Admin Security Credentials
          </h3>
          <button className="close-btn" onClick={onClose}><FaTimes /></button>
        </div>

        {credErr && <div className="admin-error-box" style={{ marginBottom: '1rem' }}>{credErr}</div>}
        {credMsg && <div className="admin-success-box" style={{ marginBottom: '1rem' }}>{credMsg}</div>}

        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-field-group">
            <label><FaLock /> Current Admin Password (Required to Verify)</label>
            <input
              type="password"
              value={currentPassword}
              onChange={e => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
              required
            />
          </div>

          <div className="form-two-col">
            <div className="form-field-group">
              <label><FaUser /> New Username (Optional)</label>
              <input
                type="text"
                value={newUsername}
                onChange={e => setNewUsername(e.target.value)}
                placeholder="Leave blank to keep current"
              />
            </div>

            <div className="form-field-group">
              <label><FaKey /> New Password (Optional)</label>
              <input
                type="password"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                placeholder="Minimum 6 characters"
                minLength={6}
              />
            </div>
          </div>

          <div className="modal-actions-row">
            <button
              type="button"
              className="btn btn-navy-outline"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="submit"
              className="btn btn-yellow"
              disabled={credLoading}
            >
              {credLoading ? 'Updating...' : 'Save New Credentials'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
