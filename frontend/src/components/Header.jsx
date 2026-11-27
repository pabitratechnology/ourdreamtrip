import {useState, useEffect, useRef} from 'react';
import {NavLink, Link, useLocation} from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaCalendarCheck,
  FaChevronDown,
  FaChevronRight,
  FaCar,
  FaCarSide,
  FaCrown,
  FaShuttleVan,
  FaBus,
  FaBusAlt,
  FaOm,
  FaMountain,
  FaArrowRight,
  FaCheckCircle,
  FaPlaneArrival,
  FaStar,
  FaShieldAlt,
  FaCompass
} from 'react-icons/fa';
import {CONTACT} from '../data/packages.js';

export const Socials = () => (
  <div className="topbar-social-icons">
    <a
      href={CONTACT.facebook || 'https://www.facebook.com/share/1A2pnj6LXS/'}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="social-btn social-fb"
      title="Follow on Facebook"
    >
      <FaFacebookF/>
    </a>
    <a
      href={CONTACT.instagram || 'https://www.instagram.com/our_dream__trip?gwpx=cmRlcmY4emlobjUx'}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="social-btn social-insta"
      title="Follow on Instagram"
    >
      <FaInstagram/>
    </a>
    <a
      href="https://wa.me/917790008877"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="social-btn social-wa"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp/>
    </a>
    <a
      href="https://youtube.com/@our_dream_trip?si=74ysRuVEnDILlFrK"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="YouTube"
      className="social-btn social-yt"
      title="Subscribe on YouTube"
    >
      <FaYoutube/>
    </a>
  </div>
);

export const TopContactBar = () => (
  <div className="topbar">
    <div className="topbar-left-group">
      <a href={`tel:${CONTACT.tel}`} className="topbar-item topbar-phone">
        <FaPhoneAlt/> <span>{CONTACT.phone}</span>
      </a>
      <a href="https://wa.me/917790008877" target="_blank" rel="noreferrer" className="wa-link topbar-item topbar-wa">
        <FaWhatsapp/> <span>Chat on WhatsApp</span>
      </a>
      <a href={`mailto:${CONTACT.email}`} className="topbar-item topbar-email">
        <FaEnvelope/> <span>{CONTACT.email}</span>
      </a>
    </div>

    <div className="topbar-right-group">
      <span className="follow-label">Follow Us:</span>
      <Socials/>
    </div>
  </div>
);

export const Logo = () => (
  <Link to="/" className="brand-identity-link brand-emblem-only-link" aria-label="Our Dream Trip - Holidays & Tours · DMC for Odisha">
    <div className="brand-emblem-wrap brand-emblem-animated">
      <div className="emblem-halo-ring" aria-hidden="true" />
      <img
        src="/images/logo.png"
        alt="Our Dream Trip - Holidays & Tours · DMC for Odisha Logo"
        className="brand-emblem-img"
        width="76"
        height="76"
        loading="eager"
      />
      <div className="emblem-shimmer-sweep" aria-hidden="true" />
    </div>
  </Link>
);

