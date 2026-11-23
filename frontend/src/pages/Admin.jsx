import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaCalendarCheck,
  FaSuitcase,
  FaImages,
  FaNewspaper,
  FaEnvelope,
  FaSignOutAlt,
  FaTimes,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
  FaBars,
  FaExternalLinkAlt,
  FaSync,
  FaArrowLeft,
  FaCog
} from 'react-icons/fa';
import { packages as defaultPackages } from '../data/packages.js';

// Modular Sub-components
import DashboardTab from './admin/DashboardTab.jsx';
import BookingsTab from './admin/BookingsTab.jsx';
import PackagesTab from './admin/PackagesTab.jsx';
import GalleryTab from './admin/GalleryTab.jsx';
import BlogsTab from './admin/BlogsTab.jsx';
import ContactsTab from './admin/ContactsTab.jsx';
import SmtpTab from './admin/SmtpTab.jsx';

// Modular Modals
import BlogModal from './admin/BlogModal.jsx';
import PackageModal from './admin/PackageModal.jsx';
import PhotoModal from './admin/PhotoModal.jsx';
import BookingNotesModal from './admin/BookingNotesModal.jsx';
import SecurityModal from './admin/SecurityModal.jsx';

export default function Admin() {
  const [token, setToken] = useState(localStorage.getItem('odt_admin_token') || '');
  const [activeTab, setActiveTab] = useState('bookings'); // 'dashboard' | 'bookings' | 'packages' | 'gallery' | 'blogs' | 'contacts' | 'settings'

  // Login form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Mobile sidebar drawer
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Change Password Modal state
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [credMsg, setCredMsg] = useState('');
  const [credErr, setCredErr] = useState('');
  const [credLoading, setCredLoading] = useState(false);

  // Data states
  const [stats, setStats] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [packagesList, setPackagesList] = useState(defaultPackages);

  // Filter states
  const [bookingStatusFilter, setBookingStatusFilter] = useState('all');
  const [bookingSearch, setBookingSearch] = useState('');
  const [galleryCatFilter, setGalleryCatFilter] = useState('all');

  // Modals & Editors state
  const [showAddBlogModal, setShowAddBlogModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [showAddPhotoModal, setShowAddPhotoModal] = useState(false);
  const [showAddPackageModal, setShowAddPackageModal] = useState(false);
  const [editingPackage, setEditingPackage] = useState(null);
  const [editingBooking, setEditingBooking] = useState(null);

  // SMTP Settings State
  const [smtpStatus, setSmtpStatus] = useState(null);
  const [appPasswordInput, setAppPasswordInput] = useState('');
  const [smtpMsg, setSmtpMsg] = useState('');
  const [smtpErr, setSmtpErr] = useState('');
  const [smtpLoading, setSmtLoading] = useState(false);
  const [testEmailTarget, setTestEmailTarget] = useState('ourdreamtrip1@gmail.com');
  const [testEmailMsg, setTestEmailMsg] = useState('');
  const [testEmailErr, setTestEmailErr] = useState('');
  const [testEmailLoading, setTestEmailLoading] = useState(false);

  // Headers helper
  const authHeaders = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };

  // Helper: Upload image file from mobile/desktop device to backend
  const uploadImageFile = async (file) => {
    if (!file) return null;
    const formData = new FormData();
    formData.append('image', file);
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.success && data.url) {
        return data.url;
      }
      alert(data.error || 'Failed to upload image file');
      return null;
    } catch (err) {
      alert('Image upload failed. Ensure backend server is running on port 5000.');
      return null;
    }
  };

  // Perform Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.trim(), password })
      });
      const data = await res.json();
      if (data.success && data.token) {
        localStorage.setItem('odt_admin_token', data.token);
        setToken(data.token);
      } else {
        setLoginError(data.error || 'Invalid credentials. Access denied.');
      }
    } catch (err) {
      setLoginError('Could not reach backend API server. Please verify the backend service is running.');
    } finally {
      setLoginLoading(false);
    }
  };

  // Change Admin Credentials
  const handleChangeCredentials = async ({ currentPassword, newUsername, newPassword }) => {
    setCredLoading(true);
    setCredErr('');
    setCredMsg('');

    try {
      const res = await fetch('/api/admin/credentials', {
        method: 'PATCH',
        headers: authHeaders,
        body: JSON.stringify({
          currentPassword,
          newUsername,
          newPassword
        })
      });
      const data = await res.json();
      if (data.success) {
        setCredMsg(data.message || 'Credentials updated successfully!');
      } else {
        setCredErr(data.error || 'Failed to update credentials.');
      }
    } catch (err) {
      setCredErr('Failed to communicate with admin server.');
    } finally {
      setCredLoading(false);
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem('odt_admin_token');
    setToken('');
  };

  // Fetch all admin data
  const loadAdminData = async () => {
    if (!token) return;
    try {
      fetch('/api/admin/stats', { headers: authHeaders })
        .then(r => r.json())
        .then(d => d.success && setStats(d.stats))
        .catch(console.warn);

      fetch('/api/admin/bookings', { headers: authHeaders })
        .then(r => r.json())
        .then(d => d.success && setBookings(d.bookings))
        .catch(console.warn);

      fetch('/api/admin/blogs', { headers: authHeaders })
        .then(r => r.json())
        .then(d => d.success && setBlogs(d.blogs))
        .catch(console.warn);

      fetch('/api/admin/gallery', { headers: authHeaders })
        .then(r => r.json())
        .then(d => d.success && setGallery(d.gallery))
        .catch(console.warn);

      fetch('/api/admin/contacts', { headers: authHeaders })
        .then(r => r.json())
        .then(d => d.success && setContacts(d.contacts))
        .catch(console.warn);

      fetch('/api/admin/packages', { headers: authHeaders })
        .then(r => r.json())
        .then(d => d.success && d.packages && d.packages.length > 0 && setPackagesList(d.packages))
        .catch(console.warn);

      fetch('/api/admin/smtp', { headers: authHeaders })
        .then(r => r.json())
        .then(d => d.success && setSmtpStatus(d.smtp))
        .catch(console.warn);
    } catch (err) {
      console.warn('Error loading admin data:', err);
    }
  };

  useEffect(() => {
    if (token) {
      loadAdminData();
    }
  }, [token]);

  // Update Booking Status
  const handleUpdateBookingStatus = async (bookingId, newStatus) => {
    try {
      const res = await fetch(`/api/admin/bookings/${bookingId}`, {
        method: 'PATCH',
        headers: authHeaders,
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status: newStatus } : b));
      }
    } catch (err) {
      console.warn('Failed to update booking status:', err);
    }
  };

  // Delete Booking
  const handleDeleteBooking = async (bookingId) => {
    if (!window.confirm(`Are you sure you want to delete Booking #${bookingId}?`)) return;
    try {
      const res = await fetch(`/api/admin/bookings/${bookingId}`, {
        method: 'DELETE',
        headers: authHeaders
      });
      const data = await res.json();
      if (data.success) {
        setBookings(prev => prev.filter(b => b.id !== bookingId));
      }
    } catch (err) {
      alert('Failed to delete booking.');
    }
  };

  // Save Booking Staff Notes
  const handleSaveBookingNotes = async (bookingId, notes) => {
    try {
      const res = await fetch(`/api/admin/bookings/${bookingId}`, {
        method: 'PATCH',
        headers: authHeaders,
        body: JSON.stringify({ notes })
      });
      const data = await res.json();
      if (data.success) {
        setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, notes } : b));
        setEditingBooking(null);
      }
    } catch (err) {
      alert('Failed to save booking notes.');
    }
  };

  // Create Blog Article
  const handleCreateBlog = async (blogData) => {
    try {
      const res = await fetch('/api/admin/blogs', {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify(blogData)
      });
      const data = await res.json();
      if (data.success) {
        setBlogs(prev => [data.blog, ...prev]);
        setShowAddBlogModal(false);
      } else {
        alert(data.error || 'Failed to publish blog');
      }
    } catch (err) {
      alert('Error connecting to backend server.');
    }
  };

  // Update Blog Article
  const handleUpdateBlog = async (blogData) => {
    try {
      const res = await fetch(`/api/admin/blogs/${blogData.id}`, {
        method: 'PUT',
        headers: authHeaders,
        body: JSON.stringify(blogData)
      });
      const data = await res.json();
      if (data.success) {
        setBlogs(prev => prev.map(b => b.id === blogData.id ? data.blog : b));
        setEditingBlog(null);
      } else {
        alert(data.error || 'Failed to update blog');
      }
    } catch (err) {
      alert('Error connecting to backend server.');
    }
  };

  // Delete Blog
  const handleDeleteBlog = async (blogId) => {
    if (!window.confirm('Are you sure you want to delete this travel guide?')) return;
    try {
      const res = await fetch(`/api/admin/blogs/${blogId}`, {
        method: 'DELETE',
        headers: authHeaders
      });
      const data = await res.json();
      if (data.success) {
        setBlogs(prev => prev.filter(b => b.id !== blogId));
      }
    } catch (err) {
      alert('Failed to delete blog.');
    }
  };

  // Create Tour Package
  const handleCreatePackage = async (packageData) => {
    const slug = packageData.slug || packageData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const pkgPayload = {
      ...packageData,
      slug,
      gallery: packageData.gallery && packageData.gallery.length > 0 ? packageData.gallery : [packageData.img],
      highlights: typeof packageData.highlights === 'string'
        ? packageData.highlights.split(',').map(s => s.trim()).filter(Boolean)
        : packageData.highlights
    };

    try {
      const res = await fetch('/api/admin/packages', {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify(pkgPayload)
      });
      const data = await res.json();
      if (data.success) {
        setPackagesList(prev => [data.package, ...prev]);
        setShowAddPackageModal(false);
      } else {
        alert(data.error || 'Failed to create package');
      }
    } catch (err) {
      alert('Error connecting to backend server.');
    }
  };

  // Update Tour Package
  const handleUpdatePackage = async (packageData) => {
    const pkgPayload = {
      ...packageData,
      highlights: typeof packageData.highlights === 'string'
        ? packageData.highlights.split(',').map(s => s.trim()).filter(Boolean)
        : packageData.highlights
    };

    try {
      const res = await fetch(`/api/admin/packages/${packageData.id || packageData.slug}`, {
        method: 'PUT',
        headers: authHeaders,
        body: JSON.stringify(pkgPayload)
      });
      const data = await res.json();
      if (data.success) {
        setPackagesList(prev => prev.map(p => (p.id === packageData.id || p.slug === packageData.slug) ? data.package : p));
        setEditingPackage(null);
      } else {
        alert(data.error || 'Failed to update package');
      }
    } catch (err) {
      alert('Error updating package.');
    }
  };

  // Delete Tour Package
  const handleDeletePackage = async (packageIdOrSlug) => {
    if (!window.confirm('Are you sure you want to delete this tour package?')) return;
    try {
      const res = await fetch(`/api/admin/packages/${packageIdOrSlug}`, {
        method: 'DELETE',
        headers: authHeaders
      });
      const data = await res.json();
      if (data.success) {
        setPackagesList(prev => prev.filter(p => (p.id !== packageIdOrSlug && p.slug !== packageIdOrSlug)));
      }
    } catch (err) {
      alert('Failed to delete package.');
    }
  };

  // Add Photo to Gallery
  const handleAddPhoto = async (photoData) => {
    try {
      const res = await fetch('/api/admin/gallery', {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify(photoData)
      });
      const data = await res.json();
      if (data.success) {
        setGallery(prev => [data.photo, ...prev]);
        setShowAddPhotoModal(false);
      }
    } catch (err) {
      alert('Failed to save photo.');
    }
  };

  // Delete Gallery Photo
  const handleDeletePhoto = async (photoId) => {
    if (!window.confirm('Delete this photo from the gallery?')) return;
    try {
      const res = await fetch(`/api/admin/gallery/${photoId}`, {
        method: 'DELETE',
        headers: authHeaders
      });
      const data = await res.json();
      if (data.success) {
        setGallery(prev => prev.filter(g => g.id !== photoId));
      }
    } catch (err) {
      alert('Failed to delete photo.');
    }
  };

  // Toggle Contact Inquiry Status
  const handleToggleContactStatus = async (contactId, currentStatus) => {
    const nextStatus = currentStatus === 'replied' ? 'new' : 'replied';
    try {
      const res = await fetch(`/api/admin/contacts/${contactId}`, {
        method: 'PATCH',
        headers: authHeaders,
        body: JSON.stringify({ status: nextStatus })
      });
      const data = await res.json();
      if (data.success) {
        setContacts(prev => prev.map(c => c.id === contactId ? { ...c, status: nextStatus } : c));
      }
    } catch (err) {
      console.warn('Failed to toggle contact status:', err);
    }
  };

  // Save 16-Character App Password
  const handleSaveSmtp = async (e) => {
    e.preventDefault();
    setSmtLoading(true);
    setSmtpMsg('');
    setSmtpErr('');

    try {
      const cleanPass = appPasswordInput.replace(/\s+/g, '');
      const res = await fetch('/api/admin/smtp', {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify({
          appPassword: cleanPass,
          notificationEmail: 'ourdreamtrip1@gmail.com'
        })
      });
      const data = await res.json();
      if (data.success) {
        setSmtpMsg(data.message || '16-character Google App Password saved & verified!');
        setSmtpStatus(data.smtp);
        setAppPasswordInput('');
      } else {
        setSmtpErr(data.error || 'Failed to save SMTP configuration.');
      }
    } catch (err) {
      setSmtpErr('Failed to connect to backend SMTP server.');
    } finally {
      setSmtLoading(false);
    }
  };

  // Send Live Test Email
  const handleSendTestEmail = async (e) => {
    e.preventDefault();
    setTestEmailLoading(true);
    setTestEmailMsg('');
    setTestEmailErr('');

    try {
      const res = await fetch('/api/admin/test-email', {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify({ targetEmail: testEmailTarget || 'ourdreamtrip1@gmail.com' })
      });
      const data = await res.json();
      if (data.success) {
        setTestEmailMsg(data.message || 'Test email dispatched successfully!');
      } else {
        setTestEmailErr(data.error || 'Email dispatch failed. Please check credentials.');
      }
    } catch (err) {
      setTestEmailErr('Network error while dispatching test email.');
    } finally {
      setTestEmailLoading(false);
    }
  };

  // ==========================================
  // UNAUTHENTICATED: LOGIN VIEW
  // ==========================================
  if (!token) {
    return (
      <div className="admin-login-wrapper">
        <div className="admin-login-card glass-card">
          <div className="login-brand-head">
            <div className="login-shield-icon">
              <FaShieldAlt />
            </div>
            <h2>OurDreamTrip</h2>
            <span className="login-sub">Internal DMC Operations &amp; Administration</span>
          </div>

          {loginError && (
            <div className="admin-error-box" role="alert">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="admin-form">
            <div className="form-field-group">
              <label>Administrator Username</label>
              <div className="input-with-icon">
                <input
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="Enter administrator username"
                  required
                  autoFocus
                />
              </div>
            </div>

            <div className="form-field-group">
              <label>Password</label>
              <div className="input-with-icon password-wrap" style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#64748b',
                    cursor: 'pointer'
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-yellow btn-full btn-lg" disabled={loginLoading}>
              {loginLoading ? 'Authenticating...' : 'Sign In to Admin Portal'}
            </button>
          </form>

          <div className="text-center" style={{ marginTop: '1.5rem' }}>
            <Link to="/" className="back-link"><FaArrowLeft /> Return to Website</Link>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // AUTHENTICATED ADMIN DASHBOARD
  // ==========================================
  return (
    <div className="admin-portal-layout">
      {/* Mobile Drawer Backdrop */}
      {mobileSidebarOpen && (
        <div
          className="admin-mobile-backdrop"
          onClick={() => setMobileSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`admin-sidebar ${mobileSidebarOpen ? 'mobile-open' : ''}`}>
        <div className="admin-sidebar-head">
          <div className="admin-brand-row">
            <Link to="/" className="admin-brand">
              OurDreamTrip <span>Admin</span>
            </Link>
            {mobileSidebarOpen && (
              <button
                className="admin-sidebar-close-btn"
                onClick={() => setMobileSidebarOpen(false)}
                aria-label="Close sidebar"
              >
                <FaTimes />
              </button>
            )}
          </div>
          <div className="admin-live-badge-wrap">
            <span className="live-pulse-badge">Live System Active</span>
          </div>
        </div>

        <nav className="admin-nav-menu">
          <button
            className={`admin-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => { setActiveTab('dashboard'); setMobileSidebarOpen(false); }}
          >
            <FaTachometerAlt /> Dashboard
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'bookings' ? 'active' : ''}`}
            onClick={() => { setActiveTab('bookings'); setMobileSidebarOpen(false); }}
          >
            <FaCalendarCheck /> Bookings &amp; Inquiries
            {bookings.filter(b => b.status === 'new').length > 0 && (
              <span className="nav-count-badge">
                {bookings.filter(b => b.status === 'new').length}
              </span>
            )}
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'packages' ? 'active' : ''}`}
            onClick={() => { setActiveTab('packages'); setMobileSidebarOpen(false); }}
          >
            <FaSuitcase /> Tour Packages ({packagesList.length})
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => { setActiveTab('gallery'); setMobileSidebarOpen(false); }}
          >
            <FaImages /> Real Gallery ({gallery.length})
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'blogs' ? 'active' : ''}`}
            onClick={() => { setActiveTab('blogs'); setMobileSidebarOpen(false); }}
          >
            <FaNewspaper /> Blogs &amp; Guides ({blogs.length})
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'contacts' ? 'active' : ''}`}
            onClick={() => { setActiveTab('contacts'); setMobileSidebarOpen(false); }}
          >
            <FaEnvelope /> Contact Inquiries ({contacts.length})
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => { setActiveTab('settings'); setMobileSidebarOpen(false); }}
          >
            <FaCog /> Nodemailer / SMTP Setup
            {smtpStatus?.isConfigured && <span className="nav-count-badge green-badge">OK</span>}
          </button>
        </nav>

        <div className="admin-sidebar-footer">
          <div className="admin-user-card">
            <div className="admin-avatar-pill">ODT</div>
            <div className="admin-user-details">
              <span className="admin-user-name">Super Administrator</span>
              <span className="admin-user-email">ourdreamtrip1@gmail.com</span>
            </div>
          </div>

          <div className="admin-footer-btn-row">
            <button
              type="button"
              className="admin-btn-action security"
              onClick={() => { setShowChangePasswordModal(true); setMobileSidebarOpen(false); }}
              title="Change Admin Password"
            >
              <FaLock /> Security
            </button>
            <button
              type="button"
              className="admin-btn-action logout"
              onClick={handleLogout}
              title="Sign Out"
            >
              <FaSignOutAlt /> Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Administrative Stage */}
      <main className="admin-main-stage">
        {/* Top Header Bar */}
        <header className="admin-topbar glass-card">
          <div className="admin-topbar-left">
            <button
              className="admin-mobile-toggle-btn"
              onClick={() => setMobileSidebarOpen(true)}
              aria-label="Open mobile navigation menu"
            >
              <FaBars />
            </button>

            <div>
              <h2 style={{ margin: 0 }}>
                {activeTab === 'dashboard' && 'Dashboard Overview'}
                {activeTab === 'bookings' && 'Tour Bookings & Email Enquiries Desk'}
                {activeTab === 'packages' && 'Tour Package Tariffs & Itineraries'}
                {activeTab === 'gallery' && 'Real Destination Photography Gallery'}
                {activeTab === 'blogs' && 'Travel Guides & Tourism Articles'}
                {activeTab === 'contacts' && 'Contact Us Form Messages'}
                {activeTab === 'settings' && 'Email Notifications & Nodemailer Setup'}
              </h2>
              <span className="topbar-breadcrumb">
                Direct Email: <code>ourdreamtrip1@gmail.com</code>
              </span>
            </div>
          </div>

          <div className="admin-topbar-actions">
            <button className="btn btn-navy-outline btn-sm" onClick={loadAdminData} title="Refresh Live Data">
              <FaSync /> Refresh
            </button>
            <Link to="/" target="_blank" className="btn btn-navy btn-sm">
              <FaExternalLinkAlt /> View Website
            </Link>
          </div>
        </header>

        {/* Mobile Quick Horizontal Tab Bar */}
        <div className="admin-mobile-tab-nav">
          <button
            className={`admin-mobile-tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <FaTachometerAlt /> Dashboard
          </button>
          <button
            className={`admin-mobile-tab-btn ${activeTab === 'bookings' ? 'active' : ''}`}
            onClick={() => setActiveTab('bookings')}
          >
            <FaCalendarCheck /> Bookings
            {bookings.filter(b => b.status === 'new').length > 0 && (
              <span className="badge-num">{bookings.filter(b => b.status === 'new').length}</span>
            )}
          </button>
          <button
            className={`admin-mobile-tab-btn ${activeTab === 'packages' ? 'active' : ''}`}
            onClick={() => setActiveTab('packages')}
          >
            <FaSuitcase /> Packages ({packagesList.length})
          </button>
          <button
            className={`admin-mobile-tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveTab('gallery')}
          >
            <FaImages /> Gallery
          </button>
          <button
            className={`admin-mobile-tab-btn ${activeTab === 'blogs' ? 'active' : ''}`}
            onClick={() => setActiveTab('blogs')}
          >
            <FaNewspaper /> Blogs
          </button>
          <button
            className={`admin-mobile-tab-btn ${activeTab === 'contacts' ? 'active' : ''}`}
            onClick={() => setActiveTab('contacts')}
          >
            <FaEnvelope /> Contacts
          </button>
          <button
            className={`admin-mobile-tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <FaCog /> SMTP
          </button>
        </div>

        {/* 1. DASHBOARD TAB */}
        {activeTab === 'dashboard' && (
          <DashboardTab
            bookings={bookings}
            packagesList={packagesList}
            blogs={blogs}
            setActiveTab={setActiveTab}
          />
        )}

        {/* 2. BOOKINGS TAB */}
        {activeTab === 'bookings' && (
          <BookingsTab
            bookings={bookings}
            bookingStatusFilter={bookingStatusFilter}
            setBookingStatusFilter={setBookingStatusFilter}
            bookingSearch={bookingSearch}
            setBookingSearch={setBookingSearch}
            handleUpdateBookingStatus={handleUpdateBookingStatus}
            handleDeleteBooking={handleDeleteBooking}
            setEditingBooking={setEditingBooking}
          />
        )}

        {/* 3. PACKAGES TAB */}
        {activeTab === 'packages' && (
          <PackagesTab
            packagesList={packagesList}
            setShowAddPackageModal={setShowAddPackageModal}
            setEditingPackage={setEditingPackage}
            handleDeletePackage={handleDeletePackage}
          />
        )}

        {/* 4. GALLERY TAB */}
        {activeTab === 'gallery' && (
          <GalleryTab
            gallery={gallery}
            galleryCatFilter={galleryCatFilter}
            setGalleryCatFilter={setGalleryCatFilter}
            setShowAddPhotoModal={setShowAddPhotoModal}
            handleDeletePhoto={handleDeletePhoto}
          />
        )}

        {/* 5. BLOGS TAB */}
        {activeTab === 'blogs' && (
          <BlogsTab
            blogs={blogs}
            setShowAddBlogModal={setShowAddBlogModal}
            setEditingBlog={setEditingBlog}
            handleDeleteBlog={handleDeleteBlog}
          />
        )}

        {/* 6. CONTACTS TAB */}
        {activeTab === 'contacts' && (
          <ContactsTab
            contacts={contacts}
            handleToggleContactStatus={handleToggleContactStatus}
          />
        )}

        {/* 7. SMTP SETTINGS TAB */}
        {activeTab === 'settings' && (
          <SmtpTab
            smtpStatus={smtpStatus}
            appPasswordInput={appPasswordInput}
            setAppPasswordInput={setAppPasswordInput}
            smtpMsg={smtpMsg}
            smtpErr={smtpErr}
            smtpLoading={smtpLoading}
            handleSaveSmtp={handleSaveSmtp}
            testEmailTarget={testEmailTarget}
            setTestEmailTarget={setTestEmailTarget}
            testEmailMsg={testEmailMsg}
            testEmailErr={testEmailErr}
            testEmailLoading={testEmailLoading}
            handleSendTestEmail={handleSendTestEmail}
          />
        )}
      </main>

      {/* ================= MODALS ================= */}

      {/* Add New Blog Modal */}
      {showAddBlogModal && (
        <BlogModal
          isEditing={false}
          onClose={() => setShowAddBlogModal(false)}
          onSave={handleCreateBlog}
          uploadImageFile={uploadImageFile}
        />
      )}

      {/* Edit Existing Blog Modal */}
      {editingBlog && (
        <BlogModal
          blog={editingBlog}
          isEditing={true}
          onClose={() => setEditingBlog(null)}
          onSave={handleUpdateBlog}
          uploadImageFile={uploadImageFile}
        />
      )}

      {/* Add Real Photo to Gallery Modal */}
      {showAddPhotoModal && (
        <PhotoModal
          onClose={() => setShowAddPhotoModal(false)}
          onSave={handleAddPhoto}
          uploadImageFile={uploadImageFile}
        />
      )}

      {/* Add New Tour Package Modal */}
      {showAddPackageModal && (
        <PackageModal
          isEditing={false}
          onClose={() => setShowAddPackageModal(false)}
          onSave={handleCreatePackage}
          uploadImageFile={uploadImageFile}
        />
      )}

      {/* Edit Existing Tour Package Modal */}
      {editingPackage && (
        <PackageModal
          pkg={editingPackage}
          isEditing={true}
          onClose={() => setEditingPackage(null)}
          onSave={handleUpdatePackage}
          uploadImageFile={uploadImageFile}
        />
      )}

      {/* Staff Booking Notes Modal */}
      {editingBooking && (
        <BookingNotesModal
          booking={editingBooking}
          onClose={() => setEditingBooking(null)}
          onSave={handleSaveBookingNotes}
        />
      )}

      {/* Update Admin Security Modal */}
      {showChangePasswordModal && (
        <SecurityModal
          onClose={() => setShowChangePasswordModal(false)}
          onChangeCredentials={handleChangeCredentials}
          credLoading={credLoading}
          credMsg={credMsg}
          credErr={credErr}
        />
      )}
    </div>
  );
}
