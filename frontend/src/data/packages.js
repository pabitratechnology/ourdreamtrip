// Comprehensive Packages, Fleet, Destinations & Map Data for Our Dream Trip (ourdreamtrip.com)

const baseInclusions = [
  'Comfortable 3-Star / 4-Star Hotel Stay with Breakfast',
  'Private AC Vehicle for all transfers & sightseeing',
  'Experienced, verified local driver with allowances & tolls included',
  'All government taxes, parking fees, and interstate permits',
  '24x7 Dedicated on-trip phone & WhatsApp concierge support'
];

const baseExclusions = [
  'Airfare / Train tickets to and from starting point',
  'Monuments, safari & boating entry tickets (unless specified)',
  'Personal expenses, laundry, tips, and optional activities',
  'Meals other than specified in hotel plan'
];

const baseTerms = [
  '25% advance to confirm booking; balance upon arrival or 7 days prior.',
  '100% refund for cancellations made 15+ days before travel date.',
  'Child below 5 years is complimentary without extra bed.',
  'Vehicles are sanitized before every trip and driven by verified chauffeurs.'
];

export const packages = [
  // ================= ODISHA TOUR PACKAGES (18 PACKAGES) =================
  {
    slug: 'puri-konark-bhubaneswar-golden-triangle',
    cat: 'odisha',
    theme: 'Spiritual & Heritage',
    title: 'Puri · Konark · Bhubaneswar Golden Triangle',
    dest: 'Puri, Konark, Bhubaneswar',
    days: '4 Days / 3 Nights',
    durationDays: 4,
    price: 11999,
    originalPrice: 14999,
    badge: 'Bestseller',
    rating: 4.9,
    reviewsCount: 312,
    img: '/images/pkg-golden-triangle.jpg',
    gallery: [
      '/images/hero-konark-golden-temple.jpg',
      '/images/hero-puri-golden-beach.jpg',
      'https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "/images/hero-konark-golden-temple.jpg",
                "title": "Konark Sun Temple",
                "caption": "13th century UNESCO World Heritage Sun Chariot with 24 carved stone wheels",
                "tag": "UNESCO Monument"
          },
          {
                "url": "/images/hero-puri-golden-beach.jpg",
                "title": "Puri Golden Sand Beach",
                "caption": "Blue Flag certified pristine coastal stretch along the Bay of Bengal",
                "tag": "Beach & Coastal"
          },
          {
                "url": "https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80",
                "title": "Lord Jagannath Temple Puri",
                "caption": "Sacred Char Dham shrine with soaring 214 ft stone deula tower and divine flag",
                "tag": "Sacred Temple"
          },
          {
                "url": "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80",
                "title": "Mukteswar & Lingaraj Temples",
                "caption": "10th-century gem of Odisha architecture and Lingaraj mammoth temple complex",
                "tag": "Heritage"
          },
          {
                "url": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
                "title": "Dhauli Giri Shanti Stupa",
                "caption": "Peace Pagoda where Emperor Ashoka renounced war and embraced Buddhism",
                "tag": "Peace Stupa"
          }
    ],
    overview: 'The quintessential Odisha experience covering the holy Jagannath Dham Puri, UNESCO World Heritage Konark Sun Temple, and the Temple City Bhubaneswar.',
    highlights: ['Lord Jagannath Temple Darshan with Panda assistance', 'UNESCO Konark Sun Temple & Chandrabhaga Beach', 'Golden Sand Puri Beach evening breeze', 'Lingaraj Temple, Rajarani & Khandagiri-Udayagiri Caves'],
    itinerary: [
      { day: 1, title: 'Arrival in Bhubaneswar - Temple City Tour', desc: 'Pick up from Bhubaneswar Airport/Railway station. Visit Lingaraj Temple, Mukteswar Temple, Rajarani Temple, and the ancient rock-cut caves of Khandagiri & Udayagiri. Overnight stay in Bhubaneswar.' },
      { day: 2, title: 'Bhubaneswar to Puri via Dhauli & Konark', desc: 'Drive to Puri via Dhauli Shanti Stupa and Pipili applique craft village. Explore the magnificent 13th-century Konark Sun Temple and relax at Chandrabhaga Beach. Evening check-in at Puri hotel.' },
      { day: 3, title: 'Puri Jagannath Temple & Golden Beach', desc: 'Early morning VIP Darshan at the sacred Jagannath Temple. Visit Gundicha Temple, Lokanath Temple, and spend a serene evening shopping on the Puri Beach craft market. Overnight in Puri.' },
      { day: 4, title: 'Raghurajpur Heritage Village & Departure', desc: 'After breakfast, visit Raghurajpur heritage crafts village to see master Pattachitra painters and Gotipua dancers. Drop at Bhubaneswar airport/station for departure.' }
    ]
  },
  {
    slug: 'daringbadi-kashmir-of-odisha',
    cat: 'odisha',
    theme: 'Hill Station & Nature',
    title: 'Daringbadi - Kashmir of Odisha Hill Retreat',
    dest: 'Daringbadi, Kandhamal',
    days: '3 Days / 2 Nights',
    durationDays: 3,
    price: 9499,
    originalPrice: 11999,
    badge: 'Popular',
    rating: 4.8,
    reviewsCount: 184,
    img: '/images/pkg-daringbadi.jpg',
    gallery: [
      '/images/pkg-daringbadi.jpg',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "/images/pkg-daringbadi.jpg",
                "title": "Daringbadi Pine Valleys",
                "caption": "Odisha’s highest hill retreat with fragrant pine forests and cool misty breeze",
                "tag": "Hill Retreat"
          },
          {
                "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
                "title": "Midubanda Waterfall",
                "caption": "Perennial waterfall cascading down the lush green Eastern Ghats mountains",
                "tag": "Waterfalls"
          },
          {
                "url": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
                "title": "Organic Coffee & Pepper Plantations",
                "caption": "Lush mountain plantations producing high-altitude Arabica coffee and black pepper",
                "tag": "Plantations"
          },
          {
                "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
                "title": "Mandasaru Silent Valley Gorge",
                "caption": "Panoramic cliff viewpoint over deep subtropical gorge known as Odisha Grand Canyon",
                "tag": "Nature Gorge"
          }
    ],
    overview: 'Perched at 3,000 feet amidst pine-fringed valleys, Daringbadi is Odisha’s only hill station that experiences sub-zero winter temperatures, coffee plantations, and mist-laden waterfalls.',
    highlights: ['Pine forest walks & organic coffee/black pepper gardens', 'Midubanda & Dasingbadi waterfalls', 'Sunset point at Hill View Park', 'Mandasaru Silent Valley & ecotourism cottage stay'],
    itinerary: [
      { day: 1, title: 'Bhubaneswar to Daringbadi (250 km)', desc: 'Scenic morning drive winding through the Eastern Ghats. Check into hill resort. Afternoon stroll through the scented Pine Forest and Coffee Plantations. Sunset at Hill View Park.' },
      { day: 2, title: 'Waterfalls, Lover’s Point & Emu Farm', desc: 'Explore Midubanda Waterfall, Lover’s Point, Dasingbadi, Nature Park, and the unique Emu Bird Farm. Cozy bonfire evening with local tribal dinner.' },
      { day: 3, title: 'Mandasaru Valley & Return Drive', desc: 'Morning visit to the spectacular Mandasaru Eco Valley gorge viewpoints. Drive back to Bhubaneswar with unforgettable memories.' }
    ]
  },
  {
    slug: 'chilika-lake-satapada-dolphin-cruise',
    cat: 'odisha',
    theme: 'Lake & Wildlife',
    title: 'Chilika Lake & Satapada Dolphin Cruise',
    dest: 'Chilika, Satapada',
    days: '2 Days / 1 Night',
    durationDays: 2,
    price: 6499,
    originalPrice: 7999,
    badge: 'Weekend Special',
    rating: 4.8,
    reviewsCount: 220,
    img: '/images/hero-chilika-lake-lagoon.jpg',
    gallery: [
      '/images/hero-chilika-lake-lagoon.jpg',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "/images/hero-chilika-lake-lagoon.jpg",
                "title": "Chilika Lake Lagoon & Traditional Boats",
                "caption": "Asia’s largest brackish lagoon with catamaran wooden boats cruising serene waters",
                "tag": "Lagoon"
          },
          {
                "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
                "title": "Irrawaddy Dolphins at Satapada",
                "caption": "Playful rare Irrawaddy dolphins surfacing near the sea-mouth channel",
                "tag": "Wildlife Safari"
          },
          {
                "url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
                "title": "Maa Kalijai Island Shrine",
                "caption": "Spiritual island sanctuary surrounded by blue waters and flocks of waterbirds",
                "tag": "Spiritual Island"
          },
          {
                "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
                "title": "Rajhans Island & Sea Mouth",
                "caption": "Golden sand beach spit where Chilika Lake merges with the Bay of Bengal ocean",
                "tag": "Sea Mouth Beach"
          }
    ],
    overview: 'Asia’s largest brackish water lagoon, home to playful rare Irrawaddy dolphins, sea-mouth beaches, fresh crab delicacies, and the holy island shrine of Maa Kalijai.',
    highlights: ['Exclusive motorized boat safari to Dolphin Spotting point', 'Chilika Sea Mouth where lagoon kisses the Bay of Bengal', 'Fresh sea prawn, crab and pomfret beach feasts', 'Maa Kalijai Temple boat darshan'],
    itinerary: [
      { day: 1, title: 'Bhubaneswar to Satapada / Rambha', desc: 'Drive to Satapada on Chilika Lake. Check in to lakeside OTDC resort. Board an afternoon private boat for Irrawaddy dolphin sightings and Rajhans Island sea-mouth.' },
      { day: 2, title: 'Kalijai Island, Mangalajodi Birding & Departure', desc: 'Morning boat ride to holy Kalijai Island. Visit Mangalajodi wetlands (the birders paradise in winter) and return to Bhubaneswar by evening.' }
    ]
  },
  {
    slug: 'bhitarkanika-mangroves-crocodile-safari',
    cat: 'odisha',
    theme: 'Wildlife & Safari',
    title: 'Bhitarkanika Mangroves & Crocodile Safari',
    dest: 'Bhitarkanika, Kendrapara',
    days: '3 Days / 2 Nights',
    durationDays: 3,
    price: 9999,
    originalPrice: 12500,
    badge: 'Eco Wonder',
    rating: 4.9,
    reviewsCount: 142,
    img: '/images/pkg-bhitarkanika-aerial.jpg',
    gallery: [
      '/images/pkg-bhitarkanika-aerial.jpg',
      'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "/images/pkg-bhitarkanika-aerial.jpg",
                "title": "Bhitarkanika Mangrove Delta Creeks",
                "caption": "India’s second largest mangrove wetland network traversed by private safari boats",
                "tag": "Mangroves"
          },
          {
                "url": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80",
                "title": "Giant Saltwater Crocodile",
                "caption": "Massive 20-foot estuarine crocodile sun-basking on the muddy creek shores",
                "tag": "Crocodile Safari"
          },
          {
                "url": "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
                "title": "Guided Boat Creek Safari",
                "caption": "Cruising through dense Sundari and Hental mangrove canopies with forest guides",
                "tag": "Boat Safari"
          },
          {
                "url": "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=1200&q=80",
                "title": "Bagagahana Bird Sanctuary",
                "caption": "Nesting colonies of Asian openbill storks, white ibis, and colorful kingfishers",
                "tag": "Bird Sanctuary"
          }
    ],
    overview: 'India’s second-largest mangrove ecosystem (often called Odisha’s Amazon). Witness gigantic saltwater estuarine crocodiles basking on muddy riverbanks, spotted deer, and kingfishers.',
    highlights: ['Authorized forest boat safari through winding mangrove creeks', 'Massive estuarine saltwater crocodiles basking in the wild', 'Dangamal Crocodile Breeding & Interpretation Centre', 'Bagagahana heronry bird nesting sanctuary'],
    itinerary: [
      { day: 1, title: 'Bhubaneswar to Khola / Gupti Gate', desc: 'Morning drive to Bhitarkanika National Park. Check into luxury eco-tents or riverside forest cottage. Evening sunset nature walk along riverbanks.' },
      { day: 2, title: 'Full Day Creek Boat Safari & Trek', desc: 'Board the guided forest boat through deep creeks. Spot giant saltwater crocodiles, water monitor lizards, and kingfishers. Trek to the old hunting tower inside core forest.' },
      { day: 3, title: 'Bird Island & Return to Bhubaneswar', desc: 'Visit the interpretation museum and bird watch at the heronry towers. Depart back to Bhubaneswar.' }
    ]
  },
  {
    slug: 'similipal-national-park-tiger-reserve',
    cat: 'odisha',
    theme: 'Wildlife & Safari',
    title: 'Similipal Tiger Reserve & Waterfalls Safari',
    dest: 'Similipal, Mayurbhanj',
    days: '4 Days / 3 Nights',
    durationDays: 4,
    price: 13999,
    originalPrice: 16999,
    badge: 'Adventure',
    rating: 4.9,
    reviewsCount: 165,
    img: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80",
                "title": "Royal Bengal Tiger in Wild",
                "caption": "Famous sanctuary for Royal Bengal Tigers including rare melanistic black tigers",
                "tag": "Tiger Reserve"
          },
          {
                "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
                "title": "Barehipani Waterfall",
                "caption": "India’s second highest waterfall plunging 1,308 feet over two tiers of cliffs",
                "tag": "Waterfalls"
          },
          {
                "url": "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80",
                "title": "Wild Elephants & Spotted Deer Herd",
                "caption": "Herds of wild Asiatic elephants and deer grazing in the scenic meadows of Chahala",
                "tag": "Wildlife"
          },
          {
                "url": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
                "title": "Ancient Sal Forest Canopy & Eco Cottages",
                "caption": "Pristine untouched Sal timberland biospheres with eco-tourism jungle cottages",
                "tag": "Eco Tourism"
          }
    ],
    overview: 'A UNESCO Biosphere Reserve famous for the rare melanistic (black) Royal Bengal tigers, sprawling Sal forests, wild elephants, and thunderous Barehipani & Joranda waterfalls.',
    highlights: ['Open 4x4 Jeep Safari inside core Similipal biosphere', 'Barehipani Waterfall - India’s 2nd highest two-tiered cascade', 'Joranda Waterfall roaring plunge', 'Night stay in eco-cottages at Barehipani / Jamuani'],
    itinerary: [
      { day: 1, title: 'Bhubaneswar to Baripada / Joshipur', desc: 'Scenic drive to Mayurbhanj district. Check into eco-resort at the periphery of the reserve. Explore local tribal art and traditional haat.' },
      { day: 2, title: 'Deep Forest 4x4 Jeep Safari', desc: 'Early morning entry through Pithabata gate. Full day safari scouting for elephants, deer, leopards, and bird species through ancient Sal forests.' },
      { day: 3, title: 'Barehipani & Joranda Waterfalls Expedition', desc: 'Trek to panoramic viewpoints of the monumental Barehipani and Joranda cascades. Overnight in forest eco-lodge.' },
      { day: 4, title: 'Khiching Kichakeswari Temple & Departure', desc: 'Visit the historic black granite Kichakeswari Temple at Khiching and drive back to Bhubaneswar.' }
    ]
  },
  {
    slug: 'grand-odisha-heritage-spiritual-circuit',
    cat: 'odisha',
    theme: 'Heritage & Spiritual',
    title: 'Grand Odisha Heritage & Spiritual Odyssey',
    dest: 'Bhubaneswar, Puri, Konark, Chilika, Cuttack',
    days: '7 Days / 6 Nights',
    durationDays: 7,
    price: 21999,
    originalPrice: 26999,
    badge: 'Comprehensive',
    rating: 5.0,
    reviewsCount: 290,
    img: '/images/pkg-odisha-family.jpg',
    gallery: [
      '/images/pkg-odisha-family.jpg',
      '/images/hero-konark-golden-temple.jpg',
      '/images/hero-chilika-lake-lagoon.jpg',
      'https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "/images/pkg-odisha-family.jpg",
                "title": "Grand Odisha Pilgrimage & Heritage",
                "caption": "Complete family spiritual tour covering holy Puri Dham and ancient heritage shrines",
                "tag": "Heritage Circuit"
          },
          {
                "url": "/images/hero-konark-golden-temple.jpg",
                "title": "Konark Sun Temple",
                "caption": "UNESCO World Heritage chariot temple with intricate stone sculptures",
                "tag": "Monument"
          },
          {
                "url": "/images/hero-chilika-lake-lagoon.jpg",
                "title": "Chilika Lake Dolphin Waters",
                "caption": "Peaceful boat cruises spotting dolphins and migratory birds in Chilika",
                "tag": "Lagoon"
          },
          {
                "url": "https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80",
                "title": "Raghurajpur Crafts Village",
                "caption": "Living heritage village of master Pattachitra painters, Gotipua dancers, and wood carvers",
                "tag": "Culture"
          }
    ],
    overview: 'The definitive Odisha discovery covering major spiritual sanctuaries, ancient archaeological treasures, artisan villages, Chilika dolphins, and the Millennium City Cuttack.',
    highlights: ['All 10 major temples of Bhubaneswar', 'VIP Jagannath Dham & Konark Sun Temple Darshan', 'Chilika Lake private boat excursion', 'Cuttack Silver Filigree (Tarakasi) art walk', 'Raghurajpur master craft demonstration'],
    itinerary: [
      { day: 1, title: 'Arrival Bhubaneswar - Temple City', desc: 'Check in, visit Lingaraj, Rajarani, and Mukteswar temples. Evening sound & light show at Dhauli.' },
      { day: 2, title: 'Nandankanan Zoological Park & Caves', desc: 'Morning visit to Nandankanan (white tiger safari and botanical garden), Khandagiri-Udayagiri caves.' },
      { day: 3, title: 'Bhubaneswar to Puri via Konark', desc: 'Konark Sun Temple exploration, Chandrabhaga beach, Pipili craft market, arrive in Puri.' },
      { day: 4, title: 'Puri Jagannath Temple & Beach', desc: 'Holy darshan at Jagannath Temple, Gundicha Mandir, Puri golden beach leisure and sunset.' },
      { day: 5, title: 'Chilika Lake Satapada Excursion', desc: 'Day trip to Satapada for dolphin watching and sea mouth. Return to Puri.' },
      { day: 6, title: 'Raghurajpur & Historic Cuttack City', desc: 'Visit Raghurajpur artist village, Barabati Fort, and the famous silver filigree workshops of Cuttack.' },
      { day: 7, title: 'Souvenir Shopping & Departure', desc: 'Odisha handloom shopping at Boyanika / Ekamra Haat. Airport drop.' }
    ]
  },
  {
    slug: 'koraput-deomali-tribal-heartland',
    cat: 'odisha',
    theme: 'Tribal & Hills',
    title: 'Koraput, Deomali & Tribal Heartland Tour',
    dest: 'Koraput, Deomali, Rayagada',
    days: '5 Days / 4 Nights',
    durationDays: 5,
    price: 16999,
    originalPrice: 20999,
    badge: 'Offbeat Gem',
    rating: 4.9,
    reviewsCount: 110,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
                "title": "Deomali Peak (5,485 ft)",
                "caption": "Odisha’s highest mountain summit with rolling clouds and breathtaking Eastern Ghats sunrise",
                "tag": "Mountain Summit"
          },
          {
                "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
                "title": "Duduma Waterfall",
                "caption": "Dramatic 574-foot cascading fall formed by the Machhkund river amidst deep canyons",
                "tag": "Waterfall"
          },
          {
                "url": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
                "title": "Kolab Reservoir & Botanical Gardens",
                "caption": "Vast blue reservoir and botanical terraced gardens nestled in tribal hill valleys",
                "tag": "Lake"
          },
          {
                "url": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
                "title": "Gupteswar Cave Temple",
                "caption": "Sacred subterranean limestone cave shrine of Lord Shiva surrounded by dense forests",
                "tag": "Sacred Cave"
          }
    ],
    overview: 'Ascend Odisha’s highest peak Deomali (5,485 ft), marvel at the roaring Duduma waterfalls, and immerse in the rich indigenous cultures of the Bonda and Dongria Kondh tribes.',
    highlights: ['Sunrise atop Deomali - Odisha’s highest summit', 'Spectacular Duduma Waterfall gorge', 'Weekly indigenous tribal markets (Haats)', 'Sabara Srikhetra Jagannath Temple & Coffee Gardens'],
    itinerary: [
      { day: 1, title: 'Arrive Jeypore / Koraput', desc: 'Scenic journey through Araku or via Vizag/Bhubaneswar. Visit the vibrant Sabara Srikhetra Jagannath temple.' },
      { day: 2, title: 'Deomali Peak Sunrise & Valleys', desc: 'Drive early up Deomali mountain for breathtaking cloud bed views. Explore terraced hill farming and pine trails.' },
      { day: 3, title: 'Duduma Waterfall & Machhkund River', desc: 'Witness the mighty 574 ft drop of Duduma falls and visit Onukudelli weekly tribal haat.' },
      { day: 4, title: 'Gupteswar Cave & Kolab Reservoir', desc: 'Visit subterranean Shiva shrine inside limestone Gupteswar caves and botanical gardens at Kolab Dam.' },
      { day: 5, title: 'Tribal Museum & Departure', desc: 'Visit Koraput Tribal Museum and organic coffee plantations before drop.' }
    ]
  },
  {
    slug: 'gopalpur-sea-tampara-lake-taratarini',
    cat: 'odisha',
    theme: 'Beach & Spiritual',
    title: 'Gopalpur-on-Sea, Tampara Lake & Taratarini',
    dest: 'Gopalpur, Ganjam, Berhampur',
    days: '3 Days / 2 Nights',
    durationDays: 3,
    price: 8999,
    originalPrice: 10999,
    badge: 'Romantic',
    rating: 4.7,
    reviewsCount: 138,
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
                "title": "Gopalpur-on-Sea Beach & Lighthouse",
                "caption": "Quiet colonial seaport beach with gentle golden waves and vintage operational lighthouse",
                "tag": "Beach"
          },
          {
                "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
                "title": "Tampara Lake Water Sports",
                "caption": "Freshwater scenic lake offering speedboating, jet ski, kayaking, and water zorbing",
                "tag": "Water Sports"
          },
          {
                "url": "https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80",
                "title": "Maa Taratarini Shakti Peetha",
                "caption": "Ancient twin-goddess temple atop Purnagiri Hill reached via modern scenic ropeway",
                "tag": "Shakti Peetha"
          },
          {
                "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
                "title": "Rambha Bay Southern Chilika",
                "caption": "Scenic hill-surrounded bay with luxury lakefront cottages and tranquil boat rides",
                "tag": "Lake Resort"
          }
    ],
    overview: 'Unwind at the historic colonial beach of Gopalpur-on-Sea, indulge in water sports at Tampara Lake, and take the ropeway to the sacred hill-top Shakti Peetha Maa Taratarini.',
    highlights: ['Gopalpur historic lighthouse & virgin clean beaches', 'Jet skiing & speedboat rides on serene Tampara Lake', 'Maa Taratarini hill temple ropeway experience', 'Rambha scenic bay on Southern Chilika'],
    itinerary: [
      { day: 1, title: 'Bhubaneswar to Gopalpur via Rambha', desc: 'Drive south through scenic Chilika. Check into beach resort in Gopalpur. Relax at the beach with fresh sea breeze.' },
      { day: 2, title: 'Tampara Lake & Taratarini Temple', desc: 'Morning water sports at Tampara freshwater lake. Afternoon ropeway ride up Purnagiri hill for Maa Taratarini darshan.' },
      { day: 3, title: 'Lighthouse & Return to Bhubaneswar', desc: 'Climb Gopalpur Lighthouse for panoramic sea vistas; return to Bhubaneswar.' }
    ]
  },
  {
    slug: 'diamond-triangle-buddhist-heritage',
    cat: 'odisha',
    theme: 'Heritage & History',
    title: 'Diamond Triangle Buddhist Circuit (Ratnagiri · Udayagiri · Lalitgiri)',
    dest: 'Jajpur, Cuttack',
    days: '3 Days / 2 Nights',
    durationDays: 3,
    price: 8499,
    originalPrice: 10500,
    badge: 'Archaeology',
    rating: 4.8,
    reviewsCount: 96,
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
                "title": "Ratnagiri Buddhist Mahavihara",
                "caption": "Exquisitely carved green chlorite stone doorway and ancient monastery courtyard",
                "tag": "Monastery"
          },
          {
                "url": "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80",
                "title": "Udayagiri Hilltop Stupas & Caves",
                "caption": "Step-well, rock-cut Buddhist chaitya stupas, and monastic brick foundations",
                "tag": "Archaeology"
          },
          {
                "url": "https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80",
                "title": "Lalitgiri Ancient Relic Museum",
                "caption": "Oldest Buddhist settlement in Odisha housing authentic sacred bone relic caskets",
                "tag": "Museum & Relics"
          },
          {
                "url": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
                "title": "Birupa River Valley Monastic Ruins",
                "caption": "Serene landscape along the Birupa river where Vajrayana Buddhism once flourished",
                "tag": "Heritage"
          }
    ],
    overview: 'Step into the tranquil ruins of ancient Buddhist universities rivaling Nalanda. Marvel at monumental Stupas, excavated monasteries, and ornate green granite Buddha sculptures.',
    highlights: ['Ratnagiri excavated Mahavihara & green chlorite doorframe', 'Lalitgiri ancient Relic Casket Stupa & museum', 'Udayagiri rock-cut caves and step-well', 'Langudi hill Ashokan rock edicts'],
    itinerary: [
      { day: 1, title: 'Bhubaneswar to Lalitgiri', desc: 'Drive to Lalitgiri, the earliest Buddhist complex in Odisha. Visit the archaeological museum housing the sacred bone relic.' },
      { day: 2, title: 'Ratnagiri & Udayagiri Monasteries', desc: 'Explore the monumental brick monastery at Ratnagiri and Udayagiri’s hillside Chaitya stupas.' },
      { day: 3, title: 'Chhatia Bata & Return to Bhubaneswar', desc: 'Visit the prophetic Chhatia Bata Jagannath shrine and return to Bhubaneswar.' }
    ]
  },
  {
    slug: 'western-odisha-sambalpur-hirakud-wonder',
    cat: 'odisha',
    theme: 'Heritage & Lakes',
    title: 'Western Odisha & Hirakud Dam Wonder',
    dest: 'Sambalpur, Hirakud, Bargarh',
    days: '3 Days / 2 Nights',
    durationDays: 3,
    price: 9200,
    originalPrice: 11500,
    badge: 'Cultural',
    rating: 4.7,
    reviewsCount: 105,
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
                "title": "Hirakud Dam Reservoir",
                "caption": "World’s longest earthen dam (26 km) creating an enormous inland sea on Mahanadi river",
                "tag": "Engineering Wonder"
          },
          {
                "url": "https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80",
                "title": "Maa Samaleswari Temple",
                "caption": "16th century presiding deity temple of Western Odisha with grand riverfront corridor",
                "tag": "Temple"
          },
          {
                "url": "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80",
                "title": "Leaning Temple of Huma",
                "caption": "Curious architectural enigma where temple leans notably towards the riverbed",
                "tag": "Curious Heritage"
          },
          {
                "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
                "title": "Debrigarh Wildlife Sanctuary",
                "caption": "Lakeside wildlife sanctuary where bison, leopards, and four-horned antelopes roam",
                "tag": "Sanctuary"
          }
    ],
    overview: 'Witness the world’s longest earthen dam (Hirakud), the Leaning Temple of Huma, Maa Samaleswari Temple, and authentic handloom Sambalpuri Ikat weavers.',
    highlights: ['Hirakud Dam Gandhi Minar 360-degree reservoir viewpoint', 'Leaning Temple of Huma on Mahanadi riverbanks', 'Maa Samaleswari Temple Darshan', 'Live Sambalpuri Ikat saree weaving in Barpali'],
    itinerary: [
      { day: 1, title: 'Bhubaneswar to Sambalpur (Train / Car)', desc: 'Arrival in Sambalpur. Check in to hotel. Evening darshan at Maa Samaleswari Temple and walk along Mahanadi river.' },
      { day: 2, title: 'Hirakud Dam, Nehru Minar & Huma', desc: 'Drive across the world’s longest dam, take ropeway/minar viewpoint. Visit the mysterious leaning temple of Huma.' },
      { day: 3, title: 'Weavers Village & Return', desc: 'Visit a master weaver collective in Bargarh for Sambalpuri textiles before departure.' }
    ]
  },
  {
    slug: 'chandipur-beach-kuldiha-sanctuary',
    cat: 'odisha',
    theme: 'Beach & Wildlife',
    title: 'Chandipur Hide-and-Seek Beach & Kuldiha Wildlife',
    dest: 'Chandipur, Balasore',
    days: '3 Days / 2 Nights',
    durationDays: 3,
    price: 8800,
    originalPrice: 10800,
    badge: 'Unique Beach',
    rating: 4.8,
    reviewsCount: 92,
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
                "title": "Chandipur Disappearing Sea Beach",
                "caption": "Surreal geological wonder where sea water recedes up to 5 km during low tide",
                "tag": "Unique Beach"
          },
          {
                "url": "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80",
                "title": "Kuldiha Wildlife Elephant Sanctuary",
                "caption": "Dense tropical Sal forest sanctuary famous for wild elephant herds at Rissia reservoir",
                "tag": "Elephant Safari"
          },
          {
                "url": "https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80",
                "title": "Panchalingeswar Perennial Stream Shrine",
                "caption": "Five natural stone Shiva Lingas washed continuously by a hill stream on Nilagiri hills",
                "tag": "Hill Shrine"
          },
          {
                "url": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
                "title": "Remuna Khirachora Gopinath Temple",
                "caption": "Historical Krishna shrine famous for the offering of sacred sweet condensed milk pudding",
                "tag": "Spiritual Heritage"
          }
    ],
    overview: 'Experience the magical phenomenon of the sea receding up to 5 kilometers during low tide, allowing you to walk literally into the sea bed, paired with wild elephant spotting in Kuldiha.',
    highlights: ['Walking 4 km into the sea on Chandipur receding beach', 'Rare Horseshoe crab observation in natural habitat', 'Wild elephant watching at Rissia watchtower in Kuldiha', 'Panchalingeswar five Shiva lingas beneath natural stream'],
    itinerary: [
      { day: 1, title: 'Bhubaneswar to Chandipur', desc: 'Drive to Balasore. Check into beachfront resort. Witness the surreal disappearing sea at sunset.' },
      { day: 2, title: 'Panchalingeswar & Kuldiha Wildlife Sanctuary', desc: 'Climb to Panchalingeswar perennial hill stream temple, then enjoy a jungle safari in Kuldiha Forest.' },
      { day: 3, title: 'Khirachora Gopinath & Return', desc: 'Visit the historic 12th century Khirachora Gopinath Temple in Remuna to taste sacred Amrita Keli prasad. Return to Bhubaneswar.' }
    ]
  },
  {
    slug: 'keonjhar-waterfalls-tarini-temple',
    cat: 'odisha',
    theme: 'Waterfalls & Spiritual',
    title: 'Keonjhar Waterfalls & Ghatgaon Maa Tarini',
    dest: 'Keonjhar, Ghatgaon',
    days: '2 Days / 1 Night',
    durationDays: 2,
    price: 5999,
    originalPrice: 7500,
    badge: 'Popular',
    rating: 4.7,
    reviewsCount: 114,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
                "title": "Sanaghagara Waterfall",
                "caption": "Lush perennial waterfall descending through forested gorges and natural picnic gardens",
                "tag": "Waterfalls"
          },
          {
                "url": "https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80",
                "title": "Ghatgaon Maa Tarini Temple",
                "caption": "Miracle shrine where millions of coconuts are offered annually to divine Maa Tarini",
                "tag": "Spiritual Shrine"
          },
          {
                "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
                "title": "Khandadhar Roaring Falls",
                "caption": "Majestic 500-foot plunge resembling a shiny upright sword in the mountain wilderness",
                "tag": "Cascades"
          },
          {
                "url": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
                "title": "Gonasika River Source & Sal Hills",
                "caption": "Holy origin site of River Baitarani amidst ancient rocks and evergreen mountain ranges",
                "tag": "River Origin"
          }
    ],
    overview: 'A rejuvenating pilgrimage & nature trail through the lush green forests of Keonjhar, home to miraculous Maa Tarini at Ghatgaon and cascading waterfalls.',
    highlights: ['Ghatgaon Maa Tarini miraculous coconut offering shrine', 'Sanaghagara and Badaghagara perennial waterfalls', 'Khandadhar roaring falls (Odisha’s second highest)', 'Gonasika source of the sacred Baitarani river'],
    itinerary: [
      { day: 1, title: 'Bhubaneswar to Ghatgaon & Keonjhar', desc: 'Early drive to Ghatgaon for Maa Tarini Darshan. Continue to Keonjhar and visit Sanaghagara waterfall and park.' },
      { day: 2, title: 'Badaghagara & Khandadhar Waterfalls', desc: 'Visit Badaghagara falls and trek near the dramatic drop of Khandadhar before driving back to Bhubaneswar.' }
    ]
  },
  {
    slug: 'satkosia-gorge-mahanadi-river-camp',
    cat: 'odisha',
    theme: 'Eco Camp & Wildlife',
    title: 'Satkosia Gorge & Mahanadi River Camp Safari',
    dest: 'Satkosia, Angul, Nayagarh',
    days: '3 Days / 2 Nights',
    durationDays: 3,
    price: 10499,
    originalPrice: 12999,
    badge: 'Eco Camping',
    rating: 4.8,
    reviewsCount: 88,
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
                "title": "Satkosia 22 km Mahanadi River Gorge",
                "caption": "Deep dramatic canyon carved by Mahanadi river between lush forested mountain ridges",
                "tag": "River Canyon"
          },
          {
                "url": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80",
                "title": "Endangered Gharial & Mugger Sanctuary",
                "caption": "Cruising past rare freshwater Gharial crocodiles basking on golden river sandbanks",
                "tag": "Wildlife Safari"
          },
          {
                "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
                "title": "Satkosia Sands Luxury Swiss Tents",
                "caption": "Glamping on river sandbars with evening campfires, folk dances, and starlit skies",
                "tag": "Eco Camping"
          },
          {
                "url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
                "title": "Tikarpada Nature Trails",
                "caption": "Guided forest canopy treks with spotting of giant squirrels, sambar, and hornbills",
                "tag": "Nature Treks"
          }
    ],
    overview: 'Where the mighty Mahanadi river cuts through the Eastern Ghats forming a 22 km deep majestic gorge. Sleep in luxury Swiss tents on sandbars surrounded by dense tiger reserve forests.',
    highlights: ['River boat cruise through the 22 km deep Satkosia Gorge', 'Spotting endangered Gharials and Mugger crocodiles', 'Stargazing around evening campfires on river sands', 'Guided canopy forest nature trails'],
    itinerary: [
      { day: 1, title: 'Bhubaneswar to Satkosia Sands Resort', desc: 'Drive to Tikarpada / Badmul nature camp. Check into riverside luxury tents. Sunset boating on Mahanadi.' },
      { day: 2, title: 'Gorge Boating & Jungle Walk', desc: 'Morning boat safari to spot basking gharials. Afternoon guided trek inside reserve forest.' },
      { day: 3, title: 'Kantilo Nilamadhaba Temple & Return', desc: 'Visit Kantilo Nilamadhaba temple on the banks of Mahanadi, the precursor shrine to Lord Jagannath, then return.' }
    ]
  },
  {
    slug: 'puri-raghurajpur-artisan-heritage-retreat',
    cat: 'odisha',
    theme: 'Culture & Art',
    title: 'Puri Jagannath & Raghurajpur Artisan Retreat',
    dest: 'Puri, Raghurajpur',
    days: '3 Days / 2 Nights',
    durationDays: 3,
    price: 8499,
    originalPrice: 10200,
    badge: 'Art Special',
    rating: 4.9,
    reviewsCount: 172,
    img: '/images/hero-puri-golden-beach.jpg',
    gallery: [
      '/images/hero-puri-golden-beach.jpg',
      'https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80',
      '/images/hero-konark-golden-temple.jpg',
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "/images/hero-puri-golden-beach.jpg",
                "title": "Puri Golden Beach Coastline",
                "caption": "Relaxing sandy shores alongside the sacred holy town of Lord Jagannath",
                "tag": "Coast"
          },
          {
                "url": "https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80",
                "title": "Raghurajpur Heritage Artisan Village",
                "caption": "Painted village where every home is an art studio of master Pattachitra painters",
                "tag": "Living Art"
          },
          {
                "url": "/images/hero-konark-golden-temple.jpg",
                "title": "Konark Sun Temple Architectural Marvel",
                "caption": "Intricate 13th-century stone carvings depicting dance forms and cosmic alignment",
                "tag": "UNESCO Site"
          },
          {
                "url": "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80",
                "title": "Gotipua Classical Dance & Mahaprasad",
                "caption": "Traditional acrobatic temple dance performances and sacred Anandabazar feast",
                "tag": "Tradition"
          }
    ],
    overview: 'Immerse in Odisha’s living creative soul: interact with National Award-winning Pattachitra scroll artists, witness live Gotipua dance, and receive Lord Jagannath’s divine blessings.',
    highlights: ['Pattachitra palm-leaf engraving workshop in an artist home', 'Live Gotipua traditional acrobatic temple dance recital', 'Exclusive Jagannath Temple Mahaprasad tasting experience', 'Golden beach sunset meditation walk'],
    itinerary: [
      { day: 1, title: 'Arrival & Raghurajpur Immersion', desc: 'Pick up, transfer to Raghurajpur. Spend the afternoon sitting with artisan families painting intricate scrolls.' },
      { day: 2, title: 'Puri Jagannath Temple & Heritage Trails', desc: 'Morning darshan at Jagannath Temple, explore historic mutts, sample Chhappan Bhog Mahaprasad.' },
      { day: 3, title: 'Konark & Departure', desc: 'Visit Konark Sun Temple before departure transfer from Bhubaneswar.' }
    ]
  },
  {
    slug: 'mangalajodi-bird-paradise-chilika-winter',
    cat: 'odisha',
    theme: 'Bird Watching & Nature',
    title: 'Mangalajodi Birders Paradise & Chilika Wetlands',
    dest: 'Mangalajodi, Chilika',
    days: '2 Days / 1 Night',
    durationDays: 2,
    price: 6999,
    originalPrice: 8500,
    badge: 'Winter Special',
    rating: 4.9,
    reviewsCount: 130,
    img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      '/images/hero-chilika-lake-lagoon.jpg',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
                "title": "Migratory Birds of Mangalajodi",
                "caption": "Over 1.5 million migratory waterfowl visiting from Siberia and Central Asia",
                "tag": "Bird Paradise"
          },
          {
                "url": "/images/hero-chilika-lake-lagoon.jpg",
                "title": "Silent Hand-Poled Wooden Catamaran Boat",
                "caption": "Zero-engine silent boats allowing photographers to get within feet of resting birds",
                "tag": "Silent Safari"
          },
          {
                "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
                "title": "Purple Swamphen & Jacanas in Water Lilies",
                "caption": "Vibrant purple swamphens, openbill storks, and pintails feeding in lush wetlands",
                "tag": "Wetlands"
          },
          {
                "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
                "title": "Sunrise Wetland Mist & Lily Canals",
                "caption": "Golden morning light shimmering across endless water lily canals and reedbeds",
                "tag": "Dawn Landscape"
          }
    ],
    overview: 'A globally acclaimed community-led wetland conservation marvel. Over 1.5 million migratory birds from Siberia, Mongolia, and the Caspian Sea nest here in tranquil waterways.',
    highlights: ['Silent wooden hand-poled boat bird photography safaris', 'Close encounters with Purple Moorhens, Pintails & Flamingos', 'Former poachers turned award-winning expert naturalists', 'Authentic rustic Odia village hospitality'],
    itinerary: [
      { day: 1, title: 'Bhubaneswar to Mangalajodi (75 km)', desc: 'Drive to Mangalajodi village. Check in to community eco-cottage. Late afternoon silent boat safari for bird photography at golden hour.' },
      { day: 2, title: 'Dawn Birding Safari & Return', desc: 'Early morning sunrise boat safari when thousands of birds take flight. Return to Bhubaneswar after lunch.' }
    ]
  },
  {
    slug: 'complete-odisha-odyssey-coast-to-hills',
    cat: 'odisha',
    theme: 'Grand Tour',
    title: 'Complete Odisha Odyssey: Coast to Tribal Hills',
    dest: 'Bhubaneswar, Puri, Konark, Chilika, Daringbadi, Gopalpur',
    days: '10 Days / 9 Nights',
    durationDays: 10,
    price: 34999,
    originalPrice: 42999,
    badge: 'Ultimate Odisha',
    rating: 5.0,
    reviewsCount: 156,
    img: '/images/pkg-odisha-family.jpg',
    gallery: [
      '/images/pkg-odisha-family.jpg',
      '/images/pkg-daringbadi.jpg',
      '/images/hero-chilika-lake-lagoon.jpg',
      '/images/hero-konark-golden-temple.jpg',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "/images/pkg-odisha-family.jpg",
                "title": "Odisha Heritage & Temple Circuit",
                "caption": "The sacred land of Kalinga with world-renowned temples and grand architectural heritage",
                "tag": "Sacred Kalinga"
          },
          {
                "url": "/images/pkg-daringbadi.jpg",
                "title": "Daringbadi Hill Station Valleys",
                "caption": "Pine-fringed mountain valleys, cool hill breezes, and coffee gardens",
                "tag": "Hill Station"
          },
          {
                "url": "/images/hero-chilika-lake-lagoon.jpg",
                "title": "Chilika Lake Island Expeditions",
                "caption": "Cruising through Asia’s largest brackish lagoon with dolphins and islands",
                "tag": "Lagoon"
          },
          {
                "url": "/images/hero-konark-golden-temple.jpg",
                "title": "Konark Sun Temple",
                "caption": "Monumental sun god chariot with colossal carved stone horses and wheels",
                "tag": "World Heritage"
          },
          {
                "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
                "title": "Gopalpur Coastal Serenity",
                "caption": "Relaxing at the historic colonial beach resort along the pristine Ganjam coast",
                "tag": "Coastal Charm"
          }
    ],
    overview: 'The definitive all-encompassing voyage covering ancient stone temples, UNESCO chariot of Konark, dolphin waters of Chilika, misty peaks of Daringbadi, and the colonial sea of Gopalpur.',
    highlights: ['Bhubaneswar temple cluster & Nandankanan', 'Konark Sun Temple & Puri Jagannath Temple', 'Chilika Lake Dolphin safari', '3 full days in cool misty Daringbadi hill station', 'Gopalpur-on-Sea & Tampara water sports'],
    itinerary: [
      { day: 1, title: 'Arrival in Bhubaneswar', desc: 'Temple tours: Lingaraj, Mukteswar, Rajarani, Khandagiri caves.' },
      { day: 2, title: 'Bhubaneswar to Puri via Konark', desc: 'Dhauli Stupa, Konark Sun Temple, Chandrabhaga beach to Puri.' },
      { day: 3, title: 'Puri Sacred Temples & Beaches', desc: 'Jagannath temple darshan, Gundicha, Golden beach leisure.' },
      { day: 4, title: 'Chilika Satapada to Gopalpur', desc: 'Boat safari with dolphins, scenic drive down to Gopalpur beach.' },
      { day: 5, title: 'Gopalpur to Daringbadi Hills', desc: 'Ascend into the Eastern Ghats. Pine forest walk and hill resort check-in.' },
      { day: 6, title: 'Daringbadi Exploration', desc: 'Coffee plantations, Midubanda waterfall, Lover’s point, and tribal villages.' },
      { day: 7, title: 'Mandasaru Valley Trek', desc: 'Marvel at the stunning silent valley gorge, sunset viewpoints.' },
      { day: 8, title: 'Daringbadi to Chilika Rambha', desc: 'Descend to Southern Chilika for tranquil island boating.' },
      { day: 9, title: 'Raghurajpur Crafts & Cuttack', desc: 'Artisan village visit, silver filigree craft walk.' },
      { day: 10, title: 'Farewell Bhubaneswar', desc: 'Souvenir shopping and airport drop.' }
    ]
  },
  {
    slug: 'puri-rath-yatra-special-darshan',
    cat: 'odisha',
    theme: 'Festivals & Spiritual',
    title: 'Puri Rath Yatra Special Chariot Experience',
    dest: 'Puri',
    days: '4 Days / 3 Nights',
    durationDays: 4,
    price: 18999,
    originalPrice: 23999,
    badge: 'Festival Special',
    rating: 5.0,
    reviewsCount: 204,
    img: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80',
      '/images/hero-puri-golden-beach.jpg',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80",
                "title": "Towering Chariots of Puri Rath Yatra",
                "caption": "Colossal Nandighosa, Taladhwaja, and Darpadalana chariots stationed on Grand Road Badadanda",
                "tag": "World Festival"
          },
          {
                "url": "https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80",
                "title": "Devotees Pulling Sacred Ropes",
                "caption": "Millions of joyous pilgrims gathered to pull the divine chariots with holy chants of Jai Jagannath",
                "tag": "Divine Procession"
          },
          {
                "url": "/images/hero-puri-golden-beach.jpg",
                "title": "Puri Sacred Beach Shoreline",
                "caption": "Holy waters of Mahodadhi (Bay of Bengal) where pilgrims take ritual cleansing baths",
                "tag": "Holy Coast"
          },
          {
                "url": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
                "title": "Gundicha Mandir Garden Palace",
                "caption": "Summer garden home of Lord Jagannath during the 9-day annual festival stay",
                "tag": "Garden Temple"
          }
    ],
    overview: 'Witness the world’s grandest spiritual festival: the annual chariot procession of Lord Jagannath, Balabhadra, and Subhadra along Grand Road Puri with reserved rooftop viewing access.',
    highlights: ['Exclusive reserved rooftop view of the three towering wooden Raths', 'Chariot pulling experience with millions of devotees', 'Gundicha temple ceremonial procession', 'Special festival Mahaprasad arrangement'],
    itinerary: [
      { day: 1, title: 'Arrive Puri on Eve of Rath Yatra', desc: 'Check in to hotel. Evening walk down Badadanda (Grand Road) to see the completed chariots Nandighosa, Taladhwaja, and Darpadalana.' },
      { day: 2, title: 'Rath Yatra Day - Pahandi & Chariot Pulling', desc: 'Early morning escort to rooftop viewing gallery. Witness divine Pahandi Bije and ceremonial sweeping (Chhera Panhara) by Gajapati Maharaja, followed by Rath pulling.' },
      { day: 3, title: 'Gundicha Temple Darshan & Konark', desc: 'Darshan at Gundicha Temple where deities reside. Afternoon relaxing visit to Konark and Chandrabhaga.' },
      { day: 4, title: 'Return to Bhubaneswar', desc: 'Transfer to Bhubaneswar airport with sacred prasad.' }
    ]
  },
  {
    slug: 'daringbadi-mandasaru-silent-valley-adventure',
    cat: 'odisha',
    theme: 'Hill Station & Trekking',
    title: 'Daringbadi & Mandasaru Silent Valley Adventure',
    dest: 'Daringbadi, Mandasaru',
    days: '4 Days / 3 Nights',
    durationDays: 4,
    price: 11499,
    originalPrice: 13999,
    badge: 'Trekker Favorite',
    rating: 4.8,
    reviewsCount: 95,
    img: '/images/pkg-daringbadi.jpg',
    gallery: [
      '/images/pkg-daringbadi.jpg',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "/images/pkg-daringbadi.jpg",
                "title": "Daringbadi Pine Forests & Morning Frost",
                "caption": "Towering pine forest paths with sub-zero winter morning frost in Kandhamal",
                "tag": "Pine Forests"
          },
          {
                "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
                "title": "Mandasaru Silent Valley Canyon",
                "caption": "Breathtaking sheer cliffs, hanging bridge, and sweeping views of undisturbed rainforests",
                "tag": "Valley Canyon"
          },
          {
                "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
                "title": "Dasingbadi & Midubanda Cascades",
                "caption": "Fresh mountain water cascading down natural granite steps surrounded by thick woods",
                "tag": "Mountain Falls"
          },
          {
                "url": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
                "title": "Coffee & Black Pepper Gardens",
                "caption": "Spices research gardens where travelers walk through fragrant pepper vines and coffee trees",
                "tag": "Spices Trail"
          }
    ],
    overview: 'An extended highland escape featuring the majestic Mandasaru gorge—hailed as the Grand Canyon of Odisha—with deep pine trails and valley view cabins.',
    highlights: ['Mandasaru canyon watchtower & hanging bridge', 'Coffee, black pepper, and turmeric farm visits', 'Lover’s Point riverbed picnic', 'Tribal cooking & bonfire under the stars'],
    itinerary: [
      { day: 1, title: 'Bhubaneswar to Daringbadi', desc: 'Scenic mountain climb to Daringbadi, sunset at Hill View Park.' },
      { day: 2, title: 'Waterfalls & Coffee Estates', desc: 'Midubanda waterfalls, Pine forest, Emu breeding farm, and spices gardens.' },
      { day: 3, title: 'Mandasaru Canyon Deep Trek', desc: 'Full day adventure inside Mandasaru gorge biosphere, watching clouds roll over sheer cliffs.' },
      { day: 4, title: 'Descent to Bhubaneswar', desc: 'Return drive through Ganjam valleys to Bhubaneswar.' }
    ]
  },

  // ================= INCREDIBLE INDIA TOUR PACKAGES (16 PACKAGES) =================
  {
    slug: 'kashmir-paradise-srinagar-gulmarg-pahalgam',
    cat: 'domestic',
    theme: 'Himalayas & Romantic',
    title: 'Kashmir Paradise: Srinagar, Gulmarg & Pahalgam',
    dest: 'Srinagar, Gulmarg, Pahalgam',
    days: '6 Days / 5 Nights',
    durationDays: 6,
    price: 31999,
    originalPrice: 38999,
    badge: 'Bestseller',
    rating: 4.9,
    reviewsCount: 340,
    img: '/images/pkg-kashmir.jpg',
    gallery: [
      '/images/pkg-kashmir.jpg',
      '/images/hero-kashmir-valley.jpg',
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "/images/pkg-kashmir.jpg",
                "title": "Dal Lake Shikara Boat Ride",
                "caption": "Glide across mirror-still waters of Dal Lake past floating gardens and houseboats",
                "tag": "Dal Lake"
          },
          {
                "url": "/images/hero-kashmir-valley.jpg",
                "title": "Gulmarg Snow Peaks & Meadows",
                "caption": "Snow-capped Himalayan peaks and world-famous ski slopes in the Meadow of Flowers",
                "tag": "Gulmarg"
          },
          {
                "url": "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
                "title": "Gulmarg Gondola Ride",
                "caption": "High-altitude cable car ascending to 14,000 ft Apharwat Peak snow line",
                "tag": "Gondola Cable Car"
          },
          {
                "url": "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80",
                "title": "Pahalgam Betaab Valley & Lidder River",
                "caption": "Pristine turquoise glacial waters flowing through alpine pine meadows in Pahalgam",
                "tag": "Betaab Valley"
          }
    ],
    overview: 'Experience heaven on earth: stay in a luxury carved wooden houseboat on Dal Lake, ride the world’s second-highest Gondola in snow-clad Gulmarg, and stroll through Pahalgam’s pine valleys.',
    highlights: ['Private Shikara ride on Dal Lake at sunset', '1 night luxury houseboat stay with traditional Wazwan dinner', 'Gulmarg Gondola ride up to Apharwat Peak snowline', 'Betaab Valley & Aru Valley in Pahalgam'],
    itinerary: [
      { day: 1, title: 'Arrive Srinagar - Dal Lake Houseboat', desc: 'Warm Kashmiri welcome with Kahwa. Check in to luxury houseboat, enjoy a 1-hour sunset Shikara ride.' },
      { day: 2, title: 'Mughal Gardens & Shankaracharya Temple', desc: 'Visit Nishat Bagh, Shalimar Bagh, Chashme Shahi, and the hilltop Shankaracharya Temple overlooking the city.' },
      { day: 3, title: 'Srinagar to Gulmarg Day Trip', desc: 'Drive to the Meadow of Flowers. Ride the high-altitude Gondola cable car to snow peaks. Evening back in Srinagar.' },
      { day: 4, title: 'Srinagar to Pahalgam (Valley of Shepherds)', desc: 'Drive past saffron fields of Pampore and pine forests to Pahalgam. Check into riverside hotel.' },
      { day: 5, title: 'Betaab Valley & Chandanwari', desc: 'Visit Betaab Valley, Aru Valley, and the Lidder riverbank trails.' },
      { day: 6, title: 'Departure Srinagar', desc: 'Transfer to Srinagar airport with Kashmiri saffron and walnut gifts.' }
    ]
  },
  {
    slug: 'golden-triangle-delhi-agra-jaipur',
    cat: 'domestic',
    theme: 'Heritage & Royals',
    title: 'Golden Triangle: Delhi, Agra & Jaipur',
    dest: 'Delhi, Agra, Jaipur',
    days: '5 Days / 4 Nights',
    durationDays: 5,
    price: 19999,
    originalPrice: 24999,
    badge: 'Iconic India',
    rating: 4.8,
    reviewsCount: 420,
    img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1603288967527-6f0288f6356d?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
                "title": "Taj Mahal at Sunrise Agra",
                "caption": "The ethereal white marble masterpiece illuminated by morning golden rays",
                "tag": "7 Wonders"
          },
          {
                "url": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
                "title": "Hawa Mahal Palace of Winds Jaipur",
                "caption": "Iconic 5-storey pink sandstone facade with 953 intricately carved jharokha windows",
                "tag": "Pink City"
          },
          {
                "url": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
                "title": "Qutub Minar & Delhi Monuments",
                "caption": "UNESCO World Heritage 73-meter minaret and historic Mughal architectural marvels",
                "tag": "Delhi Heritage"
          },
          {
                "url": "https://images.unsplash.com/photo-1603288967527-6f0288f6356d?auto=format&fit=crop&w=1200&q=80",
                "title": "Amber Fort Hilltop Palace Jaipur",
                "caption": "Majestic Rajput citadel overlooking Maota Lake with Sheesh Mahal mirror palace",
                "tag": "Royal Fort"
          }
    ],
    overview: 'India’s most celebrated classic journey connecting the capital Delhi, the eternal monument of love Taj Mahal in Agra, and the royal Pink City Jaipur.',
    highlights: ['Sunrise at the Taj Mahal - 7th Wonder of the World', 'Agra Fort & Fatehpur Sikri UNESCO complexes', 'Amber Fort elephant/jeep ride in Jaipur', 'Hawa Mahal, City Palace & Qutub Minar'],
    itinerary: [
      { day: 1, title: 'Arrive Delhi - Old & New Highlights', desc: 'Visit India Gate, Qutub Minar, Rashtrapati Bhavan, and drive past Red Fort.' },
      { day: 2, title: 'Delhi to Agra - Agra Fort Sunset', desc: 'Drive via Yamuna Expressway to Agra. Explore the grand red sandstone Agra Fort.' },
      { day: 3, title: 'Taj Mahal Sunrise to Jaipur via Fatehpur Sikri', desc: 'Breathtaking sunrise at Taj Mahal. Drive to Jaipur stopping at Mughal ghost city Fatehpur Sikri.' },
      { day: 4, title: 'Royal Jaipur - Forts & Palaces', desc: 'Ascend Amber Fort, photo stop at Jal Mahal & Hawa Mahal, explore City Palace museum.' },
      { day: 5, title: 'Jaipur to Delhi Departure', desc: 'Return drive to Delhi airport for flight home.' }
    ]
  },
  {
    slug: 'kerala-backwaters-munnar-alleppey-houseboat',
    cat: 'domestic',
    theme: 'Backwaters & Nature',
    title: 'God’s Own Country: Munnar, Thekkady & Alleppey Houseboat',
    dest: 'Munnar, Thekkady, Alleppey, Cochin',
    days: '6 Days / 5 Nights',
    durationDays: 6,
    price: 27999,
    originalPrice: 33999,
    badge: 'Popular',
    rating: 4.9,
    reviewsCount: 380,
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
                "title": "Private Alleppey Houseboat Cruise",
                "caption": "Luxury thatched kettuvallam cruising through palm-canopied emerald backwater canals",
                "tag": "Backwaters"
          },
          {
                "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
                "title": "Munnar Emerald Tea Plantations",
                "caption": "Rolling carpets of lush tea bushes and mist-veiled mountain ranges at 5,000 ft",
                "tag": "Tea Hills"
          },
          {
                "url": "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=1200&q=80",
                "title": "Thekkady Periyar Wildlife Sanctuary",
                "caption": "Boating on Periyar Lake spotting wild elephants, bison, and aromatic spice gardens",
                "tag": "Wild Sanctuary"
          },
          {
                "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
                "title": "Fort Kochi Chinese Fishing Nets",
                "caption": "Historic cantilevered sea nets silhouetted against the Arabian sea sunset",
                "tag": "Colonial Coast"
          }
    ],
    overview: 'Glide through palm-fringed emerald lagoons in a private luxury Kettuvallam houseboat, sip fresh Ceylon tea in Munnar’s mist-capped rolling hills, and encounter wild elephants in Periyar.',
    highlights: ['Overnight private backwaters houseboat cruise with chef', 'Rolling tea estates and Mattupetty Dam in Munnar', 'Periyar Wildlife Sanctuary spice plantation walk', 'Fort Kochi Chinese fishing nets and colonial streets'],
    itinerary: [
      { day: 1, title: 'Arrive Cochin to Munnar (130 km)', desc: 'Scenic climb past Cheeyappara waterfalls to Munnar hill station. Check in to tea garden resort.' },
      { day: 2, title: 'Munnar Tea Gardens & Eravikulam', desc: 'Spot the endangered Nilgiri Tahr at Eravikulam National Park, visit Tea Museum and Echo Point.' },
      { day: 3, title: 'Munnar to Thekkady (Periyar)', desc: 'Drive to Thekkady. Guided tour of organic spice gardens (cardamom, pepper, vanilla). Evening Kathakali dance show.' },
      { day: 4, title: 'Thekkady to Alleppey Houseboat', desc: 'Board your private thatched houseboat by noon. Cruise backwaters while relishing traditional Kerala meals.' },
      { day: 5, title: 'Alleppey to Cochin', desc: 'Disembark after breakfast. Explore Fort Kochi, St. Francis Church, and Jew Town.' },
      { day: 6, title: 'Departure Cochin', desc: 'Drop at Cochin International Airport.' }
    ]
  },
  {
    slug: 'royal-rajasthan-jaipur-jodhpur-udaipur',
    cat: 'domestic',
    theme: 'Heritage & Royals',
    title: 'Royal Rajasthan: Jaipur, Jodhpur & Udaipur',
    dest: 'Jaipur, Jodhpur, Udaipur',
    days: '7 Days / 6 Nights',
    durationDays: 7,
    price: 32999,
    originalPrice: 39999,
    badge: 'Royal Experience',
    rating: 4.9,
    reviewsCount: 260,
    img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1603288967527-6f0288f6356d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
                "title": "Udaipur City Palace & Lake Pichola",
                "caption": "Romantic white marble palace complex rising majestically over tranquil blue lake waters",
                "tag": "City of Lakes"
          },
          {
                "url": "https://images.unsplash.com/photo-1603288967527-6f0288f6356d?auto=format&fit=crop&w=1200&q=80",
                "title": "Mehrangarh Fort Jodhpur Blue City",
                "caption": "Colossal fort perched 400 ft above the skyline of vibrant indigo-blue houses",
                "tag": "Blue City"
          },
          {
                "url": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
                "title": "Amber Fort Jaipur Courtyards",
                "caption": "Grand ramparts, marble archways, and elephant gates in the Rajput royal citadel",
                "tag": "Pink City Fort"
          },
          {
                "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
                "title": "Thar Desert Sunset & Folk Glamping",
                "caption": "Camel safaris across golden sand dunes with traditional Kalbelia folk performances",
                "tag": "Desert Camping"
          }
    ],
    overview: 'Live like royalty across the Pink City (Jaipur), the Blue City (Jodhpur), and the romantic City of Lakes (Udaipur). Grand fortresses, marble palaces, and desert folk melodies.',
    highlights: ['Udaipur Lake Pichola boat ride overlooking City Palace', 'Massive Mehrangarh Fort towering over blue houses in Jodhpur', 'Amber Fort & Nahargarh panoramic views in Jaipur', 'Ranakpur marble Jain temple architecture'],
    itinerary: [
      { day: 1, title: 'Arrive Jaipur - Pink City', desc: 'Check in to heritage hotel. Evening at Chokhi Dhani ethnic village.' },
      { day: 2, title: 'Jaipur Royalty Sightseeing', desc: 'Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar observatory.' },
      { day: 3, title: 'Jaipur to Jodhpur via Pushkar', desc: 'Visit holy Brahma Temple and sacred Pushkar Lake en route to the Blue City.' },
      { day: 4, title: 'Jodhpur Mehrangarh & Jaswant Thada', desc: 'Explore the impregnable Mehrangarh Fort and the white marble Jaswant Thada cenotaph.' },
      { day: 5, title: 'Jodhpur to Udaipur via Ranakpur', desc: 'Drive to Udaipur, marveling at the 1,444 uniquely carved pillars of Ranakpur.' },
      { day: 6, title: 'Romantic Udaipur - Lake City', desc: 'City Palace, Saheliyon-ki-Bari, Jagdish temple, and sunset boat cruise on Lake Pichola.' },
      { day: 7, title: 'Departure Udaipur', desc: 'Drop at Udaipur Airport for departure.' }
    ]
  },
  {
    slug: 'goa-sun-sand-sea-luxury-getaway',
    cat: 'domestic',
    theme: 'Beach & Nightlife',
    title: 'Goa Sun, Sand & Sea Luxury Getaway',
    dest: 'North & South Goa',
    days: '5 Days / 4 Nights',
    durationDays: 5,
    price: 22999,
    originalPrice: 28999,
    badge: 'Beach Favorite',
    rating: 4.8,
    reviewsCount: 390,
    img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
                "title": "Goa Golden Shore Palms & Waves",
                "caption": "Idyllic swaying coconut groves, vibrant beach shacks, and warm Arabian Sea waters",
                "tag": "Tropical Beach"
          },
          {
                "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
                "title": "Dudhsagar Four-Tiered Waterfalls",
                "caption": "Spectacular sea of milk waterfall cascading through Bhagwan Mahavir Wildlife Sanctuary",
                "tag": "Waterfalls"
          },
          {
                "url": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
                "title": "Old Goa Basilica of Bom Jesus",
                "caption": "UNESCO World Heritage baroque church holding sacred remains of St. Francis Xavier",
                "tag": "Portuguese Heritage"
          },
          {
                "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
                "title": "Calangute Water Sports & Sunset Yacht",
                "caption": "Parasailing, jet ski rides, and sunset luxury catamaran cruises along the coast",
                "tag": "Water Sports"
          }
    ],
    overview: 'The quintessential Indian tropical paradise: pristine white sand shores, Portuguese heritage churches, lively beach shacks, water sports, and sunset yacht cruises.',
    highlights: ['Aguada Fort & Dil Chahta Hai Chapora Fort viewpoints', 'Calangute, Baga & Anjuna water sports', 'Old Goa UNESCO Basilica of Bom Jesus & Se Cathedral', 'Mandovi River sunset cruise with Goan folk music'],
    itinerary: [
      { day: 1, title: 'Arrive Goa - Welcome to the Coast', desc: 'Airport pick up, transfer to beachfront resort. Relax on the sandy beach with chilled tender coconut.' },
      { day: 2, title: 'North Goa Heritage & Beach Buzz', desc: 'Visit Fort Aguada, Chapora Fort, Vagator, Anjuna, and Baga beach shacks.' },
      { day: 3, title: 'South Goa Churches & Mangueshi Temple', desc: 'Explore Old Goa’s historic churches, Miramar beach, Dona Paula viewpoint, and evening river cruise.' },
      { day: 4, title: 'Water Sports & Leisure Day', desc: 'Parasailing, jet ski, and banana rides or lounge at tranquil South Goa Palolem beach.' },
      { day: 5, title: 'Departure Goa', desc: 'Transfer to Goa Dabolim / MOPA Airport.' }
    ]
  },
  {
    slug: 'leh-ladakh-pangong-lake-nubra-valley',
    cat: 'domestic',
    theme: 'Himalayas & Adventure',
    title: 'Leh Ladakh: Pangong Lake & Nubra Valley Safari',
    dest: 'Leh, Nubra Valley, Pangong',
    days: '7 Days / 6 Nights',
    durationDays: 7,
    price: 36999,
    originalPrice: 44999,
    badge: 'Bucket List',
    rating: 5.0,
    reviewsCount: 280,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
                "title": "Pangong Tso Color-Changing Blue Lake",
                "caption": "Endorheic saltwater lake at 14,270 ft shifting hues from cyan to deep cobalt blue",
                "tag": "Pangong Tso"
          },
          {
                "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
                "title": "Khardung La High Mountain Pass (18,380 ft)",
                "caption": "Traversing the iconic gateway to the Nubra and Shyok valleys in the Karakoram range",
                "tag": "High Pass"
          },
          {
                "url": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
                "title": "Thiksey Tibetan Buddhist Gompa",
                "caption": "12-storey hilltop monastery complex resembling the Potala Palace of Lhasa",
                "tag": "Monastery"
          },
          {
                "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
                "title": "Hunder Cold Desert White Sand Dunes",
                "caption": "Riding double-humped Bactrian camels along the historic Silk Route in Nubra Valley",
                "tag": "Nubra Valley"
          }
    ],
    overview: 'Traverse the highest motorable passes on earth (Khardung La 18,380 ft), camp by the color-changing blue waters of Pangong Tso, and ride double-humped Bactrian camels on Hunder sand dunes.',
    highlights: ['Khardung La Pass - 18,380 ft world-record crossing', 'Pangong Lake color-shifting waters & 3 Idiots point', 'Hunder sand dunes double-humped camel safari', 'Thiksey & Hemis ancient Buddhist monasteries'],
    itinerary: [
      { day: 1, title: 'Arrive Leh - Acclimatization', desc: 'Fly into high-altitude Leh. Rest and acclimatize. Evening stroll in Leh Main Bazaar.' },
      { day: 2, title: 'Sham Valley: Magnetic Hill & Sangam', desc: 'Visit Hall of Fame, Magnetic Hill, Gurudwara Pathar Sahib, and Indus-Zanskar confluence.' },
      { day: 3, title: 'Leh to Nubra Valley via Khardung La', desc: 'Cross the thrilling Khardung La Pass. Arrive in Nubra, enjoy camel safari on cold desert dunes.' },
      { day: 4, title: 'Nubra to Pangong Tso via Shyok', desc: 'Drive alongside scenic Shyok river to the breathtaking high-altitude Pangong Lake. Camp on the lakeside.' },
      { day: 5, title: 'Pangong Sunrise to Leh via Chang La', desc: 'Witness celestial sunrise over turquoise lake. Return to Leh via Chang La pass (17,590 ft).' },
      { day: 6, title: 'Monasteries of Indus Valley', desc: 'Visit grand Thiksey Monastery, Shey Palace, and Shanti Stupa.' },
      { day: 7, title: 'Departure Leh', desc: 'Transfer to Kushok Bakula Rimpochee Airport.' }
    ]
  },
  {
    slug: 'himachal-delights-shimla-kullu-manali',
    cat: 'domestic',
    theme: 'Himalayas & Snow',
    title: 'Himachal Delights: Shimla, Kullu & Manali',
    dest: 'Shimla, Kullu, Manali',
    days: '6 Days / 5 Nights',
    durationDays: 6,
    price: 24999,
    originalPrice: 29999,
    badge: 'Family Favorite',
    rating: 4.8,
    reviewsCount: 310,
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
                "title": "Solang Valley & Rohtang Pass Snow",
                "caption": "Alpine snow valleys, ski slopes, paragliding launches, and breathtaking Pir Panjal views",
                "tag": "Snow Valleys"
          },
          {
                "url": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
                "title": "Shimla Ridge & Christ Church",
                "caption": "Historic neo-Gothic church and bustling pedestrian promenade on the Mall Road",
                "tag": "Colonial Hilltown"
          },
          {
                "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
                "title": "Atal Tunnel & Sissu Waterfall",
                "caption": "The 9.02 km mountain tunnel emerging into Lahaul valley’s dramatic hanging glacier waterfalls",
                "tag": "Atal Tunnel"
          },
          {
                "url": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
                "title": "Beas River Rafting Kullu & Hadimba Temple",
                "caption": "Exciting rapids on Beas river and the sacred wooden pagoda Hadimba temple in Manali",
                "tag": "River Rafting"
          }
    ],
    overview: 'Classic Himalayan vacation featuring the Mall Road & Kufri in Shimla, river rafting in Kullu, and Solang Valley snow sports plus Atal Tunnel in Manali.',
    highlights: ['Solang Valley paragliding, zorbing & snow fun', 'Drive through the engineering wonder Atal Tunnel', 'Shimla Ridge & Christ Church colonial heritage', 'Hadimba Temple amidst deodar forests in Manali'],
    itinerary: [
      { day: 1, title: 'Delhi / Chandigarh to Shimla', desc: 'Drive into pine-scented hills. Evening walk on Shimla’s famous Mall Road.' },
      { day: 2, title: 'Kufri Snow Viewpoint & Jakhoo Temple', desc: 'Visit Kufri amusement point, Jakhoo Hanuman temple with panoramic Himalayan view.' },
      { day: 3, title: 'Shimla to Manali via Kullu Valley', desc: 'Drive along Beas river. Enjoy white-water rafting in Kullu and visit Shawl factories.' },
      { day: 4, title: 'Solang Valley & Atal Tunnel', desc: 'Full day adventure in Solang Valley and through Atal Tunnel to Sissu waterfall.' },
      { day: 5, title: 'Manali Local Sights', desc: 'Hadimba Devi Temple, Vashisht Hot Springs, Old Manali cafes, and Tibetan Monastery.' },
      { day: 6, title: 'Departure Chandigarh / Delhi', desc: 'Scenic descent and transfer for return travel.' }
    ]
  },
  {
    slug: 'andaman-island-discovery-havelock-neil',
    cat: 'domestic',
    theme: 'Islands & Beach',
    title: 'Andaman Islands: Port Blair, Havelock & Neil',
    dest: 'Port Blair, Havelock, Neil Island',
    days: '6 Days / 5 Nights',
    durationDays: 6,
    price: 34999,
    originalPrice: 42000,
    badge: 'Exotic Island',
    rating: 5.0,
    reviewsCount: 275,
    img: '/images/banner-tropical-islands.jpg',
    gallery: [
      '/images/banner-tropical-islands.jpg',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "/images/banner-tropical-islands.jpg",
                "title": "Radhanagar Beach Havelock Island",
                "caption": "Voted Asia’s best beach with crystal powder white sand and serene turquoise waters",
                "tag": "Radhanagar Beach"
          },
          {
                "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
                "title": "Elephant Beach Living Coral Reefs",
                "caption": "Snorkeling, sea walk, and scuba diving over untouched underwater coral gardens",
                "tag": "Coral Scuba"
          },
          {
                "url": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
                "title": "Cellular Jail National Memorial Port Blair",
                "caption": "Historical colonial prison complex and moving freedom fighter light and sound show",
                "tag": "Historic Memorial"
          },
          {
                "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
                "title": "Neil Island Natural Rock Bridge",
                "caption": "Unique natural rock formation carved by ocean tides on Laxmanpur beach",
                "tag": "Natural Bridge"
          }
    ],
    overview: 'Crystal turquoise waters, powder white beaches, vibrant live coral reefs, and profound history. Experience Asia’s best beach (Radhanagar) on Havelock Island.',
    highlights: ['Radhanagar Beach (voted Asia’s best beach) sunset', 'High-speed catamaran cruise across emerald waters', 'Scuba diving & sea walk among coral gardens at Elephant Beach', 'Historic Cellular Jail light & sound spectacle'],
    itinerary: [
      { day: 1, title: 'Arrive Port Blair - Cellular Jail', desc: 'Transfer to hotel. Visit the iconic Cellular Jail and witness the poignant Light & Sound show.' },
      { day: 2, title: 'Port Blair to Havelock Island by Catamaran', desc: 'Board luxury ferry Makruzz/Nautika to Havelock. Afternoon at Radhanagar Beach.' },
      { day: 3, title: 'Elephant Beach Coral Snorkeling', desc: 'Speedboat to Elephant Beach for water sports: snorkeling, sea walk, jet ski.' },
      { day: 4, title: 'Havelock to Neil Island', desc: 'Ferry to Neil Island. Visit Bharatpur beach, Laxmanpur beach, and Natural Coral Rock Bridge.' },
      { day: 5, title: 'Neil Island to Port Blair', desc: 'Return cruise to Port Blair. Shopping for sea shell souvenirs at Sagarika Emporium.' },
      { day: 6, title: 'Departure Port Blair', desc: 'Drop at Veer Savarkar International Airport.' }
    ]
  },
  {
    slug: 'spiritual-varanasi-prayagraj-ayodhya',
    cat: 'domestic',
    theme: 'Spiritual & Heritage',
    title: 'Sacred Pilgrimage: Varanasi, Prayagraj & Ayodhya',
    dest: 'Varanasi, Prayagraj, Ayodhya',
    days: '5 Days / 4 Nights',
    durationDays: 5,
    price: 18999,
    originalPrice: 22999,
    badge: 'Sacred India',
    rating: 4.9,
    reviewsCount: 360,
    img: '/images/pkg-ayodhya-rammandir.jpg',
    gallery: [
      '/images/pkg-ayodhya-rammandir.jpg',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "/images/pkg-ayodhya-rammandir.jpg",
                "title": "Shri Ram Janmabhoomi Temple Ayodhya",
                "caption": "Magnificent pink Bansi Paharpur sandstone temple complex dedicated to Lord Rama",
                "tag": "Ram Mandir"
          },
          {
                "url": "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
                "title": "Dashashwamedh Ghat Evening Ganga Aarti",
                "caption": "Electrifying ritual of fire, brass lamps, and sacred chanting by holy priests in Varanasi",
                "tag": "Ganga Aarti"
          },
          {
                "url": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
                "title": "Sunrise Boat Cruise along Kashi Ghats",
                "caption": "Drifting past ancient river ghats and bathers in the golden morning light of the Ganges",
                "tag": "Sacred Ghats"
          },
          {
                "url": "https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80",
                "title": "Triveni Sangam Prayagraj & Sarnath",
                "caption": "Holy confluence of Ganga, Yamuna, and Saraswati rivers, plus Sarnath Dhamek Stupa",
                "tag": "Holy Sangam"
          }
    ],
    overview: 'India’s greatest spiritual trinity: the world’s oldest living city Varanasi with its holy Ganga Aarti, the sacred confluence Triveni Sangam in Prayagraj, and the grand Shri Ram Janmabhoomi in Ayodhya.',
    highlights: ['Grand Dashashwamedh Ghat Evening Ganga Aarti from private boat', 'Kashi Vishwanath Temple Corridor Darshan', 'Triveni Sangam holy bath in Prayagraj', 'Shri Ram Janmabhoomi Mandir Darshan in Ayodhya'],
    itinerary: [
      { day: 1, title: 'Arrive Varanasi - Ganga Aarti', desc: 'Transfer to hotel. Evening private boat ride along sacred ghats to witness the spellbinding Ganga Aarti.' },
      { day: 2, title: 'Kashi Vishwanath & Sarnath', desc: 'Early morning boat ride, visit Kashi Vishwanath temple, Sankat Mochan, and Sarnath (Lord Buddha’s first sermon).' },
      { day: 3, title: 'Varanasi to Prayagraj to Ayodhya', desc: 'Drive to Prayagraj for holy boat dip at Triveni Sangam and Anand Bhavan. Proceed to Ayodhya.' },
      { day: 4, title: 'Ayodhya Darshan - Ram Mandir', desc: 'VIP Darshan at Shri Ram Janmabhoomi Temple, Hanuman Garhi, Kanak Bhavan, and Saryu River Aarti.' },
      { day: 5, title: 'Departure Ayodhya / Varanasi', desc: 'Transfer to Ayodhya or Varanasi airport/railway station.' }
    ]
  },
  {
    slug: 'darjeeling-gangtok-himalayan-splendor',
    cat: 'domestic',
    theme: 'Himalayas & Hills',
    title: 'Himalayan Splendor: Darjeeling & Gangtok',
    dest: 'Darjeeling, Gangtok',
    days: '6 Days / 5 Nights',
    durationDays: 6,
    price: 26999,
    originalPrice: 32999,
    badge: 'Popular',
    rating: 4.8,
    reviewsCount: 245,
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
                "title": "Tiger Hill Mt. Kanchenjunga Sunrise",
                "caption": "First dawn rays setting ablaze the world’s 3rd highest peak in hues of crimson and gold",
                "tag": "Kanchenjunga"
          },
          {
                "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
                "title": "Darjeeling Himalayan Toy Train",
                "caption": "UNESCO World Heritage narrow gauge steam locomotive winding through alpine loop curves",
                "tag": "Toy Train"
          },
          {
                "url": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
                "title": "Happy Valley Tea Estates & Rumtek",
                "caption": "Century-old high grown orthodox tea gardens and majestic Sikkim Buddhist monasteries",
                "tag": "Tea & Monasteries"
          },
          {
                "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
                "title": "Tsomgo Glacial Lake at 12,400 ft",
                "caption": "Crystal glacial alpine lake surrounded by snow-bound hills on the way to Nathu La",
                "tag": "Glacial Lake"
          }
    ],
    overview: 'Watch golden sunrise illuminate Mt. Kanchenjunga (world’s 3rd highest peak) from Tiger Hill, ride the heritage UNESCO Toy Train, and visit glacial Tsomgo Lake in Sikkim.',
    highlights: ['Tiger Hill sunrise view of Mt. Kanchenjunga range', 'UNESCO Darjeeling Himalayan Railway Toy Train ride', 'Tsomgo Glacial Lake & Baba Mandir at 12,400 ft in Sikkim', 'Rumtek Monastery & lush tea garden estates'],
    itinerary: [
      { day: 1, title: 'Bagdogra / NJP to Darjeeling (70 km)', desc: 'Scenic climb through tea gardens. Evening at Darjeeling Chowrasta Mall.' },
      { day: 2, title: 'Tiger Hill Sunrise & City Tour', desc: 'Early morning 4 AM drive to Tiger Hill for Kanchenjunga sunrise. Visit Ghoom Monastery, Batasia Loop, and Himalayan Mountaineering Institute.' },
      { day: 3, title: 'Darjeeling to Gangtok (Sikkim)', desc: 'Drive alongside Teesta River to Gangtok. Check in to mountain view hotel. Walk down MG Marg.' },
      { day: 4, title: 'Tsomgo Lake & Baba Mandir Excursion', desc: 'Day trip to high-altitude frozen Tsomgo Lake and holy Baba Mandir near Nathu La border.' },
      { day: 5, title: 'Gangtok Monasteries & Viewpoints', desc: 'Visit Rumtek Monastery, Do Drul Chorten, ropeway ride, and flower exhibition centre.' },
      { day: 6, title: 'Departure Bagdogra / NJP', desc: 'Descent transfer to Bagdogra airport or NJP station.' }
    ]
  },
  {
    slug: 'meghalaya-shillong-cherrapunji-dawki',
    cat: 'domestic',
    theme: 'Nature & Adventure',
    title: 'Abode of Clouds: Shillong, Cherrapunji & Dawki',
    dest: 'Shillong, Cherrapunji, Dawki, Mawlynnong',
    days: '5 Days / 4 Nights',
    durationDays: 5,
    price: 25499,
    originalPrice: 30999,
    badge: 'Explorer Pick',
    rating: 4.9,
    reviewsCount: 198,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
                "title": "Dawki Umngot Glass-Like River",
                "caption": "Crystal clear river so transparent that traditional wooden boats appear to float in air",
                "tag": "Dawki Glass River"
          },
          {
                "url": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
                "title": "Nohkalikai Falls Cherrapunji",
                "caption": "India’s tallest plunge waterfall (1,115 ft) cascading from dramatic green tableland cliffs",
                "tag": "Nohkalikai Falls"
          },
          {
                "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
                "title": "Double Decker Living Root Bridges",
                "caption": "Centuries-old bio-engineering marvel grown from Indian rubber tree roots by Khasi tribes",
                "tag": "Living Root Bridge"
          },
          {
                "url": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
                "title": "Mawlynnong Cleanest Village in Asia",
                "caption": "Immaculate flower-lined village paths, bamboo skywalks, and lush balancing boulders",
                "tag": "Clean Village"
          }
    ],
    overview: 'Boating on the crystal-clear glass-like Umngot river in Dawki, trekking to centuries-old Living Root Bridges, and standing before thunderous Nohkalikai waterfalls.',
    highlights: ['Crystal clear glass boat ride on Umngot River in Dawki', 'Ancient Khasi Single & Double Decker Living Root Bridges', 'Nohkalikai Falls & Mawsmai limestone caves', 'Mawlynnong - Asia’s cleanest village'],
    itinerary: [
      { day: 1, title: 'Guwahati to Shillong (Scotland of the East)', desc: 'Pick up from Guwahati, stop at scenic Umiam Lake (Barapani), arrive in Shillong.' },
      { day: 2, title: 'Shillong to Cherrapunji (Sohra)', desc: 'Explore Elephant Falls, Seven Sisters Falls, Mawsmai Cave, and majestic Nohkalikai Falls.' },
      { day: 3, title: 'Living Root Bridge Trek', desc: 'Guided trek through lush rainforests to marvel at bio-engineered living tree root bridges.' },
      { day: 4, title: 'Dawki Glass River & Mawlynnong', desc: 'Drive to India-Bangladesh border Dawki for boat ride where boats appear floating in air. Tour Mawlynnong clean village.' },
      { day: 5, title: 'Departure Guwahati via Kamakhya', desc: 'Visit sacred Maa Kamakhya Temple in Guwahati before flight drop.' }
    ]
  },
  {
    slug: 'uttarakhand-rishikesh-haridwar-mussoorie',
    cat: 'domestic',
    theme: 'Yoga & Himalayas',
    title: 'Divine Uttarakhand: Rishikesh, Haridwar & Mussoorie',
    dest: 'Haridwar, Rishikesh, Mussoorie',
    days: '5 Days / 4 Nights',
    durationDays: 5,
    price: 21499,
    originalPrice: 25999,
    badge: 'Spiritual & Hills',
    rating: 4.8,
    reviewsCount: 270,
    img: '/images/dest-kedarnath.jpg',
    gallery: [
      '/images/dest-kedarnath.jpg',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "/images/dest-kedarnath.jpg",
                "title": "Sacred Garhwal Himalayas & Kedarnath",
                "caption": "Spiritual mountain valleys and snow-covered peaks of Devbhoomi Uttarakhand",
                "tag": "Devbhoomi"
          },
          {
                "url": "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
                "title": "Har Ki Pauri Maha Aarti Haridwar",
                "caption": "Vibrant evening prayer at the holy Brahmakund on the banks of River Ganga",
                "tag": "Ganga Aarti"
          },
          {
                "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
                "title": "Rishikesh White Water Rafting & Lakshman Jhula",
                "caption": "Grade III & IV rafting adventures and iconic suspension bridges across sacred Ganga",
                "tag": "Rafting & Yoga"
          },
          {
                "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
                "title": "Mussoorie Kempty Falls & Mall Road",
                "caption": "Queen of the Hills with roaring tiered waterfalls and panoramic Doon Valley sunset vistas",
                "tag": "Mussoorie Hills"
          }
    ],
    overview: 'Har Ki Pauri evening Ganga Aarti in holy Haridwar, thrilling white-water rafting in Rishikesh, and cool pine air with mountain views in the Queen of Hills Mussoorie.',
    highlights: ['Har Ki Pauri illuminated Ganga Aarti', 'White water river rafting in Rishikesh & Lakshman Jhula', 'Kempty Falls & Gun Hill ropeway in Mussoorie', 'The Beatles Ashram meditation walk'],
    itinerary: [
      { day: 1, title: 'Delhi to Haridwar - Ganga Aarti', desc: 'Drive to Haridwar. Evening dip and Aarti at Har Ki Pauri.' },
      { day: 2, title: 'Haridwar to Rishikesh (Yoga Capital)', desc: 'Ram Jhula, Lakshman Jhula, Triveni Ghat, and optional white water rafting on River Ganga.' },
      { day: 3, title: 'Rishikesh to Mussoorie (Queen of Hills)', desc: 'Drive up to Mussoorie. Check in and evening walk on historic Mall Road.' },
      { day: 4, title: 'Mussoorie Sightseeing', desc: 'Visit Kempty Falls, Company Garden, Camel’s Back Road, and Lal Tibba.' },
      { day: 5, title: 'Mussoorie to Delhi Departure', desc: 'Descent transfer back to Delhi airport.' }
    ]
  },
  {
    slug: 'ooty-coorg-mysore-southern-serenity',
    cat: 'domestic',
    theme: 'Hills & Coffee',
    title: 'Southern Serenity: Ooty, Coorg & Royal Mysore',
    dest: 'Mysore, Coorg, Ooty',
    days: '6 Days / 5 Nights',
    durationDays: 6,
    price: 26499,
    originalPrice: 31999,
    badge: 'Popular',
    rating: 4.8,
    reviewsCount: 230,
    img: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
                "title": "Ooty Nilgiri Tea Valleys & Doddabetta Peak",
                "caption": "Emerald green tea terraces and cool alpine eucalyptus breezes at 8,650 ft",
                "tag": "Nilgiri Hills"
          },
          {
                "url": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
                "title": "Illuminated Mysore Amba Vilas Palace",
                "caption": "Grand Indo-Saracenic palace dazzling with nearly 100,000 golden incandescent bulbs",
                "tag": "Royal Palace"
          },
          {
                "url": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
                "title": "Coorg Coffee & Cardamom Plantations",
                "caption": "Aromatic coffee estate nature walks and mist-shrouded Abbey Falls in Kodagu",
                "tag": "Coffee Country"
          },
          {
                "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
                "title": "Bylakuppe Golden Temple Monastery",
                "caption": "Second largest Tibetan settlement in the world featuring 40-foot golden Buddha statues",
                "tag": "Tibetan Heritage"
          }
    ],
    overview: 'The royal grandeur of illuminated Mysore Palace, aromatic coffee plantations and Abbey Falls in Coorg, and Queen of the Nilgiris Ooty with its botanical charms.',
    highlights: ['Illuminated grand Mysore Palace & Chamundi Hills', 'Aromatic Coorg coffee plantation stays & Abbey Falls', 'Ooty Lake boating & Doddabetta highest Nilgiri peak', 'Centuries-old Nilgiri Mountain Toy Train ride'],
    itinerary: [
      { day: 1, title: 'Bangalore to Mysore (140 km)', desc: 'Pick up from Bangalore. Visit Mysore Palace and Brindavan Gardens musical fountain.' },
      { day: 2, title: 'Mysore to Coorg (Scotland of India)', desc: 'Drive to Coorg via Golden Temple Buddhist Monastery (Bylakuppe) and Dubare Elephant Camp.' },
      { day: 3, title: 'Coorg Coffee Estates & Waterfalls', desc: 'Visit Abbey Falls, Raja’s Seat sunset point, and private coffee estate walk.' },
      { day: 4, title: 'Coorg to Ooty (Queen of Nilgiris)', desc: 'Scenic climb through Bandipur & Mudumalai wildlife corridors to Ooty.' },
      { day: 5, title: 'Ooty & Coonoor Sightseeing', desc: 'Ooty Botanical Gardens, Doddabetta peak, Sim’s Park, and tea factory.' },
      { day: 6, title: 'Departure Coimbatore / Bangalore', desc: 'Descent transfer for flight/train home.' }
    ]
  },
  {
    slug: 'gujarat-rann-of-kutch-gir-forest',
    cat: 'domestic',
    theme: 'Desert & Wildlife',
    title: 'Colors of Gujarat: White Rann of Kutch & Gir Lion Safari',
    dest: 'Kutch, Gir, Somnath',
    days: '6 Days / 5 Nights',
    durationDays: 6,
    price: 29999,
    originalPrice: 35999,
    badge: 'Unique Desert',
    rating: 4.9,
    reviewsCount: 185,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryDetails: [
          {
                "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
                "title": "Great White Rann of Kutch Salt Desert",
                "caption": "Endless glowing white salt expanse glistening under radiant sunset and full moonlight",
                "tag": "White Rann"
          },
          {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80",
                "title": "Gir National Park Asiatic Lions",
                "caption": "Only natural habitat in the world of wild Asiatic lions observed in open gypsy safaris",
                "tag": "Asiatic Lions"
          },
          {
                "url": "https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80",
                "title": "First Jyotirlinga Somnath Temple",
                "caption": "Ancient seaside sanctum by the Arabian Sea with majestic evening light and sound show",
                "tag": "Jyotirlinga"
          },
          {
                "url": "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80",
                "title": "Kutch Artisans & Kala Dungar",
                "caption": "Handcrafted mirror-work embroidery in Hodka village and panoramic Black Hill views",
                "tag": "Kutch Culture"
          }
    ],
    overview: 'Walk on the endless shimmering white salt desert of Rann of Kutch under a full moon, track the majestic Asiatic Lions in Gir National Park, and visit sacred Somnath.',
    highlights: ['Sunset and full moon walk on the White Rann salt flats', 'Open Jeep Lion Safari inside Gir National Park', 'First Jyotirlinga Somnath Temple seaside Aarti', 'Traditional Kutchi Bhunga tent stay & Rogan art'],
    itinerary: [
      { day: 1, title: 'Arrive Bhuj to White Rann', desc: 'Transfer to Tent City / Dhordo eco-resort. Sunset on the dazzling white salt desert.' },
      { day: 2, title: 'Kutch Artisan Villages & Kala Dungar', desc: 'Visit Black Hill (Kala Dungar) panoramic view and Nirona artisan village.' },
      { day: 3, title: 'Kutch to Sasan Gir (Lion Heartland)', desc: 'Drive south through Saurashtra to Gir National Park.' },
      { day: 4, title: 'Gir Asiatic Lion Jeep Safari', desc: 'Morning open-top gypsy safari to spot wild Asiatic Lions, leopards, and antelopes.' },
      { day: 5, title: 'Somnath Jyotirlinga Temple', desc: 'Visit historic Somnath Temple by the Arabian Sea. Evening light & sound show.' },
      { day: 6, title: 'Departure Rajkot / Ahmedabad', desc: 'Transfer for return journey.' }
    ]
  }
].map(p => ({
  inclusions: baseInclusions,
  exclusions: baseExclusions,
  terms: baseTerms,
  hotel: 'Handpicked 3-Star / 4-Star sanitized hotels & heritage resorts (double sharing with breakfast).',
  ...p
}));

