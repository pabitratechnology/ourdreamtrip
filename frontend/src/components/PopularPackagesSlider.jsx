import {useState,useRef} from 'react';
import {Link} from 'react-router-dom';
import {FaMapMarkerAlt,FaClock,FaArrowRight,FaChevronLeft,FaChevronRight} from 'react-icons/fa';
import {packages} from '../data/packages.js';

// Curate featured packages matching the exact style in Image 1
const popularPackages = [
  {
    title: 'Odisha Family Tour Packages 4 Nights and 5 Days',
    route: 'Bhubaneswar - Bhubaneswar',
    duration: '04 Nights and 05 Days',
    img: '/images/pkg-odisha-family.jpg',
    slug: 'puri-konark-bhubaneswar-golden-triangle',
    cat: 'odisha'
  },
  {
    title: 'Golden Triangle Tour Packages of Odisha',
    route: 'Bhubaneswar - Bhubaneswar',
    duration: '3 Nights 4 Days',
    img: '/images/pkg-golden-triangle.jpg',
    slug: 'puri-konark-bhubaneswar-golden-triangle',
    cat: 'odisha'
  },
  {
    title: 'Mini Amazon Of India - Bhitarkanika Wildlife...',
    route: 'Bhubaneswar - Bhubaneswar',
    duration: '02 Nights and 03 Days',
    img: '/images/pkg-bhitarkanika-aerial.jpg',
    slug: 'bhitarkanika-mangroves-crocodile-safari',
    cat: 'odisha'
  },
  {
    title: 'Varanasi, Prayagraj and Ayodhya Shree Ram Lal...',
    route: 'Bhubaneswar - Lucknow',
    duration: '07 Nights and 08 Days',
    img: '/images/pkg-ayodhya-rammandir.jpg',
    slug: 'spiritual-varanasi-prayagraj-ayodhya',
    cat: 'domestic'
  },
  {
    title: 'Daringbadi - Kashmir of Odisha Hill Station Retreat',
    route: 'Bhubaneswar - Bhubaneswar',
    duration: '02 Nights and 03 Days',
    img: '/images/pkg-daringbadi.jpg',
    slug: 'daringbadi-kashmir-of-odisha',
    cat: 'odisha'
  },
  {
    title: 'Kashmir Paradise: Srinagar, Gulmarg & Pahalgam',
    route: 'Srinagar - Srinagar',
    duration: '05 Nights and 06 Days',
    img: '/images/pkg-kashmir.jpg',
    slug: 'kashmir-paradise-srinagar-gulmarg-pahalgam',
    cat: 'domestic'
  }
];

export default function PopularPackagesSlider(){
  const sliderRef = useRef(null);

  const scroll = direction => {
    if(sliderRef.current){
      const {scrollLeft, clientWidth} = sliderRef.current;
      const scrollAmount = clientWidth * 0.75;
      sliderRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="container popular-slider-section">
      <div className="section-head text-center">
        <span className="badge-pill">Bestseller Packages</span>
        <h2>
          Popular <span className="head-accent-blue">Tour Packages</span>
        </h2>
        <p>Discover amazing destinations with our curated, all-inclusive tour packages</p>
      </div>

      <div className="slider-wrapper-relative">
        <button
          className="slider-nav-arrow arrow-left"
          onClick={() => scroll('left')}
          aria-label="Previous tours"
        >
          <FaChevronLeft/>
        </button>

        <div className="popular-cards-carousel" ref={sliderRef}>
          {popularPackages.map((p, idx) => (
            <div key={idx} className="popular-card-item">
              <div className="popular-card-inner">
                <div className="popular-card-img">
                  <img src={p.img} alt={p.title} loading="lazy"/>
                </div>

                <div className="popular-card-info">
                  <h3 className="popular-card-title">{p.title}</h3>

                  <div className="popular-card-meta-line">
                    <FaMapMarkerAlt className="meta-pin-pink"/>
                    <span>{p.route}</span>
                  </div>

                  <div className="popular-card-meta-line">
                    <FaClock className="meta-clock-gray"/>
                    <span>{p.duration}</span>
                  </div>

                  <div className="popular-card-btn-wrap">
                    <Link
                      to={`/${p.cat}-tour-packages/${p.slug}`}
                      className="popular-view-btn"
                    >
                      View Details <FaArrowRight className="btn-arrow-icon"/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="slider-nav-arrow arrow-right"
          onClick={() => scroll('right')}
          aria-label="Next tours"
        >
          <FaChevronRight/>
        </button>
      </div>
    </section>
  );
}
