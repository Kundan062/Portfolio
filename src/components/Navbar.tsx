import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronRight,
  Home,
  User,
  FileText,
  GraduationCap,
  Code2,
  FolderKanban,
  Briefcase,
  Trophy,
  Users,
  MessageSquare
} from 'lucide-react';
import { navigationLinks, mobileNavLinks } from '../data';

// Create a mapping of icon names to their components
const LucideIcons: { [key: string]: React.ComponentType<any> } = {
  Home,
  User,
  FileText,
  GraduationCap,
  Code2,
  FolderKanban,
  Briefcase,
  Trophy,
  Users,
  MessageSquare
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute('id') || '';
        
        if (position >= sectionTop && position < sectionTop + sectionHeight) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Toggle body scroll lock
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  // Handle link click (close menu and scroll to section)
  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
    
    // Scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-dark-300/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <span className="text-2xl font-display font-bold text-white">
              <span className="text-neon-blue">K</span>
              <span className="text-neon-pink">K</span>
            </span>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`text-sm font-medium hover:text-neon-blue transition-colors relative py-2 ${
                  activeSection === link.href.substring(1) ? 'text-neon-blue' : 'text-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-blue"
                    layoutId="navbar-indicator"
                  />
                )}
              </motion.a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            onClick={toggleMenu}
          >
            {/* Mobile Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-3/4 max-w-xs bg-dark-200 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-800">
                <span className="font-display font-bold text-xl">
                  <span className="text-neon-blue">K</span>
                  <span className="text-neon-pink">K</span>
                </span>
                <button onClick={toggleMenu} className="text-gray-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>
              
              <div className="py-4 px-2 h-[calc(100%-70px)] overflow-y-auto scrollbar-hide">
                {mobileNavLinks.map((section) => (
                  <div key={section.section} className="mb-6">
                    <h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold px-4 mb-2">
                      {section.section}
                    </h3>
                    <div className="space-y-1">
                      {section.links.map((link) => {
                        const Icon = link.icon ? LucideIcons[link.icon] : null;
                        return (
                          <motion.a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleLinkClick(link.href);
                            }}
                            className={`flex items-center justify-between w-full px-4 py-2 text-sm rounded-md ${
                              activeSection === link.href.substring(1)
                                ? 'bg-neon-blue/10 text-neon-blue'
                                : 'text-gray-300 hover:bg-gray-800'
                            }`}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center space-x-3">
                              {Icon && <Icon size={18} />}
                              <span>{link.name}</span>
                            </div>
                            <ChevronRight size={16} className="text-gray-500" />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;