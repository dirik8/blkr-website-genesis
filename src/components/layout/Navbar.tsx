
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import CTAButton from '../shared/CTAButton';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Education', path: '/education' },
    { name: 'Coaching', path: '/coaching' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-black/95 backdrop-blur-sm py-2 shadow-md shadow-blkr-gold/10'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-playfair font-bold text-blkr-white">
            <span className="text-blkr-gold">BLKR</span> Trading
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-blkr-white hover:text-blkr-gold transition-colors gold-underline py-2"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <CTAButton variant="primary">Apply for Membership</CTAButton>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-blkr-gold" />
            ) : (
              <Menu className="h-6 w-6 text-blkr-gold" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-sm absolute top-full left-0 w-full">
          <div className="container-custom py-4">
            <ul className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block py-2 text-blkr-white hover:text-blkr-gold transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <CTAButton variant="primary" className="w-full justify-center">
                Apply for Membership
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
