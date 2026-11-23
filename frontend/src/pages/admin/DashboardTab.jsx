import {
  FaCalendarCheck,
  FaRupeeSign,
  FaSuitcase,
  FaNewspaper,
  FaArrowLeft,
  FaWhatsapp
} from 'react-icons/fa';

export default function DashboardTab({
  bookings = [],
  packagesList = [],
  blogs = [],
  setActiveTab
}) {
  const pipelineValue = bookings.reduce((s, b) => s + (Number(b.estimatedCost) || 0), 0);
  const newBookingsCount = bookings.filter(b => b.status === 'new').length;
  const confirmedBookingsCount = bookings.filter(b => b.status === 'confirmed').length;
  const totalBlogViews = blogs.reduce((s, b) => s + (b.views || 0), 0);

  return (
    <div className="admin-tab-content">
      {/* KPI Metric Cards */}
      <div className="grid4 admin-kpi-grid">
        <div className="kpi-card glass-card">
          <div className="kpi-icon-wrap bg-blue"><FaCalendarCheck /></div>
          <div className="kpi-info">
            <span className="kpi-label">Total Bookings</span>
            <strong className="kpi-value">{bookings.length}</strong>
            <span className="kpi-subtext">{newBookingsCount} new enquiries</span>
          </div>
        </div>

        <div className="kpi-card glass-card">
          <div className="kpi-icon-wrap bg-green"><FaRupeeSign /></div>
          <div className="kpi-info">
            <span className="kpi-label">Pipeline Value</span>
            <strong className="kpi-value">₹{pipelineValue.toLocaleString('en-IN')}</strong>
            <span className="kpi-subtext">{confirmedBookingsCount} confirmed tours</span>
          </div>
        </div>

        <div className="kpi-card glass-card">
          <div className="kpi-icon-wrap bg-purple"><FaSuitcase /></div>
          <div className="kpi-info">
            <span className="kpi-label">Active Packages</span>
            <strong className="kpi-value">{packagesList.length}</strong>
            <span className="kpi-subtext">
              {packagesList.filter(p => p.cat === 'odisha').length} Odisha · {packagesList.filter(p => p.cat !== 'odisha').length} Domestic
            </span>
          </div>
        </div>

        <div className="kpi-card glass-card">
          <div className="kpi-icon-wrap bg-gold"><FaNewspaper /></div>
          <div className="kpi-info">
            <span className="kpi-label">Travel Blogs</span>
            <strong className="kpi-value">{blogs.length}</strong>
            <span className="kpi-subtext">{totalBlogViews} total reads</span>
          </div>
        </div>
      </div>

      {/* Recent Bookings preview */}
      <div className="admin-section-block glass-card" style={{ marginTop: '2rem' }}>
        <div className="block-head-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div>
            <h3 style={{ margin: 0 }}>Recent Tour Enquiries</h3>
            <span className="meta-sub" style={{ fontSize: '0.82rem', color: '#64748b' }}>Dispatched directly to ourdreamtrip1@gmail.com</span>
          </div>
          <button className="btn btn-yellow btn-sm" onClick={() => setActiveTab('bookings')}>
            View All Bookings <FaArrowLeft style={{ transform: 'rotate(180deg)', marginLeft: '4px' }} />
          </button>
        </div>

        <div className="admin-table-responsive" style={{ overflowX: 'auto', marginTop: '1rem' }}>
          <table className="admin-data-table">
            <thead>
              <tr>
                <th>Ref ID</th>
                <th>Source</th>
                <th>Customer</th>
                <th>Destination</th>
                <th>Travel Date</th>
                <th>Guests</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length > 0 ? (
                bookings.slice(0, 5).map(b => (
                  <tr key={b.id}>
                    <td><span className="ref-tag">#{b.id}</span></td>
                    <td><span className="source-tiny-tag">{b.source}</span></td>
                    <td>
                      <strong>{b.guestName}</strong>
                      <div className="meta-sub">{b.guestPhone}</div>
                    </td>
                    <td>{b.destination}</td>
                    <td>{b.travelDate}</td>
                    <td>{b.travellers} Person(s)</td>
                    <td>
                      <span className={`status-badge status-${b.status}`}>{b.status}</span>
                    </td>
                    <td>
                      <a
                        href={`https://wa.me/${(b.guestPhone || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${b.guestName}! We received your enquiry for ${b.destination} (Ref: #${b.id}).`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="action-icon-btn wa"
                        title="Open WhatsApp Chat"
                      >
                        <FaWhatsapp />
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="text-center" style={{ padding: '2rem' }}>
                    No enquiries recorded yet.
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
