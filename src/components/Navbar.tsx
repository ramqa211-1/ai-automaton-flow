import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import BrainRamLogo from "./BrainRamLogo";

// `to` is either a route path ("/about") or a homepage anchor ("/#training").
// Anchors are resolved route-aware so they also work from sub-pages.
const navItems = [
  { label: "ראשי", to: "/" },
  { label: "אודות", to: "/about" },
  { label: "שירותים", to: "/#services" },
  { label: "הדרכות", to: "/#training" },
  { label: "תיק עבודות", to: "/#portfolio" },
  { label: "לקוחות מספרים", to: "/#clients" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Route-aware navigation: "/#section" scrolls on the homepage (navigating there
  // first if needed); plain paths route normally.
  const handleNav = (to: string) => {
    setIsMobileMenuOpen(false);
    if (to.startsWith("/#")) {
      const id = to.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(to);
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 150);
      }
    } else {
      navigate(to);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isActive = (to: string) =>
    to.startsWith("/#")
      ? location.pathname === "/" && location.hash === to.slice(1)
      : location.pathname === to && !location.hash;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-b from-slate-950 via-slate-950 to-transparent backdrop-blur-xl border-b border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-24 md:h-28">
            {/* Logo */}
            <BrainRamLogo size="lg" showText={true} onClick={() => handleNav("/")} />

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.to}
                  whileHover={{ backgroundColor: "rgba(16, 185, 129, 0.08)" }}
                  onClick={() => handleNav(item.to)}
                  className={`font-inter text-sm tracking-tight transition-all duration-200 px-4 py-2 rounded-lg ${
                    isActive(item.to)
                      ? "text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30"
                      : "text-slate-200 hover:text-emerald-400"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-2 md:gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/resources")}
                className="hidden lg:flex items-center gap-2 border border-emerald-500/40 bg-emerald-500/5 text-emerald-400 px-4 py-2 rounded-lg font-inter text-sm font-medium hover:bg-emerald-500/15 hover:border-emerald-500/60 transition-all duration-200"
              >
                📚 מאגר ידע
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNav("/#contact")}
                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-emerald-500 via-green-400 to-yellow-400 text-slate-950 px-5 md:px-6 py-2 md:py-2.5 rounded-lg font-inter text-sm font-bold hover:shadow-[0_0_20px_rgba(16,185,129,0.6)] transition-all duration-200"
              >
                <Zap className="w-4 h-4" />
                יצירת קשר
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-colors"
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
            className="fixed top-24 left-0 right-0 z-40 lg:hidden bg-gradient-to-b from-slate-950 to-slate-900/95 backdrop-blur-xl border-b border-emerald-500/20 shadow-[0_10px_40px_rgba(16,185,129,0.15)]"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNav(item.to)}
                  className="text-right px-4 py-3 text-sm text-slate-200 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all duration-200 font-inter"
                >
                  {item.label}
                </motion.button>
              ))}
              <button
                onClick={() => { navigate("/resources"); setIsMobileMenuOpen(false); }}
                className="text-right px-4 py-3 text-sm text-emerald-400 border border-emerald-500/25 rounded-lg transition-all duration-200 font-inter hover:bg-emerald-500/10"
              >
                📚 מאגר ידע
              </button>
              <button
                onClick={() => handleNav("/#contact")}
                className="mt-2 bg-gradient-to-r from-emerald-500 to-yellow-400 text-slate-950 px-5 py-3 rounded-lg font-inter text-sm font-bold hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all"
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
