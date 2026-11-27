import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Link} from 'react-router-dom';
import {
  FaArrowRight,
  FaShieldAlt,
  FaHeadset,
  FaMapMarkerAlt,
  FaCarSide,
  FaHandshake,
  FaCheckCircle,
  FaStar,
  FaPaperPlane,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaCompass,
  FaUsers,
  FaAward,
  FaUmbrellaBeach,
  FaMountain,
  FaPrayingHands,
  FaChevronDown,
  FaChevronUp,
  FaQuoteRight,
  FaGoogle,
  FaChevronLeft,
  FaChevronRight,
  FaTree,
  FaSnowflake
} from 'react-icons/fa';
import {Btn,Reveal,Img,useTitle,PackageCard} from '../components/common.jsx';
import SearchPanel from '../components/SearchPanel.jsx';
import OdishaMap from '../components/OdishaMap.jsx';
import ExploreBanners from '../components/ExploreBanners.jsx';
import CategoryCards from '../components/CategoryCards.jsx';
import PopularPackagesSlider from '../components/PopularPackagesSlider.jsx';
import FleetShowcase from '../components/FleetShowcase.jsx';
import TripCostEstimator from '../components/TripCostEstimator.jsx';
import SeasonalCalendar from '../components/SeasonalCalendar.jsx';
import ThemeTrails from '../components/ThemeTrails.jsx';
import BookingSteps from '../components/BookingSteps.jsx';
import TravelerMemories from '../components/TravelerMemories.jsx';
import {packages,cars,indiaCircuits,testimonials,faqs,CONTACT} from '../data/packages.js';

const topCategories = [
  {
    title: 'Odisha Tour Packages',
    tag: '18+ Handcrafted Tours',
    desc: 'Spiritual Jagannath Dham, Sun Temple Konark, Chilika Dolphins & Daringbadi Hills.',
    to: '/odisha-tour-packages',
    img: '/images/pkg-golden-triangle.jpg',
    btnText: 'Explore Odisha Tours'
  },
  {
    title: 'Domestic India Packages',
    tag: '16+ Incredible Circuits',
    desc: 'Himalayan retreats of Kashmir & Himachal, Royal Rajasthan palaces & Kerala backwaters.',
    to: '/domestic-tour-packages',
    img: '/images/dest-kedarnath.jpg',
    btnText: 'Discover India Tours'
  },
  {
    title: 'Car & Coach Rental',
    tag: 'Sanitized Fleet',
    desc: 'Verified chauffeurs, Sedans, Innova Crysta, Fortuner, Tempo Travellers & Luxury Urbania.',
    to: '/car-rental',
    img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    btnText: 'View Rental Fleet'
  }
];

const perks = [
  {icon: FaShieldAlt, title: 'Safe & Secure', desc: 'Govt. registered & certified local guides'},
  {icon: FaHeadset, title: '24×7 Assistance', desc: 'Dedicated WhatsApp concierge during trip'},
  {icon: FaMapMarkerAlt, title: '100% Customized', desc: 'Itineraries tailored to your pace & budget'},
  {icon: FaCarSide, title: 'Premium Fleet', desc: 'Sanitized vehicles with verified drivers'},
  {icon: FaHandshake, title: 'Best Price Promise', desc: 'Transparent billing with zero hidden costs'}
];

const odishaExperiences = [
  {
    title: 'Divine Jagannath Rath Yatra & Mahaprasad',
    desc: 'Feel the spiritual resonance of the world-famous Chariot Festival and taste the sacred 56 bhog Mahaprasad prepared in world’s largest earthen kitchen.',
    img: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=800&q=80',
    tag: 'Spiritual Miracle'
  },
  {
    title: 'Raghurajpur Heritage Crafts & Gotipua Dance',
    desc: 'Walk through an open-air living art gallery where every household paints intricate Pattachitra scrolls and young artists practice ancient Gotipua temple dance.',
    img: 'https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=800&q=80',
    tag: 'Living Heritage'
  },
  {
    title: 'Chilika Lake Dolphins & Mangalajodi Birding',
    desc: 'Witness playful Irrawaddy dolphins breach turquoise waters at Satapada and observe 1.5 million migratory Siberian waterfowl in Mangalajodi wetlands.',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    tag: 'Eco Wonder'
  },
  {
    title: 'Misty Daringbadi & Deomali Peak Escapes',
    desc: 'Breathe pine-scented mountain air in Daringbadi (the Kashmir of Odisha) and stand above the clouds at Deomali, the highest mountain summit in Odisha.',
    img: '/images/pkg-daringbadi.jpg',
    tag: 'Highland Serenity'
  }
];

