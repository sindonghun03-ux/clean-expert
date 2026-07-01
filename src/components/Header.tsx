import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, PhoneCall, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../LanguageContext";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "brand-story", label: t("nav.brandStory") },
    { id: "why", label: t("nav.why") },
    { id: "technology", label: t("nav.technology") },
    { id: "product", label: t("nav.product") },
    { id: "oem-guide", label: t("nav.oem") },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-black/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5"
          : "bg-brand-black/90 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick("brand-story")}
          >
            <div className="relative w-8 h-8 flex items-center justify-center bg-brand-red rounded-sm">
              <span className="text-white font-black text-sm tracking-tighter">MK</span>
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-brand-yellow rounded-full border border-brand-black"></div>
            </div>
            <span className="text-white font-extrabold text-xl tracking-wider">
              MK<span className="text-brand-red">SOCKS</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs lg:text-sm font-semibold tracking-wide transition-colors duration-200 cursor-pointer ${
                  activeTab === item.id
                    ? "text-brand-yellow"
                    : "text-gray-300 hover:text-brand-yellow"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/5 space-x-0.5 shrink-0">
              <button
                onClick={() => setLanguage("ko")}
                className={`px-2.5 py-1 text-[10px] font-black rounded-full transition-all duration-200 cursor-pointer ${
                  language === "ko"
                    ? "bg-brand-red text-white shadow"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                KO
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 text-[10px] font-black rounded-full transition-all duration-200 cursor-pointer ${
                  language === "en"
                    ? "bg-brand-red text-white shadow"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => handleNavClick("oem-guide")}
              className="flex items-center space-x-2 bg-brand-yellow text-brand-black px-4 py-2 rounded font-black text-xs hover:bg-[#d4ac0d] transition-all duration-300 shadow-md cursor-pointer shrink-0"
            >
              <PhoneCall size={12} />
              <span>{t("nav.contact")}</span>
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* Language Switcher for Mobile */}
            <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/5 space-x-0.5">
              <button
                onClick={() => setLanguage("ko")}
                className={`px-2 py-0.5 text-[9px] font-black rounded-full transition-all cursor-pointer ${
                  language === "ko"
                    ? "bg-brand-red text-white shadow"
                    : "text-gray-400"
                }`}
              >
                KO
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 text-[9px] font-black rounded-full transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-brand-red text-white shadow"
                    : "text-gray-400"
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-1 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-brand-black/98 border-t border-white/5 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left py-2.5 px-3 rounded text-base font-medium transition-colors cursor-pointer ${
                    activeTab === item.id
                      ? "bg-brand-red text-white"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3">
                <button
                  onClick={() => handleNavClick("oem-guide")}
                  className="w-full flex items-center justify-center space-x-2 bg-brand-yellow text-brand-black py-3 rounded-md font-bold text-base shadow-lg hover:bg-opacity-90 transition-all cursor-pointer"
                >
                  <PhoneCall size={18} />
                  <span>{t("nav.contact")}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
