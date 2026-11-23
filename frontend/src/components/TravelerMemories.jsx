import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaHeart, FaQuoteLeft, FaStar, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { CONTACT } from '../data/packages.js';

const memories = [
  {
    id: 1,
    title: 'Blessed Darshan at Jagannath Puri',
    guest: 'The Sharma Family (New Delhi)',
    loc: 'Puri Jagannath Temple',
    img: '/images/pkg-odisha-family.jpg',
    rating: 5,
    quote: 'The VIP Panda assistance organized by Our Dream Trip made our elderly parents’ temple visit effortless. A divine experience!'
  },
  {
    id: 2,
    title: 'Konark Sun Temple Sunset Wonders',
    guest: 'Ananya & Rohan (Bengaluru)',
    loc: 'Konark UNESCO World Heritage',
    img: '/images/pkg-golden-triangle.jpg',
    rating: 5,
    quote: 'Standing in front of the massive 13th-century chariot wheels at sunset was breathtaking. Our chauffeur Rabi was so knowledgeable!'
  },
  {
    id: 3,
    title: 'Cruising the Serpentine Mangrove Creeks',
    guest: 'Dr. Mukherjee Group (Kolkata)',
    loc: 'Bhitarkanika Wildlife Sanctuary',
    img: '/images/pkg-bhitarkanika-aerial.jpg',
    rating: 5,
    quote: 'We spotted gigantic estuarine crocodiles and kingfishers on our forest boat safari. Truly India’s Mini Amazon!'
  },
  {
    id: 4,
    title: 'Misty Pine Walks in Daringbadi',
    guest: 'Vikram & Friends (Hyderabad)',
    loc: 'Daringbadi, Kandhamal',
    img: '/images/pkg-daringbadi.jpg',
    rating: 5,
    quote: 'The crisp morning air, organic coffee plantations, and Mandasaru Silent Valley canyon views exceeded all our expectations.'
  },
  {
    id: 5,
    title: 'Grand Aarti & Serenity in Ayodhya',
    guest: 'Smt. Gayatri Devi & Family (Bhubaneswar)',
    loc: 'Shri Ram Janmabhoomi, Ayodhya',
    img: '/images/pkg-ayodhya-rammandir.jpg',
    rating: 5,
    quote: 'A spiritually uplifting journey. Everything from our hotel to Innova Crysta transport was managed flawlessly.'
  },
  {
    id: 6,
    title: 'Shikara Sunset on Dal Lake',
    guest: 'Aditya & Neha (Mumbai)',
    loc: 'Srinagar, Kashmir',
    img: '/images/pkg-kashmir.jpg',
    rating: 5,
    quote: 'Waking up on a luxury wooden houseboat facing snow peaks was pure magic. Kudos to the Our Dream Trip team!'
  }
];

export default function TravelerMemories() {
  return (
    <section className="container section-margin traveler-memories-section" id="traveler-moments">
      <div className="section-head text-center">
        <span className="badge-pill">Cherished Guest Moments</span>
        <h2>
          Memories Made in Odisha: <span className="head-accent-pink">Real Traveler Stories</span>
        </h2>
        <p>
          Over 15,000+ satisfied pilgrims, honeymoon couples, and adventurous families have explored India with us. Here are some of their candid moments.
        </p>
      </div>

      <div className="memories-masonry-grid">
        {memories.map((m, i) => (
          <motion.div
            key={m.id}
            className="memory-card glass-card"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <div className="memory-img-box">
              <img src={m.img} alt={m.title} loading="lazy" />
              <span className="memory-loc-badge">
                <FaMapMarkerAlt className="pin-red" /> {m.loc}
              </span>
            </div>

            <div className="memory-body">
              <div className="memory-stars-row">
                {[...Array(m.rating)].map((_, idx) => (
                  <FaStar key={idx} className="star-gold" />
                ))}
              </div>

              <h4>{m.title}</h4>
              <p className="memory-quote-txt">
                <FaQuoteLeft className="quote-icon" /> {m.quote}
              </p>

              <div className="memory-guest-footer">
                <strong>{m.guest}</strong>
                <span className="verified-traveler-tick">Verified Traveler</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Share Memories Callout Strip */}
      <div className="share-memories-bar glass-card">
        <div className="sm-left">
          <FaInstagram className="ig-icon" />
          <div>
            <strong>Tag Us in Your Travel Photos: #OurDreamTrip</strong>
            <small>Share your journey moments with us and get featured on our official traveler wall (@ourdreamtrip)!</small>
          </div>
        </div>
        <a
          href={`https://wa.me/${CONTACT.tel.slice(1)}?text=Hi%2C%20I%20want%20to%20share%20my%20photos%20and%20review%20from%20my%20recent%20Odisha%20tour.`}
          className="btn btn-wa-pill"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp /> Share Your Experience
        </a>
      </div>
    </section>
  );
}