export const SLUG_ALIASES = {
  // Koraput & Deomali variants
  'koraput-deomali-eastern-ghats': 'koraput-deomali-tribal-heartland',
  'koraput-deomali-easterrn-ghats': 'koraput-deomali-tribal-heartland',
  'koraput-deomali': 'koraput-deomali-tribal-heartland',
  'koraput-deomali-valley': 'koraput-deomali-tribal-heartland',
  'koraput-deomali-highest-peak-expedition': 'koraput-deomali-tribal-heartland',
  
  // Bhitarkanika variants
  'bhitarkanika-wildlife-mangrove-safari': 'bhitarkanika-mangroves-crocodile-safari',
  'bhitarkanika-wildlife-mangroves': 'bhitarkanika-mangroves-crocodile-safari',
  'bhitarkanika-safari': 'bhitarkanika-mangroves-crocodile-safari',

  // Chilika Lake variants
  'chilika-lake-gopalpur-sea-beach': 'chilika-lake-satapada-dolphin-cruise',
  'chilika-dolphin-cruise': 'chilika-lake-satapada-dolphin-cruise',
  'chilika-lake': 'chilika-lake-satapada-dolphin-cruise',

  // Similipal variants
  'similipal-tiger-reserve-waterfalls': 'similipal-national-park-tiger-reserve',
  'similipal-tiger-reserve-wildlife-safari': 'similipal-national-park-tiger-reserve',
  'similipal-tiger-reserve': 'similipal-national-park-tiger-reserve',
  'similipal-wildlife-safari': 'similipal-national-park-tiger-reserve',

  // Sambalpur / Hirakud variants
  'sambalpur-hirakud-dam-debrigarh': 'western-odisha-sambalpur-hirakud-wonder',
  'sambalpur-hirakud-dam': 'western-odisha-sambalpur-hirakud-wonder',

  // Diamond Triangle
  'diamond-triangle-ratnagiri-lalitagiri-udaigiri': 'diamond-triangle-buddhist-heritage',

  // Domestic Tours
  'kerala-backwaters-alleppey-munnar': 'kerala-backwaters-munnar-alleppey-houseboat',
  'kerala-backwaters-munnar-hills': 'kerala-backwaters-munnar-alleppey-houseboat',
  'varanasi-ayodhya-prayagraj-pilgrimage': 'spiritual-varanasi-prayagraj-ayodhya',
  'varanasi-ayodhya-prayagraj-spiritual': 'spiritual-varanasi-prayagraj-ayodhya',
  'himachal-delight-shimla-manali-solang': 'himachal-delights-shimla-kullu-manali',
  'himachal-escape-shimla-manali': 'himachal-delights-shimla-kullu-manali',
  'goa-beach-bliss-cruise-heritage': 'goa-sun-sand-sea-luxury-getaway',
  'goa-beaches-heritage-cruise': 'goa-sun-sand-sea-luxury-getaway'
};

