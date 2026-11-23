import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {
  FaPrayingHands,
  FaTree,
  FaMountain,
  FaPalette,
  FaArrowRight,
  FaCheck
} from 'react-icons/fa';

const themes = [
  {
    id: 'spiritual',
    icon: FaPrayingHands,
    title: 'Divine Kalinga & Char Dham Trail',
    subtitle: 'Spiritual Peace & Millennium-Old Temple Architecture',
    tag: 'Holy Circuit',
    color: '#E11D48',
    gradient: 'linear-gradient(135deg, #FFE4E6 0%, #FFFFFF 100%)',
    places: ['Puri Jagannath Dham', 'UNESCO Konark Sun Temple', 'Ekamra Kshetra Bhubaneswar', 'Dhauli Shanti Stupa'],
    desc: 'Immerse in the timeless vibration of sacred rituals, sacred 56 bhog Mahaprasad, and grand stone carvings dating back to the 7th-13th century Kalinga empire.',
    link: '/odisha-tour-packages?theme=Spiritual'
  },
  {
    id: 'nature',
    icon: FaTree,
    title: 'Mangrove, Lake & Wildlife Safaris',
    subtitle: 'Saltwater Crocs, Rare Dolphins & 1.5M Migratory Birds',
    tag: 'Ecotourism',
    color: '#059669',
    gradient: 'linear-gradient(135deg, #D1FAE5 0%, #FFFFFF 100%)',
    places: ['Bhitarkanika Mangrove Forest', 'Chilika Lake (Satapada & Mangalajodi)', 'Similipal Tiger Reserve', 'Satkosia Gorge'],
    desc: 'Glide through ancient mangrove creeks, spot playful Irrawaddy dolphins breach calm waters, and witness skies filled with Siberian pintails and flamingos.',
    link: '/odisha-tour-packages?theme=Wildlife'
  },
  {
    id: 'highlands',
    icon: FaMountain,
    title: 'Eastern Ghats & Canyon Trails',
    subtitle: 'Misty Pine Valleys, 3000-ft Peaks & Roaring Waterfalls',
    tag: 'Highland Retreat',
    color: '#2563EB',
    gradient: 'linear-gradient(135deg, #DBEAFE 0%, #FFFFFF 100%)',
    places: ['Daringbadi Pine Forests', 'Deomali Peak (1,672m)', 'Duduma & Barehipani Falls', 'Mandasaru Silent Valley'],
    desc: 'Feel the cool mountain breeze above the clouds at Deomali, wander through organic coffee plantations in Daringbadi, and gaze down deep forest canyons.',
    link: '/odisha-tour-packages?theme=Hills'
  },
  {
    id: 'culture',
    icon: FaPalette,
    title: 'Living Arts, Textiles & Tribal Haats',
    subtitle: 'Ancient Crafts, Master Weavers & Indigenous Culture',
    tag: 'Living Heritage',
    color: '#D97706',
    gradient: 'linear-gradient(135deg, #FEF3C7 0%, #FFFFFF 100%)',
    places: ['Raghurajpur Crafts Village', 'Pipili Applique Workshops', 'Sambalpuri & Kotpad Weaves', 'Koraput Weekly Tribal Haats'],
    desc: 'Meet generational master painters hand-inking palm leaf scrolls, watch Gotipua dancers practice ancient poses, and experience colorful tribal markets.',
    link: '/odisha-tour-packages?theme=Heritage'
  }
];

export default function ThemeTrails() {
  return (
    <section className="container section-margin theme-trails-section" id="curated-themes">
      <div className="section-head text-center">
        <span className="badge-pill">Curated Travel Perspectives</span>
        <h2>
          Signature <span className="head-accent-gold">Odisha Tourism Theme Trails</span>
        </h2>
        <p>
          Whether you seek divine devotion, wildlife expeditions, highland chill, or cultural artisan discoveries, find itineraries designed around what inspires you.
        </p>
      </div>

      <div className="theme-trails-grid">
        {themes.map((t, idx) => {
          const Icon = t.icon;
          return (
            <motion.div
              key={t.id}
              className="theme-trail-card glass-card"
              whileHover={{y: -6}}
              transition={{duration: 0.25}}
              style={{background: t.gradient, borderColor: `${t.color}33`}}
            >
              <div className="theme-card-top">
                <div className="theme-icon-box" style={{backgroundColor: `${t.color}18`, color: t.color}}>
                  <Icon/>
                </div>
                <span className="theme-pill-tag" style={{backgroundColor: t.color}}>
                  {t.tag}
                </span>
              </div>

              <h3>{t.title}</h3>
              <p className="theme-sub">{t.subtitle}</p>
              <p className="theme-desc">{t.desc}</p>

              <div className="theme-places-box">
                <span className="places-title">Highlights:</span>
                <ul>
                  {t.places.map((p, i) => (
                    <li key={i}><FaCheck className="p-check" style={{color: t.color}}/> {p}</li>
                  ))}
                </ul>
              </div>

              <Link
                to={t.link}
                className="theme-explore-link"
                style={{color: t.color}}
              >
                Browse Trail Packages <FaArrowRight/>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
