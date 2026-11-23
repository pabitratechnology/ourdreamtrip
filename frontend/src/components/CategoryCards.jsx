import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const categories = [
  {
    title: 'India Group Tour',
    img: '/images/dest-charminar.jpg',
    to: '/domestic-tour-packages?type=group'
  },
  {
    title: 'India Tour',
    img: '/images/dest-kedarnath.jpg',
    to: '/domestic-tour-packages'
  },
  {
    title: 'International Group Tour',
    img: '/images/dest-beach-resort.jpg',
    to: '/domestic-tour-packages?type=international-group'
  },
  {
    title: 'International Tour',
    img: '/images/dest-singapore-merlion.jpg',
    to: '/domestic-tour-packages?type=international'
  }
];

export default function CategoryCards(){
  return (
    <section className="container destination-categories-section">
      <div className="dest-cat-head text-center">
        <span className="dest-cat-eyebrow">Explore Now</span>
        <h2>
          Destination By <span className="cat-highlight-pink">Categories</span>
        </h2>
        <p className="dest-cat-sub" style={{color: '#64748B', maxWidth: '620px', margin: '0.4rem auto 0', fontSize: '0.92rem'}}>
          From spiritual group departures to serene honeymoon retreats, explore tailor-made holiday experiences.
        </p>
      </div>

      <div className="dest-cat-grid">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            className="dest-cat-card"
            whileHover={{y: -6}}
            transition={{duration: 0.25}}
          >
            <Link to={cat.to} className="dest-cat-link">
              <div className="dest-cat-img-box">
                <img src={cat.img} alt={cat.title} loading="lazy"/>
              </div>
              <div className="dest-cat-title-pill">
                <h4>{cat.title}</h4>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
