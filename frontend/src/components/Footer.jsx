import {Link} from 'react-router-dom';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaAward,
  FaCreditCard,
  FaClock,
  FaAngleRight,
  FaCheckCircle,
  FaPaperPlane,
  FaCar,
  FaMapMarkedAlt,
  FaHeadset,
  FaLock,
  FaStar
} from 'react-icons/fa';
import {Logo, Socials} from './Header.jsx';
import {CONTACT, cars} from '../data/packages.js';

export const HillSilhouette = () => (
  <div className="footer-hill-silhouette-wrapper" aria-hidden="true">
    <svg
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      className="footer-hills-svg"
    >
      <defs>
        <linearGradient id="hillGradDistant" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#0B132B" stopOpacity="0.9"/>
        </linearGradient>
        <linearGradient id="hillGradMid" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.65"/>
          <stop offset="100%" stopColor="#031538" stopOpacity="0.95"/>
        </linearGradient>
        <linearGradient id="hillGradFront" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0F172A" stopOpacity="0.92"/>
          <stop offset="100%" stopColor="#031538" stopOpacity="1"/>
        </linearGradient>
      </defs>

      {/* Layer 1: Distant Misty Mountain Peaks of Eastern Ghats / Deomali */}
      <path
        d="M 0 130 Q 120 70 240 115 T 480 90 T 720 120 T 960 75 T 1200 110 T 1440 85 L 1440 220 L 0 220 Z"
        fill="url(#hillGradDistant)"
      />

      {/* Layer 2: Mid-range Rolling Pine Hills of Daringbadi */}
      <path
        d="M 0 155 Q 160 100 320 140 T 640 110 T 960 145 T 1280 115 T 1440 135 L 1440 220 L 0 220 Z"
        fill="url(#hillGradMid)"
      />

      {/* Layer 3: Foreground Ridges with subtle tree silhouette transitions */}
      <path
        d="M 0 180 Q 180 140 360 170 T 720 145 T 1080 175 T 1440 150 L 1440 220 L 0 220 Z"
        fill="url(#hillGradFront)"
      />
    </svg>
  </div>
);

