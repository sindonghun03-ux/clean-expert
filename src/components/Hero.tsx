import React from "react";
import { ArrowDown, Layers, Award, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import LogoSymbol from "./LogoSymbol";
import { useLanguage } from "../LanguageContext";

export default function Hero() {
  const { language, t } = useLanguage();

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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-brand-black text-white pt-20 overflow-hidden"
    >
      {/* Background Graphic Grid/Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-red/10 via-brand-black to-brand-black"
          style={{ mixBlendMode: "screen" }}
        />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&q=80&w=1920')",
            filter: "brightness(0.25) contrast(1.1)",
          }}
        />
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Hero content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
        {/* Minimal cover emblem matching page 1 of catalog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 transform hover:scale-105 transition-transform duration-300"
        >
          {/* Official stylized Symbol Mark */}
          <LogoSymbol size={130} withText={true} withBackground={true} className="shadow-2xl border border-white/10 rounded-xl" />
        </motion.div>

        {/* Catchphrase */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-brand-yellow font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4"
        >
          Make a Brand : Premium Made in Korea
        </motion.p>

        {/* Slogan */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 text-white max-w-4xl"
        >
          {language === "en" ? (
            <>
              Socks are not merely details,<br/>
              <span className="bg-gradient-to-r from-brand-yellow via-brand-red to-brand-yellow bg-clip-text text-transparent">
                They start & complete your day.
              </span>
            </>
          ) : (
            <>
              양말은 패션의 마무리가 아닌,<br/>
              <span className="bg-gradient-to-r from-brand-yellow via-brand-red to-brand-yellow bg-clip-text text-transparent">
                하루를 완성하는 시작
              </span>
              입니다.
            </>
          )}
        </motion.h1>

        {/* Short introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-gray-300 font-light max-w-3xl leading-relaxed mb-10 word-keep-all"
        >
          {t("hero.desc")}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md"
        >
          <button
            onClick={() => handleScrollToSection("product")}
            className="w-full sm:w-auto bg-brand-red hover:bg-brand-red/90 text-white px-8 py-4 rounded font-bold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-brand-red/20 transform hover:-translate-y-1 cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>{language === "en" ? "Explore Collections" : "제품 콜렉션 탐색"}</span>
          </button>
          <button
            onClick={() => handleScrollToSection("brand-story")}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded font-bold text-sm sm:text-base transition-all duration-300 border border-white/20 transform hover:-translate-y-1 cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>{language === "en" ? "Brand Story" : "브랜드 스토리"}</span>
            <ArrowDown size={16} />
          </button>
        </motion.div>

        {/* Bottom Quick Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mt-16 pt-12 border-t border-white/10 w-full"
        >
          <div className="flex flex-col items-center">
            <Layers className="text-brand-yellow mb-2" size={24} />
            <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-gray-300">
              {language === "en" ? "Premium Korean Yarn" : "국산 최고급 원사"}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Award className="text-brand-red mb-2" size={24} />
            <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-gray-300">
              {language === "en" ? "30Yrs Precision Weaving" : "30년 전문 컴퓨터 편직"}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="text-green-500 mb-2" size={24} />
            <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-gray-300">
              {language === "en" ? "100% Inspection Check" : "100% 철저한 전수 검증"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
