import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {
  FaCompass,
  FaCalendarCheck,
  FaFileInvoiceDollar,
  FaSmileBeam,
  FaArrowRight,
  FaPhoneAlt,
  FaWhatsapp
} from 'react-icons/fa';
import {CONTACT} from '../data/packages.js';

const steps = [
  {
    num: '01',
    title: 'Choose Destination or Fleet',
    desc: 'Browse 34+ curated Odisha & India holiday circuits or pick from our 7 sanitized cabs (Dzire to Volvo).',
    icon: FaCompass,
    color: '#0284C7',
    tag: 'Step 1'
  },
  {
    num: '02',
    title: 'Personalize Your Plan',
    desc: 'Select preferred travel dates, hotel tiers (3-Star, 4-Star or Luxury), and customize sightseeing spots.',
    icon: FaCalendarCheck,
    color: '#F59E0B',
    tag: 'Step 2'
  },
  {
    num: '03',
    title: 'Get Transparent Quote',
    desc: 'Receive an instant all-inclusive quotation with zero hidden charges, VIP temple slots & driver allowances.',
    icon: FaFileInvoiceDollar,
    color: '#10B981',
    tag: 'Step 3'
  },
  {
    num: '04',
    title: 'Enjoy Unforgettable Travel',
    desc: 'Be greeted by polite local Odia chauffeurs with GPS live tracking and 24×7 WhatsApp concierge support.',
    icon: FaSmileBeam,
    color: '#EC4899',
    tag: 'Step 4'
  }
];

export default function BookingSteps() {
  return (
    <section className="container section-margin booking-steps-section" id="how-it-works">
      <div className="section-head text-center">
        <span className="badge-pill">Effortless Holiday Planning</span>
        <h2>
          How It Works: <span className="head-accent-blue">Your Seamless 4-Step Journey</span>
        </h2>
        <p>
          We take the stress out of vacation planning. From your initial airport pickup to temple darshans and scenic hill cruises, everything is taken care of.
        </p>
      </div>

      <div className="booking-steps-grid">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.num}
              className="booking-step-card glass-card"
              whileHover={{y: -6}}
              transition={{duration: 0.25}}
            >
              <div className="step-card-header">
                <span className="step-num-watermark" style={{color: `${s.color}15`}}>
                  {s.num}
                </span>
                <div className="step-icon-circle" style={{backgroundColor: `${s.color}18`, color: s.color}}>
                  <Icon/>
                </div>
                <span className="step-pill" style={{backgroundColor: s.color}}>
                  {s.tag}
                </span>
              </div>

              <h3>{s.title}</h3>
              <p>{s.desc}</p>

              {idx < steps.length - 1 && (
                <div className="step-connector-arrow" aria-hidden="true">
                  →
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Quick Action Strip */}
      <div className="steps-bottom-cta-banner glass-navy">
        <div className="cta-left">
          <strong>Need help choosing the right tour for your family?</strong>
          <p>Talk directly with native Odia destination specialists available 24 hours every day.</p>
        </div>
        <div className="cta-right-btns">
          <Link to="/book-your-trip" className="btn btn-yellow">
            Plan Custom Trip <FaArrowRight/>
          </Link>
          <a
            href={`https://wa.me/${CONTACT.tel.slice(1)}?text=Hi%2C%20I%20want%20to%20plan%20a%20trip%20with%20Travels%20With%20Odisha.`}
            className="btn btn-outline-white"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp/> Chat On WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
