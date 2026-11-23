import { useState } from 'react';
import { FaTimes, FaCamera } from 'react-icons/fa';

export default function PhotoModal({
  onClose,
  onSave,
  uploadImageFile
}) {
  const [newPhoto, setNewPhoto] = useState({
    title: '',
    url: '',
    category: 'Temples',
    tag: 'Monument',
    caption: ''
  });
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(newPhoto);
  };

  return (
    <div className="admin-modal-backdrop" onClick={onClose}>
      <div className="admin-modal-card glass-card" onClick={e => e.stopPropagation()} style={{ maxWidth: '600px', width: '92%' }}>
        <div className="admin-modal-head">
          <h3>Add Real Destination Photo to Gallery</h3>
          <button className="close-btn" onClick={onClose}><FaTimes /></button>
        </div>

        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-field-group">
            <label>Photo Title *</label>
            <input
              type="text"
              value={newPhoto.title}
              onChange={e => setNewPhoto({ ...newPhoto, title: e.target.value })}
              placeholder="e.g. Konark Sun Temple Chariot Wheel"
              required
            />
          </div>

          {/* Upload image from phone or PC */}
          <div className="form-field-group">
            <label>Upload Image from Mobile / Desktop *</label>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <input
                type="file"
                accept="image/*"
                id="photo-modal-file-input"
                style={{ display: 'none' }}
                onChange={async (e) => {
                  const file = e.target.files && e.target.files[0];
                  if (!file) return;
                  setUploadingPhoto(true);
                  const url = await uploadImageFile(file);
                  if (url) setNewPhoto(prev => ({ ...prev, url, title: prev.title || file.name.split('.')[0] }));
                  setUploadingPhoto(false);
                }}
              />
              <button
                type="button"
                className="btn btn-navy-outline btn-sm"
                onClick={() => document.getElementById('photo-modal-file-input')?.click()}
                disabled={uploadingPhoto}
              >
                <FaCamera /> {uploadingPhoto ? 'Uploading...' : 'Choose Device Photo'}
              </button>
              <input
                type="text"
                value={newPhoto.url}
                onChange={e => setNewPhoto({ ...newPhoto, url: e.target.value })}
                placeholder="/uploads/... or https://..."
                style={{ flex: 1, minWidth: '180px' }}
                required
              />
            </div>
            {newPhoto.url && (
              <div style={{ marginTop: '0.5rem', width: '130px', height: '85px', borderRadius: '6px', overflow: 'hidden' }}>
                <img src={newPhoto.url} alt="Photo Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}
          </div>

          <div className="grid2 form-two-col">
            <div className="form-field-group">
              <label>Category</label>
              <select
                value={newPhoto.category}
                onChange={e => setNewPhoto({ ...newPhoto, category: e.target.value })}
              >
                <option value="Temples">Temples &amp; Heritage</option>
                <option value="Hills">Hills &amp; Valleys</option>
                <option value="Beaches">Beaches &amp; Lakes</option>
                <option value="Wildlife">Wildlife &amp; Safari</option>
                <option value="Culture">Culture &amp; Art</option>
              </select>
            </div>

            <div className="form-field-group">
              <label>Tag Badge</label>
              <input
                type="text"
                value={newPhoto.tag}
                onChange={e => setNewPhoto({ ...newPhoto, tag: e.target.value })}
                placeholder="e.g. UNESCO Site"
              />
            </div>
          </div>

          <div className="form-field-group">
            <label>Caption / Location Description</label>
            <input
              type="text"
              value={newPhoto.caption}
              onChange={e => setNewPhoto({ ...newPhoto, caption: e.target.value })}
              placeholder="e.g. 13th century UNESCO Sun Chariot..."
            />
          </div>

          <div className="modal-actions-row">
            <button type="button" className="btn btn-navy-outline" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-yellow">
              Add to Gallery
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
