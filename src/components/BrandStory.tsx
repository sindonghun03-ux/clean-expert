import React, { useState } from "react";
import { Check, Compass, HelpCircle, Palette } from "lucide-react";
import { motion } from "motion/react";
import LogoSymbol from "./LogoSymbol";
import { useLanguage } from "../LanguageContext";

export default function BrandStory() {
  const [selectedColor, setSelectedColor] = useState<string>("black");
  const { language, t, getBrandColors } = useLanguage();
  const brandColors = getBrandColors();

  return (
    <section id="brand-story" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-bold text-xs tracking-widest uppercase bg-brand-red/5 px-3 py-1.5 rounded-full"
          >
            {t("brand.badge")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight mt-3 mb-4"
          >
            {t("brand.title")}
          </motion.h2>
          <div className="w-12 h-1 bg-brand-red mx-auto" />
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            {language === "en" ? (
              <h3 className="text-2xl sm:text-3xl font-black text-brand-black leading-tight">
                Socks are not merely small fashion accessories,<br className="hidden sm:inline"/>
                They are the <span className="text-brand-red">start and end that complete your day.</span>
              </h3>
            ) : (
              <h3 className="text-2xl sm:text-3xl font-black text-brand-black leading-tight">
                양말은 패션의 작은 액세서리가 아닌,<br className="hidden sm:inline"/>
                <span className="text-brand-red">하루를 완성하는 시작이자 마침표</span>입니다.
              </h3>
            )}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed word-keep-all font-light">
              {t("brand.desc1")}
            </p>
            <p className="text-gray-600 text-base leading-relaxed word-keep-all font-light">
              {t("brand.desc2")}
            </p>
            
            {/* Slogan details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-brand-gray rounded-lg border-l-4 border-brand-red flex items-start space-x-3">
                <Compass className="text-brand-red shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="font-bold text-sm text-brand-black">{t("brand.feature1_title")}</h4>
                  <p className="text-xs text-gray-500 mt-1">{t("brand.feature1_desc")}</p>
                </div>
              </div>
              <div className="p-4 bg-brand-gray rounded-lg border-l-4 border-brand-yellow flex items-start space-x-3">
                <Check className="text-brand-yellow shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="font-bold text-sm text-brand-black">{t("brand.feature2_title")}</h4>
                  <p className="text-xs text-gray-500 mt-1">{t("brand.feature2_desc")}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-brand-gray p-8 rounded-xl border border-gray-100 shadow-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Palette className="text-brand-red" size={20} />
                <h4 className="font-bold text-lg text-brand-black">{t("brand.color_title")}</h4>
              </div>
              <span className="text-xs font-mono text-gray-400">CI Color Philosophy</span>
            </div>

            <div className="space-y-4">
              {brandColors.map((color) => (
                <button
                   key={color.id}
                   onClick={() => setSelectedColor(color.id)}
                   className={`w-full text-left p-4 rounded-lg border transition-all duration-200 cursor-pointer flex items-center space-x-4 ${
                     selectedColor === color.id
                       ? "bg-white border-brand-black shadow-md translate-x-1"
                       : "bg-transparent border-gray-200 hover:bg-white/60"
                   }`}
                >
                  <div
                    className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-white text-xs font-bold shadow-inner"
                    style={{ backgroundColor: color.hex }}
                  >
                    {color.id === "black" ? "B" : color.id === "yellow" ? "Y" : "R"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-brand-black">{color.name}</span>
                      <span className="text-[11px] font-mono font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                        {color.mks}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 truncate mt-1">{color.meaning}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Color details card */}
            <div className="mt-6 p-4 bg-white rounded-lg border border-dashed border-gray-200">
              {brandColors.map(
                (color) =>
                  selectedColor === color.id && (
                    <motion.div
                      key={color.id}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2"
                    >
                      <h5 className="font-bold text-xs uppercase tracking-wider font-mono" style={{ color: color.hex }}>
                        {color.englishName}
                      </h5>
                      <p className="text-xs text-gray-600 leading-relaxed word-keep-all font-light">
                        {color.description}
                      </p>
                    </motion.div>
                  )
              )}
            </div>
          </motion.div>
        </div>

        {/* LOGO SYSTEM GUIDELINES - Interactive Visual Display */}
        <div className="border-t border-gray-100 pt-16">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-brand-black tracking-tight mb-2">{t("brand.ci_title")}</h3>
            <p className="text-sm text-gray-500">{t("brand.ci_subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Variant 1: 표준 C.I */}
            <div className="bg-brand-gray p-6 rounded-lg text-center border border-gray-100 flex flex-col items-center justify-between">
              <span className="text-[11px] font-bold text-brand-red tracking-wider uppercase mb-4">{t("brand.ci_std")}</span>
              <div className="w-full h-32 flex items-center justify-center bg-white p-4 rounded border border-gray-100 shadow-inner">
                {/* Standard Logo Design */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 bg-brand-red flex items-center justify-center rounded-sm text-white font-extrabold text-[10px]">MK</div>
                    <span className="font-black text-lg text-brand-black tracking-wider">MKSOCKS</span>
                  </div>
                  <span className="text-[9px] text-gray-400 mt-1 uppercase tracking-[0.2em] font-medium">Make a brand</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4 word-keep-all">{t("brand.ci_std_desc")}</p>
            </div>

            {/* Variant 2: 가로 C.I */}
            <div className="bg-brand-gray p-6 rounded-lg text-center border border-gray-100 flex flex-col items-center justify-between">
              <span className="text-[11px] font-bold text-brand-yellow tracking-wider uppercase mb-4">{t("brand.ci_hor")}</span>
              <div className="w-full h-32 flex items-center justify-center bg-white p-4 rounded border border-gray-100 shadow-inner">
                {/* Horizontal Logo */}
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded bg-brand-black flex items-center justify-center relative">
                    <span className="text-white font-bold text-xs">MK</span>
                    <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-brand-yellow rounded-full border border-white"></div>
                  </div>
                  <div className="flex flex-col items-start leading-none">
                    <span className="font-black text-base text-brand-black tracking-widest">SOCKS</span>
                    <span className="text-[8px] text-brand-red font-bold tracking-widest mt-0.5">MADE IN KOREA</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4 word-keep-all">{t("brand.ci_hor_desc")}</p>
            </div>

            {/* Variant 3: 세로 C.I */}
            <div className="bg-brand-gray p-6 rounded-lg text-center border border-gray-100 flex flex-col items-center justify-between">
              <span className="text-[11px] font-bold text-gray-500 tracking-wider uppercase mb-4">{t("brand.ci_ver")}</span>
              <div className="w-full h-32 flex items-center justify-center bg-white p-4 rounded border border-gray-100 shadow-inner">
                {/* Vertical Logo */}
                <div className="flex flex-col items-center space-y-1.5">
                  <div className="w-6 h-6 rounded bg-brand-red flex items-center justify-center text-white font-bold text-[9px]">MK</div>
                  <span className="font-extrabold text-sm text-brand-black tracking-widest leading-none">SOCKS</span>
                  <div className="w-6 h-0.5 bg-brand-yellow"></div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4 word-keep-all">{t("brand.ci_ver_desc")}</p>
            </div>

            {/* Variant 4: 심볼 마크 */}
            <div className="bg-brand-gray p-6 rounded-lg text-center border border-gray-100 flex flex-col items-center justify-between">
              <span className="text-[11px] font-bold text-brand-red tracking-wider uppercase mb-4">{t("brand.ci_sym")}</span>
              <div className="w-full h-32 flex items-center justify-center bg-[#2D2522] p-4 rounded border border-gray-100 shadow-inner">
                {/* Official stylized Symbol Mark */}
                <LogoSymbol size={80} withText={true} withBackground={false} />
              </div>
              <p className="text-xs text-gray-500 mt-4 word-keep-all">{t("brand.ci_sym_desc")}</p>
            </div>

          </div>

          {/* Keyword breakdown chart bottom */}
          <div className="mt-12 p-6 bg-brand-gray rounded-xl border border-gray-100 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-around text-center sm:text-left gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red font-bold text-lg">01</div>
              <div>
                <h4 className="font-bold text-sm text-brand-black">{t("brand.chart1_title")}</h4>
                <p className="text-xs text-gray-500">{t("brand.chart1_desc")}</p>
              </div>
            </div>
            <div className="text-gray-300 hidden sm:block text-2xl font-light">+</div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow font-bold text-lg">02</div>
              <div>
                <h4 className="font-bold text-sm text-brand-black">{t("brand.chart2_title")}</h4>
                <p className="text-xs text-gray-500">{t("brand.chart2_desc")}</p>
              </div>
            </div>
            <div className="text-gray-300 hidden sm:block text-2xl font-light">+</div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-brand-black/10 flex items-center justify-center text-brand-black font-bold text-lg">03</div>
              <div>
                <h4 className="font-bold text-sm text-brand-black">{t("brand.chart3_title")}</h4>
                <p className="text-xs text-gray-500">{t("brand.chart3_desc")}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
