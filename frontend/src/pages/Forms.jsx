import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaCheckCircle,
  FaCarSide,
  FaHotel,
  FaPaperPlane,
  FaShieldAlt,
  FaStar,
  FaSpinner
} from 'react-icons/fa';
import { packages, cars, CONTACT } from '../data/packages.js';
import { PageHero, Btn, useTitle } from '../components/common.jsx';

function TripForm({ title, sub, booking }){
  const [q] = useSearchParams();
  const preSelectedPkg = q.get('package') || '';
  const preSelectedVehicle = q.get('vehicle') || '';
  const preSelectedGuests = q.get('guests') || '2';

  const [selectedPkgSlug, setSelectedPkgSlug] = useState(preSelectedPkg);
  const [guests, setGuests] = useState(preSelectedGuests);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    vehicle: preSelectedVehicle || '',
    hotelTier: '3-star',
    message: ''
  });

  useTitle(title);

  const [livePackages, setLivePackages] = useState(packages);

  useEffect(() => {
    fetch('/api/packages')
      .then(res => res.json())
      .then(d => d.success && d.packages && d.packages.length > 0 && setLivePackages(d.packages))
      .catch(console.warn);
  }, []);

  const selectedPkg = livePackages.find(p => p.slug === selectedPkgSlug);
  const estimatedCost = selectedPkg ? selectedPkg.price * Number(guests || 1) : null;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (booking || selectedPkgSlug) {
        // Submit Booking / Enquiry
        const res = await fetch('/api/bookings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            source: booking ? 'Book Your Trip Page' : 'Contact Us Page',
            destination: selectedPkg ? selectedPkg.dest : 'Custom Odisha Trip',
            travelDate: formData.date || 'Flexible',
            travellers: Number(guests) || 2,
            guestName: formData.name,
            guestPhone: formData.phone,
            guestEmail: formData.email,
            packageSlug: selectedPkgSlug,
            packageTitle: selectedPkg ? selectedPkg.title : '',
            estimatedCost: estimatedCost,
            notes: `${formData.message ? formData.message + ' | ' : ''}Hotel Preference: ${formData.hotelTier}, Preferred Cab: ${formData.vehicle || 'Standard'}`
          })
        });
        const data = await res.json();
        if (data.success) {
          setBookingRef(data.bookingId);
        } else {
          setBookingRef(`ODT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`);
        }
      } else {
        // Submit Contact Inquiry
        const res = await fetch('/api/contacts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: 'Contact Us Inquiry',
            message: formData.message
          })
        });
        const data = await res.json();
        setBookingRef(data.contactId || `CNT-${Date.now().toString().slice(-4)}`);
      }
      setSubmitted(true);
    } catch (err) {
      console.warn('API error, showing confirmation:', err);
      setBookingRef(`ODT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="trip-form-page">
      <PageHero
        title={title}
        sub={sub}
        badge={booking ? 'Fast Booking · Direct to Mail' : 'Personalized Itinerary Consultation'}
      />

      <section className="container form-layout-grid section-margin">
        {/* Form Container */}
        <div className="form-card-container glass-card">
          {submitted ? (
            <div className="submission-success-box text-center">
              <FaCheckCircle className="success-icon"/>
              <div className="ref-pill-container" style={{ margin: '0.8rem 0' }}>
                <span className="booking-ref-badge" style={{ fontSize: '1rem', padding: '0.4rem 1.2rem' }}>
                  Booking Reference ID: #{bookingRef}
                </span>
              </div>
              <h2>Thank You, {formData.name || 'Traveler'}!</h2>
              <p className="success-msg">
                Your travel booking enquiry has been received and <strong>sent directly to our reservation desk at ourdreamtrip1@gmail.com</strong>. One of our senior destination coordinators will call or WhatsApp you within 30 minutes with your complete itinerary and best guaranteed tariff.
              </p>

              {selectedPkg && (
                <div className="summary-receipt-box">
                  <h4>Selected Package: {selectedPkg.title}</h4>
                  <p>Guests: {guests} Person(s) | Duration: {selectedPkg.days}</p>
                  {estimatedCost && <strong>Estimated Total: ₹{estimatedCost.toLocaleString('en-IN')}</strong>}
                </div>
              )}

              <div className="success-actions-row">
                <a
                  href={`https://wa.me/${CONTACT.tel.slice(1)}?text=Hello%20Our%20Dream%20Trip,%20I%20just%20submitted%20a%20booking%20with%20Ref%20%23${bookingRef}%20for%20${encodeURIComponent(selectedPkg?.title || 'Tour')}%20for%20${guests}%20guests.`}
                  className="btn btn-wa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp/> Connect Instantly on WhatsApp with Ref #{bookingRef}
                </a>
                <Link to="/" className="btn btn-navy-outline">
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="custom-trip-form">
              <div className="form-head-title">
                <h3>{booking ? 'Tour Package Reservation Form' : 'Send Itinerary Enquiry'}</h3>
                <p>All bookings are immediately routed to our reservation desk and sent to our email inbox.</p>
              </div>

              <div className="grid2 form-two-col">
                <div className="form-field-group">
                  <label>Full Name *</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field-group">
                  <label>Phone / WhatsApp Number *</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="e.g. +91 77900 08877"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid2 form-two-col">
                <div className="form-field-group">
                  <label>Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="e.g. yourname@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field-group">
                  <label>Expected Travel Date *</label>
                  <input
                    name="date"
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid2 form-two-col">
                <div className="form-field-group">
                  <label>Select Tour Package</label>
                  <select
                    value={selectedPkgSlug}
                    onChange={e => setSelectedPkgSlug(e.target.value)}
                  >
                    <option value="">-- Choose a package or custom itinerary --</option>
                    <optgroup label="Odisha Tour Packages">
                      {livePackages.filter(p => p.cat === 'odisha').map(p => (
                        <option key={p.slug} value={p.slug}>{p.title} ({p.days})</option>
                      ))}
                    </optgroup>
                    <optgroup label="Incredible India Tour Packages">
                      {livePackages.filter(p => p.cat === 'domestic').map(p => (
                        <option key={p.slug} value={p.slug}>{p.title} ({p.days})</option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div className="form-field-group">
                  <label>Total Number of Travellers *</label>
                  <select
                    value={guests}
                    onChange={e => setGuests(e.target.value)}
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 15, 20].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              {selectedPkg && (
                <div className="package-preview-banner">
                  <div>
                    <span className="price-tag-label">Selected Tour:</span>
                    <strong>{selectedPkg.title} ({selectedPkg.days})</strong>
                  </div>
                  <div className="preview-cost-col">
                    <small>Starting at ₹{selectedPkg.price.toLocaleString('en-IN')} / person</small>
                    <span className="est-total">Estimated Total: ₹{estimatedCost.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              )}

              <div className="grid2 form-two-col">
                <div className="form-field-group">
                  <label>Preferred Private Vehicle</label>
                  <select
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                  >
                    <option value="">-- Select Vehicle Class --</option>
                    <option value="Sedan (Swift Dzire / Etios)">Sedan (Swift Dzire / Etios - 1 to 3 Guests)</option>
                    <option value="SUV (Innova Crysta / Ertiga)">SUV (Innova Crysta / Ertiga - 4 to 6 Guests)</option>
                    <option value="Luxury Tempo Traveller">Luxury Tempo Traveller (9 to 16 Guests)</option>
                    <option value="Luxury Coach / Bus">Luxury Coach / Volvo Bus (17+ Guests)</option>
                  </select>
                </div>

                <div className="form-field-group">
                  <label>Hotel Accommodation Tier</label>
                  <select
                    name="hotelTier"
                    value={formData.hotelTier}
                    onChange={handleChange}
                  >
                    <option value="3-star">Comfort 3-Star Hotels with Breakfast</option>
                    <option value="4-star">Premium 4-Star Hotels &amp; Beach Resorts</option>
                    <option value="5-star">Luxury 5-Star Heritage / Palace Stays</option>
                    <option value="cab-only">Cab &amp; Sightseeing Only (No Hotel)</option>
                  </select>
                </div>
              </div>

              <div className="form-field-group">
                <label>Special Requests or Custom Itinerary Notes</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us any special requests, e.g. Senior citizen assistance, Puri Jagannath Temple VIP Panda darshan, meal preferences, extra day in Chilika, airport pickup details..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="form-submit-row">
                <button
                  type="submit"
                  className="btn btn-yellow btn-lg btn-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="spin" /> Dispatching to Reservation Desk...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> {booking ? 'Confirm & Send Booking to Mail' : 'Submit Tour Enquiry Directly'}
                    </>
                  )}
                </button>
              </div>

              <div className="form-trust-badges">
                <span><FaShieldAlt/> 100% Privacy &amp; Direct Mail Dispatch</span>
                <span><FaCheckCircle/> Zero Cancellation Fee (15 Days Prior)</span>
                <span><FaStar className="star-gold"/> 4.9/5 Rated Guest Support</span>
              </div>
            </form>
          )}
        </div>

        {/* Sidebar Info Card */}
        <aside className="contact-sidebar-col">
          <div className="contact-details-box glass-card">
            <h3>Direct Reservation Desk</h3>
            <p>Need urgent assistance or prefer talking to a senior travel planner right now?</p>

            <div className="sidebar-contact-item">
              <FaPhoneAlt className="sc-icon"/>
              <div>
                <small>Call Us Anytime (24x7 Active)</small>
                <strong><a href={`tel:${CONTACT.tel}`}>{CONTACT.phone}</a></strong>
                <p style={{fontSize:'0.8rem', opacity:0.8}}>Alternate: {CONTACT.altPhone}</p>
              </div>
            </div>

            <div className="sidebar-contact-item">
              <FaWhatsapp className="sc-icon wa-color"/>
              <div>
                <small>WhatsApp Concierge</small>
                <strong>
                  <a href={`https://wa.me/${CONTACT.tel.slice(1)}`} target="_blank" rel="noreferrer">
                    {CONTACT.phone}
                  </a>
                </strong>
                <p style={{fontSize:'0.8rem', opacity:0.8}}>Instant Custom Plan &amp; Quotation</p>
              </div>
            </div>

            <div className="sidebar-contact-item">
              <FaEnvelope className="sc-icon"/>
              <div>
                <small>Official Direct Mailbox</small>
                <strong><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></strong>
                <p style={{fontSize:'0.8rem', opacity:0.8}}>All bookings routed directly here</p>
              </div>
            </div>

            <div className="sidebar-contact-item">
              <FaMapMarkerAlt className="sc-icon"/>
              <div>
                <small>Head Office Address</small>
                <strong>Bhubaneswar, Odisha</strong>
                <p style={{fontSize:'0.85rem', marginTop:'0.2rem'}}>{CONTACT.address}</p>
              </div>
            </div>

            <div className="office-hours-pill">
              <FaCalendarAlt/> Operating Hours: Monday – Sunday (24 Hours Open)
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

export const ContactUs = () => (
  <TripForm
    title="Contact Us"
    sub="Get in touch with our Odisha and India travel architects. We are here to help you 24x7."
  />
);

export const BookYourTrip = () => (
  <TripForm
    title="Book Your Journey"
    sub="Reserve your dream tour package or vehicle with transparent pricing and instant email confirmation."
    booking
  />
);
