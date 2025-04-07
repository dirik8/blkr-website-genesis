
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTAButton from '@/components/shared/CTAButton';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="min-h-[80vh] flex items-center justify-center container-custom pt-20">
        <div className="text-center max-w-xl">
          <div className="mb-8">
            <h1 className="text-8xl font-playfair text-blkr-gold font-bold mb-4">404</h1>
            <h2 className="text-3xl font-medium mb-4">Page Not Found</h2>
            <p className="text-gray-400">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </div>
          <CTAButton variant="primary" className="mx-auto">
            <Home className="mr-2 h-4 w-4" /> Back to Homepage
          </CTAButton>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
