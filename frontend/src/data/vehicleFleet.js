// Comprehensive Vehicle Fleet Data for Our Dream Trip (ourdreamtrip.com)
// Includes specs, galleries, pricing tiers, amenities, popular routes, and FAQs

export const cars = [
  {
    id: 'swift-dzire',
    slug: 'swift-dzire',
    n: 'Maruti Suzuki Dzire',
    cat: 'Sedan',
    badge: 'Most Popular Sedan',
    tagline: 'Odisha\'s top-rated fuel-efficient sedan for small families and airport transfers',
    s: '4 Passengers + 1 Driver',
    seatsCount: 4,
    luggage: '2 Large Trolley Bags + 2 Handbags (378L Boot)',
    ac: 'Dual-Zone Air Conditioning',
    fuel: 'Petrol / Diesel with High Mileage',
    transmission: 'Manual 5-Speed & Smooth AMT',
    r: '₹12 / km',
    minKmPerDay: '250 km / day',
    localRate: '₹2,200 (8 hrs / 80 km)',
    localRate8Hr: '₹2,200 (8 hrs / 80 km)',
    localRate12Hr: '₹3,000 (12 hrs / 120 km)',
    extraKmRate: '₹12 / km',
    extraHrRate: '₹150 / hr',
    airportRate: '₹999 (BBI Airport to Bhubaneswar City)',
    driverNightAllowance: '₹350 per night (10:00 PM – 6:00 AM)',
    rating: 4.9,
    tripsCompleted: 1420,
    img: '/images/fleet/dzire-front.jpg',
    gallery: [
      '/images/fleet/dzire-front.jpg',
      '/images/fleet/dzire-side.jpg',
      '/images/fleet/dzire-rear.jpg'
    ],
    desc: 'The undisputed champion of Indian roads. The Maruti Suzuki Dzire provides remarkable ride comfort, silent cabin insulation, plush rear seating with center armrest, and high fuel economy for long Odisha highway road trips.',
    overview: 'The Maruti Suzuki Dzire is the ultimate choice for couples, small families (up to 4 members), and business executives traveling across Odisha. Whether you are landing at Biju Patnaik International Airport (BBI) and heading to Puri Jagannath Dham, cruising along Marine Drive to Konark Sun Temple, or touring the temple city Bhubaneswar, the Dzire offers whisper-quiet air conditioning, supportive seats, and ample boot space for all your luggage.\n\nEvery vehicle in our fleet is deep-sanitized before departure, driven by police-verified local Odia chauffeurs who know every temple route and scenic rest stop, and fitted with GPS live tracking for maximum traveler safety.',
    features: [
      'Chilled Dual-Zone Air Conditioning',
      'Ergonomic Fabric Seats with Rear Armrest & Cup Holders',
      'Bluetooth Touchscreen Audio with USB Fast Charging',
      'Factory Speed Governor (80 km/h) & Live GPS Tracking',
      'Dedicated Police-Verified Local Odia Chauffeur',
      'Deep Sanitized & Steam Cleaned Before Every Trip',
      'Generous 378L Boot Space for Luggage',
      'Complimentary Bottled Water & Medical First Aid Kit'
    ],
    popularRoutes: [
      {route: 'Bhubaneswar Airport ⇄ Puri Jagannath Dham', dist: '65 km', time: '1h 20m', estPrice: '₹1,800 - ₹2,200'},
      {route: 'Bhubaneswar ⇄ Konark Sun Temple & Chandrabhaga', dist: '68 km', time: '1h 30m', estPrice: '₹1,900 - ₹2,300'},
      {route: 'Bhubaneswar ⇄ Chilika Lake (Barkul / Satapada)', dist: '105 km', time: '2h 15m', estPrice: '₹2,600 - ₹3,200'},
      {route: 'Bhubaneswar ⇄ Daringbadi Hill Station (Roundtrip)', dist: '490 km', time: '2 Days', estPrice: '₹6,500 - ₹7,200'}
    ],
    inclusions: [
      'Clean, AC Maruti Dzire with verified chauffeur',
      'Driver daily allowance and fuel charges',
      'Vehicle maintenance and 24x7 breakdown replacement',
      'GPS live tracking and concierge phone support'
    ],
    exclusions: [
      'Interstate & state highway toll charges',
      'Parking fees at monuments and airports',
      'State border permit taxes (if crossing outside Odisha)',
      'Night chauffeur allowance (₹350 if driving between 10 PM - 6 AM)'
    ],
    faqs: [
      {q: 'Can 4 adults comfortably travel in the Dzire with luggage?', a: 'Yes. The Dzire accommodates 4 adults comfortably (1 in the front passenger seat and 3 in the rear). The 378-liter boot easily carries 2 full-sized trolley suitcases plus 2 soft duffle bags.'},
      {q: 'How are extra hours and extra kilometers billed?', a: 'For local 8 hr / 80 km rentals, extra kilometers are billed at ₹12/km and extra hours at ₹150/hour with 100% transparent meter readings.'},
      {q: 'Will the driver assist with luggage and temple darshan?', a: 'Yes! Our chauffeurs are courteous local residents who gladly assist with luggage loading/unloading and can guide you on temple entry gates, timings, and authentic local prasad stalls.'}
    ]
  },
  {
    id: 'maruti-ertiga',
    slug: 'maruti-ertiga',
    n: 'Maruti Suzuki Ertiga',
    cat: 'MUV',
    badge: 'Best Family Cruiser',
    tagline: 'Smart 7-seater multi-utility vehicle with flexible seating and generous luggage room',
    s: '6 Passengers + 1 Driver',
    seatsCount: 6,
    luggage: '3 Large Bags + 2 Small Bags (Foldable 3rd Row)',
    ac: 'Roof-Mounted Rear AC Vents with Independent Blower',
    fuel: 'Smart Hybrid Petrol / Diesel',
    transmission: 'Manual 5-Speed / Automatic',
    r: '₹15 / km',
    minKmPerDay: '250 km / day',
    localRate: '₹2,800 (8 hrs / 80 km)',
    localRate8Hr: '₹2,800 (8 hrs / 80 km)',
    localRate12Hr: '₹3,800 (12 hrs / 120 km)',
    extraKmRate: '₹15 / km',
    extraHrRate: '₹200 / hr',
    airportRate: '₹1,400 (BBI Airport to Bhubaneswar / Puri)',
    driverNightAllowance: '₹350 per night (10:00 PM – 6:00 AM)',
    rating: 4.9,
    tripsCompleted: 1180,
    img: '/images/fleet/ertiga-front.jpg',
    gallery: [
      '/images/fleet/ertiga-front.jpg',
      '/images/fleet/ertiga-interior.jpg',
      '/images/vehicle-ertiga.jpg'
    ],
    desc: 'The Maruti Suzuki Ertiga combines spacious 3-row comfort with smart modern design. Roof-mounted AC blowers keep all rows pleasantly cool even during coastal summer afternoons, while split-folding seats offer versatile luggage storage.',
    overview: 'The Maruti Suzuki Ertiga is the go-to vehicle for Indian families of 5 to 6 members who desire the spaciousness of an MPV without the bulk of a heavy SUV. Designed with a flexible 2+3+2 seating configuration, easy ingress/egress for senior citizens, and individual AC vents for the second and third rows, the Ertiga turns long road trips into effortless family holidays.\n\nFrom weekend getaways to Chilika Lake and Bhitarkanika National Park to pilgrimage circuits covering Puri Jagannath Temple, Alarnath, and Sakshigopal, the Ertiga delivers exceptional stability, cushioned suspension over village roads, and unmatched value.',
    features: [
      'Roof-Mounted Air Conditioning Vents for All 3 Rows',
      'Reclining 2nd Row & 50:50 Split-Foldable 3rd Row',
      'Smartphone Connectivity with Bluetooth Audio & USB Ports',
      'Low Floor Ingress Height (Senior Citizen Friendly)',
      'Dual Airbags, ABS with EBD & ISOFIX Child Mounts',
      'Dedicated Chauffeur with 8+ Years Highway Driving Experience',
      'High Ground Clearance for Rural & Sanctuary Passes',
      'Complete Sanitization & Fresh Odorless Cabin'
    ],
    popularRoutes: [
      {route: 'Bhubaneswar ⇄ Puri Dham & Konark Marine Drive', dist: '150 km', time: 'Full Day', estPrice: '₹3,200 - ₹3,600'},
      {route: 'Bhubaneswar ⇄ Bhitarkanika Mangrove Sanctuary', dist: '145 km', time: '3h 30m', estPrice: '₹3,800 - ₹4,400'},
      {route: 'Bhubaneswar ⇄ Daringbadi Valley (3-Day Roundtrip)', dist: '550 km', time: '3 Days', estPrice: '₹9,500 - ₹10,800'},
      {route: 'Bhubaneswar ⇄ Gopalpur-on-Sea & Tampara Lake', dist: '175 km', time: '3h 45m', estPrice: '₹4,200 - ₹4,800'}
    ],
    inclusions: [
      '7-Seater AC Maruti Ertiga with verified chauffeur',
      'Fuel and driver allowance included in quote',
      'Commercial taxi permit and insurance coverage',
      'GPS live fleet tracking and 24x7 helpline'
    ],
    exclusions: [
      'Tolls, interstate taxes and parking tickets',
      'Night halt allowance (₹350 after 10 PM)',
      'Boat ride tickets or wildlife entry permits'
    ],
    faqs: [
      {q: 'Can 6 adults sit comfortably with bags?', a: 'Yes! 6 passengers can sit comfortably. If you have 6 adults with extensive luggage, we can deploy an optional sturdy roof luggage carrier upon request at no extra charge.'},
      {q: 'Is the Ertiga suitable for hilly routes like Daringbadi & Koraput?', a: 'Absolutely. The Ertiga handles hill roads, ghat passes, and winding scenic routes smoothly with its proven 1.5L engine and responsive brakes.'}
    ]
  },
  {
    id: 'innova-crysta',
    slug: 'innova-crysta',
    n: 'Toyota Innova Crysta',
    cat: 'Premium SUV',
    badge: 'Gold Standard of Travel',
    tagline: 'The undisputed king of Indian highway roadtrips with plush captain seating and unmatched ride comfort',
    s: '7 Passengers + 1 Driver',
    seatsCount: 7,
    luggage: '4 Large Suitcases + 3 Duffel Bags',
    ac: 'Automatic Multi-Zone Climate Control with Ceiling Vents',
    fuel: 'High-Torque 2.4L GD Diesel Engine',
    transmission: 'Smooth 5-Speed Manual / 6-Speed Automatic',
    r: '₹19 / km',
    minKmPerDay: '250 km / day',
    localRate: '₹3,500 (8 hrs / 80 km)',
    localRate8Hr: '₹3,500 (8 hrs / 80 km)',
    localRate12Hr: '₹4,800 (12 hrs / 120 km)',
    extraKmRate: '₹19 / km',
    extraHrRate: '₹250 / hr',
    airportRate: '₹1,800 (BBI Airport to Puri / Bhubaneswar)',
    driverNightAllowance: '₹400 per night (10:00 PM – 6:00 AM)',
    rating: 5.0,
    tripsCompleted: 2350,
    img: '/images/fleet/innova-front.jpg',
    gallery: [
      '/images/fleet/innova-front.jpg',
      '/images/fleet/innova-side.jpg',
      '/images/fleet/innova-rear.jpg',
      '/images/fleet/innova-interior.jpg'
    ],
    desc: 'The gold standard for premium touring across India. The Toyota Innova Crysta is celebrated for its whisper-quiet cabin, plush captain armchairs, supreme high-speed highway stability, and fatigue-free ride quality.',
    overview: 'There is a reason the Toyota Innova Crysta remains the undisputed king of luxury road travel in India: nothing else matches its sheer comfort over long journeys. Featuring plush captain seats in the second row, independent rear climate control, soft ambient lighting, and world-renowned Japanese suspension tuning that flattens out bumps, the Innova Crysta lets you arrive at your destination refreshed.\n\nWhether you are undertaking a multi-day heritage pilgrimage to Puri, Konark, and Bhubaneswar or embarking on an adventurous expedition across the Eastern Ghats to Koraput, Deomali, and Similipal Tiger Reserve, the Innova Crysta provides total peace of mind for families, VIP guests, and discerning travelers.',
    features: [
      'Plush Reclining Captain Seats with Individual Armrests',
      'Multi-Zone Automatic Climate Control with Ceiling Air Vents',
      'Supreme Highway Suspension Tuning (Fatigue-Free Long Rides)',
      'High-Torque 2.4L Diesel Engine for Effortless Hill Climbs',
      'Large Boot Space Accommodating 4 Big Suitcases',
      '7 Airbags, Vehicle Stability Control & Hill-Start Assist',
      'High-Speed USB Device Charging Ports for Every Passenger',
      'Senior Odia Chauffeur in Uniform with 10+ Years Experience'
    ],
    popularRoutes: [
      {route: 'Bhubaneswar ⇄ Puri Golden Triangle (4-Day Tour)', dist: '280 km', time: '4 Days', estPrice: '₹14,000 - ₹16,500'},
      {route: 'Bhubaneswar ⇄ Daringbadi Kashmir of Odisha', dist: '520 km', time: '3 Days', estPrice: '₹12,500 - ₹14,000'},
      {route: 'Bhubaneswar ⇄ Similipal Tiger Reserve & Waterfall', dist: '580 km', time: '3 Days', estPrice: '₹13,800 - ₹15,500'},
      {route: 'Bhubaneswar ⇄ Koraput & Deomali Valley Expedition', dist: '1,050 km', time: '5 Days', estPrice: '₹22,000 - ₹25,000'}
    ],
    inclusions: [
      'Toyota Innova Crysta with verified senior chauffeur',
      'All vehicle fuel and driver daily food/stay allowances',
      'Commercial taxi fitness certificate and all-Odisha permits',
      '24/7 dedicated fleet support and GPS monitoring'
    ],
    exclusions: [
      'National highway toll charges and state road taxes',
      'Airport/monument parking tickets',
      'Night chauffeur allowance (₹400 if driving after 10 PM)'
    ],
    faqs: [
      {q: 'Do you offer 7-seater and 8-seater variants of Innova Crysta?', a: 'Yes! We have both the 7-seater variant (with luxurious 2nd-row captain chairs) and the 8-seater variant (with continuous bench seating for larger families). You can specify your preference when booking.'},
      {q: 'Why choose Innova Crysta over other MUVs for Odisha tours?', a: 'Innova Crysta offers noticeably superior cabin soundproofing, larger seat cushions, and advanced suspension that prevents motion sickness on winding ghat roads in Koraput and Daringbadi.'}
    ]
  },
  {
    id: 'toyota-fortuner',
    slug: 'toyota-fortuner',
    n: 'Toyota Fortuner 4x4',
    cat: 'Luxury SUV',
    badge: 'VIP Powerhouse',
    tagline: 'Commanding 4x4 luxury SUV for VIP delegations, wedding entourages, and high-altitude hill expeditions',
    s: '6 Passengers + 1 Driver',
    seatsCount: 6,
    luggage: '4 Large Bags',
    ac: 'Dual-Zone Automatic Climate Control',
    fuel: '2.8L Turbocharged High-Output Diesel',
    transmission: '6-Speed Automatic with Paddle Shifters',
    r: '₹34 / km',
    minKmPerDay: '250 km / day',
    localRate: '₹6,500 (8 hrs / 80 km)',
    localRate8Hr: '₹6,500 (8 hrs / 80 km)',
    localRate12Hr: '₹8,500 (12 hrs / 120 km)',
    extraKmRate: '₹34 / km',
    extraHrRate: '₹400 / hr',
    airportRate: '₹3,500 (BBI Airport VIP Transfer)',
    driverNightAllowance: '₹500 per night (10:00 PM – 6:00 AM)',
    rating: 5.0,
    tripsCompleted: 480,
    img: '/images/fleet/fortuner-front.jpg',
    gallery: [
      '/images/fleet/fortuner-front.jpg',
      '/images/fleet/fortuner-rear.jpg',
      '/images/fleet/fortuner-interior.jpg'
    ],
    desc: 'The ultimate symbol of road dominance and luxury. The Toyota Fortuner 4x4 delivers unmatched road presence, authentic off-road capability, premium leather cabin finish, and VIP security comfort.',
    overview: 'When style, authority, and extreme terrain capability cannot be compromised, the Toyota Fortuner 4x4 is in a class of its own. Powered by a muscular 2.8-liter turbocharged diesel engine producing 500 Nm of torque, equipped with true four-wheel drive and high ground clearance, the Fortuner easily conquers steep rocky ascents up Deomali (Odisha\'s highest peak at 1,672m), remote forest reserves, and unpaved temple routes with effortless composure.\n\nInside, passengers are treated to perforated leather seating, chamois soft-touch trims, automatic multi-zone climate control, and JBL premium acoustics. It is the premier choice for corporate executives, celebrities, destination weddings, and VIP security convoys in Odisha.',
    features: [
      'Authentic 4x4 All-Wheel Drive with Low-Range Gearbox',
      'Muscular 2.8L Turbo Diesel Engine (500 Nm Torque)',
      'Perforated Dark Leather Interior with Power Adjustable Seats',
      'High Ground Clearance (225 mm) for Rugged Forest Terrain',
      'JBL Premium 11-Speaker Audio Experience',
      'Dual-Zone Automatic Climate Control with Rear Vents',
      '7 Airbags, Vehicle Stability Control & Downhill Assist',
      'Elite Chauffeur Trained in VIP Protocols & High-Security Routes'
    ],
    popularRoutes: [
      {route: 'Bhubaneswar Airport ⇄ VIP Hotel / Puri Mayfair', dist: '65 km', time: '1h 15m', estPrice: '₹4,500 - ₹5,500'},
      {route: 'Bhubaneswar ⇄ Deomali Peak & Koraput Highlands', dist: '1,000 km', time: '4 Days', estPrice: '₹36,000 - ₹42,000'},
      {route: 'Odisha High-Level Corporate Delegation (Daily)', dist: 'Full Day', time: '8 Hours', estPrice: '₹6,500 / day'},
      {route: 'Destination Wedding VIP Chauffeur Service', dist: 'Per Day', time: '12 Hours', estPrice: '₹8,500 / day'}
    ],
    inclusions: [
      'Toyota Fortuner 4x4 with VIP-trained uniformed chauffeur',
      'Vehicle fuel and driver daily food & accommodation allowance',
      'Full comprehensive VIP commercial insurance',
      'Dedicated concierge on standby 24 hours a day'
    ],
    exclusions: [
      'Toll booth charges and private valet/parking receipts',
      'Interstate border permits (if traveling to AP/WB/CG)'
    ],
    faqs: [
      {q: 'Can this vehicle go directly to Deomali summit and deep Similipal trails?', a: 'Yes. With active 4x4 and high ground clearance, our Fortuner routinely travels directly to Deomali summit and restricted jungle safari trails where standard vehicles are barred.'},
      {q: 'Is the Fortuner available for wedding bride/groom entries in Bhubaneswar?', a: 'Yes! We provide pristine, spotless Fortuners decorated with floral arrangements upon advance request.'}
    ]
  },
  {
    id: 'force-urbania-17',
    slug: 'force-urbania-17',
    n: 'Force Urbania Luxury (17 Seater)',
    cat: 'Luxury Van',
    badge: 'European Monocoque Luxury',
    tagline: 'World-class monocoque luxury van with whisper-quiet cabin, individual AC vents, and armchair recliners',
    s: '17 Passengers + 1 Driver',
    seatsCount: 17,
    luggage: '15 Large Trolley Bags (Deep Dedicated Rear Trunk)',
    ac: 'Independent Multi-Zone Roof AC with Individual Passenger Vents',
    fuel: 'Mercedes-Derived FM 2.6L CRDI Turbo Diesel',
    transmission: '5-Speed Manual with Power Steering',
    r: '₹36 / km',
    minKmPerDay: '250 km / day',
    localRate: '₹6,800 (8 hrs / 80 km)',
    localRate8Hr: '₹6,800 (8 hrs / 80 km)',
    localRate12Hr: '₹9,000 (12 hrs / 120 km)',
    extraKmRate: '₹36 / km',
    extraHrRate: '₹400 / hr',
    airportRate: '₹3,800 (BBI Airport Group Transfer)',
    driverNightAllowance: '₹500 per night (10:00 PM – 6:00 AM)',
    rating: 5.0,
    tripsCompleted: 620,
    img: '/images/vehicle-urbania.jpg',
    gallery: [
      '/images/vehicle-urbania.jpg',
      '/images/fleet/traveller-luxury.jpg'
    ],
    desc: 'The next generation of luxury passenger travel. Built on a groundbreaking European monocoque body, the Force Urbania delivers aircraft-style passenger comfort, panoramic touring windows, and whisper-quiet highway cruising.',
    overview: 'Say goodbye to bumpy, noisy bus journeys. The Force Urbania represents a quantum leap in group travel technology. Built with a rigid monocoque body structure and independent front suspension derived from Mercedes-Benz engineering, it eliminates body roll and road vibrations, delivering ride comfort comparable to luxury executive sedans.\n\nInside, 17 passengers enjoy plush individual reclining armchairs with adjustable headrests, dedicated overhead AC vents, aircraft-style reading lamps, USB fast-charging ports at every seat, and huge panoramic glass windows for breathtaking views of Odisha’s coastlines and Eastern Ghats valleys.',
    features: [
      'European Monocoque Body with Independent Air Suspension',
      'Individual Aircraft-Style Armchair Recliners with Armrests',
      'Independent Multi-Zone Roof AC with Dedicated Vents at Every Seat',
      'Fast USB Mobile Charging Sockets for All 17 Passengers',
      'Huge Panoramic Tinted Tour Windows with Pull-Down Blinds',
      'Whisper-Quiet Insulated Cabin (Zero Engine Noise)',
      'Spacious Walk-Through Aisle & High Headroom (Stand Up Comfort)',
      'Large Dedicated Rear Boot (Fits 15 Large Trolley Bags)'
    ],
    popularRoutes: [
      {route: 'Bhubaneswar ⇄ Puri & Konark Corporate Group Tour', dist: '150 km', time: 'Full Day', estPrice: '₹8,500 - ₹9,500'},
      {route: 'Bhubaneswar ⇄ Daringbadi & Mandasaru Canyon', dist: '550 km', time: '3 Days', estPrice: '₹22,000 - ₹25,000'},
      {route: 'Bhubaneswar ⇄ Chilika Lake & Gopalpur Beach', dist: '350 km', time: '2 Days', estPrice: '₹15,000 - ₹17,500'},
      {route: 'BBI Airport Group Transfer to Puri Luxury Resorts', dist: '65 km', time: '1h 30m', estPrice: '₹4,500 - ₹5,500'}
    ],
    inclusions: [
      '17-Seater Force Urbania with certified commercial highway captain',
      'Full vehicle fuel and chauffeur daily allowances',
      'Inter-district commercial permits across Odisha',
      '24/7 dedicated support team and GPS live speed monitoring'
    ],
    exclusions: [
      'Toll booth charges, parking tickets and state entry permits',
      'Driver night halt allowance (₹500 after 10:00 PM)'
    ],
    faqs: [
      {q: 'Can adults stand upright inside the Urbania cabin?', a: 'Yes! The Urbania features a spacious stand-up interior height of over 6 feet 2 inches, allowing adult passengers to walk freely down the center aisle without ducking.'},
      {q: 'How does the Urbania ride compare to a standard Tempo Traveller?', a: 'The Urbania rides on a car-like monocoque chassis rather than a truck ladder-frame. This means significantly smoother suspension, zero body rattle, and drastically lower fatigue on long journeys.'}
    ]
  },
  {
    id: 'tempo-traveller-12',
    slug: 'tempo-traveller-12',
    n: 'Force Tempo Traveller (12 Seater)',
    cat: 'Minibus',
    badge: 'Group Tour Favorite',
    tagline: 'Reliable, spacious 12-seater pushback AC minibus with heavy-duty roof luggage carrier',
    s: '12 Passengers + 1 Driver',
    seatsCount: 12,
    luggage: '10 Large Suitcases + Roof Luggage Carrier',
    ac: 'Dual Heavy-Duty Roof Air Conditioning',
    fuel: 'Proven 2.6L Turbocharged Diesel Engine',
    transmission: '5-Speed Manual with High Torque',
    r: '₹26 / km',
    minKmPerDay: '250 km / day',
    localRate: '₹4,800 (8 hrs / 80 km)',
    localRate8Hr: '₹4,800 (8 hrs / 80 km)',
    localRate12Hr: '₹6,500 (12 hrs / 120 km)',
    extraKmRate: '₹26 / km',
    extraHrRate: '₹300 / hr',
    airportRate: '₹2,600 (BBI Airport to Puri / Bhubaneswar)',
    driverNightAllowance: '₹400 per night (10:00 PM – 6:00 AM)',
    rating: 4.8,
    tripsCompleted: 1850,
    img: '/images/fleet/traveller-highway.jpg',
    gallery: [
      '/images/fleet/traveller-highway.jpg',
      '/images/fleet/traveller-luxury.jpg',
      '/images/vehicle-tempo-traveller.jpg'
    ],
    desc: 'The backbone of Indian group pilgrimage and family touring. Equipped with comfortable pushback seats, wide panoramic windows, powerful roof AC, and a massive roof luggage carrier.',
    overview: 'For extended families of 8 to 12 members, spiritual groups heading for Puri Rath Yatra or Jagannath Darshan, and wedding guest movements, the 12-Seater Force Tempo Traveller delivers proven reliability and spacious comfort at unbeatable economics.\n\nFitted with 2x1 pushback seats with comfortable armrests, powerful high-capacity roof AC blowers, and an integrated audio system for bhajans or road trip music, the Tempo Traveller ensures everyone travels together happily. A heavy-duty roof luggage carrier with waterproof tarpaulin guarantees all bags, prasad, and suitcases stay completely safe in any weather.',
    features: [
      'Plush 2x1 Pushback Reclining Seats with Armrests',
      'High-Capacity Dual Air Conditioning Blowers',
      'Heavy-Duty Weather-Proof Roof Luggage Carrier',
      'Integrated High-Quality Audio & PA System',
      'Wide Panoramic Windows for Scenic Coastal Views',
      'Curtains on All Windows for Privacy & Sun Shade',
      'First Aid Kit, Fire Extinguisher & GPS Speed Limiter',
      'Experienced Senior Highway Driver Familiar with Pilgrimage Routes'
    ],
    popularRoutes: [
      {route: 'Bhubaneswar ⇄ Puri Jagannath Dham & Konark', dist: '150 km', time: 'Full Day', estPrice: '₹5,500 - ₹6,500'},
      {route: 'Bhubaneswar ⇄ Chilika Dolphin Cruise (Satapada)', dist: '220 km', time: 'Full Day', estPrice: '₹6,800 - ₹7,800'},
      {route: 'Bhubaneswar ⇄ Daringbadi Valley (3-Day Family Tour)', dist: '550 km', time: '3 Days', estPrice: '₹16,500 - ₹18,500'},
      {route: 'Bhubaneswar ⇄ Similipal National Park Safari', dist: '600 km', time: '3 Days', estPrice: '₹17,500 - ₹19,500'}
    ],
    inclusions: [
      '12-Seater AC Force Tempo Traveller with verified chauffeur',
      'All vehicle fuel and driver daily food/night allowances',
      'Commercial taxi fitness and interstate transport permits',
      '24/7 dedicated fleet support and GPS monitoring'
    ],
    exclusions: [
      'Toll booth taxes and monument parking receipts',
      'Night chauffeur allowance (₹400 if driving after 10:00 PM)'
    ],
    faqs: [
      {q: 'Can elderly pilgrims easily board this Tempo Traveller?', a: 'Yes! Our Tempo Travellers are fitted with a sturdy retractable side footstep and grab handles to ensure senior citizens can step in and out comfortably.'},
      {q: 'Is a 17-seater or 26-seater variant also available?', a: 'Yes! We also provide 17-seater, 20-seater Maharaja, and 26-seater Tempo Travellers for larger marriage and pilgrim groups.'}
    ]
  },
  {
    id: 'volvo-luxury-coach',
    slug: 'volvo-luxury-coach',
    n: 'Volvo 9400 B11R Luxury Coach (45 Seater)',
    cat: 'Coach & Bus',
    badge: 'Intercity Flagship',
    tagline: 'Ultra-luxurious 45-seater multi-axle air-suspension coach for corporate conclaves and wedding delegations',
    s: '45 Passengers + 2 Crew',
    seatsCount: 45,
    luggage: '50+ Large Suitcases (Massive Belly Cargo Bay)',
    ac: 'Central ThermoKing Climate Control with Individual Passenger Vents',
    fuel: 'Volvo 11L Euro-VI Turbocharged Engine',
    transmission: 'Volvo I-Shift Automated 12-Speed',
    r: '₹65 / km',
    minKmPerDay: '300 km / day',
    localRate: '₹14,000 (8 hrs / 80 km)',
    localRate8Hr: '₹14,000 (8 hrs / 80 km)',
    localRate12Hr: '₹18,000 (12 hrs / 120 km)',
    extraKmRate: '₹65 / km',
    extraHrRate: '₹800 / hr',
    airportRate: '₹8,500 (BBI Airport Group Transfer)',
    driverNightAllowance: '₹800 per night (10:00 PM – 6:00 AM)',
    rating: 5.0,
    tripsCompleted: 310,
    img: '/images/fleet/volvo-exterior.jpg',
    gallery: [
      '/images/fleet/volvo-exterior.jpg',
      '/images/fleet/volvo-interior.jpg',
      '/images/vehicle-volvo-bus.jpg'
    ],
    desc: 'The pinnacle of luxury intercity coach travel. Featuring electronically controlled air suspension, full reclining semi-sleeper seats, onboard LCD entertainment, and massive belly storage.',
    overview: 'For mega destination weddings, corporate annual conferences in Puri and Bhubaneswar, and large pilgrimage associations, the Volvo 9400 Multi-Axle Luxury Coach offers undisputed royalty on the road.\n\nWith independent front air suspension and true multi-axle stability, body vibration is virtually zero. 45 guests enjoy calf-supported reclining seats, reading lights, mobile charging ports, and dual microphone PA systems for tour guides.',
    features: [
      'Electronically Controlled Air Suspension (ECAS) for Cloud-Like Ride',
      'Plush Semi-Sleeper Calf-Supported Recliners',
      'ThermoKing Roof Climate Control with Individual Passenger Louvres',
      'Dual 22-Inch High-Definition LCD Entertainment Displays',
      'Massive Under-Floor Luggage Compartment (Holds 50+ Bags)',
      'Dual Emergency Exits, Fire Suppression System & ABS / EBS',
      '2 Experienced Commercial Volvo Certified Pilots in Uniform',
      'GPS Live Tracking with Route Monitoring 24/7'
    ],
    popularRoutes: [
      {route: 'Bhubaneswar Airport ⇄ Puri Luxury Beach Resorts', dist: '65 km', time: '1h 30m', estPrice: '₹14,000 - ₹16,000'},
      {route: 'Bhubaneswar ⇄ Konark Sun Temple & Marine Drive', dist: '150 km', time: 'Full Day', estPrice: '₹18,000 - ₹22,000'},
      {route: 'Odisha Mega Wedding / Conclave Transportation (2 Days)', dist: 'Custom', time: '2 Days', estPrice: '₹36,000 - ₹42,000'}
    ],
    inclusions: [
      'Volvo 9400 Luxury Coach with 2 certified highway pilots',
      'Vehicle fuel and driver daily food & night allowances',
      'All commercial passenger transport permits in Odisha',
      'Full comprehensive commercial insurance and 24/7 monitoring'
    ],
    exclusions: [
      'National highway toll charges and state road entry taxes',
      'Parking receipts at monuments and luxury resorts'
    ],
    faqs: [
      {q: 'How far in advance should we reserve the Volvo Coach?', a: 'Due to high demand during wedding and conference seasons, we advise reserving at least 10 to 15 days in advance.'},
      {q: 'Does this coach have mobile charging points for passengers?', a: 'Yes! Every passenger pair has dedicated fast USB charging ports.'}
    ]
  }
];
