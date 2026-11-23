import { useState, useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import {
  FaClock,
  FaRupeeSign,
  FaMapMarkerAlt,
  FaStar,
  FaCheck,
  FaTimes,
  FaCalendarAlt,
  FaUsers,
  FaHotel,
  FaCar,
  FaWhatsapp,
  FaPhoneAlt,
  FaShieldAlt,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
  FaCamera,
  FaImages,
  FaExpand,
  FaTh,
  FaList,
  FaChevronLeft,
  FaChevronRight,
  FaCoffee,
  FaGasPump,
  FaSuitcaseRolling,
  FaEye
} from 'react-icons/fa';
import { packages, getPackage, CONTACT } from '../data/packages.js';
import { PackageCard, PackageQuickModal, PageHero, Btn, Img, Reveal, useTitle } from '../components/common.jsx';
import SearchPanel from '../components/SearchPanel.jsx';
import { NotFound } from './Static.jsx';

function FilterablePackageList({ cat, title, sub, themes }) {
  useTitle(title);
  const [selectedTheme, setSelectedTheme] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recommended');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [quickViewPkg, setQuickViewPkg] = useState(null);
  const [livePackages, setLivePackages] = useState(packages.filter(p => p.cat === cat));

  useEffect(() => {
    fetch(`/api/packages?cat=${cat}`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.packages && data.packages.length > 0) {
          setLivePackages(data.packages);
        }
      })
      .catch(err => console.warn('Using static packages fallback:', err));
  }, [cat]);

  const catPackages = livePackages;

  const filtered = catPackages.filter(p => {
    const matchTheme = selectedTheme === 'all' || p.theme.toLowerCase().includes(selectedTheme.toLowerCase());
    const matchDuration =
      selectedDuration === 'all' ? true :
        selectedDuration === 'short' ? p.durationDays <= 3 :
          selectedDuration === 'medium' ? (p.durationDays >= 4 && p.durationDays <= 5) :
            selectedDuration === 'long' ? p.durationDays >= 6 : true;

    const matchQuery = !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.dest.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchTheme && matchDuration && matchQuery;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'duration') return a.durationDays - b.durationDays;
    return b.rating - a.rating;
  });

  return (
    <div className="packages-listing-page">
      <PageHero
        title={title}
        sub={sub}
        badge={`${catPackages.length} Handcrafted Tours · 100% Real Photos`}
      />

      {/* Trust Highlights Bar */}
      <section className="pkg-trust-ribbon-wrap container">
        <div className="pkg-trust-ribbon glass-card">
          <div className="trust-ribbon-item">
            <FaCamera className="trust-ribbon-icon text-gold" />
            <div>
              <strong>100% Real Photos</strong>
              <small>Verified on-ground destination images</small>
            </div>
          </div>
          <div className="trust-ribbon-item">
            <FaCar className="trust-ribbon-icon text-sky" />
            <div>
              <strong>Private Sanitized Cab</strong>
              <small>Chauffeur, fuel, toll &amp; permits included</small>
            </div>
          </div>
          <div className="trust-ribbon-item">
            <FaHotel className="trust-ribbon-icon text-green" />
            <div>
              <strong>3★ &amp; 4★ Handpicked Hotels</strong>
              <small>Clean rooms with daily complimentary breakfast</small>
            </div>
          </div>
          <div className="trust-ribbon-item">
            <FaShieldAlt className="trust-ribbon-icon text-gold" />
            <div>
              <strong>Free Cancellation</strong>
              <small>100% full refund up to 15 days prior</small>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-margin">
        {/* Controls bar */}
        <div className="filter-controls-bar glass-card">
          <div className="controls-top-row">
            <div className="search-input-wrap">
              <input
                type="text"
                placeholder="Search by destination, temple, beach or hill..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pkg-search-field"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  title="Clear search"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            {/* View Switcher: Grid vs List */}
            <div className="view-mode-toggle">
              <button
                className={`view-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Grid View"
                aria-label="Grid View"
              >
                <FaTh /> Grid
              </button>
              <button
                className={`view-mode-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                title="Showcase List View"
                aria-label="Showcase List View"
              >
                <FaList /> Showcase
              </button>
            </div>

            <div className="sort-wrap">
              <label>Sort:</label>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="sort-select">
                <option value="recommended">Top Rated / Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration">Duration (Days)</option>
              </select>
            </div>
          </div>

          {/* Theme Filters */}
          <div className="filter-subsections">
            <div className="theme-pills-list">
              <span className="filter-label-tag">Theme:</span>
              <button
                className={`theme-pill-btn ${selectedTheme === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedTheme('all')}
              >
                All Themes ({catPackages.length})
              </button>
              {themes.map(t => (
                <button
                  key={t.id}
                  className={`theme-pill-btn ${selectedTheme === t.id ? 'active' : ''}`}
                  onClick={() => setSelectedTheme(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Duration Filters */}
            <div className="duration-pills-list">
              <span className="filter-label-tag">Duration:</span>
              <button
                className={`theme-pill-btn ${selectedDuration === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedDuration('all')}
              >
                Any Duration
              </button>
              <button
                className={`theme-pill-btn ${selectedDuration === 'short' ? 'active' : ''}`}
                onClick={() => setSelectedDuration('short')}
              >
                2 - 3 Days (Weekend Break)
              </button>
              <button
                className={`theme-pill-btn ${selectedDuration === 'medium' ? 'active' : ''}`}
                onClick={() => setSelectedDuration('medium')}
              >
                4 - 5 Days (Popular)
              </button>
              <button
                className={`theme-pill-btn ${selectedDuration === 'long' ? 'active' : ''}`}
                onClick={() => setSelectedDuration('long')}
              >
                6+ Days (Grand Tour)
              </button>
            </div>
          </div>

          <div className="filter-results-status">
            <span>
              Showing <strong>{filtered.length}</strong> of <strong>{catPackages.length}</strong> verified tour packages with real destination photos
            </span>
            {(selectedTheme !== 'all' || selectedDuration !== 'all' || searchQuery) && (
              <button
                className="reset-filters-link"
                onClick={() => {
                  setSelectedTheme('all');
                  setSelectedDuration('all');
                  setSearchQuery('');
                }}
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Results grid or list */}
        {filtered.length > 0 ? (
          <div className={viewMode === 'grid' ? 'grid3 packages-grid' : 'packages-list-wrap'}>
            {filtered.map(pkg => (
              <PackageCard
                key={pkg.slug}
                p={pkg}
                layout={viewMode}
                onQuickView={(p) => setQuickViewPkg(p)}
              />
            ))}
          </div>
        ) : (
          <div className="no-results-card glass-card text-center">
            <h3>No packages match your search</h3>
            <p>Try resetting the filter or search keyword to see all available packages.</p>
            <button
              className="btn btn-navy"
              onClick={() => {
                setSelectedTheme('all');
                setSelectedDuration('all');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Quick View Lightbox Modal */}
      {quickViewPkg && (
        <PackageQuickModal
          pkg={quickViewPkg}
          onClose={() => setQuickViewPkg(null)}
        />
      )}
    </div>
  );
}

export const OdishaPackages = () => (
  <FilterablePackageList
    cat="odisha"
    title="Odisha Tour Packages"
    sub="Explore Lord Jagannath Dham Puri, Konark Sun Temple, Chilika Dolphins, and misty Daringbadi hill retreats."
    themes={[
      { id: 'spiritual', label: 'Spiritual & Heritage' },
      { id: 'hill', label: 'Hills & Nature' },
      { id: 'wildlife', label: 'Wildlife & Safaris' },
      { id: 'beach', label: 'Beaches & Lakes' },
      { id: 'culture', label: 'Art & Culture' }
    ]}
  />
);

export const DomesticPackages = () => (
  <FilterablePackageList
    cat="domestic"
    title="Incredible India Tour Packages"
    sub="From Himalayan snow valleys of Kashmir and Himachal to Rajasthan’s royal palaces and Kerala’s backwaters."
    themes={[
      { id: 'himalayas', label: 'Himalayas & Snow' },
      { id: 'heritage', label: 'Royals & Heritage' },
      { id: 'backwaters', label: 'Backwaters & Nature' },
      { id: 'beach', label: 'Beaches & Islands' },
      { id: 'spiritual', label: 'Sacred Pilgrimage' }
    ]}
  />
);

export function PackageDetails({ cat }) {
  const { slug } = useParams();
  const [pkg, setPkg] = useState(undefined);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [openDay, setOpenDay] = useState(0);
  const [allDaysOpen, setAllDaysOpen] = useState(false);
  const [guestsCount, setGuestsCount] = useState(2);

  useEffect(() => {
    // 1. Initial display from static dataset if available (with smart alias/fuzzy resolution)
    const initial = getPackage(slug);
    if (initial) {
      setPkg(initial);
    }

    // 2. Fetch live updated data from backend API using resolved canonical slug
    const targetSlug = initial?.slug || slug;
    fetch(`/api/packages/${targetSlug}`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.package) {
          setPkg(data.package);
        } else if (!initial) {
          setPkg(null);
        }
      })
      .catch(() => {
        if (!initial) setPkg(null);
      });

    setActiveImgIndex(0);
    setOpenDay(0);
  }, [slug, cat]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') nextLightboxPhoto();
      if (e.key === 'ArrowLeft') prevLightboxPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  useTitle(pkg?.title || 'Package Details');

  if (pkg === undefined) {
    return (
      <div className="container center" style={{ padding: '6rem 0' }}>
        <p>Loading package details…</p>
      </div>
    );
  }

  if (!pkg) return <NotFound />;

  const currentGallery = pkg.gallery && pkg.gallery.length > 0 ? pkg.gallery : [pkg.img];
  const galleryDetails = pkg.galleryDetails || currentGallery.map((url, i) => ({
    url,
    title: `${(pkg.dest || 'Odisha').split(',')[0]} Highlight`,
    caption: `Authentic sightseeing spot for ${pkg.title}`,
    tag: 'Destination'
  }));
  const totalCost = (pkg.price || 9999) * guestsCount;

  const highlights = Array.isArray(pkg.highlights)
    ? pkg.highlights
    : (typeof pkg.highlights === 'string'
        ? pkg.highlights.split(',').map(s => s.trim()).filter(Boolean)
        : ['VIP Temple Darshan', 'Sanitized AC Cab', 'Verified Chauffeur', 'Complimentary Breakfast']);

  const inclusions = pkg.inclusions && pkg.inclusions.length > 0 ? pkg.inclusions : [
    'Exclusive sanitized private AC vehicle for full itinerary',
    'Handpicked 3★/4★ resort accommodations with breakfast',
    'All highway tolls, state permits, parking & fuel charges',
    'Dedicated commercial chauffeur with hill & temple route experience',
    '24/7 dedicated Bhubaneswar tour concierge support'
  ];

  const exclusions = pkg.exclusions && pkg.exclusions.length > 0 ? pkg.exclusions : [
    'Airfare / Train tickets to and from destination',
    'Monument entry fees, camera charges & special darshan tickets',
    'Personal expenses, laundry, telephone calls, room service',
    'Lunch, dinner & items not mentioned in inclusions',
    'GST 5% as applicable'
  ];

  const terms = pkg.terms && pkg.terms.length > 0 ? pkg.terms : [
    '100% full refund on package cancellations made 15+ days prior to travel date',
    'Flexible rescheduling permitted up to 7 days before commencement with zero fee',
    'Vehicle available on dedicated basis as per prescribed tour itinerary',
    'Hotel check-in at 12:00 PM and check-out at 10:00 AM standard policy'
  ];

  const itinerary = pkg.itinerary && pkg.itinerary.length > 0 ? pkg.itinerary : [
    {
      day: 1,
      title: `Arrival & Transfer to ${(pkg.dest || 'Destination').split(',')[0]}`,
      desc: `Pickup from airport or railway station in sanitized private AC cab. Check-in to resort and enjoy authentic local sightseeing.`
    },
    {
      day: 2,
      title: `Explore ${pkg.dest || 'Local Attractions'}`,
      desc: `Full day guided private sightseeing covering major attractions, natural viewpoints, and cultural landmarks.`
    },
    {
      day: 3,
      title: `Leisure & Departure Transfer`,
      desc: `Morning breakfast, souvenir shopping, and timely drop-off at the airport or station with cherished memories.`
    }
  ];

  const nextLightboxPhoto = () => {
    setActiveImgIndex((prev) => (prev + 1) % currentGallery.length);
  };

  const prevLightboxPhoto = () => {
    setActiveImgIndex((prev) => (prev - 1 + currentGallery.length) % currentGallery.length);
  };

  const toggleAllDays = () => {
    setAllDaysOpen(!allDaysOpen);
    setOpenDay(!allDaysOpen ? 'all' : -1);
  };

  return (
    <div className="package-details-page">
      <PageHero
        title={pkg.title}
        sub={`${pkg.dest} · ${pkg.days}`}
        badge={`${pkg.theme} · 100% Real Authentic Photos`}
        bgImage={pkg.img}
      />

      <section className="container detail-layout-grid section-margin">
        {/* Main Left Content */}
        <div className="detail-main-col">
          {/* Advanced Luxury Photo Gallery Showcase (Airbnb / Booking style) */}
          <div className="pkg-modern-gallery-card glass-card">
            <div className="gallery-header-row">
              <div className="gallery-header-left">
                <span className="gallery-verified-pill">
                  <FaCamera /> Verified Destination Photography
                </span>
                <span className="gallery-counter-pill">
                  {currentGallery.length} Real High-Res Photos
                </span>
              </div>
              <button
                type="button"
                className="btn btn-navy-outline btn-sm gallery-expand-btn"
                onClick={() => setLightboxOpen(true)}
              >
                <FaExpand /> View Fullscreen Gallery
              </button>
            </div>

            {/* Collage Showcase: 1 Hero Photo + 4 Mosaic Grid Items */}
            <div className="pkg-gallery-mosaic">
              {/* Primary Large Hero View */}
              <div
                className="mosaic-primary-img-wrap"
                onClick={() => setLightboxOpen(true)}
                title="Click to view full photo"
              >
                <img
                  src={currentGallery[activeImgIndex] || pkg.img}
                  alt={pkg.title}
                  className="mosaic-primary-photo"
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = '/images/pkg-golden-triangle.jpg';
                  }}
                />
                <div className="mosaic-photo-overlay">
                  {galleryDetails[activeImgIndex] && (
                    <div className="mosaic-caption-info">
                      <span className="mosaic-tag-badge">{galleryDetails[activeImgIndex].tag}</span>
                      <strong>{galleryDetails[activeImgIndex].title}</strong>
                      <p>{galleryDetails[activeImgIndex].caption}</p>
                    </div>
                  )}
                  <span className="mosaic-zoom-hint">
                    <FaExpand /> Click to Zoom
                  </span>
                </div>
              </div>

              {/* Side Mosaic Tiles */}
              <div className="mosaic-secondary-col">
                {currentGallery.slice(0, 4).map((imgUrl, i) => {
                  const isLastTile = i === 3 && currentGallery.length > 4;
                  return (
                    <div
                      key={i}
                      className={`mosaic-tile ${activeImgIndex === i ? 'active' : ''}`}
                      onClick={() => {
                        setActiveImgIndex(i);
                        if (isLastTile) setLightboxOpen(true);
                      }}
                    >
                      <img
                        src={imgUrl}
                        alt={`${pkg.title} spot ${i + 1}`}
                        onError={e => {
                          e.target.onerror = null;
                          e.target.src = '/images/pkg-golden-triangle.jpg';
                        }}
                      />
                      {isLastTile ? (
                        <div className="mosaic-more-overlay">
                          <strong>+{currentGallery.length - 3}</strong>
                          <span>More Photos</span>
                        </div>
                      ) : (
                        galleryDetails[i] && (
                          <div className="tile-micro-caption">
                            <span>{galleryDetails[i].title}</span>
                          </div>
                        )
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile / Tablet Horizontal Real-Photo Quick Thumbnails Strip */}
            <div className="mobile-gallery-strip">
              {currentGallery.map((imgUrl, i) => (
                <button
                  key={i}
                  type="button"
                  className={`mobile-strip-thumb ${activeImgIndex === i ? 'active' : ''}`}
                  onClick={() => setActiveImgIndex(i)}
                  aria-label={`Show photo ${i + 1}`}
                >
                  <img
                    src={imgUrl}
                    alt={`Photo ${i + 1}`}
                    onError={e => {
                      e.target.onerror = null;
                      e.target.src = '/images/pkg-golden-triangle.jpg';
                    }}
                  />
                  <span className="strip-thumb-num">{i + 1}</span>
                </button>
              ))}
              <button
                type="button"
                className="mobile-strip-more-btn"
                onClick={() => setLightboxOpen(true)}
              >
                <FaExpand />
                <span>All {currentGallery.length}</span>
              </button>
            </div>

            {/* Horizontal Thumbnails Strip */}
            <div className="pkg-thumbnails-track">
              {currentGallery.map((imgUrl, i) => (
                <button
                  key={i}
                  className={`thumb-box-btn ${activeImgIndex === i ? 'active' : ''}`}
                  onClick={() => setActiveImgIndex(i)}
                  title={galleryDetails[i]?.title || `Photo ${i + 1}`}
                >
                  <img
                    src={imgUrl}
                    alt={`${pkg.title} thumb ${i + 1}`}
                    onError={e => {
                      e.target.onerror = null;
                      e.target.src = '/images/pkg-golden-triangle.jpg';
                    }}
                  />
                  <span className="thumb-idx">{i + 1}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick specs ribbon */}
          <div className="specs-ribbon glass-card">
            <div className="spec-unit">
              <FaClock className="spec-icon text-sky" />
              <div>
                <small>Duration</small>
                <strong>{pkg.days}</strong>
              </div>
            </div>
            <div className="spec-unit">
              <FaMapMarkerAlt className="spec-icon text-gold" />
              <div>
                <small>Route &amp; Destination</small>
                <strong>{pkg.dest}</strong>
              </div>
            </div>
            <div className="spec-unit">
              <FaHotel className="spec-icon text-green" />
              <div>
                <small>Accommodation</small>
                <strong>3-Star / 4-Star Stays</strong>
              </div>
            </div>
            <div className="spec-unit">
              <FaCar className="spec-icon text-sky" />
              <div>
                <small>Private Transport</small>
                <strong>Sanitized AC Cab</strong>
              </div>
            </div>
          </div>

          {/* Tour Overview */}
          <Reveal className="glass-card detail-box">
            <h2>Tour Overview</h2>
            {pkg.overview && (pkg.overview.includes('<p>') || pkg.overview.includes('<h2>') || pkg.overview.includes('<div>') || pkg.overview.includes('<ul')) ? (
              <div className="tiptap-rendered-content" dangerouslySetInnerHTML={{ __html: pkg.overview }} />
            ) : (
              <p className="lead-overview">{pkg.overview || pkg.desc || 'Handcrafted tour experience with verified private chauffeur transport and comfortable resort stays.'}</p>
            )}

            <h3 className="subhead-gold">Key Tour Highlights</h3>
            <ul className="highlights-detailed-list">
              {highlights.map((h, i) => (
                <li key={i}>
                  <FaCheck className="check-gold-icon" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Day-by-Day Detailed Itinerary with Real Destination Images */}
          <Reveal className="glass-card detail-box">
            <div className="itinerary-head-row">
              <div>
                <h2>Day-by-Day Detailed Itinerary</h2>
                <p className="subtext-muted">Carefully designed by our local destination experts</p>
              </div>
              <button
                type="button"
                className="btn btn-navy-outline btn-sm toggle-days-btn"
                onClick={toggleAllDays}
              >
                {allDaysOpen ? 'Collapse All Days' : 'Expand All Days'}
              </button>
            </div>

            <div className="itinerary-accordion">
              {itinerary.map((dayItem, idx) => {
                const isOpen = allDaysOpen || openDay === idx;
                // Assign a matching authentic photo from currentGallery for this day
                const dayPhoto = currentGallery[idx % currentGallery.length];
                const dayDetail = galleryDetails[idx % galleryDetails.length];

                return (
                  <div key={idx} className={`itinerary-day-card ${isOpen ? 'open' : ''}`}>
                    <button
                      className="day-header-btn"
                      onClick={() => setOpenDay(isOpen && !allDaysOpen ? -1 : idx)}
                    >
                      <div className="day-badge-col">
                        <span className="day-pill">Day {dayItem.day || idx + 1}</span>
                      </div>
                      <div className="day-title-col">
                        <strong>{dayItem.title || dayItem}</strong>
                      </div>
                      <div className="day-arrow-col">
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="day-desc-body">
                        <div className="day-body-flex">
                          <div className="day-text-content">
                            <p>{dayItem.desc || dayItem}</p>
                            <div className="day-inclusions-tag">
                              <span><FaCar className="tag-icon" /> Private AC Sightseeing</span>
                              <span><FaHotel className="tag-icon" /> Hotel Stay with Breakfast</span>
                              <span><FaCheck className="tag-icon" /> All Tolls &amp; Parking Included</span>
                            </div>
                          </div>
                          {dayPhoto && (
                            <div
                              className="day-img-thumbnail-wrap"
                              onClick={() => {
                                setActiveImgIndex(idx % currentGallery.length);
                                setLightboxOpen(true);
                              }}
                              title="Click to view photo"
                            >
                              <img
                                src={dayPhoto}
                                alt={dayItem.title}
                                onError={e => {
                                  e.target.onerror = null;
                                  e.target.src = '/images/pkg-golden-triangle.jpg';
                                }}
                              />
                              <span className="day-photo-badge">
                                <FaCamera /> {dayDetail?.title || `Day ${idx + 1}`}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Included Private Vehicle Fleet Showcase */}
          <Reveal className="glass-card detail-box">
            <h2>Private Vehicle Options Included</h2>
            <p className="subtext-muted">
              Travel in comfort with our dedicated sanitized private fleet and verified courteous local chauffeurs.
            </p>
            <div className="grid3 vehicle-fleet-package-grid">
              <div className="package-vehicle-card">
                <div className="pkg-v-img">
                  <img src="/images/vehicle-swift-dzire.jpg" alt="Swift Dzire Sedan" />
                  <span className="pkg-v-badge">1 - 3 Guests</span>
                </div>
                <div className="pkg-v-body">
                  <h4>Sedan (Swift Dzire / Etios)</h4>
                  <p>Ideal for couples or small families</p>
                  <ul className="pkg-v-feats">
                    <li><FaCar /> Full AC &amp; Sanitized</li>
                    <li><FaSuitcaseRolling /> 2 Large Luggage</li>
                    <li><FaShieldAlt /> Verified Chauffeur</li>
                  </ul>
                </div>
              </div>

              <div className="package-vehicle-card popular">
                <div className="pkg-v-img">
                  <img src="/images/vehicle-innova-crysta.jpg" alt="Innova Crysta SUV" />
                  <span className="pkg-v-badge gold">4 - 6 Guests · Most Popular</span>
                </div>
                <div className="pkg-v-body">
                  <h4>SUV (Innova Crysta / Ertiga)</h4>
                  <p>Maximum comfort for family groups</p>
                  <ul className="pkg-v-feats">
                    <li><FaCar /> Dual AC, Recliner Seats</li>
                    <li><FaSuitcaseRolling /> 4-5 Large Luggage</li>
                    <li><FaShieldAlt /> Experienced Hill Driver</li>
                  </ul>
                </div>
              </div>

              <div className="package-vehicle-card">
                <div className="pkg-v-img">
                  <img src="/images/vehicle-tempo-traveller.jpg" alt="Luxury Tempo Traveller" />
                  <span className="pkg-v-badge">7 - 16 Guests</span>
                </div>
                <div className="pkg-v-body">
                  <h4>Luxury Tempo Traveller</h4>
                  <p>Spacious group travel with pushback seats</p>
                  <ul className="pkg-v-feats">
                    <li><FaCar /> High-Roof AC Cabin</li>
                    <li><FaSuitcaseRolling /> Huge Dedicated Boot</li>
                    <li><FaShieldAlt /> Commercial Tourism Permit</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Inclusions & Exclusions */}
          <Reveal className="glass-card detail-box">
            <h2>What’s Included &amp; Excluded</h2>
            <div className="grid2 inc-exc-grid">
              <div className="inc-col">
                <h4 className="inc-head"><FaCheck /> Inclusions</h4>
                <ul className="inc-list">
                  {inclusions.map((inc, i) => (
                    <li key={i}><FaCheck className="inc-check" /> {inc}</li>
                  ))}
                </ul>
              </div>

              <div className="exc-col">
                <h4 className="exc-head"><FaTimes /> Exclusions</h4>
                <ul className="exc-list">
                  {exclusions.map((exc, i) => (
                    <li key={i}><FaTimes className="exc-cross" /> {exc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Booking Terms & Cancellation */}
          <Reveal className="glass-card detail-box">
            <h2>Important Booking Terms</h2>
            <ul className="terms-list">
              {terms.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Sticky Booking & Quotation Card */}
        <aside className="detail-sidebar-col">
          <div className="sticky-booking-card glass-card">
            <div className="pricing-header">
              <span className="price-tagline">Price Per Person (Starting)</span>
              <div className="rate-amount-row">
                <h2><FaRupeeSign className="inr-large" />{pkg.price.toLocaleString('en-IN')}</h2>
                {pkg.originalPrice && (
                  <span className="strike-amount">₹{pkg.originalPrice.toLocaleString('en-IN')}</span>
                )}
              </div>
              <small className="tax-subtext">Includes private AC vehicle, hotel stay &amp; breakfast</small>
            </div>

            <hr className="divider-line" />

            <div className="price-calculator-row">
              <label>Number of Guests:</label>
              <div className="guest-stepper">
                <button
                  type="button"
                  onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                  className="step-btn"
                  aria-label="Decrease guests"
                >-</button>
                <span className="step-count">{guestsCount}</span>
                <button
                  type="button"
                  onClick={() => setGuestsCount(guestsCount + 1)}
                  className="step-btn"
                  aria-label="Increase guests"
                >+</button>
              </div>
            </div>

            <div className="total-calculation-box">
              <span>Estimated Total ({guestsCount} {guestsCount === 1 ? 'Guest' : 'Guests'}):</span>
              <strong>₹{totalCost.toLocaleString('en-IN')}</strong>
            </div>

            <div className="booking-cta-btns">
              <Btn
                to={`/book-your-trip?package=${pkg.slug}&guests=${guestsCount}`}
                variant="yellow"
                className="btn-full btn-lg"
              >
                Proceed to Book Package
              </Btn>

              <a
                href={`https://wa.me/${CONTACT.tel.slice(1)}?text=Hi%20Our%20Dream%20Trip,%20I%20am%20interested%20in%20${encodeURIComponent(pkg.title)}%20(${pkg.days})%20for%20${guestsCount}%20guests.`}
                className="btn btn-wa btn-full"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp /> Chat With Tour Expert
              </a>

              <a href={`tel:${CONTACT.tel}`} className="btn btn-navy-outline btn-full">
                <FaPhoneAlt /> Call: {CONTACT.phone}
              </a>
            </div>

            <div className="booking-trust-guarantees">
              <span><FaShieldAlt /> 100% Verified Local Driver</span>
              <span><FaCheck /> Free Cancellation Up to 15 Days</span>
              <span><FaStar className="star-icon" /> 4.9 Rated Customer Service</span>
              <span><FaCamera /> Real Destination Photos Guaranteed</span>
            </div>
          </div>
        </aside>
      </section>

      {/* Floating Sticky Mobile CTA Bar */}
      <div className="mobile-sticky-cta-bar">
        <div className="mobile-cta-price-col">
          <small>Starting from</small>
          <strong>₹{pkg.price.toLocaleString('en-IN')}</strong>
        </div>
        <div className="mobile-cta-btns-col">
          <a
            href={`https://wa.me/${CONTACT.tel.slice(1)}?text=Hi,%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(pkg.title)}`}
            className="btn btn-wa btn-sm"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp /> Chat
          </a>
          <Btn to={`/book-your-trip?package=${pkg.slug}&guests=${guestsCount}`} variant="yellow" className="btn-sm">
            Book Now
          </Btn>
        </div>
      </div>

      {/* Recommended Related Packages */}
      <section className="container section-margin">
        <div className="section-head text-center">
          <h3>Other Tours You May Like</h3>
          <p className="subtext-muted">Handcrafted experiences with real verified photos</p>
        </div>
        <div className="grid3 packages-grid">
          {packages
            .filter(p => p.cat === pkg.cat && p.slug !== pkg.slug)
            .slice(0, 3)
            .map(p => (
              <PackageCard key={p.slug} p={p} />
            ))}
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div className="fullscreen-lightbox-overlay" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close fullscreen gallery"
            >
              <FaTimes />
            </button>

            {/* Main Lightbox Image View */}
            <div className="lightbox-image-stage">
              <button
                type="button"
                className="lightbox-arrow-btn prev"
                onClick={prevLightboxPhoto}
                aria-label="Previous photo"
              >
                <FaChevronLeft />
              </button>

              <div className="lightbox-main-img-wrap">
                <img
                  src={currentGallery[activeImgIndex] || pkg.img}
                  alt={galleryDetails[activeImgIndex]?.title || pkg.title}
                  className="lightbox-img"
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = '/images/pkg-golden-triangle.jpg';
                  }}
                />
                <div className="lightbox-caption-card">
                  <div className="lightbox-caption-top">
                    <span className="lightbox-tag-badge">
                      {galleryDetails[activeImgIndex]?.tag || 'Sightseeing'}
                    </span>
                    <span className="lightbox-counter-text">
                      {activeImgIndex + 1} of {currentGallery.length} Photos
                    </span>
                  </div>
                  <h3>{galleryDetails[activeImgIndex]?.title || pkg.title}</h3>
                  <p>{galleryDetails[activeImgIndex]?.caption || pkg.overview}</p>
                </div>
              </div>

              <button
                type="button"
                className="lightbox-arrow-btn next"
                onClick={nextLightboxPhoto}
                aria-label="Next photo"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* Bottom Lightbox Thumbnails Strip */}
            <div className="lightbox-thumbnails-carousel">
              {currentGallery.map((url, i) => (
                <button
                  key={i}
                  className={`lightbox-thumb ${activeImgIndex === i ? 'active' : ''}`}
                  onClick={() => setActiveImgIndex(i)}
                >
                  <img src={url} alt={`Thumbnail ${i + 1}`} />
                  <span>{i + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function SearchResults() {
  const [q, setQ] = useSearchParams();
  const d = q.get('destination') || '';
  const cat = q.get('category') || 'all';
  const dt = q.get('date') || '';
  const t = q.get('travellers') || '2';
  const [quickViewPkg, setQuickViewPkg] = useState(null);

  useTitle('Search Results');

  const results = packages.filter(p => {
    const matchCat = cat === 'all' || p.cat === cat;
    const matchDest = !d || p.dest.toLowerCase().includes(d.toLowerCase());
    return matchCat && matchDest;
  });

  return (
    <div className="search-results-page">
      <PageHero
        title="Search Results"
        sub={d ? `Found ${results.length} package(s) matching “${d}”` : `Found ${results.length} package(s)`}
        badge={`${t} Guests · ${dt || 'Flexible Dates'} · Real Photos`}
      />

      <section className="container section-margin">
        <div className="search-wrap-top">
          <SearchPanel key={q.toString()} initial={Object.fromEntries(q)} />
        </div>

        {results.length > 0 ? (
          <div className="grid3 packages-grid">
            {results.map(p => (
              <PackageCard
                key={p.slug}
                p={p}
                onQuickView={(pkg) => setQuickViewPkg(pkg)}
              />
            ))}
          </div>
        ) : (
          <div className="center glass-card no-results-box">
            <h2>No packages found</h2>
            <p>We couldn’t find packages matching “{d}”. Try selecting another destination or explore all our 32+ packages.</p>
            <Btn onClick={() => setQ({})} variant="navy">
              Reset Filters &amp; View All Tours
            </Btn>
          </div>
        )}
      </section>

      {quickViewPkg && (
        <PackageQuickModal
          pkg={quickViewPkg}
          onClose={() => setQuickViewPkg(null)}
        />
      )}
    </div>
  );
}