const HERO_BACKGROUND_SLIDES = [
  {
    id: 'original-coastal',
    theme: 'Tropical Odisha Beach',
    shortName: 'Puri Golden Beach',
    badge: '🌊 Blue Flag Beach & Bay of Bengal',
    location: 'Puri Beach & Marine Drive',
    img: '/images/hero-back.png',
    icon: FaUmbrellaBeach,
    tagline: 'Sun-drenched golden sands & pristine ocean waves'
  },
  {
    id: 'marine-palms',
    theme: 'Coastal Palms & Sea',
    shortName: 'Marine Drive & Shores',
    badge: '🌴 Turquoise Waves & Palm Shores',
    location: 'Puri Marine Drive & Chandrabhaga',
    img: '/images/hero-puri-golden-beach.jpg',
    icon: FaUmbrellaBeach,
    tagline: 'Scenic coastal highway, azure tides & gentle sea breeze'
  },
  {
    id: 'konark-heritage',
    theme: 'Spiritual Grandeur',
    shortName: 'Sun Temple & Jagannath',
    badge: '🛕 UNESCO World Heritage Marvel',
    location: 'Konark Sun Temple & Puri Dham',
    img: '/images/hero-konark-golden-temple.jpg',
    icon: FaPrayingHands,
    tagline: '13th-century stone chariot architecture in morning golden light'
  },
  {
    id: 'chilika-lagoon',
    theme: 'Lagoon & Eco Wonders',
    shortName: 'Chilika & Dolphins',
    badge: '🐬 Irrawaddy Dolphins & Pink Flamingos',
    location: 'Chilika Lake & Satapada Lagoon',
    img: '/images/hero-chilika-lake-lagoon.jpg',
    icon: FaTree,
    tagline: 'Asia\'s largest brackish lagoon, island cruises & migratory birds'
  },
  {
    id: 'kashmir-blossoms',
    theme: 'Himalayan Paradise',
    shortName: 'Kashmir & Himalayas',
    badge: '🏔️ Snow Peaks & Blooming Valleys',
    location: 'Dal Lake, Srinagar & Gulmarg',
    img: '/images/hero-kashmir-valley.jpg',
    icon: FaSnowflake,
    tagline: 'Shikara rides on mirror lakes with snow-clad Himalayan peaks'
  }
];

