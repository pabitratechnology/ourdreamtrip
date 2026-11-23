import { Link } from 'react-router-dom';
import { FaPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';

export default function PackagesTab({
  packagesList = [],
  setShowAddPackageModal,
  setEditingPackage,
  handleDeletePackage
}) {
  return (
    <div className="admin-tab-content">
      <div className="admin-controls-card glass-card">
        <div className="controls-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h3 style={{ margin: 0 }}>All {packagesList.length} Active Tour Packages</h3>
            <span className="meta-sub" style={{ fontSize: '0.84rem', color: '#64748b' }}>
              Real destination photos, customizable tariffs &amp; TipTap WYSIWYG itinerary editor
            </span>
          </div>
          <button
            className="btn btn-yellow btn-sm"
            onClick={() => setShowAddPackageModal(true)}
          >
            <FaPlus /> Add New Tour Package
          </button>
        </div>
      </div>

      <div className="grid3 packages-admin-grid" style={{ marginTop: '1.5rem' }}>
        {packagesList.map(pkg => (
          <div key={pkg.id || pkg.slug} className="package-admin-card glass-card">
            <div className="pkg-admin-img">
              <img src={pkg.img} alt={pkg.title} />
              <span className="pkg-badge">{pkg.badge || 'Verified'}</span>
              <span className="pkg-photo-count">{pkg.gallery?.length || 1} Real Photos</span>
            </div>

            <div className="pkg-admin-body">
              <span className="meta-sub">{pkg.cat === 'odisha' ? 'Odisha Tour' : 'India Domestic'} · {pkg.days}</span>
              <h4 className="pkg-admin-title">{pkg.title}</h4>
              <p className="pkg-admin-route">{pkg.dest}</p>

              <div className="pkg-admin-pricing">
                <div>
                  <small>Price per person</small>
                  <strong>₹{pkg.price ? pkg.price.toLocaleString('en-IN') : '9,999'}</strong>
                </div>
                {pkg.originalPrice && (
                  <div>
                    <small>Original</small>
                    <span style={{ textDecoration: 'line-through', color: '#94a3b8' }}>
                      ₹{pkg.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                )}
              </div>

              <div className="pkg-admin-footer">
                <Link to={`/${pkg.cat}-tour-packages/${pkg.slug}`} target="_blank" className="btn btn-navy-outline btn-sm">
                  <FaEye /> Preview
                </Link>
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <button
                    className="btn btn-yellow btn-sm"
                    onClick={() => setEditingPackage({
                      ...pkg,
                      gallery: pkg.gallery || [pkg.img],
                      overview: pkg.overview || pkg.desc || '',
                      highlights: Array.isArray(pkg.highlights) ? pkg.highlights.join(', ') : (pkg.highlights || '')
                    })}
                    title="Edit Package & Tariffs"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    className="action-btn-pill del"
                    onClick={() => handleDeletePackage(pkg.id || pkg.slug)}
                    title="Delete Package"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
