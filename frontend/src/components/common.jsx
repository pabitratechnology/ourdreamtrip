import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaClock,
  FaRupeeSign,
  FaStar,
  FaCheck,
  FaMapMarkerAlt,
  FaTag,
  FaCalendarAlt,
  FaCamera,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
  FaCar,
  FaHotel,
  FaShieldAlt,
  FaCoffee,
  FaWhatsapp,
  FaTimes,
  FaArrowRight
} from 'react-icons/fa';
import { CONTACT } from '../data/packages.js';

export const useTitle = t => useEffect(() => {
  document.title = `${t} | Our Dream Trip - ourdreamtrip.com`;
}, [t]);

export const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: .5, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export const Btn = ({ to, href, onClick, variant = 'yellow', className = '', children, ...r }) => {
  const c = `btn btn-${variant} ${className}`;
  const m = { whileHover: { scale: 1.04 }, whileTap: { scale: .97 } };
  if (to) return <motion.span {...m} className="btn-wrap"><Link to={to} className={c} {...r}>{children}</Link></motion.span>;
  if (href) return <motion.a {...m} href={href} className={c} {...r}>{children}</motion.a>;
  return <motion.button {...m} onClick={onClick} className={c} {...r}>{children}</motion.button>;
};

export const PageHero = ({ title, sub, badge, bgImage }) => (
  <section
    className={`page-hero ${bgImage ? 'page-hero-has-bg' : ''}`}
    style={
      bgImage
        ? {
            backgroundImage: `linear-gradient(180deg, rgba(6, 36, 95, 0.82) 0%, rgba(3, 21, 56, 0.94) 100%), url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }
        : {}
    }
  >
    <div className="container">
      {badge && <span className="hero-sub-pill">{badge}</span>}
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        {title}
      </motion.h1>
      {sub && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>{sub}</motion.p>}
    </div>
  </section>
);

export const Img = ({ src, alt = 'Our Dream Trip', className = '' }) => (
  <div className={`img-container ${className}`}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=800&q=80';
      }}
    />
  </div>
);

export const PackageCard = ({ p, layout = 'grid', onQuickView }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const photos = p.gallery && p.gallery.length > 0 ? p.gallery : [p.img];
  const discount = p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;

  const nextPhoto = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const currentPhoto = photos[photoIndex] || p.img;

  if (layout === 'list') {
    return (
      <Reveal className="pkg-card pkg-card-list glass-card">
        <div className="pkg-img-wrap pkg-list-img-wrap">
          <img
            src={currentPhoto}
            alt={p.title}
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/pkg-golden-triangle.jpg';
            }}
          />
          {p.badge && <span className="pkg-badge">{p.badge}</span>}
          <span className="pkg-cat-pill">{p.cat === 'odisha' ? 'Odisha Tour' : 'India Domestic'}</span>
          
          {photos.length > 1 && (
            <>
              <button className="pkg-card-nav-btn prev" onClick={prevPhoto} aria-label="Previous photo">
                <FaChevronLeft />
              </button>
              <button className="pkg-card-nav-btn next" onClick={nextPhoto} aria-label="Next photo">
                <FaChevronRight />
              </button>
              <div className="pkg-card-dots">
                {photos.slice(0, 5).map((_, i) => (
                  <span
                    key={i}
                    className={`pkg-card-dot ${photoIndex === i ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setPhotoIndex(i);
                    }}
                  />
                ))}
              </div>
            </>
          )}

          <span className="pkg-photo-count">
            <FaCamera /> {photos.length} Real Photos
          </span>

          {onQuickView && (
            <button
              type="button"
              className="pkg-quickview-btn"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onQuickView(p);
              }}
            >
              <FaEye /> Quick View
            </button>
          )}
        </div>

        <div className="pkg-body pkg-list-body">
          <div className="pkg-meta-row">
            <span className="pkg-meta-item"><FaClock /> {p.days}</span>
            <span className="pkg-meta-item"><FaMapMarkerAlt /> {p.dest}</span>
            {p.rating && (
              <span className="pkg-rating">
                <FaStar className="star-icon" /> {p.rating} <small>({p.reviewsCount || 85} reviews)</small>
              </span>
            )}
          </div>

          <h3 className="pkg-title">
            <Link to={`/${p.cat}-tour-packages/${p.slug}`}>{p.title}</Link>
          </h3>

          <p className="pkg-list-overview">{p.overview}</p>

          <div className="pkg-features-row">
            <span className="pkg-feat-pill"><FaCar /> Private AC Cab</span>
            <span className="pkg-feat-pill"><FaHotel /> 3★/4★ Hotel</span>
            <span className="pkg-feat-pill"><FaCoffee /> Daily Breakfast</span>
            <span className="pkg-feat-pill"><FaShieldAlt /> 100% Verified</span>
          </div>

          {p.highlights && (
            <ul className="pkg-highlights-snippet">
              {p.highlights.slice(0, 3).map((h, i) => (
                <li key={i}><FaCheck className="check-mini" /> {h}</li>
              ))}
            </ul>
          )}

          <div className="pkg-pricing-row pkg-list-pricing-row">
            <div className="pkg-price-col">
              <span className="price-tag-label">Starting per person</span>
              <div className="price-wrap">
                <strong className="current-price">
                  <FaRupeeSign className="inr-icon" />{p.price.toLocaleString('en-IN')}
                </strong>
                {p.originalPrice && (
                  <span className="original-price">
                    ₹{p.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                {discount > 0 && <span className="save-badge">{discount}% OFF</span>}
              </div>
            </div>

            <div className="pkg-actions-col">
              <Btn to={`/${p.cat}-tour-packages/${p.slug}`} variant="navy" className="btn-sm">
                View Full Itinerary
              </Btn>
              <Btn to={`/book-your-trip?package=${p.slug}`} variant="yellow" className="btn-sm">
                Book This Tour
              </Btn>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }

  // Default Grid Layout
  return (
    <Reveal className="pkg-card glass-card">
      <div className="pkg-img-wrap">
        <img
          src={currentPhoto}
          alt={p.title}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/pkg-golden-triangle.jpg';
          }}
        />
        {p.badge && <span className="pkg-badge">{p.badge}</span>}
        <span className="pkg-cat-pill">{p.cat === 'odisha' ? 'Odisha Tour' : 'India Domestic'}</span>

        {photos.length > 1 && (
          <>
            <button className="pkg-card-nav-btn prev" onClick={prevPhoto} aria-label="Previous photo">
              <FaChevronLeft />
            </button>
            <button className="pkg-card-nav-btn next" onClick={nextPhoto} aria-label="Next photo">
              <FaChevronRight />
            </button>
            <div className="pkg-card-dots">
              {photos.slice(0, 5).map((_, i) => (
                <span
                  key={i}
                  className={`pkg-card-dot ${photoIndex === i ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setPhotoIndex(i);
                  }}
                />
              ))}
            </div>
          </>
        )}

        <span className="pkg-photo-count">
          <FaCamera /> {photos.length} Real Photos
        </span>

        {onQuickView && (
          <button
            type="button"
            className="pkg-quickview-btn"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onQuickView(p);
            }}
          >
            <FaEye /> Quick View
          </button>
        )}
      </div>

      <div className="pkg-body">
        <div className="pkg-meta-row">
          <span className="pkg-meta-item"><FaClock /> {p.days}</span>
          <span className="pkg-meta-item"><FaMapMarkerAlt /> {p.dest.split(',')[0]}</span>
          {p.rating && (
            <span className="pkg-rating">
              <FaStar className="star-icon" /> {p.rating} <small>({p.reviewsCount || 85})</small>
            </span>
          )}
        </div>

        <h3 className="pkg-title">
          <Link to={`/${p.cat}-tour-packages/${p.slug}`}>{p.title}</Link>
        </h3>

        <div className="pkg-features-row mini">
          <span className="pkg-feat-pill"><FaCar /> Private Cab</span>
          <span className="pkg-feat-pill"><FaHotel /> 3★/4★ Hotel</span>
          <span className="pkg-feat-pill"><FaCoffee /> Breakfast</span>
        </div>

        {p.highlights && (
          <ul className="pkg-highlights-snippet">
            {p.highlights.slice(0, 2).map((h, i) => (
              <li key={i}><FaCheck className="check-mini" /> {h}</li>
            ))}
          </ul>
        )}

        <div className="pkg-pricing-row">
          <div className="pkg-price-col">
            <span className="price-tag-label">Starting from</span>
            <div className="price-wrap">
              <strong className="current-price">
                <FaRupeeSign className="inr-icon" />{p.price.toLocaleString('en-IN')}
              </strong>
              {p.originalPrice && (
                <span className="original-price">
                  ₹{p.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            {discount > 0 && <span className="save-badge">{discount}% OFF</span>}
          </div>

          <div className="pkg-actions-col">
            <Btn to={`/${p.cat}-tour-packages/${p.slug}`} variant="navy" className="btn-sm">
              Details
            </Btn>
            <Btn to={`/book-your-trip?package=${p.slug}`} variant="yellow" className="btn-sm">
              Book
            </Btn>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export const PackageQuickModal = ({ pkg, onClose }) => {
  if (!pkg) return null;
  const [activePhoto, setActivePhoto] = useState(0);
  const photos = pkg.gallery && pkg.gallery.length > 0 ? pkg.gallery : [pkg.img];
  const galleryDetails = pkg.galleryDetails || [];

  return (
    <div className="quickview-overlay" onClick={onClose}>
      <div className="quickview-modal glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="quickview-close-btn" onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </button>

        <div className="quickview-grid">
          {/* Left: Gallery Section */}
          <div className="quickview-gallery-col">
            <div className="quickview-main-photo-wrap">
              <img
                src={photos[activePhoto] || pkg.img}
                alt={pkg.title}
                className="quickview-main-photo"
              />
              <span className="quickview-counter">
                {activePhoto + 1} / {photos.length} Real Photos
              </span>
              {galleryDetails[activePhoto] && (
                <div className="quickview-caption-bar">
                  <strong>{galleryDetails[activePhoto].title}</strong>
                  <p>{galleryDetails[activePhoto].caption}</p>
                </div>
              )}
            </div>

            <div className="quickview-thumbs-strip">
              {photos.map((src, i) => (
                <button
                  key={i}
                  className={`quickview-thumb-btn ${activePhoto === i ? 'active' : ''}`}
                  onClick={() => setActivePhoto(i)}
                >
                  <img src={src} alt={`${pkg.title} thumb ${i + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info Section */}
          <div className="quickview-info-col">
            <div className="quickview-badge-row">
              <span className="pkg-badge">{pkg.badge || 'Verified Tour'}</span>
              <span className="pkg-cat-pill">{pkg.cat === 'odisha' ? 'Odisha Tour' : 'India Domestic'}</span>
              <span className="pkg-theme-pill">{pkg.theme}</span>
            </div>

            <h2 className="quickview-title">{pkg.title}</h2>

            <div className="quickview-specs-row">
              <span><FaClock /> {pkg.days}</span>
              <span><FaMapMarkerAlt /> {pkg.dest}</span>
              <span><FaStar className="star-icon" /> {pkg.rating} ({pkg.reviewsCount} reviews)</span>
            </div>

            <p className="quickview-overview">{pkg.overview}</p>

            <div className="quickview-highlights-box">
              <h4>Tour Highlights</h4>
              <ul>
                {pkg.highlights.map((h, i) => (
                  <li key={i}><FaCheck className="check-mini" /> {h}</li>
                ))}
              </ul>
            </div>

            <div className="quickview-inclusions-row">
              <span><FaCheck /> Sanitized Private Cab</span>
              <span><FaCheck /> 3★/4★ Hotel</span>
              <span><FaCheck /> Free Breakfast</span>
              <span><FaCheck /> Verified Chauffeur</span>
            </div>

            <div className="quickview-footer-pricing">
              <div>
                <span className="price-tag-label">Price per person</span>
                <div className="price-wrap">
                  <strong className="current-price large">
                    <FaRupeeSign className="inr-icon" />{pkg.price.toLocaleString('en-IN')}
                  </strong>
                  {pkg.originalPrice && (
                    <span className="original-price">₹{pkg.originalPrice.toLocaleString('en-IN')}</span>
                  )}
                </div>
              </div>

              <div className="quickview-actions">
                <Btn to={`/${pkg.cat}-tour-packages/${pkg.slug}`} variant="navy" onClick={onClose}>
                  Full Details &amp; Plan
                </Btn>
                <Btn to={`/book-your-trip?package=${pkg.slug}`} variant="yellow" onClick={onClose}>
                  Book Now
                </Btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 80);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}
