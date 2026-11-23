import express from 'express';
import { getDb } from '../data/db.js';

const router = express.Router();

// GET /api/packages - List all tour packages
router.get('/', (req, res) => {
  const db = getDb();
  let pkgs = db.packages || [];
  const { cat, theme, search } = req.query;

  if (cat && cat !== 'all') {
    pkgs = pkgs.filter(p => p.cat === cat);
  }

  if (theme && theme !== 'all') {
    pkgs = pkgs.filter(p => (p.theme || '').toLowerCase().includes(theme.toLowerCase()));
  }

  if (search) {
    const q = search.toLowerCase();
    pkgs = pkgs.filter(p =>
      (p.title && p.title.toLowerCase().includes(q)) ||
      (p.dest && p.dest.toLowerCase().includes(q)) ||
      (p.overview && p.overview.toLowerCase().includes(q))
    );
  }

  res.json({ success: true, count: pkgs.length, packages: pkgs });
});

// Known aliases and fuzzy resolver
const SLUG_ALIASES = {
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

const resolvePackageSlug = (rawSlug, pkgs) => {
  if (!rawSlug) return '';
  const s = String(rawSlug).trim().toLowerCase();
  if (SLUG_ALIASES[s]) return SLUG_ALIASES[s];

  // Try direct match first
  const direct = pkgs.find(p => p.slug === s || String(p.id) === s);
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

// GET /api/packages/:slug - Get single package by slug or id
router.get('/:slug', (req, res) => {
  const db = getDb();
  const pkgs = db.packages || [];
  const { slug } = req.params;
  const canonical = resolvePackageSlug(slug, pkgs);

  const pkg = pkgs.find(p => p.slug === canonical || p.slug === slug || String(p.id) === String(slug));

  if (!pkg) {
    return res.status(404).json({ success: false, error: 'Tour package not found' });
  }

  res.json({ success: true, package: pkg });
});

export default router;
