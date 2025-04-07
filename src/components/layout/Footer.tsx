
import React from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '../shared/CTAButton';
import { Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { Input } from '../ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Programs", path: "/programs" },
        { name: "Education Hub", path: "/education" },
        { name: "Coaching", path: "/coaching" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", path: "/blog" },
        { name: "Testimonials", path: "/testimonials" },
        { name: "FAQ", path: "/faq" },
        { name: "Our Team", path: "/team" },
        { name: "Contact", path: "/contact" },
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-black border-t border-blkr-gold/20 pt-16 pb-8">
      <div className="container-custom">
        {/* Top section with newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-12 border-b border-gray-800">
          <div>
            <h3 className="text-2xl font-playfair font-semibold text-blkr-white mb-4">
              Join Our Newsletter
            </h3>
            <p className="text-gray-400 mb-6">
              Stay updated with the latest trading strategies, market insights, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 border-gray-700 text-white"
              />
              <CTAButton className="whitespace-nowrap flex-shrink-0">
                Subscribe <ArrowRight className="ml-1 w-4 h-4" />
              </CTAButton>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-start md:items-end">
              <h3 className="text-2xl font-playfair font-semibold text-blkr-white mb-4">
                <span className="text-blkr-gold">BLKR</span> Trading Community
              </h3>
              <p className="text-gray-400 mb-6 md:text-right">
                Elite Strategies. Exclusive Access. Ultimate Performance.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href} 
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-blkr-gold hover:bg-blkr-gold hover:text-black transition-colors"
                    aria-label={`Social media link ${index + 1}`}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Middle section with links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-medium text-blkr-white mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-gray-400 hover:text-blkr-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h4 className="text-lg font-medium text-blkr-white mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Email: info@blkrtrading.com</li>
              <li>WhatsApp: +1 (555) 123-4567</li>
              <li>Telegram: @BLKRTrading</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-blkr-white mb-4">Join BBC</h4>
            <p className="text-gray-400 mb-5">Ready to take your trading to the next level? Join our exclusive community today.</p>
            <CTAButton variant="secondary" withArrow>Apply Now</CTAButton>
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="pt-8 border-t border-gray-800 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} BLKR Trading Community. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-blkr-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blkr-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
