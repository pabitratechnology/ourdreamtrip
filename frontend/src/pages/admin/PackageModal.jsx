import { useState } from 'react';
import { FaTimes, FaUpload } from 'react-icons/fa';
import TipTapEditor from '../../components/TipTapEditor.jsx';

export default function PackageModal({
  pkg,
  isEditing = false,
  onClose,
  onSave,
  uploadImageFile
}) {
  const [formData, setFormData] = useState(pkg || {
    title: '',
    slug: '',
    cat: 'odisha',
    theme: 'Heritage & Nature',
    dest: '',
    days: '3 Days / 2 Nights',
    durationDays: 3,
    price: 9999,
    originalPrice: 12999,
    badge: 'Popular',
    img: '/images/pkg-golden-triangle.jpg',
    gallery: ['/images/pkg-golden-triangle.jpg'],
    overview: '<p>Experience the finest sights, authentic Odia cuisine, and personalized temple darshan with our sanitized chauffeur fleet.</p>',
    highlights: 'VIP Temple Darshan, AC Chauffeur Cab, Heritage Monuments, 3-Star Resorts'
  });
  const [uploadingImg, setUploadingImg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="admin-modal-backdrop" onClick={onClose}>
      <div className="admin-modal-card glass-card" onClick={e => e.stopPropagation()} style={{ maxWidth: '850px', width: '92%' }}>
        <div className="admin-modal-head">
          <h3>{isEditing ? `Edit Package: ${formData.title}` : 'Create New Tour Package'}</h3>
          <button className="close-btn" onClick={onClose}><FaTimes /></button>
        </div>

        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-field-group">
            <label>Package Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={e => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g. Daringbadi & Mandasaru Valley Eco Escape"
              required
            />
          </div>

          <div className="grid2 form-two-col">
            <div className="form-field-group">
              <label>Circuit Category</label>
              <select
                value={formData.cat}
                onChange={e => setFormData({ ...formData, cat: e.target.value })}
              >
                <option value="odisha">Odisha Tour Packages</option>
                <option value="domestic">Incredible India Domestic</option>
              </select>
            </div>

            <div className="form-field-group">
              <label>Theme / Tag</label>
              <input
                type="text"
                value={formData.theme}
                onChange={e => setFormData({ ...formData, theme: e.target.value })}
                placeholder="e.g. Hill Station & Coffee Gardens"
              />
            </div>
          </div>

          <div className="grid2 form-two-col">
            <div className="form-field-group">
              <label>Destinations Covered *</label>
              <input
                type="text"
                value={formData.dest}
                onChange={e => setFormData({ ...formData, dest: e.target.value })}
                placeholder="e.g. Daringbadi, Mandasaru, Phulbani"
                required
              />
            </div>

            <div className="form-field-group">
              <label>Duration String</label>
              <input
                type="text"
                value={formData.days}
                onChange={e => setFormData({ ...formData, days: e.target.value })}
                placeholder="e.g. 4 Days / 3 Nights"
              />
            </div>
          </div>

          <div className="grid2 form-two-col">
            <div className="form-field-group">
              <label>Discounted Price (₹ per person) *</label>
              <input
                type="number"
                value={formData.price}
                onChange={e => setFormData({ ...formData, price: Number(e.target.value) })}
                required
              />
            </div>

            <div className="form-field-group">
              <label>Original Strike Price (₹)</label>
              <input
                type="number"
                value={formData.originalPrice || ''}
                onChange={e => setFormData({ ...formData, originalPrice: e.target.value ? Number(e.target.value) : '' })}
                placeholder="e.g. 15999"
              />
            </div>
          </div>

          {/* Device Image Upload for Package Cover & Real Gallery */}
          <div className="form-field-group">
            <label>Real Destination Hero Photo (Upload from Mobile or Desktop)</label>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <input
                type="file"
                accept="image/*"
                id="package-modal-img-input"
                style={{ display: 'none' }}
                onChange={async (e) => {
                  const file = e.target.files && e.target.files[0];
                  if (!file) return;
                  setUploadingImg(true);
                  const url = await uploadImageFile(file);
                  if (url) {
                    setFormData(prev => ({
                      ...prev,
                      img: url,
                      gallery: [url, ...(prev.gallery || []).filter(g => g !== url)]
                    }));
                  }
                  setUploadingImg(false);
                }}
              />
              <button
                type="button"
                className="btn btn-navy-outline btn-sm"
                onClick={() => document.getElementById('package-modal-img-input')?.click()}
                disabled={uploadingImg}
              >
                <FaUpload /> {uploadingImg ? 'Uploading...' : 'Upload Real Destination Image'}
              </button>
              <input
                type="text"
                value={formData.img}
                onChange={e => setFormData({ ...formData, img: e.target.value })}
                placeholder="/images/... or /uploads/..."
                style={{ flex: 1, minWidth: '180px' }}
              />
            </div>
            {formData.img && (
              <div style={{ marginTop: '0.5rem', width: '140px', height: '85px', borderRadius: '6px', overflow: 'hidden' }}>
                <img src={formData.img} alt="Package Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}
          </div>

          {/* Highlights */}
          <div className="form-field-group">
            <label>Package Key Highlights (comma-separated)</label>
            <input
              type="text"
              value={formData.highlights || ''}
              onChange={e => setFormData({ ...formData, highlights: e.target.value })}
              placeholder="e.g. VIP Temple Darshan, 24/7 Chauffeur Cab, Heritage Resort Stay"
            />
          </div>

          {/* Overview TipTap Editor */}
          <div className="form-field-group">
            <label>Comprehensive Itinerary &amp; Overview (TipTap Editor)</label>
            <TipTapEditor
              content={formData.overview || formData.desc || ''}
              onChange={(html) => setFormData(prev => ({ ...prev, overview: html, desc: html }))}
            />
          </div>

          <div className="modal-actions-row">
            <button type="button" className="btn btn-navy-outline" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-yellow">
              {isEditing ? 'Save Changes' : 'Create Package'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
