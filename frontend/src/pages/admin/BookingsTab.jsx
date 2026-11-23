import {
  FaSearch,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaTrash,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUserFriends,
  FaStickyNote
} from 'react-icons/fa';

export default function BookingsTab({
  bookings = [],
  bookingStatusFilter,
  setBookingStatusFilter,
  bookingSearch,
  setBookingSearch,
  handleUpdateBookingStatus,
  handleDeleteBooking,
  setEditingBooking
}) {
  const filteredBookings = bookings.filter(b => {
    const matchesStatus = bookingStatusFilter === 'all' || b.status === bookingStatusFilter;
    const q = bookingSearch.toLowerCase().trim();
    const matchesSearch = !q ||
      (b.guestName && b.guestName.toLowerCase().includes(q)) ||
      (b.guestPhone && b.guestPhone.includes(q)) ||
      (b.destination && b.destination.toLowerCase().includes(q)) ||
      (b.id && b.id.toLowerCase().includes(q));
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="admin-tab-content">
      {/* Controls Bar: Search & Status Filters */}
      <div className="admin-controls-card glass-card">
        <div className="controls-row" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="search-input-wrap" style={{ width: '100%' }}>
            <FaSearch />
            <input
              type="text"
              placeholder="Search by Ref ID, name, phone, or destination..."
              value={bookingSearch}
              onChange={e => setBookingSearch(e.target.value)}
            />
          </div>

          <div className="theme-pills-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {['all', 'new', 'contacted', 'confirmed', 'completed', 'cancelled'].map(st => (
              <button
                key={st}
                className={`theme-pill-btn ${bookingStatusFilter === st ? 'active' : ''}`}
                onClick={() => setBookingStatusFilter(st)}
              >
                {st === 'all' ? 'All Bookings' : st.toUpperCase()}
                {st === 'new' && bookings.filter(b => b.status === 'new').length > 0 && (
                  <span className="pill-badge">{bookings.filter(b => b.status === 'new').length}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bookings Container */}
      <div className="admin-section-block glass-card" style={{ marginTop: '1.5rem' }}>
        {/* Desktop Table View */}
        <div className="admin-table-responsive admin-desktop-only">
          <table className="admin-data-table">
            <thead>
              <tr>
                <th>Ref ID &amp; Source</th>
                <th>Customer Details</th>
                <th>Trip Details</th>
                <th>Date &amp; Pax</th>
                <th>Status</th>
                <th>Notes &amp; Email Dispatch</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.length > 0 ? (
                filteredBookings.map(b => {
                  const cleanPhone = (b.guestPhone || '').replace(/[^0-9]/g, '');
                  return (
                    <tr key={b.id}>
                      <td>
                        <span className="ref-tag">#{b.id}</span>
                        <div className="source-pill">{b.source}</div>
                        <small className="meta-sub">{new Date(b.createdAt).toLocaleDateString('en-IN')}</small>
                      </td>
                      <td>
                        <strong>{b.guestName}</strong>
                        <div className="meta-sub"><FaPhoneAlt /> {b.guestPhone}</div>
                        {b.guestEmail && <div className="meta-sub"><FaEnvelope /> {b.guestEmail}</div>}
                      </td>
                      <td>
                        <strong>{b.destination}</strong>
                        {b.packageTitle && <div className="meta-sub">{b.packageTitle}</div>}
                        {b.estimatedCost && (
                          <div className="price-tag-sub">Est: ₹{Number(b.estimatedCost).toLocaleString('en-IN')}</div>
                        )}
                      </td>
                      <td>
                        <strong>{b.travelDate}</strong>
                        <div className="meta-sub">{b.travellers} Guests</div>
                      </td>
                      <td>
                        <select
                          className={`status-select-badge status-${b.status}`}
                          value={b.status}
                          onChange={e => handleUpdateBookingStatus(b.id, e.target.value)}
                        >
                          <option value="new">NEW</option>
                          <option value="contacted">CONTACTED</option>
                          <option value="confirmed">CONFIRMED</option>
                          <option value="completed">COMPLETED</option>
                          <option value="cancelled">CANCELLED</option>
                        </select>
                      </td>
                      <td>
                        <span className="email-status-pill">
                          📧 Sent to ourdreamtrip1@gmail.com
                        </span>
                        <div className="notes-box-wrap">
                          <button
                            className="notes-preview-btn"
                            onClick={() => setEditingBooking(b)}
                            title="Add/Edit Private Follow-up Notes"
                          >
                            {b.notes ? `📝 "${b.notes.slice(0, 35)}..."` : '+ Add Staff Notes'}
                          </button>
                        </div>
                      </td>
                      <td>
                        <div className="action-buttons-stack">
                          {cleanPhone && (
                            <a
                              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hello ${b.guestName}! We received your tour booking request for ${b.destination} (Ref #${b.id}). How may our tour executive assist you today?`)}`}
                              target="_blank"
                              rel="noreferrer"
                              className="action-btn-pill wa"
                              title="Chat with Traveler on WhatsApp"
                            >
                              <FaWhatsapp /> WhatsApp
                            </a>
                          )}
                          <button
                            className="action-btn-pill del"
                            onClick={() => handleDeleteBooking(b.id)}
                            title="Delete Booking"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={7} className="text-center" style={{ padding: '3rem' }}>
                    No bookings match your current filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Responsive Cards View */}
        <div className="admin-mobile-only admin-mobile-cards-list">
          {filteredBookings.length > 0 ? (
            filteredBookings.map(b => {
              const cleanPhone = (b.guestPhone || '').replace(/[^0-9]/g, '');
              return (
                <div key={b.id} className="admin-mobile-booking-card">
                  <div className="card-top-bar">
                    <span className="ref-tag">#{b.id}</span>
                    <span className="source-tiny-tag">{b.source}</span>
                    <select
                      className={`status-select-badge status-${b.status}`}
                      value={b.status}
                      onChange={e => handleUpdateBookingStatus(b.id, e.target.value)}
                    >
                      <option value="new">NEW</option>
                      <option value="contacted">CONTACTED</option>
                      <option value="confirmed">CONFIRMED</option>
                      <option value="completed">COMPLETED</option>
                      <option value="cancelled">CANCELLED</option>
                    </select>
                  </div>

                  <div className="card-customer-info">
                    <h4 style={{ margin: '0.4rem 0 0.2rem', fontSize: '1.05rem', color: '#0f172a' }}>{b.guestName}</h4>
                    <div className="meta-sub" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', color: '#475569' }}>
                      <span><FaPhoneAlt /> {b.guestPhone}</span>
                      {b.guestEmail && <span><FaEnvelope /> {b.guestEmail}</span>}
                    </div>
                  </div>

                  <div className="card-trip-info" style={{ marginTop: '0.6rem', padding: '0.6rem', background: '#f8fafc', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, color: '#06245F' }}>
                      <FaMapMarkerAlt style={{ color: '#ffb300' }} /> {b.destination}
                    </div>
                    {b.packageTitle && <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '2px' }}>{b.packageTitle}</div>}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem', fontSize: '0.85rem' }}>
                      <span><FaCalendarAlt style={{ color: '#0284c7' }} /> {b.travelDate}</span>
                      <span><FaUserFriends style={{ color: '#0284c7' }} /> {b.travellers} Guests</span>
                      {b.estimatedCost && <strong>₹{Number(b.estimatedCost).toLocaleString('en-IN')}</strong>}
                    </div>
                  </div>

                  <div style={{ marginTop: '0.6rem', fontSize: '0.8rem', color: '#059669', background: '#ecfdf5', padding: '0.4rem 0.6rem', borderRadius: '6px' }}>
                    📧 Sent to ourdreamtrip1@gmail.com
                  </div>

                  <div style={{ marginTop: '0.6rem' }}>
                    <button
                      className="notes-preview-btn"
                      onClick={() => setEditingBooking(b)}
                      style={{ width: '100%', textAlign: 'left', padding: '0.5rem 0.75rem' }}
                    >
                      <FaStickyNote style={{ marginRight: '6px', color: '#d97706' }} />
                      {b.notes ? `"${b.notes.slice(0, 40)}..."` : '+ Add Staff Notes'}
                    </button>
                  </div>

                  <div className="card-actions-bar" style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
                    {cleanPhone && (
                      <a
                        href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hello ${b.guestName}! We received your tour booking request for ${b.destination} (Ref #${b.id}). How may our tour executive assist you today?`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm btn-green"
                        style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                      >
                        <FaWhatsapp /> WhatsApp Chat
                      </a>
                    )}
                    <button
                      className="btn btn-sm btn-del"
                      onClick={() => handleDeleteBooking(b.id)}
                      title="Delete Booking"
                      style={{ background: '#fee2e2', color: '#dc2626', border: '1px solid #fecaca', padding: '0.5rem 0.8rem', borderRadius: '6px' }}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center" style={{ padding: '2.5rem', color: '#64748b' }}>
              No bookings match your current filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
