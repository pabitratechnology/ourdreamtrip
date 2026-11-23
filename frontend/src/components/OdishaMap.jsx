import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaClock,
  FaRoad,
  FaShieldAlt,
  FaSearchPlus,
  FaSearchMinus,
  FaRedo,
  FaSun,
  FaArrowRight,
  FaWhatsapp,
  FaCar,
  FaCompass
} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {odisha30Districts} from '../data/odishaDistricts.js';
import {realOdishaDistricts} from '../data/odishaRealSvgPaths.js';
import {CONTACT} from '../data/packages.js';

// Quick access popular tourism hubs for 1-click mobile and desktop selection
const POPULAR_HUBS = [
  {id: 'puri', label: 'Puri & Konark', badge: 'Spiritual & Beach', icon: '🛕'},
  {id: 'khordha', label: 'Bhubaneswar', badge: 'Capital & Heritage', icon: '🏛️'},
  {id: 'kandhamal', label: 'Daringbadi', badge: 'Kashmir of Odisha', icon: '🌲'},
  {id: 'koraput', label: 'Deomali Peak', badge: 'Eastern Ghats', icon: '🏔️'},
  {id: 'mayurbhanj', label: 'Similipal', badge: 'Tiger & Waterfalls', icon: '🐅'},
  {id: 'kendrapara', label: 'Bhitarkanika', badge: 'Mangroves & Crocs', icon: '🐊'},
  {id: 'ganjam', label: 'Gopalpur Beach', badge: 'Sea & Chilika', icon: '🌊'},
  {id: 'balasore', label: 'Chandipur Coast', badge: 'Disappearing Sea', icon: '🏖️'},
  {id: 'sambalpur', label: 'Hirakud Dam', badge: 'Mahanadi Waterways', icon: '💧'},
  {id: 'cuttack', label: 'Cuttack City', badge: 'Silver Filigree', icon: '🏰'}
];