export const resolvePackageSlug = (rawSlug) => {
  if (!rawSlug) return '';
  const s = String(rawSlug).trim().toLowerCase();
  if (SLUG_ALIASES[s]) return SLUG_ALIASES[s];

  // Try direct match first
  const direct = packages.find(p => p.slug === s || String(p.id) === s);
  if (direct) return direct.slug;

  // Fuzzy / keyword fallbacks
  if (s.includes('koraput') || s.includes('deomali')) return 'koraput-deomali-tribal-heartland';
  if (s.includes('bhitarkanika')) return 'bhitarkanika-mangroves-crocodile-safari';
  if (s.includes('similipal')) return 'similipal-national-park-tiger-reserve';
  if (s.includes('daringbadi')) return s.includes('mandasaru') ? 'daringbadi-mandasaru-silent-valley-adventure' : 'daringbadi-kashmir-of-odisha';
  if (s.includes('chilika')) return 'chilika-lake-satapada-dolphin-cruise';
  if (s.includes('gopalpur') || s.includes('tampara')) return 'gopalpur-sea-tampara-lake-taratarini';
  if (s.includes('sambalpur') || s.includes('hirakud')) return 'western-odisha-sambalpur-hirakud-wonder';
  if (s.includes('diamond-triangle') || s.includes('ratnagiri')) return 'diamond-triangle-buddhist-heritage';
  if (s.includes('chandipur')) return 'chandipur-beach-kuldiha-sanctuary';
  if (s.includes('keonjhar')) return 'keonjhar-waterfalls-tarini-temple';
  if (s.includes('satkosia')) return 'satkosia-gorge-mahanadi-river-camp';
  if (s.includes('mangalajodi')) return 'mangalajodi-bird-paradise-chilika-winter';
  if (s.includes('rath-yatra')) return 'puri-rath-yatra-special-darshan';
  if (s.includes('puri') || s.includes('konark')) return 'puri-konark-bhubaneswar-golden-triangle';

  // Domestic keywords
  if (s.includes('kashmir') || s.includes('srinagar') || s.includes('gulmarg')) return 'kashmir-paradise-srinagar-gulmarg-pahalgam';
  if (s.includes('kerala') || s.includes('munnar') || s.includes('alleppey')) return 'kerala-backwaters-munnar-alleppey-houseboat';
  if (s.includes('varanasi') || s.includes('ayodhya') || s.includes('prayagraj')) return 'spiritual-varanasi-prayagraj-ayodhya';
  if (s.includes('himachal') || s.includes('manali') || s.includes('shimla')) return 'himachal-delights-shimla-kullu-manali';
  if (s.includes('goa')) return 'goa-sun-sand-sea-luxury-getaway';
  if (s.includes('ladakh') || s.includes('leh') || s.includes('pangong')) return 'leh-ladakh-pangong-lake-nubra-valley';
  if (s.includes('rajasthan') || s.includes('jaipur') || s.includes('jodhpur') || s.includes('udaipur')) return 'royal-rajasthan-jaipur-jodhpur-udaipur';
  if (s.includes('andaman') || s.includes('havelock')) return 'andaman-island-discovery-havelock-neil';
  if (s.includes('darjeeling') || s.includes('gangtok')) return 'darjeeling-gangtok-himalayan-splendor';
  if (s.includes('meghalaya') || s.includes('shillong') || s.includes('cherrapunji')) return 'meghalaya-shillong-cherrapunji-dawki';
  if (s.includes('uttarakhand') || s.includes('rishikesh') || s.includes('mussoorie')) return 'uttarakhand-rishikesh-haridwar-mussoorie';
  if (s.includes('ooty') || s.includes('coorg') || s.includes('mysore')) return 'ooty-coorg-mysore-southern-serenity';
  if (s.includes('kutch') || s.includes('gujarat') || s.includes('gir')) return 'gujarat-rann-of-kutch-gir-forest';

  return s;
};

