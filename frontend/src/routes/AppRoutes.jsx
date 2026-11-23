import { Routes, Route, useParams, Navigate } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout.jsx';
import Home from '../pages/Home.jsx';
import { AboutUs, CarRental, Gallery, Policy, NotFound, HtmlSitemap } from '../pages/Static.jsx';
import { OdishaPackages, DomesticPackages, PackageDetails, SearchResults } from '../pages/Packages.jsx';
import { ContactUs, BookYourTrip } from '../pages/Forms.jsx';
import { BlogList, BlogDetail } from '../pages/Blogs.jsx';
import Admin from '../pages/Admin.jsx';
import VehicleDetails from '../pages/VehicleDetails.jsx';
import { getPackage } from '../data/packages.js';
import { cars } from '../data/vehicleFleet.js';

function SmartDirectPackageResolver() {
  const { slug } = useParams();
  const pkg = getPackage(slug);
  if (pkg) {
    const prefix = pkg.cat === 'odisha' ? '/odisha-tour-packages' : '/domestic-tour-packages';
    return <Navigate to={`${prefix}/${pkg.slug}`} replace />;
  }
  const car = (cars || []).find(c => c.slug === slug);
  if (car) {
    return <Navigate to={`/car-rental/${car.slug}`} replace />;
  }
  return <NotFound />;
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* Admin Panel Routes (Dedicated Management Portal) */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/login" element={<Admin />} />

      {/* Public Facing Customer Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/odisha-tour-packages" element={<OdishaPackages />} />
        <Route path="/odisha-tour-packages/:slug" element={<PackageDetails cat="odisha" />} />
        <Route path="/domestic-tour-packages" element={<DomesticPackages />} />
        <Route path="/domestic-tour-packages/:slug" element={<PackageDetails cat="domestic" />} />
        <Route path="/car-rental" element={<CarRental />} />
        <Route path="/car-rental/:slug" element={<VehicleDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/book-your-trip" element={<BookYourTrip />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/privacy-policy" element={<Policy k="privacy" />} />
        <Route path="/terms-and-conditions" element={<Policy k="terms" />} />
        <Route path="/cancellation-policy" element={<Policy k="cancel" />} />
        <Route path="/sitemap" element={<HtmlSitemap />} />
        <Route path="/sitemap.html" element={<HtmlSitemap />} />

        {/* Direct package / car slug catch-and-redirect */}
        <Route path="/:slug" element={<SmartDirectPackageResolver />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
