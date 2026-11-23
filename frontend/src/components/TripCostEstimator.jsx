import {useState} from 'react';
import {Link} from 'react-router-dom';
import {
  FaCalculator,
  FaRoute,
  FaCarSide,
  FaClock,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaWhatsapp,
  FaShieldAlt,
  FaArrowRight
} from 'react-icons/fa';
import {CONTACT} from '../data/packages.js';

const popularRoutes = [
  {
    id: 'puri-one-way',
    label: 'Bhubaneswar Airport ⇄ Puri Jagannath Dham',
    distKm: 65,
    duration: '1h 20m',
    highway: 'NH316 Expressway',
    rates: {
      dzire: 1800,
      ertiga: 2400,
      innova: 3200,
      fortuner: 5500,
      urbania: 5800,
      tempo: 4800,
      volvo: 14000
    }
  },
  {
    id: 'konark-day',
    label: 'Bhubaneswar ⇄ Konark Sun Temple & Chandrabhaga',
    distKm: 140,
    duration: 'Full Day (8 hrs)',
    highway: 'Puri-Konark Marine Drive',
    rates: {
      dzire: 2400,
      ertiga: 3200,
      innova: 4200,
      fortuner: 7500,
      urbania: 8500,
      tempo: 6200,
      volvo: 18000
    }
  },
  {
    id: 'golden-triangle',
    label: 'Golden Triangle (Bhubaneswar · Puri · Konark · Dhauli)',
    distKm: 180,
    duration: 'Full Day / Multi-Day',
    highway: 'NH16 & NH316 Marine Drive',
    rates: {
      dzire: 3000,
      ertiga: 3800,
      innova: 4900,
      fortuner: 8800,
      urbania: 9800,
      tempo: 7500,
      volvo: 22000
    }
  },
  {
    id: 'chilika-satapada',
    label: 'Bhubaneswar ⇄ Chilika Lake Satapada (Dolphin Cruise)',
    distKm: 220,
    duration: 'Full Day (10 hrs)',
    highway: 'NH316 & Brahmagiri Road',
    rates: {
      dzire: 3200,
      ertiga: 4200,
      innova: 5400,
      fortuner: 9500,
      urbania: 11000,
      tempo: 8200,
      volvo: 24000
    }
  },
  {
    id: 'daringbadi-3days',
    label: 'Bhubaneswar ⇄ Daringbadi Hill Station (3 Days / 2 Nights)',
    distKm: 540,
    duration: '3 Days Tour',
    highway: 'SH4 & Bhanjanagar Ghats',
    rates: {
      dzire: 8500,
      ertiga: 11000,
      innova: 14500,
      fortuner: 28000,
      urbania: 24500,
      tempo: 19500,
      volvo: 48000
    }
  },
  {
    id: 'similipal-safari',
    label: 'Bhubaneswar ⇄ Similipal Tiger Reserve & Barehipani',
    distKm: 600,
    duration: '3 Days Tour',
    highway: 'NH16 & Mayurbhanj Forest Route',
    rates: {
      dzire: 9500,
      ertiga: 12500,
      innova: 16000,
      fortuner: 32000,
      urbania: 27000,
      tempo: 21000,
      volvo: 54000
    }
  },
  {
    id: 'koraput-deomali',
    label: 'Bhubaneswar ⇄ Koraput, Deomali & Duduma Canyon',
    distKm: 1050,
    duration: '5 Days Tour',
    highway: 'NH26 Mountain Passes',
    rates: {
      dzire: 15500,
      ertiga: 19500,
      innova: 24500,
      fortuner: 45000,
      urbania: 38000,
      tempo: 32000,
      volvo: 85000
    }
  }
];

const vehicleOptions = [
  {id: 'dzire', name: 'Maruti Suzuki Dzire', seats: '4+1', cat: 'Sedan', icon: '🚗'},
  {id: 'ertiga', name: 'Maruti Suzuki Ertiga', seats: '6+1', cat: 'Family MUV', icon: '🚙'},
  {id: 'innova', name: 'Toyota Innova Crysta', seats: '7+1', cat: 'Luxury MPV', icon: '🚐'},
  {id: 'fortuner', name: 'Toyota Fortuner 4x4', seats: '6+1', cat: 'VIP 4x4 SUV', icon: '🛞'},
  {id: 'urbania', name: 'Force Urbania Luxury Van', seats: '17 Seater', cat: 'Monocoque Van', icon: '🚐'},
  {id: 'tempo', name: 'Force Tempo Traveller', seats: '12 Seater', cat: 'Minibus', icon: '🚌'},
  {id: 'volvo', name: 'Volvo 9400 Luxury Coach', seats: '45 Seater', cat: 'Intercity Bus', icon: '🚍'}
];

