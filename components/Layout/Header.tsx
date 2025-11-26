import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import Button from '../UI/Button';
import { PERSONAL_INFO } from '../../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '비즈니스 가이드', path: '/business' },
    { name: '제품 소개', path: '/product' },
    { name: '멘토 소개', path: '/mentor' },
    { name: '문의하기', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="text-2xl font-bold text-primary tracking-tighter">USANA</div>
            <div className="hidden sm:block text-sm text-gray-600 border-l border-gray-300 pl-2">
              {PERSONAL_INFO.TITLE}
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-medium transition-colors ${
                  isActive(link.path) 
                    ? 'text-primary font-bold' 
                    : isScrolled ? 'text-gray-700 hover:text-primary' : 'text-gray-800 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a href={PERSONAL_INFO.KAKAO_OPENCHAT} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm">
                무료 상담 신청
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center justify-between text-lg font-medium p-2 rounded-lg ${
                   isActive(link.path) ? 'bg-blue-50 text-primary' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                <ChevronRight size={16} />
              </Link>
            ))}
             <a 
               href={PERSONAL_INFO.KAKAO_OPENCHAT} 
               target="_blank" 
               rel="noopener noreferrer"
               onClick={() => setIsMobileMenuOpen(false)}
             >
              <Button variant="primary" fullWidth className="mt-4">
                무료 상담 신청
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;