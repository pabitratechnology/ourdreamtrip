import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbFile = path.join(__dirname, 'db.json');

// Initial seed blogs
const initialBlogs = [
  {
    id: 'blog-1',
    slug: 'top-10-hidden-gems-and-waterfalls-of-odisha',
    title: 'Top 10 Hidden Gems & Waterfalls of Odisha You Must Visit',
    excerpt: 'From the sub-zero coffee hills of Daringbadi to the monumental Barehipani cascade in Similipal, explore Odisha’s most breathtaking secret nature retreats.',
    coverImage: '/images/pkg-daringbadi.jpg',
    category: 'Nature & Hills',
    tags: ['Daringbadi', 'Similipal', 'Waterfalls', 'Eastern Ghats'],
    author: 'Priya Rath (Local Travel Expert)',
    publishedAt: '2026-11-18',
    status: 'published',
    views: 482,
    content: `
### Discovering the Untouched Splendors of Odisha

When people think of Odisha, the sacred grand temple of Lord Jagannath in Puri and the architectural wonder of the Konark Sun Temple are usually the first to come to mind. But beyond these celebrated heritage icons lies an astonishing realm of mist-shrouded mountain valleys, roaring tiered waterfalls, and untouched pine forests.

#### 1. Daringbadi - The Kashmir of Odisha
Perched at an elevation of 3,000 feet in the Kandhamal district, Daringbadi is the only place in Odisha that experiences sub-zero winter temperatures and morning frost. Stroll through fragrant organic Arabica coffee and black pepper plantations, and visit Midubanda Waterfall nestled deep inside the mountain woods.

#### 2. Barehipani Waterfall in Similipal
Plunging from a height of 1,308 feet over two monumental tiers of metamorphic rock, Barehipani is India’s second-highest waterfall. Located inside the core biosphere of Similipal National Park, reaching the viewpoint offers thrilling sightings of wild elephants, spotted deer, and hornbills.

#### 3. Mandasaru Silent Valley Gorge
Hailed as the "Grand Canyon of Odisha", Mandasaru is a dramatic subtropical gorge enclosed by steep cliff faces. A wooden watchtower and hanging suspension bridge allow travelers to gaze over endless cloud-draped rainforest canopies.

#### 4. Duduma Waterfall & Machhkund Canyon
In the tribal highlands of Koraput, the Machhkund River thunders down a 574-foot vertical drop. The surrounding weekly haats (tribal markets) provide a rare window into the indigenous lifestyle of the Bonda and Gadaba communities.
    `
  },
  {
    id: 'blog-2',
    slug: 'ultimate-guide-puri-jagannath-rath-yatra',
    title: 'The Ultimate Guide to Puri Rath Yatra: Chariots, Rituals & Travel Tips',
    excerpt: 'Everything you need to know about witnessing the world-famous annual chariot festival of Lord Jagannath, Balabhadra, and Devi Subhadra in Puri.',
    coverImage: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80',
    category: 'Spiritual & Heritage',
    tags: ['Puri', 'Rath Yatra', 'Lord Jagannath', 'Char Dham'],
    author: 'Pandit S. C. Mohapatra',
    publishedAt: '2026-11-12',
    status: 'published',
    views: 890,
    content: `
### The World's Grandest Chariot Festival

Every year during the monsoon month of Ashadha (June/July), the coastal holy city of Puri comes alive with the divine spectacle of Rath Yatra. Unlike other Hindu shrines where deities remain inside the sanctum sanctorum, Lord Jagannath, along with elder brother Balabhadra and sister Subhadra, steps out onto the Grand Road (Badadanda) to grant darshan to every devotee regardless of caste, creed, or nationality.

#### The Three Colossal Chariots
Each deity rides a uniquely crafted wooden chariot constructed anew each year without a single iron nail:
- **Nandighosa (Lord Jagannath)**: 45 feet high, 16 massive wheels, draped in red and yellow cloth.
- **Taladhwaja (Lord Balabhadra)**: 44 feet high, 14 wheels, draped in red and blue-green cloth.
- **Darpadalana (Devi Subhadra)**: 43 feet high, 12 wheels, draped in red and black cloth.

#### Key Rituals to Experience
1. **Snana Yatra**: The sacred bathing ceremony on the full moon day preceding Rath Yatra.
2. **Pahandi Bije**: The rhythmic, swaying procession bringing the deities down the temple steps to the chariots.
3. **Chhera Panhara**: The royal ceremonial sweeping of the chariot platforms with a gold broom by the Gajapati Maharaja of Puri.
4. **Bahuda Yatra**: The return chariot journey 9 days later.

#### Essential Tips for Travelers
- Book hotel rooms and reserved rooftop viewing galleries at least 3-4 months in advance.
- Wear lightweight cotton clothing and keep electrolyte water handy.
- Opt for our VIP escorted Panda assistance packages for hassle-free darshan.
    `
  },
  {
    id: 'blog-3',
    slug: 'chilika-lake-birdwatchers-paradise-and-dolphin-cruise',
    title: 'Chilika Lake & Mangalajodi: A Birdwatcher’s Dream & Dolphin Haven',
    excerpt: 'Explore Asia’s largest coastal lagoon where rare Irrawaddy dolphins leap and 1.5 million migratory waterfowl flock from Siberia every winter.',
    coverImage: '/images/hero-chilika-lake-lagoon.jpg',
    category: 'Wildlife & Safari',
    tags: ['Chilika', 'Dolphins', 'Mangalajodi', 'Birdwatching'],
    author: 'Debasish Panda (Naturalist)',
    publishedAt: '2026-11-05',
    status: 'published',
    views: 630,
    content: `
### Asia's Premier Wetland Biosphere

Spread over 1,100 square kilometers across Puri, Khurda, and Ganjam districts, Chilika Lake is a designated Ramsar Wetland of International Importance. Its unique brackish ecosystem—fed by 52 rivers and streams and connected to the Bay of Bengal—supports an extraordinary biodiversity found nowhere else in India.

#### Irrawaddy Dolphin Watching at Satapada
Satapada, located 50 km from Puri, is the prime spot for viewing the rare and endangered Irrawaddy dolphin (Orcaella brevirostris). Boarding an authorized motorized catamaran boat, visitors can watch dolphins breaching in the deep channels near Rajhans Island.

#### The Magic of Mangalajodi in Winter
From November through March, the freshwater marshes of Mangalajodi turn into a breathtaking symphony of wings and birdsong. Over 160 species of migratory birds—including Northern Pintails, Purple Swamphens, Garganeys, and Eurasian Wigeons—fly across the Himalayas to winter in Chilika's calm shallows.
    `
  },
  {
    id: 'blog-4',
    slug: 'golden-triangle-delhi-agra-jaipur-budget-and-guide',
    title: 'The Classic Golden Triangle Tour: Delhi, Agra & Jaipur Planning Guide',
    excerpt: 'A comprehensive travel blueprint covering the Taj Mahal at sunrise, Jaipur’s hilltop forts, Delhi’s historic monuments, and private chauffeur options.',
    coverImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    category: 'Travel Guide',
    tags: ['Golden Triangle', 'Taj Mahal', 'Jaipur', 'Delhi'],
    author: 'Rajiv Sharma (Tour Director)',
    publishedAt: '2026-10-28',
    status: 'published',
    views: 1120,
    content: `
### India's Most Iconic Holiday Circuit

For first-time visitors and family travelers seeking to experience royal palaces, Mughal architecture, and lively bazaars, the Golden Triangle connecting Delhi, Agra, and Jaipur remains unmatched.

#### 5-Day Ideal Itinerary Breakdown
- **Day 1**: Arrival in Delhi. Visit India Gate, Qutub Minar, and drive past Red Fort.
- **Day 2**: Drive via Yamuna Expressway to Agra. Sunset at the red sandstone Agra Fort.
- **Day 3**: Sunrise at the Taj Mahal. Drive to Jaipur with a stop at Fatehpur Sikri.
- **Day 4**: Amber Fort elephant/jeep ride, Hawa Mahal photo stop, and City Palace.
- **Day 5**: Return drive to Delhi for departure.
    `
  }
];

