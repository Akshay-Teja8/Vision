import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const navItems = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Services", to: "services" },
  { name: "Why Us", to: "why-us" },
  { name: "Contact", to: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <ScrollLink 
            to="home" 
            smooth={true} 
            className="cursor-pointer flex items-center gap-3 group"
          >
            <img 
              src="/logo.jpg" 
              alt="Interiors Vision Logo" 
              className="h-14 w-14 object-contain hover:scale-105 transition-transform"
            />
            <div className="hidden sm:flex flex-col">
              <span className={`text-lg font-bold font-display tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-foreground md:text-white"}`}>
                Interiors Vision
              </span>
              <span className={`text-xs uppercase tracking-widest transition-colors ${scrolled ? "text-primary" : "text-primary md:text-white/80"}`}>
                Simplicity Beats Complexity
              </span>
            </div>
          </ScrollLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                offset={-80}
                className={`cursor-pointer text-sm font-medium tracking-wide hover:text-primary transition-colors ${
                  scrolled ? "text-muted-foreground" : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
              </ScrollLink>
            ))}
            <a
              href="tel:9966665438"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                scrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-white text-foreground hover:bg-white/90"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? "text-foreground" : "text-foreground"}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-foreground hover:bg-secondary rounded-lg transition-colors cursor-pointer"
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
