import { ProductCategory, ProductItem, ProcessStep, BrandColor, TechItem, StatItem } from "./types";

export const BRAND_COLORS: BrandColor[] = [
  {
    id: "black",
    name: "검정 (Business)",
    englishName: "Black : Business",
    hex: "#1A1A1A",
    mks: "M 10 K 90",
    meaning: "실용성과 격식을 모두 담아 스타일과 비즈니스를 정돈합니다.",
    description: "차분하고 클래식한 분위기를 바탕으로, 정장 및 오피스 라이프스타일에 걸맞는 세련되고 격조 높은 품질을 표현합니다."
  },
  {
    id: "yellow",
    name: "노랑 (Functional)",
    englishName: "Yellow : Functional",
    hex: "#F1C40F",
    mks: "M 30 Y 80",
    meaning: "다이나믹하고 안전한 활동을 돕는 최적의 기능성을 지원합니다.",
    description: "에너제틱하고 경쾌한 노란색은 바닥 이중 쿠션, 압박 밴드, 우수한 통기성 등 인체공학적 고성능 기술력을 담았습니다."
  },
  {
    id: "red",
    name: "빨강 (Fashion)",
    englishName: "Red : Fashion",
    hex: "#C0392B",
    mks: "M 100 Y 80 K 30",
    meaning: "기존 디자인에 국한되지 않고 트렌디한 패션을 완벽히 표현합니다.",
    description: "열정과 감각을 드러내는 붉은색은 다채로운 패턴, 감각적인 자수, 세련된 원사 조합으로 패션의 아름다운 포인트가 됩니다."
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: "prod-1",
    category: ProductCategory.BUSINESS,
    name: "정장 · 장목 양말",
    englishName: "Premium Dress Socks",
    tagline: "실용적인 요소와 디자인 요소를 모두 담다",
    needleType: "200N Computer",
    materials: [
      { name: "면", percentage: 67 },
      { name: "나일론", percentage: 28 },
      { name: "스판", percentage: 3 },
      { name: "고무", percentage: 2 }
    ],
    weight: 39,
    features: [
      "초고밀도 200침 정밀 컴퓨터 편직으로 얇고 촘촘한 짜임새 구현",
      "장시간 착용 시에도 답답하지 않은 최적의 통기성",
      "흘러내림을 원천 방지하는 듀얼 이중 고무 밴드 립 조직",
      "클래식 정장 구두 및 격식 있는 복장에 최적화된 고급스러운 실루엣"
    ],
    description: "정장 · 장목 양말은 비즈니스맨의 자존심과 품격을 지켜주는 필수 아이템입니다. 국산 최고급 원사를 사용하여 피부에 닿는 촉감이 매우 부드러우며, 쉽게 늘어나지 않는 뛰어난 신축성을 약속합니다.",
    image: "./images/mksocks_business_1782872955566.jpg"
  },
  {
    id: "prod-2",
    category: ProductCategory.BUSINESS,
    name: "발목 양말",
    englishName: "Classic Ankle Socks",
    tagline: "다양한 활동에 적합하게 제작되다",
    needleType: "168N Computer",
    materials: [
      { name: "면", percentage: 80 },
      { name: "나일론", percentage: 17 },
      { name: "스판", percentage: 3 }
    ],
    weight: 39,
    features: [
      "168침의 탄탄하고 고른 편직으로 탁월한 착용감",
      "면 80% 고함량으로 하루 종일 보송보송한 발 환경 유지",
      "복사뼈를 부드럽게 감싸는 입체 밴딩 처리",
      "다양한 캐주얼 스니커즈와 데일리 룩에 매칭하기 쉬운 미니멀 디자인"
    ],
    description: "발목 양말은 일상생활의 편안함을 위해 탄생한 제품입니다. 엄선된 100% 국산 면 원사를 주원료로 하여 땀 흡수가 뛰어나며 가벼운 운동이나 데일리 라이프 어디에나 뛰어난 실용성을 자랑합니다.",
    image: "./images/mksocks_ankle_1782872970167.jpg"
  },
  {
    id: "prod-3",
    category: ProductCategory.FASHION,
    name: "캐릭터 & 패션 양말",
    englishName: "Character & Pattern Socks",
    tagline: "컬러풀한 양말로 스타일링의 포인트가 되다",
    needleType: "144N Computer",
    materials: [
      { name: "면", percentage: 67 },
      { name: "나일론", percentage: 28 },
      { name: "스판", percentage: 3 },
      { name: "고무", percentage: 2 }
    ],
    weight: 39,
    features: [
      "다채롭고 선명한 자카드 패턴 및 귀여운 컴퓨터 자수 구현",
      "선명한 배색을 위한 고급 염색 가공 원사 사용",
      "세탁 후에도 변형과 탈색이 없는 견고한 마감",
      "유니크하고 트렌디한 스트릿룩이나 포인트 스타일 연출용"
    ],
    description: "패션의 포인트가 되는 독창적인 캐릭터 및 패션 양말입니다. 144침의 정교한 컴퓨터 자수 기술로 섬세한 디자인 디테일을 양말에 녹여냈으며, 세련된 컬러 믹스로 감각적인 스타일링을 완성합니다.",
    image: "./images/mksocks_fashion_1782872982775.jpg"
  },
  {
    id: "prod-4",
    category: ProductCategory.FASHION,
    name: "페이크삭스",
    englishName: "Seamless Fake Socks",
    tagline: "쉽게 벗겨지지 않는 탄탄한 내구성을 가지다",
    needleType: "180N Computer",
    materials: [
      { name: "면", percentage: 80 },
      { name: "나일론", percentage: 17 },
      { name: "스판덱스", percentage: 3 }
    ],
    weight: 25,
    features: [
      "인체공학적 라운드 컷팅으로 신발 밖으로 전혀 노출되지 않는 실루엣",
      "뒤꿈치 내부에 와이드형 무독성 프리미엄 실리콘 밀착 패드 적용",
      "발등을 조여주어 헐거움 없이 부드럽게 감싸는 고탄력 밴드",
      "마찰이 많은 발가락 끝단 이중 토우캡 강화 편직"
    ],
    description: "MKSOCKS의 독보적인 기술력이 담긴 페이크삭스입니다. 착용 후 걷거나 달릴 때 뒤꿈치가 쉽게 벗겨지는 현상을 완벽히 해결하기 위해 후면에 부드러운 고탄성 입체 가공과 미끄럼 방지 실리콘을 적용하였습니다.",
    image: "./images/mksocks_fake_socks_1782872994457.jpg"
  },
  {
    id: "prod-5",
    category: ProductCategory.FASHION,
    name: "글리터 양말",
    englishName: "Shiny Glitter Socks",
    tagline: "센스 있는 패션 스타일에 포인트를 더하다",
    needleType: "144N Computer",
    materials: [
      { name: "나일론", percentage: 55 },
      { name: "폴리에스테르", percentage: 29 },
      { name: "메탈릭시트 파이르", percentage: 16 }
    ],
    weight: 25,
    features: [
      "까슬거림 없이 부드럽게 피부를 감싸는 특수 메탈릭 커버링 원사",
      "글래머러스하게 반짝이는 질감으로 신비로운 무드 연출",
      "구두, 샌들, 힐과 환상적인 하모니를 이루는 패셔너블 실루엣",
      "가볍고 비치는 듯한 얇은 원단감으로 뛰어난 통기성"
    ],
    description: "메탈릭 특수 가공 원사를 정밀 조합하여 탄생한 프리미엄 글리터 라인입니다. 피부 자극을 유발하는 일반 금속사와 달리, MKSOCKS만의 특수가공 원사를 사용해 까슬거림이 전혀 없고 매우 신축성 있으며 스타일리시합니다.",
    image: "./images/mksocks_glitter_1782873012717.jpg"
  },
  {
    id: "prod-6",
    category: ProductCategory.FUNCTIONAL,
    name: "니삭스",
    englishName: "Premium Knee-High Socks",
    tagline: "다양한 패션 센스에 보온을 더하다",
    needleType: "132N Computer",
    materials: [
      { name: "면", percentage: 93 },
      { name: "폴리에스테르", percentage: 5 },
      { name: "스판덱스", percentage: 2 }
    ],
    weight: 56,
    features: [
      "무릎 아래까지 부드럽고 따뜻하게 덮어주는 완벽한 기장감",
      "종아리 근육에 최적화된 입체 점진적 압박 설계",
      "흘러내리지 않는 고신축 광폭 논슬립 상단 웰트 밴드",
      "골프, 테니스, 교복, 레깅스 룩 등 다양한 에슬레저 룩 매칭"
    ],
    description: "종아리 실루엣을 매끄럽게 가꿔주면서 차가운 바람을 막아주는 기능성 니삭스입니다. 신축성이 탁월한 국산 특수 원사를 활용하여 무릎 위아래 압박감을 세밀하게 조정하였으며, 장시간 활동에도 늘어짐 없는 견고함을 선사합니다.",
    image: "./images/mksocks_knee_1782873024015.jpg"
  },
  {
    id: "prod-7",
    category: ProductCategory.FUNCTIONAL,
    name: "스포츠 양말",
    englishName: "Performance Athletic Socks",
    tagline: "다이나믹한 스포츠 활동을 위한 최적의 디자인",
    needleType: "132N Computer",
    materials: [
      { name: "면", percentage: 93 },
      { name: "폴리에스테르", percentage: 5 },
      { name: "스판덱스", percentage: 2 }
    ],
    weight: 56,
    features: [
      "바닥 이중 파일 쿠션 설계로 뛰어난 충격 분산과 발 피로 감소",
      "발등 아치 부위를 쫀쫀하게 잡아주는 고탄성 아치 서포트 밴드",
      "스포츠 활동 중 신발 내 미끄러짐을 방지하는 특수 원사 마찰력",
      "격렬한 움직임에도 터짐 없는 토우/뒤꿈치 이중 보강 삼중 편직"
    ],
    description: "스포츠 전문가들을 위해 설계된 고기능성 파일 스포츠 양말입니다. 바닥 전면에 공기층을 머금은 이중 쿠션 파일 조직을 설계해 발목과 무릎으로 전달되는 충격을 탁월하게 흡수하며 아웃도어 환경에 최적화되어 있습니다.",
    image: "./images/mksocks_sport_1782873037735.jpg"
  },
  {
    id: "prod-8",
    category: ProductCategory.FUNCTIONAL,
    name: "풋커버 양말",
    englishName: "Ergonomic Foot Cover",
    tagline: "편안한 착용감의 완성",
    needleType: "132N Computer",
    materials: [
      { name: "면", percentage: 67 },
      { name: "나일론", percentage: 28 },
      { name: "스판", percentage: 3 },
      { name: "고무", percentage: 2 }
    ],
    weight: 39,
    features: [
      "여성 구두나 플랫 슈즈에 완벽히 매칭되는 초극소 풋라인 스킨",
      "발등 부위 특수 웰트 가공으로 자극 없는 부드러운 착용감",
      "발바닥 전면에 미끄럼 방지 친환경 실리콘 로고 꽃 무늬 마감",
      "강력한 원사 회복성으로 잦은 세탁에도 뛰어난 텐션감 유지"
    ],
    description: "발끝 and 바닥만을 쾌적하고 얇게 보좌하는 고급 풋커버 양말입니다. 단가 위주의 중국산 저가형 제품과 달리 정밀 컴퓨터 기계를 활용해 양말 전면의 장력을 고르게 분배하였으며, 쉽게 벗겨지지 않아 발등이 드러나는 구두 착용 시 필수적입니다.",
    image: "./images/mksocks_foot_cover_1782873049409.jpg"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "디자인 접수 및 상담",
    guideTitle: "제작 상담",
    description: "클라이언트의 니즈와 최신 트렌드를 파악하는 초기 시안 협의 단계입니다.",
    details: "클라이언트가 희망하는 스펙(침수, 원사 등)이나 도안을 이메일로 접수하며, 전문 디자이너가 실무 제작 타당성을 검토하고 최적의 설계를 제안합니다.",
    image: "./images/mksocks_consultation_1782875978662.jpg"
  },
  {
    id: 2,
    title: "계약 체결 및 원사 발주",
    guideTitle: "계약 체결",
    description: "납기와 단가 조율 후 최적의 국산 원료를 안전하게 공급받는 절차입니다.",
    details: "디자인 매칭이 완료되면 정식 계약을 완료하고, 코마사, 나일론, 스판 등 용도에 최적화된 국산 프리미엄 고품질 원사를 발주하여 정합성을 보장합니다.",
    image: "./images/mksocks_contract_1782875996390.jpg"
  },
  {
    id: 3,
    title: "원사 가공 및 실 세팅",
    guideTitle: "시안 확인",
    description: "제조기에 원사를 맞물리고 가동을 위해 컴퓨터 도안 정합을 조율합니다.",
    details: "편직기 마디에 각 컬러와 기능성 원사(탄성 스판 등)를 꼼꼼하게 실 공급 패스에 연동하는 공정입니다. 고밀도 정합성을 위한 장력 조율이 핵심입니다.",
    image: "./images/mksocks_yarn_setup_1782876204196.jpg"
  },
  {
    id: 4,
    title: "초정밀 컴퓨터 편직 가동",
    guideTitle: "제품 생산",
    description: "최신 컴퓨터 편직기를 동원하여 설계된 도안대로 양말 본체를 직조합니다.",
    details: "자동화 편직 설비 25대가 쉴 틈 없이 초고밀도 편직을 수행합니다. 뒤꿈치 입체 코딩, 발가락 이음부 링킹 공정 등 디테일이 자동 완성되는 혁신적인 본사 공정입니다.",
    image: "./images/mksocks_factory_floor_1782873856196.jpg"
  },
  {
    id: 5,
    title: "품질 검수 및 완벽 패키징",
    guideTitle: "포장 & 배송",
    description: "한 켤레 한 켤레 사람의 손으로 직접 검수한 후 패키징하여 안전 신속 출고합니다.",
    details: "실밥 제어 상태, 올 풀림 현상 여부 등을 엄격하게 정밀 전수 검사합니다. 통과된 프리미엄 양말에 브랜드 맞춤 포장택(Tag) 또는 고급 기프트 박스를 결속하여 고객사에게 최상으로 배송합니다.",
    image: "./images/mksocks_gift_packaging_1782873870415.jpg"
  }
];

