import { useState, useCallback, useMemo } from 'react';
import { Menu, X } from 'lucide-react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  // Memoized toggle function to prevent unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  // Memoized close menu function
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Memoized nav items to prevent recreation on each render
  const navItems = useMemo(
    () => [
      { name: 'Home', href: 'home' },
      { name: 'About', href: 'about' },
      { name: 'Services', href: 'services' },
      { name: 'Contact', href: 'contact' },
    ],
    []
  );

  // Optimized navigation handler
  const handleNavClick = useCallback(
    (href: string) => {
      scrollToSection(href);
      closeMenu();
    },
    [scrollToSection, closeMenu]
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0">
            <h1
              className="text-2xl sm:text-3xl font-bold cursor-pointer group will-change-transform"
              onClick={() => scrollToSection('home')}
            >
              <span
                className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 
                             bg-clip-text text-transparent 
                             transition-transform duration-300 ease-out
                             group-hover:scale-105 will-change-transform"
              >
                RufO
              </span>
            </h1>
          </div>

          {/* Desktop Navigation - Optimized rendering */}
          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex items-center space-x-1 lg:space-x-2">
              {navItems.map(item => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="nav-link relative px-4 py-2 text-gray-300 font-medium
                             transition-all duration-200 ease-out will-change-transform
                             hover:text-white hover:scale-105"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button - Optimized with single icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative p-2 rounded-lg text-gray-400 hover:text-white
                     hover:bg-gray-800/50 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-purple-500/50 will-change-transform"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            type="button"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Optimized with transform instead of max-height */}
        <nav
          className={`md:hidden transition-all duration-300 ease-out overflow-hidden
                     ${
                       isMenuOpen
                         ? 'translate-y-0 opacity-100'
                         : '-translate-y-4 opacity-0 pointer-events-none'
                     }`}
          style={{
            height: isMenuOpen ? 'auto' : '0',
            maxHeight: isMenuOpen ? '300px' : '0',
          }}
          aria-label="Mobile navigation"
        >
          <ul className="py-4 space-y-1 border-t border-gray-800/50">
            {navItems.map(item => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="mobile-nav-link block w-full text-left px-4 py-3 text-gray-300 font-medium rounded-lg
                           transition-all duration-200 ease-out
                           hover:text-white hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-blue-500/10
                           focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Optimized CSS - Only essential animations */}
    </header>
  );
};

export default Header;
