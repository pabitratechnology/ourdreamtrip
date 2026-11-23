import { useState } from 'react';
import { FaTimes, FaUpload } from 'react-icons/fa';
import TipTapEditor from '../../components/TipTapEditor.jsx';

export default function BlogModal({
  blog,
  isEditing = false,
  onClose,
  onSave,
  uploadImageFile
}) {
  const [formData, setFormData] = useState(blog || {
    title: '',
    slug: '',
    category: 'Travel Guide',
    excerpt: '',
    content: '<h2>Introduction</h2><p>Write your detailed travel guide with authentic insights...</p>',
    coverImage: '/images/pkg-golden-triangle.jpg',
    author: 'Our Dream Trip Editor',
    tags: 'Odisha, Tour, Travel'
  });
  const [uploadingCover, setUploadingCover] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="admin-modal-backdrop" onClick={onClose}>
      <div className="admin-modal-card glass-card" onClick={e => e.stopPropagation()} style={{ maxWidth: '800px', width: '92%' }}>
        <div className="admin-modal-head">
          <h3>{isEditing ? `Edit Article: ${formData.title}` : 'Write New Travel Article / Guide'}</h3>
          <button className="close-btn" onClick={onClose}><FaTimes /></button>
        </div>

        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-field-group">
            <label>Article Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={e => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g. 5 Best Sunset Points in Puri"
              required
            />
          </div>

          <div className="grid2 form-two-col">
            <div className="form-field-group">
              <label>Category</label>
              <select
                value={formData.category}
                onChange={e => setFormData({ ...formData, category: e.target.value })}
              >
                <option value="Travel Guide">Travel Guide</option>
                <option value="Nature & Hills">Nature &amp; Hills</option>
                <option value="Spiritual & Heritage">Spiritual &amp; Heritage</option>
                <option value="Wildlife & Safari">Wildlife &amp; Safari</option>
              </select>
            </div>

            <div className="form-field-group">
              <label>Author Name</label>
              <input
                type="text"
                value={formData.author}
                onChange={e => setFormData({ ...formData, author: e.target.value })}
              />
            </div>
          </div>

          {/* Cover Photo Upload from Desktop/Mobile */}
          <div className="form-field-group">
            <label>Cover Photo (Upload from Mobile or Desktop device)</label>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <input
                type="file"
                accept="image/*"
                id="blog-modal-cover-input"
                style={{ display: 'none' }}
                onChange={async (e) => {
                  const file = e.target.files && e.target.files[0];
                  if (!file) return;
                  setUploadingCover(true);
                  const url = await uploadImageFile(file);
                  if (url) setFormData(prev => ({ ...prev, coverImage: url }));
                  setUploadingCover(false);
                }}
              />
              <button
                type="button"
                className="btn btn-navy-outline btn-sm"
                onClick={() => document.getElementById('blog-modal-cover-input')?.click()}
                disabled={uploadingCover}
              >
                <FaUpload /> {uploadingCover ? 'Uploading...' : 'Upload Device Image'}
              </button>
              <input
                type="text"
                value={formData.coverImage}
                onChange={e => setFormData({ ...formData, coverImage: e.target.value })}
                placeholder="/images/pkg-golden-triangle.jpg or /uploads/..."
                style={{ flex: 1, minWidth: '180px' }}
              />
            </div>
            {formData.coverImage && (
              <div style={{ marginTop: '0.5rem', width: '120px', height: '70px', borderRadius: '6px', overflow: 'hidden' }}>
                <img src={formData.coverImage} alt="Cover Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}
          </div>

          <div className="form-field-group">
            <label>Short Excerpt *</label>
            <textarea
              rows={2}
              value={formData.excerpt}
              onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="Summary displayed on blog cards..."
              required
            />
          </div>

          {/* TipTap Rich Text Editor */}
          <div className="form-field-group">
            <label>Article Body Content (TipTap Advanced WYSIWYG Editor) *</label>
            <TipTapEditor
              content={formData.content}
              onChange={(html) => setFormData(prev => ({ ...prev, content: html }))}
            />
          </div>

          <div className="modal-actions-row">
            <button type="button" className="btn btn-navy-outline" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-yellow">
              {isEditing ? 'Save Changes' : 'Publish Article'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
