import {useState} from 'react';
import {useParams, Link, useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';
import {
  FaCheckCircle,
  FaShieldAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaStar,
  FaUsers,
  FaSuitcase,
  FaSnowflake,
  FaGasPump,
  FaCogs,
  FaRoad,
  FaClock,
  FaPlaneArrival,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
  FaCheck,
  FaMapMarkerAlt
} from 'react-icons/fa';
import {cars} from '../data/packages.js';
import {CONTACT} from '../data/packages.js';
import {useTitle, Btn, Img} from '../components/common.jsx';

export default function VehicleDetails() {
  const {slug} = useParams();
  const navigate = useNavigate();

  const car = cars.find(c => c.slug === slug || c.id === slug) || cars[0];

  useTitle(`${car.n} Rental in Odisha | Tariff & Online Booking | Our Dream Trip`);

  const [activeImg, setActiveImg] = useState(car.gallery ? car.gallery[0] : car.img);
  const [tripType, setTripType] = useState('outstation');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupCity, setPickupCity] = useState('Bhubaneswar');
  const [dropCity, setDropCity] = useState('Puri');
  const [openFaq, setOpenFaq] = useState(0);

  const galleryImages = car.gallery && car.gallery.length ? car.gallery : [car.img];

  const handleBookingSubmit = e => {
    e.preventDefault();
    const query = new URLSearchParams({
      vehicle: car.n,
      tripType,
      pickupDate,
      pickupCity,
      dropCity
    }).toString();
    navigate(`/book-your-trip?${query}`);
  };

  const waMessage = `Hello! I want to check availability and book ${car.n} (${car.cat}) for ${tripType} trip from ${pickupCity} to ${dropCity} on ${pickupDate || 'upcoming date'}. Please share best quote.`;

  return (
    <div className="vehicle-details-page">
      {/* ================= VEHICLE HERO HEADER ================= */}
      <section className="vehicle-hero-banner">
        <div className="container">
          <div className="vehicle-hero-header-row">
            <div>
              <div className="vehicle-badge-row">
                <span className="v-category-badge">{car.cat}</span>
                <span className="v-bestseller-badge">
                  <FaStar className="star-gold-mini"/> {car.badge || 'Verified Fleet'}
                </span>
                <span className="v-verified-badge">
                  <FaShieldAlt/> 100% Sanitized &amp; GPS Monitored
                </span>
              </div>
              <h1 className="vehicle-title-h1">{car.n}</h1>
              <p className="vehicle-tagline-sub">{car.tagline}</p>
            </div>

            <div className="vehicle-hero-rate-box">
              <span className="rate-lbl">OUTSTATION RATE</span>
              <strong className="rate-num">{car.r}</strong>
              <small className="rate-hint">Min. {car.minKmPerDay || '250 km / day'}</small>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN SPLIT CONTENT ================= */}
      <section className="container section-margin">
        <div className="vehicle-split-layout">
          {/* ================= LEFT MAIN COLUMN ================= */}
          <div className="vehicle-main-column">
            {/* Gallery Showcase */}
            <div className="vehicle-gallery-card glass-card">
              <div className="main-gallery-view">
                <img
                  src={activeImg || car.img}
                  alt={car.n}
                  className="vehicle-hero-preview-img"
                />
                <span className="gallery-cat-pill">{car.cat}</span>
              </div>

              {galleryImages.length > 1 && (
                <div className="gallery-thumbs-row">
                  {galleryImages.map((imgUrl, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`gallery-thumb-btn ${activeImg === imgUrl ? 'thumb-active' : ''}`}
                      onClick={() => setActiveImg(imgUrl)}
                    >
                      <img src={imgUrl} alt={`${car.n} view ${i + 1}`} loading="lazy"/>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Specs Ribbon */}
            <div className="specs-ribbon-grid">
              <div className="spec-item-box">
                <FaUsers className="spec-ico"/>
                <div>
                  <small>CAPACITY</small>
                  <strong>{car.s}</strong>
                </div>
              </div>

              <div className="spec-item-box">
                <FaSnowflake className="spec-ico text-blue"/>
                <div>
                  <small>AIR CONDITIONING</small>
                  <strong>{car.ac}</strong>
                </div>
              </div>

              <div className="spec-item-box">
                <FaSuitcase className="spec-ico text-gold"/>
                <div>
                  <small>LUGGAGE ROOM</small>
                  <strong>{car.luggage}</strong>
                </div>
              </div>

              <div className="spec-item-box">
                <FaGasPump className="spec-ico text-green"/>
                <div>
                  <small>FUEL TYPE</small>
                  <strong>{car.fuel || 'Diesel / Petrol'}</strong>
                </div>
              </div>
            </div>

            {/* Overview & Performance Write-up */}
            <div className="vehicle-section-card glass-card">
              <h3 className="card-section-title">
                Overview &amp; Highway Performance
              </h3>
              <div className="card-body-text">
                {car.overview ? (
                  car.overview.split('\n\n').map((p, idx) => <p key={idx}>{p}</p>)
                ) : (
                  <p>{car.desc}</p>
                )}
              </div>
            </div>

            {/* Detailed Tariff Card Table */}
            <div className="vehicle-section-card glass-card">
              <h3 className="card-section-title">
                Transparent Tariff &amp; Rental Rates
              </h3>
              <p className="card-sub-p">
                Fixed, upfront pricing with zero hidden driver surcharge, toll gouging, or seasonal surprises.
              </p>

              <div className="tariff-pricing-table">
                <div className="tariff-table-row header-row">
                  <span>RENTAL PACKAGE</span>
                  <span>BASE FARE</span>
                  <span>INCLUSIONS / EXTRA CHARGES</span>
                </div>

                <div className="tariff-table-row">
                  <div>
                    <strong>Outstation Roundtrip / Multi-Day</strong>
                    <small>Highway touring across Odisha &amp; India</small>
                  </div>
                  <strong className="tariff-price-accent">{car.r}</strong>
                  <span>Min. {car.minKmPerDay || '250 km / day'} · Fuel &amp; Driver included</span>
                </div>

                <div className="tariff-table-row">
                  <div>
                    <strong>Local City Tour (8 Hours / 80 Km)</strong>
                    <small>Bhubaneswar, Cuttack &amp; Temple Sightseeing</small>
                  </div>
                  <strong className="tariff-price-accent">{car.localRate8Hr || car.localRate}</strong>
                  <span>Extra: {car.extraKmRate || '₹12/km'} &amp; {car.extraHrRate || '₹150/hr'}</span>
                </div>

                <div className="tariff-table-row">
                  <div>
                    <strong>Local City Tour (12 Hours / 120 Km)</strong>
                    <small>Full Day Extended Temple &amp; Market Exploration</small>
                  </div>
                  <strong className="tariff-price-accent">{car.localRate12Hr || '₹3,000'}</strong>
                  <span>Extra: {car.extraKmRate || '₹12/km'} &amp; {car.extraHrRate || '₹150/hr'}</span>
                </div>

                <div className="tariff-table-row">
                  <div>
                    <strong>BBI Airport Pickup / Drop Transfer</strong>
                    <small>Flight arrival/departure transfer to City Hotels</small>
                  </div>
                  <strong className="tariff-price-accent">{car.airportRate}</strong>
                  <span>Point-to-point direct transfer with flight delay tracking</span>
                </div>

                <div className="tariff-table-row">
                  <div>
                    <strong>Night Chauffeur Allowance</strong>
                    <small>Applicable only between 10:00 PM – 6:00 AM</small>
                  </div>
                  <strong>{car.driverNightAllowance || '₹350 / night'}</strong>
                  <span>Direct driver food &amp; night halt allowance</span>
                </div>
              </div>
            </div>

            {/* Key Features & Amenities Grid */}
            <div className="vehicle-section-card glass-card">
              <h3 className="card-section-title">
                Vehicle Amenities &amp; Safety Features
              </h3>
              <div className="amenities-features-grid">
                {(car.features || [
                  'Chilled Air Conditioning',
                  'Ergonomic Reclining Seats',
                  'Touchscreen Bluetooth Audio & Fast USB Charging',
                  'Factory Speed Governor & GPS Live Fleet Tracking',
                  'Police-Verified Local Odia Chauffeur',
                  'Deep Steam Cleaned & Sanitized Before Every Trip',
                  'Ample Luggage Boot Space',
                  'First Aid Medical Kit & Emergency Safety Kit'
                ]).map((feat, idx) => (
                  <div key={idx} className="amenity-feature-box">
                    <FaCheckCircle className="amenity-check-ico"/>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Roadtrips with this Vehicle */}
            <div className="vehicle-section-card glass-card">
              <h3 className="card-section-title">
                Popular Roadtrip Routes with {car.n}
              </h3>
              <div className="routes-cards-grid">
                {(car.popularRoutes || [
                  {route: 'Bhubaneswar ⇄ Puri Jagannath Dham', dist: '65 km', time: '1h 20m', estPrice: '₹1,800 - ₹2,200'},
                  {route: 'Bhubaneswar ⇄ Konark Sun Temple & Marine Drive', dist: '68 km', time: '1h 30m', estPrice: '₹1,900 - ₹2,300'},
                  {route: 'Bhubaneswar ⇄ Chilika Lake & Satapada Dolphins', dist: '105 km', time: '2h 15m', estPrice: '₹2,600 - ₹3,200'},
                  {route: 'Bhubaneswar ⇄ Daringbadi Valley (Roundtrip)', dist: '490 km', time: '2 Days', estPrice: '₹6,500 - ₹7,200'}
                ]).map((r, i) => (
                  <div key={i} className="route-item-card">
                    <div className="route-card-top">
                      <FaRoad className="route-road-ico"/>
                      <strong>{r.route}</strong>
                    </div>
                    <div className="route-card-meta">
                      <span><FaMapMarkerAlt className="text-red"/> {r.dist}</span>
                      <span><FaClock className="text-blue"/> {r.time}</span>
                      <strong className="route-est-price">{r.estPrice}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions Card */}
            <div className="vehicle-section-card glass-card">
              <h3 className="card-section-title">
                Rental Inclusions &amp; Exclusions
              </h3>
              <div className="inclusions-exclusions-grid">
                <div className="inclusions-side">
                  <h4 className="inc-title">
                    <FaCheck className="text-green"/> What Is Included:
                  </h4>
                  <ul className="inc-list">
                    {(car.inclusions || [
                      'Clean, sanitized vehicle with air conditioning',
                      'Vehicle fuel charges for the agreed itinerary',
                      'Experienced police-verified chauffeur allowances',
                      '24x7 fleet concierge assistance & live GPS tracking'
                    ]).map((inc, i) => (
                      <li key={i}><FaCheckCircle className="text-green"/> {inc}</li>
                    ))}
                  </ul>
                </div>

                <div className="exclusions-side">
                  <h4 className="exc-title">
                    <FaTimes className="text-red"/> What Is Excluded:
                  </h4>
                  <ul className="exc-list">
                    {(car.exclusions || [
                      'National highway tolls and state entry road taxes',
                      'Parking fees at airports, temples, and monuments',
                      'Night chauffeur allowance (after 10:00 PM if applicable)',
                      'Monument entrance tickets and optional boat rides'
                    ]).map((exc, i) => (
                      <li key={i}><FaTimes className="text-red"/> {exc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Vehicle FAQs */}
            <div className="vehicle-section-card glass-card">
              <h3 className="card-section-title">
                Frequently Asked Questions about {car.n}
              </h3>
              <div className="vehicle-faqs-accordion">
                {(car.faqs || [
                  {q: `How do I book ${car.n} in advance?`, a: `You can book instantly online or by messaging us on WhatsApp. We confirm your booking with a 25% token advance and share driver & vehicle details 12 hours prior to departure.`},
                  {q: `Are fuel and driver food charges included in the quote?`, a: `Yes! All our per-km and fixed package quotations include vehicle fuel and standard driver daily allowances.`},
                  {q: `Is the vehicle sanitized and driven by verified staff?`, a: `Every vehicle undergoes complete steam cleaning before departure, and our chauffeurs are police-verified, courteous local residents.`}
                ]).map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className={`faq-accord-item ${isOpen ? 'active-faq' : ''}`}>
                      <button
                        className="faq-accord-btn"
                        onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      >
                        <span>{faq.q}</span>
                        {isOpen ? <FaChevronUp/> : <FaChevronDown/>}
                      </button>
                      {isOpen && (
                        <div className="faq-accord-body">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================= RIGHT STICKY BOOKING WIDGET ================= */}
          <div className="vehicle-sticky-side">
            <div className="booking-card-widget glass-card">
              <div className="widget-header">
                <span className="widget-badge">INSTANT QUOTE &amp; RESERVATION</span>
                <h3>Reserve {car.n}</h3>
                <div className="widget-pricing-row">
                  <div>
                    <small>Outstation Rate</small>
                    <strong className="widget-rate">{car.r}</strong>
                  </div>
                  <div className="widget-rating-tag">
                    <FaStar className="star-gold-mini"/> 4.9★
                    <small>(Verified Chauffeur)</small>
                  </div>
                </div>
              </div>

              <form onSubmit={handleBookingSubmit} className="widget-booking-form">
                <div className="form-group-custom">
                  <label>Trip Service Type:</label>
                  <select
                    value={tripType}
                    onChange={e => setTripType(e.target.value)}
                    className="custom-select-box"
                  >
                    <option value="outstation">Outstation Roundtrip / Multi-Day</option>
                    <option value="local">Local City Package (8h / 80km)</option>
                    <option value="airport">BBI Airport Pickup / Drop</option>
                  </select>
                </div>

                <div className="form-group-custom">
                  <label>Pickup Date:</label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={e => setPickupDate(e.target.value)}
                    required
                    className="custom-input-box"
                  />
                </div>

                <div className="form-row-two">
                  <div className="form-group-custom">
                    <label>Pickup City:</label>
                    <input
                      type="text"
                      value={pickupCity}
                      onChange={e => setPickupCity(e.target.value)}
                      required
                      className="custom-input-box"
                    />
                  </div>

                  <div className="form-group-custom">
                    <label>Drop / Destination:</label>
                    <input
                      type="text"
                      value={dropCity}
                      onChange={e => setDropCity(e.target.value)}
                      required
                      className="custom-input-box"
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-yellow btn-full widget-btn-book">
                  Book {car.n} Online <FaArrowRight/>
                </button>
              </form>

              <div className="widget-or-sep">
                <span>OR CHAT DIRECTLY</span>
              </div>

              <div className="widget-contact-actions">
                <a
                  href={`https://wa.me/${CONTACT.tel.slice(1)}?text=${encodeURIComponent(waMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-wa btn-full"
                >
                  <FaWhatsapp/> Get Instant WhatsApp Fare
                </a>

                <a href={`tel:${CONTACT.tel}`} className="btn btn-navy-outline btn-full">
                  <FaPhoneAlt/> Call Dispatch: {CONTACT.phone}
                </a>
              </div>

              <div className="widget-trust-pills">
                <span><FaCheckCircle className="text-green"/> Zero Toll Surge</span>
                <span><FaCheckCircle className="text-green"/> Free Cancellation</span>
                <span><FaShieldAlt className="text-blue"/> Commercial Permit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPLORE OTHER FLEET VEHICLES ================= */}
      <section className="container section-margin">
        <div className="section-head text-center">
          <span className="badge-pill">Complete Fleet Registry</span>
          <h2>Explore Other Vehicles In Our Fleet</h2>
          <p>From executive sedans to 50-seater luxury coaches, discover the right vehicle for your journey.</p>
        </div>

        <div className="grid3 cars-other-grid">
          {cars
            .filter(c => c.id !== car.id)
            .slice(0, 3)
            .map(otherCar => (
              <div key={otherCar.id} className="car-showcase-card glass-card">
                <div className="car-img-box">
                  <Img src={otherCar.img} alt={otherCar.n}/>
                  <span className="car-cat-badge">{otherCar.cat}</span>
                </div>
                <div className="car-details-box">
                  <h3>{otherCar.n}</h3>
                  <p className="car-desc-txt">{otherCar.desc}</p>
                  <div className="car-specs-row">
                    <span><FaUsers/> {otherCar.s}</span>
                    <span><FaSnowflake/> {otherCar.ac}</span>
                  </div>
                  <div className="car-fare-row">
                    <div>
                      <small>Outstation Rate</small>
                      <strong>{otherCar.r}</strong>
                    </div>
                    <Link to={`/car-rental/${otherCar.id}`} className="btn btn-yellow btn-sm">
                      View Details <FaArrowRight/>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
