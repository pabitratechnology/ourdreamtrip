import { Link } from 'react-router-dom';
import { FaPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';

export default function BlogsTab({
  blogs = [],
  setShowAddBlogModal,
  setEditingBlog,
  handleDeleteBlog
}) {
  return (
    <div className="admin-tab-content">
      <div className="admin-controls-card glass-card">
        <div className="controls-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h3 style={{ margin: 0 }}>Travel Guides &amp; Tourism Articles ({blogs.length})</h3>
            <span className="meta-sub" style={{ fontSize: '0.84rem', color: '#64748b' }}>
              Publish expert local guides and SEO-rich itineraries
            </span>
          </div>
          <button
            className="btn btn-yellow btn-sm"
            onClick={() => setShowAddBlogModal(true)}
          >
            <FaPlus /> Write New Travel Article
          </button>
        </div>
      </div>

      <div className="admin-section-block glass-card" style={{ marginTop: '1.5rem' }}>
        <div className="admin-table-responsive">
          <table className="admin-data-table">
            <thead>
              <tr>
                <th>Cover</th>
                <th>Article Title</th>
                <th>Category</th>
                <th>Author</th>
                <th>Published</th>
                <th>Views</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map(blog => (
                <tr key={blog.id}>
                  <td style={{ width: '80px' }}>
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      style={{ width: '70px', height: '48px', objectFit: 'cover', borderRadius: '4px' }}
                    />
                  </td>
                  <td>
                    <strong>{blog.title}</strong>
                    <div className="meta-sub">/blogs/{blog.slug}</div>
                  </td>
                  <td><span className="source-pill">{blog.category}</span></td>
                  <td>{blog.author}</td>
                  <td>{blog.publishedAt}</td>
                  <td><strong>{blog.views || 0}</strong></td>
                  <td>
                    <div className="action-buttons-stack">
                      <Link to={`/blogs/${blog.slug}`} target="_blank" className="action-btn-pill edit" title="View Article">
                        <FaEye />
                      </Link>
                      <button
                        className="action-btn-pill edit"
                        onClick={() => setEditingBlog({ ...blog })}
                        title="Edit Article with TipTap"
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="action-btn-pill del"
                        onClick={() => handleDeleteBlog(blog.id)}
                        title="Delete Article"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
