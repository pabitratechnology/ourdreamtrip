import {useState, useEffect} from 'react';
import {Outlet,useLocation,Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {FaWhatsapp,FaPhoneAlt,FaArrowUp,FaEnvelope} from 'react-icons/fa';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import {ScrollToTop} from '../components/common.jsx';
import {CONTACT} from '../data/packages.js';

export default function PublicLayout(){
  const {pathname} = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ScrollToTop/>
      <Header/>

      {/* Floating Side Vertical Tabs (Exact match from reference images) */}
      <div className="side-tabs-left">
        <Link to="/book-your-trip" className="side-tab-pill tab-enquiry">
          ENQUIRY NOW
        </Link>
        <Link to="/contact-us" className="side-tab-pill tab-feedback">
          FEEDBACK
        </Link>
      </div>

      <div className="side-tabs-right">
        <Link to="/book-your-trip" className="side-tab-pill tab-discount">
          GET ₹500 OFF*
        </Link>
      </div>

      <Breadcrumbs/>

      <motion.main
        key={pathname}
        initial={{opacity: 0, y: 10}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.3}}
      >
        <Outlet/>
      </motion.main>

      <Footer/>

      {/* Bottom Floating Contact Actions (Clean single phone on left, single WhatsApp + conditional scroll on right) */}
      <div className="floaters-bottom-left">
        <a className="fl-circle fl-phone" href={`tel:${CONTACT.tel}`} aria-label="Call Our Dream Trip" title="Call Us Directly">
          <FaPhoneAlt/>
        </a>
      </div>

      <div className="floaters-bottom-right">
        {showScrollTop && (
          <button
            type="button"
            className="fl-circle fl-top"
            aria-label="Back to top"
            title="Back to Top"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <FaArrowUp/>
          </button>
        )}
        <a
          className="fl-circle fl-wa-large"
          href={`https://wa.me/${CONTACT.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat with Tour Expert"
        >
          <FaWhatsapp/>
        </a>
      </div>

      {/* Fixed Sticky Mobile Bottom Action Bar (Image 1 Match - ONLY ON MOBILE) */}
      <div className="mobile-fixed-bottom-bar" aria-label="Quick Mobile Actions">
        <a
          href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hello! I want to plan an Odisha / India tour.")}`}
          target="_blank"
          rel="noreferrer"
          className="mob-fixed-btn mob-btn-green"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="mob-fixed-btn-icon"/>
          <span>Chat on WhatsApp</span>
        </a>

        <a
          href={`tel:${CONTACT.tel}`}
          className="mob-fixed-btn mob-btn-navy"
          aria-label="Call Now"
        >
          <FaPhoneAlt className="mob-fixed-btn-icon"/>
          <span>Call Now</span>
        </a>

        <a
          href={`mailto:${CONTACT.email}`}
          className="mob-fixed-btn mob-btn-yellow"
          aria-label="Send Email"
        >
          <FaEnvelope className="mob-fixed-btn-icon"/>
          <span>Send Email</span>
        </a>

        <button
          type="button"
          className="mob-fixed-btn-top"
          aria-label="Back to top"
          title="Back to top"
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <FaArrowUp/>
        </button>
      </div>
    </>
  );
}
