import {useState} from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {
  FaCalendarAlt,
  FaCloudSun,
  FaSnowflake,
  FaUmbrella,
  FaLeaf,
  FaArrowRight,
  FaMapMarkerAlt
} from 'react-icons/fa';

const seasons = [
  {
    id: 'winter',
    name: 'Winter Season',
    months: 'October – February',
    badge: 'Peak Tourist Season',
    badgeClass: 'badge-winter',
    icon: FaSnowflake,
    temp: '15°C – 28°C',
    weatherDesc: 'Crisp pleasant sunshine, gentle cool coastal breeze, and misty highlands in Daringbadi.',
    highlights: [
      'Over 1.5 million migratory Siberian waterfowl at Chilika Lake (Mangalajodi)',
      'World-famous Konark Dance Festival & International Sand Art Festival (Dec)',
      'Puri Golden Blue Flag Beach morning walks & sacred Jagannath Temple Darshan',
      'Pine-forested Daringbadi experiencing sub-zero morning dew and hill frost'
    ],
    recommendedTours: [
      {title: 'Golden Triangle 4D/3N', slug: 'puri-konark-bhubaneswar-golden-triangle'},
      {title: 'Chilika & Satapada Dolphin Cruise', slug: 'chilika-lake-satapada-dolphin-cruise'},
      {title: 'Daringbadi Kashmir of Odisha', slug: 'daringbadi-kashmir-of-odisha'}
    ]
  },
  {
    id: 'spring',
    name: 'Spring Season',
    months: 'February – April',
    badge: 'Festivals & Forests',
    badgeClass: 'badge-spring',
    icon: FaLeaf,
    temp: '22°C – 32°C',
    weatherDesc: 'Comfortable weather with blooming palash flowers and active wildlife in national parks.',
    highlights: [
      'Grand Maha Shivratri night vigil at 11th-century Lingaraj Temple Bhubaneswar',
      'Similipal Biosphere Reserve elephant & tiger safari tracking in sal forests',
      'Gotipua dance recitals and traditional Pattachitra craft exhibitions in Raghurajpur',
      'Deomali highest peak treks in Koraput under crystal clear mountain skies'
    ],
    recommendedTours: [
      {title: 'Similipal Wilderness Safari', slug: 'similipal-national-park-tiger-reserve'},
      {title: 'Koraput & Deomali Valley', slug: 'koraput-deomali-tribal-heartland'},
      {title: 'Heritage & Buddhist Diamond Triangle', slug: 'diamond-triangle-buddhist-heritage'}
    ]
  },
  {
    id: 'monsoon',
    name: 'Monsoon Season',
    months: 'June – August',
    badge: 'Divine Rath Yatra & Waterfalls',
    badgeClass: 'badge-monsoon',
    icon: FaUmbrella,
    temp: '25°C – 32°C',
    weatherDesc: 'Lush emerald green landscapes, rain-fed roaring waterfalls, and holy ocean tides.',
    highlights: [
      'The sacred World-Famous Puri Jagannath Rath Yatra Chariot Festival (June/July)',
      'Thundering full-spate waterfalls: Duduma Canyon (175m) and Barehipani (399m)',
      'Serene rain-washed Marine Drive cruising between Konark and Puri',
      'Deep green mangrove creeks in Bhitarkanika teeming with newborn wildlife'
    ],
    recommendedTours: [
      {title: 'Divine Puri Rath Yatra Pilgrimage', slug: 'puri-konark-bhubaneswar-golden-triangle'},
      {title: 'Koraput Canyon Waterfalls', slug: 'koraput-deomali-tribal-heartland'},
      {title: 'Bhitarkanika Amazon of India', slug: 'bhitarkanika-mangroves-crocodile-safari'}
    ]
  },
  {
    id: 'autumn',
    name: 'Autumn Season',
    months: 'September – November',
    badge: 'Cultural Grandeur',
    badgeClass: 'badge-autumn',
    icon: FaCloudSun,
    temp: '20°C – 30°C',
    weatherDesc: 'Golden autumn sunshine with post-monsoon clean rivers, blue skies, and grand festivities.',
    highlights: [
      'Cuttack Durga Puja featuring thousand-year-old intricate Chandi Medha silver tableaux',
      'Historic Bali Yatra maritime trade fair along the banks of the sacred Mahanadi River',
      'Mangrove croc boat safaris in Bhitarkanika under cool pleasant post-monsoon breezes',
      'Ideal highway road-tripping weather with lush green paddy fields across Odisha'
    ],
    recommendedTours: [
      {title: 'Cuttack Heritage & Maritime Circuit', slug: 'grand-odisha-heritage-spiritual-circuit'},
      {title: 'Bhitarkanika Wildlife Expedition', slug: 'bhitarkanika-mangroves-crocodile-safari'},
      {title: 'Odisha Tribal Heartland Explorer', slug: 'odisha-tribal-odyssey-rayagada-jeypore-koraput'}
    ]
  }
];

export default function SeasonalCalendar() {
  const [activeSeasonId, setActiveSeasonId] = useState('winter');
  const activeSeason = seasons.find(s => s.id === activeSeasonId) || seasons[0];

  return (
    <section className="container section-margin seasonal-calendar-section" id="best-time-to-visit">
      <div className="section-head text-center">
        <span className="badge-pill">Plan According to Climate</span>
        <h2>
          When to Visit Odisha: <span className="head-accent-pink">Seasonal Travel Calendar</span>
        </h2>
        <p>
          Every season in Odisha unveils a unique face — from misty winter highland frosts and temple festivals to full-spate waterfalls and royal Rath Yatra chariot processions.
        </p>

        {/* Season Selector Tabs */}
        <div className="season-tabs-row">
          {seasons.map(s => {
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                className={`season-tab-btn ${activeSeasonId === s.id ? 'active' : ''}`}
                onClick={() => setActiveSeasonId(s.id)}
              >
                <Icon className="s-tab-icon"/>
                <div className="s-tab-info">
                  <strong>{s.name}</strong>
                  <small>{s.months}</small>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Season Detail Card */}
      <motion.div
        key={activeSeason.id}
        initial={{opacity: 0, y: 15}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.35}}
        className="season-detail-card glass-card"
      >
        <div className="season-card-grid">
          {/* Left summary */}
          <div className="season-summary-side">
            <span className={`season-badge-pill ${activeSeason.badgeClass}`}>
              {activeSeason.badge}
            </span>
            <h3>{activeSeason.name}</h3>
            <p className="season-months-tag"><FaCalendarAlt/> {activeSeason.months}</p>
            <div className="season-temp-box">
              <span className="temp-label">Average Temperature</span>
              <strong className="temp-val">{activeSeason.temp}</strong>
            </div>
            <p className="season-desc-txt">{activeSeason.weatherDesc}</p>
          </div>

          {/* Right Highlights & Recommended Tours */}
          <div className="season-highlights-side">
            <h4>🌟 Top Experiences in {activeSeason.name}:</h4>
            <ul className="season-points-list">
              {activeSeason.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            <div className="season-recommended-tours">
              <h5>Recommended Handpicked Itineraries:</h5>
              <div className="tour-chips-row">
                {activeSeason.recommendedTours.map((t, idx) => (
                  <Link
                    key={idx}
                    to={`/odisha-tour-packages/${t.slug}`}
                    className="tour-chip-link"
                  >
                    <FaMapMarkerAlt className="chip-pin"/> {t.title} <FaArrowRight className="chip-arr"/>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