// Initial gallery items
const initialGallery = [
  {
    id: 'gal-1',
    title: 'Konark Sun Temple UNESCO Chariot Wheel',
    url: '/images/hero-konark-golden-temple.jpg',
    category: 'Temples',
    tag: 'UNESCO Monument',
    caption: '13th-century stone carvings representing the 24 wheels of the cosmic solar chariot.'
  },
  {
    id: 'gal-2',
    title: 'Puri Golden Sand Beach Blue Flag Coast',
    url: '/images/hero-puri-golden-beach.jpg',
    category: 'Beaches',
    tag: 'Coastal Bliss',
    caption: 'Pristine Blue Flag certified golden sand beach on the Bay of Bengal.'
  },
  {
    id: 'gal-3',
    title: 'Irrawaddy Dolphins in Chilika Lake',
    url: '/images/hero-chilika-lake-lagoon.jpg',
    category: 'Wildlife',
    tag: 'Wildlife Cruise',
    caption: 'Rare endangered Irrawaddy dolphins surfacing in the tranquil waters of Satapada.'
  },
  {
    id: 'gal-4',
    title: 'Misty Pine Forest Walk in Daringbadi',
    url: '/images/pkg-daringbadi.jpg',
    category: 'Hills',
    tag: 'Hill Station',
    caption: 'Scenic highland pine trails and coffee plantations in Odisha’s winter retreat.'
  },
  {
    id: 'gal-5',
    title: 'Bhitarkanika Mangrove Delta Creeks',
    url: '/images/pkg-bhitarkanika-aerial.jpg',
    category: 'Wildlife',
    tag: 'Mangroves',
    caption: 'India’s second largest mangrove wetland network traversed by private safari boats.'
  },
  {
    id: 'gal-6',
    title: 'Shri Ram Janmabhoomi Mandir Ayodhya',
    url: '/images/pkg-ayodhya-rammandir.jpg',
    category: 'Temples',
    tag: 'Sacred India',
    caption: 'Magnificent pink sandstone temple complex dedicated to Lord Rama in Ayodhya.'
  },
  {
    id: 'gal-7',
    title: 'Dal Lake Shikara Boat in Kashmir Valley',
    url: '/images/pkg-kashmir.jpg',
    category: 'Hills',
    tag: 'Himalayas',
    caption: 'Peaceful Shikara boat ride against snow-clad mountain peaks in Srinagar.'
  },
  {
    id: 'gal-8',
    title: 'Puri Jagannath Temple & Family Pilgrimage',
    url: '/images/pkg-odisha-family.jpg',
    category: 'Culture',
    tag: 'Heritage',
    caption: 'Spiritual family tour at the world-famous Lord Jagannath Dham Puri.'
  }
];