export default function OdishaMap() {
  const [activeDistrictKey, setActiveDistrictKey] = useState('puri');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [hoveredDistrict, setHoveredDistrict] = useState(null);

  const active = odisha30Districts[activeDistrictKey] || odisha30Districts.puri;

  const handleZoom = delta => {
    setZoomLevel(prev => Math.min(1.5, Math.max(0.85, Number((prev + delta).toFixed(2)))));
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setActiveDistrictKey('puri');
  };

  const currentHover = hoveredDistrict ? odisha30Districts[hoveredDistrict] : null;

  return (
    <div className="odisha-map-luxury-console">
      {/* ================= TOP INTERACTIVE HUB BAR ================= */}
      <div className="map-quick-hubs-bar">
        <div className="hubs-header">
          <span className="hubs-title">
            <FaCompass className="text-amber"/> POPULAR TOURISM HUBS (TAP TO INSPECT):
          </span>
          <div className="hubs-selector-wrap">
            <label htmlFor="allDistrictsSelect" className="sr-only">Select District</label>
            <select
              id="allDistrictsSelect"
              value={activeDistrictKey}
              onChange={e => setActiveDistrictKey(e.target.value)}
              className="district-select-luxury"
            >
              <optgroup label="Coastal &amp; Central Odisha (Spiritual &amp; Heritage)">
                <option value="puri">Puri (Konark Sun Temple, Jagannath Puri, Golden Beach)</option>
                <option value="khordha">Khordha / Bhubaneswar (Temple City, Dhauli, Khandagiri)</option>
                <option value="cuttack">Cuttack (Silver City, Barabati Fort, Mahanadi)</option>
                <option value="kendrapara">Kendrapara (Bhitarkanika National Park, Estuarine Crocodiles)</option>
                <option value="jagatsinghpur">Jagatsinghpur (Paradip Sea Port, Maa Sarala Jhankad)</option>
                <option value="jajpur">Jajpur (Maa Biraja Temple, Buddhist Ratnagiri)</option>
                <option value="bhadrak">Bhadrak (Akhandalamani Temple, Dhamra)</option>
                <option value="nayagarh">Nayagarh (Kantilo Nilamadhaba, Daspalla Hills)</option>
                <option value="dhenkanal">Dhenkanal (Kapilash Hill Temple, Saptasajya)</option>
                <option value="angul">Angul (Satkosia Mahanadi Gorge, Tikarpada)</option>
                <option value="boudh">Boudh (Star-Shaped Shiva Temples, Buddha Statues)</option>
              </optgroup>
              <optgroup label="Southern Odisha (Hills &amp; Waterfalls)">
                <option value="kandhamal">Kandhamal (Daringbadi Kashmir of Odisha, Pine Forests)</option>
                <option value="koraput">Koraput (Deomali 1,672m, Duduma Falls, Coffee Estates)</option>
                <option value="malkangiri">Malkangiri (Balimela Dam, Satiguda, Bonda Hills)</option>
                <option value="nabarangpur">Nabarangpur (Chandan Dhara Falls, Indravati River)</option>
                <option value="rayagada">Rayagada (Majhighariani Temple, Hanging Bridge)</option>
                <option value="gajapati">Gajapati (Mahendragiri Peak 1501m, Gandahati Falls)</option>
                <option value="ganjam">Ganjam (Gopalpur Sea Beach, Tampara Lake, Taratarini)</option>
                <option value="kalahandi">Kalahandi (Phurlijharan Falls, Asurgarh Fort)</option>
              </optgroup>
              <optgroup label="Northern Odisha (Wildlife &amp; Nature)">
                <option value="mayurbhanj">Mayurbhanj (Similipal Biosphere, Barehipani 399m)</option>
                <option value="kendujhar">Kendujhar (Ghatgaon Maa Tarini, Sanaghagara Falls)</option>
                <option value="balasore">Balasore (Chandipur Disappearing Sea, Kuldiha)</option>
                <option value="sundargarh">Sundargarh / Rourkela (Mandira Dam, Khandadhar Falls)</option>
                <option value="deogarh">Deogarh (Pradhanpat Waterfalls, Kailash Palace)</option>
              </optgroup>
              <optgroup label="Western Odisha (Culture &amp; Dams)">
                <option value="sambalpur">Sambalpur (Hirakud Dam 25km, Huma Leaning Temple)</option>
                <option value="bargarh">Bargarh (Dhanu Yatra Open Air Theater, Debrigarh)</option>
                <option value="balangir">Balangir (Harishankar Waterfalls, 64 Yogini Ranipur)</option>
                <option value="subarnapur">Subarnapur / Sonepur (Subarnameru Temple, Bomkai)</option>
                <option value="nuapada">Nuapada (Patora Dam Yogeswar, Sunabeda Sanctuary)</option>
                <option value="jharsuguda">Jharsuguda (Bikramkhol Prehistoric Caves, Kolabira)</option>
              </optgroup>
            </select>
          </div>
        </div>

        {/* 1-Tap Hub Pills */}
        <div className="hubs-pills-scroll">
          {POPULAR_HUBS.map(hub => {
            const isSelected = activeDistrictKey === hub.id;
            return (
              <button
                key={hub.id}
                onClick={() => setActiveDistrictKey(hub.id)}
                className={`hub-pill-btn ${isSelected ? 'hub-pill-active' : ''}`}
                aria-pressed={isSelected}
              >
                <span className="hub-emoji">{hub.icon}</span>
                <span className="hub-name">{hub.label}</span>
                <span className="hub-sub-tag">{hub.badge}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= MAIN 2-COLUMN LUXURY SHOWCASE ================= */}
      <div className="map-showcase-split-grid">
        {/* ================= COLUMN 1: INTERACTIVE VECTOR MAP ================= */}
        <div className="map-canvas-panel">
          <div className="map-panel-toolbar">
            <div className="active-target-badge">
              <span className="radar-status-dot"/>
              <strong>{active.name.split(' ')[0]}</strong>
              <span className="dist-subtext">· {active.distKm} km from Capital</span>
            </div>

            <div className="map-zoom-tools">
              <button
                className="map-zoom-btn"
                onClick={() => handleZoom(0.12)}
                aria-label="Zoom in"
                title="Zoom in"
              >
                <FaSearchPlus/>
              </button>
              <button
                className="map-zoom-btn"
                onClick={() => handleZoom(-0.12)}
                aria-label="Zoom out"
                title="Zoom out"
              >
                <FaSearchMinus/>
              </button>
              <button
                className="map-zoom-btn"
                onClick={resetZoom}
                aria-label="Reset zoom and center Puri"
                title="Reset View"
              >
                <FaRedo/>
              </button>
            </div>
          </div>

          {/* SVG Map Container */}
          <div className="svg-map-viewport">
            <svg
              viewBox="0 0 960 800"
              className="odisha-interactive-svg"
              style={{
                transform: `scale(${zoomLevel})`,
                transition: 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <defs>
                {/* Active District Warm Golden Glow */}
                <filter id="goldDistrictGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#F59E0B" floodOpacity="0.85"/>
                  <feDropShadow dx="0" dy="0" stdDeviation="14" floodColor="#EA580C" floodOpacity="0.45"/>
                </filter>

                {/* Ocean Waves Pattern */}
                <pattern id="oceanWavePattern" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path
                    d="M 0 30 Q 15 20, 30 30 T 60 30"
                    fill="none"
                    stroke="rgba(56, 189, 248, 0.08)"
                    strokeWidth="1.2"
                  />
                </pattern>
              </defs>

              {/* Ocean Canvas Background */}
              <rect width="960" height="800" fill="#07152B"/>
              <rect width="960" height="800" fill="url(#oceanWavePattern)"/>

              {/* Bay of Bengal Geographic Watermark */}
              <g transform="translate(680, 520) rotate(-35)">
                <text
                  x="0"
                  y="0"
                  fill="rgba(56, 189, 248, 0.22)"
                  fontSize="22"
                  fontWeight="900"
                  letterSpacing="8"
                  fontFamily="'Poppins', sans-serif"
                >
                  BAY OF BENGAL
                </text>
                <text
                  x="0"
                  y="24"
                  fill="rgba(245, 158, 11, 0.2)"
                  fontSize="12"
                  fontWeight="700"
                  letterSpacing="3"
                >
                  ODISHA COASTLINE · 480 KM
                </text>
              </g>

              {/* All 30 Real Geographic District Polygons */}
              {realOdishaDistricts.map(d => {
                const isActive = activeDistrictKey === d.id;
                const isHovered = hoveredDistrict === d.id;
                return (
                  <g
                    key={d.id}
                    onClick={() => setActiveDistrictKey(d.id)}
                    onMouseEnter={() => setHoveredDistrict(d.id)}
                    onMouseLeave={() => setHoveredDistrict(null)}
                    className={`district-node-group ${isActive ? 'is-active-district' : ''}`}
                    tabIndex={0}
                    role="button"
                    aria-label={`Select ${d.name} District`}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveDistrictKey(d.id);
                      }
                    }}
                  >
                    <path
                      d={d.d}
                      className={`district-path ${isActive ? 'path-active' : ''} ${isHovered ? 'path-hovered' : ''}`}
                      filter={isActive ? 'url(#goldDistrictGlow)' : ''}
                    />
                    <text
                      x={d.cx}
                      y={d.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className={`district-text-label ${isActive ? 'label-active' : ''} ${isHovered ? 'label-hovered' : ''}`}
                    >
                      {d.name}
                    </text>
                  </g>
                );
              })}

              {/* Bhubaneswar State Capital Beacon */}
              <g className="bhubaneswar-capital-beacon" pointerEvents="none">
                <circle cx="628.6" cy="413.8" r="9" fill="#F59E0B" opacity="0.95"/>
                <circle cx="628.6" cy="413.8" r="18" fill="none" stroke="#F59E0B" strokeWidth="2.5" className="beacon-ping-ring"/>
                <circle cx="628.6" cy="413.8" r="32" fill="none" stroke="#F59E0B" strokeWidth="1.2" opacity="0.4"/>
                <text
                  x="628.6"
                  y="395"
                  textAnchor="middle"
                  fill="#FDE68A"
                  fontSize="11"
                  fontWeight="800"
                  letterSpacing="0.8"
                >
                  ★ BHUBANESWAR (HQ)
                </text>
              </g>
            </svg>

            {/* Hover Tooltip Overlay */}
            {currentHover && currentHover.id !== active.id && (
              <div className="map-hover-preview-badge">
                <strong>{currentHover.name.split(' ')[0]}</strong>
                <span>{currentHover.distKm} km · {currentHover.regionTag}</span>
              </div>
            )}
          </div>

          <div className="map-caption-footer">
            <span>💡 Click any district on the map or tap the quick filters above to load local sightseeing &amp; packages</span>
          </div>
        </div>

        {/* ================= COLUMN 2: LUXURY DISTRICT DOSSIER CARD ================= */}
        <div className="district-dossier-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{opacity: 0, y: 12}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -10}}
              transition={{duration: 0.24}}
              className="dossier-inner-card"
            >
              {/* Hero Banner with Photo */}
              <div
                className="dossier-hero-banner"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(7,21,43,0.3) 0%, rgba(7,21,43,0.94) 100%), url(${active.heroImg})`
                }}
              >
                <div className="dossier-badge-row">
                  <span className="badge-region-tag">{active.regionTag}</span>
                  <span className="badge-weather-tag">
                    <FaSun className="text-amber"/> {active.weather}
                  </span>
                </div>

                <div className="dossier-header-title">
                  <span className="dossier-odia-subtitle">
                    <FaMapMarkerAlt className="text-amber"/> {active.odia} · {active.name.split(' ')[0]} DISTRICT
                  </span>
                  <h2>{active.name.split(' ')[0]}</h2>
                  <div className="dossier-dist-pill">
                    <strong>{active.distKm === 0 ? 'STARTING POINT' : `${active.distKm} KM`}</strong>
                    <small>{active.distKm === 0 ? 'State Capital' : 'from Bhubaneswar'}</small>
                  </div>
                </div>
              </div>

              {/* Dossier Content Body */}
              <div className="dossier-card-content">
                <p className="dossier-description-para">{active.desc}</p>

                {/* Road Trip Metrics */}
                <div className="dossier-stats-grid">
                  <div className="dossier-stat-tile">
                    <div className="stat-head">
                      <FaClock className="stat-icon-red"/>
                      <span>DRIVE DURATION:</span>
                    </div>
                    <strong>{active.driveDuration}</strong>
                  </div>

                  <div className="dossier-stat-tile">
                    <div className="stat-head">
                      <FaRoad className="stat-icon-gold"/>
                      <span>MAIN HIGHWAY ROUTE:</span>
                    </div>
                    <strong>{active.highway}</strong>
                  </div>
                </div>

                {/* Key Landmarks Photo Gallery */}
                <div className="landmarks-section">
                  <div className="landmarks-heading-row">
                    <span className="landmarks-title">
                      🌟 Top Attractions in {active.name.split(' ')[0]}:
                    </span>
                    <span className="landmarks-badge">{active.landmarksCount} Featured</span>
                  </div>

                  <div className="landmarks-photo-cards-grid">
                    {active.landmarks.map((landmark, idx) => (
                      <div key={idx} className="landmark-photo-item">
                        <img
                          src={landmark.img}
                          alt={landmark.name}
                          loading="lazy"
                          className="landmark-photo-img"
                        />
                        <div className="landmark-photo-caption">
                          <span>{landmark.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="dossier-service-guarantees">
                  <span className="guarantee-item">
                    <FaShieldAlt className="text-emerald"/> Govt. Regd. Local Tour Guides
                  </span>
                  <span className="guarantee-item">
                    <FaCar className="text-amber"/> GPS Monitored AC Cabs
                  </span>
                </div>

                {/* Direct Action Buttons */}
                <div className="dossier-cta-buttons-row">
                  <Link
                    to={`/odisha-tour-packages/${active.slug}`}
                    className="btn btn-yellow btn-full dossier-btn-primary"
                  >
                    <span>Explore {active.name.split(' ')[0]} Tour Packages</span>
                    <FaArrowRight/>
                  </Link>

                  <a
                    href={`https://wa.me/${CONTACT.whatsappRaw || CONTACT.tel.slice(1)}?text=${encodeURIComponent(
                      `Hello Our Dream Trip! I am interested in visiting ${active.name.split(' ')[0]} (${active.distKm} km from Bhubaneswar). Please share custom tour packages and cab rental rates.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-dossier"
                    aria-label={`Enquire about ${active.name.split(' ')[0]} on WhatsApp`}
                  >
                    <FaWhatsapp/> <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