export default function Home(){
  useTitle('Odisha & India Tour Packages | Our Dream Trip - ourdreamtrip.com');

  const [activeTab, setActiveTab] = useState('all');
  const [openFaq, setOpenFaq] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);

  useEffect(() => {
    if (isHeroPaused) return;
    const interval = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % HERO_BACKGROUND_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHeroPaused]);

  const activeSlide = HERO_BACKGROUND_SLIDES[heroIndex];

  const [livePackages, setLivePackages] = useState(packages);

  useEffect(() => {
    fetch('/api/packages')
      .then(res => res.json())
      .then(d => {
        if (d.success && d.packages && d.packages.length > 0) {
          setLivePackages(d.packages);
        }
      })
      .catch(console.warn);
  }, []);

  const filteredFeatured = livePackages.filter(p => {
    if (activeTab === 'all') return true;
    if (activeTab === 'odisha') return p.cat === 'odisha';
    if (activeTab === 'domestic') return p.cat === 'domestic';
    if (activeTab === 'spiritual') return p.theme.includes('Spiritual');
    if (activeTab === 'hills') return p.theme.includes('Hills') || p.theme.includes('Himalayas') || p.theme.includes('Hill Station');
    return true;
  }).slice(0, 6);

  return (
    <div className="home-page-wrap">
      {/* ================= HERO SECTION (ADVANCED MULTI-THEME DYNAMIC BACKGROUNDS) ================= */}
      <section
        className="hero"
        onMouseEnter={() => setIsHeroPaused(true)}
        onMouseLeave={() => setIsHeroPaused(false)}
      >
        {/* Dynamic Ken Burns Background Slideshow */}
        <div className="hero-slideshow-viewport">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              className="hero-slide-bg"
              initial={{opacity: 0, scale: 1.08}}
              animate={{opacity: 1, scale: 1}}
              exit={{opacity: 0, scale: 0.98}}
              transition={{duration: 1.1, ease: [0.25, 0.1, 0.25, 1]}}
              style={{
                backgroundImage: `url(${activeSlide.img})`
              }}
            />
          </AnimatePresence>
          {/* Multi-tone high-clarity scrim gradient overlay */}
          <div className="hero-scrim-overlay" />
          <div className="hero-ambient-glow" />
        </div>

        {/* Quick Navigation Arrows (Desktop) */}
        <button
          type="button"
          className="hero-arrow-btn hero-arrow-left"
          onClick={() => setHeroIndex(prev => (prev === 0 ? HERO_BACKGROUND_SLIDES.length - 1 : prev - 1))}
          aria-label="Previous theme"
          title="Previous theme"
        >
          <FaChevronLeft />
        </button>
        <button
          type="button"
          className="hero-arrow-btn hero-arrow-right"
          onClick={() => setHeroIndex(prev => (prev + 1) % HERO_BACKGROUND_SLIDES.length)}
          aria-label="Next theme"
          title="Next theme"
        >
          <FaChevronRight />
        </button>

        <div className="container hero-in">
          <motion.div
            className="hero-text"
            initial={{opacity: 0, y: 25}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
          >
            {/* Top Bar: Live Location Pill + Slide Counter */}
            <div className="hero-top-capsule-row">
              <motion.div
                key={activeSlide.id + '-badge'}
                className="hero-live-location-badge"
                initial={{opacity: 0, y: -8}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.35}}
              >
                <span className="live-pulse-dot" />
                <span className="live-badge-label">{activeSlide.badge}</span>
                <span className="live-badge-sep">•</span>
                <span className="live-badge-loc">{activeSlide.location}</span>
              </motion.div>
              <div className="hero-slide-counter-badge">
                <span>0{heroIndex + 1}</span> <span className="counter-sep">/</span> <span>0{HERO_BACKGROUND_SLIDES.length}</span>
              </div>
            </div>

            <p className="script">Discover the Beauty of</p>
            <h1>
              Odisha <em>&amp;</em> Incredible India
            </h1>
            <p className="hero-tri-tagline">— Travel • Explore • Experience —</p>
            <motion.p
              className="brush"
              animate={{y: [0, -4, 0]}}
              transition={{repeat: Infinity, duration: 4}}
            >
              Your Trusted Travel Partner for Unforgettable Journeys
            </motion.p>
            <Link to="/odisha-tour-packages" className="hero-mobile-cta-btn">
              Explore Our Packages &rarr;
            </Link>
          </motion.div>
        </div>

        {/* Compact Single-Row Landscape Switcher Dock placed elegantly right above search */}
        <div className="container hero-dock-wrap">
          <div className="hero-landscape-dock">
            <span className="dock-label">POPULAR LANDSCAPES:</span>
            <div className="dock-items">
              {HERO_BACKGROUND_SLIDES.map((slide, idx) => {
                const Icon = slide.icon;
                const isActive = idx === heroIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    className={`landscape-dock-pill ${isActive ? 'active' : ''}`}
                    onClick={() => setHeroIndex(idx)}
                    title={slide.tagline}
                  >
                    <Icon className="dock-pill-icon" />
                    <span>{slide.shortName}</span>
                    {isActive && <span className="dock-pill-timer" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="container hero-search-wrap">
          <SearchPanel/>
        </div>
      </section>

      {/* ================= EXPLORE CATEGORY HORIZONTAL BANNERS (Image 3) ================= */}
      <ExploreBanners/>

      {/* ================= DESTINATION BY CATEGORIES (Image 2) ================= */}
      <CategoryCards/>

      {/* ================= POPULAR TOUR PACKAGES SLIDER (Image 1) ================= */}
      <PopularPackagesSlider/>

      {/* ================= INTERACTIVE 30-DISTRICT ODISHA TOURISM MAP ================= */}
      <section className="container section-margin odisha-map-wrapper-box" id="odisha-30-districts">
        <div className="section-head text-center">
          <span className="badge-pill">Interactive 30-District Tourism Map</span>
          <h2>Explore All <span className="head-accent-red">30 Districts of Odisha</span></h2>
          <p>
            Tap any district on the official map or select from top tourism hubs to inspect authentic sightseeing spots, driving distances from Bhubaneswar, highway routes, and curated packages.
          </p>
        </div>
        <OdishaMap/>
      </section>

      {/* ================= TOP 3 SERVICE CARDS ================= */}
      <section className="container section-margin">
        <div className="grid3 service-cards-grid">
          {topCategories.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.1} className="service-feature-card">
              <div className="svc-image-wrap">
                <Img src={item.img} alt={item.title}/>
                <span className="svc-tag">{item.tag}</span>
              </div>
              <div className="svc-card-body glass-navy">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <Btn to={item.to} variant="yellow">
                  {item.btnText} <FaArrowRight/>
                </Btn>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= TRUST PERKS STRIP ================= */}
      <section className="container">
        <div className="perks-strip glass-card">
          {perks.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="perk-box">
                <div className="perk-icon-circle"><Icon/></div>
                <div className="perk-info">
                  <strong>{p.title}</strong>
                  <small>{p.desc}</small>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= FEATURED PACKAGES SHOWCASE ================= */}
      <section className="container section-margin">
        <div className="section-head text-center">
          <span className="badge-pill">Handpicked Journeys</span>
          <h2>Top Selling <span className="head-accent-blue">Odisha &amp; India Packages</span></h2>
          <p>Choose from our most requested itineraries with premium stays, verified transport, and guided sightseeing.</p>

          <div className="tabs-filter-bar">
            {[
              {id: 'all', label: 'All Top Tours'},
              {id: 'odisha', label: 'Odisha Specials'},
              {id: 'domestic', label: 'Incredible India'},
              {id: 'spiritual', label: 'Spiritual & Heritage'},
              {id: 'hills', label: 'Hills & Himalayas'}
            ].map(tab => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid3 packages-grid">
          {filteredFeatured.map(pkg => (
            <PackageCard key={pkg.slug} p={pkg}/>
          ))}
        </div>

        <div className="text-center section-action-btn">
          <Btn to="/odisha-tour-packages" variant="navy" className="btn-lg">
            View All 30+ Tour Packages <FaArrowRight/>
          </Btn>
        </div>
      </section>


      {/* ================= ALL-INDIA POPULAR CIRCUITS ================= */}
      <section className="container section-margin">
        <div className="section-head text-center">
          <span className="badge-pill">Beyond Odisha</span>
          <h2>Most Popular <span className="head-accent-orange">Holiday Circuits Across India</span></h2>
          <p>Experience the grand heritage, snowy summits, serene backwaters, and tropical beaches of Incredible India.</p>
        </div>

        <div className="grid4 circuits-grid">
          {indiaCircuits.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.08} className="circuit-card glass-card">
              <div className="circuit-img-wrap">
                <Img src={c.img} alt={c.title}/>
                <span className="circuit-tag">{c.tag}</span>
              </div>
              <div className="circuit-body">
                <h4>{c.title}</h4>
                <div className="circuit-route">
                  <FaMapMarkerAlt className="pin-icon"/> {c.route}
                </div>
                <p>{c.desc}</p>
                <Link to={`/domestic-tour-packages/${c.slug}`} className="circuit-link">
                  View Circuit Itinerary <FaArrowRight/>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= ODISHA SIGNATURE EXPERIENCES ================= */}
      <section className="odisha-exp-section section-margin">
        <div className="container">
          <div className="section-head text-center white-text">
            <span className="badge-pill gold-badge">Signature Odisha</span>
            <h2>Authentic <span className="head-accent-gold">Odisha Experiences</span> You Cannot Miss</h2>
            <p>Every corner of Odisha holds ancient legends, living art, and untouched natural beauty.</p>
          </div>

          <div className="grid2 exp-grid">
            {odishaExperiences.map((exp, idx) => (
              <Reveal key={exp.title} delay={idx * 0.1} className="exp-card glass-dark">
                <div className="exp-img-side">
                  <Img src={exp.img} alt={exp.title}/>
                </div>
                <div className="exp-content-side">
                  <span className="exp-tag">{exp.tag}</span>
                  <h3>{exp.title}</h3>
                  <p>{exp.desc}</p>
                  <Link to="/odisha-tour-packages" className="exp-btn-link">
                    Explore Experiences <FaArrowRight/>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EASY 4-STEP BOOKING JOURNEY ================= */}
      <BookingSteps/>

      {/* ================= ALL-VEHICLE FLEET SHOWCASE ================= */}
      <FleetShowcase/>

      {/* ================= INSTANT ODISHA TRIP COST & CAB FARE CALCULATOR ================= */}
      <TripCostEstimator/>

      {/* ================= SIGNATURE ODISHA TOURISM THEME TRAILS ================= */}
      <ThemeTrails/>

      {/* ================= SEASONAL TRAVEL CALENDAR ================= */}
      <SeasonalCalendar/>

      {/* ================= TRAVELER MOMENTS & MEMORIES ================= */}
      <TravelerMemories/>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="container section-margin">
        <div className="why-us-grid glass-card">
          <div className="why-us-text">
            <span className="badge-pill">Why Our Dream Trip?</span>
            <h2>Why Travelers <span className="head-accent-orange">Choose Us</span> Over Online Portals</h2>
            <p>
              Unlike automated ticket booking algorithms, we are local Odia travel planners who have walked every temple path, sailed every lake channel, and visited every hotel in person.
            </p>

            <ul className="why-features-list">
              <li>
                <FaCheckCircle className="check-gold"/>
                <div>
                  <strong>Native Local Guides &amp; Drivers:</strong> Experienced, polite chauffeurs who know local culture, temple rituals, and hidden gems.
                </div>
              </li>
              <li>
                <FaCheckCircle className="check-gold"/>
                <div>
                  <strong>Zero Hidden Costs:</strong> Clear, all-inclusive quotations covering tolls, driver allowances, parking, and taxes.
                </div>
              </li>
              <li>
                <FaCheckCircle className="check-gold"/>
                <div>
                  <strong>VIP Darshan Assistance:</strong> Dedicated temple panda coordination at Puri Jagannath Temple &amp; Lingaraj Temple.
                </div>
              </li>
              <li>
                <FaCheckCircle className="check-gold"/>
                <div>
                  <strong>24×7 Live Concierge:</strong> Direct WhatsApp access to your designated tour manager at every stage of the journey.
                </div>
              </li>
            </ul>

            <div className="why-cta-row">
              <Btn to="/about-us" variant="navy">Learn More About Us</Btn>
              <a href={`https://wa.me/${CONTACT.tel.slice(1)}`} className="btn btn-yellow" target="_blank" rel="noreferrer">
                <FaWhatsapp/> Chat With Tour Expert
              </a>
            </div>
          </div>

          <div className="why-us-stats-side">
            <div className="stat-card glass-navy">
              <div className="stat-num">12+</div>
              <div className="stat-lbl">Years of Travel Planning</div>
            </div>
            <div className="stat-card glass-navy">
              <div className="stat-num">15,000+</div>
              <div className="stat-lbl">Happy Satisfied Travelers</div>
            </div>
            <div className="stat-card glass-navy">
              <div className="stat-num">34+</div>
              <div className="stat-lbl">Curated Odisha &amp; India Packages</div>
            </div>
            <div className="stat-card glass-navy">
              <div className="stat-num">100%</div>
              <div className="stat-lbl">Guaranteed Safety &amp; Comfort</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section id="testimonials" className="container section-margin">
        <div className="section-head text-center">
          <span className="badge-pill">Traveler Stories</span>
          <h2>What Our Guests <span className="head-accent-pink">Say About Us</span></h2>
          <p>Real experiences from families, couples, and spiritual seekers who discovered India with us.</p>
        </div>

        {/* Google Reviews Trust Bar */}
        <div className="google-reviews-trust-banner">
          <div className="google-logo-box">
            <FaGoogle className="g-icon"/>
            <div>
              <strong>Google Reviews Rating</strong>
              <div className="g-stars-row">
                <span className="g-rating-num">4.9</span>
                <span className="g-stars">★★★★★</span>
                <span className="g-count">(1,850+ Verified Ratings)</span>
              </div>
            </div>
          </div>
          <div className="google-trust-chips">
            <span className="g-chip"><FaCheckCircle/> 100% Genuine Travelers</span>
            <span className="g-chip"><FaAward/> Certificate of Excellence</span>
            <span className="g-chip"><FaShieldAlt/> Zero Toll &amp; Surge Surprises</span>
          </div>
        </div>

        <div className="testimonials-grid-advanced">
          {testimonials.map((t, idx) => (
            <Reveal key={t.id} delay={idx * 0.08} className="testi-card-premium">
              <FaQuoteRight className="testi-watermark-quote"/>

              <div className="testi-top-info">
                <div className="testi-avatar-wrap">
                  <img src={t.avatar} alt={t.name} className="testi-avatar-img" loading="lazy"/>
                  <span className="testi-verified-mini" title="Verified Customer">✓</span>
                </div>
                <div className="testi-author-meta">
                  <h4>{t.name}</h4>
                  <small className="testi-city-loc">{t.city}</small>
                  <div className="testi-stars-gold">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar key={i}/>
                    ))}
                    <span className="rating-score-txt">5.0</span>
                  </div>
                </div>
              </div>

              <div className="testi-tour-pill-badge">
                <FaMapMarkerAlt className="pin-tiny"/> {t.tour}
              </div>

              <p className="testi-review-quote">
                &ldquo;{t.comment}&rdquo;
              </p>

              <div className="testi-bottom-meta">
                <span className="testi-date-txt">Traveled: {t.date}</span>
                <span className="testi-verified-tag">
                  <FaCheckCircle className="check-ico"/> Verified Trip
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="testimonials-cta-row text-center">
          <a
            href={`https://wa.me/${CONTACT.tel.slice(1)}?text=${encodeURIComponent("Hello! I want to plan my Odisha tour with Our Dream Trip (ourdreamtrip.com).")}`}
            className="btn btn-yellow"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp/> Chat With Our Tour Expert
          </a>
          <Btn to="/book-your-trip" variant="navy">
            Plan Your Custom Trip <FaArrowRight/>
          </Btn>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="container section-margin">
        <div className="section-head text-center">
          <span className="badge-pill">Got Questions?</span>
          <h2>Frequently <span className="head-accent-blue">Asked Questions</span></h2>
          <p>Everything you need to know about planning your Odisha and India journey.</p>
        </div>

        <div className="faq-accordion-box">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className={`faq-item glass-card ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  {isOpen ? <FaChevronUp/> : <FaChevronDown/>}
                </button>
                {isOpen && (
                  <motion.div
                    className="faq-answer"
                    initial={{opacity: 0, height: 0}}
                    animate={{opacity: 1, height: 'auto'}}
                    exit={{opacity: 0, height: 0}}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= FINAL HIGH-CONVERTING CTA ================= */}
      <section className="cta-advanced">
        <div className="container cta-advanced-in">
          <div className="cta-txt-box">
            <span className="badge-pill gold-badge">Custom Vacation Specialist</span>
            <h2>Let’s Plan Your Dream Odisha &amp; India Journey</h2>
            <p>Tell us your dates, group size, and favorite sights. Our local travel architects will craft a custom quotation within 30 minutes!</p>
          </div>

          <div className="cta-btns-cluster">
            <Btn to="/book-your-trip" variant="yellow" className="btn-lg">
              <FaPaperPlane/> Request Instant Quote
            </Btn>
            <a
              href={`https://wa.me/${CONTACT.tel.slice(1)}?text=Hello%20Travels%20With%20Odisha,%20I%20would%20like%20to%20plan%20a%20tour`}
              className="btn btn-wa btn-lg"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp/> Chat on WhatsApp
            </a>
            <a href={`tel:${CONTACT.tel}`} className="btn btn-navy-outline btn-lg">
              <FaPhoneAlt/> {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
