import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  FaCalendarAlt,
  FaUser,
  FaEye,
  FaTag,
  FaArrowRight,
  FaSearch,
  FaMapMarkerAlt,
  FaClock,
  FaShareAlt,
  FaWhatsapp,
  FaChevronRight
} from 'react-icons/fa';
import { PageHero, Btn, Reveal, useTitle } from '../components/common.jsx';
import { packages, CONTACT } from '../data/packages.js';

export function BlogList() {
  useTitle('Travel Guides & Tourism Blog');
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.blogs) {
          setBlogs(data.blogs);
        }
      })
      .catch(err => console.warn('Could not fetch blogs, using fallback', err))
      .finally(() => setLoading(false));
  }, []);

  const categories = ['all', 'Nature & Hills', 'Spiritual & Heritage', 'Wildlife & Safari', 'Travel Guide'];

  const filtered = blogs.filter(b => {
    const matchCat = selectedCategory === 'all' || (b.category || '').toLowerCase() === selectedCategory.toLowerCase();
    const matchSearch = !searchQuery ||
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (b.tags || []).some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="blogs-page">
      <PageHero
        title="Odisha &amp; India Travel Guides"
        sub="Discover insider heritage secrets, temple rituals, wildlife sanctuaries, and offbeat hill trails curated by local destination experts."
        badge="Official Tourism Articles &amp; Insights"
      />

      <section className="container section-margin">
        {/* Search & Category Filter Bar */}
        <div className="filter-controls-bar glass-card">
          <div className="controls-top-row">
            <div className="search-input-wrap">
              <input
                type="text"
                placeholder="Search articles, temple guides, waterfalls..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pkg-search-field"
              />
            </div>
            <div className="theme-pills-list">
              {categories.map(c => (
                <button
                  key={c}
                  className={`theme-pill-btn ${selectedCategory === c ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(c)}
                >
                  {c === 'all' ? 'All Guides' : c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blogs Grid */}
        {loading ? (
          <div className="text-center" style={{ padding: '4rem 0' }}>
            <p>Loading travel guides…</p>
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid3 blogs-grid">
            {filtered.map(blog => (
              <Reveal key={blog.id || blog.slug} className="blog-card glass-card">
                <div className="blog-card-img-wrap">
                  <img
                    src={blog.coverImage || '/images/pkg-odisha-family.jpg'}
                    alt={blog.title}
                    loading="lazy"
                    onError={e => {
                      e.target.onerror = null;
                      e.target.src = '/images/pkg-golden-triangle.jpg';
                    }}
                  />
                  <span className="blog-category-tag">{blog.category || 'Travel Guide'}</span>
                </div>

                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span><FaCalendarAlt /> {blog.publishedAt}</span>
                    <span><FaEye /> {blog.views || 320} views</span>
                  </div>

                  <h3 className="blog-card-title">
                    <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                  </h3>

                  <p className="blog-card-excerpt">{blog.excerpt}</p>

                  {blog.tags && blog.tags.length > 0 && (
                    <div className="blog-card-tags">
                      {blog.tags.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="blog-tag-pill">#{t}</span>
                      ))}
                    </div>
                  )}

                  <div className="blog-card-footer">
                    <span className="blog-author-txt"><FaUser /> {blog.author}</span>
                    <Link to={`/blogs/${blog.slug}`} className="blog-read-btn">
                      Read Article <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="no-results-card glass-card text-center">
            <h3>No travel articles match your query</h3>
            <p>Try searching with another keyword or resetting the filter.</p>
            <button
              className="btn btn-navy"
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/blogs/${slug}`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.blog) {
          setBlog(data.blog);
        }
      })
      .catch(err => console.warn('Could not fetch blog detail:', err))
      .finally(() => setLoading(false));
  }, [slug]);

  useTitle(blog?.title || 'Travel Guide');

  if (loading) {
    return (
      <div className="container center" style={{ padding: '6rem 0' }}>
        <p>Loading travel guide…</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container center glass-card" style={{ margin: '4rem auto', padding: '3rem' }}>
        <h2>Travel Guide Not Found</h2>
        <p>The requested travel article does not exist or has been moved.</p>
        <Btn to="/blogs" variant="navy">Return to Travel Guides</Btn>
      </div>
    );
  }

  // Format markdown or rich HTML content from TipTap editor
  const renderContent = (raw) => {
    if (!raw) return null;
    if (raw.includes('<p>') || raw.includes('<h1>') || raw.includes('<h2>') || raw.includes('<h3>') || raw.includes('<ul>') || raw.includes('<ol>') || raw.includes('<img')) {
      return <div className="tiptap-rendered-content" dangerouslySetInnerHTML={{ __html: raw }} />;
    }
    return (raw || '').split('\n').map((line, idx) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('#### ')) {
        return <h4 key={idx} className="blog-h4">{trimmed.replace('#### ', '')}</h4>;
      }
      if (trimmed.startsWith('### ')) {
        return <h3 key={idx} className="blog-h3">{trimmed.replace('### ', '')}</h3>;
      }
      if (trimmed.startsWith('## ')) {
        return <h2 key={idx} className="blog-h2">{trimmed.replace('## ', '')}</h2>;
      }
      if (trimmed.startsWith('- ')) {
        return <li key={idx} className="blog-li">{trimmed.replace('- ', '')}</li>;
      }
      if (trimmed.startsWith('1. ') || trimmed.startsWith('2. ') || trimmed.startsWith('3. ') || trimmed.startsWith('4. ')) {
        return <p key={idx} className="blog-num-item"><strong>{trimmed.slice(0, 3)}</strong> {trimmed.slice(3)}</p>;
      }
      if (trimmed.length > 0) {
        return <p key={idx} className="blog-p">{trimmed}</p>;
      }
      return null;
    });
  };

  return (
    <div className="blog-detail-page">
      <section className="blog-hero-section">
        <div className="container blog-hero-container">
          <div className="blog-breadcrumbs">
            <Link to="/">Home</Link> <FaChevronRight /> <Link to="/blogs">Blogs</Link> <FaChevronRight /> <span>{blog.category}</span>
          </div>
          <span className="blog-category-tag-large">{blog.category}</span>
          <h1 className="blog-detail-heading">{blog.title}</h1>
          <div className="blog-meta-ribbon">
            <span><FaUser /> {blog.author}</span>
            <span><FaCalendarAlt /> Published: {blog.publishedAt}</span>
            <span><FaEye /> {blog.views} Reads</span>
          </div>
        </div>
      </section>

      <section className="container blog-content-layout section-margin">
        {/* Main Article Body */}
        <article className="blog-main-article glass-card">
          <div className="blog-featured-img-wrap">
            <img
              src={blog.coverImage || '/images/pkg-odisha-family.jpg'}
              alt={blog.title}
              className="blog-featured-img"
            />
          </div>

          <div className="blog-body-text">
            {renderContent(blog.content)}
          </div>

          {blog.tags && blog.tags.length > 0 && (
            <div className="blog-tags-footer">
              <strong>Tags:</strong>
              {blog.tags.map((t, idx) => (
                <span key={idx} className="blog-tag-pill">#{t}</span>
              ))}
            </div>
          )}

          {/* Social Share / WhatsApp Bar */}
          <div className="blog-share-bar">
            <span>Enjoyed this guide? Share with fellow travelers:</span>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`Check out this travel guide: ${blog.title} - https://ourdreamtrip.com/blogs/${blog.slug}`)}`}
              className="btn btn-wa btn-sm"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp /> Share on WhatsApp
            </a>
          </div>
        </article>

        {/* Sidebar Tour Booking Promotion */}
        <aside className="blog-sidebar">
          <div className="blog-promo-card glass-card">
            <span className="promo-badge">Plan Your Dream Trip</span>
            <h3>Want to Experience This in Person?</h3>
            <p>
              Our local Odia travel coordinators design 100% customized tour itineraries with private sanitized AC cabs, 3★/4★ handpicked stays, and verified temple pandas.
            </p>

            <div className="promo-cta-stack">
              <Btn to="/book-your-trip" variant="yellow" className="btn-full">
                Book a Custom Trip
              </Btn>
              <a
                href={`https://wa.me/${CONTACT.tel.slice(1)}?text=Hi%20Our%20Dream%20Trip,%20I%20read%20your%20blog%20${encodeURIComponent(blog.title)}%20and%20want%20to%20plan%20a%20tour.`}
                className="btn btn-wa btn-full"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp /> Chat with Author on WhatsApp
              </a>
            </div>

            <hr className="divider-line" />

            <div className="sidebar-quick-guarantees">
              <span>✔ 100% Real Destination Photos</span>
              <span>✔ 24x7 Active Phone Concierge</span>
              <span>✔ Free 15-Day Cancellation</span>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
