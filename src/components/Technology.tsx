import React from "react";
import { Cpu, Zap, Activity, ShieldAlert, Award } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";

export default function Technology() {
  const { language, t, getTechItems, getStatItems } = useLanguage();
  const techItems = getTechItems();
  const statItems = getStatItems();

  return (
    <section id="technology" className="bg-brand-dark text-white relative overflow-hidden">
      {/* Visual glowing geometric circles for high-tech aesthetic */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid lines layout to reflect computer engineering precision */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Section 05: Technology (Premium dark aesthetic mimicking Page 5 of PDF catalog) */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-yellow font-bold text-xs tracking-widest uppercase bg-brand-yellow/10 px-3 py-1.5 rounded-full"
            >
              {t("tech.badge")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3 mb-4"
            >
              {language === "en" ? "MKSOCKS CORE TECHNOLOGY" : "MKSOCKS 핵심 편직 기술력"}
            </motion.h2>
            <div className="w-12 h-1 bg-brand-yellow mx-auto mb-6" />
            <p className="text-sm text-gray-400 max-w-xl mx-auto word-keep-all font-light">
              {language === "en" 
                ? "30 years of field-knitting know-how combined with computerized precision engineering." 
                : "30년의 현장 편직 노하우가 초정밀 무인 자동화 컴퓨터 공학과 융합되어 직조 공정에 혁신을 이룹니다."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techItems.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A1A1A] p-8 rounded-xl border-l-4 border-brand-yellow border-t border-r border-b border-white/5 hover:border-brand-yellow/30 transition-all duration-300 text-left hover:bg-[#222] group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg sm:text-xl font-extrabold text-brand-yellow group-hover:text-white transition-colors">
                    {tech.title}
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
                    0{index + 1}
                  </span>
                </div>
                
                <p className="text-xs font-mono font-semibold text-gray-400 mb-3 tracking-wider">
                  {tech.englishTitle}
                </p>
                
                <p className="text-sm text-gray-300 leading-relaxed font-light word-keep-all mb-4">
                  {tech.description}
                </p>

                <p className="text-xs text-gray-500 leading-relaxed font-light border-t border-white/5 pt-4">
                  {tech.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 08: Capability Stats (High-end Crimson backdrop reflecting Page 8 of PDF catalog) */}
        <div id="capability" className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-brand-red to-[#5c1a12] p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl mt-12">
          {/* Cover image under the stats overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-overlay opacity-15"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200')"
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <div className="text-center mb-12 max-w-2xl">
              <span className="text-xs font-bold font-mono tracking-widest text-brand-yellow uppercase bg-brand-yellow/20 px-3 py-1 rounded">
                FACTORY CAPABILITY & SCALABILITY
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-4 mb-3">
                {language === "en" ? "Solid Trust & Capability Proven by Numbers" : "숫자로 검증하는 굳건한 신뢰 역량"}
              </h3>
              <p className="text-xs text-white/80 leading-relaxed font-light word-keep-all">
                {language === "en"
                  ? "MKSOCKS operates and maintains certified physical assets to seamlessly support large-scale mass production orders, strict partner brand QC, and rapid delivery timelines."
                  : "MKSOCKS는 대형 양산 오더와 PB 브랜드의 까다로운 품질 검수, 신속 납기를 즉시 지원하기 위해 검증된 물리적 자산을 상주 보유하고 운영합니다."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              {statItems.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <h4 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-yellow font-display mb-2 tracking-tight">
                    {stat.value}
                  </h4>
                  <p className="text-sm font-bold text-white mb-2">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-white/70 leading-normal font-light word-keep-all">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Additional Factory hardware statistics bottom notes */}
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 justify-center text-center sm:text-left border-t border-white/10 pt-8 w-full max-w-4xl">
              <div className="flex items-center space-x-2 bg-brand-yellow/10 text-brand-yellow px-3 py-1 rounded-full text-xs font-bold border border-brand-yellow/20 shrink-0">
                <Award size={14} />
                <span>KOREA CERTIFIED</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-light max-w-xl">
                {language === "en"
                  ? "Our directly managed knitting facility is situated in Daegu. The 25 unmanned automated weaving units feature real-time needle abrasion sensing systems to prevent thread twisting or knot distortion beforehand."
                  : "본사 직영 편직 공장은 대구광역시 국가산단대로에 위치해 있으며, 25대의 편직 전담 무인 오토 기계는 실시간 바늘 마모도 정합 감지 시스템을 적용하여 단 1온스의 올 뒤틀림이나 코 뭉침도 사전 차단합니다."}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
