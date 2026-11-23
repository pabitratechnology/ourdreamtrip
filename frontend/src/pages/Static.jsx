import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {
  FaCheckCircle,
  FaShieldAlt,
  FaCarSide,
  FaUsers,
  FaSuitcase,
  FaSnowflake,
  FaClock,
  FaPhoneAlt,
  FaWhatsapp,
  FaAward,
  FaHeart,
  FaCompass,
  FaTimes,
  FaSearchPlus
} from 'react-icons/fa';
import { cars, CONTACT, packages } from '../data/packages.js';
import { PageHero, Btn, Img, Reveal, useTitle } from '../components/common.jsx';

export const AboutUs = () => {
  useTitle('About Us | Our Dream Trip - ourdreamtrip.com');
  return (
    <div className="about-us-page">
      <PageHero
        title="About Our Dream Trip"
        sub="Your trusted local destination management company (DMC for Odisha) and Incredible India."
        badge="Since 2014 · Govt. Recognized"
      />

      <section className="container section-margin">
        <div className="about-intro-grid glass-card">
          <div className="about-text-col">
            <span className="badge-pill">Our Heritage &amp; Roots</span>
            <h2>Rooted in Bhubaneswar, Guiding Travelers Worldwide</h2>
            <p>
              Founded in the sacred Temple City of Bhubaneswar, <strong>Our Dream Trip</strong> (ourdreamtrip.com) was born out of an enduring love for our state’s magnificent architectural heritage, untouched coastlines, and pristine biosphere reserves.
            </p>
            <p>
              Over the past 12+ years, we have grown into one of eastern India’s most reputable tour operators. We don’t just book hotel rooms and cabs; we arrange Panda assistance for divine Jagannath Darshans, guide travelers through the ancient caves of Khandagiri, navigate the dolphin waterways of Chilika, and arrange authentic artisan interactions in Raghurajpur.
            </p>

            <div className="about-core-values">
              <div className="value-item">
                <FaHeart className="val-icon" />
                <div>
                  <strong>Authentic Hospitality</strong>
                  <small>True Odia warmth, treating every guest as family (Atithi Devo Bhava).</small>
                </div>
              </div>
              <div className="value-item">
                <FaShieldAlt className="val-icon" />
                <div>
                  <strong>Guest Safety First</strong>
                  <small>Rigorous vehicle safety checks, verified drivers, and round-the-clock monitoring.</small>
                </div>
              </div>
              <div className="value-item">
                <FaAward className="val-icon" />
                <div>
                  <strong>Zero Hidden Costs</strong>
                  <small>Transparent pricing including all parking, tolls, taxes, and driver allowances.</small>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image-col">
            <div className="about-img-stack">
              <img
                src="https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=800&q=80"
                alt="Konark Sun Temple"
                className="about-img-main"
              />
              <div className="about-stat-floater glass-navy">
                <strong>15,000+</strong>
                <span>Delighted Travelers Guided</span>
              </div>
            </div>
          </div>
        </div>

        {/* Milestones row */}
        <div className="grid4 about-milestones-grid section-margin">
          <div className="milestone-box glass-card text-center">
            <h3>12+</h3>
            <p>Years of Active Travel Experience</p>
          </div>
          <div className="milestone-box glass-card text-center">
            <h3>34+</h3>
            <p>Handcrafted Odisha &amp; India Packages</p>
          </div>
          <div className="milestone-box glass-card text-center">
            <h3>50+</h3>
            <p>Sanitized Fleet Vehicles</p>
          </div>
          <div className="milestone-box glass-card text-center">
            <h3>4.9★</h3>
            <p>Average Google Review Rating</p>
          </div>
        </div>

        {/* Why our guides excel */}
        <div className="guides-section glass-card section-margin">
          <div className="section-head text-center">
            <span className="badge-pill">The Local Difference</span>
            <h2>Our Verified Local Chauffeurs &amp; Guides</h2>
            <p>A great road trip depends on the person behind the wheel. That’s why we handpick every driver.</p>
          </div>

          <div className="grid3 guide-perks-grid">
            <div className="guide-perk-item">
              <FaCheckCircle className="chk-icon" />
              <h4>Police Verified &amp; Commercial Licensed</h4>
              <p>Every driver undergoes strict background verification and holds authorized tourist commercial badges.</p>
            </div>
            <div className="guide-perk-item">
              <FaCheckCircle className="chk-icon" />
              <h4>Multilingual &amp; Courteous</h4>
              <p>Fluent in Odia, Hindi, and English with courteous behavior and family-friendly manners.</p>
            </div>
            <div className="guide-perk-item">
              <FaCheckCircle className="chk-icon" />
              <h4>Deep Local Route &amp; Temple Knowledge</h4>
              <p>Expertise in shortcut scenic bypasses, temple timings, authentic food stops, and local handicraft emporiums.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const CarRental = () => {
  useTitle('Car & Coach Rental Services in Odisha');
  return (
    <div className="car-rental-page">
      <PageHero
        title="Car &amp; Coach Rental Services in Odisha"
        sub="Clean, sanitized sedans, luxury SUVs, and group travellers with verified local chauffeurs."
        badge="Available 24x7 in Bhubaneswar, Puri &amp; Cuttack"
      />

      <section className="container section-margin">
        <div className="rental-intro-banner glass-card">
          <div>
            <h3>Airport Transfers, Outstation Tours &amp; Local Sightseeing</h3>
            <p>
              Looking for a dependable cab from Biju Patnaik International Airport (BBI) to Puri or Konark? Or planning a week-long expedition to Daringbadi, Similipal, or Koraput? Choose from our diverse fleet with all-inclusive per-km or fixed package rates.
            </p>
          </div>
          <div className="rental-action-btns">
            <a href={`https://wa.me/${CONTACT.tel.slice(1)}?text=Hello,%20I%20need%20a%20car%20rental%20enquiry.`} className="btn btn-wa">
              <FaWhatsapp /> Instant Fare on WhatsApp
            </a>
            <a href={`tel:${CONTACT.tel}`} className="btn btn-navy-outline">
              <FaPhoneAlt /> Call Dispatch
            </a>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid3 cars-full-grid section-margin">
          {cars.map(c => (
            <Reveal key={c.id} className="car-detailed-card glass-card">
              <Link to={`/car-rental/${c.slug || c.id}`} className="car-img-wrapper">
                <Img src={c.img} alt={c.n} />
                <span className="car-cat-tag">{c.cat}</span>
              </Link>

              <div className="car-body-content">
                <h3>
                  <Link to={`/car-rental/${c.slug || c.id}`} className="car-title-link">
                    {c.n}
                  </Link>
                </h3>
                <p className="car-desc-paragraph">{c.desc}</p>

                <div className="car-features-table">
                  <div className="feat-row">
                    <span><FaUsers className="feat-ico" /> Seating Capacity:</span>
                    <strong>{c.s}</strong>
                  </div>
                  <div className="feat-row">
                    <span><FaSuitcase className="feat-ico" /> Luggage Space:</span>
                    <strong>{c.luggage}</strong>
                  </div>
                  <div className="feat-row">
                    <span><FaSnowflake className="feat-ico" /> Air Conditioning:</span>
                    <strong>{c.ac}</strong>
                  </div>
                </div>

                <div className="car-rates-block">
                  <div className="rate-col">
                    <small>Outstation Rate</small>
                    <strong className="rate-highlight">{c.r}</strong>
                  </div>
                  <div className="rate-col">
                    <small>Local (8h / 80km)</small>
                    <strong>{c.localRate}</strong>
                  </div>
                </div>

                <div className="airport-flat-rate">
                  <small>Airport Pickup / Drop: <strong>{c.airportRate}</strong></small>
                </div>

                <div className="car-btn-row-split">
                  <Link to={`/car-rental/${c.slug || c.id}`} className="btn btn-navy-outline btn-full">
                    View Details &amp; Specs →
                  </Link>
                  <Btn to={`/book-your-trip?vehicle=${encodeURIComponent(c.n)}`} variant="yellow" className="btn-full">
                    Book Now
                  </Btn>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Car Rental Inclusions & Terms */}
        <div className="rental-terms-box glass-card section-margin">
          <h3>Car Rental Terms &amp; Conditions</h3>
          <div className="grid2 terms-col-grid">
            <ul>
              <li><FaCheckCircle className="chk-icon" /> Rates include vehicle, chauffeur allowances, and fuel.</li>
              <li><FaCheckCircle className="chk-icon" /> Toll taxes, state border permits, and parking charges are billed at actuals.</li>
              <li><FaCheckCircle className="chk-icon" /> Minimum outstation billing: 250 km per calendar day.</li>
            </ul>
            <ul>
              <li><FaCheckCircle className="chk-icon" /> 24x7 breakdown replacement guarantee with immediate substitute car.</li>
              <li><FaCheckCircle className="chk-icon" /> Chauffeur night allowance (applicable between 10:00 PM and 6:00 AM): ₹300/night.</li>
              <li><FaCheckCircle className="chk-icon" /> Cleanliness guarantee: every vehicle is washed &amp; sanitized before assignment.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

const galleryItems = [
  { id: 1, title: 'Lord Jagannath Temple Chariot, Puri', tag: 'Spiritual', img: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'UNESCO Sun Temple Wheel, Konark', tag: 'Heritage', img: 'https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Chilika Lake Irrawaddy Dolphin Waters', tag: 'Lakes', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Daringbadi Pine Forest & Misty Valley', tag: 'Hills', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' },
  { id: 5, title: 'Similipal Tiger Reserve & Waterfall Safari', tag: 'Wildlife', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80' },
  { id: 6, title: 'Bhitarkanika Mangroves & River Creeks', tag: 'Wildlife', img: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80' },
  { id: 7, title: 'Gopalpur-on-Sea Golden Beach Stroll', tag: 'Lakes', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80' },
  { id: 8, title: 'Khandagiri & Udayagiri Ancient Caves', tag: 'Heritage', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80' },
  { id: 9, title: 'Puri Golden Sand Beach Blue Flag Coast', tag: 'Lakes', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80' },
  { id: 10, title: 'Taj Mahal Wonder of the World, Agra', tag: 'India', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80' },
  { id: 11, title: 'Shikara Cruise on Dal Lake, Kashmir', tag: 'India', img: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80' },
  { id: 12, title: 'Kerala Backwaters Luxury Houseboat', tag: 'India', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80' }
];

export const Gallery = () => {
  useTitle('Photo Gallery | Our Dream Trip - ourdreamtrip.com');
  const [selectedTag, setSelectedTag] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);
  const [livePhotos, setLivePhotos] = useState(galleryItems);

  useEffect(() => {
    fetch('/api/gallery')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.gallery && data.gallery.length > 0) {
          const formatted = data.gallery.map((g, idx) => ({
            id: g.id || `gal-${idx}`,
            title: g.title,
            tag: g.tag || g.category || 'Odisha',
            img: g.url
          }));
          setLivePhotos(formatted);
        }
      })
      .catch(console.warn);
  }, []);

  const tags = ['All', 'Spiritual', 'Heritage', 'Lakes', 'Hills', 'Wildlife', 'Temples', 'India'];
  const filtered = selectedTag === 'All'
    ? livePhotos
    : livePhotos.filter(g => (g.tag || '').toLowerCase() === selectedTag.toLowerCase());

  return (
    <div className="gallery-page">
      <PageHero
        title="Moments From Our Journeys"
        sub="A visual showcase of timeless temples, misty hills, wild encounters, and happy traveler memories."
      />

      <section className="container section-margin">
        {/* Filter buttons */}
        <div className="gallery-filter-bar text-center">
          {tags.map(t => (
            <button
              key={t}
              className={`filter-btn ${selectedTag === t ? 'active' : ''}`}
              onClick={() => setSelectedTag(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid3 gallery-masonry section-margin">
          {filtered.map(item => (
            <div
              key={item.id}
              className="gallery-card glass-card"
              onClick={() => setLightboxImg(item)}
            >
              <div className="gallery-img-container">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = '/images/pkg-golden-triangle.jpg';
                  }}
                />
                <div className="gallery-overlay">
                  <FaSearchPlus className="zoom-icon" />
                  <span>{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxImg && (
          <div className="lightbox-backdrop" onClick={() => setLightboxImg(null)}>
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
              <button className="lightbox-close" onClick={() => setLightboxImg(null)}>
                <FaTimes />
              </button>
              <img
                src={lightboxImg.img}
                alt={lightboxImg.title}
                className="lightbox-main-photo"
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = '/images/pkg-golden-triangle.jpg';
                }}
              />
              <div className="lightbox-caption">
                <h4>{lightboxImg.title}</h4>
                <span className="lightbox-tag">{lightboxImg.tag}</span>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

const policyContents = {
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'November 2026',
    sections: [
      {
        h: '1. Information We Collect',
        p: 'When you make an inquiry or reservation on Our Dream Trip (ourdreamtrip.com), we collect your name, phone number, email address, travel dates, passenger details, and pickup/drop preferences. We use this strictly to arrange your itinerary, hotel reservations, and vehicle allocations.'
      },
      {
        h: '2. Zero Data Sharing or Sale',
        p: 'We never sell, rent, or trade your personal data with third-party advertising companies. Your contact details are shared exclusively with your designated hotel properties and assigned chauffeur for trip coordination.'
      },
      {
        h: '3. Payment & Data Security',
        p: 'All online transactions are encrypted with 256-bit SSL protocols handled through verified payment gateways (Razorpay, UPI). We do not store your credit card or bank credentials on our servers.'
      }
    ]
  },
  terms: {
    title: 'Terms and Conditions',
    lastUpdated: 'November 2026',
    sections: [
      {
        h: '1. Booking Confirmation & Payment',
        p: 'A minimum 25% advance deposit confirms your tour package or vehicle booking. The balance payment is payable upon arrival in Bhubaneswar or 7 days prior to travel for domestic packages.'
      },
      {
        h: '2. Changes in Itinerary',
        p: 'While we strive to adhere strictly to published itineraries, changes may occasionally occur due to weather disruptions, temple festival road closures, or government regulations. In such cases, our local managers arrange the best alternative sights.'
      },
      {
        h: '3. Identity Verification & Entry Permits',
        p: 'All guests must carry valid government photo identification (Aadhaar Card, Passport, Voter ID, or Driving License). For non-Indian nationals, valid Passport and Indian Visa details are mandatory for hotel and wildlife permit registrations.'
      }
    ]
  },
  cancel: {
    title: 'Cancellation & Refund Policy',
    lastUpdated: 'November 2026',
    sections: [
      {
        h: '1. Standard Cancellation Refund Schedule',
        p: '• 15 or more days before trip start date: 100% full refund of the package advance.\n• 8 to 14 days before trip start date: 80% refund (nominal 20% administrative fee).\n• 3 to 7 days before trip start date: 50% refund.\n• Less than 72 hours or no-show: Advance payment is non-refundable.'
      },
      {
        h: '2. Refund Processing Time',
        p: 'Approved refunds are credited back to the original bank account or UPI ID within 5 to 7 business days.'
      },
      {
        h: '3. Force Majeure & Natural Disruptions',
        p: 'In events of cyclones, severe floods, or sudden government restrictions preventing travel, we provide 100% credit vouchers valid for 12 months with no penalty.'
      }
    ]
  }
};

export const Policy = ({ k }) => {
  const data = policyContents[k] || policyContents.privacy;
  useTitle(data.title);

  return (
    <div className="policy-page">
      <PageHero title={data.title} sub={`Last Updated: ${data.lastUpdated}`} />
      <section className="container section-margin">
        <div className="glass-card policy-body-card">
          {data.sections.map((s, i) => (
            <div key={i} className="policy-clause">
              <h3>{s.h}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{s.p}</p>
            </div>
          ))}
          <div className="policy-footer-note">
            <p>For any policy questions or refund claims, please reach our grievance officer at <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or call {CONTACT.phone}.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export const HtmlSitemap = () => {
  useTitle('Website HTML Sitemap | Our Dream Trip');
  const odishaPkgs = packages.filter(p => p.cat === 'odisha');
  const domesticPkgs = packages.filter(p => p.cat === 'domestic');

  return (
    <div className="sitemap-page">
      <PageHero
        title="Website Sitemap"
        sub="Complete directory of all Odisha & Incredible India tours, car rentals, and guides."
        badge="Quick Navigation Directory"
      />
      <section className="container section-margin">
        <div className="sitemap-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Main Pages */}
          <div className="glass-card sitemap-card" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--navy)', marginBottom: '1.25rem', borderBottom: '2px solid var(--gold)', paddingBottom: '0.5rem' }}>
              Core Navigation
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li><Link to="/" style={{ color: '#0284C7', fontWeight: 600 }}>Home Page</Link></li>
              <li><Link to="/odisha-tour-packages" style={{ color: '#0284C7', fontWeight: 600 }}>Odisha Tour Packages (18)</Link></li>
              <li><Link to="/domestic-tour-packages" style={{ color: '#0284C7', fontWeight: 600 }}>Incredible India Tours (14)</Link></li>
              <li><Link to="/car-rental" style={{ color: '#0284C7', fontWeight: 600 }}>Car Rental &amp; Outstation Fleets</Link></li>
              <li><Link to="/gallery" style={{ color: '#0284C7', fontWeight: 600 }}>Real Photo Gallery</Link></li>
              <li><Link to="/blogs" style={{ color: '#0284C7', fontWeight: 600 }}>Travel Blogs &amp; Guides</Link></li>
              <li><Link to="/about-us" style={{ color: '#0284C7', fontWeight: 600 }}>About Our Dream Trip</Link></li>
              <li><Link to="/contact-us" style={{ color: '#0284C7', fontWeight: 600 }}>Contact &amp; Support</Link></li>
              <li><Link to="/book-your-trip" style={{ color: '#0284C7', fontWeight: 600 }}>Book Your Journey</Link></li>
              <li><Link to="/privacy-policy" style={{ color: '#0284C7', fontWeight: 600 }}>Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" style={{ color: '#0284C7', fontWeight: 600 }}>Terms and Conditions</Link></li>
              <li><Link to="/cancellation-policy" style={{ color: '#0284C7', fontWeight: 600 }}>Cancellation &amp; Refund Policy</Link></li>
            </ul>
          </div>

          {/* Odisha Tours */}
          <div className="glass-card sitemap-card" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--navy)', marginBottom: '1.25rem', borderBottom: '2px solid var(--gold)', paddingBottom: '0.5rem' }}>
              Odisha Tour Packages ({odishaPkgs.length})
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {odishaPkgs.map(p => (
                <li key={p.id}>
                  <Link to={`/odisha-tour-packages/${p.slug}`} style={{ color: '#0284C7', fontSize: '0.92rem' }}>
                    {p.title} <small style={{ color: '#64748B' }}>({p.duration})</small>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Domestic Tours */}
          <div className="glass-card sitemap-card" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--navy)', marginBottom: '1.25rem', borderBottom: '2px solid var(--gold)', paddingBottom: '0.5rem' }}>
              Incredible India Tours ({domesticPkgs.length})
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {domesticPkgs.map(p => (
                <li key={p.id}>
                  <Link to={`/domestic-tour-packages/${p.slug}`} style={{ color: '#0284C7', fontSize: '0.92rem' }}>
                    {p.title} <small style={{ color: '#64748B' }}>({p.duration})</small>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fleets */}
          <div className="glass-card sitemap-card" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--navy)', marginBottom: '1.25rem', borderBottom: '2px solid var(--gold)', paddingBottom: '0.5rem' }}>
              Car Rental Fleets &amp; Cabs
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {cars.map(c => (
                <li key={c.id}>
                  <Link to={`/car-rental/${c.slug}`} style={{ color: '#0284C7', fontSize: '0.92rem' }}>
                    {c.name} — <small style={{ color: '#16A34A', fontWeight: 600 }}>{c.perKm}</small>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export const NotFound = () => {
  useTitle('404 Page Not Found');
  return (
    <section className="container center" style={{ padding: '6rem 1rem' }}>
      <div className="glass-card not-found-card" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem 2rem' }}>
        <h1 style={{ fontSize: '5rem', color: 'var(--navy)', lineHeight: 1 }}>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p style={{ margin: '1rem 0 2rem' }}>The tour package or destination page you are looking for has been moved or does not exist.</p>
        <Btn to="/" variant="yellow">Back to Home Page</Btn>
      </div>
    </section>
  );
};
