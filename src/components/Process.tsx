import React, { useState } from "react";
import { ChevronRight, FileText, CheckCircle2, Sliders, Play, Archive, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../LanguageContext";

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const { language, t, getProcessSteps } = useLanguage();
  const processSteps = getProcessSteps();

  const getStepIcon = (id: number) => {
    switch (id) {
      case 1:
        return <FileText size={18} />;
      case 2:
        return <CheckCircle2 size={18} />;
      case 3:
        return <Sliders size={18} />;
      case 4:
        return <Play size={18} fill="currentColor" />;
      case 5:
        return <Archive size={18} />;
      default:
        return <HelpCircle size={18} />;
    }
  };

  const clientTips = [
    {
      stepId: 1,
      tip: language === "en"
        ? "Socks designs can be accepted in illustrator format (AI) or high-res PDF/PNG files. Even without structured drawings, a pencil sketch or reference photo is fully sufficient; our textile engineer will directly re-interpret and reconstruct it into a computerized design."
        : "양말 도안은 일러스트 파일(AI) 혹은 고해상도 PDF/PNG 파일 모두 접수 가능합니다. 구체적인 드로잉이 없더라도 수작업 연필 스케치나 벤치마킹하고 싶은 샘플 실물 사진만으로도 컴퓨터 편직 시안으로 편직 엔지니어가 직접 재해석하여 맞춤 복각해드립니다."
    },
    {
      stepId: 2,
      tip: language === "en"
        ? "MKSOCKS maintains a massive inventory of pre-dyed yarns. This enables immediate deployment to knitting lines without waiting for dyeing procedures, saving 5–7 days compared to other manufacturers and shortening delivery times dramatically."
        : "MKSOCKS는 염색이 완료된 원사를 대량 비치하고 있습니다. 별도 염색 작업 없이 바로 편직 가동에 투입할 수 있어, 타 제조사 대비 약 5~7일의 가동 대기 기일을 단축하며 납기를 드라마틱하게 줄일 수 있습니다."
    },
    {
      stepId: 3,
      tip: language === "en"
        ? "We meticulously check the linking mechanism where needles and threads feed. At this point, we enter double-sole cushioning specs or metallic jacquard organizations into the computer, running a sample test to verify unit weight and hand-feel with the client before full weaving."
        : "편직 바늘과 실이 투입되는 링킹 장치를 정밀 체크합니다. 이때 이중 쿠션 바닥 사양이나 메탈릭 자카드 배색 조직을 컴퓨터에 입력하여 시험 편직을 1차 진행하고, 본 편직 전 중량과 촉감을 클라이언트와 확인합니다."
    },
    {
      stepId: 4,
      tip: language === "en"
        ? "Mass-production is operated at maximum speed across 25 computerized knitting machines. A single pair of premium socks takes less than a few minutes to weave. High-efficiency mass-production is executed on a one-stop timeline."
        : "대형 컴퓨터 편직기 25대에서 최고 속도로 가동 편직됩니다. 양말 한 켤레를 완벽하게 고속 편직하는 데 소요되는 시간은 불과 수분 이내입니다. 고효율 대량 생산을 원스톱 진행합니다."
    },
    {
      stepId: 5,
      tip: language === "en"
        ? "Delivery is completed by applying our client brand's unique card tags, stickers, or packaging boxes. During wrapping, thread cleaning and seam checking are triply evaluated manually and mechanically to guarantee a zero-defect shipment rate."
        : "클라이언트 브랜드 고유의 종이 패키지 태그나 스티커, 상자를 적용하여 납품 완료합니다. 포장 작업 중에도 실밥제거와 올 풀림 현상을 육안과 기계로 삼중 점검하여 이상 배송 확률을 제로에 수렴하게 제어합니다."
    }
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-bold text-xs tracking-widest uppercase bg-brand-red/5 px-3 py-1.5 rounded-full"
          >
            {t("process.badge")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight mt-3 mb-4"
          >
            {t("process.title")}
          </motion.h2>
          <div className="w-12 h-1 bg-brand-red mx-auto mb-6" />
          <p className="text-sm text-gray-500 max-w-xl mx-auto word-keep-all">
            {t("process.intro")}
          </p>
        </div>

        {/* TIMELINE GUIDE RAIL (GNB Guide - 제작상담 -> 계약체결 -> 시안확인 -> 제품생산 -> 포장&배송) */}
        <div className="relative mb-16 max-w-4xl mx-auto">
          {/* Horizontal Line connector (Desktop only) */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden md:block z-0" />
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            {processSteps.map((step) => {
              const isActive = activeStep === step.id;
              const isPast = activeStep > step.id;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className="flex flex-row md:flex-col items-center gap-4 md:gap-3 group focus:outline-none w-full md:w-auto cursor-pointer"
                >
                  {/* Step bubble */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-sm border-2 ${
                      isActive
                        ? "bg-brand-red text-white border-brand-red scale-110 ring-4 ring-brand-red/10"
                        : isPast
                        ? "bg-brand-black text-white border-brand-black"
                        : "bg-white text-gray-400 border-gray-200 group-hover:border-gray-300"
                    }`}
                  >
                    {isPast ? "✓" : `0${step.id}`}
                  </div>

                  {/* Text labels */}
                  <div className="text-left md:text-center">
                    <p
                      className={`text-sm font-bold tracking-tight transition-colors duration-200 ${
                        isActive ? "text-brand-red" : "text-brand-black"
                      }`}
                    >
                      {step.guideTitle}
                    </p>
                    <p className="text-[11px] text-gray-400 font-mono hidden md:block mt-0.5">
                      Stage {step.id}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE PROCESS STEP MAIN CONTAINER */}
        <div className="bg-brand-gray rounded-2xl border border-gray-100 p-6 sm:p-10 lg:p-12 shadow-sm min-h-[450px]">
          <AnimatePresence mode="wait">
            {processSteps.map(
              (step) =>
                activeStep === step.id && (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                  >
                    {/* Left side: Beautiful image with step tag */}
                    <div className="lg:col-span-5 relative">
                      <div className="relative rounded-xl overflow-hidden shadow-md aspect-4/3 lg:aspect-square">
                        <img
                          src={step.image}
                          alt={step.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-brand-black/85 text-white py-1 px-3 rounded font-mono text-xs font-bold tracking-widest backdrop-blur-sm">
                          STEP 0{step.id}
                        </div>
                      </div>
                      
                      {/* Interactive Next/Prev indicators */}
                      <div className="flex justify-between items-center mt-4">
                        <button
                          disabled={activeStep === 1}
                          onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                          className={`text-xs font-bold py-1.5 px-3 rounded border cursor-pointer ${
                            activeStep === 1
                              ? "text-gray-300 border-gray-200 bg-gray-50 cursor-not-allowed"
                              : "text-brand-black border-gray-300 hover:bg-white bg-transparent"
                          }`}
                        >
                          {language === "en" ? "Prev Stage" : "이전 단계"}
                        </button>
                        <span className="text-xs text-gray-400 font-mono">
                          {activeStep} / 5
                        </span>
                        <button
                          disabled={activeStep === 5}
                          onClick={() => setActiveStep((prev) => Math.min(5, prev + 1))}
                          className={`text-xs font-bold py-1.5 px-3 rounded border cursor-pointer ${
                            activeStep === 5
                              ? "text-gray-300 border-gray-200 bg-gray-50 cursor-not-allowed"
                              : "text-brand-black border-brand-red bg-brand-red text-white hover:bg-brand-red/90"
                          }`}
                        >
                          {language === "en" ? "Next Stage" : "다음 단계"}
                        </button>
                      </div>
                    </div>

                    {/* Right side: Detailed descriptions */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex items-center space-x-3 text-brand-red">
                        <div className="p-2 bg-brand-red/10 rounded-full">
                          {getStepIcon(step.id)}
                        </div>
                        <span className="font-mono text-xs font-bold uppercase tracking-wider">
                          MKSOCKS Quality Pipeline
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black text-brand-black">
                        {step.title}
                      </h3>

                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed word-keep-all font-semibold">
                        {step.description}
                      </p>

                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed word-keep-all font-light">
                        {step.details}
                      </p>

                      {/* Sub-card: OEM Tip for customers */}
                      {clientTips.map(
                        (tipItem) =>
                          tipItem.stepId === step.id && (
                            <div
                              key={tipItem.stepId}
                              className="p-5 bg-white rounded-lg border border-dashed border-brand-yellow/30 border-l-4 border-l-brand-yellow space-y-2 shadow-sm"
                            >
                              <span className="text-brand-yellow font-extrabold text-[11px] uppercase tracking-widest block font-mono">
                                {language === "en" ? "★ Premium OEM Pro-Tip" : "★ OEM 제작 의뢰 꿀팁"}
                              </span>
                              <p className="text-xs text-gray-600 leading-relaxed word-keep-all font-light">
                                {tipItem.tip}
                              </p>
                            </div>
                          )
                      )}
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
