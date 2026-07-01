import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BrandStory from "./components/BrandStory";
import WhyMKSocks from "./components/WhyMKSocks";
import Process from "./components/Process";
import Technology from "./components/Technology";
import ProductCollection from "./components/ProductCollection";
import OemInquiry from "./components/OemInquiry";
import Footer from "./components/Footer";
import { ArrowUp, BookOpen, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("brand-story");
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Show or hide back to top button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // 2. Intersection Observer style calculation for active section
      const sections = ["hero", "brand-story", "why", "process", "technology", "product", "oem-guide"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            // For general navigation linking, normalize sub sections
            if (section === "hero") {
              setActiveTab("brand-story");
            } else if (section === "oem-guide") {
              setActiveTab("oem-guide");
            } else {
              setActiveTab(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  // Booklet Sidebar Items (Based on Page 2 of physical catalog contents)
  const bookletItems = [
    { id: "brand-story", label: "CI 소개", color: "bg-brand-red", border: "border-brand-red" },
    { id: "process", label: "제조 공정", color: "bg-gray-500", border: "border-gray-500" },
    { id: "why", label: "회사 강점", color: "bg-brand-yellow", border: "border-brand-yellow" },
    { id: "product", label: "상품 소개", color: "bg-brand-black", border: "border-brand-black" },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-brand-black relative">
      
      {/* Brand Navigation GNB */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Sections flow */}
      <main className="relative">
        {/* 01. HERO BANNER */}
        <Hero />

        {/* 02. BRAND STORY & CI GUIDELINES */}
        <BrandStory />

        {/* 03. WHY MKSOCKS (Core Advantages) */}
        <WhyMKSocks />

        {/* 04. OUR PROCESS (Manufacturing Pipeline) */}
        <Process />

        {/* 05. TECHNOLOGY & PHYSICAL METRICS */}
        <Technology />

        {/* 07. PRODUCT COLLECTION (Digital Catalog) */}
        <ProductCollection />

        {/* 09. OEM/ODM BUSINESS (Custom estimate simulator) */}
        <OemInquiry />
      </main>

      {/* 10. DETAILED CONTACT FOOTER */}
      <Footer />

      {/* FLOATING BOOKLET CONTENTS TABLE (Page 2 of Catalog - Desktop only) */}
      <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col items-end space-y-6 z-40 bg-white/90 backdrop-blur-md p-5 rounded-xl border border-gray-100 shadow-xl max-w-[160px]">
        
        {/* Booklet Header */}
        <div className="flex items-center space-x-2 border-b border-gray-100 pb-3 w-full justify-end">
          <BookOpen size={14} className="text-brand-red" />
          <span className="text-[10px] font-black tracking-widest text-brand-black font-mono">CONTENTS</span>
        </div>

        {/* Contents List */}
        <div className="flex flex-col space-y-4 items-end w-full">
          {bookletItems.map((item) => {
            const isSelected = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleScrollToSection(item.id)}
                className="group flex items-center space-x-2 focus:outline-none cursor-pointer w-full justify-end"
              >
                {/* Text Label */}
                <span
                  className={`text-[11px] font-bold tracking-tight transition-all duration-200 ${
                    isSelected
                      ? "text-brand-black scale-105"
                      : "text-gray-400 group-hover:text-brand-black"
                  }`}
                >
                  {item.label}
                </span>

                {/* Dashed Connector Line */}
                <span className="w-4 border-t border-dashed border-gray-300 group-hover:border-brand-black transition-colors" />

                {/* Stylized Square Block (matching page 2 design exactly!) */}
                <div
                  className={`w-3.5 h-3.5 rounded-sm transition-all duration-300 ${
                    isSelected
                      ? `${item.color} scale-110 rotate-45 ring-2 ring-brand-black/10`
                      : "bg-gray-200 group-hover:bg-gray-300"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Miniature Badge Indicator */}
        <div className="pt-2 text-right border-t border-gray-100 w-full flex items-center justify-end space-x-1">
          <Sparkles size={10} className="text-brand-yellow" />
          <span className="text-[9px] text-gray-400 font-mono">MKS Catalog v2.6</span>
        </div>
      </div>

      {/* Floating Back to Top Trigger */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 left-6 z-40 bg-brand-black hover:bg-brand-red text-white p-3.5 rounded-full shadow-2xl border border-white/10 transition-colors cursor-pointer flex items-center justify-center focus:outline-none"
            title="맨 위로 이동"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
