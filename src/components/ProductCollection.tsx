import React, { useState } from "react";
import { ProductCategory, ProductItem } from "../types";
import { Filter, Scale, Check, Cpu, Sparkles, X, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../LanguageContext";

export default function ProductCollection() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "ALL">("ALL");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [activeYarnInfo, setActiveYarnInfo] = useState<string | null>(null);
  const { language, t, getProducts } = useLanguage();
  const products = getProducts();

  const filteredProducts = selectedCategory === "ALL"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const getCategoryColor = (cat: ProductCategory) => {
    switch (cat) {
      case ProductCategory.BUSINESS:
        return {
          bg: "bg-brand-black",
          text: "text-brand-black",
          badge: "bg-brand-black/10 text-brand-black",
          border: "border-brand-black",
          accentLine: "bg-brand-black",
          hoverBg: "hover:bg-brand-black/90",
          lightBg: "bg-brand-black/5"
        };
      case ProductCategory.FASHION:
        return {
          bg: "bg-brand-red",
          text: "text-brand-red",
          badge: "bg-brand-red/10 text-brand-red",
          border: "border-brand-red",
          accentLine: "bg-brand-red",
          hoverBg: "hover:bg-brand-red/90",
          lightBg: "bg-brand-red/5"
        };
      case ProductCategory.FUNCTIONAL:
        return {
          bg: "bg-brand-yellow",
          text: "text-brand-yellow",
          badge: "bg-brand-yellow/10 text-brand-black",
          border: "border-brand-yellow",
          accentLine: "bg-brand-yellow",
          hoverBg: "hover:bg-brand-yellow/90",
          lightBg: "bg-brand-yellow/5"
        };
    }
  };

  // Explains what each material component does
  const getYarnFunction = (materialName: string) => {
    const rawName = materialName.trim();
    if (rawName.includes("면") || rawName.includes("코마사") || rawName.includes("Cotton")) {
      return language === "en"
        ? "Premium South Korean cotton yarn with minimized impurities. Non-irritating and absorbs sweat excellently."
        : "이물질을 최소화한 고급 국산 원사로 자극이 없으며, 땀 흡수력이 뛰어납니다.";
    }
    if (rawName.includes("나일론") || rawName.includes("Nylon")) {
      return language === "en"
        ? "Retains shape preservation and strengthens abrasion resistance dozens of times to prevent tears."
        : "양말의 형태 보존성을 견인하며 마찰 강도를 수십 배 강화해 터짐을 막아줍니다.";
    }
    if (rawName.includes("스판") || rawName.includes("스판덱스") || rawName.includes("Span") || rawName.includes("Spandex")) {
      return language === "en"
        ? "Provides excellent elasticity matching the contour of the foot with superior restoration strength."
        : "고무줄보다 우수한 복원력과 인장 강도로, 발 모양에 맞게 입체 가동 탄성을 부여합니다.";
    }
    if (rawName.includes("고무") || rawName.includes("Rubber")) {
      return language === "en"
        ? "Prevents stretching even after hundreds of washes without excessively squeezing the calf or ankle."
        : "종아리나 발목을 과압박하지 않으면서도 수백회 세탁에도 늘어남을 방지합니다.";
    }
    if (rawName.includes("폴리") || rawName.includes("폴리에스테르") || rawName.includes("Polyester")) {
      return language === "en"
        ? "Rapidly disperses moisture to deliver fast-drying effects optimized for dynamic sports activities."
        : "스포츠 활성에 걸맞게 수분을 신속 분산 배출하며 빠른 건조 효과를 실현합니다.";
    }
    if (rawName.includes("메탈") || rawName.includes("금속") || rawName.includes("Metallic")) {
      return language === "en"
        ? "Special metallic covering yarn free of scratchiness, completing a fascinating fashion mood."
        : "피부 까슬거림이 없는 특수 메탈릭 커버링사로, 매혹적인 패션 무드를 완성합니다.";
    }
    return language === "en"
      ? "Reliable premium raw material combination passing MKSOCKS' strict material standards."
      : "MKSOCKS의 엄격한 자재 기준을 통과한 신뢰받는 프리미엄 원자재 구성입니다.";
  };

  return (
    <section id="product" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-black font-bold text-xs tracking-widest uppercase bg-brand-black/5 px-3 py-1.5 rounded-full"
          >
            {t("product.badge")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight mt-3 mb-4"
          >
            {t("product.title")}
          </motion.h2>
          <div className="w-12 h-1 bg-brand-black mx-auto mb-6" />
          <p className="text-sm text-gray-500 max-w-xl mx-auto word-keep-all font-light">
            {t("product.intro")}
          </p>
        </div>

        {/* Filter Tabs Menu */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory("ALL")}
            className={`px-5 py-2.5 rounded-full text-xs font-black tracking-wider transition-all duration-300 cursor-pointer border ${
              selectedCategory === "ALL"
                ? "bg-brand-black text-white border-brand-black shadow-md scale-105"
                : "bg-transparent text-gray-500 border-gray-200 hover:border-gray-300 hover:text-brand-black"
            }`}
          >
            {t("product.all")}
          </button>
          
          <button
            onClick={() => setSelectedCategory(ProductCategory.BUSINESS)}
            className={`px-5 py-2.5 rounded-full text-xs font-black tracking-wider transition-all duration-300 cursor-pointer border flex items-center space-x-2 ${
              selectedCategory === ProductCategory.BUSINESS
                ? "bg-brand-black text-white border-brand-black shadow-md scale-105"
                : "bg-transparent text-gray-500 border-gray-200 hover:border-brand-black hover:text-brand-black"
            }`}
          >
            <div className="w-2.5 h-2.5 bg-brand-black rounded-full" />
            <span>{t("product.cat_business")}</span>
          </button>

          <button
            onClick={() => setSelectedCategory(ProductCategory.FASHION)}
            className={`px-5 py-2.5 rounded-full text-xs font-black tracking-wider transition-all duration-300 cursor-pointer border flex items-center space-x-2 ${
              selectedCategory === ProductCategory.FASHION
                ? "bg-brand-red text-white border-brand-red shadow-md scale-105"
                : "bg-transparent text-gray-500 border-gray-200 hover:border-brand-red hover:text-brand-red"
            }`}
          >
            <div className="w-2.5 h-2.5 bg-brand-red rounded-full" />
            <span>{t("product.cat_fashion")}</span>
          </button>

          <button
            onClick={() => setSelectedCategory(ProductCategory.FUNCTIONAL)}
            className={`px-5 py-2.5 rounded-full text-xs font-black tracking-wider transition-all duration-300 cursor-pointer border flex items-center space-x-2 ${
              selectedCategory === ProductCategory.FUNCTIONAL
                ? "bg-brand-yellow text-brand-black border-brand-yellow shadow-md scale-105"
                : "bg-transparent text-gray-500 border-gray-200 hover:border-brand-yellow hover:text-brand-black"
            }`}
          >
            <div className="w-2.5 h-2.5 bg-brand-yellow rounded-full" />
            <span>{t("product.cat_functional")}</span>
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const colors = getCategoryColor(product.category);

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="bg-brand-gray rounded-xl overflow-hidden border border-gray-100 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5"
                >
                  {/* Photo area with active category overlay */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Category Label overlay */}
                    <div className="absolute top-4 left-4">
                      <span className={`text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded shadow-sm text-white ${colors.bg}`}>
                        {product.category === ProductCategory.BUSINESS && t("product.cat_business")}
                        {product.category === ProductCategory.FASHION && t("product.cat_fashion")}
                        {product.category === ProductCategory.FUNCTIONAL && t("product.cat_functional")}
                      </span>
                    </div>

                    {/* Weight badge */}
                    <div className="absolute bottom-4 right-4 bg-brand-black/80 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-0.5 rounded font-semibold flex items-center space-x-1">
                      <Scale size={10} />
                      <span>{product.weight}g</span>
                    </div>
                  </div>

                  {/* Text descriptions */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] text-gray-400 font-mono font-bold tracking-wide">
                          {product.needleType}
                        </span>
                        <span className="text-[10px] text-gray-400 font-light font-mono">
                          {product.englishName}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-black text-brand-black tracking-tight mb-2 group-hover:text-brand-red transition-colors">
                        {product.name}
                      </h3>
                      
                      <p className="text-xs text-gray-500 leading-normal word-keep-all font-light mb-4 line-clamp-2">
                        {product.tagline}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedProduct(product);
                        setActiveYarnInfo(null);
                      }}
                      className={`w-full py-2.5 rounded font-bold text-xs tracking-wider transition-colors duration-200 cursor-pointer border text-center ${colors.text} ${colors.border} ${colors.lightBg} hover:bg-white`}
                    >
                      {t("product.viewDetail")}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* FULL SPECIFICATION SHEET DIALOG OVERLAY */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/85 backdrop-blur-sm">
              
              {/* Back close shield */}
              <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedProduct(null)} />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.4 }}
                className="relative bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/10 flex flex-col lg:flex-row max-h-[90vh] lg:max-h-none overflow-y-auto"
              >
                
                {/* Close Button top-right */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 bg-brand-black/80 hover:bg-brand-black text-white p-2 rounded-full z-20 cursor-pointer transition-colors shadow-lg"
                  aria-label="Close Modal"
                >
                  <X size={18} />
                </button>

                {/* Left Side: Photo panel with category layout */}
                <div className="relative w-full lg:w-1/2 h-72 lg:h-auto min-h-[300px] lg:min-h-[500px]">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  {/* High visual overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-brand-black/20" />
                  
                  {/* Category description tag */}
                  <div className="absolute bottom-6 left-6 text-white text-left space-y-1">
                    <span className={`text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded text-white ${getCategoryColor(selectedProduct.category).bg}`}>
                      {selectedProduct.category === ProductCategory.BUSINESS && t("product.cat_business")}
                      {selectedProduct.category === ProductCategory.FASHION && t("product.cat_fashion")}
                      {selectedProduct.category === ProductCategory.FUNCTIONAL && t("product.cat_functional")} SOCKS
                    </span>
                    <h4 className="text-2xl font-black tracking-tight drop-shadow">
                      {selectedProduct.name}
                    </h4>
                    <p className="text-xs text-gray-200 font-mono drop-shadow font-light">
                      {selectedProduct.englishName}
                    </p>
                  </div>
                </div>

                {/* Right Side: High fidelity Spec details Sheet */}
                <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[60vh] lg:max-h-[85vh]">
                  <div className="space-y-6">
                    
                    {/* Header Spec Tagline */}
                    <div className="border-b border-gray-100 pb-4">
                      <span className="text-[10px] font-mono font-extrabold text-gray-400 block tracking-wider uppercase">
                        {language === "en" ? "Product Specification Sheet" : "상세 품질 사양서"}
                      </span>
                      <h4 className="text-lg font-extrabold text-brand-black mt-1">
                        {selectedProduct.tagline}
                      </h4>
                      <div className={`w-12 h-1 mt-3 ${getCategoryColor(selectedProduct.category).accentLine}`} />
                    </div>

                    {/* Sizing, weight, needles specification grid */}
                    <div className="grid grid-cols-2 gap-4 bg-brand-gray p-4 rounded-lg">
                      <div className="flex items-center space-x-2.5">
                        <Cpu className="text-gray-400" size={18} />
                        <div>
                          <p className="text-[10px] text-gray-400 font-mono uppercase">
                            {language === "en" ? "Needle Specification" : "편직 장비 사양"}
                          </p>
                          <p className="text-xs font-bold text-brand-black">{selectedProduct.needleType}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2.5">
                        <Scale className="text-gray-400" size={18} />
                        <div>
                          <p className="text-[10px] text-gray-400 font-mono uppercase">
                            {language === "en" ? "Average Unit Weight" : "평균 한 켤레 중량"}
                          </p>
                          <p className="text-xs font-bold text-brand-black">{selectedProduct.weight}g (±2g)</p>
                        </div>
                      </div>
                    </div>

                    {/* Narrative Description */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light word-keep-all">
                      {selectedProduct.description}
                    </p>

                    {/* Material breakdown - Interactive Yarn Simulator */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-brand-black">
                          {language === "en" ? "Raw Material Composition" : "원자재 혼합 성분비"}
                        </span>
                        <span className="text-[10px] text-gray-400 flex items-center space-x-1">
                          <Info size={10} />
                          <span>
                            {language === "en" ? "Click raw materials to check functional purpose." : "성분을 클릭하면 기술 목적을 확인합니다."}
                          </span>
                        </span>
                      </div>

                      {/* Bar graph list */}
                      <div className="space-y-3">
                        {selectedProduct.materials.map((mat) => (
                          <button
                            key={mat.name}
                            onClick={() => {
                              if (activeYarnInfo === mat.name) {
                                setActiveYarnInfo(null);
                              } else {
                                setActiveYarnInfo(mat.name);
                              }
                            }}
                            className="w-full text-left focus:outline-none group/bar cursor-pointer block"
                          >
                            <div className="flex justify-between items-center text-xs text-gray-600 mb-1">
                              <span className="font-bold text-brand-black group-hover/bar:text-brand-red transition-colors flex items-center space-x-1">
                                <span>{mat.name}</span>
                                <Sparkles size={10} className="text-gray-300 group-hover/bar:text-brand-yellow" />
                              </span>
                              <span className="font-mono font-bold text-brand-black">{mat.percentage}%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-500 ${getCategoryColor(selectedProduct.category).bg}`}
                                style={{ width: `${mat.percentage}%` }}
                              />
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Active fabric component explainer card */}
                      <AnimatePresence>
                        {activeYarnInfo && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 p-3.5 bg-brand-yellow/10 border-l-4 border-brand-yellow rounded text-xs text-brand-black/90 leading-relaxed font-light word-keep-all shadow-inner overflow-hidden"
                          >
                            <span className="font-bold text-brand-black block mb-0.5">
                              {language === "en" ? `[Yarn Function] ${activeYarnInfo}` : `[원사 기능] ${activeYarnInfo}`}
                            </span>
                            {getYarnFunction(activeYarnInfo)}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Features checklist */}
                    <div>
                      <span className="text-xs font-bold text-brand-black block mb-2.5">
                        {language === "en" ? "Special Design Features" : "특수 가공 디자인 특징"}
                      </span>
                      <ul className="space-y-2">
                        {selectedProduct.features.map((feat) => (
                          <li key={feat} className="flex items-start space-x-2 text-xs text-gray-500 font-light leading-relaxed">
                            <Check className="text-green-500 shrink-0 mt-0.5" size={14} />
                            <span className="word-keep-all">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Bottom close modal triggers */}
                  <div className="mt-8 pt-4 border-t border-gray-100 flex gap-3">
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="flex-1 py-3 bg-brand-black hover:bg-brand-black/90 text-white rounded font-bold text-xs tracking-wider transition-colors cursor-pointer text-center"
                    >
                      {language === "en" ? "Close Details" : "상세 확인 완료"}
                    </button>
                    
                    <a
                      href="#oem-guide"
                      onClick={() => setSelectedProduct(null)}
                      className="flex-1 py-3 bg-brand-red hover:bg-brand-red/90 text-white rounded font-bold text-xs tracking-wider transition-colors cursor-pointer text-center block"
                    >
                      {language === "en" ? "Match OEM Quote" : "OEM 견적 문의 연동"}
                    </a>
                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
