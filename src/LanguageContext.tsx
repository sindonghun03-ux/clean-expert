import React, { createContext, useContext, useState, useEffect } from "react";
import { ProductItem, ProcessStep, BrandColor, TechItem, StatItem, ProductCategory } from "./types";

export type Language = "ko" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getProducts: () => ProductItem[];
  getProcessSteps: () => ProcessStep[];
  getTechItems: () => TechItem[];
  getStatItems: () => StatItem[];
  getBrandColors: () => BrandColor[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Core English/Korean UI Translations
const TRANSLATIONS: Record<Language, Record<string, string>> = {
  ko: {
    // Header
    "nav.brandStory": "CI 소개",
    "nav.why": "회사 강점",
    "nav.process": "제조 공정",
    "nav.technology": "기술 강점",
    "nav.product": "상품 소개",
    "nav.oem": "OEM 견적 시뮬레이터",
    "nav.store": "네이버 스마트스토어",
    "nav.contact": "전화 상담",
    
    // Hero
    "hero.badge": "30년 업력 · 100% 국산 프리미엄 양말 제조 전문",
    "hero.title1": "올바른 원사와 바늘로",
    "hero.title2": "발걸음의 가치를 편직합니다.",
    "hero.desc": "MKSOCKS(미강양말)는 우수한 국산 원자재와 정밀 컴퓨터 편직기를 사용하여 30년간 최고급 양말만을 전 공정 국내에서 자체 생산해 온 전문 제조사입니다.",
    "hero.oemBtn": "OEM / ODM 맞춤 견적",
    "hero.catalogBtn": "디지털 카탈로그 보기",
    "hero.directCall": "대표 직통 유선전화",

    // Brand Story
    "brand.badge": "02 . Corporate Identity",
    "brand.title": "BRAND STORY & IDENTITY",
    "brand.h3_1": "양말은 패션의 작은 액세서리가 아닌,",
    "brand.h3_2": "하루를 완성하는 시작이자 마침표입니다.",
    "brand.desc1": "당신에게 양말은 무엇을 의미하나요? 양말은 피부에 가장 먼저 닿고 일상의 무게를 가장 묵묵히 버텨내며, 신발을 벗는 순간 비로소 모습을 드러내는 나를 표현하는 조용하지만 가장 확실한 마크입니다.",
    "brand.desc2": "MKSOCKS(미강양말)는 지난 30년간 좋은 양말 한 켤레가 좋은 발걸음을 견인하고, 나아가 착용자의 기분과 계획, 목적지까지 완벽히 정비할 수 있다는 철학을 관철해 왔습니다. 우리는 편직 바늘 하나 원사 한 올에 장인정신을 담아 대한민국 본사 생산만을 엄수합니다.",
    "brand.feature1_title": "체계적인 사양 가이드",
    "brand.feature1_desc": "도안 기획부터 침수 설계까지 일대일 매칭 컨설팅",
    "brand.feature2_title": "엄격한 국산 전 공정",
    "brand.feature2_desc": "외주나 수입 가공 원자재를 쓰지 않는 신뢰",
    "brand.color_title": "브랜드 상징 컬러 필로소피",
    "brand.ci_title": "C.I SYSTEM APPLICATIONS",
    "brand.ci_subtitle": "MKSOCKS 로고 활용 및 구조적 구성원리",
    "brand.ci_std": "표준 C.I (Standard)",
    "brand.ci_std_desc": "상하 정합 구도로 브랜드 슬로건과 콤비네이션된 가장 대표적인 조합 형태",
    "brand.ci_hor": "가로형 C.I (Horizontal)",
    "brand.ci_hor_desc": "세로 여백이 비좁은 문서나 배너 상단 네비게이션 등에 이상적으로 쓰이는 가로 조합",
    "brand.ci_ver": "세로형 C.I (Vertical)",
    "brand.ci_ver_desc": "좁은 세로 영역 및 카탈로그 뒷면 및 단독 라벨 직조에 특화된 포멀 배치",
    "brand.ci_sym": "심볼 마크 (Symbol Only)",
    "brand.ci_sym_desc": "양말 실루엣과 브랜드의 세가지 철학(Business, Fashion, Function)을 정밀 상징화한 단독 마크",
    "brand.chart1_title": "양말의 본질 (Socks Outline)",
    "brand.chart1_desc": "패션의 기본기와 착용감",
    "brand.chart2_title": "순환 및 연결 (Arrows)",
    "brand.chart2_desc": "파트너 브랜드 가치 증대",
    "brand.chart3_title": "완벽한 전수 조사 (Checklist)",
    "brand.chart3_desc": "불량률 0%에 근접하는 집요함",

    // Why MKSOCKS
    "why.badge": "03 . OUR STRENGTHS",
    "why.title": "MKSOCKS CORE ADVANTAGES",
    "why.h3": "30년 업력의 장인정신과 최신 자동화 설비의 완벽한 조화",
    "why.desc": "미강양말은 타협하지 않는 국산 최고급 원자재 소싱과 정밀 공정 관리를 통해 수많은 프리미엄 브랜드의 신뢰받는 동반자가 되었습니다.",

    // Process
    "process.badge": "04 . PRODUCTION PIPELINE",
    "process.title": "MKSOCKS MANUFACTURING PROCESS",
    "process.intro": "디자인 기획부터 완제품 포장 및 안전 출고까지, MKSOCKS의 투명하고 정교한 5단계 원스톱 생산 프로세스를 소개합니다.",

    // Technology
    "tech.badge": "05 . TECHNICAL INNOVATION",
    "tech.title": "CORE TEXTILE TECHNOLOGY",
    "tech.intro": "MKSOCKS는 정밀 엔지니어링 기술을 직조 과정에 도입하여, 내구성과 착용감을 극대화한 독보적인 제품군을 생산합니다.",
    "tech.metric_title": "물리적 정밀 지표",
    "tech.metric_subtitle": "30년 축적 데이터 기반 최적 사양 매칭 설계",

    // Products
    "product.badge": "07 . DIGITAL CATALOG",
    "product.title": "PRODUCT PORTFOLIO",
    "product.intro": "MKSOCKS의 엄격한 공정 규격을 통과한 시그니처 카탈로그 제품군입니다. 모든 제품은 전 공정 국내 본사 공장에서 완벽하게 생산됩니다.",
    "product.all": "전체 보기",
    "product.cat_business": "정장 · 비즈니스",
    "product.cat_fashion": "패션 · 캐릭터",
    "product.cat_functional": "에슬레저 · 기능성",
    "product.needle": "침수 규격",
    "product.weight": "켤레당 평균 중량",
    "product.yarn": "원료 구성 비율",
    "product.features_title": "핵심 사양 디테일",
    "product.viewDetail": "상세 스펙 확인",

    // OEM Inquiry
    "oem.badge": "09 . OEM / ODM BUSINESS",
    "oem.title": "SOCKS SPEC SPECIFICATION MATCHING",
    "oem.intro1": "양말 디자인 기획과 원자재 세팅이 고민이신가요?",
    "oem.intro2": "원하는 양말 종류를 선택하시면 수많은 실무 경험을 토대로 검증된 MKSOCKS 최적 생산 추천 사양과 단가를 즉시 매칭해 드립니다.",
    "oem.config_title": "원하는 양말 종류 선택",
    "oem.click_tip": "Click to view specs",
    "oem.spec_title": "MKSOCKS 추천 사양 매칭",
    "oem.spec_needle": "정합 컴퓨터 침수 권장",
    "oem.spec_weight": "켤레당 사양 중량 (Unit Weight)",
    "oem.spec_yarn": "피부 보호 원료 믹스 성분비 (Yarn Ratio)",
    "oem.spec_thickness": "편직 조직 두께감 가이드 (Thickness)",
    "oem.spec_moq": "기본 최소 기획 수량 (MOQ)",
    "oem.spec_price": "예상 편직 단가 가이드 (Estimate)",
    "oem.spec_read": "[생산 설계 필독]",
    "oem.spec_read_desc": "위 배율과 예상 단가는 MKSOCKS 본사 직영 고정밀 국산 원사 소싱 기준 추천 스펙입니다. 브랜드 로고 다색 자수 마킹, 개별 스페셜 패키지 제작 사양 등에 따라 단가 변동이 발생하므로 구체적인 기획 조율은 본사 직통 전화 또는 내방 미팅을 통해 최상으로 실현 가능합니다.",
    "oem.direct_call_title": "본사 제조팀 즉각 직통 유선전화",
    "oem.direct_call_desc": "도안 제작 기획서 작성 및 이메일 수급이 어려우시다면, 본사 대표번호로 연락해 주세요. 30년 경력의 편직 기술 총괄 엔지니어가 1:1로 직접 조율 상담을 성심성의껏 도와드립니다.",
    "oem.direct_num": "대표 직통번호:",

    // Footer
    "footer.desc": "MKSOCKS(미강양말)는 30년 역사의 정밀 컴퓨터 양말 편직 기술을 바탕으로 100% 국산 고품질 프리미엄 양말만을 전 공정 국내에서 성심성의껏 생산합니다.",
    "footer.info_title": "본사 및 직영 공장 정보",
    "footer.address": "대구광역시 달성군 구지면 국가산단대로40길 21 (창리 1018)",
    "footer.tel": "대표번호: 053-611-7237 | 팩스: 053-611-7238",
    "footer.business_num": "사업자등록번호: 504-18-50852 | 대표: 서수민",
    "footer.email": "이메일 문의: mksocks@naver.com",
    "footer.store_title": "Official Store",
    "footer.store_desc": "MKSOCKS의 일반 프리미엄 소매 전용 시그니처 단품들은 네이버 공식 직영 스마트스토어에서 한 켤레 단위로 정교하게 소매 구매하실 수 있습니다.",
    "footer.store_btn": "네이버 스마트스토어 바로가기",
    "footer.copyright": "© 2026 MKSOCKS (미강양말). All Rights Reserved. 전 공정 100% 국산 제조 보증."
  },
  en: {
    // Header
    "nav.brandStory": "CI & Brand",
    "nav.why": "Strengths",
    "nav.process": "Process",
    "nav.technology": "Technology",
    "nav.product": "Products",
    "nav.oem": "OEM Configurator",
    "nav.store": "Naver Smartstore",
    "nav.contact": "Call Consultation",
    
    // Hero
    "hero.badge": "30 Years Experience · 100% Premium Korean Socks Manufacturer",
    "hero.title1": "With Proper Yarn & Needles,",
    "hero.title2": "We Knit the Value of Every Step.",
    "hero.desc": "MKSOCKS (Mikang Socks) is a specialized manufacturer that has produced only the highest quality socks inside South Korea for over 30 years, using premium local raw materials and high-precision computer knitting machines.",
    "hero.oemBtn": "OEM / ODM Custom Estimate",
    "hero.catalogBtn": "View Digital Catalog",
    "hero.directCall": "Direct Line to Factory",

    // Brand Story
    "brand.badge": "02 . Corporate Identity",
    "brand.title": "BRAND STORY & IDENTITY",
    "brand.h3_1": "Socks are not merely small fashion accessories,",
    "brand.h3_2": "They are the start and end that complete your day.",
    "brand.desc1": "What do socks mean to you? Socks are the first to touch your skin, silently bear the weight of daily life, and are a quiet yet clear mark of self-expression revealed the moment you take off your shoes.",
    "brand.desc2": "For the past 30 years, MKSOCKS has held the philosophy that a single pair of premium socks leads to a good journey, perfectly tuning the wearer's mood, plans, and destination. We infuse craftsmanship into every needle and every thread, strictly producing at our South Korean headquarters.",
    "brand.feature1_title": "Structured Spec Guidelines",
    "brand.feature1_desc": "1-on-1 custom matching from design concept to needle count planning",
    "brand.feature2_title": "Strict Korean-Only Process",
    "brand.feature2_desc": "The trust of never using outsourced labor or low-cost imported materials",
    "brand.color_title": "Brand Color Philosophy",
    "brand.ci_title": "C.I SYSTEM APPLICATIONS",
    "brand.ci_subtitle": "Structural Construction Principles of MKSOCKS Logo",
    "brand.ci_std": "Standard C.I",
    "brand.ci_std_desc": "The most representative layout, vertically combining the brand symbol and slogan.",
    "brand.ci_hor": "Horizontal C.I",
    "brand.ci_hor_desc": "Ideal horizontal combination used in compact headers or document margins.",
    "brand.ci_ver": "Vertical C.I",
    "brand.ci_ver_desc": "Formal placement tailored for vertical layouts, catalog back covers, or woven labels.",
    "brand.ci_sym": "Symbol Mark Only",
    "brand.ci_sym_desc": "A standalone mark symbolizing the socks silhouette and the three brand pillars (Business, Fashion, Function).",
    "brand.chart1_title": "Essence of Socks (Socks Outline)",
    "brand.chart1_desc": "Design basics and comfortable fit",
    "brand.chart2_title": "Circulation & Connection (Arrows)",
    "brand.chart2_desc": "Enhancing partner brand values",
    "brand.chart3_title": "Perfect Inspection (Checklist)",
    "brand.chart3_desc": "Relentless focus on near-0% defect rate",

    // Why MKSOCKS
    "why.badge": "03 . OUR STRENGTHS",
    "why.title": "MKSOCKS CORE ADVANTAGES",
    "why.h3": "Harmonious Blend of 30 Years of Craftsmanship and Modern Automation",
    "why.desc": "MKSOCKS has become a trusted partner for numerous premium brands through uncompromising domestic sourcing of materials and high-precision production control.",

    // Process
    "process.badge": "04 . PRODUCTION PIPELINE",
    "process.title": "MKSOCKS MANUFACTURING PROCESS",
    "process.intro": "From design planning to final finished packaging and safe delivery, we present MKSOCKS' transparent and precise 5-step one-stop production pipeline.",

    // Technology
    "tech.badge": "05 . TECHNICAL INNOVATION",
    "tech.title": "CORE TEXTILE TECHNOLOGY",
    "tech.intro": "MKSOCKS introduces high-precision textile engineering to the weaving process, crafting an exceptional product line with maximized durability and superb comfort.",
    "tech.metric_title": "Physical Precision Metrics",
    "tech.metric_subtitle": "Optimal specification matching design based on 30 years of accumulated data",

    // Products
    "product.badge": "07 . DIGITAL CATALOG",
    "product.title": "PRODUCT PORTFOLIO",
    "product.intro": "Our signature catalog product line which passed MKSOCKS' strict processing quality standards. Every item is perfectly manufactured inside our domestic headquarters factory.",
    "product.all": "View All",
    "product.cat_business": "Business & Formal",
    "product.cat_fashion": "Fashion & Casual",
    "product.cat_functional": "Athleisure & Functional",
    "product.needle": "Needle Standard",
    "product.weight": "Average Unit Weight",
    "product.yarn": "Raw Material Ratio",
    "product.features_title": "Core Specification Details",
    "product.viewDetail": "Verify Details",

    // OEM Inquiry
    "oem.badge": "09 . OEM / ODM BUSINESS",
    "oem.title": "SOCKS SPEC SPECIFICATION MATCHING",
    "oem.intro1": "Worried about socks design planning and raw material setup?",
    "oem.intro2": "Simply choose your desired socks category, and we will instantly recommend the optimal MKSOCKS production specifications and estimate based on decades of industrial experience.",
    "oem.config_title": "Select Socks Category",
    "oem.click_tip": "Click to view specs",
    "oem.spec_title": "MKSOCKS Recommended Specs",
    "oem.spec_needle": "Recommended Computer Needles",
    "oem.spec_weight": "Socks Unit Weight Specification",
    "oem.spec_yarn": "Yarn Material Composition Ratio",
    "oem.spec_thickness": "Knitting Fabric Thickness Guide",
    "oem.spec_moq": "Minimum Order Quantity (MOQ)",
    "oem.spec_price": "Estimated Knitting Unit Price",
    "oem.spec_read": "[Production Blueprint Notice]",
    "oem.spec_read_desc": "The above ratios and estimated prices are recommended specifications based on premium South Korean yarn sourced directly by MKSOCKS headquarters. Unit prices vary depending on multicolor embroidery logos, custom packaging specifications, and volume discounts. Please contact us directly for deep consultation.",
    "oem.direct_call_title": "Direct Corporate Production Hotline",
    "oem.direct_call_desc": "If design drafting or email communication is challenging, please call our head office directly. Our chief textile engineer with 30 years of experience will provide a 1:1 consultation.",
    "oem.direct_num": "Hotline Number:",

    // Footer
    "footer.desc": "MKSOCKS (Mikang Socks) proudly manufactures 100% premium high-quality socks locally in South Korea, drawing upon 30 years of precision computer knitting engineering.",
    "footer.info_title": "Headquarters & Factory Address",
    "footer.address": "21, Gukgansandan-daero 40-gil, Guji-myeon, Dalseong-gun, Daegu, Republic of Korea (Changri 1018)",
    "footer.tel": "Tel: +82-53-611-7237 | Fax: +82-53-611-7238",
    "footer.business_num": "Business Registration: 504-18-50852 | CEO: Sumin Seo",
    "footer.email": "Email Inquiry: mksocks@naver.com",
    "footer.store_title": "Official Retail Store",
    "footer.store_desc": "MKSOCKS signature premium retail collections can be purchased on our official Naver Smartstore on a single-pair basis with exquisite domestic shipping.",
    "footer.store_btn": "Go to Naver Smartstore",
    "footer.copyright": "© 2026 MKSOCKS. All Rights Reserved. 100% Manufactured in South Korea Guarantee."
  }
};

// Raw content translation mapping for lists in data.ts
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("mksocks_lang");
    return (saved === "ko" || saved === "en") ? saved : "ko";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("mksocks_lang", lang);
  };

  const t = (key: string): string => {
    return TRANSLATIONS[language][key] || TRANSLATIONS["ko"][key] || key;
  };

  // Translated Data Models
  const getBrandColors = (): BrandColor[] => {
    return [
      {
        id: "black",
        name: language === "en" ? "Black (Business)" : "검정 (Business)",
        englishName: "Black : Business",
        hex: "#1A1A1A",
        mks: "M 10 K 90",
        meaning: language === "en" 
          ? "Brings order to business and style with practicality and formality."
          : "실용성과 격식을 모두 담아 스타일과 비즈니스를 정돈합니다.",
        description: language === "en"
          ? "Expresses refined and highly elegant quality suitable for business and office lifestyle, based on a calm and classic atmosphere."
          : "차분하고 클래식한 분위기를 바탕으로, 정장 및 오피스 라이프스타일에 걸맞는 세련되고 격조 높은 품질을 표현합니다."
      },
      {
        id: "yellow",
        name: language === "en" ? "Yellow (Functional)" : "노랑 (Functional)",
        englishName: "Yellow : Functional",
        hex: "#F1C40F",
        mks: "M 30 Y 80",
        meaning: language === "en"
          ? "Supports optimal functionality to assist dynamic and safe activities."
          : "다이나믹하고 안전한 활동을 돕는 최적의 기능성을 지원합니다.",
        description: language === "en"
          ? "Energetic and lively yellow color embodies ergonomic high-performance technologies such as double-bottom cushioning, pressure bands, and superb breathability."
          : "에너제틱하고 경쾌한 노란색은 바닥 이중 쿠션, 압박 밴드, 우수한 통기성 등 인체공학적 고성능 기술력을 담았습니다."
      },
      {
        id: "red",
        name: language === "en" ? "Red (Fashion)" : "빨강 (Fashion)",
        englishName: "Red : Fashion",
        hex: "#C0392B",
        mks: "M 100 Y 80 K 30",
        meaning: language === "en"
          ? "Expresses trendy fashion perfectly, breaking away from conventional designs."
          : "기존 디자인에 국한되지 않고 트렌디한 패션을 완벽히 표현합니다.",
        description: language === "en"
          ? "Red color revealing passion and senses becomes a beautiful point of fashion with diverse patterns, sensual embroideries, and refined yarn combinations."
          : "열정과 감각을 드러내는 붉은색은 다채로운 패턴, 감각적인 자수, 세련된 원사 조합으로 패션의 아름다운 포인트가 됩니다."
      }
    ];
  };

  const getProducts = (): ProductItem[] => {
    return [
      {
        id: "prod-1",
        category: ProductCategory.BUSINESS,
        name: language === "en" ? "Premium Dress Socks" : "정장 · 장목 양말",
        englishName: "Premium Dress Socks",
        tagline: language === "en" ? "Infusing both practical and design elements" : "실용적인 요소와 디자인 요소를 모두 담다",
        needleType: "200N Computer",
        materials: [
          { name: language === "en" ? "Cotton" : "면", percentage: 67 },
          { name: language === "en" ? "Nylon" : "나일론", percentage: 28 },
          { name: language === "en" ? "Span" : "스판", percentage: 3 },
          { name: language === "en" ? "Rubber" : "고무", percentage: 2 }
        ],
        weight: 39,
        features: language === "en" ? [
          "Ultra-high density 200 needle precision computer knitting for thin and tight weave",
          "Optimal breathability that remains fresh even during long hours of wear",
          "Dual double-rubber band rib structure to fundamentally prevent slipping",
          "Luxurious silhouette optimized for classic business shoes and formal outfits"
        ] : [
          "초고밀도 200침 정밀 컴퓨터 편직으로 얇고 촘촘한 짜임새 구현",
          "장시간 착용 시에도 답답하지 않은 최적의 통기성",
          "흘러내림을 원천 방지하는 듀얼 이중 고무 밴드 립 조직",
          "클래식 정장 구두 및 격식 있는 복장에 최적화된 고급스러운 실루엣"
        ],
        description: language === "en"
          ? "Dress and long-length socks are essential items that guard a businessman's pride and class. Sourced from South Korea's premium yarn, it provides a very soft feel on the skin and guarantees outstanding elasticity that does not easily stretch."
          : "정장 · 장목 양말은 비즈니스맨의 자존심과 품격을 지켜주는 필수 아이템입니다. 국산 최고급 원사를 사용하여 피부에 닿는 촉감이 매우 부드러우며, 쉽게 늘어나지 않는 뛰어난 신축성을 약속합니다.",
        image: "./images/mksocks_business_1782872955566.jpg"
      },
      {
        id: "prod-2",
        category: ProductCategory.BUSINESS,
        name: language === "en" ? "Classic Ankle Socks" : "발목 양말",
        englishName: "Classic Ankle Socks",
        tagline: language === "en" ? "Created for a wide variety of daily activities" : "다양한 활동에 적합하게 제작되다",
        needleType: "168N Computer",
        materials: [
          { name: language === "en" ? "Cotton" : "면", percentage: 80 },
          { name: language === "en" ? "Nylon" : "나일론", percentage: 17 },
          { name: language === "en" ? "Span" : "스판", percentage: 3 }
        ],
        weight: 39,
        features: language === "en" ? [
          "Firm and even knitting with 168 needles for outstanding wearability",
          "High 80% cotton content to keep feet dry and fresh all day long",
          "Three-dimensional banding gently wrapping the ankle bone",
          "Minimal design easy to match with daily casual sneakers and daily outfits"
        ] : [
          "168침의 탄탄하고 고른 편직으로 탁월한 착용감",
          "면 80% 고함량으로 하루 종일 보송보송한 발 환경 유지",
          "복사뼈를 부드럽게 감싸는 입체 밴딩 처리",
          "다양한 캐주얼 스니커즈와 데일리 룩에 매칭하기 쉬운 미니멀 디자인"
        ],
        description: language === "en"
          ? "Ankle socks are designed for daily comfort. Using 100% premium South Korean combed cotton as the core raw material, they excel at sweat absorption and boast exceptional utility for light exercise or daily life."
          : "발목 양말은 일상생활의 편안함을 위해 탄생한 제품입니다. 엄선된 100% 국산 면 원사를 주원료로 하여 땀 흡수가 뛰어나며 가벼운 운동이나 데일리 라이프 어디에나 뛰어난 실용성을 자랑합니다.",
        image: "./images/mksocks_ankle_1782872970167.jpg"
      },
      {
        id: "prod-3",
        category: ProductCategory.FASHION,
        name: language === "en" ? "Character & Pattern Socks" : "캐릭터 & 패션 양말",
        englishName: "Character & Pattern Socks",
        tagline: language === "en" ? "Adding elegant accent points to your styling with colorful socks" : "컬러풀한 양말로 스타일링의 포인트가 되다",
        needleType: "144N Computer",
        materials: [
          { name: language === "en" ? "Cotton" : "면", percentage: 67 },
          { name: language === "en" ? "Nylon" : "나일론", percentage: 28 },
          { name: language === "en" ? "Span" : "스판", percentage: 3 },
          { name: language === "en" ? "Rubber" : "고무", percentage: 2 }
        ],
        weight: 39,
        features: language === "en" ? [
          "Vivid jacquard patterns and cute computer embroidery detail implementation",
          "Premium custom-dyed yarn utilized for highly vibrant contrast pairings",
          "Robust finish that prevents deformation or discoloration even after repeated washing",
          "Perfect for styling unique, trendy street looks or accent aesthetics"
        ] : [
          "다채롭고 선명한 자카드 패턴 및 귀여운 컴퓨터 자수 구현",
          "선명한 배색을 위한 고급 염색 가공 원사 사용",
          "세탁 후에도 변형과 탈색이 없는 견고한 마감",
          "유니크하고 트렌디한 스트릿룩이나 포인트 스타일 연출용"
        ],
        description: language === "en"
          ? "Original character and fashion socks that serve as creative fashion accents. Incorporating 144 needle computer embroidery technology, we embed delicate design details into the socks, completing a sensual styling with sophisticated color mixtures."
          : "패션의 포인트가 되는 독창적인 캐릭터 및 패션 양말입니다. 144침의 정교한 컴퓨터 자수 기술로 섬세한 디자인 디테일을 양말에 녹여냈으며, 세련된 컬러 믹스로 감각적인 스타일링을 완성합니다.",
        image: "./images/mksocks_fashion_1782872982775.jpg"
      },
      {
        id: "prod-4",
        category: ProductCategory.FASHION,
        name: language === "en" ? "No-Show Fake Socks" : "페이크삭스",
        englishName: "Seamless Fake Socks",
        tagline: language === "en" ? "Boasting heavy durability that never slips off your heels" : "쉽게 벗겨지지 않는 탄탄한 내구성을 가지다",
        needleType: "180N Computer",
        materials: [
          { name: language === "en" ? "Cotton" : "면", percentage: 80 },
          { name: language === "en" ? "Nylon" : "나일론", percentage: 17 },
          { name: language === "en" ? "Spandex" : "스판덱스", percentage: 3 }
        ],
        weight: 25,
        features: language === "en" ? [
          "Ergonomic round cut silhouette completely hidden outside the shoes",
          "Wide, non-toxic premium silicone grip pad applied inside the heel",
          "High-elastic band wrapping the top of the foot gently without slackness",
          "Reinforced dual toe-cap weaving on high-friction toe areas"
        ] : [
          "인체공학적 라운드 컷팅으로 신발 밖으로 전혀 노출되지 않는 실루엣",
          "뒤꿈치 내부에 와이드형 무독성 프리미엄 실리콘 밀착 패드 적용",
          "발등을 조여주어 헐거움 없이 부드럽게 감싸는 고탄력 밴드",
          "마찰이 많은 발가락 끝단 이중 토우캡 강화 편직"
        ],
        description: language === "en"
          ? "No-show socks representing MKSOCKS' unique engineering. To completely solve the common issue of heels slipping off when walking or running, we applied soft high-elasticity 3D weaving and high-adhesion anti-slip silicone to the rear."
          : "MKSOCKS의 독보적인 기술력이 담긴 페이크삭스입니다. 착용 후 걷거나 달릴 때 뒤꿈치가 쉽게 벗겨지는 현상을 완벽히 해결하기 위해 후면에 부드러운 고탄성 입체 가공과 미끄럼 방지 실리콘을 적용하였습니다.",
        image: "./images/mksocks_fake_socks_1782872994457.jpg"
      },
      {
        id: "prod-5",
        category: ProductCategory.FASHION,
        name: language === "en" ? "Glitter Premium Socks" : "글리터 양말",
        englishName: "Shiny Glitter Socks",
        tagline: language === "en" ? "Adding a sensible sparkle point to premium fashion styles" : "센스 있는 패션 스타일에 포인트를 더하다",
        needleType: "144N Computer",
        materials: [
          { name: language === "en" ? "Nylon" : "나일론", percentage: 55 },
          { name: language === "en" ? "Polyester" : "폴리에스테르", percentage: 29 },
          { name: language === "en" ? "Metallic Covering" : "메탈릭시트 파이르", percentage: 16 }
        ],
        weight: 25,
        features: language === "en" ? [
          "Special metallic covering yarn that wraps skin softly without scratchiness",
          "Glamorously shimmering texture that creates a mysterious, stylish mood",
          "Fashionable silhouette making a harmonious pairing with loafers, sandals, and heels",
          "Lightweight, semi-sheer texture providing outstanding breathability"
        ] : [
          "까슬거림 없이 부드럽게 피부를 감싸는 특수 메탈릭 커버링 원사",
          "글래머러스하게 반짝이는 질감으로 신비로운 무드 연출",
          "구두, 샌들, 힐과 환상적인 하모니를 이루는 패셔너블 실루엣",
          "가볍고 비치는 듯한 얇은 원단감으로 뛰어난 통기성"
        ],
        description: language === "en"
          ? "A premium glitter line born from the precise combination of special metallic covering yarns. Unlike cheap metallic threads that cause skin irritation, we use MKSOCKS' custom metallic yarns that are free of prickliness, highly elastic, and elegant."
          : "메탈릭 특수 가공 원사를 정밀 조합하여 탄생한 프리미엄 글리터 라인입니다. 피부 자극을 유발하는 일반 금속사와 달리, MKSOCKS만의 특수가공 원사를 사용해 까슬거림이 전혀 없고 매우 신축성 있으며 스타일리시합니다.",
        image: "./images/mksocks_glitter_1782873012717.jpg"
      },
      {
        id: "prod-6",
        category: ProductCategory.FUNCTIONAL,
        name: language === "en" ? "Premium Knee-High Socks" : "니삭스",
        englishName: "Premium Knee-High Socks",
        tagline: language === "en" ? "Adding warm insulation to diverse fashion tastes" : "다양한 패션 센스에 보온을 더하다",
        needleType: "132N Computer",
        materials: [
          { name: language === "en" ? "Cotton" : "면", percentage: 93 },
          { name: language === "en" ? "Polyester" : "폴리에스테르", percentage: 5 },
          { name: language === "en" ? "Spandex" : "스판덱스", percentage: 2 }
        ],
        weight: 56,
        features: language === "en" ? [
          "Perfect height wrapping below the knee softly and warmly",
          "Three-dimensional progressive compression layout optimized for calf contours",
          "High-elasticity wide non-slip top welt band that prevents slipping",
          "Easily matches diverse athleisure looks such as golf, tennis, or school uniforms"
        ] : [
          "무릎 아래까지 부드럽고 따뜻하게 덮어주는 완벽한 기장감",
          "종아리 근육에 최적화된 입체 점진적 압박 설계",
          "흘러내리지 않는 고신축 광폭 논슬립 상단 웰트 밴드",
          "골프, 테니스, 교복, 레깅스 룩 등 다양한 에슬레저 룩 매칭"
        ],
        description: language === "en"
          ? "Functional knee-high socks that smoothly shape the calf outline while blocking cold wind. Sourced with outstandingly elastic local specialized yarns, it meticulously adjusts pressure above and below the knee, maintaining solid tightness over long usage."
          : "종아리 실루엣을 매끄럽게 가꿔주면서 차가운 바람을 막아주는 기능성 니삭스입니다. 신축성이 탁월한 국산 특수 원사를 활용하여 무릎 위아래 압박감을 세밀하게 조정하였으며, 장시간 활동에도 늘어짐 없는 견고함을 선사합니다.",
        image: "./images/mksocks_knee_1782873024015.jpg"
      },
      {
        id: "prod-7",
        category: ProductCategory.FUNCTIONAL,
        name: language === "en" ? "Performance Athletic Socks" : "스포츠 양말",
        englishName: "Performance Athletic Socks",
        tagline: language === "en" ? "Optimal design for highly dynamic athletic activities" : "다이나믹한 스포츠 활동을 위한 최적의 디자인",
        needleType: "132N Computer",
        materials: [
          { name: language === "en" ? "Cotton" : "면", percentage: 93 },
          { name: language === "en" ? "Polyester" : "폴리에스테르", percentage: 5 },
          { name: language === "en" ? "Spandex" : "스판덱스", percentage: 2 }
        ],
        weight: 56,
        features: language === "en" ? [
          "Double terry-cushion sole engineering for superb shock absorption and reduced fatigue",
          "High-elasticity arch support band tightly holding the instep region",
          "Special raw yarn friction coefficient to prevent foot slippage inside shoes",
          "Reinforced dual toe/heel triple knitting preventing tears during intense motion"
        ] : [
          "바닥 이중 파일 쿠션 설계로 뛰어난 충격 분산과 발 피로 감소",
          "발등 아치 부위를 쫀쫀하게 잡아주는 고탄성 아치 서포트 밴드",
          "스포츠 활동 중 신발 내 미끄러짐을 방지하는 특수 원사 마찰력",
          "격렬한 움직임에도 터짐 없는 토우/뒤꿈치 이중 보강 삼중 편직"
        ],
        description: language === "en"
          ? "High-performance double-cushion sports socks engineered for athletic experts. Sourced with air-trapping double cushion layers across the entire sole, they absorb impacts transmitted to ankles and knees, optimized for rough outdoor environments."
          : "스포츠 전문가들을 위해 설계된 고기능성 파일 스포츠 양말입니다. 바닥 전면에 공기층을 머금은 이중 쿠션 파일 조직을 설계해 발목과 무릎으로 전달되는 충격을 탁월하게 흡수하며 아웃도어 환경에 최적화되어 있습니다.",
        image: "./images/mksocks_sport_1782873037735.jpg"
      },
      {
        id: "prod-8",
        category: ProductCategory.FUNCTIONAL,
        name: language === "en" ? "Ergonomic Foot Cover" : "풋커버 양말",
        englishName: "Ergonomic Foot Cover",
        tagline: language === "en" ? "The completion of cozy, invisible wear" : "편안한 착용감의 완성",
        needleType: "132N Computer",
        materials: [
          { name: language === "en" ? "Cotton" : "면", percentage: 67 },
          { name: language === "en" ? "Nylon" : "나일론", percentage: 28 },
          { name: language === "en" ? "Span" : "스판", percentage: 3 },
          { name: language === "en" ? "Rubber" : "고무", percentage: 2 }
        ],
        weight: 39,
        features: language === "en" ? [
          "Ultra-low cut line skin perfectly matching women's dress shoes and flats",
          "Special welt processing on the instep to offer soft, irritation-free wear",
          "Anti-slip eco-friendly silicone floral pattern printed on the entire sole",
          "Strong yarn restoration maintaining optimal tension after repeated washing"
        ] : [
          "여성 구두나 플랫 슈즈에 완벽히 매칭되는 초극소 풋라인 스킨",
          "발등 부위 특수 웰트 가공으로 자극 없는 부드러운 착용감",
          "발바닥 전면에 미끄럼 방지 친환경 실리콘 로고 꽃 무늬 마감",
          "강력한 원사 회복성으로 잦은 세탁에도 뛰어난 텐션감 유지"
        ],
        description: language === "en"
          ? "Premium foot covers keeping only your toes and sole fresh and thin. Unlike low-cost imported products focusing merely on price, we utilize computerized precision machines to distribute tension evenly, essential for low-cut shoes."
          : "발끝과 바닥만을 쾌적하고 얇게 보좌하는 고급 풋커버 양말입니다. 단가 위주의 중국산 저가형 제품과 달리 정밀 컴퓨터 기계를 활용해 양말 전면의 장력을 고르게 분배하였으며, 쉽게 벗겨지지 않아 발등이 드러나는 구두 착용 시 필수적입니다.",
        image: "./images/mksocks_foot_cover_1782873049409.jpg"
      }
    ];
  };

  const getProcessSteps = (): ProcessStep[] => {
    return [
      {
        id: 1,
        title: language === "en" ? "Design Concept & Consultation" : "디자인 접수 및 상담",
        guideTitle: language === "en" ? "Consultation" : "제작 상담",
        description: language === "en" 
          ? "Initial consultation discussing the client's needs and current premium design trends."
          : "클라이언트의 니즈와 최신 트렌드를 파악하는 초기 시안 협의 단계입니다.",
        details: language === "en"
          ? "We accept designs and spec requirements (needle count, raw yarn types) via email. Professional designers analyze production feasibility and propose optimal product blueprints."
          : "클라이언트가 희망하는 스펙(침수, 원사 등)이나 도안을 이메일로 접수하며, 전문 디자이너가 실무 제작 타당성을 검토하고 최적의 설계를 제안합니다.",
        image: "./images/mksocks_consultation_1782875978662.jpg"
      },
      {
        id: 2,
        title: language === "en" ? "Contract Sign & Sourcing" : "계약 체결 및 원사 발주",
        guideTitle: language === "en" ? "Agreement" : "계약 체결",
        description: language === "en"
          ? "Procedures for sourcing the finest South Korean raw yarn after scheduling and pricing agreements."
          : "납기와 단가 조율 후 최적의 국산 원료를 안전하게 공급받는 절차입니다.",
        details: language === "en"
          ? "Once design matching is complete, we formalize the contract and order premium domestic materials including combed cotton, functional nylon, and spandex, ensuring product integrity."
          : "디자인 매칭이 완료되면 정식 계약을 완료하고, 코마사, 나일론, 스판 등 용도에 최적화된 국산 프리미엄 고품질 원사를 발주하여 정합성을 보장합니다.",
        image: "./images/mksocks_contract_1782875996390.jpg"
      },
      {
        id: 3,
        title: language === "en" ? "Yarn Processing & Thread Setup" : "원사 가공 및 실 세팅",
        guideTitle: language === "en" ? "Draft Verification" : "시안 확인",
        description: language === "en"
          ? "Fitting yarns into weaving machinery and fine-tuning computer patterns."
          : "제조기에 원사를 맞물리고 가동을 위해 컴퓨터 도안 정합을 조율합니다.",
        details: language === "en"
          ? "The meticulous process of aligning colors and functional elastane (spandex) threads onto specific machine feeds. Fine tension control is critical to achieving high-density weaving."
          : "편직기 마디에 각 컬러와 기능성 원사(탄성 스판 등)를 꼼꼼하게 실 공급 패스에 연동하는 공정입니다. 고밀도 정합성을 위한 장력 조율이 핵심입니다.",
        image: "./images/mksocks_yarn_setup_1782876204196.jpg"
      },
      {
        id: 4,
        title: language === "en" ? "Precision Computerized Weaving" : "초정밀 컴퓨터 편직 가동",
        guideTitle: language === "en" ? "Production" : "제품 생산",
        description: language === "en"
          ? "Weaving the sock chassis exactly as designed using state-of-the-art computers."
          : "최신 컴퓨터 편직기를 동원하여 설계된 도안대로 양말 본체를 직조합니다.",
        details: language === "en"
          ? "A fleet of 25 automated precision knitting machines runs 24/7. Core details, such as 3D heel forming and toe linking, are seamlessly automated inside our Korean headquarters."
          : "자동화 편직 설비 25대가 쉴 틈 없이 초고밀도 편직을 수행합니다. 뒤꿈치 입체 코딩, 발가락 이음부 링킹 공정 등 디테일이 자동 완성되는 혁신적인 본사 공정입니다.",
        image: "./images/mksocks_factory_floor_1782873856196.jpg"
      },
      {
        id: 5,
        title: language === "en" ? "Hand Inspection & Exquisite Packaging" : "품질 검수 및 완벽 패키징",
        guideTitle: language === "en" ? "Packaging & Delivery" : "포장 & 배송",
        description: language === "en"
          ? "Every single pair is hand-inspected, beautifully packed, and shipped out safely."
          : "한 켤레 한 켤레 사람의 손으로 직접 검수한 후 패키징하여 안전 신속 출고합니다.",
        details: language === "en"
          ? "We conduct rigorous manual inspections on thread control, seam integrity, and elastic tension. Approved socks are fitted with custom brand tags or luxury gift boxes before fast shipping."
          : "실밥 제어 상태, 올 풀림 현상 여부 등을 엄격하게 정밀 전수 검사합니다. 통과된 프리미엄 양말에 브랜드 맞춤 포장택(Tag) 또는 고급 기프트 박스를 결속하여 고객사에게 최상으로 배송합니다.",
        image: "./images/mksocks_gift_packaging_1782873870415.jpg"
      }
    ];
  };

  const getTechItems = (): TechItem[] => {
    return [
      {
        id: "tech-1",
        title: language === "en" ? "Premium Korean Combed Cotton" : "국산 최고급 코마사 공정",
        englishTitle: "Premium Combed Cotton",
        description: language === "en"
          ? "We comb out short fibers and impurities to select only the strongest, smoothest premium cotton yarns."
          : "거친 단섬유와 이물질을 기계로 빗어 털어내 매끈하고 튼튼한 최고급 프리미엄 면 원사만을 채택합니다.",
        details: language === "en"
          ? "Significantly reduces fuzzing compared to regular carded cotton. It retains a soft glow and remains wonderfully cozy even after dozens of washes, free of stiffness."
          : "일반 면사에 비해 보풀 발생이 현저히 적고 광택이 부드러우며, 세탁 후에도 양말 특유의 딱딱해짐이나 뻣뻣한 감각 없이 장기적으로 포근한 촉감을 온전히 유지합니다."
      },
      {
        id: "tech-2",
        title: language === "en" ? "200 Needle High-Density Weave" : "200침 정밀 컴퓨터 편직",
        englishTitle: "200 Needle Precision",
        description: language === "en"
          ? "An ultra-precision system grouping 200 needles within the cylinder, promising a lightweight yet tightly knit texture."
          : "실린더 원주 내 바늘이 200개나 집약된 정밀 편직 시스템으로, 가벼우면서도 놀랍도록 촘촘하고 빈틈없는 강도를 약속합니다.",
        details: language === "en"
          ? "A higher needle count boosts pattern resolution exponentially, allowing thinner yet tighter knits. It achieves the ultimate luxury textiles that match perfectly inside formal dress shoes."
          : "바늘 수가 많을수록 패턴 표현력이 비약적으로 늘어나고 얇고 촘촘하게 편직이 가능하여 정장 구두 안에 신기 가장 세련되고 부드러운 하이엔드 텍스타일을 완성합니다."
      },
      {
        id: "tech-3",
        title: language === "en" ? "Slipless Ergonomic Elasticity" : "흘러내림 없는 입체 텐션",
        englishTitle: "Comfortable Ergonomic Tension",
        description: language === "en"
          ? "Distributes pressure evenly along the leg instead of squeezing heavily in one spot, staying secure without constricting."
          : "발목을 파고들듯이 압박하거나 압력을 한곳에 모으지 않고, 점진적으로 잡아주어 편안하면서도 절대 흘러내리지 않습니다.",
        details: language === "en"
          ? "Sourced with MKSOCKS' secret blend of high-elastic LYCRA elastane. Even after intensive tumble drying, it avoids saggy cuffs common in budget products."
          : "MKSOCKS의 고신축 라이크라 탄성사 배합 비법을 적용하여 수없이 세탁기에 돌리더라도 목이 늘어나거나 축 늘어지는 저가형 제품과의 구조적인 차별점을 극명히 경험할 수 있습니다."
      },
      {
        id: "tech-4",
        title: language === "en" ? "Dual Heel Y-Structure" : "이중 뒤꿈치 입체 설계",
        englishTitle: "Dual Heel Y-Structure",
        description: language === "en"
          ? "Diverging from flat sock geometry, we employ a Y-shaped three-dimensional sewing pattern for areas prone to friction."
          : "평면적인 양말 구조에서 벗어나 마찰이 가장 빈번한 아킬레스건과 복사뼈 하단을 Y자 형태로 입체 봉제 처리합니다.",
        details: language === "en"
          ? "Gently wraps the heel in a 3D mold, completely preventing socks from twisting or slipping during walks, reducing joint fatigue."
          : "발 뒤꿈치 모양을 3D 입체 형태로 포근히 감싸주기 때문에 보행 중 양말이 미끄러지거나 뒤틀리는 마찰 소모를 차단하며 피로를 대폭 경감합니다."
      }
    ];
  };

  const getStatItems = (): StatItem[] => {
    return [
      {
        id: "stat-years",
        value: "30+",
        label: language === "en" ? "Industrial Heritage (Years)" : "양말 제조 업력 (년)",
        description: language === "en" ? "Top-tier manufacturing know-how developed solely in the socks sector" : "오직 양말 한 분야에만 집중하여 축적한 업계 최고의 노하우"
      },
      {
        id: "stat-machines",
        value: "25 Units",
        label: language === "en" ? "Modern Weaving Fleet" : "최신 컴퓨터 편직 설비",
        description: language === "en" ? "grouping fully automated computer controls for complex multi-colored patterns" : "자동 정밀 컴퓨터 제어를 바탕으로 고밀도 복합 패턴 가동"
      },
      {
        id: "stat-capacity",
        value: "50,000+",
        label: language === "en" ? "Monthly Output (Pairs)" : "월간 생산 역량 (켤레)",
        description: language === "en" ? "Abundant equipment and head-office infrastructure catering to major commercial orders smoothly" : "풍부한 설비와 본사 직접 생산 인프라로 원활한 대량 오더 대응"
      },
      {
        id: "stat-materials",
        value: "100%",
        label: language === "en" ? "Domestic Sourcing Rate" : "국산 원자재 생산 가동률",
        description: language === "en" ? "100% safe materials carefully selected from contact threads to elastic bands" : "피부에 닿는 원사부터 탄성 밴딩까지 100% 안전한 국내산 엄선"
      }
    ];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getProducts, getProcessSteps, getTechItems, getStatItems, getBrandColors }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