// Initial bookings sample
const initialBookings = [
  {
    id: 'ODT-2026-8491',
    source: 'Hero Quick Enquiry',
    destination: 'Puri, Konark & Bhubaneswar (Golden Triangle)',
    travelDate: '2026-12-05',
    travellers: 4,
    guestName: 'Anand Verma',
    guestPhone: '+91 98765 43210',
    guestEmail: 'anand.verma@example.com',
    packageSlug: 'puri-konark-bhubaneswar-golden-triangle',
    packageTitle: 'Puri · Konark · Bhubaneswar Golden Triangle',
    estimatedCost: 47996,
    status: 'new',
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    notes: 'Requested VIP Darshan at Jagannath Temple and sea-facing hotel in Puri.'
  },
  {
    id: 'ODT-2026-8490',
    source: 'Package Booking Page',
    destination: 'Daringbadi, Kandhamal',
    travelDate: '2026-12-18',
    travellers: 2,
    guestName: 'Dr. Debabrata Mishra',
    guestPhone: '+91 94370 11223',
    guestEmail: 'dmishra@example.com',
    packageSlug: 'daringbadi-kashmir-of-odisha',
    packageTitle: 'Daringbadi - Kashmir of Odisha Hill Retreat',
    estimatedCost: 18998,
    status: 'contacted',
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    notes: 'Contacted on WhatsApp. Shared 3-day itinerary and quote. Awaiting flight confirmation.'
  },
  {
    id: 'ODT-2026-8488',
    source: 'Hero Quick Enquiry',
    destination: 'Chilika, Satapada',
    travelDate: '2026-11-30',
    travellers: 3,
    guestName: 'Sunita & Ramesh Patra',
    guestPhone: '+91 99370 88776',
    guestEmail: 'sunita.patra@gmail.com',
    packageSlug: 'chilika-lake-satapada-dolphin-cruise',
    packageTitle: 'Chilika Lake & Satapada Dolphin Cruise',
    estimatedCost: 19497,
    status: 'confirmed',
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
    notes: 'Confirmed! 25% advance received via UPI. Swift Dzire and driver Manoranjan assigned.'
  }
];

