// Importing component modules
import Navbar from './components/Navbar'; // Navigation bar at the top of the page
import HeroSection from './components/HeroSection'; // Main hero section with title, description, and videos
import FeatureSection from './components/FeatureSection'; // Section showcasing application features
import Workflow from './components/Workflow'; // Section detailing the workflow process
import Pricing from './components/Pricing'; // Section displaying pricing options
import Testimonial from './components/Testimonial'; // Section showcasing user testimonials
import Footer from './components/Footer'; // Footer with additional resources and links

// App component
const App = () => {
  return (
    <>
      {/* Navbar: Sticky navigation bar */}
      <Navbar />

      {/* Main content wrapper */}
      <div className="max-w-7xl mx-auto pt-20 px-6">
        {/* Hero Section: Introductory section with videos */}
        <HeroSection />

        {/* Feature Section: Highlights the main features */}
        <FeatureSection />

        {/* Workflow Section: Explains how the product/process works */}
        <Workflow />

        {/* Pricing Section: Displays subscription plans */}
        <Pricing />

        {/* Testimonial Section: Reviews and feedback from users */}
        <Testimonial />

        {/* Footer: Links to additional resources and pages */}
        <Footer />
      </div>
    </>
  );
};

export default App; // Exporting the App component as default