export const getPackage = (slug) => {
  if (!slug) return undefined;
  const canonical = resolvePackageSlug(slug);
  return packages.find(p => p.slug === canonical || p.slug === slug || String(p.id) === String(slug));
};
export const destinations = [...new Set(packages.map(p => p.dest.split(',')[0].trim()))];

// ================= CAR RENTAL FLEET =================
export {cars} from './vehicleFleet.js';

// ================= ODISHA INTERACTIVE MAP LOCATIONS =================
export const odishaMapLocations = [
  {
    id: 'puri',
    name: 'Puri Jagannath Dham',
    odia: 'ପୁରୀ',
    x: 64,
    y: 65,
    tag: 'Spiritual Capital',
    color: '#FF9800',
    distBBI: '60 km (1 hr 15 min)',
    bestTime: 'October to March (July for Rath Yatra)',
    desc: 'One of the four sacred Char Dhams of Hinduism, home to the 12th-century Lord Jagannath Temple and pristine Golden Beach with Blue Flag certification.',
    topSpots: ['Lord Jagannath Temple', 'Golden Blue Flag Beach', 'Gundicha Temple', 'Raghurajpur Artisan Village'],
    packageSlug: 'puri-konark-bhubaneswar-golden-triangle'
  },
  {
    id: 'konark',
    name: 'Konark Sun Temple',
    odia: 'କୋଣାର୍କ',
    x: 70,
    y: 60,
    tag: 'UNESCO World Heritage',
    color: '#E91E63',
    distBBI: '65 km (1 hr 30 min)',
    bestTime: 'October to March',
    desc: 'A monumental 13th-century chariot of the Sun God carved in stone with 24 exquisitely sculpted wheels pulled by seven horses.',
    topSpots: ['Sun Temple Chariot Wheels', 'Chandrabhaga Clean Beach', 'Konark Dance Festival', 'Ramchandi Marine Drive'],
    packageSlug: 'puri-konark-bhubaneswar-golden-triangle'
  },
  {
    id: 'bhubaneswar',
    name: 'Bhubaneswar Temple City',
    odia: 'ଭୁବନେଶ୍ୱର',
    x: 61,
    y: 53,
    tag: 'Capital & Heritage',
    color: '#2196F3',
    distBBI: '0 km (Hub)',
    bestTime: 'All Year (Winter is best)',
    desc: 'Known as Ekamra Kshetra, boasting over 500 ancient Kalinga architectural temples alongside modern infrastructure, smart city amenities, and Nandankanan Zoo.',
    topSpots: ['Lingaraj Temple', 'Mukteswar Temple', 'Khandagiri & Udayagiri Caves', 'Dhauli Shanti Stupa'],
    packageSlug: 'grand-odisha-heritage-spiritual-circuit'
  },
  {
    id: 'chilika',
    name: 'Chilika Lake & Satapada',
    odia: 'ଚିଲିକା',
    x: 55,
    y: 68,
    tag: 'Lagoon & Dolphins',
    color: '#00BCD4',
    distBBI: '105 km (2 hr 15 min)',
    bestTime: 'November to February',
    desc: 'Asia’s largest brackish water lagoon, a Ramsar wetland sanctuary famous for rare Irrawaddy dolphins and millions of winter migratory birds.',
    topSpots: ['Satapada Dolphin Point', 'Kalijai Island Shrine', 'Mangalajodi Bird Sanctuary', 'Rajhans Sea Mouth'],
    packageSlug: 'chilika-lake-satapada-dolphin-cruise'
  },
  {
    id: 'daringbadi',
    name: 'Daringbadi Hill Station',
    odia: 'ଦାରିଙ୍ଗବାଡ଼ି',
    x: 36,
    y: 64,
    tag: 'Kashmir of Odisha',
    color: '#4CAF50',
    distBBI: '245 km (5 hrs 30 min)',
    bestTime: 'October to February',
    desc: 'Situated at 3,000 ft in Kandhamal, offering chilly winter mornings, rolling pine forests, aromatic coffee plantations, and mist-covered waterfalls.',
    topSpots: ['Pine Forests & Coffee Estates', 'Midubanda Waterfall', 'Hill View Sunset Park', 'Mandasaru Silent Valley'],
    packageSlug: 'daringbadi-kashmir-of-odisha'
  },
  {
    id: 'bhitarkanika',
    name: 'Bhitarkanika National Park',
    odia: 'ଭିତରକନିକା',
    x: 77,
    y: 42,
    tag: 'Mangroves & Crocodiles',
    color: '#8BC34A',
    distBBI: '145 km (3 hrs 30 min)',
    bestTime: 'October to March',
    desc: 'Odisha’s Amazon: India’s second largest mangrove wetland, boasting giant 20-foot saltwater crocodiles, kingfishers, and Gahirmatha turtle beach.',
    topSpots: ['Dangamal Crocodile Breeding Station', 'Khola Creek Boat Safari', 'Gahirmatha Olive Ridley Sanctuary', 'Bird Island (Bagagahana)'],
    packageSlug: 'bhitarkanika-mangroves-crocodile-safari'
  },
  {
    id: 'similipal',
    name: 'Similipal Tiger Reserve',
    odia: 'ଶିମିଳିପାଳ',
    x: 69,
    y: 20,
    tag: 'Tigers & Waterfalls',
    color: '#FF5722',
    distBBI: '270 km (5 hrs 45 min)',
    bestTime: 'November to May',
    desc: 'UNESCO Biosphere Reserve featuring the unique melanistic Royal Bengal tigers, towering Barehipani and Joranda cascades, and dense Sal forests.',
    topSpots: ['Barehipani Waterfall (399m)', 'Joranda Waterfall', '4x4 Jungle Jeep Safari', 'Baripada Chhau Dance Heritage'],
    packageSlug: 'similipal-national-park-tiger-reserve'
  },
  {
    id: 'koraput',
    name: 'Koraput & Deomali Peak',
    odia: 'କୋରାପୁଟ',
    x: 18,
    y: 84,
    tag: 'Highest Peak & Tribes',
    color: '#9C27B0',
    distBBI: '480 km (9 hrs or Overnight Train)',
    bestTime: 'October to March',
    desc: 'Home to Deomali (Odisha’s highest mountain at 5,485 ft), Duduma roaring falls, ancient tribal weekly haats, and rich coffee plantations.',
    topSpots: ['Deomali Peak Summit', 'Duduma Waterfalls', 'Sabara Srikhetra', 'Gupteswar Cave Temple'],
    packageSlug: 'koraput-deomali-tribal-heartland'
  },
  {
    id: 'sambalpur',
    name: 'Sambalpur & Hirakud Dam',
    odia: 'ସମ୍ବଲପୁର',
    x: 32,
    y: 36,
    tag: 'World’s Longest Dam',
    color: '#3F51B5',
    distBBI: '290 km (5 hrs via NH55)',
    bestTime: 'October to March',
    desc: 'The cultural powerhouse of Western Odisha with the 25 km long Hirakud Dam, Maa Samaleswari Temple, and renowned Sambalpuri handloom Ikat sarees.',
    topSpots: ['Hirakud Dam Gandhi Minar', 'Leaning Temple of Huma', 'Maa Samaleswari Shrine', 'Debrigarh Wildlife Sanctuary'],
    packageSlug: 'western-odisha-sambalpur-hirakud-wonder'
  },
  {
    id: 'gopalpur',
    name: 'Gopalpur-on-Sea & Tampara',
    odia: 'ଗୋପାଳପୁର',
    x: 46,
    y: 78,
    tag: 'Historic Colonial Beach',
    color: '#009688',
    distBBI: '165 km (3 hrs)',
    bestTime: 'September to March',
    desc: 'Tranquil sea breezes, historic British colonial port lighthouse, cashew plantations, and adrenaline-pumping water sports on freshwater Tampara Lake.',
    topSpots: ['Gopalpur Lighthouse Beach', 'Tampara Lake Water Sports', 'Maa Taratarini Hilltop Shrine', 'Rambha Bay Resort'],
    packageSlug: 'gopalpur-sea-tampara-lake-taratarini'
  },
  {
    id: 'chandipur',
    name: 'Chandipur & Kuldiha',
    odia: 'ଚାନ୍ଦିପୁର',
    x: 78,
    y: 28,
    tag: 'Vanishing Sea Bed',
    color: '#673AB7',
    distBBI: '205 km (3 hrs 45 min)',
    bestTime: 'October to March',
    desc: 'A natural curiosity where the sea recedes up to 5 km during low tide twice daily, allowing you to walk right on the seabed.',
    topSpots: ['Receding Sea phenomenon', 'Kuldiha Elephant Forest', 'Panchalingeswar Temple', 'Khirachora Gopinath Temple'],
    packageSlug: 'chandipur-beach-kuldiha-sanctuary'
  },
  {
    id: 'satkosia',
    name: 'Satkosia Tiger Reserve',
    odia: 'ସାତକୋଶିଆ',
    x: 44,
    y: 48,
    tag: 'Mahanadi River Gorge',
    color: '#795548',
    distBBI: '125 km (2 hrs 45 min)',
    bestTime: 'November to April',
    desc: 'A scenic 22 km long gorge cut through the Eastern Ghats by the Mahanadi river, offering tent camping on sandbars and gharial crocodile spotting.',
    topSpots: ['Mahanadi River Gorge Boating', 'Gharial & Mugger Crocodile Sanctuary', 'Badmul Eco-Cottages', 'Forest Canopy Treks'],
    packageSlug: 'satkosia-gorge-mahanadi-river-camp'
  }
];

