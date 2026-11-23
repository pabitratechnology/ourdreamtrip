import {useState} from 'react';
import {Link} from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';
import {
  FaUsers,
  FaCarSide,
  FaGasPump,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
  FaPhoneAlt,
  FaWhatsapp,
  FaSnowflake,
  FaSuitcase,
  FaCamera
} from 'react-icons/fa';
import {cars} from '../data/vehicleFleet.js';
import {CONTACT} from '../data/packages.js';

const fleetTabs = [
  {id: 'all', label: 'All Fleet (7)'},
  {id: 'Sedan', label: 'Sedans (Dzire)'},
  {id: 'MUV', label: 'Family MUVs (Ertiga)'},
  {id: 'MPV', label: 'Premium MPVs (Innova)'},
  {id: 'Luxury SUV', label: 'Luxury 4x4 (Fortuner)'},
  {id: 'Luxury Van', label: 'Executive Van (Urbania)'},
  {id: 'Minibus', label: 'Group Travellers'},
  {id: 'Coach & Bus', label: 'Volvo Coaches'}
];

export default function FleetShowcase() {
  const [activeCat, setActiveCat] = useState('all');
  const [selectedPhotoMap, setSelectedPhotoMap] = useState({});

  const filteredVehicles = cars.filter(c => {
    if (activeCat === 'all') return true;
    if (activeCat === 'MPV') return c.cat === 'MPV' || c.cat === 'Premium MPV';
    return c.cat === activeCat;
  });

  const handleSelectPhoto = (carId, photoUrl, e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedPhotoMap(prev => ({...prev, [carId]: photoUrl}));
  };

  return (
    <section className="container section-margin fleet-showcase-section" id="rental-fleet">
      <div className="section-head text-center">
        <span className="badge-pill">Verified Chauffeur-Driven Fleet</span>
        <h2>
          Explore Our <span className="head-accent-blue">Premium Vehicles &amp; Cabs</span>
        </h2>
        <p>
          From fuel-efficient sedans for airport transfers to executive 4x4 SUVs, luxury Force Urbania, and 45-seater Volvo coaches across Odisha.
        </p>

        {/* Category Pills */}
        <div className="tabs-filter-bar fleet-filter-bar">
          {fleetTabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeCat === tab.id ? 'active' : ''}`}
              onClick={() => setActiveCat(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Fleet Cards Grid */}
      <div className="fleet-cards-grid">
        <AnimatePresence mode="popLayout">
          {filteredVehicles.map(car => {
            const currentImg = selectedPhotoMap[car.id] || car.img;
            const gallery = car.gallery && car.gallery.length ? car.gallery : [car.img];

            return (
              <motion.div
                key={car.id}
                layout
                initial={{opacity: 0, scale: 0.95}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.95}}
                transition={{duration: 0.3}}
                className="fleet-master-card glass-card"
              >
                {/* Image Wrap with Multi-Photo Switcher */}
                <div className="fleet-card-img-wrap">
                  <Link to={`/car-rental/${car.slug || car.id}`}>
                    <img
                      src={currentImg}
                      alt={car.n}
                      loading="lazy"
                      className="fleet-vehicle-photo"
                    />
                  </Link>

                  <span className="fleet-cat-badge">{car.badge || car.cat}</span>
                  <span className="fleet-rating-tag">★ {car.rating} ({car.tripsCompleted}+ trips)</span>

                  {/* Interactive Thumbnail Gallery Strip on Card */}
                  {gallery.length > 1 && (
                    <div className="card-thumb-switcher-row">
                      <span className="cam-hint"><FaCamera/> Views:</span>
                      {gallery.map((gImg, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className={`card-mini-thumb-btn ${currentImg === gImg ? 'active-thumb' : ''}`}
                          onClick={e => handleSelectPhoto(car.id, gImg, e)}
                          title={`Switch to View ${idx + 1}`}
                        >
                          <img src={gImg} alt={`Angle ${idx + 1}`}/>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="fleet-card-content">
                  <div className="fleet-title-header">
                    <h3>
                      <Link to={`/car-rental/${car.slug || car.id}`} className="fleet-title-anchor">
                        {car.n}
                      </Link>
                    </h3>
                    <span className="fleet-cat-sub">{car.cat}</span>
                  </div>
                  <p className="fleet-tagline-text">{car.tagline || car.desc}</p>

                  {/* Specs Pill Grid */}
                  <div className="fleet-specs-grid">
                    <div className="f-spec-item" title="Seating Capacity">
                      <FaUsers className="f-icon"/>
                      <span>{car.s}</span>
                    </div>
                    <div className="f-spec-item" title="Luggage Room">
                      <FaSuitcase className="f-icon"/>
                      <span>{car.luggage?.split('(')[0]}</span>
                    </div>
                    <div className="f-spec-item" title="Air Conditioning">
                      <FaSnowflake className="f-icon"/>
                      <span>AC with Vents</span>
                    </div>
                    <div className="f-spec-item" title="Fuel & Transmission">
                      <FaGasPump className="f-icon"/>
                      <span>{car.fuel?.split('with')[0]}</span>
                    </div>
                  </div>

                  {/* Transparent Pricing Matrix */}
                  <div className="fleet-pricing-matrix">
                    <div className="f-price-cell">
                      <span className="f-price-lbl">Outstation</span>
                      <strong className="f-price-val">{car.r}</strong>
                      <small className="f-price-sub">min {car.minKmPerDay}</small>
                    </div>
                    <div className="f-price-cell border-x">
                      <span className="f-price-lbl">Local (8h/80km)</span>
                      <strong className="f-price-val">{car.localRate8Hr || car.localRate}</strong>
                      <small className="f-price-sub">extra ₹{car.extraKmRate}/km</small>
                    </div>
                    <div className="f-price-cell">
                      <span className="f-price-lbl">Airport Transfer</span>
                      <strong className="f-price-val">{car.airportRate?.split('(')[0]}</strong>
                      <small className="f-price-sub">fixed tariff</small>
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="fleet-actions-row">
                    <Link
                      to={`/car-rental/${car.slug || car.id}`}
                      className="fleet-view-btn"
                    >
                      View Vehicle Details &amp; Tariffs <FaArrowRight/>
                    </Link>

                    <div className="fleet-btn-duo">
                      <Link
                        to={`/book-your-trip?vehicle=${encodeURIComponent(car.n)}`}
                        className="fleet-book-btn"
                      >
                        Book Cab
                      </Link>
                      <a
                        href={`https://wa.me/${CONTACT.tel.slice(1)}?text=Hi%2C%20I%20want%20to%20inquire%20about%20booking%20${encodeURIComponent(car.n)}%20for%20my%20Odisha%20trip.`}
                        className="fleet-wa-btn"
                        target="_blank"
                        rel="noreferrer"
                        title="Chat with Fleet Manager on WhatsApp"
                      >
                        <FaWhatsapp/>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Trust Strip below fleet */}
      <div className="fleet-trust-strip">
        <div className="ft-item">
          <FaShieldAlt className="ft-icon"/>
          <div>
            <strong>100% Sanitized Fleet</strong>
            <small>Deep steam-cleaned before every outstation journey</small>
          </div>
        </div>
        <div className="ft-item">
          <FaCheckCircle className="ft-icon"/>
          <div>
            <strong>Police Verified Drivers</strong>
            <small>Courteous, local Odia chauffeurs with 10+ yrs highway experience</small>
          </div>
        </div>
        <div className="ft-item">
          <FaCarSide className="ft-icon"/>
          <div>
            <strong>GPS Live Monitoring</strong>
            <small>Real-time vehicle speed and location tracking 24x7</small>
          </div>
        </div>
        <div className="ft-item">
          <FaPhoneAlt className="ft-icon"/>
          <div>
            <strong>Zero Toll &amp; Surge Surprises</strong>
            <small>Transparent kilometer readings and GST receipts</small>
          </div>
        </div>
      </div>
    </section>
  );
}
