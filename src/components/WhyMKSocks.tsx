import React from "react";
import { Flag, ShieldCheck, Award, Gem, Layers, Settings, Users, Percent, HelpCircle } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";

export default function WhyMKSocks() {
  const { language, t } = useLanguage();

  const cards = [
    {
      icon: <Flag className="text-[#3498db]" size={36} />,
      title: "Made in Korea",
      desc: language === "en"
        ? "Prioritizing the safety of materials that touch the skin, we use 100% premium South Korean raw materials and manufacture them under strict quality control at our directly managed local headquarters."
        : "피부에 닿는 자재 안전성을 최우선시하여, 100% 엄선된 최고급 국산 원자재만을 투입하고 전 공정을 철저한 국내 본사 직영 공장에서 제조 및 엄격하게 품질 관리합니다.",
    },
    {
      icon: <Settings className="text-brand-yellow" size={36} />,
      title: "Factory Direct Setup",
      desc: language === "en"
        ? "We completely bypassed intermediate margins of distributors or trade agents. Our direct estimate, in-house sourcing, and straight shipping system guarantee the most reasonable supply price table."
        : "유통 대리점이나 무역 벤더사 등의 복잡한 중간 마진 거품을 완전히 걷어냈습니다. 본사 직접 견적 및 자재 소싱, 다이렉트 출고 시스템으로 가장 합리적이고 건강한 공급 단가 테이블을 선사합니다.",
    },
    {
      icon: <Award className="text-brand-red" size={36} />,
      title: "30 Years Lineage",
      desc: language === "en"
        ? "We are a textile expert group that has manufactured only premium socks for over 30 years. Drawing upon robust computer precision coding, we calibrate the optimal tension of every needle."
        : "30여 년간 다른 곳을 쳐다보지 않고 오로지 고품질 양말 하나만 제조해온 텍스타일 전문가 그룹입니다. 풍부한 컴퓨터 정밀 코딩 기술을 기반으로 바늘 하나까지 완벽하게 장력을 가공합니다.",
    },
    {
      icon: <Gem className="text-[#2ecc71]" size={36} />,
      title: "Premium Combed Cotton",
      desc: language === "en"
        ? "Instead of cheap imported yarns, we meticulously comb out fine fuzz to select premium combed cotton yarn that feels exceptionally cozy, durable, and free of post-washing shrinkage."
        : "수입 저급 섬유 대신, 미세 보풀을 기계로 꼼꼼히 털어내 표면이 고르고 촉감이 포근하며 내구성이 뛰어난 프리미엄 코마사 원사만을 엄선해 채택하여 세탁 후 수축을 막아줍니다.",
    },
  ];

  const strengths = [
    {
      icon: <Layers className="text-brand-red" />,
      title: language === "en" ? "High-Quality Knitting Integrity" : "고품질 편직 정합성",
      desc: language === "en"
        ? "Rather than simple mass output, our experienced textile engineers calibrate fabric tension and elasticity for each specific socks category to achieve extreme durability."
        : "단순히 찍어내는 공정이 아니라 숙련된 편직 공학자들이 상주하여, 편직 장력과 탄성을 양말 카테고리별로 정밀 튜닝하여 극강의 내구성을 지향합니다.",
    },
    {
      icon: <Users className="text-[#3498db]" />,
      title: language === "en" ? "Trendy Concept Turnaround" : "트렌디한 시안 대응",
      desc: language === "en"
        ? "Without being stuck in outdated designs, we maintain highly flexible computerized embroidery lines to support casual, street fashion, sports palettes, and shiny glitters seamlessly."
        : "오래된 구식 패턴에 갇히지 않고 캐주얼, 스트릿 패션, 스포티 배색, 메탈 글리터 가공 등 패션업계 디자이너들이 안심하고 오더할 수 있는 유연한 컴퓨터 자수 기술을 수립하고 있습니다.",
    },
    {
      icon: <Gem className="text-brand-yellow" />,
      title: language === "en" ? "Vast Collection of Special Yarns" : "수많은 특수 원사 상시 보유",
      desc: language === "en"
        ? "We maintain vast stocks of metallic threads, silver antibacterial functional fibers, microfibers, and moisture-wicking Coolon yarns to support price stability and prompt production."
        : "메탈사, 실버 안티박테리아 기능성 원사, 극세사, 쿨론 흡한속건사 등 특수 발주 원자재를 대량 상시 확보하여 단가 안정성과 빠른 편직 가동을 지원합니다.",
    },
    {
      icon: <Settings className="text-[#2ecc71]" />,
      title: language === "en" ? "25 Precision Knitting Systems" : "25대 초정밀 무인 자동화 설비",
      desc: language === "en"
        ? "We operate a vertically integrated fleet of 25 computerized state-of-the-art knitting machines. Our 24-hour operation system completely prevents production delays."
        : "본사 소유 공장에 최신 제어 컴퓨터 고정밀 대형 편직기 25대를 수직화 운영하고 있습니다. 24시간 가동 체제로 납기 지연을 사전에 방지합니다.",
    },
  ];

  return (
    <section id="why" className="py-24 bg-brand-gray relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#3498db] font-bold text-xs tracking-widest uppercase bg-[#3498db]/5 px-3 py-1.5 rounded-full"
          >
            {t("why.badge")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight mt-3 mb-4"
          >
            WHY MKSOCKS?
          </motion.h2>
          <div className="w-12 h-1 bg-[#3498db] mx-auto" />
        </div>

        {/* 4 Cards Grid - Core Competitive Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 bg-brand-gray rounded-full">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-4">{card.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed word-keep-all font-light flex-1">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Strengths Grid (06. OUR STRENGTH) */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-gray-100 shadow-sm mt-12">
          <div className="text-center md:text-left mb-10 flex flex-col md:flex-row items-center md:items-end justify-between border-b border-gray-100 pb-6 gap-4">
            <div>
              <h3 className="text-2xl font-black text-brand-black tracking-tight">OUR POWERFUL STRENGTHS</h3>
              <p className="text-sm text-gray-500 mt-1">
                {language === "en" 
                  ? "4 core factory strengths completed at Daegu headquarters production base" 
                  : "대구 직접 생산 기지에서 완성되는 4대 본사 생산 역량"}
              </p>
            </div>
            <span className="text-xs text-brand-red font-bold tracking-widest font-mono bg-brand-red/5 px-2.5 py-1 rounded">
              DIRECT FACTORY ADVANTAGES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-brand-gray transition-colors duration-200"
              >
                <div className="p-2.5 bg-brand-gray rounded-lg border border-gray-200 shrink-0">
                  {React.cloneElement(strength.icon, { size: 24 })}
                </div>
                <div>
                  <h4 className="font-bold text-base text-brand-black mb-1.5">{strength.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed word-keep-all font-light">
                    {strength.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Beautiful Quote Banner */}
        <div className="mt-16 text-center max-w-4xl mx-auto p-8 bg-brand-red/5 rounded-xl border border-brand-red/10">
          <h4 className="text-sm sm:text-base md:text-lg font-bold text-brand-black leading-normal word-keep-all">
            {language === "en" 
              ? '"MKSOCKS never compromises on quality. By lowering our margins and optimizing precision, we vow to be the most reliable cornerstone for partner brands to maximize profits and build customer trust."' 
              : '"MKSOCKS는 품질에 타협하지 않습니다. 마진을 낮추고 정교함을 세팅하여 파트너 브랜드가 최적의 이익을 회수하며 고객 신뢰를 견고히 쌓을 수 있는 가장 든든한 밑받침이 될 것을 선언합니다."'}
          </h4>
          <span className="text-xs text-brand-red font-semibold block mt-3 font-mono">
            — MKSOCKS MANUFACTURING TEAM
          </span>
        </div>

      </div>
    </section>
  );
}