export const TECH_ITEMS: TechItem[] = [
  {
    id: "tech-1",
    title: "국산 최고급 코마사 공정",
    englishTitle: "Premium Combed Cotton",
    description: "거친 단섬유와 이물질을 기계로 빗어 털어내 매끈하고 튼튼한 최고급 프리미엄 면 원사만을 채택합니다.",
    details: "일반 면사에 비해 보풀 발생이 현저히 적고 광택이 부드러우며, 세탁 후에도 양말 특유의 딱딱해짐이나 뻣뻣한 감각 없이 장기적으로 포근한 촉감을 온전히 유지합니다."
  },
  {
    id: "tech-2",
    title: "200침 정밀 컴퓨터 편직",
    englishTitle: "200 Needle Precision",
    description: "실린더 원주 내 바늘이 200개나 집약된 정밀 편직 시스템으로, 가벼우면서도 놀랍도록 촘촘하고 빈틈없는 강도를 약속합니다.",
    details: "바늘 수가 많을수록 패턴 표현력이 비약적으로 늘어나고 얇고 촘촘하게 편직이 가능하여 정장 구두 안에 신기 가장 세련되고 부드러운 하이엔드 텍스타일을 완성합니다."
  },
  {
    id: "tech-3",
    title: "흘러내림 없는 입체 텐션",
    englishTitle: "Comfortable Ergonomic Tension",
    description: "발목을 파고들듯이 압박하거나 압력을 한곳에 모으지 않고, 점진적으로 잡아주어 편안하면서도 절대 흘러내리지 않습니다.",
    details: "MKSOCKS의 고신축 라이크라 탄성사 배합 비법을 적용하여 수없이 세탁기에 돌리더라도 목이 늘어나거나 축 늘어지는 저가형 제품과의 구조적인 차별점을 극명히 경험할 수 있습니다."
  },
  {
    id: "tech-4",
    title: "이중 뒤꿈치 입체 설계",
    englishTitle: "Dual Heel Y-Structure",
    description: "평면적인 양말 구조에서 벗어나 마찰이 가장 빈번한 아킬레스건과 복사뼈 하단을 Y자 형태로 입체 봉제 처리합니다.",
    details: "발 뒤꿈치 모양을 3D 입체 형태로 포근히 감싸주기 때문에 보행 중 양말이 미끄러지거나 뒤틀리는 마찰 소모를 차단하며 피로를 대폭 경감합니다."
  }
];

export const STAT_ITEMS: StatItem[] = [
  {
    id: "stat-years",
    value: "30+",
    label: "양말 제조 업력 (년)",
    description: "오직 양말 한 분야에만 집중하여 축적한 업계 최고의 노하우"
  },
  {
    id: "stat-machines",
    value: "25대",
    label: "최신 컴퓨터 편직 설비",
    description: "자동 정밀 컴퓨터 제어를 바탕으로 고밀도 복합 패턴 가동"
  },
  {
    id: "stat-capacity",
    value: "50,000+",
    label: "월간 생산 역량 (켤레)",
    description: "풍부한 설비와 본사 직접 생산 인프라로 원활한 대량 오더 대응"
  },
  {
    id: "stat-materials",
    value: "100%",
    label: "국산 원자재 생산 가동률",
    description: "피부에 닿는 원사부터 탄성 밴딩까지 100% 안전한 국내산 엄선"
  }
];