// ================= ALL-INDIA POPULAR CIRCUITS =================
export const indiaCircuits = [
  {
    id: 'golden-triangle',
    title: 'Golden Triangle Circuit',
    route: 'Delhi · Agra · Jaipur',
    tag: 'Most Iconic',
    desc: 'The definitive introduction to India: Red Fort, the magical Taj Mahal, and Jaipur’s royal palaces.',
    img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    slug: 'golden-triangle-delhi-agra-jaipur'
  },
  {
    id: 'kashmir-paradise',
    title: 'Kashmir Valley Circuit',
    route: 'Srinagar · Gulmarg · Pahalgam',
    tag: 'Heaven on Earth',
    desc: 'Glide on Dal Lake houseboats, take high-altitude cable cars to Apharwat, and soak in pine valleys.',
    img: '/images/pkg-kashmir.jpg',
    slug: 'kashmir-paradise-srinagar-gulmarg-pahalgam'
  },
  {
    id: 'kerala-backwaters',
    title: 'Kerala Gods Own Country',
    route: 'Munnar · Thekkady · Alleppey',
    tag: 'Tropical Bliss',
    desc: 'Lush tea plantations, spice gardens, and tranquil private houseboat cruises on palm-lined backwaters.',
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    slug: 'kerala-backwaters-munnar-alleppey-houseboat'
  },
  {
    id: 'royal-rajasthan',
    title: 'Royal Heritage Rajasthan',
    route: 'Jaipur · Jodhpur · Udaipur',
    tag: 'Maharaja Splendor',
    desc: 'Impregnable cliff-top fortresses, marble lake palaces, and rich desert folk music and hospitality.',
    img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    slug: 'royal-rajasthan-jaipur-jodhpur-udaipur'
  },
  {
    id: 'goa-coastal',
    title: 'Goa Coastal Holiday',
    route: 'North Goa · South Goa',
    tag: 'Beaches & Shacks',
    desc: 'Golden beaches, historic Portuguese churches, vibrant markets, and sunset river cruises.',
    img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    slug: 'goa-sun-sand-sea-luxury-getaway'
  },
  {
    id: 'leh-ladakh',
    title: 'Leh Ladakh High Passes',
    route: 'Leh · Nubra · Pangong Tso',
    tag: 'High Altitude',
    desc: 'World’s highest motorable roads, surreal azure glacial lakes, and Buddhist cliffside gompas.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    slug: 'leh-ladakh-pangong-lake-nubra-valley'
  },
  {
    id: 'varanasi-ayodhya',
    title: 'Sacred Ganga & Ram Janmabhoomi',
    route: 'Varanasi · Prayagraj · Ayodhya',
    tag: 'Sacred Pilgrimage',
    desc: 'Ganga Aarti at Dashashwamedh Ghat, Triveni Sangam holy bath, and the majestic Ayodhya Ram Mandir.',
    img: '/images/pkg-ayodhya-rammandir.jpg',
    slug: 'spiritual-varanasi-prayagraj-ayodhya'
  },
  {
    id: 'andaman-islands',
    title: 'Andaman Tropical Islands',
    route: 'Port Blair · Havelock · Neil',
    tag: 'Turquoise Waters',
    desc: 'Asia’s best beaches, coral reef scuba diving, luxury catamaran cruises, and historic Cellular Jail.',
    img: '/images/banner-tropical-islands.jpg',
    slug: 'andaman-island-discovery-havelock-neil'
  }
];

