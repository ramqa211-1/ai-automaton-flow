import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "ראשי", href: "#home" },
  { label: "שירותים", href: "#services" },
  { label: "הדרכות", href: "#booking" },
  { label: "תיק עבודות", href: "#portfolio" },
  { label: "תוכן", href: "#content" },
  { label: "יצירת קשר", href: "#contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveHref(href);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-white/30 shadow-[0_0_15px_rgba(182,0,89,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="text-base font-bold tracking-widest uppercase text-foreground cursor-pointer font-inter"
              onClick={() => scrollToSection("#home")}
            >
              Ram Walastal
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-inter text-sm tracking-tight transition-colors duration-200 pb-0.5 ${
                    activeHref === item.href
                      ? "text-primary font-semibold border-b-2 border-primary"
                      : "text-foreground/60 hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/resources")}
                className="hidden lg:block border border-primary/40 text-primary px-4 py-1.5 rounded-full font-inter text-sm font-medium hover:bg-primary/5 transition-colors duration-200"
              >
                מאגר ידע
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#contact")}
                className="hidden sm:block bg-primary text-white px-5 py-2 rounded-full font-inter text-sm font-medium hover:bg-accent transition-colors duration-200 electric-glow"
              >
                יצירת קשר
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden glass-bento border-b border-white/20 shadow-lg"
          >
            <div className="px-8 py-4 flex flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-right px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200 font-inter"
                >
                  {item.label}
                </motion.button>
              ))}
              <button
                onClick={() => { navigate("/resources"); setIsMobileMenuOpen(false); }}
                className="text-right px-4 py-3 text-sm text-primary border border-primary/25 rounded-xl transition-all duration-200 font-inter hover:bg-primary/5"
              >
                📚 מאגר ידע
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="mt-2 bg-primary text-white px-5 py-2.5 rounded-full font-inter text-sm font-medium hover:bg-accent transition-colors"
              >
                יצירת קשר
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
