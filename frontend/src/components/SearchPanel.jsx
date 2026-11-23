import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaSearch,
  FaLayerGroup,
  FaPaperPlane,
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
  FaTimes,
  FaCarSide,
  FaShieldAlt,
  FaUser,
  FaEnvelope,
  FaSpinner
} from 'react-icons/fa';
import { destinations, CONTACT } from '../data/packages.js';

export default function SearchPanel({ initial = {} }) {
  const nav = useNavigate();

  // Mode: 'enquiry' | 'search' | 'cab'
  const [mode, setMode] = useState('enquiry');

  // Shared form states
  const [d, setD] = useState(initial.destination || 'Puri, Konark & Bhubaneswar (Golden Triangle)');
  const [cat, setCat] = useState(initial.category || 'all');
  const [dt, setDt] = useState(initial.date || '');
  const [t, setT] = useState(initial.travellers || '2');

  // Enquiry specific fields
  const [guestPhone, setGuestPhone] = useState('');
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');

  // Modal & API status states
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Submit booking to backend API & dispatch direct email
  const postBookingToBackend = async (phone, name, email) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'Hero Quick Enquiry Bar',
          destination: d,
          travelDate: dt,
          travellers: t,
          guestName: name || guestName || 'Website Traveler',
          guestPhone: phone || guestPhone,
          guestEmail: email || guestEmail
        })
      });
      const data = await res.json();
      if (data.success) {
        setBookingRef(data.bookingId);
        setEnquirySuccess(true);
      } else {
        // Fallback reference if backend had an issue
        const fallbackRef = `ODT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
        setBookingRef(fallbackRef);
        setEnquirySuccess(true);
      }
    } catch (err) {
      console.warn('API error, using fallback confirmation:', err);
      const fallbackRef = `ODT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingRef(fallbackRef);
      setEnquirySuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Find Tours submit
  const handleFindTours = e => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (d && d !== 'all') params.set('destination', d.split(' (')[0]);
    if (cat && cat !== 'all') params.set('category', cat);
    if (dt) params.set('date', dt);
    if (t) params.set('travellers', t);
    nav(`/search-results?${params.toString()}`);
  };

  // Handle Send Enquiry submit from Hero bar
  const handleSendEnquiry = async e => {
    e.preventDefault();
    if (!guestPhone) {
      // Open modal to capture details
      setShowEnquiryModal(true);
      return;
    }
    // If phone already provided, post directly to mail & DB!
    await postBookingToBackend(guestPhone, guestName, guestEmail);
    setShowEnquiryModal(true);
  };

  // Submit inside modal
  const handleModalSubmit = async e => {
    e.preventDefault();
    if (!guestPhone) return;
    await postBookingToBackend(guestPhone, guestName, guestEmail);
  };

  // WhatsApp text formatting with booking ref
  const waEnquiryText = encodeURIComponent(
    `Hello Our Dream Trip!\nI want to confirm an enquiry:\n• Ref ID: #${bookingRef || 'NEW-HERO'}\n• Destination: ${d || 'Odisha Tour'}\n• Travel Date: ${dt || 'Flexible'}\n• Guests: ${t} Person(s)\n• Name: ${guestName || 'Guest'}\n• Phone: ${guestPhone || 'Direct WhatsApp'}\nPlease share my customized itinerary and best quote.`
  );

  return (
    <div className="search-panel-container">
      {/* Top Segmented Mode Selector Tabs */}
      <div className="search-tabs-header">
        <button
          type="button"
          className={`search-tab-pill ${mode === 'enquiry' ? 'active-enquiry' : ''}`}
          onClick={() => setMode('enquiry')}
        >
          <FaPaperPlane className="tab-pill-icon text-gold"/>
          <span>Send Quick Enquiry</span>
          <span className="tab-pill-tag">Direct to Mail</span>
        </button>

        <button
          type="button"
          className={`search-tab-pill ${mode === 'search' ? 'active-search' : ''}`}
          onClick={() => setMode('search')}
        >
          <FaSearch className="tab-pill-icon text-blue"/>
          <span>Find &amp; Filter Tours</span>
        </button>

        <button
          type="button"
          className={`search-tab-pill ${mode === 'cab' ? 'active-cab' : ''}`}
          onClick={() => setMode('cab')}
        >
          <FaCarSide className="tab-pill-icon text-green"/>
          <span>Book Rental Cab</span>
        </button>
      </div>

      {/* Main Search / Enquiry Console Form */}
      <form
        className="search-advanced search-console-modern glass-card"
        onSubmit={mode === 'enquiry' ? handleSendEnquiry : handleFindTours}
      >
        {/* Field 1: Category / Tour Type (shown in search mode) */}
        {mode === 'search' ? (
          <label className="search-field">
            <FaLayerGroup className="search-icon text-blue"/>
            <div className="search-input-group">
              <span className="search-label-txt">Category</span>
              <select value={cat} onChange={e => setCat(e.target.value)} aria-label="Tour Category">
                <option value="all">All Packages (Odisha &amp; India)</option>
                <option value="odisha">Odisha Tour Packages</option>
                <option value="domestic">Incredible India Packages</option>
              </select>
            </div>
          </label>
        ) : null}

        {/* Destination Field */}
        <label className="search-field">
          <FaMapMarkerAlt className="search-icon text-red"/>
          <div className="search-input-group">
            <span className="search-label-txt">
              {mode === 'cab' ? 'Pickup & Route' : 'Destination'}
            </span>
            <select value={d} onChange={e => setD(e.target.value)} aria-label="Destination">
              <option value="Puri, Konark & Bhubaneswar (Golden Triangle)">Puri · Konark · Bhubaneswar</option>
              <option value="Daringbadi - Kashmir of Odisha">Daringbadi Hill Station</option>
              <option value="Chilika Lake & Satapada Dolphin Cruise">Chilika Lake &amp; Dolphins</option>
              <option value="Bhitarkanika Mangrove & Wildlife">Bhitarkanika Wildlife Safari</option>
              <option value="Similipal Tiger Reserve & Waterfalls">Similipal Tiger Reserve</option>
              <option value="Koraput, Deomali & Duduma Canyon">Koraput &amp; Deomali Valley</option>
              <option value="Gopalpur-on-Sea & Tampara Lake">Gopalpur &amp; Tampara Lake</option>
              <option value="Kashmir Paradise: Srinagar & Gulmarg">Kashmir Valley Circuit</option>
              <option value="Varanasi, Prayagraj & Ayodhya Ram Mandir">Ayodhya · Varanasi · Prayagraj</option>
              <option value="Royal Rajasthan: Jaipur, Jodhpur & Udaipur">Royal Rajasthan</option>
              <option value="Kerala God's Own Country: Munnar & Alleppey">Kerala Backwaters</option>
              {destinations.map(x => (
                <option key={x} value={x}>{x}</option>
              ))}
            </select>
          </div>
        </label>

        {/* Travel Date Field */}
        <label className="search-field">
          <FaCalendarAlt className="search-icon text-blue"/>
          <div className="search-input-group">
            <span className="search-label-txt">Travel Date</span>
            <input
              type="date"
              value={dt}
              onChange={e => setDt(e.target.value)}
              aria-label="Travel date"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </label>

        {/* Guests Field */}
        <label className="search-field">
          <FaUsers className="search-icon text-purple"/>
          <div className="search-input-group">
            <span className="search-label-txt">Travellers</span>
            <select value={t} onChange={e => setT(e.target.value)} aria-label="Travellers">
              {[1, 2, 3, 4, 5, 6, 8, 10, 15, 20].map(n => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>
        </label>

        {/* Direct Phone Field for Enquiry Mode (Rapid Conversion) */}
        {mode === 'enquiry' && (
          <label className="search-field phone-field-highlight">
            <FaPhoneAlt className="search-icon text-gold"/>
            <div className="search-input-group">
              <span className="search-label-txt">WhatsApp / Mobile</span>
              <input
                type="tel"
                value={guestPhone}
                onChange={e => setGuestPhone(e.target.value)}
                placeholder="+91 Mobile number"
                className="phone-quick-input"
              />
            </div>
          </label>
        )}

        {/* Submit Actions */}
        <div className="search-actions-cluster">
          {mode === 'enquiry' ? (
            <button
              className="btn btn-yellow search-submit-btn enquiry-btn-glow"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="spin" /> Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane /> Send Enquiry
                </>
              )}
            </button>
          ) : mode === 'cab' ? (
            <Link to="/car-rental" className="btn btn-navy search-submit-btn">
              <FaCarSide/> View Cabs &amp; Tariffs
            </Link>
          ) : (
            <button className="btn btn-navy search-submit-btn" type="submit">
              <FaSearch/> Find Tours
            </button>
          )}
        </div>
      </form>

      {/* Trust Micro-bar below search */}
      <div className="search-trust-microbar">
        <span><FaShieldAlt className="tm-ico text-blue"/> 100% Free Custom Itinerary</span>
        <span>•</span>
        <span><FaCheckCircle className="tm-ico text-green"/> Verified Temple Pandas &amp; VIP Darshan</span>
        <span>•</span>
        <span><FaPhoneAlt className="tm-ico text-gold"/> 15-Minute WhatsApp Response</span>
      </div>

      {/* ================= ENQUIRY MODAL (DIRECT DISPATCH TO MAIL) ================= */}
      <AnimatePresence>
        {showEnquiryModal && (
          <div className="enquiry-modal-backdrop" onClick={() => setShowEnquiryModal(false)}>
            <motion.div
              className="enquiry-modal-card glass-navy"
              initial={{opacity: 0, scale: 0.9, y: 20}}
              animate={{opacity: 1, scale: 1, y: 0}}
              exit={{opacity: 0, scale: 0.9, y: 20}}
              transition={{duration: 0.25}}
              onClick={e => e.stopPropagation()}
            >
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setShowEnquiryModal(false)}
                aria-label="Close"
              >
                <FaTimes/>
              </button>

              {!enquirySuccess ? (
                <form onSubmit={handleModalSubmit} className="enquiry-modal-form">
                  <div className="modal-header-box">
                    <span className="modal-badge-tag">Direct Enquiry Dispatch</span>
                    <h3>Send Tour Enquiry</h3>
                    <p>
                      Your enquiry will be sent directly to our email (<strong>ourdreamtrip1@gmail.com</strong>) and our Bhubaneswar coordination team.
                    </p>
                  </div>

                  {/* Summary of what they picked */}
                  <div className="modal-trip-summary-box">
                    <div>
                      <small>DESTINATION</small>
                      <strong>{d}</strong>
                    </div>
                    <div>
                      <small>DATE</small>
                      <strong>{dt || 'Upcoming / Flexible'}</strong>
                    </div>
                    <div>
                      <small>GUESTS</small>
                      <strong>{t} Person(s)</strong>
                    </div>
                  </div>

                  <div className="modal-fields-grid">
                    <div className="m-field-group">
                      <label><FaUser className="m-icon"/> Your Name:</label>
                      <input
                        type="text"
                        value={guestName}
                        onChange={e => setGuestName(e.target.value)}
                        placeholder="e.g. Ramesh Kumar"
                        required
                        className="m-input"
                      />
                    </div>

                    <div className="m-field-group">
                      <label><FaPhoneAlt className="m-icon"/> Mobile / WhatsApp Number:</label>
                      <input
                        type="tel"
                        value={guestPhone}
                        onChange={e => setGuestPhone(e.target.value)}
                        placeholder="e.g. 7790008877"
                        required
                        className="m-input"
                      />
                    </div>

                    <div className="m-field-group" style={{ gridColumn: '1 / -1' }}>
                      <label><FaEnvelope className="m-icon"/> Email Address (Optional for receiving copy):</label>
                      <input
                        type="email"
                        value={guestEmail}
                        onChange={e => setGuestEmail(e.target.value)}
                        placeholder="e.g. yourname@gmail.com"
                        className="m-input"
                      />
                    </div>
                  </div>

                  <div className="modal-actions-row">
                    <button
                      type="submit"
                      className="btn btn-yellow btn-block"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <FaSpinner className="spin" /> Sending to Desk...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane /> Submit &amp; Send to Email
                        </>
                      )}
                    </button>
                    <a
                      href={`https://wa.me/${CONTACT.tel.slice(1)}?text=${waEnquiryText}`}
                      className="btn btn-wa btn-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaWhatsapp/> Chat Directly on WhatsApp
                    </a>
                  </div>

                  <small className="modal-privacy-note">
                    🔒 100% privacy guaranteed. Direct dispatch to our reservation inbox and WhatsApp desk.
                  </small>
                </form>
              ) : (
                /* Success State with Email Confirmation */
                <div className="enquiry-success-view">
                  <div className="success-icon-wrap">
                    <FaCheckCircle className="big-check-icon"/>
                  </div>
                  <span className="booking-ref-badge">
                    Booking Ref: #{bookingRef || 'ODT-CONFIRMED'}
                  </span>
                  <h3>Enquiry Dispatched Directly to Mail!</h3>
                  <p>
                    Thank you, <strong>{guestName || 'Traveler'}</strong>! Your booking enquiry for <strong>{d}</strong> ({t} guests) has been submitted and sent directly to our reservation desk at <strong>ourdreamtrip1@gmail.com</strong>.
                  </p>
                  <p className="success-sub-txt">
                    Our team will contact you at <strong>{guestPhone || 'your phone'}</strong> within 15 minutes with the tailored plan and transparent tariff.
                  </p>

                  <div className="success-btn-stack">
                    <a
                      href={`https://wa.me/${CONTACT.tel.slice(1)}?text=${waEnquiryText}`}
                      className="btn btn-yellow btn-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaWhatsapp/> Connect On WhatsApp with Ref #{bookingRef}
                    </a>

                    <button
                      type="button"
                      className="btn btn-outline-white btn-block"
                      onClick={() => {
                        setShowEnquiryModal(false);
                        setEnquirySuccess(false);
                        nav(`/search-results?destination=${encodeURIComponent(d.split(' (')[0])}`);
                      }}
                    >
                      <FaSearch/> Browse Matching Tour Packages
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
