import { FaPlus, FaTrash } from 'react-icons/fa';

export default function GalleryTab({
  gallery = [],
  galleryCatFilter,
  setGalleryCatFilter,
  setShowAddPhotoModal,
  handleDeletePhoto
}) {
  const filteredGallery = gallery.filter(
    g => galleryCatFilter === 'all' || (g.category || '').toLowerCase() === galleryCatFilter.toLowerCase()
  );

  return (
    <div className="admin-tab-content">
      <div className="admin-controls-card glass-card">
        <div className="controls-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div className="theme-pills-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {['all', 'Temples', 'Hills', 'Beaches', 'Wildlife', 'Culture'].map(cat => (
              <button
                key={cat}
                className={`theme-pill-btn ${galleryCatFilter === cat ? 'active' : ''}`}
                onClick={() => setGalleryCatFilter(cat)}
              >
                {cat === 'all' ? 'All Photos' : cat}
              </button>
            ))}
          </div>

          <button
            className="btn btn-yellow btn-sm"
            onClick={() => setShowAddPhotoModal(true)}
          >
            <FaPlus /> Add New Real Photo
          </button>
        </div>
      </div>

      <div className="grid4 gallery-admin-grid" style={{ marginTop: '1.5rem' }}>
        {filteredGallery.map(photo => (
          <div key={photo.id} className="gallery-admin-card glass-card">
            <div className="gal-admin-img-wrap">
              <img src={photo.url} alt={photo.title} />
              <span className="gal-tag-badge">{photo.tag || photo.category}</span>
            </div>
            <div className="gal-admin-body">
              <h4>{photo.title}</h4>
              <p>{photo.caption}</p>
              <div className="gal-admin-actions">
                <span className="category-pill">{photo.category}</span>
                <button
                  className="action-btn-pill del"
                  onClick={() => handleDeletePhoto(photo.id)}
                  title="Delete photo"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