// ================= TESTIMONIALS =================
export const testimonials = [
  {
    id: 1,
    name: 'Rajesh & Swati Kumar',
    city: 'Kolkata, West Bengal',
    tour: 'Puri · Konark · Bhubaneswar Golden Triangle',
    rating: 5,
    date: 'February 2026',
    comment: 'Our Dream Trip made our 4-day pilgrimage so smooth! Our driver Bikash was extremely knowledgeable, and the special Panda assistance at Jagannath Temple saved us hours of standing in queues.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'Dr. Anand Iyer',
    city: 'Bengaluru, Karnataka',
    tour: 'Daringbadi - Kashmir of Odisha Hill Retreat',
    rating: 5,
    date: 'January 2026',
    comment: 'We did not know Odisha had such a stunning hill station! Daringbadi was chilly, misty, and peaceful. The hotel arranged was spotless and the coffee plantation walk was unforgettable.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    name: 'Pooja & Rohan Sharma',
    city: 'New Delhi',
    tour: 'Kashmir Paradise: Srinagar & Gulmarg',
    rating: 5,
    date: 'March 2026',
    comment: 'Booked our Kashmir honeymoon with Our Dream Trip and it exceeded all expectations! The houseboat stay on Dal Lake was magical and our driver in Gulmarg was very polite and punctual.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 4,
    name: 'Subhashree Mohanty',
    city: 'Bhubaneswar, Odisha',
    tour: 'Chilika Lake & Satapada Dolphin Cruise',
    rating: 5,
    date: 'April 2026',
    comment: 'Took a weekend family trip with elderly parents. The vehicle provided (Innova Crysta) was brand new, sanitized, and our driver handled everything with extreme care and warmth.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 5,
    name: 'Amitabh & Neha Sen',
    city: 'Mumbai, Maharashtra',
    tour: 'Bhitarkanika Mangroves & Crocodile Safari',
    rating: 5,
    date: 'May 2026',
    comment: 'The Mini Amazon of India is truly surreal! Spotting giant saltwater crocodiles and exotic kingfishers up close from our private boat was unforgettable. Excellent eco-resort and fresh food.',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 6,
    name: 'Venkatesh Rao & Family',
    city: 'Hyderabad, Telangana',
    tour: 'Varanasi · Ayodhya · Prayagraj Pilgrimage',
    rating: 5,
    date: 'June 2026',
    comment: 'Flawless arrangements from start to finish! Our elderly parents had seamless VIP darshan at Kashi Vishwanath and Ayodhya Ram Mandir. Driver was patient, polite, and very respectful.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
  }
];