// FLEET CATEGORIES DATA (Exact structure from odishatourtravels.com reference)
const FLEET_CATEGORIES = [
  {
    id: 'sedan',
    label: 'SEDAN CARS',
    icon: FaCar,
    tagline: 'Fuel-efficient AC sedans for city transfers and outstation tours',
    fleet: [
      {name: 'Swift Dzire AC', cap: '4+1', rate: '₹12/km', desc: 'Most popular economy sedan', slug: 'swift-dzire'},
      {name: 'Hyundai Xcent / Aura AC', cap: '4+1', rate: '₹12/km', desc: 'Comfortable boot space', slug: 'swift-dzire'},
      {name: 'Honda Amaze AC', cap: '4+1', rate: '₹13/km', desc: 'Smooth highway ride', slug: 'swift-dzire'},
      {name: 'Toyota Etios AC', cap: '4+1', rate: '₹13/km', desc: 'Spacious rear seating', slug: 'swift-dzire'},
      {name: 'Honda City Executive AC', cap: '4+1', rate: '₹16/km', desc: 'Premium executive sedan', slug: 'swift-dzire'},
      {name: 'Maruti Suzuki Ciaz AC', cap: '4+1', rate: '₹16/km', desc: 'Plush legroom & luxury', slug: 'swift-dzire'},
      {name: 'Hyundai Verna AC', cap: '4+1', rate: '₹17/km', desc: 'High-speed highway comfort', slug: 'swift-dzire'}
    ]
  },
  {
    id: 'suv',
    label: 'SUV CARS',
    icon: FaCarSide,
    tagline: 'Spacious 6 & 7 seater SUVs for family roadtrips and hill passes',
    fleet: [
      {name: 'Maruti Suzuki Ertiga AC', cap: '6+1', rate: '₹15/km', desc: 'Best family value MUV', slug: 'maruti-ertiga'},
      {name: 'Toyota Innova Crysta AC', cap: '7+1', rate: '₹19/km', desc: 'The gold standard highway SUV', slug: 'innova-crysta'},
      {name: 'Mahindra Scorpio-N AC', cap: '7+1', rate: '₹20/km', desc: 'Tough high-stance SUV', slug: 'innova-crysta'},
      {name: 'Toyota Rumion AC', cap: '6+1', rate: '₹15/km', desc: 'Comfortable family cruiser', slug: 'maruti-ertiga'},
      {name: 'Mahindra XUV700 AC', cap: '6+1', rate: '₹22/km', desc: 'Luxury panoramic SUV', slug: 'innova-crysta'},
      {name: 'Tata Safari / Harrier AC', cap: '6+1', rate: '₹21/km', desc: 'Solid build & plush seats', slug: 'innova-crysta'}
    ]
  },
  {
    id: 'luxury',
    label: 'LUXURY CARS',
    icon: FaCrown,
    tagline: 'VIP luxury vehicles for corporate delegates and destination weddings',
    fleet: [
      {name: 'Toyota Fortuner 4x4 VIP', cap: '6+1', rate: '₹34/km', desc: 'VIP presence & rough terrain', slug: 'toyota-fortuner'},
      {name: 'Mercedes-Benz E-Class', cap: '4+1', rate: '₹85/km', desc: 'Ultra luxury chauffeur experience', slug: 'toyota-fortuner'},
      {name: 'Audi A6 Luxury Sedan', cap: '4+1', rate: '₹80/km', desc: 'Sophisticated VIP arrival', slug: 'toyota-fortuner'},
      {name: 'BMW 5-Series Executive', cap: '4+1', rate: '₹85/km', desc: 'German engineered comfort', slug: 'toyota-fortuner'},
      {name: 'Kia Carnival Limousine', cap: '7+1', rate: '₹45/km', desc: 'VIP captain recliner seats', slug: 'toyota-fortuner'}
    ]
  },
  {
    id: 'urbania',
    label: 'FORCE URBANIA',
    icon: FaShuttleVan,
    tagline: 'World-class European monocoque luxury vans with individual AC vents',
    fleet: [
      {name: 'Force Urbania (10 Seater VIP)', cap: '10+1', rate: '₹34/km', desc: 'Plush individual reclining seats', slug: 'force-urbania-17'},
      {name: 'Force Urbania (13 Seater Executive)', cap: '13+1', rate: '₹36/km', desc: 'Luxury group touring van', slug: 'force-urbania-17'},
      {name: 'Force Urbania (17 Seater Monocoque)', cap: '17+1', rate: '₹38/km', desc: 'Whisper quiet German tech van', slug: 'force-urbania-17'}
    ]
  },
  {
    id: 'tempo',
    label: 'TEMPO TRAVELLER',
    icon: FaBus,
    tagline: 'Fully customized pushback AC minibuses for group departures',
    fleet: [
      {name: 'Force Tempo Traveller (12 Seater)', cap: '12+1', rate: '₹26/km', desc: 'Ideal for extended family trips', slug: 'tempo-traveller-12'},
      {name: 'Force Tempo Traveller (17 Seater)', cap: '17+1', rate: '₹28/km', desc: 'Generous luggage carrier & AC', slug: 'tempo-traveller-12'},
      {name: 'Force Maharaja 1x1 (13 Seater)', cap: '13+1', rate: '₹30/km', desc: 'Royal 1x1 Maharaja pushback', slug: 'tempo-traveller-12'},
      {name: 'Force Tempo Traveller (26 Seater)', cap: '26+1', rate: '₹36/km', desc: 'Large group travel solution', slug: 'tempo-traveller-12'}
    ]
  },
  {
    id: 'coach',
    label: 'COACH & BUS',
    icon: FaBusAlt,
    tagline: 'Air-conditioned luxury highway buses for weddings, events & conventions',
    fleet: [
      {name: '35 Seater Luxury AC Coach', cap: '35+2', rate: '₹52/km', desc: 'Air suspension & sound system', slug: 'volvo-luxury-coach'},
      {name: '45 Seater BharatBenz AC Coach', cap: '45+2', rate: '₹65/km', desc: 'Ergonomic high-back recliner seats', slug: 'volvo-luxury-coach'},
      {name: '50 Seater Volvo Multi-Axle Bus', cap: '50+2', rate: '₹85/km', desc: 'Long distance luxury flagship', slug: 'volvo-luxury-coach'}
    ]
  }
];

