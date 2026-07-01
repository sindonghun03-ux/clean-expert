import React, { useState, useEffect } from "react";
import { CheckCircle2, Calculator, Mail, HelpCircle, FileCheck, PhoneCall, Sparkles } from "lucide-react";
import { ProductCategory } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { getAssetUrl } from "../utils";

export default function OemInquiry() {
  const [socksType, setSocksType] = useState<string>("business-long");
  const { language, t } = useLanguage();

  const socksCategories = [
    { id: "business-long", name: "정장 · 장목 양말", english: "Business Long" },
    { id: "ankle", name: "기본 발목 양말", english: "Ankle Casual" },
    { id: "fashion-pattern", name: "캐릭터 & 패션 양말", english: "Fashion Pattern" },
    { id: "fake-socks", name: "안 벗겨지는 페이크삭스", english: "No-Show Fake" },
    { id: "glitter", name: "반짝이는 글리터 양말", english: "Glitter Premium" },
    { id: "knee-socks", name: "아웃도어 니삭스", english: "Knee High Functional" },
    { id: "sport", name: "파일 스포츠 양말", english: "Double Cushion Sport" },
    { id: "foot-cover", name: "플랫용 풋커버 양말", english: "Invisible Foot Cover" },
  ];

  // Recommendations calculated based on selected type
  const [recommendations, setRecommendations] = useState({
    needle: "200침 (200N)",
    yarns: "국산 프리미엄 코마사 면 67%, 고신축 나일론 28%, 라이크라 스판 3%, 스판 고무 2%",
    thickness: "두께 얇고 촘촘함 (정장 구두 및 격식용)",
    moq: 1000,
    unitWeight: "39g",
    priceRange: "1,500원 ~ 1,800원"
  });

  useEffect(() => {
    switch (socksType) {
      case "business-long":
        setRecommendations({
          needle: language === "en" ? "200 Needle (200N Computer)" : "200침 (200N Computer)",
          yarns: language === "en" ? "Premium Cotton 67%, Nylon 28%, Span 3%, Rubber 2%" : "최고급 면 67%, 나일론 28%, 스판 3%, 고무 2%",
          thickness: language === "en" ? "Thin, very even, tightly woven structure perfectly matching dress shoes" : "얇고 매우 고르며 신사 구두에 완벽히 정합되는 촘촘한 직조",
          moq: 1000,
          unitWeight: "39g",
          priceRange: language === "en" ? "1,600 KRW ~ 1,900 KRW" : "1,600원 ~ 1,900원"
        });
        break;
      case "ankle":
        setRecommendations({
          needle: language === "en" ? "168 Needle (168N Computer)" : "168침 (168N Computer)",
          yarns: language === "en" ? "Combed Cotton 80%, Nylon 17%, Span 3%" : "코마사 면 80%, 나일론 17%, 스판 3%",
          thickness: language === "en" ? "Medium thickness, excellent for daily casual and trousers matching" : "중간 두께, 일상 캐주얼과 면바지, 청바지 배칭에 탁월함",
          moq: 1000,
          unitWeight: "39g",
          priceRange: language === "en" ? "1,300 KRW ~ 1,500 KRW" : "1,300원 ~ 1,500원"
        });
        break;
      case "fashion-pattern":
        setRecommendations({
          needle: language === "en" ? "144 Needle (144N Computer)" : "144침 (144N Computer)",
          yarns: language === "en" ? "Cotton 67%, Nylon 28%, Span 3%, Rubber 2%" : "면 67%, 나일론 28%, 스판 3%, 고무 2%",
          thickness: language === "en" ? "Medium thickness, optimized for delicate 3D patterns and multicolor embroidery" : "중간 두께, 정교한 컴퓨터 입체 패턴 및 다색 자수 마킹 특화",
          moq: 1000,
          unitWeight: "39g",
          priceRange: language === "en" ? "1,500 KRW ~ 1,800 KRW" : "1,500원 ~ 1,800원"
        });
        break;
      case "glitter":
        setRecommendations({
          needle: language === "en" ? "144 Needle (144N Computer)" : "144침 (144N Computer)",
          yarns: language === "en" ? "Nylon 55%, Polyester 29%, Metallic Covering 16%" : "나일론 55%, 폴리에스테르 29%, 메탈리시트 파이르 16%",
          thickness: language === "en" ? "Thin, semi-sheer fabric with glamorous sparkling special covering yarn weaving" : "얇고 비치며 글래머러스하게 반짝이는 특수 패션 가공사 편직",
          moq: 2000,
          unitWeight: "25g",
          priceRange: language === "en" ? "1,800 KRW ~ 2,200 KRW" : "1,800원 ~ 2,200원"
        });
        break;
      case "fake-socks":
        setRecommendations({
          needle: language === "en" ? "180 Needle (180N Computer)" : "180침 (180N Computer)",
          yarns: language === "en" ? "Cotton 80%, Nylon 17%, Spandex 3% (Anti-slip premium silicone backing)" : "면 80%, 나일론 17%, 스판덱스 3% (후면 무독성 프리미엄 실리콘 밀착)",
          thickness: language === "en" ? "Thin, highly stretchable round cut design that never slips off inside shoes" : "얇고 신축성이 뛰어나며 신발 속에서 벗겨지지 않는 라운드 설계",
          moq: 2000,
          unitWeight: "25g",
          priceRange: language === "en" ? "1,200 KRW ~ 1,400 KRW" : "1,200원 ~ 1,400원"
        });
        break;
      case "knee-socks":
        setRecommendations({
          needle: language === "en" ? "132 Needle (132N Computer)" : "132침 (132N Computer)",
          yarns: language === "en" ? "Cotton 93%, Polyester 5%, Spandex 2%" : "면 93%, 폴리에스테르 5%, 스판덱스 2%",
          thickness: language === "en" ? "Thick, outstanding warmth, long length covering below the knee" : "두껍고 보온성이 탁월하며 무릎 아래까지 촘촘히 덮는 롱 기장",
          moq: 1000,
          unitWeight: "56g",
          priceRange: language === "en" ? "2,200 KRW ~ 2,600 KRW" : "2,200원 ~ 2,600원"
        });
        break;
      case "sport":
        setRecommendations({
          needle: language === "en" ? "132 Needle (132N Computer)" : "132침 (132N Computer)",
          yarns: language === "en" ? "Cotton 93%, Polyester 5%, Spandex 2% (Double-terry cushion sole)" : "면 93%, 폴리에스테르 5%, 스판덱스 2% (바닥 이중 파일 쿠션 설계)",
          thickness: language === "en" ? "Thick double-cushion sole dispersing impact with dynamic arch-band support" : "두툼한 이중 쿠션 바닥으로 충격을 분산하고 아치 압박 밴드 가동",
          moq: 1000,
          unitWeight: "56g",
          priceRange: language === "en" ? "1,700 KRW ~ 2,100 KRW" : "1,700원 ~ 2,100원"
        });
        break;
      case "foot-cover":
        setRecommendations({
          needle: language === "en" ? "132 Needle (132N Computer)" : "132침 (132N Computer)",
          yarns: language === "en" ? "Cotton 67%, Nylon 28%, Span 3%, Rubber 2% (Sole non-slip floral print)" : "면 67%, 나일론 28%, 스판 3%, 고무 2% (바닥 논슬립 꽃무늬)",
          thickness: language === "en" ? "Ultra-low foot line skin for flat shoes, reinforced with slip-resistant silicone sole" : "플랫 구두용 초극소 풋라인 스킨으로 바닥 실리콘 마찰 보강",
          moq: 2000,
          unitWeight: "39g",
          priceRange: language === "en" ? "1,400 KRW ~ 1,700 KRW" : "1,400원 ~ 1,700원"
        });
        break;
    }
  }, [socksType, language]);

  return (
    <section id="oem-guide" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-bold text-xs tracking-widest uppercase bg-brand-red/5 px-3 py-1.5 rounded-full"
          >
            {t("oem.badge")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight mt-3 mb-4"
          >
            {t("oem.title")}
          </motion.h2>
          <div className="w-12 h-1 bg-brand-red mx-auto mb-6" />
        </div>

        {/* Introduction row matching catalog visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 border-b border-gray-100 pb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden aspect-video shadow-lg"
          >
            <img
              src={getAssetUrl("./images/mksocks_factory_floor_1782873856196.jpg")}
              alt="MKSOCKS Factory Machine Floor"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-black/35" />
            <div className="absolute bottom-6 left-6 text-white text-left max-w-sm">
              <p className="text-[10px] font-bold font-mono tracking-widest uppercase text-brand-yellow">MKSocks Factory</p>
              <h4 className="text-xl font-bold mt-1">
                {language === "en" 
                  ? "Daegu Headquarters Factory: 25 High-Precision Computer Machines Running 24/7" 
                  : "대구 남구 본사 직영 컴퓨터 25대 자동 정합 전격 가동"}
              </h4>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-black text-brand-black leading-tight">
              {language === "en" ? (
                <>Rebirth your unique fashion ideas into <span className="text-brand-red">the finest premium brand socks</span>.</>
              ) : (
                <>귀사의 독창적인 패션 아이디어를<br/>
                <span className="text-brand-red">최고의 명품 브랜드 양말</span>로 재탄생 시킵니다.</>
              )}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed word-keep-all font-light">
              {language === "en" ? (
                "MKSOCKS is not a simple subcontractor. We leverage 30 years of socks knitting engineering and South Korea's highest-class domestic raw material lineup to guarantee a partnership that derives the optimal needle count ratio and yarn configuration from your simple rough sketches or concepts."
              ) : (
                "MKSOCKS는 단순 위탁 공장이 아닙니다. 양말 편직 엔지니어링 30년 역량과 국내 최고 수준의 국산 원료 라인업을 상주 동원하여, 고객사의 단순 러프 도안 스케치 및 컨셉 만으로도 최상의 바늘 땀수 배율과 원사를 도출하는 파트너십을 보장합니다."
              )}
            </p>

            <ul className="space-y-3.5 pt-2">
              <li className="flex items-start space-x-3 text-sm text-gray-700">
                <CheckCircle2 className="text-brand-red shrink-0 mt-0.5" size={18} />
                <span className="word-keep-all">
                  {language === "en" 
                    ? "Bulk corporate promotion, franchise group orders, and PB brand planning/consignment production" 
                    : "대량 기업 판촉, 프랜차이즈 단체 주문 및 PB 브랜드 기획·위탁 전격 생산"}
                </span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-700">
                <CheckCircle2 className="text-brand-red shrink-0 mt-0.5" size={18} />
                <span className="word-keep-all">
                  {language === "en" 
                    ? "Simply deliver a rough design sketch, and we will comprehensively propose the optimal yarn mix and design guidance" 
                    : "러프 시안 스케치만 전달하시면 성분비 및 최적의 원사 가이던스 일괄 제안"}
                </span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-700">
                <CheckCircle2 className="text-brand-red shrink-0 mt-0.5" size={18} />
                <span className="word-keep-all">
                  {language === "en" 
                    ? "Guaranteed safe and rapid delivery after thoroughly packaging and passing 100% visual/mechanical inspection" 
                    : "완벽한 전수 육안/기계 가공 검수 통과 완료 후 철저히 패키징하여 안전 신속 출고 보장"}
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* INTERACTIVE SPECIFICATION MATCHING */}
        <div className="bg-brand-gray rounded-2xl border border-gray-100 p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Left Column: List of Socks Types as beautiful clickable tabs */}
            <div className="w-full lg:w-1/2 text-left space-y-4">
              <div className="flex items-center space-x-2 border-b border-gray-200 pb-3 mb-4">
                <Sparkles className="text-brand-red" size={20} />
                <h3 className="font-extrabold text-lg text-brand-black">{t("oem.config_title")}</h3>
                <span className="text-xs text-gray-400 font-mono ml-auto">{t("oem.click_tip")}</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {socksCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSocksType(cat.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between h-24 ${
                      socksType === cat.id
                        ? "bg-brand-red border-brand-red text-white shadow-md transform -translate-y-0.5"
                        : "bg-white border-gray-100 hover:border-gray-300 text-brand-black hover:bg-gray-50"
                    }`}
                  >
                    <span className={`text-[10px] font-bold tracking-wider uppercase ${socksType === cat.id ? "text-brand-yellow" : "text-brand-red"}`}>
                      {cat.english}
                    </span>
                    <span className="font-extrabold text-sm mt-1">
                      {language === "en" ? cat.english : cat.name}
                    </span>
                  </button>
                ))}
              </div>
              
              {/* Quick direct call helper card */}
              <div className="p-5 bg-brand-yellow/10 rounded-xl border border-brand-yellow/20 text-left flex items-start space-x-3.5 mt-6">
                <PhoneCall className="text-brand-yellow shrink-0 mt-0.5" size={18} />
                <div>
                  <h5 className="font-bold text-xs text-brand-black">{t("oem.direct_call_title")}</h5>
                  <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                    {t("oem.direct_call_desc")}
                  </p>
                  <p className="text-xs font-black text-brand-black mt-2">
                    {t("oem.direct_num")} <span className="text-brand-red">053-611-7237</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Visual Summary of Recommendations */}
            <div className="w-full lg:w-1/2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={socksType}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="bg-brand-black text-white p-6 sm:p-8 rounded-2xl border border-white/5 space-y-6 text-left relative overflow-hidden shadow-xl flex flex-col justify-between h-full"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-full blur-2xl" />

                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 border-b border-white/10 pb-4 justify-between">
                      <div className="flex items-center space-x-2">
                        <Sparkles className="text-brand-yellow animate-pulse" size={18} />
                        <h4 className="font-black text-base text-brand-yellow">{t("oem.spec_title")}</h4>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-1 bg-white/10 rounded tracking-wider uppercase text-gray-300">
                        {socksType}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-xs">
                      <div className="border-b border-white/5 pb-2 sm:border-none sm:pb-0">
                        <span className="text-gray-400 block font-bold mb-1">{t("oem.spec_needle")}</span>
                        <p className="text-white font-extrabold text-sm">{recommendations.needle}</p>
                      </div>
                      <div className="border-b border-white/5 pb-2 sm:border-none sm:pb-0">
                        <span className="text-gray-400 block font-bold mb-1">{t("oem.spec_weight")}</span>
                        <p className="text-white font-extrabold text-sm">{recommendations.unitWeight}</p>
                      </div>
                      <div className="sm:col-span-2 border-b border-white/5 pb-2">
                        <span className="text-gray-400 block font-bold mb-1">{t("oem.spec_yarn")}</span>
                        <p className="text-gray-200 leading-relaxed font-light">{recommendations.yarns}</p>
                      </div>
                      <div className="sm:col-span-2 border-b border-white/5 pb-2">
                        <span className="text-gray-400 block font-bold mb-1">{t("oem.spec_thickness")}</span>
                        <p className="text-gray-200 leading-relaxed font-light">{recommendations.thickness}</p>
                      </div>
                      <div className="sm:col-span-2 pt-1">
                        <div>
                          <span className="text-gray-400 block font-bold mb-1">{t("oem.spec_moq")}</span>
                          <p className="text-brand-yellow font-extrabold text-sm">
                            {recommendations.moq.toLocaleString()} {language === "en" ? "Pairs" : "켤레"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white/5 rounded border border-white/10 text-[11px] text-gray-300 leading-relaxed font-light mt-6">
                    <strong>{t("oem.spec_read")}</strong> {t("oem.spec_read_desc")}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
