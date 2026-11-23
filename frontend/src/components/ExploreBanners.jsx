import {Link} from 'react-router-dom';
import {FaCompass,FaArrowRight} from 'react-icons/fa';

const bannerData = [
  {
    tag: 'ODISHA PACKAGES',
    tagColor: '#2563EB',
    title: 'Explore Odisha',
    subtitle: 'Spiritual journeys & scenic beauty',
    price: 'From ₹1,499',
    to: '/odisha-tour-packages',
    bgClass: 'banner-odisha',
    img: '/images/banner-puri-beach.jpg'
  },
  {
    tag: 'INDIA PACKAGES',
    tagColor: '#EA580C',
    title: 'Explore India',
    subtitle: 'Incredible destinations across India',
    price: 'From ₹6,999',
    to: '/domestic-tour-packages',
    bgClass: 'banner-india',
    img: '/images/banner-himalaya-mist.jpg'
  },
  {
    tag: 'INTERNATIONAL PACKAGES',
    tagColor: '#0D9488',
    title: 'Explore World',
    subtitle: 'International holiday experiences',
    price: 'From ₹11,999',
    to: '/domestic-tour-packages',
    bgClass: 'banner-world',
    img: '/images/banner-tropical-islands.jpg'
  }
];

export default function ExploreBanners(){
  return (
    <section className="container explore-banners-section">
      <div className="section-head text-center">
        <span className="badge-pill">Explore By Territory</span>
        <h2>
          Handcrafted Journeys: <span className="head-accent-orange">Odisha, India &amp; Worldwide</span>
        </h2>
        <p>Choose your travel horizon with transparent quotes, verified stays, and private sanitized transport.</p>
      </div>

      <div className="section-title-with-icon" style={{marginTop: '1.2rem', marginBottom: '0.8rem'}}>
        <div className="compass-icon-circle">
          <FaCompass/>
        </div>
        <h3>Featured Regional Passports</h3>
      </div>

      <div className="explore-banners-grid">
        {bannerData.map((b, i) => (
          <Link key={i} to={b.to} className={`explore-banner-card ${b.bgClass}`}>
            <div className="banner-bg-img" style={{backgroundImage: `url(${b.img})`}}/>
            <div className="banner-overlay-grad"/>

            <div className="banner-content">
              <span className="banner-pill-tag" style={{backgroundColor: b.tagColor}}>
                {b.tag}
              </span>
              <h3>{b.title}</h3>
              <p>{b.subtitle}</p>

              <div className="banner-action-row">
                <span className="banner-price-btn">{b.price}</span>
                <span className="banner-circle-arrow">
                  <FaArrowRight/>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