// TOUR PACKAGES CATEGORIES DATA
const TOUR_CATEGORIES = [
  {
    id: 'odisha',
    label: 'ODISHA TOUR PACKAGES',
    icon: FaOm,
    badge: '18+ Packages',
    tagline: 'Holy Jagannath Dham, Sun Temple, Chilika Lake & Western Odisha',
    packages: [
      {title: 'Puri · Konark · Bhubaneswar Golden Triangle', dur: '4D/3N', price: '₹11,999', to: '/odisha-tour-packages/puri-konark-bhubaneswar-golden-triangle'},
      {title: 'Daringbadi - Kashmir of Odisha Hill Retreat', dur: '3D/2N', price: '₹8,999', to: '/odisha-tour-packages/daringbadi-kashmir-of-odisha'},
      {title: 'Bhitarkanika Wildlife & Mangroves Safari', dur: '3D/2N', price: '₹7,499', to: '/odisha-tour-packages/bhitarkanika-mangroves-crocodile-safari'},
      {title: 'Koraput & Deomali Highest Peak Expedition', dur: '4D/3N', price: '₹12,499', to: '/odisha-tour-packages/koraput-deomali-tribal-heartland'},
      {title: 'Chilika Lake & Gopalpur-on-Sea Beach Holiday', dur: '3D/2N', price: '₹9,200', to: '/odisha-tour-packages/chilika-lake-satapada-dolphin-cruise'},
      {title: 'Similipal Tiger Reserve & Waterfall Trails', dur: '3D/2N', price: '₹8,799', to: '/odisha-tour-packages/similipal-national-park-tiger-reserve'},
      {title: 'Sambalpur, Hirakud Dam & Debrigarh Sanctuary', dur: '3D/2N', price: '₹8,500', to: '/odisha-tour-packages/western-odisha-sambalpur-hirakud-wonder'},
      {title: 'Puri Rath Yatra Special Darshan Package', dur: '4D/3N', price: '₹14,999', to: '/odisha-tour-packages/puri-rath-yatra-special-darshan'}
    ]
  },
  {
    id: 'india',
    label: 'INCREDIBLE INDIA TOURS',
    icon: FaMountain,
    badge: '16+ Packages',
    tagline: 'Snowy Himalayan peaks, Kerala backwaters, royal palaces & Goa beaches',
    packages: [
      {title: 'Kashmir Paradise: Srinagar, Gulmarg & Pahalgam', dur: '6D/5N', price: '₹19,999', to: '/domestic-tour-packages/kashmir-paradise-srinagar-gulmarg-pahalgam'},
      {title: 'Kerala God\'s Own Country: Alleppey & Munnar', dur: '6D/5N', price: '₹18,499', to: '/domestic-tour-packages/kerala-backwaters-munnar-alleppey-houseboat'},
      {title: 'Golden Triangle: Delhi, Agra Taj & Jaipur Forts', dur: '5D/4N', price: '₹15,999', to: '/domestic-tour-packages/golden-triangle-delhi-agra-jaipur'},
      {title: 'Varanasi, Ayodhya Ram Mandir & Prayagraj', dur: '5D/4N', price: '₹16,999', to: '/domestic-tour-packages/spiritual-varanasi-prayagraj-ayodhya'},
      {title: 'Himachal Escapes: Shimla, Manali & Solang Valley', dur: '6D/5N', price: '₹17,999', to: '/domestic-tour-packages/himachal-delights-shimla-kullu-manali'},
      {title: 'Goa Beach Bliss, Mandovi Cruise & Heritage', dur: '4D/3N', price: '₹11,999', to: '/domestic-tour-packages/goa-sun-sand-sea-luxury-getaway'},
      {title: 'Royal Rajasthan: Jaipur, Jodhpur & Udaipur Lakes', dur: '7D/6N', price: '₹22,999', to: '/domestic-tour-packages/royal-rajasthan-jaipur-jodhpur-udaipur'},
      {title: 'Leh Ladakh: Pangong Tso & Nubra Valley', dur: '6D/5N', price: '₹24,999', to: '/domestic-tour-packages/leh-ladakh-pangong-lake-nubra-valley'}
    ]
  }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'packages' | 'cars' | null
  const [activeCarTab, setActiveCarTab] = useState('sedan');

  // Mobile drawer states
  const [mobilePkOpen, setMobilePkOpen] = useState(false);
  const [mobileCarsOpen, setMobileCarsOpen] = useState(false);

  const loc = useLocation();
  const navRef = useRef();

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [loc.pathname, loc.hash]);

  useEffect(() => {
    const handleOutside = e => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const currentCarCat = FLEET_CATEGORIES.find(c => c.id === activeCarTab) || FLEET_CATEGORIES[0];

  return (
    <header className="header" ref={navRef}>
      <TopContactBar/>

      <div className="navbar main-navbar-container">
        <Logo/>

        {/* ================= CLEAN DESKTOP NAV (SINGLE LINE NO-WRAP) ================= */}
        <nav className="nav-desktop-clean" aria-label="Main Navigation">
          <NavLink to="/" end className="clean-nav-link">
            Home
          </NavLink>

          {/* ===== TOUR PACKAGES TABBED MEGA DROPDOWN ===== */}
          <div
            className="mega-nav-wrapper"
            onMouseEnter={() => setActiveDropdown('packages')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`clean-dd-trigger ${activeDropdown === 'packages' ? 'dd-active' : ''}`}
              aria-expanded={activeDropdown === 'packages'}
              onClick={() => setActiveDropdown(activeDropdown === 'packages' ? null : 'packages')}
            >
              <span>Tour Packages</span>
              <FaChevronDown className="chevron-nav-ico"/>
            </button>

            <AnimatePresence>
              {activeDropdown === 'packages' && (
                <motion.div
                  className="tabbed-mega-panel packages-mega-grid-panel"
                  initial={{opacity: 0, y: 8}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: 6}}
                  transition={{duration: 0.18}}
                >
                  <div className="packages-mega-grid-inner">
                    {/* Column 1: Odisha Heritage & Pilgrimage */}
                    <div className="pkg-mega-column">
                      <div className="pkg-column-header">
                        <span className="col-badge-pill badge-heritage">SPIRITUAL CIRCUIT</span>
                        <h4>
                          <FaOm className="text-orange"/> Odisha Heritage
                        </h4>
                        <p>Sacred Jagannath Dham, Sun Temple &amp; Kalinga temples</p>
                      </div>

                      <div className="pkg-column-links">
                        <Link to="/odisha-tour-packages/puri-konark-bhubaneswar-golden-triangle" className="pkg-link-item">
                          <span className="dot-bullet dot-orange"/>
                          <div className="pkg-link-text">
                            <strong>Puri · Konark · Bhubaneswar</strong>
                            <div className="pkg-link-meta">
                              <span className="dur-chip">4D/3N</span>
                              <span className="price-chip">₹11,999</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="/odisha-tour-packages/puri-rath-yatra-special-darshan" className="pkg-link-item">
                          <span className="dot-bullet dot-orange"/>
                          <div className="pkg-link-text">
                            <strong>Puri Rath Yatra Special Darshan</strong>
                            <div className="pkg-link-meta">
                              <span className="dur-chip">4D/3N</span>
                              <span className="price-chip">₹14,999</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="/odisha-tour-packages/chilika-lake-satapada-dolphin-cruise" className="pkg-link-item">
                          <span className="dot-bullet dot-orange"/>
                          <div className="pkg-link-text">
                            <strong>Chilika Lake &amp; Gopalpur Coast</strong>
                            <div className="pkg-link-meta">
                              <span className="dur-chip">3D/2N</span>
                              <span className="price-chip">₹9,200</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="/odisha-tour-packages/western-odisha-sambalpur-hirakud-wonder" className="pkg-link-item">
                          <span className="dot-bullet dot-orange"/>
                          <div className="pkg-link-text">
                            <strong>Sambalpur &amp; Hirakud Dam</strong>
                            <div className="pkg-link-meta">
                              <span className="dur-chip">3D/2N</span>
                              <span className="price-chip">₹8,500</span>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <Link to="/odisha-tour-packages" className="col-footer-link text-orange">
                        View All Heritage Tours <FaArrowRight/>
                      </Link>
                    </div>

                    {/* Column 2: Odisha Hills & Wildlife */}
                    <div className="pkg-mega-column">
                      <div className="pkg-column-header">
                        <span className="col-badge-pill badge-nature">NATURE &amp; HILLS</span>
                        <h4>
                          <FaMountain className="text-green"/> Hills &amp; Wildlife
                        </h4>
                        <p>Misty hill valleys, wildlife sanctuaries &amp; waterfalls</p>
                      </div>

                      <div className="pkg-column-links">
                        <Link to="/odisha-tour-packages/daringbadi-kashmir-of-odisha" className="pkg-link-item">
                          <span className="dot-bullet dot-green"/>
                          <div className="pkg-link-text">
                            <strong>Daringbadi - Kashmir of Odisha</strong>
                            <div className="pkg-link-meta">
                              <span className="dur-chip">3D/2N</span>
                              <span className="price-chip">₹8,999</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="/odisha-tour-packages/bhitarkanika-mangroves-crocodile-safari" className="pkg-link-item">
                          <span className="dot-bullet dot-green"/>
                          <div className="pkg-link-text">
                            <strong>Bhitarkanika Crocodile Safari</strong>
                            <div className="pkg-link-meta">
                              <span className="dur-chip">3D/2N</span>
                              <span className="price-chip">₹7,499</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="/odisha-tour-packages/koraput-deomali-tribal-heartland" className="pkg-link-item">
                          <span className="dot-bullet dot-green"/>
                          <div className="pkg-link-text">
                            <strong>Koraput &amp; Deomali Valley</strong>
                            <div className="pkg-link-meta">
                              <span className="dur-chip">4D/3N</span>
                              <span className="price-chip">₹12,499</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="/odisha-tour-packages/similipal-national-park-tiger-reserve" className="pkg-link-item">
                          <span className="dot-bullet dot-green"/>
                          <div className="pkg-link-text">
                            <strong>Similipal Tiger Reserve &amp; Falls</strong>
                            <div className="pkg-link-meta">
                              <span className="dur-chip">3D/2N</span>
                              <span className="price-chip">₹8,799</span>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <Link to="/odisha-tour-packages" className="col-footer-link text-green">
                        View All Odisha Packages (18) <FaArrowRight/>
                      </Link>
                    </div>

                    {/* Column 3: Incredible India Highlights */}
                    <div className="pkg-mega-column">
                      <div className="pkg-column-header">
                        <span className="col-badge-pill badge-india">BEYOND ODISHA</span>
                        <h4>
                          <FaCompass className="text-blue"/> Incredible India
                        </h4>
                        <p>Himalayan heights, backwaters &amp; royal palace circuits</p>
                      </div>

                      <div className="pkg-column-links">
                        <Link to="/domestic-tour-packages/kashmir-paradise-srinagar-gulmarg-pahalgam" className="pkg-link-item">
                          <span className="dot-bullet dot-blue"/>
                          <div className="pkg-link-text">
                            <strong>Kashmir Paradise &amp; Gulmarg</strong>
                            <div className="pkg-link-meta">
                              <span className="dur-chip">6D/5N</span>
                              <span className="price-chip">₹19,999</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="/domestic-tour-packages/kerala-backwaters-munnar-alleppey-houseboat" className="pkg-link-item">
                          <span className="dot-bullet dot-blue"/>
                          <div className="pkg-link-text">
                            <strong>Kerala God&apos;s Own Country</strong>
                            <div className="pkg-link-meta">
                              <span className="dur-chip">6D/5N</span>
                              <span className="price-chip">₹18,499</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="/domestic-tour-packages/golden-triangle-delhi-agra-jaipur" className="pkg-link-item">
                          <span className="dot-bullet dot-blue"/>
                          <div className="pkg-link-text">
                            <strong>Golden Triangle (Delhi·Agra·Jaipur)</strong>
                            <div className="pkg-link-meta">
                              <span className="dur-chip">5D/4N</span>
                              <span className="price-chip">₹15,999</span>
                            </div>
                          </div>
                        </Link>

                        <Link to="/domestic-tour-packages/spiritual-varanasi-prayagraj-ayodhya" className="pkg-link-item">
                          <span className="dot-bullet dot-blue"/>
                          <div className="pkg-link-text">
                            <strong>Varanasi · Ayodhya · Prayagraj</strong>
                            <div className="pkg-link-meta">
                              <span className="dur-chip">5D/4N</span>
                              <span className="price-chip">₹16,999</span>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <Link to="/domestic-tour-packages" className="col-footer-link text-blue">
                        View All India Packages (16) <FaArrowRight/>
                      </Link>
                    </div>

                    {/* Column 4: Special Spotlight Card with Authentic Visual Image */}
                    <div className="pkg-mega-column pkg-spotlight-column">
                      <div className="pkg-spotlight-card-v2">
                        <div className="spotlight-img-wrap">
                          <img
                            src="https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=600&q=80"
                            alt="Odisha Tourism Special Offer"
                            className="spotlight-featured-img"
                            loading="lazy"
                          />
                          <div className="spotlight-img-overlay" />
                          <span className="spotlight-sale-pill">SPECIAL OFFER</span>
                        </div>
                        <div className="spotlight-card-content-v2">
                          <div className="spotlight-badge-subtitle">PURI · KONARK · CHILIKA</div>
                          <h3 className="spotlight-card-title">Flat ₹500 OFF*</h3>
                          <p className="spotlight-card-desc">Book your dream holiday with sanitized AC cab &amp; verified temple pandas.</p>
                          <div className="spotlight-features-list">
                            <span><FaCheckCircle className="text-gold"/> Zero Surge Cab Guarantee</span>
                            <span><FaCheckCircle className="text-gold"/> 3★ / 4★ Verified Stays</span>
                          </div>
                          <Link to="/book-your-trip" className="btn-spotlight-cta">
                            Plan Custom Trip <FaArrowRight/>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mega Menu Bottom Bar */}
                  <div className="packages-mega-bottom-strip">
                    <div className="pkg-theme-tags">
                      <span className="theme-tag-label">QUICK THEMES:</span>
                      <Link to="/odisha-tour-packages" className="theme-tag-link">🛕 Temple Circuits</Link>
                      <Link to="/domestic-tour-packages" className="theme-tag-link">⛰️ Hill Stations</Link>
                      <Link to="/odisha-tour-packages" className="theme-tag-link">🏖️ Beach Holidays</Link>
                      <Link to="/odisha-tour-packages" className="theme-tag-link">🐅 Wildlife Safaris</Link>
                      <Link to="/domestic-tour-packages" className="theme-tag-link">👨‍👩‍👧 Family Tours</Link>
                    </div>
                    <Link to="/odisha-tour-packages" className="btn-view-all-packages">
                      Explore All 34+ Packages <FaArrowRight/>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ===== RENTAL CARS TABBED MEGA DROPDOWN (Image 2 Match) ===== */}
          <div
            className="mega-nav-wrapper"
            onMouseEnter={() => setActiveDropdown('cars')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`clean-dd-trigger ${activeDropdown === 'cars' ? 'dd-active' : ''}`}
              aria-expanded={activeDropdown === 'cars'}
              onClick={() => setActiveDropdown(activeDropdown === 'cars' ? null : 'cars')}
            >
              <span>Rental Cars</span>
              <FaChevronDown className="chevron-nav-ico"/>
            </button>

            <AnimatePresence>
              {activeDropdown === 'cars' && (
                <motion.div
                  className="tabbed-mega-panel cars-mega-box"
                  initial={{opacity: 0, y: 8}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: 6}}
                  transition={{duration: 0.18}}
                >
                  <div className="tabbed-mega-split">
                    {/* Left Sidebar: Fleet Categories */}
                    <div className="tabbed-left-sidebar">
                      <div className="sidebar-cat-title">FLEET CATEGORIES</div>
                      <div className="sidebar-tabs-list">
                        {FLEET_CATEGORIES.map(cat => {
                          const Icon = cat.icon;
                          const isSel = activeCarTab === cat.id;
                          return (
                            <button
                              key={cat.id}
                              type="button"
                              className={`tab-btn-item ${isSel ? 'tab-item-selected' : ''}`}
                              onMouseEnter={() => setActiveCarTab(cat.id)}
                              onClick={() => setActiveCarTab(cat.id)}
                            >
                              <div className="tab-btn-left">
                                <Icon className="tab-cat-icon"/>
                                <span>{cat.label}</span>
                              </div>
                              <FaChevronRight className="tab-arrow-right"/>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Panel: Content Grid */}
                    <div className="tabbed-right-panel">
                      <div className="tabbed-content-header">
                        <div>
                          <h4 className="active-cat-heading text-orange">{currentCarCat.label}</h4>
                          <p className="active-cat-sub">{currentCarCat.tagline}</p>
                        </div>
                        <Link to="/car-rental" className="view-registry-link">
                          VIEW CATEGORY REGISTRY <FaArrowRight/>
                        </Link>
                      </div>

                      <div className="items-two-column-grid">
                        {currentCarCat.fleet.map((car, i) => (
                          <Link
                            key={i}
                            to={`/car-rental/${car.slug || 'swift-dzire'}`}
                            className="tab-content-card-row"
                          >
                            <div className="card-row-title-wrap">
                              <span className="car-dot"/>
                              <div>
                                <strong className="card-row-title">{car.name}</strong>
                                <small className="car-rate-sub">{car.rate} · {car.desc}</small>
                              </div>
                            </div>
                            <span className="seat-cap-pill">{car.cap}</span>
                          </Link>
                        ))}
                      </div>

                      <div className="tabbed-bottom-strip-cars">
                        <div className="airport-pill-note">
                          <FaPlaneArrival className="plane-ico"/>
                          <span>
                            <strong>Bhubaneswar Airport (BBI) Transfers:</strong> Fixed rates to Puri, Cuttack &amp; Konark with Zero Surge.
                          </span>
                        </div>
                        <Link to="/car-rental" className="btn btn-yellow btn-xs">
                          Book Fleet Online
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/#odisha-30-districts" className="clean-nav-link">
            30 Districts Map
          </Link>

          <NavLink to="/about-us" className="clean-nav-link">
            About Us
          </NavLink>

          <NavLink to="/gallery" className="clean-nav-link">
            Gallery
          </NavLink>

          <NavLink to="/blogs" className="clean-nav-link">
            Blogs
          </NavLink>

          <NavLink to="/contact-us" className="clean-nav-link">
            Contact
          </NavLink>
        </nav>

        {/* ================= ACTIONS ================= */}
        <div className="nav-actions-wrap">
          <Link to="/book-your-trip" className="btn-book-journey-nav">
            <FaCalendarCheck className="cal-btn-icon"/>
            <span className="btn-book-text-desktop">Book Your Trip</span>
            <span className="btn-book-text-mobile">Book Trip</span>
          </Link>

          <button
            className="burger-toggle-btn"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes/> : <FaBars/>}
          </button>
        </div>
      </div>

      {/* ================= RESPONSIVE MOBILE DRAWER ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="nav-mobile-drawer"
            aria-label="Mobile Navigation Drawer"
            initial={{height: 0, opacity: 0}}
            animate={{height: 'auto', opacity: 1}}
            exit={{height: 0, opacity: 0}}
            transition={{duration: 0.25}}
          >
            <NavLink to="/" end onClick={() => setMobileOpen(false)} className="mob-link">
              Home
            </NavLink>

            {/* Mobile Tour Packages Accordion */}
            <div className="mob-accordion">
              <button
                className="mob-acc-trigger"
                onClick={() => setMobilePkOpen(!mobilePkOpen)}
              >
                <span>Tour Packages</span>
                <FaChevronDown className={mobilePkOpen ? 'rotate-180' : ''}/>
              </button>
              {mobilePkOpen && (
                <div className="mob-acc-body">
                  <NavLink to="/odisha-tour-packages" onClick={() => setMobileOpen(false)} className="mob-sublink">
                    ★ All Odisha Tour Packages (18)
                  </NavLink>
                  <NavLink to="/domestic-tour-packages" onClick={() => setMobileOpen(false)} className="mob-sublink">
                    ★ Incredible India Tour Packages (16)
                  </NavLink>
                  <Link to="/odisha-tour-packages/puri-konark-bhubaneswar-golden-triangle" onClick={() => setMobileOpen(false)} className="mob-sublink">
                    • Puri · Konark · Bhubaneswar Golden Triangle
                  </Link>
                  <Link to="/odisha-tour-packages/daringbadi-kashmir-of-odisha" onClick={() => setMobileOpen(false)} className="mob-sublink">
                    • Daringbadi Hill Station Retreat
                  </Link>
                  <Link to="/domestic-tour-packages/kashmir-paradise-srinagar-gulmarg-pahalgam" onClick={() => setMobileOpen(false)} className="mob-sublink">
                    • Kashmir Valley &amp; Gulmarg
                  </Link>
                  <Link to="/domestic-tour-packages/kerala-backwaters-munnar-alleppey-houseboat" onClick={() => setMobileOpen(false)} className="mob-sublink">
                    • Kerala Backwaters &amp; Munnar
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Rental Cars Accordion */}
            <div className="mob-accordion">
              <button
                className="mob-acc-trigger"
                onClick={() => setMobileCarsOpen(!mobileCarsOpen)}
              >
                <span>Rental Cars &amp; Fleet</span>
                <FaChevronDown className={mobileCarsOpen ? 'rotate-180' : ''}/>
              </button>
              {mobileCarsOpen && (
                <div className="mob-acc-body">
                  <NavLink to="/car-rental" onClick={() => setMobileOpen(false)} className="mob-sublink">
                    ★ View Full Fleet Registry &amp; Rates
                  </NavLink>
                  <Link to="/car-rental/swift-dzire" onClick={() => setMobileOpen(false)} className="mob-sublink">
                    • Maruti Suzuki Dzire AC (4+1) — from ₹12/km
                  </Link>
                  <Link to="/car-rental/maruti-ertiga" onClick={() => setMobileOpen(false)} className="mob-sublink">
                    • Maruti Suzuki Ertiga AC (6+1) — from ₹15/km
                  </Link>
                  <Link to="/car-rental/innova-crysta" onClick={() => setMobileOpen(false)} className="mob-sublink">
                    • Toyota Innova Crysta AC (7+1) — from ₹19/km
                  </Link>
                  <Link to="/car-rental/toyota-fortuner" onClick={() => setMobileOpen(false)} className="mob-sublink">
                    • Toyota Fortuner 4x4 VIP (6+1) — from ₹34/km
                  </Link>
                  <Link to="/car-rental/force-urbania-17" onClick={() => setMobileOpen(false)} className="mob-sublink">
                    • Force Urbania Luxury Van (17+1) — from ₹36/km
                  </Link>
                  <Link to="/car-rental/tempo-traveller-12" onClick={() => setMobileOpen(false)} className="mob-sublink">
                    • Force Tempo Traveller (12+1) — from ₹26/km
                  </Link>
                </div>
              )}
            </div>

            <Link to="/#odisha-30-districts" onClick={() => setMobileOpen(false)} className="mob-link">
              30 Districts Interactive Map
            </Link>

            <NavLink to="/about-us" onClick={() => setMobileOpen(false)} className="mob-link">
              About Us
            </NavLink>

            <NavLink to="/gallery" onClick={() => setMobileOpen(false)} className="mob-link">
              Gallery
            </NavLink>

            <NavLink to="/blogs" onClick={() => setMobileOpen(false)} className="mob-link">
              Blogs &amp; Guides
            </NavLink>

            <NavLink to="/contact-us" onClick={() => setMobileOpen(false)} className="mob-link">
              Contact Us
            </NavLink>

            <div className="mob-cta-box">
              <Link to="/book-your-trip" onClick={() => setMobileOpen(false)} className="btn btn-yellow btn-full">
                <FaCalendarCheck/> Book Your Trip Online
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}