// ================= FREQUENTLY ASKED QUESTIONS =================
export const faqs = [
  {
    q: 'How do I book a tour package with Our Dream Trip?',
    a: 'You can book directly by clicking "Book Now" on any package, submitting the enquiry form, or instantly contacting our travel coordinators on WhatsApp (+91 77900 08877). We customize the itinerary to your dates, provide a transparent quote, and confirm with an initial deposit.'
  },
  {
    q: 'Can the tour itineraries be customized to our preferences?',
    a: 'Absolutely! Every single package can be 100% tailor-made. Whether you want to add an extra day at Chilika Lake, upgrade to a luxury 5-star beachfront resort, or include specific temple pujas, our local experts design it for you.'
  },
  {
    q: 'What is the best time of year to visit Odisha?',
    a: 'The ideal season for exploring Odisha is from October to March, when the weather is pleasantly cool and perfect for temple sightseeing, wildlife safaris, and beach strolls. The world-famous Puri Rath Yatra takes place during June/July (monsoon).'
  },
  {
    q: 'Are your vehicles sanitized and drivers verified?',
    a: 'Yes. All our vehicles (Sedans, SUVs, and Tempo Travellers) are deep cleaned and sanitized before every trip. Our chauffeurs are police-verified, courteous, and well-versed in local heritage routes and safety protocols.'
  },
  {
    q: 'What are your cancellation and refund terms?',
    a: 'We offer a 100% full refund on package cancellations made 15 or more days prior to your journey date. For cancellations within 7 to 14 days, a nominal 20% fee applies. Our policy ensures maximum flexibility for travelers.'
  }
];

export const CONTACT = {
  phone: '+91 77900 08877',
  tel: '+917790008877',
  altPhone: '+91 77900 08877',
  whatsapp: '+917790008877',
  whatsappRaw: '917790008877',
  whatsappLink: 'https://wa.me/917790008877',
  email: 'ourdreamtrip1@gmail.com',
  bookingEmail: 'ourdreamtrip1@gmail.com',
  website: 'https://www.ourdreamtrip.com',
  domain: 'ourdreamtrip.com',
  brandName: 'Our Dream Trip',
  tagline: 'Holidays & Tours · DMC for Odisha',
  facebook: 'https://www.facebook.com/share/1A2pnj6LXS/',
  instagram: 'https://www.instagram.com/our_dream__trip?gwpx=cmRlcmY4emlobjUx',
  youtube: 'https://youtube.com/@our_dream_trip?si=74ysRuVEnDILlFrK',
  address: 'Plot No. 42, Jayadev Vihar, Near Fortune Tower, Bhubaneswar, Odisha 751013, India',
  regNumber: 'DOT/ODISHA/TOUR/2016-8941',
  supportHours: '24 Hours / 7 Days Active Concierge'
};