export default function TripCostEstimator() {
  const [selectedRouteId, setSelectedRouteId] = useState('puri-one-way');
  const [selectedVehicleId, setSelectedVehicleId] = useState('innova');

  const route = popularRoutes.find(r => r.id === selectedRouteId) || popularRoutes[0];
  const vehicle = vehicleOptions.find(v => v.id === selectedVehicleId) || vehicleOptions[2];

  const estimatedFare = route.rates[vehicle.id] || 3200;

  const waText = encodeURIComponent(
    `Hi Our Dream Trip, I want to book a cab:\nRoute: ${route.label}\nVehicle: ${vehicle.name} (${vehicle.seats})\nEstimated Fare: ₹${estimatedFare.toLocaleString('en-IN')}\nPlease share availability and confirmation.`
  );

  return (
    <section className="container section-margin cost-estimator-section" id="fare-estimator">
      <div className="section-head text-center">
        <span className="badge-pill">100% Transparent Billing</span>
        <h2>
          Instant Odisha <span className="head-accent-orange">Trip Cost &amp; Cab Fare Calculator</span>
        </h2>
        <p>
          Select your road trip circuit and preferred vehicle to see instant, all-inclusive fare estimates with driver allowances and clean AC transport.
        </p>
      </div>

      <div className="estimator-console-card glass-card">
        <div className="estimator-grid">
          {/* Left Inputs */}
          <div className="estimator-inputs-col">
            <div className="input-group-box">
              <label>
                <FaMapMarkerAlt className="input-icon text-red"/> Select Travel Circuit:
              </label>
              <select
                className="estimator-select"
                value={selectedRouteId}
                onChange={e => setSelectedRouteId(e.target.value)}
              >
                {popularRoutes.map(r => (
                  <option key={r.id} value={r.id}>
                    {r.label} ({r.distKm} km)
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group-box" style={{marginTop: '1.2rem'}}>
              <label>
                <FaCarSide className="input-icon text-blue"/> Select Fleet Vehicle:
              </label>
              <div className="vehicle-chips-grid">
                {vehicleOptions.map(v => (
                  <button
                    key={v.id}
                    type="button"
                    className={`vehicle-chip-btn ${selectedVehicleId === v.id ? 'active' : ''}`}
                    onClick={() => setSelectedVehicleId(v.id)}
                  >
                    <span className="chip-icon">{v.icon}</span>
                    <div className="chip-details">
                      <strong>{v.name}</strong>
                      <small>{v.seats} Seats • {v.cat}</small>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Live Breakdown Output */}
          <div className="estimator-result-col glass-navy">
            <div className="result-header">
              <span className="est-badge">Live Quote Estimate</span>
              <div className="est-total-box">
                <small>Estimated Transparent Fare</small>
                <h3 className="est-total-num">₹{estimatedFare.toLocaleString('en-IN')}*</h3>
                <span className="est-sub-note">*Includes fuel, AC, verified chauffeur &amp; daily driver food allowance</span>
              </div>
            </div>

            {/* Circuit Quick Metrics */}
            <div className="circuit-metrics-row">
              <div className="metric-box">
                <FaRoute className="m-icon"/>
                <div>
                  <small>Distance</small>
                  <strong>{route.distKm} KM</strong>
                </div>
              </div>
              <div className="metric-box">
                <FaClock className="m-icon"/>
                <div>
                  <small>Duration</small>
                  <strong>{route.duration}</strong>
                </div>
              </div>
              <div className="metric-box">
                <FaShieldAlt className="m-icon"/>
                <div>
                  <small>Highway</small>
                  <strong>{route.highway.split(' ')[0]}</strong>
                </div>
              </div>
            </div>

            {/* Inclusions checklist */}
            <div className="est-inclusions-list">
              <div className="inc-item"><FaCheckCircle className="inc-check"/> Chilled AC &amp; Sanitized Vehicle</div>
              <div className="inc-item"><FaCheckCircle className="inc-check"/> Verified Local Odia Chauffeur</div>
              <div className="inc-item"><FaCheckCircle className="inc-check"/> Zero Surge Pricing Guarantee</div>
              <div className="inc-item"><FaCheckCircle className="inc-check"/> 24x7 GPS Live Fleet Monitoring</div>
            </div>

            {/* Action Buttons */}
            <div className="estimator-actions-box">
              <a
                href={`https://wa.me/${CONTACT.tel.slice(1)}?text=${waText}`}
                className="btn btn-yellow btn-block"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp/> Confirm Fare On WhatsApp
              </a>
              <Link
                to={`/book-your-trip?vehicle=${encodeURIComponent(vehicle.name)}&route=${encodeURIComponent(route.label)}`}
                className="btn btn-outline-white btn-block"
              >
                Book Online Now <FaArrowRight/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