export default function Footer() {
  const handleNewsletterSubmit = e => {
    e.preventDefault();
    const input = e.target.elements.travelerEmail;
    if (input && input.value) {
      alert(`Thank you! We will send exclusive Odisha & India travel deals to ${input.value}`);
      input.value = '';
    }
  };

  return (
    <footer className="footer-advanced">
      {/* Mountain / Hill Style Design Divider */}
      <HillSilhouette/>

      {/* Pre-footer Callout: Quick Trip Planner Action */}
      <div className="footer-cta-floating-wrap container">
        <div className="footer-cta-banner">
          <div className="cta-banner-text">
            <span className="cta-pill-tag">
              <FaHeadset/> LOCAL ODIA TRAVEL EXPERTS
            </span>
            <h3>Ready to Plan Your Dream Journey?</h3>
            <p>
              Get customized itineraries, transparent quotes, and verified hotel options within 15 minutes.
            </p>
          </div>
          <div className="cta-banner-actions">
            <a
              href={`https://wa.me/${CONTACT.tel.slice(1)}?text=${encodeURIComponent("Hello! I want a customized itinerary for Odisha / India tour.")}`}
              className="btn btn-yellow"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp/> Chat on WhatsApp
            </a>
            <a href={`tel:${CONTACT.tel}`} className="btn btn-navy-light">
              <FaPhoneAlt/> Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Trust Highlights Strip */}
      <div className="footer-trust-bar">
        <div className="container trust-grid">
          <div className="trust-item">
            <FaShieldAlt className="trust-icon"/>
            <div>
              <strong>100% Verified Chauffeurs</strong>
              <small>Police-verified, polite local drivers</small>
            </div>
          </div>
          <div className="trust-item">
            <FaAward className="trust-icon"/>
            <div>
              <strong>12+ Years of Excellence</strong>
              <small>15,000+ Happy travelers served</small>
            </div>
          </div>
          <div className="trust-item">
            <FaClock className="trust-icon"/>
            <div>
              <strong>24x7 On-Trip Concierge</strong>
              <small>Instant WhatsApp &amp; call assistance</small>
            </div>
          </div>
          <div className="trust-item">
            <FaCreditCard className="trust-icon"/>
            <div>
              <strong>Zero Hidden Costs</strong>
              <small>Tolls, parking &amp; taxes all included</small>
            </div>
          </div>
        </div>
      </div>

      {/* Main 5-Column Advanced Footer Grid */}
      <div className="container fgrid-advanced-5col">
        {/* Col 1: Brand & Gov Recognition */}
        <div className="fcol fcol-brand">
          <Logo/>
          <p className="f-desc">
            Your premier destination management company (DMC for Odisha). We craft authentic, comfortable journeys across the sacred temples, tranquil beaches, and mist-kissed hills of Odisha and Incredible India with ourdreamtrip.com.
          </p>

          <div className="accreditation-card">
            <FaCheckCircle className="acc-check"/>
            <div>
              <strong>Dept. of Tourism Recognized</strong>
              <small>Reg. No: {CONTACT.regNumber} · Odisha Tourism Partner</small>
            </div>
          </div>

          <div className="f-rating-pill">
            <FaStar className="star-gold"/>
            <span>4.9 / 5.0 Rating based on 1,850+ Traveler Reviews</span>
          </div>

          <div className="f-social-wrap">
            <span>Connect With Our Team:</span>
            <Socials/>
          </div>
        </div>

        {/* Col 2: Odisha Tour Highlights */}
        <div className="fcol">
          <h4>Odisha Tour Circuits</h4>
          <ul className="footer-links">
            <li>
              <Link to="/odisha-tour-packages/puri-konark-bhubaneswar-golden-triangle">
                <FaAngleRight/> Puri · Konark · Bhubaneswar
              </Link>
            </li>
            <li>
              <Link to="/odisha-tour-packages/daringbadi-kashmir-of-odisha">
                <FaAngleRight/> Daringbadi Hill Station
              </Link>
            </li>
            <li>
              <Link to="/odisha-tour-packages/bhitarkanika-mangroves-crocodile-safari">
                <FaAngleRight/> Bhitarkanika Mini Amazon Safari
              </Link>
            </li>
            <li>
              <Link to="/odisha-tour-packages/koraput-deomali-tribal-heartland">
                <FaAngleRight/> Koraput &amp; Deomali Valley
              </Link>
            </li>
            <li>
              <Link to="/odisha-tour-packages/chilika-lake-satapada-dolphin-cruise">
                <FaAngleRight/> Chilika Lake &amp; Gopalpur Sea
              </Link>
            </li>
            <li>
              <Link to="/odisha-tour-packages/similipal-national-park-tiger-reserve">
                <FaAngleRight/> Similipal Tiger Reserve
              </Link>
            </li>
            <li>
              <Link to="/#odisha-30-districts">
                <FaAngleRight/> Explore All 30 Districts Map
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: India Domestic Circuits */}
        <div className="fcol">
          <h4>Incredible India Tours</h4>
          <ul className="footer-links">
            <li>
              <Link to="/domestic-tour-packages/kashmir-paradise-srinagar-gulmarg-pahalgam">
                <FaAngleRight/> Kashmir Valley &amp; Gulmarg
              </Link>
            </li>
            <li>
              <Link to="/domestic-tour-packages/kerala-backwaters-munnar-alleppey-houseboat">
                <FaAngleRight/> Kerala Backwaters &amp; Munnar
              </Link>
            </li>
            <li>
              <Link to="/domestic-tour-packages/golden-triangle-delhi-agra-jaipur">
                <FaAngleRight/> Golden Triangle (Delhi·Agra·Jaipur)
              </Link>
            </li>
            <li>
              <Link to="/domestic-tour-packages/spiritual-varanasi-prayagraj-ayodhya">
                <FaAngleRight/> Varanasi · Ayodhya · Prayagraj
              </Link>
            </li>
            <li>
              <Link to="/domestic-tour-packages/himachal-delights-shimla-kullu-manali">
                <FaAngleRight/> Himachal Escapes &amp; Solang
              </Link>
            </li>
            <li>
              <Link to="/domestic-tour-packages/goa-sun-sand-sea-luxury-getaway">
                <FaAngleRight/> Goa Sun, Beach &amp; Cruise
              </Link>
            </li>
            <li>
              <Link to="/domestic-tour-packages">
                <FaAngleRight/> View All 16+ India Packages
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Car Rental Fleet */}
        <div className="fcol">
          <h4>Car Rental Fleet</h4>
          <ul className="footer-links">
            {cars.map(c => (
              <li key={c.id}>
                <Link to="/car-rental">
                  <FaAngleRight/> {c.n} ({c.cat})
                </Link>
              </li>
            ))}
            <li>
              <Link to="/car-rental">
                <FaAngleRight/> BBI Airport to Puri Dham Transfers
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 5: 24x7 Helpdesk & Newsletter */}
        <div className="fcol fcol-contact">
          <h4>24x7 Travel Helpdesk</h4>
          <div className="f-contact-card">
            <div className="f-contact-row">
              <FaPhoneAlt className="f-ci"/>
              <div>
                <small>Toll Free &amp; Direct Call</small>
                <a href={`tel:${CONTACT.tel}`}>{CONTACT.phone}</a>
              </div>
            </div>

            <div className="f-contact-row">
              <FaWhatsapp className="f-ci wa-color"/>
              <div>
                <small>WhatsApp Travel Concierge</small>
                <a
                  href="https://wa.me/917790008877"
                  target="_blank"
                  rel="noreferrer"
                >
                  {CONTACT.phone} (Instant WhatsApp)
                </a>
              </div>
            </div>

            <div className="f-contact-row">
              <FaEnvelope className="f-ci"/>
              <div>
                <small>Official Support</small>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
            </div>

            <div className="f-contact-row">
              <FaMapMarkerAlt className="f-ci"/>
              <div>
                <small>Bhubaneswar Headquarters</small>
                <p>{CONTACT.address}</p>
              </div>
            </div>
          </div>

          {/* Quick Newsletter Enquiry */}
          <div className="f-newsletter-box">
            <small>GET ₹500 OFF COUPON IN YOUR INBOX</small>
            <form onSubmit={handleNewsletterSubmit} className="f-newsletter-form">
              <input
                type="email"
                name="travelerEmail"
                placeholder="Enter email address"
                required
              />
              <button type="submit" aria-label="Subscribe">
                <FaPaperPlane/>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Payment Methods & Legal Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container f-bottom-in">
          <div className="f-payments">
            <span>
              <FaLock className="ssl-lock-icon"/> 100% Safe Payments:
            </span>
            <div className="payment-badges">
              <span className="pay-badge">UPI</span>
              <span className="pay-badge">Google Pay</span>
              <span className="pay-badge">PhonePe</span>
              <span className="pay-badge">Visa</span>
              <span className="pay-badge">Mastercard</span>
              <span className="pay-badge">RuPay</span>
              <span className="pay-badge">Net Banking</span>
              <span className="pay-badge">Razorpay 256-bit SSL</span>
            </div>
          </div>

          <div className="f-legal-links">
            <Link to="/blogs">Travel Blogs &amp; Guides</Link>
            <span>·</span>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>·</span>
            <Link to="/terms-and-conditions">Terms of Service</Link>
            <span>·</span>
            <Link to="/cancellation-policy">Cancellation &amp; Refund Policy</Link>
            <span>·</span>
            <Link to="/sitemap.html">HTML Sitemap</Link>
            <span>·</span>
            <a href="/sitemap.xml" target="_blank" rel="noreferrer">XML Sitemap</a>
            <span>·</span>
            <Link to="/about-us">About Us</Link>
            <span>·</span>
            <Link to="/contact-us">Contact</Link>
          </div>

          {/* Creator & Maintenance Credit: Pabitra Technology */}
          <div className="pabitra-tech-credit-wrap">
            <div className="pabitra-tech-partner-badge">
              <span className="tech-heart-pulsing" role="img" aria-label="love">❤️</span>
              <span className="tech-txt">
                Maintained and created with love by{' '}
                <a
                  href="https://www.pabitratechnology.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pabitra-tech-link"
                >
                  <strong className="pabitra-brand-name">Pabitra Technology</strong>
                  <span className="pabitra-ext-arrow">↗</span>
                </a>
              </span>
              <span className="pabitra-status-pill">
                <span className="status-dot-ping"></span>
                <span className="status-txt">Verified Tech Partner</span>
              </span>
            </div>
          </div>

          <div className="footer-copyright-row">
            <p className="copyright-text">
              © {new Date().getFullYear()} <strong>Our Dream Trip</strong> (ourdreamtrip.com). All Rights Reserved. Reg. Govt. of Odisha Tourism. Designed with pride in Bhubaneswar.
            </p>
            <div className="govt-accreditation-tag">
              <FaShieldAlt className="gov-icon"/> Govt. Recognized Odisha Tour Operator • 100% Sanitized Fleet
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}