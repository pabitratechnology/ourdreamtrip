import {useLocation, Link} from 'react-router-dom';
import {FaHome, FaChevronRight} from 'react-icons/fa';
import {packages, cars} from '../data/packages.js';

const ROUTE_NAME_MAP = {
  'about-us': 'About Us',
  'odisha-tour-packages': 'Odisha Tour Packages',
  'domestic-tour-packages': 'Incredible India Tours',
  'car-rental': 'Car & Coach Rental Fleet',
  'gallery': 'Travel Photo Gallery',
  'contact-us': 'Contact Us',
  'book-your-trip': 'Book Your Trip Online',
  'search-results': 'Search Results',
  'privacy-policy': 'Privacy Policy',
  'terms-and-conditions': 'Terms of Service',
  'cancellation-policy': 'Cancellation & Refund Policy'
};

export default function Breadcrumbs() {
  const {pathname} = useLocation();

  if (!pathname || pathname === '/') {
    return null;
  }

  const rawSegments = pathname.split('/').filter(Boolean);

  let accumulatedPath = '';
  const breadcrumbItems = [
    {
      name: 'Home',
      url: '/'
    }
  ];

  rawSegments.forEach((segment, idx) => {
    accumulatedPath += `/${segment}`;
    let label = ROUTE_NAME_MAP[segment];

    // If it's a dynamic slug (e.g. package detail or car detail)
    if (!label) {
      const matchedPkg = packages.find(p => p.slug === segment);
      const matchedCar = cars.find(c => c.slug === segment || c.id === segment);
      if (matchedPkg) {
        label = matchedPkg.title;
      } else if (matchedCar) {
        label = matchedCar.n;
      } else {
        label = segment
          .split('-')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
      }
    }

    breadcrumbItems.push({
      name: label,
      url: accumulatedPath,
      isLast: idx === rawSegments.length - 1
    });
  });

  // Schema.org BreadcrumbList JSON-LD
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://ourdreamtrip.com${item.url}`
    }))
  };

  return (
    <nav className="global-breadcrumb-nav" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumb-list">
          {breadcrumbItems.map((item, index) => (
            <li
              key={item.url}
              className={`breadcrumb-item ${item.isLast ? 'active' : ''}`}
            >
              {index > 0 && <FaChevronRight className="bc-separator"/>}

              {item.isLast ? (
                <span className="bc-current" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link to={item.url} className="bc-link">
                  {index === 0 && <FaHome className="bc-home-icon"/>}
                  <span>{item.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData)}}
      />
    </nav>
  );
}