import { FaWhatsapp, FaTrash } from 'react-icons/fa';

export default function ContactsTab({
  contacts = [],
  handleToggleContactStatus,
  handleDeleteContact
}) {
  return (
    <div className="admin-tab-content">
      <div className="admin-controls-card glass-card">
        <div className="controls-row">
          <div>
            <h3 style={{ margin: 0 }}>Customer Messages &amp; Enquiries ({contacts.length})</h3>
            <span className="meta-sub" style={{ fontSize: '0.84rem', color: '#64748b' }}>
              Submitted directly via the public Contact Us page
            </span>
          </div>
        </div>
      </div>

      <div className="admin-section-block glass-card" style={{ marginTop: '1.5rem' }}>
        <div className="admin-table-responsive">
          <table className="admin-data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Sender</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map(c => (
                  <tr key={c.id}>
                    <td>{new Date(c.createdAt).toLocaleDateString('en-IN')}</td>
                    <td>
                      <strong>{c.name}</strong>
                      <div className="meta-sub">{c.phone}</div>
                      <div className="meta-sub">{c.email}</div>
                    </td>
                    <td><strong>{c.subject}</strong></td>
                    <td>
                      <div className="contact-message-body">{c.message}</div>
                    </td>
                    <td>
                      <button
                        className={`status-badge-btn ${c.status}`}
                        onClick={() => handleToggleContactStatus(c.id, c.status)}
                      >
                        {c.status === 'replied' ? '✔ Replied' : '● New'}
                      </button>
                    </td>
                    <td>
                      <div className="action-buttons-stack">
                        <a
                          href={`https://wa.me/${(c.phone || '').replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noreferrer"
                          className="action-icon-btn wa"
                          title="Reply on WhatsApp"
                        >
                          <FaWhatsapp />
                        </a>
                        {handleDeleteContact && (
                          <button
                            className="action-btn-pill del"
                            onClick={() => handleDeleteContact(c.id)}
                            title="Delete Contact Inquiry"
                          >
                            <FaTrash />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center" style={{ padding: '3rem', color: '#64748b' }}>
                    No contact messages found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
