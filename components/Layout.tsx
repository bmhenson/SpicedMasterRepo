import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Button from './Button';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Clarity', path: '/clarity' },
    { name: 'Catalyst', path: '/catalyst' },
    { name: 'Horizon', path: '/horizon' },
    { name: 'Signal', path: '/signal' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-spiced-parchment text-spiced-charcoal">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-spiced-parchment/95 backdrop-blur-sm border-b border-spiced-charcoal/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="https://i.ibb.co/cc3NysS6/Spiced-Master.png"
                alt="Spiced:" 
                className="h-16 w-auto" 
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="hidden md:flex space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm transition-colors duration-200 hover:text-spiced-paprika ${
                      isActive(link.path) ? 'text-spiced-paprika' : 'text-spiced-charcoal'
                    }`}
                  >
                    <span className="font-bold">Spiced</span>
                    <span className="font-bold text-spiced-paprika">:</span>
                    <span className="font-normal">{link.name}</span>
                  </Link>
                ))}
              </div>
              <Button variant="primary" onClick={() => window.open('mailto:ineed@spiced.co.uk', '_blank')}>
                Schedule a Call
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-spiced-charcoal hover:text-spiced-paprika focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-spiced-parchment border-b border-spiced-charcoal/10">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base ${
                    isActive(link.path)
                      ? 'bg-spiced-paprika/10 text-spiced-paprika'
                      : 'text-spiced-charcoal hover:bg-black/5'
                  }`}
                >
                  <span className="font-bold">Spiced</span>
                  <span className="font-bold text-spiced-paprika">:</span>
                  <span className="font-normal">{link.name}</span>
                </Link>
              ))}
              <div className="pt-4">
                <Button variant="primary" className="w-full" onClick={() => window.open('mailto:hello@spiced.consulting', '_blank')}>
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-spiced-charcoal text-spiced-parchment pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center mb-6 group">
                <img 
                  src="https://i.ibb.co/9kMb9T57/Spiced-Whiteout.png"
                  alt="Spiced:"
                  className="h-12 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Transforming people operations from a source of chaos into your greatest engine for growth.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-spiced-turmeric transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:hello@spiced.consulting" className="text-gray-400 hover:text-spiced-turmeric transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="col-span-1">
              <h3 className="font-heading font-bold text-lg mb-4 text-spiced-turmeric">Solutions</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-300 hover:text-white transition-colors text-sm">
                      <span className="font-bold">Spiced</span>
                      <span className="font-bold text-spiced-paprika">:</span>
                      <span className="font-normal">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="font-heading font-bold text-lg mb-4 text-spiced-turmeric">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</Link></li>
                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Insights</Link></li>
                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Careers</Link></li>
                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</Link></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="font-heading font-bold text-lg mb-4 text-spiced-turmeric">Get Started</h3>
              <p className="text-sm text-gray-400 mb-4">
                Ready to pay down your people debt?
              </p>
              <Button variant="primary" className="w-full text-sm" onClick={() => window.open('mailto:hello@spiced.consulting', '_blank')}>
                Schedule a Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Spiced Consulting Ltd. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;