// Initial contacts sample
const initialContacts = [
  {
    id: 'cnt-1',
    name: 'Manoj Tripathy',
    email: 'manoj.tripathy@yahoo.com',
    phone: '+91 98610 99881',
    subject: 'Corporate Tour for 25 people in January',
    message: 'We are planning a 4-day corporate outing from Kolkata to Puri and Chilika. Need AC Tempo Travellers, 4-star hotel conference setup, and sightseeing.',
    status: 'replied',
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString()
  },
  {
    id: 'cnt-2',
    name: 'Ritu Agarwal',
    email: 'ritu.agarwal@outlook.com',
    phone: '+91 97780 44556',
    subject: 'Senior Citizen VIP Pilgrimage Puri',
    message: 'Need wheelchair assistance and temple panda for my elderly parents for Jagannath Temple Darshan on 15th December.',
    status: 'new',
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
  }
];

const dbFile = process.env.DB_PATH || path.join(__dirname, 'db.json');
const backupFile = path.join(__dirname, 'db.backup.json');
const backupDir = path.join(__dirname, 'backups');

// Ensure backups directory exists
if (!fs.existsSync(backupDir)) {
  try { fs.mkdirSync(backupDir, { recursive: true }); } catch (_) {}
}

// Load or initialize DB with automatic resilience, backup recovery, and persistence
export function getDb() {
  let db = null;

  // 1. Try reading the primary database file
  if (fs.existsSync(dbFile)) {
    try {
      const content = fs.readFileSync(dbFile, 'utf8');
      if (content && content.trim().length > 10) {
        db = JSON.parse(content);
      }
    } catch (err) {
      console.error('⚠️ Warning: db.json was unreadable or corrupted:', err.message);
    }
  }

  // 2. If primary dbFile was missing or corrupted, attempt recovery from db.backup.json
  if (!db && fs.existsSync(backupFile)) {
    try {
      console.log('🔄 Attempting recovery from db.backup.json...');
      const backupContent = fs.readFileSync(backupFile, 'utf8');
      if (backupContent && backupContent.trim().length > 10) {
        db = JSON.parse(backupContent);
        // Resave restored content to primary file
        fs.writeFileSync(dbFile, JSON.stringify(db, null, 2), 'utf8');
        console.log('✅ Successfully recovered database from backup!');
      }
    } catch (bErr) {
      console.error('Failed to recover from backup:', bErr.message);
    }
  }

  // 3. Fallback to initial seed if no database exists anywhere
  if (!db) {
    db = {
      bookings: initialBookings,
      blogs: initialBlogs,
      gallery: initialGallery,
      packages: [],
      contacts: initialContacts,
      admin: {
        id: 'admin-1',
        username: process.env.ADMIN_USER || 'odt_manager',
        email: 'ourdreamtrip1@gmail.com',
        passwordHash: process.env.ADMIN_PASS || 'Odishatrip@2026#Secure',
        name: 'Our Dream Trip Administrator',
        role: 'superadmin'
      }
    };
    try {
      fs.writeFileSync(dbFile, JSON.stringify(db, null, 2), 'utf8');
      fs.writeFileSync(backupFile, JSON.stringify(db, null, 2), 'utf8');
    } catch (wErr) {
      console.error('Error writing initial db:', wErr);
    }
    return db;
  }

  // 4. Ensure all collections exist
  if (!Array.isArray(db.bookings)) db.bookings = [];
  if (!Array.isArray(db.blogs)) db.blogs = [];
  if (!Array.isArray(db.gallery)) db.gallery = [];
  if (!Array.isArray(db.packages)) db.packages = [];
  if (!Array.isArray(db.contacts)) db.contacts = [];
  if (!db.admin) {
    db.admin = {
      id: 'admin-1',
      username: process.env.ADMIN_USER || 'odt_manager',
      email: 'ourdreamtrip1@gmail.com',
      passwordHash: process.env.ADMIN_PASS || 'Odishatrip@2026#Secure',
      name: 'Our Dream Trip Administrator',
      role: 'superadmin'
    };
  }

  return db;
}

// Save DB with dual redundancy: primary file + rolling backup + daily snapshot
export function saveDb(data) {
  try {
    const serialized = JSON.stringify(data, null, 2);
    // Write primary file
    fs.writeFileSync(dbFile, serialized, 'utf8');

    // Dual redundancy: update local backup
    fs.writeFileSync(backupFile, serialized, 'utf8');

    // Daily snapshot (once per day)
    try {
      const today = new Date().toISOString().split('T')[0];
      const dailyBackupPath = path.join(backupDir, `db-${today}.json`);
      if (!fs.existsSync(dailyBackupPath)) {
        fs.writeFileSync(dailyBackupPath, serialized, 'utf8');
      }
    } catch (_) {}

    return true;
  } catch (err) {
    console.error('Error saving db.json:', err);
    return false;
  }
}
