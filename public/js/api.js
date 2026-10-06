/**
 * EasyShop REST API Client Module (v7 Pure UTF-8 with Built-in 60 Products & 1200 Reviews)
 */
const DEFAULT_CATEGORIES = [
  {
    "id": "cat-fashion",
    "name": "패션 / 의류",
    "icon": "shirt",
    "badge": "NEW",
    "description": "트렌디한 데일리 룩부터 프리미엄 아우터까지",
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "cat-digital",
    "name": "디지털 / 가전",
    "icon": "laptop",
    "badge": "HOT",
    "description": "스마트한 일상을 위한 최신 스마트 디바이스",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "cat-beauty",
    "name": "뷰티 / 케어",
    "icon": "sparkles",
    "badge": "BEST",
    "description": "피부 본연의 건강한 광채를 위한 스킨케어",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "cat-living",
    "name": "리빙 / 인테리어",
    "icon": "home",
    "badge": "",
    "description": "감각적인 홈 스타일링과 프리미엄 리빙 아이템",
    "image": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "cat-food",
    "name": "푸드 / 키친",
    "icon": "coffee",
    "badge": "SALE",
    "description": "장인의 정성이 담긴 프리미엄 디저트와 다이닝",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  }
];

const DEFAULT_PRODUCTS = [
  {
    "id": "prod-01",
    "name": "프리미엄 캐시미어 블렌드 오버핏 코트",
    "category": "패션 / 의류",
    "categoryId": "cat-fashion",
    "price": 289000,
    "originalPrice": 389000,
    "discountRate": 25,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 30,
    "isBest": true,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": true,
    "thumbnail": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "최고급 몽골리안 캐시미어 30% 혼방, 우아한 실루엣과 극강의 보온성",
    "description": "<h3>최고급 몽골리안 캐시미어 30% 혼방, 우아한 실루엣과 극강의 보온성</h3>\n<p>프리미엄 캐시미어 블렌드 오버핏 코트은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80\" alt=\"프리미엄 캐시미어 블렌드 오버핏 코트 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 캐시미어 블렌드 오버핏 코트의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80\" alt=\"프리미엄 캐시미어 블렌드 오버핏 코트 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80\" alt=\"프리미엄 캐시미어 블렌드 오버핏 코트 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "오트밀 베이지 / M(95-100)",
        "stock": 12
      },
      {
        "name": "오트밀 베이지 / L(105)",
        "stock": 8
      },
      {
        "name": "미드나잇 블랙 / M(95-100)",
        "stock": 10
      },
      {
        "name": "미드나잇 블랙 / L(105)",
        "stock": 5
      }
    ],
    "specs": {
      "제조국": "대한민국",
      "소재": "캐시미어 30%, 울 70%",
      "품질보증": "1년 무상수선"
    },
    "reviews": [
      {
        "id": "rev-prod-01-1",
        "author": "이*은",
        "rating": 4,
        "date": "2026-09-29",
        "content": "프리미엄 캐시미어 블렌드 오버핏 코트 실물이 훨씬 예쁘고 원단이 정말 탄탄합니다.",
        "likes": 34
      },
      {
        "id": "rev-prod-01-2",
        "author": "박*윤",
        "rating": 5,
        "date": "2026-09-26",
        "content": "핏이 자연스럽게 떨어져서 체형 커버도 잘 되고 날씬해 보여요.",
        "likes": 32
      },
      {
        "id": "rev-prod-01-3",
        "author": "최*민",
        "rating": 5,
        "date": "2026-09-23",
        "content": "마감 바느질이나 단추 퀄리티가 백화점 고가 브랜드 못지않네요.",
        "likes": 30
      },
      {
        "id": "rev-prod-01-4",
        "author": "정*지",
        "rating": 5,
        "date": "2026-09-20",
        "content": "배송도 하루 만에 칼배송으로 왔고 포장도 정성스럽습니다.",
        "likes": 29
      },
      {
        "id": "rev-prod-01-5",
        "author": "강*정",
        "rating": 5,
        "date": "2026-09-17",
        "content": "색감이 너무 튀지 않고 은은하게 고급스러워서 데일리룩으로 딱입니다.",
        "likes": 27
      },
      {
        "id": "rev-prod-01-6",
        "author": "조*영",
        "rating": 5,
        "date": "2026-09-14",
        "content": "착용감이 편해서 하루 종일 입고 있어도 피로감이 전혀 없어요.",
        "likes": 26
      },
      {
        "id": "rev-prod-01-7",
        "author": "윤*원",
        "rating": 4,
        "date": "2026-09-11",
        "content": "친구들이 다 어디서 샀냐고 물어봐서 이지샵 추천해 줬습니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-01-8",
        "author": "장*린",
        "rating": 5,
        "date": "2026-09-08",
        "content": "세탁 후에도 변형이나 줄어듦 없이 형태가 잘 유지되네요.",
        "likes": 22
      },
      {
        "id": "rev-prod-01-9",
        "author": "임*준",
        "rating": 5,
        "date": "2026-09-05",
        "content": "사이즈 가이드대로 주문했더니 맞춤옷처럼 딱 맞습니다.",
        "likes": 21
      },
      {
        "id": "rev-prod-01-10",
        "author": "한*경",
        "rating": 5,
        "date": "2026-09-02",
        "content": "가성비, 디자인, 품질 모두 만족스러운 최고의 쇼핑이었습니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-01-11",
        "author": "오*수",
        "rating": 5,
        "date": "2026-08-30",
        "content": "원단 촉감이 부드러워서 피부 자극 없이 편안합니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-01-12",
        "author": "서*우",
        "rating": 5,
        "date": "2026-08-27",
        "content": "계절 상관없이 활용도가 높아서 손이 자주 가는 아이템이에요.",
        "likes": 16
      },
      {
        "id": "rev-prod-01-13",
        "author": "신*희",
        "rating": 4,
        "date": "2026-08-24",
        "content": "디테일 하나하나 신경 쓴 게 느껴지는 완성도 높은 옷입니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-01-14",
        "author": "권*진",
        "rating": 5,
        "date": "2026-08-21",
        "content": "단정한 출근룩부터 주말 캐주얼룩까지 전천후로 소화 가능해요.",
        "likes": 13
      },
      {
        "id": "rev-prod-01-15",
        "author": "황*아",
        "rating": 5,
        "date": "2026-08-18",
        "content": "다른 색상도 추가로 구매해서 쟁여둘 생각입니다.",
        "likes": 11
      },
      {
        "id": "rev-prod-01-16",
        "author": "안*태",
        "rating": 5,
        "date": "2026-08-15",
        "content": "가성비가 정말 훌륭합니다. 이 가격에 이 퀄리티라니 놀랍네요.",
        "likes": 10
      },
      {
        "id": "rev-prod-01-17",
        "author": "송*현",
        "rating": 5,
        "date": "2026-08-12",
        "content": "포장 박스를 열자마자 만족감이 100% 차올랐습니다.",
        "likes": 8
      },
      {
        "id": "rev-prod-01-18",
        "author": "전*호",
        "rating": 5,
        "date": "2026-08-09",
        "content": "기장감과 품이 여유 있어서 활동하기가 아주 수월합니다.",
        "likes": 6
      },
      {
        "id": "rev-prod-01-19",
        "author": "홍*훈",
        "rating": 4,
        "date": "2026-08-06",
        "content": "선물용으로 샀는데 받는 분이 너무 좋아하셨습니다.",
        "likes": 5
      },
      {
        "id": "rev-prod-01-20",
        "author": "유*서",
        "rating": 5,
        "date": "2026-08-03",
        "content": "올해 구매한 패션 아이템 중 가장 마음에 듭니다. 적극 추천해요!",
        "likes": 3
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-01-1",
        "author": "조*훈",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-02",
    "name": "프렌치 린넨 100% 루즈핏 스트라이프 셔츠",
    "category": "패션 / 의류",
    "categoryId": "cat-fashion",
    "price": 79000,
    "originalPrice": 119000,
    "discountRate": 33,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 37,
    "isBest": false,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": true,
    "thumbnail": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "프랑스 노르망디산 프리미엄 린넨, 자연스러운 구김과 쾌적한 쿨링 터치",
    "description": "<h3>프랑스 노르망디산 프리미엄 린넨, 자연스러운 구김과 쾌적한 쿨링 터치</h3>\n<p>프렌치 린넨 100% 루즈핏 스트라이프 셔츠은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80\" alt=\"프렌치 린넨 100% 루즈핏 스트라이프 셔츠 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">프렌치 린넨 100% 루즈핏 스트라이프 셔츠의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80\" alt=\"프렌치 린넨 100% 루즈핏 스트라이프 셔츠 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80\" alt=\"프렌치 린넨 100% 루즈핏 스트라이프 셔츠 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "스카이블루 스트라이프 / M",
        "stock": 18
      },
      {
        "name": "스카이블루 스트라이프 / L",
        "stock": 12
      },
      {
        "name": "클래식 네이비 스트라이프 / M",
        "stock": 10
      }
    ],
    "specs": {
      "소재": "프렌치 린넨 100%",
      "원산지": "대한민국",
      "세탁": "찬물 단독 울코스"
    },
    "reviews": [
      {
        "id": "rev-prod-02-1",
        "author": "고*은",
        "rating": 4,
        "date": "2026-09-28",
        "content": "프렌치 린넨 100% 루즈핏 스트라이프 셔츠 실물이 훨씬 예쁘고 원단이 정말 탄탄합니다.",
        "likes": 36
      },
      {
        "id": "rev-prod-02-2",
        "author": "문*윤",
        "rating": 5,
        "date": "2026-09-25",
        "content": "핏이 자연스럽게 떨어져서 체형 커버도 잘 되고 날씬해 보여요.",
        "likes": 34
      },
      {
        "id": "rev-prod-02-3",
        "author": "양*민",
        "rating": 5,
        "date": "2026-09-22",
        "content": "마감 바느질이나 단추 퀄리티가 백화점 고가 브랜드 못지않네요.",
        "likes": 32
      },
      {
        "id": "rev-prod-02-4",
        "author": "손*지",
        "rating": 5,
        "date": "2026-09-19",
        "content": "배송도 하루 만에 칼배송으로 왔고 포장도 정성스럽습니다.",
        "likes": 31
      },
      {
        "id": "rev-prod-02-5",
        "author": "배*정",
        "rating": 5,
        "date": "2026-09-16",
        "content": "색감이 너무 튀지 않고 은은하게 고급스러워서 데일리룩으로 딱입니다.",
        "likes": 29
      },
      {
        "id": "rev-prod-02-6",
        "author": "백*영",
        "rating": 5,
        "date": "2026-09-13",
        "content": "착용감이 편해서 하루 종일 입고 있어도 피로감이 전혀 없어요.",
        "likes": 28
      },
      {
        "id": "rev-prod-02-7",
        "author": "허*원",
        "rating": 4,
        "date": "2026-09-10",
        "content": "친구들이 다 어디서 샀냐고 물어봐서 이지샵 추천해 줬습니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-02-8",
        "author": "노*린",
        "rating": 5,
        "date": "2026-09-07",
        "content": "세탁 후에도 변형이나 줄어듦 없이 형태가 잘 유지되네요.",
        "likes": 24
      },
      {
        "id": "rev-prod-02-9",
        "author": "남*준",
        "rating": 5,
        "date": "2026-09-04",
        "content": "사이즈 가이드대로 주문했더니 맞춤옷처럼 딱 맞습니다.",
        "likes": 23
      },
      {
        "id": "rev-prod-02-10",
        "author": "심*경",
        "rating": 5,
        "date": "2026-09-01",
        "content": "가성비, 디자인, 품질 모두 만족스러운 최고의 쇼핑이었습니다.",
        "likes": 21
      },
      {
        "id": "rev-prod-02-11",
        "author": "김*수",
        "rating": 5,
        "date": "2026-08-29",
        "content": "원단 촉감이 부드러워서 피부 자극 없이 편안합니다.",
        "likes": 20
      },
      {
        "id": "rev-prod-02-12",
        "author": "이*우",
        "rating": 5,
        "date": "2026-08-26",
        "content": "계절 상관없이 활용도가 높아서 손이 자주 가는 아이템이에요.",
        "likes": 18
      },
      {
        "id": "rev-prod-02-13",
        "author": "박*희",
        "rating": 4,
        "date": "2026-08-23",
        "content": "디테일 하나하나 신경 쓴 게 느껴지는 완성도 높은 옷입니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-02-14",
        "author": "최*진",
        "rating": 5,
        "date": "2026-08-20",
        "content": "단정한 출근룩부터 주말 캐주얼룩까지 전천후로 소화 가능해요.",
        "likes": 15
      },
      {
        "id": "rev-prod-02-15",
        "author": "정*아",
        "rating": 5,
        "date": "2026-08-17",
        "content": "다른 색상도 추가로 구매해서 쟁여둘 생각입니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-02-16",
        "author": "강*태",
        "rating": 5,
        "date": "2026-08-14",
        "content": "가성비가 정말 훌륭합니다. 이 가격에 이 퀄리티라니 놀랍네요.",
        "likes": 12
      },
      {
        "id": "rev-prod-02-17",
        "author": "조*현",
        "rating": 5,
        "date": "2026-08-11",
        "content": "포장 박스를 열자마자 만족감이 100% 차올랐습니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-02-18",
        "author": "윤*호",
        "rating": 5,
        "date": "2026-08-08",
        "content": "기장감과 품이 여유 있어서 활동하기가 아주 수월합니다.",
        "likes": 8
      },
      {
        "id": "rev-prod-02-19",
        "author": "장*훈",
        "rating": 4,
        "date": "2026-08-05",
        "content": "선물용으로 샀는데 받는 분이 너무 좋아하셨습니다.",
        "likes": 7
      },
      {
        "id": "rev-prod-02-20",
        "author": "임*서",
        "rating": 5,
        "date": "2026-08-02",
        "content": "올해 구매한 패션 아이템 중 가장 마음에 듭니다. 적극 추천해요!",
        "likes": 5
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-02-1",
        "author": "윤*서",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-03",
    "name": "엑스트라 파인 메리노울 터틀넥 니트",
    "category": "패션 / 의류",
    "categoryId": "cat-fashion",
    "price": 89000,
    "originalPrice": 129000,
    "discountRate": 31,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 44,
    "isBest": true,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": true,
    "thumbnail": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "19.5 마이크론 초극세 메리노울 100%, 맨살에도 부드러운 하이엔드 니트웨어",
    "description": "<h3>19.5 마이크론 초극세 메리노울 100%, 맨살에도 부드러운 하이엔드 니트웨어</h3>\n<p>엑스트라 파인 메리노울 터틀넥 니트은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80\" alt=\"엑스트라 파인 메리노울 터틀넥 니트 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">엑스트라 파인 메리노울 터틀넥 니트의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80\" alt=\"엑스트라 파인 메리노울 터틀넥 니트 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?auto=format&fit=crop&w=800&q=80\" alt=\"엑스트라 파인 메리노울 터틀넥 니트 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "아이보리 / Free",
        "stock": 25
      },
      {
        "name": "차콜 그레이 / Free",
        "stock": 20
      },
      {
        "name": "모카 브라운 / Free",
        "stock": 15
      }
    ],
    "specs": {
      "소재": "메리노울 100%",
      "제조국": "대한민국"
    },
    "reviews": [
      {
        "id": "rev-prod-03-1",
        "author": "한*은",
        "rating": 4,
        "date": "2026-09-27",
        "content": "엑스트라 파인 메리노울 터틀넥 니트 실물이 훨씬 예쁘고 원단이 정말 탄탄합니다.",
        "likes": 38
      },
      {
        "id": "rev-prod-03-2",
        "author": "오*윤",
        "rating": 5,
        "date": "2026-09-24",
        "content": "핏이 자연스럽게 떨어져서 체형 커버도 잘 되고 날씬해 보여요.",
        "likes": 36
      },
      {
        "id": "rev-prod-03-3",
        "author": "서*민",
        "rating": 5,
        "date": "2026-09-21",
        "content": "마감 바느질이나 단추 퀄리티가 백화점 고가 브랜드 못지않네요.",
        "likes": 34
      },
      {
        "id": "rev-prod-03-4",
        "author": "신*지",
        "rating": 5,
        "date": "2026-09-18",
        "content": "배송도 하루 만에 칼배송으로 왔고 포장도 정성스럽습니다.",
        "likes": 33
      },
      {
        "id": "rev-prod-03-5",
        "author": "권*정",
        "rating": 5,
        "date": "2026-09-15",
        "content": "색감이 너무 튀지 않고 은은하게 고급스러워서 데일리룩으로 딱입니다.",
        "likes": 31
      },
      {
        "id": "rev-prod-03-6",
        "author": "황*영",
        "rating": 5,
        "date": "2026-09-12",
        "content": "착용감이 편해서 하루 종일 입고 있어도 피로감이 전혀 없어요.",
        "likes": 30
      },
      {
        "id": "rev-prod-03-7",
        "author": "안*원",
        "rating": 4,
        "date": "2026-09-09",
        "content": "친구들이 다 어디서 샀냐고 물어봐서 이지샵 추천해 줬습니다.",
        "likes": 28
      },
      {
        "id": "rev-prod-03-8",
        "author": "송*린",
        "rating": 5,
        "date": "2026-09-06",
        "content": "세탁 후에도 변형이나 줄어듦 없이 형태가 잘 유지되네요.",
        "likes": 26
      },
      {
        "id": "rev-prod-03-9",
        "author": "전*준",
        "rating": 5,
        "date": "2026-09-03",
        "content": "사이즈 가이드대로 주문했더니 맞춤옷처럼 딱 맞습니다.",
        "likes": 25
      },
      {
        "id": "rev-prod-03-10",
        "author": "홍*경",
        "rating": 5,
        "date": "2026-08-31",
        "content": "가성비, 디자인, 품질 모두 만족스러운 최고의 쇼핑이었습니다.",
        "likes": 23
      },
      {
        "id": "rev-prod-03-11",
        "author": "유*수",
        "rating": 5,
        "date": "2026-08-28",
        "content": "원단 촉감이 부드러워서 피부 자극 없이 편안합니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-03-12",
        "author": "고*우",
        "rating": 5,
        "date": "2026-08-25",
        "content": "계절 상관없이 활용도가 높아서 손이 자주 가는 아이템이에요.",
        "likes": 20
      },
      {
        "id": "rev-prod-03-13",
        "author": "문*희",
        "rating": 4,
        "date": "2026-08-22",
        "content": "디테일 하나하나 신경 쓴 게 느껴지는 완성도 높은 옷입니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-03-14",
        "author": "양*진",
        "rating": 5,
        "date": "2026-08-19",
        "content": "단정한 출근룩부터 주말 캐주얼룩까지 전천후로 소화 가능해요.",
        "likes": 17
      },
      {
        "id": "rev-prod-03-15",
        "author": "손*아",
        "rating": 5,
        "date": "2026-08-16",
        "content": "다른 색상도 추가로 구매해서 쟁여둘 생각입니다.",
        "likes": 15
      },
      {
        "id": "rev-prod-03-16",
        "author": "배*태",
        "rating": 5,
        "date": "2026-08-13",
        "content": "가성비가 정말 훌륭합니다. 이 가격에 이 퀄리티라니 놀랍네요.",
        "likes": 14
      },
      {
        "id": "rev-prod-03-17",
        "author": "백*현",
        "rating": 5,
        "date": "2026-08-10",
        "content": "포장 박스를 열자마자 만족감이 100% 차올랐습니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-03-18",
        "author": "허*호",
        "rating": 5,
        "date": "2026-08-07",
        "content": "기장감과 품이 여유 있어서 활동하기가 아주 수월합니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-03-19",
        "author": "노*훈",
        "rating": 4,
        "date": "2026-08-04",
        "content": "선물용으로 샀는데 받는 분이 너무 좋아하셨습니다.",
        "likes": 9
      },
      {
        "id": "rev-prod-03-20",
        "author": "남*서",
        "rating": 5,
        "date": "2026-08-01",
        "content": "올해 구매한 패션 아이템 중 가장 마음에 듭니다. 적극 추천해요!",
        "likes": 7
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-03-1",
        "author": "장*은",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-04",
    "name": "컴포트 올데이 4방향 스트레치 테이퍼드 슬랙스",
    "category": "패션 / 의류",
    "categoryId": "cat-fashion",
    "price": 64000,
    "originalPrice": 89000,
    "discountRate": 28,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 51,
    "isBest": true,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "비밀 밴딩 허리와 4Way 고탄성 복원력, 하루 종일 편안한 비즈니스 캐주얼 슬랙스",
    "description": "<h3>비밀 밴딩 허리와 4Way 고탄성 복원력, 하루 종일 편안한 비즈니스 캐주얼 슬랙스</h3>\n<p>컴포트 올데이 4방향 스트레치 테이퍼드 슬랙스은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80\" alt=\"컴포트 올데이 4방향 스트레치 테이퍼드 슬랙스 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">컴포트 올데이 4방향 스트레치 테이퍼드 슬랙스의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80\" alt=\"컴포트 올데이 4방향 스트레치 테이퍼드 슬랙스 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80\" alt=\"컴포트 올데이 4방향 스트레치 테이퍼드 슬랙스 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "블랙 / M(30-31)",
        "stock": 30
      },
      {
        "name": "블랙 / L(32-33)",
        "stock": 25
      },
      {
        "name": "다크네이비 / M(30-31)",
        "stock": 20
      }
    ],
    "specs": {
      "소재": "폴리에스터 68%, 레이온 28%, 스판 4%",
      "원산지": "대한민국"
    },
    "reviews": [
      {
        "id": "rev-prod-04-1",
        "author": "심*은",
        "rating": 4,
        "date": "2026-09-26",
        "content": "컴포트 올데이 4방향 스트레치 테이퍼드 슬랙스 실물이 훨씬 예쁘고 원단이 정말 탄탄합니다.",
        "likes": 40
      },
      {
        "id": "rev-prod-04-2",
        "author": "김*윤",
        "rating": 5,
        "date": "2026-09-23",
        "content": "핏이 자연스럽게 떨어져서 체형 커버도 잘 되고 날씬해 보여요.",
        "likes": 38
      },
      {
        "id": "rev-prod-04-3",
        "author": "이*민",
        "rating": 5,
        "date": "2026-09-20",
        "content": "마감 바느질이나 단추 퀄리티가 백화점 고가 브랜드 못지않네요.",
        "likes": 36
      },
      {
        "id": "rev-prod-04-4",
        "author": "박*지",
        "rating": 5,
        "date": "2026-09-17",
        "content": "배송도 하루 만에 칼배송으로 왔고 포장도 정성스럽습니다.",
        "likes": 35
      },
      {
        "id": "rev-prod-04-5",
        "author": "최*정",
        "rating": 5,
        "date": "2026-09-14",
        "content": "색감이 너무 튀지 않고 은은하게 고급스러워서 데일리룩으로 딱입니다.",
        "likes": 33
      },
      {
        "id": "rev-prod-04-6",
        "author": "정*영",
        "rating": 5,
        "date": "2026-09-11",
        "content": "착용감이 편해서 하루 종일 입고 있어도 피로감이 전혀 없어요.",
        "likes": 32
      },
      {
        "id": "rev-prod-04-7",
        "author": "강*원",
        "rating": 4,
        "date": "2026-09-08",
        "content": "친구들이 다 어디서 샀냐고 물어봐서 이지샵 추천해 줬습니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-04-8",
        "author": "조*린",
        "rating": 5,
        "date": "2026-09-05",
        "content": "세탁 후에도 변형이나 줄어듦 없이 형태가 잘 유지되네요.",
        "likes": 28
      },
      {
        "id": "rev-prod-04-9",
        "author": "윤*준",
        "rating": 5,
        "date": "2026-09-02",
        "content": "사이즈 가이드대로 주문했더니 맞춤옷처럼 딱 맞습니다.",
        "likes": 27
      },
      {
        "id": "rev-prod-04-10",
        "author": "장*경",
        "rating": 5,
        "date": "2026-08-30",
        "content": "가성비, 디자인, 품질 모두 만족스러운 최고의 쇼핑이었습니다.",
        "likes": 25
      },
      {
        "id": "rev-prod-04-11",
        "author": "임*수",
        "rating": 5,
        "date": "2026-08-27",
        "content": "원단 촉감이 부드러워서 피부 자극 없이 편안합니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-04-12",
        "author": "한*우",
        "rating": 5,
        "date": "2026-08-24",
        "content": "계절 상관없이 활용도가 높아서 손이 자주 가는 아이템이에요.",
        "likes": 22
      },
      {
        "id": "rev-prod-04-13",
        "author": "오*희",
        "rating": 4,
        "date": "2026-08-21",
        "content": "디테일 하나하나 신경 쓴 게 느껴지는 완성도 높은 옷입니다.",
        "likes": 20
      },
      {
        "id": "rev-prod-04-14",
        "author": "서*진",
        "rating": 5,
        "date": "2026-08-18",
        "content": "단정한 출근룩부터 주말 캐주얼룩까지 전천후로 소화 가능해요.",
        "likes": 19
      },
      {
        "id": "rev-prod-04-15",
        "author": "신*아",
        "rating": 5,
        "date": "2026-08-15",
        "content": "다른 색상도 추가로 구매해서 쟁여둘 생각입니다.",
        "likes": 17
      },
      {
        "id": "rev-prod-04-16",
        "author": "권*태",
        "rating": 5,
        "date": "2026-08-12",
        "content": "가성비가 정말 훌륭합니다. 이 가격에 이 퀄리티라니 놀랍네요.",
        "likes": 16
      },
      {
        "id": "rev-prod-04-17",
        "author": "황*현",
        "rating": 5,
        "date": "2026-08-09",
        "content": "포장 박스를 열자마자 만족감이 100% 차올랐습니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-04-18",
        "author": "안*호",
        "rating": 5,
        "date": "2026-08-06",
        "content": "기장감과 품이 여유 있어서 활동하기가 아주 수월합니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-04-19",
        "author": "송*훈",
        "rating": 4,
        "date": "2026-08-03",
        "content": "선물용으로 샀는데 받는 분이 너무 좋아하셨습니다.",
        "likes": 11
      },
      {
        "id": "rev-prod-04-20",
        "author": "전*서",
        "rating": 5,
        "date": "2026-07-31",
        "content": "올해 구매한 패션 아이템 중 가장 마음에 듭니다. 적극 추천해요!",
        "likes": 9
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-04-1",
        "author": "임*윤",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-05",
    "name": "헤비웨이트 950g 프렌치테리 오버핏 후드 집업",
    "category": "패션 / 의류",
    "categoryId": "cat-fashion",
    "price": 78000,
    "originalPrice": 98000,
    "discountRate": 20,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 58,
    "isBest": false,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": true,
    "thumbnail": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "밀도 높은 950g/yd 헤비 프렌치테리, 모자 각이 무너지지 않는 탄탄한 후드",
    "description": "<h3>밀도 높은 950g/yd 헤비 프렌치테리, 모자 각이 무너지지 않는 탄탄한 후드</h3>\n<p>헤비웨이트 950g 프렌치테리 오버핏 후드 집업은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80\" alt=\"헤비웨이트 950g 프렌치테리 오버핏 후드 집업 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">헤비웨이트 950g 프렌치테리 오버핏 후드 집업의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80\" alt=\"헤비웨이트 950g 프렌치테리 오버핏 후드 집업 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=800&q=80\" alt=\"헤비웨이트 950g 프렌치테리 오버핏 후드 집업 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "멜란지 그레이 / L",
        "stock": 25
      },
      {
        "name": "멜란지 그레이 / XL",
        "stock": 15
      },
      {
        "name": "딥 블랙 / L",
        "stock": 20
      }
    ],
    "specs": {
      "소재": "코튼 100% (950g 헤비테리)",
      "부자재": "YKK 2Way 지퍼"
    },
    "reviews": [
      {
        "id": "rev-prod-05-1",
        "author": "홍*은",
        "rating": 4,
        "date": "2026-09-25",
        "content": "헤비웨이트 950g 프렌치테리 오버핏 후드 집업 실물이 훨씬 예쁘고 원단이 정말 탄탄합니다.",
        "likes": 42
      },
      {
        "id": "rev-prod-05-2",
        "author": "유*윤",
        "rating": 5,
        "date": "2026-09-22",
        "content": "핏이 자연스럽게 떨어져서 체형 커버도 잘 되고 날씬해 보여요.",
        "likes": 40
      },
      {
        "id": "rev-prod-05-3",
        "author": "고*민",
        "rating": 5,
        "date": "2026-09-19",
        "content": "마감 바느질이나 단추 퀄리티가 백화점 고가 브랜드 못지않네요.",
        "likes": 38
      },
      {
        "id": "rev-prod-05-4",
        "author": "문*지",
        "rating": 5,
        "date": "2026-09-16",
        "content": "배송도 하루 만에 칼배송으로 왔고 포장도 정성스럽습니다.",
        "likes": 37
      },
      {
        "id": "rev-prod-05-5",
        "author": "양*정",
        "rating": 5,
        "date": "2026-09-13",
        "content": "색감이 너무 튀지 않고 은은하게 고급스러워서 데일리룩으로 딱입니다.",
        "likes": 35
      },
      {
        "id": "rev-prod-05-6",
        "author": "손*영",
        "rating": 5,
        "date": "2026-09-10",
        "content": "착용감이 편해서 하루 종일 입고 있어도 피로감이 전혀 없어요.",
        "likes": 34
      },
      {
        "id": "rev-prod-05-7",
        "author": "배*원",
        "rating": 4,
        "date": "2026-09-07",
        "content": "친구들이 다 어디서 샀냐고 물어봐서 이지샵 추천해 줬습니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-05-8",
        "author": "백*린",
        "rating": 5,
        "date": "2026-09-04",
        "content": "세탁 후에도 변형이나 줄어듦 없이 형태가 잘 유지되네요.",
        "likes": 30
      },
      {
        "id": "rev-prod-05-9",
        "author": "허*준",
        "rating": 5,
        "date": "2026-09-01",
        "content": "사이즈 가이드대로 주문했더니 맞춤옷처럼 딱 맞습니다.",
        "likes": 29
      },
      {
        "id": "rev-prod-05-10",
        "author": "노*경",
        "rating": 5,
        "date": "2026-08-29",
        "content": "가성비, 디자인, 품질 모두 만족스러운 최고의 쇼핑이었습니다.",
        "likes": 27
      },
      {
        "id": "rev-prod-05-11",
        "author": "남*수",
        "rating": 5,
        "date": "2026-08-26",
        "content": "원단 촉감이 부드러워서 피부 자극 없이 편안합니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-05-12",
        "author": "심*우",
        "rating": 5,
        "date": "2026-08-23",
        "content": "계절 상관없이 활용도가 높아서 손이 자주 가는 아이템이에요.",
        "likes": 24
      },
      {
        "id": "rev-prod-05-13",
        "author": "김*희",
        "rating": 4,
        "date": "2026-08-20",
        "content": "디테일 하나하나 신경 쓴 게 느껴지는 완성도 높은 옷입니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-05-14",
        "author": "이*진",
        "rating": 5,
        "date": "2026-08-17",
        "content": "단정한 출근룩부터 주말 캐주얼룩까지 전천후로 소화 가능해요.",
        "likes": 21
      },
      {
        "id": "rev-prod-05-15",
        "author": "박*아",
        "rating": 5,
        "date": "2026-08-14",
        "content": "다른 색상도 추가로 구매해서 쟁여둘 생각입니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-05-16",
        "author": "최*태",
        "rating": 5,
        "date": "2026-08-11",
        "content": "가성비가 정말 훌륭합니다. 이 가격에 이 퀄리티라니 놀랍네요.",
        "likes": 18
      },
      {
        "id": "rev-prod-05-17",
        "author": "정*현",
        "rating": 5,
        "date": "2026-08-08",
        "content": "포장 박스를 열자마자 만족감이 100% 차올랐습니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-05-18",
        "author": "강*호",
        "rating": 5,
        "date": "2026-08-05",
        "content": "기장감과 품이 여유 있어서 활동하기가 아주 수월합니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-05-19",
        "author": "조*훈",
        "rating": 4,
        "date": "2026-08-02",
        "content": "선물용으로 샀는데 받는 분이 너무 좋아하셨습니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-05-20",
        "author": "윤*서",
        "rating": 5,
        "date": "2026-07-30",
        "content": "올해 구매한 패션 아이템 중 가장 마음에 듭니다. 적극 추천해요!",
        "likes": 11
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-05-1",
        "author": "한*민",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-06",
    "name": "테크니컬 방수 방풍 윈드브레이커 자켓",
    "category": "패션 / 의류",
    "categoryId": "cat-fashion",
    "price": 119000,
    "originalPrice": 159000,
    "discountRate": 25,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 65,
    "isBest": false,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": true,
    "thumbnail": "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "3단 레이어 방수 투습 멤브레인, 일상과 아웃도어를 넘나드는 고기능성 쉘",
    "description": "<h3>3단 레이어 방수 투습 멤브레인, 일상과 아웃도어를 넘나드는 고기능성 쉘</h3>\n<p>테크니컬 방수 방풍 윈드브레이커 자켓은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80\" alt=\"테크니컬 방수 방풍 윈드브레이커 자켓 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">테크니컬 방수 방풍 윈드브레이커 자켓의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=800&q=80\" alt=\"테크니컬 방수 방풍 윈드브레이커 자켓 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80\" alt=\"테크니컬 방수 방풍 윈드브레이커 자켓 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "포레스트 올리브 / L(100)",
        "stock": 18
      },
      {
        "name": "스텔스 블랙 / L(100)",
        "stock": 22
      },
      {
        "name": "스텔스 블랙 / XL(105)",
        "stock": 14
      }
    ],
    "specs": {
      "방수도": "10,000mm",
      "투습도": "8,000g/m²/24h",
      "원산지": "대한민국"
    },
    "reviews": [
      {
        "id": "rev-prod-06-1",
        "author": "장*은",
        "rating": 4,
        "date": "2026-09-24",
        "content": "테크니컬 방수 방풍 윈드브레이커 자켓 실물이 훨씬 예쁘고 원단이 정말 탄탄합니다.",
        "likes": 34
      },
      {
        "id": "rev-prod-06-2",
        "author": "임*윤",
        "rating": 5,
        "date": "2026-09-21",
        "content": "핏이 자연스럽게 떨어져서 체형 커버도 잘 되고 날씬해 보여요.",
        "likes": 32
      },
      {
        "id": "rev-prod-06-3",
        "author": "한*민",
        "rating": 5,
        "date": "2026-09-18",
        "content": "마감 바느질이나 단추 퀄리티가 백화점 고가 브랜드 못지않네요.",
        "likes": 30
      },
      {
        "id": "rev-prod-06-4",
        "author": "오*지",
        "rating": 5,
        "date": "2026-09-15",
        "content": "배송도 하루 만에 칼배송으로 왔고 포장도 정성스럽습니다.",
        "likes": 29
      },
      {
        "id": "rev-prod-06-5",
        "author": "서*정",
        "rating": 5,
        "date": "2026-09-12",
        "content": "색감이 너무 튀지 않고 은은하게 고급스러워서 데일리룩으로 딱입니다.",
        "likes": 27
      },
      {
        "id": "rev-prod-06-6",
        "author": "신*영",
        "rating": 5,
        "date": "2026-09-09",
        "content": "착용감이 편해서 하루 종일 입고 있어도 피로감이 전혀 없어요.",
        "likes": 26
      },
      {
        "id": "rev-prod-06-7",
        "author": "권*원",
        "rating": 4,
        "date": "2026-09-06",
        "content": "친구들이 다 어디서 샀냐고 물어봐서 이지샵 추천해 줬습니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-06-8",
        "author": "황*린",
        "rating": 5,
        "date": "2026-09-03",
        "content": "세탁 후에도 변형이나 줄어듦 없이 형태가 잘 유지되네요.",
        "likes": 22
      },
      {
        "id": "rev-prod-06-9",
        "author": "안*준",
        "rating": 5,
        "date": "2026-08-31",
        "content": "사이즈 가이드대로 주문했더니 맞춤옷처럼 딱 맞습니다.",
        "likes": 21
      },
      {
        "id": "rev-prod-06-10",
        "author": "송*경",
        "rating": 5,
        "date": "2026-08-28",
        "content": "가성비, 디자인, 품질 모두 만족스러운 최고의 쇼핑이었습니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-06-11",
        "author": "전*수",
        "rating": 5,
        "date": "2026-08-25",
        "content": "원단 촉감이 부드러워서 피부 자극 없이 편안합니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-06-12",
        "author": "홍*우",
        "rating": 5,
        "date": "2026-08-22",
        "content": "계절 상관없이 활용도가 높아서 손이 자주 가는 아이템이에요.",
        "likes": 16
      },
      {
        "id": "rev-prod-06-13",
        "author": "유*희",
        "rating": 4,
        "date": "2026-08-19",
        "content": "디테일 하나하나 신경 쓴 게 느껴지는 완성도 높은 옷입니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-06-14",
        "author": "고*진",
        "rating": 5,
        "date": "2026-08-16",
        "content": "단정한 출근룩부터 주말 캐주얼룩까지 전천후로 소화 가능해요.",
        "likes": 13
      },
      {
        "id": "rev-prod-06-15",
        "author": "문*아",
        "rating": 5,
        "date": "2026-08-13",
        "content": "다른 색상도 추가로 구매해서 쟁여둘 생각입니다.",
        "likes": 11
      },
      {
        "id": "rev-prod-06-16",
        "author": "양*태",
        "rating": 5,
        "date": "2026-08-10",
        "content": "가성비가 정말 훌륭합니다. 이 가격에 이 퀄리티라니 놀랍네요.",
        "likes": 10
      },
      {
        "id": "rev-prod-06-17",
        "author": "손*현",
        "rating": 5,
        "date": "2026-08-07",
        "content": "포장 박스를 열자마자 만족감이 100% 차올랐습니다.",
        "likes": 8
      },
      {
        "id": "rev-prod-06-18",
        "author": "배*호",
        "rating": 5,
        "date": "2026-08-04",
        "content": "기장감과 품이 여유 있어서 활동하기가 아주 수월합니다.",
        "likes": 6
      },
      {
        "id": "rev-prod-06-19",
        "author": "백*훈",
        "rating": 4,
        "date": "2026-08-01",
        "content": "선물용으로 샀는데 받는 분이 너무 좋아하셨습니다.",
        "likes": 5
      },
      {
        "id": "rev-prod-06-20",
        "author": "허*서",
        "rating": 5,
        "date": "2026-07-29",
        "content": "올해 구매한 패션 아이템 중 가장 마음에 듭니다. 적극 추천해요!",
        "likes": 3
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-06-1",
        "author": "오*지",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-07",
    "name": "프리미엄 헝가리 구스다운 라이트 패딩 베스트",
    "category": "패션 / 의류",
    "categoryId": "cat-fashion",
    "price": 98000,
    "originalPrice": 139000,
    "discountRate": 29,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 72,
    "isBest": true,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": true,
    "thumbnail": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "구스 솜털 90% 깃털 10% 필파워 750+, 코트 속 이너로도 완벽한 초경량 조끼",
    "description": "<h3>구스 솜털 90% 깃털 10% 필파워 750+, 코트 속 이너로도 완벽한 초경량 조끼</h3>\n<p>프리미엄 헝가리 구스다운 라이트 패딩 베스트은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80\" alt=\"프리미엄 헝가리 구스다운 라이트 패딩 베스트 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 헝가리 구스다운 라이트 패딩 베스트의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80\" alt=\"프리미엄 헝가리 구스다운 라이트 패딩 베스트 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80\" alt=\"프리미엄 헝가리 구스다운 라이트 패딩 베스트 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "매트 블랙 / M(95)",
        "stock": 20
      },
      {
        "name": "매트 블랙 / L(100)",
        "stock": 25
      },
      {
        "name": "웜 토프 / L(100)",
        "stock": 15
      }
    ],
    "specs": {
      "충전재": "헝가리 구스 90:10 (필파워 750+)",
      "중량": "약 160g"
    },
    "reviews": [
      {
        "id": "rev-prod-07-1",
        "author": "노*은",
        "rating": 4,
        "date": "2026-09-23",
        "content": "프리미엄 헝가리 구스다운 라이트 패딩 베스트 실물이 훨씬 예쁘고 원단이 정말 탄탄합니다.",
        "likes": 36
      },
      {
        "id": "rev-prod-07-2",
        "author": "남*윤",
        "rating": 5,
        "date": "2026-09-20",
        "content": "핏이 자연스럽게 떨어져서 체형 커버도 잘 되고 날씬해 보여요.",
        "likes": 34
      },
      {
        "id": "rev-prod-07-3",
        "author": "심*민",
        "rating": 5,
        "date": "2026-09-17",
        "content": "마감 바느질이나 단추 퀄리티가 백화점 고가 브랜드 못지않네요.",
        "likes": 32
      },
      {
        "id": "rev-prod-07-4",
        "author": "김*지",
        "rating": 5,
        "date": "2026-09-14",
        "content": "배송도 하루 만에 칼배송으로 왔고 포장도 정성스럽습니다.",
        "likes": 31
      },
      {
        "id": "rev-prod-07-5",
        "author": "이*정",
        "rating": 5,
        "date": "2026-09-11",
        "content": "색감이 너무 튀지 않고 은은하게 고급스러워서 데일리룩으로 딱입니다.",
        "likes": 29
      },
      {
        "id": "rev-prod-07-6",
        "author": "박*영",
        "rating": 5,
        "date": "2026-09-08",
        "content": "착용감이 편해서 하루 종일 입고 있어도 피로감이 전혀 없어요.",
        "likes": 28
      },
      {
        "id": "rev-prod-07-7",
        "author": "최*원",
        "rating": 4,
        "date": "2026-09-05",
        "content": "친구들이 다 어디서 샀냐고 물어봐서 이지샵 추천해 줬습니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-07-8",
        "author": "정*린",
        "rating": 5,
        "date": "2026-09-02",
        "content": "세탁 후에도 변형이나 줄어듦 없이 형태가 잘 유지되네요.",
        "likes": 24
      },
      {
        "id": "rev-prod-07-9",
        "author": "강*준",
        "rating": 5,
        "date": "2026-08-30",
        "content": "사이즈 가이드대로 주문했더니 맞춤옷처럼 딱 맞습니다.",
        "likes": 23
      },
      {
        "id": "rev-prod-07-10",
        "author": "조*경",
        "rating": 5,
        "date": "2026-08-27",
        "content": "가성비, 디자인, 품질 모두 만족스러운 최고의 쇼핑이었습니다.",
        "likes": 21
      },
      {
        "id": "rev-prod-07-11",
        "author": "윤*수",
        "rating": 5,
        "date": "2026-08-24",
        "content": "원단 촉감이 부드러워서 피부 자극 없이 편안합니다.",
        "likes": 20
      },
      {
        "id": "rev-prod-07-12",
        "author": "장*우",
        "rating": 5,
        "date": "2026-08-21",
        "content": "계절 상관없이 활용도가 높아서 손이 자주 가는 아이템이에요.",
        "likes": 18
      },
      {
        "id": "rev-prod-07-13",
        "author": "임*희",
        "rating": 4,
        "date": "2026-08-18",
        "content": "디테일 하나하나 신경 쓴 게 느껴지는 완성도 높은 옷입니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-07-14",
        "author": "한*진",
        "rating": 5,
        "date": "2026-08-15",
        "content": "단정한 출근룩부터 주말 캐주얼룩까지 전천후로 소화 가능해요.",
        "likes": 15
      },
      {
        "id": "rev-prod-07-15",
        "author": "오*아",
        "rating": 5,
        "date": "2026-08-12",
        "content": "다른 색상도 추가로 구매해서 쟁여둘 생각입니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-07-16",
        "author": "서*태",
        "rating": 5,
        "date": "2026-08-09",
        "content": "가성비가 정말 훌륭합니다. 이 가격에 이 퀄리티라니 놀랍네요.",
        "likes": 12
      },
      {
        "id": "rev-prod-07-17",
        "author": "신*현",
        "rating": 5,
        "date": "2026-08-06",
        "content": "포장 박스를 열자마자 만족감이 100% 차올랐습니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-07-18",
        "author": "권*호",
        "rating": 5,
        "date": "2026-08-03",
        "content": "기장감과 품이 여유 있어서 활동하기가 아주 수월합니다.",
        "likes": 8
      },
      {
        "id": "rev-prod-07-19",
        "author": "황*훈",
        "rating": 4,
        "date": "2026-07-31",
        "content": "선물용으로 샀는데 받는 분이 너무 좋아하셨습니다.",
        "likes": 7
      },
      {
        "id": "rev-prod-07-20",
        "author": "안*서",
        "rating": 5,
        "date": "2026-07-28",
        "content": "올해 구매한 패션 아이템 중 가장 마음에 듭니다. 적극 추천해요!",
        "likes": 5
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-07-1",
        "author": "서*정",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-08",
    "name": "코튼 와이드 투턱 카고 이지 팬츠",
    "category": "패션 / 의류",
    "categoryId": "cat-fashion",
    "price": 58000,
    "originalPrice": 79000,
    "discountRate": 26,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 79,
    "isBest": false,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "탄탄한 16수 고밀도 트윌 코튼, 자연스러운 투턱 주름과 실용적인 플랩 포켓",
    "description": "<h3>탄탄한 16수 고밀도 트윌 코튼, 자연스러운 투턱 주름과 실용적인 플랩 포켓</h3>\n<p>코튼 와이드 투턱 카고 이지 팬츠은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80\" alt=\"코튼 와이드 투턱 카고 이지 팬츠 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">코튼 와이드 투턱 카고 이지 팬츠의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80\" alt=\"코튼 와이드 투턱 카고 이지 팬츠 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80\" alt=\"코튼 와이드 투턱 카고 이지 팬츠 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "카키 그레이 / M(30-31)",
        "stock": 20
      },
      {
        "name": "카키 그레이 / L(32-33)",
        "stock": 15
      },
      {
        "name": "소프트 크림 / M(30-31)",
        "stock": 15
      }
    ],
    "specs": {
      "소재": "면 100% (바이오워싱)",
      "디테일": "밑단 스트링 조절"
    },
    "reviews": [
      {
        "id": "rev-prod-08-1",
        "author": "송*은",
        "rating": 4,
        "date": "2026-09-29",
        "content": "코튼 와이드 투턱 카고 이지 팬츠 실물이 훨씬 예쁘고 원단이 정말 탄탄합니다.",
        "likes": 38
      },
      {
        "id": "rev-prod-08-2",
        "author": "전*윤",
        "rating": 5,
        "date": "2026-09-26",
        "content": "핏이 자연스럽게 떨어져서 체형 커버도 잘 되고 날씬해 보여요.",
        "likes": 36
      },
      {
        "id": "rev-prod-08-3",
        "author": "홍*민",
        "rating": 5,
        "date": "2026-09-23",
        "content": "마감 바느질이나 단추 퀄리티가 백화점 고가 브랜드 못지않네요.",
        "likes": 34
      },
      {
        "id": "rev-prod-08-4",
        "author": "유*지",
        "rating": 5,
        "date": "2026-09-20",
        "content": "배송도 하루 만에 칼배송으로 왔고 포장도 정성스럽습니다.",
        "likes": 33
      },
      {
        "id": "rev-prod-08-5",
        "author": "고*정",
        "rating": 5,
        "date": "2026-09-17",
        "content": "색감이 너무 튀지 않고 은은하게 고급스러워서 데일리룩으로 딱입니다.",
        "likes": 31
      },
      {
        "id": "rev-prod-08-6",
        "author": "문*영",
        "rating": 5,
        "date": "2026-09-14",
        "content": "착용감이 편해서 하루 종일 입고 있어도 피로감이 전혀 없어요.",
        "likes": 30
      },
      {
        "id": "rev-prod-08-7",
        "author": "양*원",
        "rating": 4,
        "date": "2026-09-11",
        "content": "친구들이 다 어디서 샀냐고 물어봐서 이지샵 추천해 줬습니다.",
        "likes": 28
      },
      {
        "id": "rev-prod-08-8",
        "author": "손*린",
        "rating": 5,
        "date": "2026-09-08",
        "content": "세탁 후에도 변형이나 줄어듦 없이 형태가 잘 유지되네요.",
        "likes": 26
      },
      {
        "id": "rev-prod-08-9",
        "author": "배*준",
        "rating": 5,
        "date": "2026-09-05",
        "content": "사이즈 가이드대로 주문했더니 맞춤옷처럼 딱 맞습니다.",
        "likes": 25
      },
      {
        "id": "rev-prod-08-10",
        "author": "백*경",
        "rating": 5,
        "date": "2026-09-02",
        "content": "가성비, 디자인, 품질 모두 만족스러운 최고의 쇼핑이었습니다.",
        "likes": 23
      },
      {
        "id": "rev-prod-08-11",
        "author": "허*수",
        "rating": 5,
        "date": "2026-08-30",
        "content": "원단 촉감이 부드러워서 피부 자극 없이 편안합니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-08-12",
        "author": "노*우",
        "rating": 5,
        "date": "2026-08-27",
        "content": "계절 상관없이 활용도가 높아서 손이 자주 가는 아이템이에요.",
        "likes": 20
      },
      {
        "id": "rev-prod-08-13",
        "author": "남*희",
        "rating": 4,
        "date": "2026-08-24",
        "content": "디테일 하나하나 신경 쓴 게 느껴지는 완성도 높은 옷입니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-08-14",
        "author": "심*진",
        "rating": 5,
        "date": "2026-08-21",
        "content": "단정한 출근룩부터 주말 캐주얼룩까지 전천후로 소화 가능해요.",
        "likes": 17
      },
      {
        "id": "rev-prod-08-15",
        "author": "김*아",
        "rating": 5,
        "date": "2026-08-18",
        "content": "다른 색상도 추가로 구매해서 쟁여둘 생각입니다.",
        "likes": 15
      },
      {
        "id": "rev-prod-08-16",
        "author": "이*태",
        "rating": 5,
        "date": "2026-08-15",
        "content": "가성비가 정말 훌륭합니다. 이 가격에 이 퀄리티라니 놀랍네요.",
        "likes": 14
      },
      {
        "id": "rev-prod-08-17",
        "author": "박*현",
        "rating": 5,
        "date": "2026-08-12",
        "content": "포장 박스를 열자마자 만족감이 100% 차올랐습니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-08-18",
        "author": "최*호",
        "rating": 5,
        "date": "2026-08-09",
        "content": "기장감과 품이 여유 있어서 활동하기가 아주 수월합니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-08-19",
        "author": "정*훈",
        "rating": 4,
        "date": "2026-08-06",
        "content": "선물용으로 샀는데 받는 분이 너무 좋아하셨습니다.",
        "likes": 9
      },
      {
        "id": "rev-prod-08-20",
        "author": "강*서",
        "rating": 5,
        "date": "2026-08-03",
        "content": "올해 구매한 패션 아이템 중 가장 마음에 듭니다. 적극 추천해요!",
        "likes": 7
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-08-1",
        "author": "신*영",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-09",
    "name": "클래식 80수 2합 옥스포드 버튼다운 셔츠",
    "category": "패션 / 의류",
    "categoryId": "cat-fashion",
    "price": 59000,
    "originalPrice": 79000,
    "discountRate": 25,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 36,
    "isBest": false,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "탄탄한 옥스포드 조직감, 입을수록 자연스럽게 길드는 프리미엄 에센셜 셔츠",
    "description": "<h3>탄탄한 옥스포드 조직감, 입을수록 자연스럽게 길드는 프리미엄 에센셜 셔츠</h3>\n<p>클래식 80수 2합 옥스포드 버튼다운 셔츠은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80\" alt=\"클래식 80수 2합 옥스포드 버튼다운 셔츠 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">클래식 80수 2합 옥스포드 버튼다운 셔츠의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80\" alt=\"클래식 80수 2합 옥스포드 버튼다운 셔츠 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80\" alt=\"클래식 80수 2합 옥스포드 버튼다운 셔츠 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "화이트 / M(100)",
        "stock": 30
      },
      {
        "name": "화이트 / L(105)",
        "stock": 20
      },
      {
        "name": "라이트 블루 / M(100)",
        "stock": 25
      }
    ],
    "specs": {
      "소재": "프리미엄 코튼 100%",
      "카라": "버튼다운"
    },
    "reviews": [
      {
        "id": "rev-prod-09-1",
        "author": "조*은",
        "rating": 4,
        "date": "2026-09-28",
        "content": "클래식 80수 2합 옥스포드 버튼다운 셔츠 실물이 훨씬 예쁘고 원단이 정말 탄탄합니다.",
        "likes": 40
      },
      {
        "id": "rev-prod-09-2",
        "author": "윤*윤",
        "rating": 5,
        "date": "2026-09-25",
        "content": "핏이 자연스럽게 떨어져서 체형 커버도 잘 되고 날씬해 보여요.",
        "likes": 38
      },
      {
        "id": "rev-prod-09-3",
        "author": "장*민",
        "rating": 5,
        "date": "2026-09-22",
        "content": "마감 바느질이나 단추 퀄리티가 백화점 고가 브랜드 못지않네요.",
        "likes": 36
      },
      {
        "id": "rev-prod-09-4",
        "author": "임*지",
        "rating": 5,
        "date": "2026-09-19",
        "content": "배송도 하루 만에 칼배송으로 왔고 포장도 정성스럽습니다.",
        "likes": 35
      },
      {
        "id": "rev-prod-09-5",
        "author": "한*정",
        "rating": 5,
        "date": "2026-09-16",
        "content": "색감이 너무 튀지 않고 은은하게 고급스러워서 데일리룩으로 딱입니다.",
        "likes": 33
      },
      {
        "id": "rev-prod-09-6",
        "author": "오*영",
        "rating": 5,
        "date": "2026-09-13",
        "content": "착용감이 편해서 하루 종일 입고 있어도 피로감이 전혀 없어요.",
        "likes": 32
      },
      {
        "id": "rev-prod-09-7",
        "author": "서*원",
        "rating": 4,
        "date": "2026-09-10",
        "content": "친구들이 다 어디서 샀냐고 물어봐서 이지샵 추천해 줬습니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-09-8",
        "author": "신*린",
        "rating": 5,
        "date": "2026-09-07",
        "content": "세탁 후에도 변형이나 줄어듦 없이 형태가 잘 유지되네요.",
        "likes": 28
      },
      {
        "id": "rev-prod-09-9",
        "author": "권*준",
        "rating": 5,
        "date": "2026-09-04",
        "content": "사이즈 가이드대로 주문했더니 맞춤옷처럼 딱 맞습니다.",
        "likes": 27
      },
      {
        "id": "rev-prod-09-10",
        "author": "황*경",
        "rating": 5,
        "date": "2026-09-01",
        "content": "가성비, 디자인, 품질 모두 만족스러운 최고의 쇼핑이었습니다.",
        "likes": 25
      },
      {
        "id": "rev-prod-09-11",
        "author": "안*수",
        "rating": 5,
        "date": "2026-08-29",
        "content": "원단 촉감이 부드러워서 피부 자극 없이 편안합니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-09-12",
        "author": "송*우",
        "rating": 5,
        "date": "2026-08-26",
        "content": "계절 상관없이 활용도가 높아서 손이 자주 가는 아이템이에요.",
        "likes": 22
      },
      {
        "id": "rev-prod-09-13",
        "author": "전*희",
        "rating": 4,
        "date": "2026-08-23",
        "content": "디테일 하나하나 신경 쓴 게 느껴지는 완성도 높은 옷입니다.",
        "likes": 20
      },
      {
        "id": "rev-prod-09-14",
        "author": "홍*진",
        "rating": 5,
        "date": "2026-08-20",
        "content": "단정한 출근룩부터 주말 캐주얼룩까지 전천후로 소화 가능해요.",
        "likes": 19
      },
      {
        "id": "rev-prod-09-15",
        "author": "유*아",
        "rating": 5,
        "date": "2026-08-17",
        "content": "다른 색상도 추가로 구매해서 쟁여둘 생각입니다.",
        "likes": 17
      },
      {
        "id": "rev-prod-09-16",
        "author": "고*태",
        "rating": 5,
        "date": "2026-08-14",
        "content": "가성비가 정말 훌륭합니다. 이 가격에 이 퀄리티라니 놀랍네요.",
        "likes": 16
      },
      {
        "id": "rev-prod-09-17",
        "author": "문*현",
        "rating": 5,
        "date": "2026-08-11",
        "content": "포장 박스를 열자마자 만족감이 100% 차올랐습니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-09-18",
        "author": "양*호",
        "rating": 5,
        "date": "2026-08-08",
        "content": "기장감과 품이 여유 있어서 활동하기가 아주 수월합니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-09-19",
        "author": "손*훈",
        "rating": 4,
        "date": "2026-08-05",
        "content": "선물용으로 샀는데 받는 분이 너무 좋아하셨습니다.",
        "likes": 11
      },
      {
        "id": "rev-prod-09-20",
        "author": "배*서",
        "rating": 5,
        "date": "2026-08-02",
        "content": "올해 구매한 패션 아이템 중 가장 마음에 듭니다. 적극 추천해요!",
        "likes": 9
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-09-1",
        "author": "권*원",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-10",
    "name": "울 블렌드 클래식 A라인 플리츠 스커트",
    "category": "패션 / 의류",
    "categoryId": "cat-fashion",
    "price": 69000,
    "originalPrice": 95000,
    "discountRate": 27,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 43,
    "isBest": false,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": true,
    "thumbnail": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582142306909-195724d33ffc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "정교한 열 프레스 주름 가공, 걸을 때마다 우아하게 흩날리는 플리츠 실루엣",
    "description": "<h3>정교한 열 프레스 주름 가공, 걸을 때마다 우아하게 흩날리는 플리츠 실루엣</h3>\n<p>울 블렌드 클래식 A라인 플리츠 스커트은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80\" alt=\"울 블렌드 클래식 A라인 플리츠 스커트 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">울 블렌드 클래식 A라인 플리츠 스커트의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1582142306909-195724d33ffc?auto=format&fit=crop&w=800&q=80\" alt=\"울 블렌드 클래식 A라인 플리츠 스커트 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=800&q=80\" alt=\"울 블렌드 클래식 A라인 플리츠 스커트 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "차콜 / S(55)",
        "stock": 15
      },
      {
        "name": "차콜 / M(66)",
        "stock": 20
      },
      {
        "name": "베이지 브라운 / M(66)",
        "stock": 12
      }
    ],
    "specs": {
      "소재": "울 30%, 폴리에스터 70%",
      "안감": "정전기 방지 안감"
    },
    "reviews": [
      {
        "id": "rev-prod-10-1",
        "author": "백*은",
        "rating": 4,
        "date": "2026-09-27",
        "content": "울 블렌드 클래식 A라인 플리츠 스커트 실물이 훨씬 예쁘고 원단이 정말 탄탄합니다.",
        "likes": 42
      },
      {
        "id": "rev-prod-10-2",
        "author": "허*윤",
        "rating": 5,
        "date": "2026-09-24",
        "content": "핏이 자연스럽게 떨어져서 체형 커버도 잘 되고 날씬해 보여요.",
        "likes": 40
      },
      {
        "id": "rev-prod-10-3",
        "author": "노*민",
        "rating": 5,
        "date": "2026-09-21",
        "content": "마감 바느질이나 단추 퀄리티가 백화점 고가 브랜드 못지않네요.",
        "likes": 38
      },
      {
        "id": "rev-prod-10-4",
        "author": "남*지",
        "rating": 5,
        "date": "2026-09-18",
        "content": "배송도 하루 만에 칼배송으로 왔고 포장도 정성스럽습니다.",
        "likes": 37
      },
      {
        "id": "rev-prod-10-5",
        "author": "심*정",
        "rating": 5,
        "date": "2026-09-15",
        "content": "색감이 너무 튀지 않고 은은하게 고급스러워서 데일리룩으로 딱입니다.",
        "likes": 35
      },
      {
        "id": "rev-prod-10-6",
        "author": "김*영",
        "rating": 5,
        "date": "2026-09-12",
        "content": "착용감이 편해서 하루 종일 입고 있어도 피로감이 전혀 없어요.",
        "likes": 34
      },
      {
        "id": "rev-prod-10-7",
        "author": "이*원",
        "rating": 4,
        "date": "2026-09-09",
        "content": "친구들이 다 어디서 샀냐고 물어봐서 이지샵 추천해 줬습니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-10-8",
        "author": "박*린",
        "rating": 5,
        "date": "2026-09-06",
        "content": "세탁 후에도 변형이나 줄어듦 없이 형태가 잘 유지되네요.",
        "likes": 30
      },
      {
        "id": "rev-prod-10-9",
        "author": "최*준",
        "rating": 5,
        "date": "2026-09-03",
        "content": "사이즈 가이드대로 주문했더니 맞춤옷처럼 딱 맞습니다.",
        "likes": 29
      },
      {
        "id": "rev-prod-10-10",
        "author": "정*경",
        "rating": 5,
        "date": "2026-08-31",
        "content": "가성비, 디자인, 품질 모두 만족스러운 최고의 쇼핑이었습니다.",
        "likes": 27
      },
      {
        "id": "rev-prod-10-11",
        "author": "강*수",
        "rating": 5,
        "date": "2026-08-28",
        "content": "원단 촉감이 부드러워서 피부 자극 없이 편안합니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-10-12",
        "author": "조*우",
        "rating": 5,
        "date": "2026-08-25",
        "content": "계절 상관없이 활용도가 높아서 손이 자주 가는 아이템이에요.",
        "likes": 24
      },
      {
        "id": "rev-prod-10-13",
        "author": "윤*희",
        "rating": 4,
        "date": "2026-08-22",
        "content": "디테일 하나하나 신경 쓴 게 느껴지는 완성도 높은 옷입니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-10-14",
        "author": "장*진",
        "rating": 5,
        "date": "2026-08-19",
        "content": "단정한 출근룩부터 주말 캐주얼룩까지 전천후로 소화 가능해요.",
        "likes": 21
      },
      {
        "id": "rev-prod-10-15",
        "author": "임*아",
        "rating": 5,
        "date": "2026-08-16",
        "content": "다른 색상도 추가로 구매해서 쟁여둘 생각입니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-10-16",
        "author": "한*태",
        "rating": 5,
        "date": "2026-08-13",
        "content": "가성비가 정말 훌륭합니다. 이 가격에 이 퀄리티라니 놀랍네요.",
        "likes": 18
      },
      {
        "id": "rev-prod-10-17",
        "author": "오*현",
        "rating": 5,
        "date": "2026-08-10",
        "content": "포장 박스를 열자마자 만족감이 100% 차올랐습니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-10-18",
        "author": "서*호",
        "rating": 5,
        "date": "2026-08-07",
        "content": "기장감과 품이 여유 있어서 활동하기가 아주 수월합니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-10-19",
        "author": "신*훈",
        "rating": 4,
        "date": "2026-08-04",
        "content": "선물용으로 샀는데 받는 분이 너무 좋아하셨습니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-10-20",
        "author": "권*서",
        "rating": 5,
        "date": "2026-08-01",
        "content": "올해 구매한 패션 아이템 중 가장 마음에 듭니다. 적극 추천해요!",
        "likes": 11
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-10-1",
        "author": "황*린",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-11",
    "name": "이탈리안 베지터블 천연 소가죽 미니멀 벨트",
    "category": "패션 / 의류",
    "categoryId": "cat-fashion",
    "price": 45000,
    "originalPrice": 62000,
    "discountRate": 27,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 50,
    "isBest": false,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "이태리 수입 풀그레인 통가죽, 황동 버클과 에이징될수록 깊어지는 가죽 본연의 멋",
    "description": "<h3>이태리 수입 풀그레인 통가죽, 황동 버클과 에이징될수록 깊어지는 가죽 본연의 멋</h3>\n<p>이탈리안 베지터블 천연 소가죽 미니멀 벨트은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80\" alt=\"이탈리안 베지터블 천연 소가죽 미니멀 벨트 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">이탈리안 베지터블 천연 소가죽 미니멀 벨트의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80\" alt=\"이탈리안 베지터블 천연 소가죽 미니멀 벨트 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80\" alt=\"이탈리안 베지터블 천연 소가죽 미니멀 벨트 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "앤틱 브라운 / Free(최대 36인치)",
        "stock": 25
      },
      {
        "name": "클래식 블랙 / Free(최대 36인치)",
        "stock": 30
      }
    ],
    "specs": {
      "가죽": "이탈리아 풀그레인 소가죽",
      "버클": "무광 황동 합금"
    },
    "reviews": [
      {
        "id": "rev-prod-11-1",
        "author": "황*은",
        "rating": 4,
        "date": "2026-09-26",
        "content": "이탈리안 베지터블 천연 소가죽 미니멀 벨트 실물이 훨씬 예쁘고 원단이 정말 탄탄합니다.",
        "likes": 34
      },
      {
        "id": "rev-prod-11-2",
        "author": "안*윤",
        "rating": 5,
        "date": "2026-09-23",
        "content": "핏이 자연스럽게 떨어져서 체형 커버도 잘 되고 날씬해 보여요.",
        "likes": 32
      },
      {
        "id": "rev-prod-11-3",
        "author": "송*민",
        "rating": 5,
        "date": "2026-09-20",
        "content": "마감 바느질이나 단추 퀄리티가 백화점 고가 브랜드 못지않네요.",
        "likes": 30
      },
      {
        "id": "rev-prod-11-4",
        "author": "전*지",
        "rating": 5,
        "date": "2026-09-17",
        "content": "배송도 하루 만에 칼배송으로 왔고 포장도 정성스럽습니다.",
        "likes": 29
      },
      {
        "id": "rev-prod-11-5",
        "author": "홍*정",
        "rating": 5,
        "date": "2026-09-14",
        "content": "색감이 너무 튀지 않고 은은하게 고급스러워서 데일리룩으로 딱입니다.",
        "likes": 27
      },
      {
        "id": "rev-prod-11-6",
        "author": "유*영",
        "rating": 5,
        "date": "2026-09-11",
        "content": "착용감이 편해서 하루 종일 입고 있어도 피로감이 전혀 없어요.",
        "likes": 26
      },
      {
        "id": "rev-prod-11-7",
        "author": "고*원",
        "rating": 4,
        "date": "2026-09-08",
        "content": "친구들이 다 어디서 샀냐고 물어봐서 이지샵 추천해 줬습니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-11-8",
        "author": "문*린",
        "rating": 5,
        "date": "2026-09-05",
        "content": "세탁 후에도 변형이나 줄어듦 없이 형태가 잘 유지되네요.",
        "likes": 22
      },
      {
        "id": "rev-prod-11-9",
        "author": "양*준",
        "rating": 5,
        "date": "2026-09-02",
        "content": "사이즈 가이드대로 주문했더니 맞춤옷처럼 딱 맞습니다.",
        "likes": 21
      },
      {
        "id": "rev-prod-11-10",
        "author": "손*경",
        "rating": 5,
        "date": "2026-08-30",
        "content": "가성비, 디자인, 품질 모두 만족스러운 최고의 쇼핑이었습니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-11-11",
        "author": "배*수",
        "rating": 5,
        "date": "2026-08-27",
        "content": "원단 촉감이 부드러워서 피부 자극 없이 편안합니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-11-12",
        "author": "백*우",
        "rating": 5,
        "date": "2026-08-24",
        "content": "계절 상관없이 활용도가 높아서 손이 자주 가는 아이템이에요.",
        "likes": 16
      },
      {
        "id": "rev-prod-11-13",
        "author": "허*희",
        "rating": 4,
        "date": "2026-08-21",
        "content": "디테일 하나하나 신경 쓴 게 느껴지는 완성도 높은 옷입니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-11-14",
        "author": "노*진",
        "rating": 5,
        "date": "2026-08-18",
        "content": "단정한 출근룩부터 주말 캐주얼룩까지 전천후로 소화 가능해요.",
        "likes": 13
      },
      {
        "id": "rev-prod-11-15",
        "author": "남*아",
        "rating": 5,
        "date": "2026-08-15",
        "content": "다른 색상도 추가로 구매해서 쟁여둘 생각입니다.",
        "likes": 11
      },
      {
        "id": "rev-prod-11-16",
        "author": "심*태",
        "rating": 5,
        "date": "2026-08-12",
        "content": "가성비가 정말 훌륭합니다. 이 가격에 이 퀄리티라니 놀랍네요.",
        "likes": 10
      },
      {
        "id": "rev-prod-11-17",
        "author": "김*현",
        "rating": 5,
        "date": "2026-08-09",
        "content": "포장 박스를 열자마자 만족감이 100% 차올랐습니다.",
        "likes": 8
      },
      {
        "id": "rev-prod-11-18",
        "author": "이*호",
        "rating": 5,
        "date": "2026-08-06",
        "content": "기장감과 품이 여유 있어서 활동하기가 아주 수월합니다.",
        "likes": 6
      },
      {
        "id": "rev-prod-11-19",
        "author": "박*훈",
        "rating": 4,
        "date": "2026-08-03",
        "content": "선물용으로 샀는데 받는 분이 너무 좋아하셨습니다.",
        "likes": 5
      },
      {
        "id": "rev-prod-11-20",
        "author": "최*서",
        "rating": 5,
        "date": "2026-07-31",
        "content": "올해 구매한 패션 아이템 중 가장 마음에 듭니다. 적극 추천해요!",
        "likes": 3
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-11-1",
        "author": "안*준",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-12",
    "name": "100% 퓨어 캐시미어 프리미엄 롱 머플러",
    "category": "패션 / 의류",
    "categoryId": "cat-fashion",
    "price": 89000,
    "originalPrice": 129000,
    "discountRate": 31,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 57,
    "isBest": true,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": true,
    "thumbnail": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "내몽골산 100% 순수 캐시미어, 폭 35cm x 길이 200cm의 풍성한 보온성",
    "description": "<h3>내몽골산 100% 순수 캐시미어, 폭 35cm x 길이 200cm의 풍성한 보온성</h3>\n<p>100% 퓨어 캐시미어 프리미엄 롱 머플러은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80\" alt=\"100% 퓨어 캐시미어 프리미엄 롱 머플러 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">100% 퓨어 캐시미어 프리미엄 롱 머플러의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=800&q=80\" alt=\"100% 퓨어 캐시미어 프리미엄 롱 머플러 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80\" alt=\"100% 퓨어 캐시미어 프리미엄 롱 머플러 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "카멜 베이지",
        "stock": 20
      },
      {
        "name": "라이트 그레이",
        "stock": 25
      },
      {
        "name": "더스티 로즈",
        "stock": 15
      }
    ],
    "specs": {
      "소재": "캐시미어 100%",
      "크기": "35 x 200 cm (수술 포함)"
    },
    "reviews": [
      {
        "id": "rev-prod-12-1",
        "author": "정*은",
        "rating": 4,
        "date": "2026-09-25",
        "content": "100% 퓨어 캐시미어 프리미엄 롱 머플러 실물이 훨씬 예쁘고 원단이 정말 탄탄합니다.",
        "likes": 36
      },
      {
        "id": "rev-prod-12-2",
        "author": "강*윤",
        "rating": 5,
        "date": "2026-09-22",
        "content": "핏이 자연스럽게 떨어져서 체형 커버도 잘 되고 날씬해 보여요.",
        "likes": 34
      },
      {
        "id": "rev-prod-12-3",
        "author": "조*민",
        "rating": 5,
        "date": "2026-09-19",
        "content": "마감 바느질이나 단추 퀄리티가 백화점 고가 브랜드 못지않네요.",
        "likes": 32
      },
      {
        "id": "rev-prod-12-4",
        "author": "윤*지",
        "rating": 5,
        "date": "2026-09-16",
        "content": "배송도 하루 만에 칼배송으로 왔고 포장도 정성스럽습니다.",
        "likes": 31
      },
      {
        "id": "rev-prod-12-5",
        "author": "장*정",
        "rating": 5,
        "date": "2026-09-13",
        "content": "색감이 너무 튀지 않고 은은하게 고급스러워서 데일리룩으로 딱입니다.",
        "likes": 29
      },
      {
        "id": "rev-prod-12-6",
        "author": "임*영",
        "rating": 5,
        "date": "2026-09-10",
        "content": "착용감이 편해서 하루 종일 입고 있어도 피로감이 전혀 없어요.",
        "likes": 28
      },
      {
        "id": "rev-prod-12-7",
        "author": "한*원",
        "rating": 4,
        "date": "2026-09-07",
        "content": "친구들이 다 어디서 샀냐고 물어봐서 이지샵 추천해 줬습니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-12-8",
        "author": "오*린",
        "rating": 5,
        "date": "2026-09-04",
        "content": "세탁 후에도 변형이나 줄어듦 없이 형태가 잘 유지되네요.",
        "likes": 24
      },
      {
        "id": "rev-prod-12-9",
        "author": "서*준",
        "rating": 5,
        "date": "2026-09-01",
        "content": "사이즈 가이드대로 주문했더니 맞춤옷처럼 딱 맞습니다.",
        "likes": 23
      },
      {
        "id": "rev-prod-12-10",
        "author": "신*경",
        "rating": 5,
        "date": "2026-08-29",
        "content": "가성비, 디자인, 품질 모두 만족스러운 최고의 쇼핑이었습니다.",
        "likes": 21
      },
      {
        "id": "rev-prod-12-11",
        "author": "권*수",
        "rating": 5,
        "date": "2026-08-26",
        "content": "원단 촉감이 부드러워서 피부 자극 없이 편안합니다.",
        "likes": 20
      },
      {
        "id": "rev-prod-12-12",
        "author": "황*우",
        "rating": 5,
        "date": "2026-08-23",
        "content": "계절 상관없이 활용도가 높아서 손이 자주 가는 아이템이에요.",
        "likes": 18
      },
      {
        "id": "rev-prod-12-13",
        "author": "안*희",
        "rating": 4,
        "date": "2026-08-20",
        "content": "디테일 하나하나 신경 쓴 게 느껴지는 완성도 높은 옷입니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-12-14",
        "author": "송*진",
        "rating": 5,
        "date": "2026-08-17",
        "content": "단정한 출근룩부터 주말 캐주얼룩까지 전천후로 소화 가능해요.",
        "likes": 15
      },
      {
        "id": "rev-prod-12-15",
        "author": "전*아",
        "rating": 5,
        "date": "2026-08-14",
        "content": "다른 색상도 추가로 구매해서 쟁여둘 생각입니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-12-16",
        "author": "홍*태",
        "rating": 5,
        "date": "2026-08-11",
        "content": "가성비가 정말 훌륭합니다. 이 가격에 이 퀄리티라니 놀랍네요.",
        "likes": 12
      },
      {
        "id": "rev-prod-12-17",
        "author": "유*현",
        "rating": 5,
        "date": "2026-08-08",
        "content": "포장 박스를 열자마자 만족감이 100% 차올랐습니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-12-18",
        "author": "고*호",
        "rating": 5,
        "date": "2026-08-05",
        "content": "기장감과 품이 여유 있어서 활동하기가 아주 수월합니다.",
        "likes": 8
      },
      {
        "id": "rev-prod-12-19",
        "author": "문*훈",
        "rating": 4,
        "date": "2026-08-02",
        "content": "선물용으로 샀는데 받는 분이 너무 좋아하셨습니다.",
        "likes": 7
      },
      {
        "id": "rev-prod-12-20",
        "author": "양*서",
        "rating": 5,
        "date": "2026-07-30",
        "content": "올해 구매한 패션 아이템 중 가장 마음에 듭니다. 적극 추천해요!",
        "likes": 5
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-12-1",
        "author": "송*경",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-13",
    "name": "에어사운드 노이즈캔슬링 무선 헤드폰 프로",
    "category": "디지털 / 가전",
    "categoryId": "cat-digital",
    "price": 198000,
    "originalPrice": 269000,
    "discountRate": 26,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 64,
    "isBest": true,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": true,
    "thumbnail": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "하이브리드 ANC 45dB 노이즈 차단, 최대 60시간 연속 재생, 고해상도 Hi-Res 오디오",
    "description": "<h3>하이브리드 ANC 45dB 노이즈 차단, 최대 60시간 연속 재생, 고해상도 Hi-Res 오디오</h3>\n<p>에어사운드 노이즈캔슬링 무선 헤드폰 프로은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80\" alt=\"에어사운드 노이즈캔슬링 무선 헤드폰 프로 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">에어사운드 노이즈캔슬링 무선 헤드폰 프로의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80\" alt=\"에어사운드 노이즈캔슬링 무선 헤드폰 프로 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80\" alt=\"에어사운드 노이즈캔슬링 무선 헤드폰 프로 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "스페이스 그레이",
        "stock": 20
      },
      {
        "name": "매트 실버",
        "stock": 15
      }
    ],
    "specs": {
      "블루투스": "v5.4",
      "배터리": "최대 60시간",
      "무게": "245g"
    },
    "reviews": [
      {
        "id": "rev-prod-13-1",
        "author": "손*은",
        "rating": 4,
        "date": "2026-09-24",
        "content": "에어사운드 노이즈캔슬링 무선 헤드폰 프로 성능이 기대 이상으로 훌륭합니다. 마감도 깔끔해요.",
        "likes": 38
      },
      {
        "id": "rev-prod-13-2",
        "author": "배*윤",
        "rating": 5,
        "date": "2026-09-21",
        "content": "연결이 빠르고 끊김 없이 안정적으로 동작해서 너무 편합니다.",
        "likes": 36
      },
      {
        "id": "rev-prod-13-3",
        "author": "백*민",
        "rating": 5,
        "date": "2026-09-18",
        "content": "디자인이 모던하고 미니멀해서 데스크테리어에 찰떡이에요.",
        "likes": 34
      },
      {
        "id": "rev-prod-13-4",
        "author": "허*지",
        "rating": 5,
        "date": "2026-09-15",
        "content": "배터리가 오래가서 충전 스트레스 없이 쓰고 있습니다.",
        "likes": 33
      },
      {
        "id": "rev-prod-13-5",
        "author": "노*정",
        "rating": 5,
        "date": "2026-09-12",
        "content": "버튼 조작감과 인터페이스가 직관적이라 사용하기 쉽네요.",
        "likes": 31
      },
      {
        "id": "rev-prod-13-6",
        "author": "남*영",
        "rating": 5,
        "date": "2026-09-09",
        "content": "무게가 가벼워서 휴대하고 다니기에 부담이 전혀 없습니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-13-7",
        "author": "심*원",
        "rating": 4,
        "date": "2026-09-06",
        "content": "가격 대비 스펙이 아주 훌륭한 가성비 종결템입니다.",
        "likes": 28
      },
      {
        "id": "rev-prod-13-8",
        "author": "김*린",
        "rating": 5,
        "date": "2026-09-03",
        "content": "패키징도 꼼꼼하고 충전 케이블 등 부속품 퀄리티도 좋아요.",
        "likes": 26
      },
      {
        "id": "rev-prod-13-9",
        "author": "이*준",
        "rating": 5,
        "date": "2026-08-31",
        "content": "업무 효율이 확실히 올라갔습니다. 재택근무 필수품이에요.",
        "likes": 25
      },
      {
        "id": "rev-prod-13-10",
        "author": "박*경",
        "rating": 5,
        "date": "2026-08-28",
        "content": "소음이나 발열이 적어서 장시간 사용해도 안심이 됩니다.",
        "likes": 23
      },
      {
        "id": "rev-prod-13-11",
        "author": "최*수",
        "rating": 5,
        "date": "2026-08-25",
        "content": "친구 추천으로 샀는데 왜 인기 많은지 알겠네요.",
        "likes": 22
      },
      {
        "id": "rev-prod-13-12",
        "author": "정*우",
        "rating": 5,
        "date": "2026-08-22",
        "content": "블루투스 페어링 속도가 1초 만에 바로 잡혀서 감탄했습니다.",
        "likes": 20
      },
      {
        "id": "rev-prod-13-13",
        "author": "강*희",
        "rating": 4,
        "date": "2026-08-19",
        "content": "내구성이 튼튼해서 오래오래 고장 없이 쓸 수 있을 것 같아요.",
        "likes": 18
      },
      {
        "id": "rev-prod-13-14",
        "author": "조*진",
        "rating": 5,
        "date": "2026-08-16",
        "content": "기능이 다양하면서도 불필요한 군더더기가 없어 만족스럽습니다.",
        "likes": 17
      },
      {
        "id": "rev-prod-13-15",
        "author": "윤*아",
        "rating": 5,
        "date": "2026-08-13",
        "content": "선물용으로 구매했는데 받는 사람이 너무 유용하다고 칭찬하네요.",
        "likes": 15
      },
      {
        "id": "rev-prod-13-16",
        "author": "장*태",
        "rating": 5,
        "date": "2026-08-10",
        "content": "화면이나 음질, 반응속도 등 기본기가 탄탄하게 잡혀있습니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-13-17",
        "author": "임*현",
        "rating": 5,
        "date": "2026-08-07",
        "content": "한 손에 쏙 들어오는 그립감과 컴팩트함이 아주 매력적입니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-13-18",
        "author": "한*호",
        "rating": 5,
        "date": "2026-08-04",
        "content": "기술력이 뛰어난 게 느껴지는 완성도 높은 IT 디바이스입니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-13-19",
        "author": "오*훈",
        "rating": 4,
        "date": "2026-08-01",
        "content": "이지샵 디지털 제품은 항상 믿고 구매하게 됩니다.",
        "likes": 9
      },
      {
        "id": "rev-prod-13-20",
        "author": "서*서",
        "rating": 5,
        "date": "2026-07-29",
        "content": "별 5개가 아깝지 않은 최고의 디지털 가전입니다. 강추!",
        "likes": 7
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-13-1",
        "author": "전*수",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-14",
    "name": "울트라 슬림 기계식 무선 블루투스 키보드",
    "category": "디지털 / 가전",
    "categoryId": "cat-digital",
    "price": 129000,
    "originalPrice": 169000,
    "discountRate": 23,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 71,
    "isBest": true,
    "isNew": true,
    "isSale": false,
    "isFreeShipping": true,
    "thumbnail": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "로우 프로파일 게이트론 적축/갈축, Mac/Windows 동시 지원 멀티페어링",
    "description": "<h3>로우 프로파일 게이트론 적축/갈축, Mac/Windows 동시 지원 멀티페어링</h3>\n<p>울트라 슬림 기계식 무선 블루투스 키보드은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80\" alt=\"울트라 슬림 기계식 무선 블루투스 키보드 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">울트라 슬림 기계식 무선 블루투스 키보드의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80\" alt=\"울트라 슬림 기계식 무선 블루투스 키보드 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80\" alt=\"울트라 슬림 기계식 무선 블루투스 키보드 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "저소음 갈축 (부드러운 구분감)",
        "stock": 20
      },
      {
        "name": "리니어 적축 (조용하고 빠른 입력)",
        "stock": 18
      }
    ],
    "specs": {
      "배열": "84키 텐키리스",
      "배터리": "4000mAh",
      "연결": "BT 5.1 / 유선 Type-C"
    },
    "reviews": [
      {
        "id": "rev-prod-14-1",
        "author": "신*은",
        "rating": 4,
        "date": "2026-09-23",
        "content": "울트라 슬림 기계식 무선 블루투스 키보드 성능이 기대 이상으로 훌륭합니다. 마감도 깔끔해요.",
        "likes": 40
      },
      {
        "id": "rev-prod-14-2",
        "author": "권*윤",
        "rating": 5,
        "date": "2026-09-20",
        "content": "연결이 빠르고 끊김 없이 안정적으로 동작해서 너무 편합니다.",
        "likes": 38
      },
      {
        "id": "rev-prod-14-3",
        "author": "황*민",
        "rating": 5,
        "date": "2026-09-17",
        "content": "디자인이 모던하고 미니멀해서 데스크테리어에 찰떡이에요.",
        "likes": 36
      },
      {
        "id": "rev-prod-14-4",
        "author": "안*지",
        "rating": 5,
        "date": "2026-09-14",
        "content": "배터리가 오래가서 충전 스트레스 없이 쓰고 있습니다.",
        "likes": 35
      },
      {
        "id": "rev-prod-14-5",
        "author": "송*정",
        "rating": 5,
        "date": "2026-09-11",
        "content": "버튼 조작감과 인터페이스가 직관적이라 사용하기 쉽네요.",
        "likes": 33
      },
      {
        "id": "rev-prod-14-6",
        "author": "전*영",
        "rating": 5,
        "date": "2026-09-08",
        "content": "무게가 가벼워서 휴대하고 다니기에 부담이 전혀 없습니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-14-7",
        "author": "홍*원",
        "rating": 4,
        "date": "2026-09-05",
        "content": "가격 대비 스펙이 아주 훌륭한 가성비 종결템입니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-14-8",
        "author": "유*린",
        "rating": 5,
        "date": "2026-09-02",
        "content": "패키징도 꼼꼼하고 충전 케이블 등 부속품 퀄리티도 좋아요.",
        "likes": 28
      },
      {
        "id": "rev-prod-14-9",
        "author": "고*준",
        "rating": 5,
        "date": "2026-08-30",
        "content": "업무 효율이 확실히 올라갔습니다. 재택근무 필수품이에요.",
        "likes": 27
      },
      {
        "id": "rev-prod-14-10",
        "author": "문*경",
        "rating": 5,
        "date": "2026-08-27",
        "content": "소음이나 발열이 적어서 장시간 사용해도 안심이 됩니다.",
        "likes": 25
      },
      {
        "id": "rev-prod-14-11",
        "author": "양*수",
        "rating": 5,
        "date": "2026-08-24",
        "content": "친구 추천으로 샀는데 왜 인기 많은지 알겠네요.",
        "likes": 24
      },
      {
        "id": "rev-prod-14-12",
        "author": "손*우",
        "rating": 5,
        "date": "2026-08-21",
        "content": "블루투스 페어링 속도가 1초 만에 바로 잡혀서 감탄했습니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-14-13",
        "author": "배*희",
        "rating": 4,
        "date": "2026-08-18",
        "content": "내구성이 튼튼해서 오래오래 고장 없이 쓸 수 있을 것 같아요.",
        "likes": 20
      },
      {
        "id": "rev-prod-14-14",
        "author": "백*진",
        "rating": 5,
        "date": "2026-08-15",
        "content": "기능이 다양하면서도 불필요한 군더더기가 없어 만족스럽습니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-14-15",
        "author": "허*아",
        "rating": 5,
        "date": "2026-08-12",
        "content": "선물용으로 구매했는데 받는 사람이 너무 유용하다고 칭찬하네요.",
        "likes": 17
      },
      {
        "id": "rev-prod-14-16",
        "author": "노*태",
        "rating": 5,
        "date": "2026-08-09",
        "content": "화면이나 음질, 반응속도 등 기본기가 탄탄하게 잡혀있습니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-14-17",
        "author": "남*현",
        "rating": 5,
        "date": "2026-08-06",
        "content": "한 손에 쏙 들어오는 그립감과 컴팩트함이 아주 매력적입니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-14-18",
        "author": "심*호",
        "rating": 5,
        "date": "2026-08-03",
        "content": "기술력이 뛰어난 게 느껴지는 완성도 높은 IT 디바이스입니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-14-19",
        "author": "김*훈",
        "rating": 4,
        "date": "2026-07-31",
        "content": "이지샵 디지털 제품은 항상 믿고 구매하게 됩니다.",
        "likes": 11
      },
      {
        "id": "rev-prod-14-20",
        "author": "이*서",
        "rating": 5,
        "date": "2026-07-28",
        "content": "별 5개가 아깝지 않은 최고의 디지털 가전입니다. 강추!",
        "likes": 9
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-14-1",
        "author": "홍*우",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-15",
    "name": "에르고노믹 알루미늄 노트북 거치대 스탠드",
    "category": "디지털 / 가전",
    "categoryId": "cat-digital",
    "price": 45000,
    "originalPrice": 62000,
    "discountRate": 27,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 78,
    "isBest": true,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "풀 CNC 가공 항공 알루미늄, 360도 회전 및 무단 높이/각도 조절, 흔들림 없는 지지력",
    "description": "<h3>풀 CNC 가공 항공 알루미늄, 360도 회전 및 무단 높이/각도 조절, 흔들림 없는 지지력</h3>\n<p>에르고노믹 알루미늄 노트북 거치대 스탠드은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80\" alt=\"에르고노믹 알루미늄 노트북 거치대 스탠드 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">에르고노믹 알루미늄 노트북 거치대 스탠드의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80\" alt=\"에르고노믹 알루미늄 노트북 거치대 스탠드 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80\" alt=\"에르고노믹 알루미늄 노트북 거치대 스탠드 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "실버",
        "stock": 35
      },
      {
        "name": "스페이스 그레이",
        "stock": 25
      }
    ],
    "specs": {
      "호환": "10~17.3인치",
      "재질": "항공 알루미늄 합금",
      "최대하중": "10kg"
    },
    "reviews": [
      {
        "id": "rev-prod-15-1",
        "author": "박*은",
        "rating": 4,
        "date": "2026-09-29",
        "content": "에르고노믹 알루미늄 노트북 거치대 스탠드 성능이 기대 이상으로 훌륭합니다. 마감도 깔끔해요.",
        "likes": 42
      },
      {
        "id": "rev-prod-15-2",
        "author": "최*윤",
        "rating": 5,
        "date": "2026-09-26",
        "content": "연결이 빠르고 끊김 없이 안정적으로 동작해서 너무 편합니다.",
        "likes": 40
      },
      {
        "id": "rev-prod-15-3",
        "author": "정*민",
        "rating": 5,
        "date": "2026-09-23",
        "content": "디자인이 모던하고 미니멀해서 데스크테리어에 찰떡이에요.",
        "likes": 38
      },
      {
        "id": "rev-prod-15-4",
        "author": "강*지",
        "rating": 5,
        "date": "2026-09-20",
        "content": "배터리가 오래가서 충전 스트레스 없이 쓰고 있습니다.",
        "likes": 37
      },
      {
        "id": "rev-prod-15-5",
        "author": "조*정",
        "rating": 5,
        "date": "2026-09-17",
        "content": "버튼 조작감과 인터페이스가 직관적이라 사용하기 쉽네요.",
        "likes": 35
      },
      {
        "id": "rev-prod-15-6",
        "author": "윤*영",
        "rating": 5,
        "date": "2026-09-14",
        "content": "무게가 가벼워서 휴대하고 다니기에 부담이 전혀 없습니다.",
        "likes": 34
      },
      {
        "id": "rev-prod-15-7",
        "author": "장*원",
        "rating": 4,
        "date": "2026-09-11",
        "content": "가격 대비 스펙이 아주 훌륭한 가성비 종결템입니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-15-8",
        "author": "임*린",
        "rating": 5,
        "date": "2026-09-08",
        "content": "패키징도 꼼꼼하고 충전 케이블 등 부속품 퀄리티도 좋아요.",
        "likes": 30
      },
      {
        "id": "rev-prod-15-9",
        "author": "한*준",
        "rating": 5,
        "date": "2026-09-05",
        "content": "업무 효율이 확실히 올라갔습니다. 재택근무 필수품이에요.",
        "likes": 29
      },
      {
        "id": "rev-prod-15-10",
        "author": "오*경",
        "rating": 5,
        "date": "2026-09-02",
        "content": "소음이나 발열이 적어서 장시간 사용해도 안심이 됩니다.",
        "likes": 27
      },
      {
        "id": "rev-prod-15-11",
        "author": "서*수",
        "rating": 5,
        "date": "2026-08-30",
        "content": "친구 추천으로 샀는데 왜 인기 많은지 알겠네요.",
        "likes": 26
      },
      {
        "id": "rev-prod-15-12",
        "author": "신*우",
        "rating": 5,
        "date": "2026-08-27",
        "content": "블루투스 페어링 속도가 1초 만에 바로 잡혀서 감탄했습니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-15-13",
        "author": "권*희",
        "rating": 4,
        "date": "2026-08-24",
        "content": "내구성이 튼튼해서 오래오래 고장 없이 쓸 수 있을 것 같아요.",
        "likes": 22
      },
      {
        "id": "rev-prod-15-14",
        "author": "황*진",
        "rating": 5,
        "date": "2026-08-21",
        "content": "기능이 다양하면서도 불필요한 군더더기가 없어 만족스럽습니다.",
        "likes": 21
      },
      {
        "id": "rev-prod-15-15",
        "author": "안*아",
        "rating": 5,
        "date": "2026-08-18",
        "content": "선물용으로 구매했는데 받는 사람이 너무 유용하다고 칭찬하네요.",
        "likes": 19
      },
      {
        "id": "rev-prod-15-16",
        "author": "송*태",
        "rating": 5,
        "date": "2026-08-15",
        "content": "화면이나 음질, 반응속도 등 기본기가 탄탄하게 잡혀있습니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-15-17",
        "author": "전*현",
        "rating": 5,
        "date": "2026-08-12",
        "content": "한 손에 쏙 들어오는 그립감과 컴팩트함이 아주 매력적입니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-15-18",
        "author": "홍*호",
        "rating": 5,
        "date": "2026-08-09",
        "content": "기술력이 뛰어난 게 느껴지는 완성도 높은 IT 디바이스입니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-15-19",
        "author": "유*훈",
        "rating": 4,
        "date": "2026-08-06",
        "content": "이지샵 디지털 제품은 항상 믿고 구매하게 됩니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-15-20",
        "author": "고*서",
        "rating": 5,
        "date": "2026-08-03",
        "content": "별 5개가 아깝지 않은 최고의 디지털 가전입니다. 강추!",
        "likes": 11
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-15-1",
        "author": "유*희",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-16",
    "name": "초소형 GaN 65W 3포트 초고속 충전기 (C타입 2구 + A타입 1구)",
    "category": "디지털 / 가전",
    "categoryId": "cat-digital",
    "price": 38000,
    "originalPrice": 52000,
    "discountRate": 26,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 35,
    "isBest": true,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "차세대 질화갈륨(GaN) 반도체 탑재, 노트북과 스마트폰을 동시에 초고속 충전",
    "description": "<h3>차세대 질화갈륨(GaN) 반도체 탑재, 노트북과 스마트폰을 동시에 초고속 충전</h3>\n<p>초소형 GaN 65W 3포트 초고속 충전기 (C타입 2구 + A타입 1구)은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80\" alt=\"초소형 GaN 65W 3포트 초고속 충전기 (C타입 2구 + A타입 1구) 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">초소형 GaN 65W 3포트 초고속 충전기 (C타입 2구 + A타입 1구)의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80\" alt=\"초소형 GaN 65W 3포트 초고속 충전기 (C타입 2구 + A타입 1구) 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80\" alt=\"초소형 GaN 65W 3포트 초고속 충전기 (C타입 2구 + A타입 1구) 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "매트 화이트",
        "stock": 40
      },
      {
        "name": "매트 블랙",
        "stock": 30
      }
    ],
    "specs": {
      "출력": "최대 65W (PD 3.0 / PPS)",
      "포트": "USB-C x 2, USB-A x 1",
      "무게": "115g"
    },
    "reviews": [
      {
        "id": "rev-prod-16-1",
        "author": "문*은",
        "rating": 4,
        "date": "2026-09-28",
        "content": "초소형 GaN 65W 3포트 초고속 충전기 (C타입 2구 + A타입 1구) 성능이 기대 이상으로 훌륭합니다. 마감도 깔끔해요.",
        "likes": 34
      },
      {
        "id": "rev-prod-16-2",
        "author": "양*윤",
        "rating": 5,
        "date": "2026-09-25",
        "content": "연결이 빠르고 끊김 없이 안정적으로 동작해서 너무 편합니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-16-3",
        "author": "손*민",
        "rating": 5,
        "date": "2026-09-22",
        "content": "디자인이 모던하고 미니멀해서 데스크테리어에 찰떡이에요.",
        "likes": 30
      },
      {
        "id": "rev-prod-16-4",
        "author": "배*지",
        "rating": 5,
        "date": "2026-09-19",
        "content": "배터리가 오래가서 충전 스트레스 없이 쓰고 있습니다.",
        "likes": 29
      },
      {
        "id": "rev-prod-16-5",
        "author": "백*정",
        "rating": 5,
        "date": "2026-09-16",
        "content": "버튼 조작감과 인터페이스가 직관적이라 사용하기 쉽네요.",
        "likes": 27
      },
      {
        "id": "rev-prod-16-6",
        "author": "허*영",
        "rating": 5,
        "date": "2026-09-13",
        "content": "무게가 가벼워서 휴대하고 다니기에 부담이 전혀 없습니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-16-7",
        "author": "노*원",
        "rating": 4,
        "date": "2026-09-10",
        "content": "가격 대비 스펙이 아주 훌륭한 가성비 종결템입니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-16-8",
        "author": "남*린",
        "rating": 5,
        "date": "2026-09-07",
        "content": "패키징도 꼼꼼하고 충전 케이블 등 부속품 퀄리티도 좋아요.",
        "likes": 22
      },
      {
        "id": "rev-prod-16-9",
        "author": "심*준",
        "rating": 5,
        "date": "2026-09-04",
        "content": "업무 효율이 확실히 올라갔습니다. 재택근무 필수품이에요.",
        "likes": 21
      },
      {
        "id": "rev-prod-16-10",
        "author": "김*경",
        "rating": 5,
        "date": "2026-09-01",
        "content": "소음이나 발열이 적어서 장시간 사용해도 안심이 됩니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-16-11",
        "author": "이*수",
        "rating": 5,
        "date": "2026-08-29",
        "content": "친구 추천으로 샀는데 왜 인기 많은지 알겠네요.",
        "likes": 18
      },
      {
        "id": "rev-prod-16-12",
        "author": "박*우",
        "rating": 5,
        "date": "2026-08-26",
        "content": "블루투스 페어링 속도가 1초 만에 바로 잡혀서 감탄했습니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-16-13",
        "author": "최*희",
        "rating": 4,
        "date": "2026-08-23",
        "content": "내구성이 튼튼해서 오래오래 고장 없이 쓸 수 있을 것 같아요.",
        "likes": 14
      },
      {
        "id": "rev-prod-16-14",
        "author": "정*진",
        "rating": 5,
        "date": "2026-08-20",
        "content": "기능이 다양하면서도 불필요한 군더더기가 없어 만족스럽습니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-16-15",
        "author": "강*아",
        "rating": 5,
        "date": "2026-08-17",
        "content": "선물용으로 구매했는데 받는 사람이 너무 유용하다고 칭찬하네요.",
        "likes": 11
      },
      {
        "id": "rev-prod-16-16",
        "author": "조*태",
        "rating": 5,
        "date": "2026-08-14",
        "content": "화면이나 음질, 반응속도 등 기본기가 탄탄하게 잡혀있습니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-16-17",
        "author": "윤*현",
        "rating": 5,
        "date": "2026-08-11",
        "content": "한 손에 쏙 들어오는 그립감과 컴팩트함이 아주 매력적입니다.",
        "likes": 8
      },
      {
        "id": "rev-prod-16-18",
        "author": "장*호",
        "rating": 5,
        "date": "2026-08-08",
        "content": "기술력이 뛰어난 게 느껴지는 완성도 높은 IT 디바이스입니다.",
        "likes": 6
      },
      {
        "id": "rev-prod-16-19",
        "author": "임*훈",
        "rating": 4,
        "date": "2026-08-05",
        "content": "이지샵 디지털 제품은 항상 믿고 구매하게 됩니다.",
        "likes": 5
      },
      {
        "id": "rev-prod-16-20",
        "author": "한*서",
        "rating": 5,
        "date": "2026-08-02",
        "content": "별 5개가 아깝지 않은 최고의 디지털 가전입니다. 강추!",
        "likes": 3
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-16-1",
        "author": "고*진",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-17",
    "name": "스마트 무선 노이즈캔슬링 이어폰 에어핏 프로",
    "category": "디지털 / 가전",
    "categoryId": "cat-digital",
    "price": 89000,
    "originalPrice": 129000,
    "discountRate": 31,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 42,
    "isBest": false,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": true,
    "thumbnail": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598331668826-20cecc596b86?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "40dB 액티브 노이즈 캔슬링, 6마이크 통화 소음 저감, 무선 충전 케이스 포함",
    "description": "<h3>40dB 액티브 노이즈 캔슬링, 6마이크 통화 소음 저감, 무선 충전 케이스 포함</h3>\n<p>스마트 무선 노이즈캔슬링 이어폰 에어핏 프로은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80\" alt=\"스마트 무선 노이즈캔슬링 이어폰 에어핏 프로 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">스마트 무선 노이즈캔슬링 이어폰 에어핏 프로의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=800&q=80\" alt=\"스마트 무선 노이즈캔슬링 이어폰 에어핏 프로 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=800&q=80\" alt=\"스마트 무선 노이즈캔슬링 이어폰 에어핏 프로 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "퓨어 화이트",
        "stock": 35
      },
      {
        "name": "미드나잇 블랙",
        "stock": 25
      }
    ],
    "specs": {
      "재생시간": "이어버드 8시간, 케이스 포함 32시간",
      "방수": "IPX5 생활방수"
    },
    "reviews": [
      {
        "id": "rev-prod-17-1",
        "author": "오*은",
        "rating": 4,
        "date": "2026-09-27",
        "content": "스마트 무선 노이즈캔슬링 이어폰 에어핏 프로 성능이 기대 이상으로 훌륭합니다. 마감도 깔끔해요.",
        "likes": 36
      },
      {
        "id": "rev-prod-17-2",
        "author": "서*윤",
        "rating": 5,
        "date": "2026-09-24",
        "content": "연결이 빠르고 끊김 없이 안정적으로 동작해서 너무 편합니다.",
        "likes": 34
      },
      {
        "id": "rev-prod-17-3",
        "author": "신*민",
        "rating": 5,
        "date": "2026-09-21",
        "content": "디자인이 모던하고 미니멀해서 데스크테리어에 찰떡이에요.",
        "likes": 32
      },
      {
        "id": "rev-prod-17-4",
        "author": "권*지",
        "rating": 5,
        "date": "2026-09-18",
        "content": "배터리가 오래가서 충전 스트레스 없이 쓰고 있습니다.",
        "likes": 31
      },
      {
        "id": "rev-prod-17-5",
        "author": "황*정",
        "rating": 5,
        "date": "2026-09-15",
        "content": "버튼 조작감과 인터페이스가 직관적이라 사용하기 쉽네요.",
        "likes": 29
      },
      {
        "id": "rev-prod-17-6",
        "author": "안*영",
        "rating": 5,
        "date": "2026-09-12",
        "content": "무게가 가벼워서 휴대하고 다니기에 부담이 전혀 없습니다.",
        "likes": 28
      },
      {
        "id": "rev-prod-17-7",
        "author": "송*원",
        "rating": 4,
        "date": "2026-09-09",
        "content": "가격 대비 스펙이 아주 훌륭한 가성비 종결템입니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-17-8",
        "author": "전*린",
        "rating": 5,
        "date": "2026-09-06",
        "content": "패키징도 꼼꼼하고 충전 케이블 등 부속품 퀄리티도 좋아요.",
        "likes": 24
      },
      {
        "id": "rev-prod-17-9",
        "author": "홍*준",
        "rating": 5,
        "date": "2026-09-03",
        "content": "업무 효율이 확실히 올라갔습니다. 재택근무 필수품이에요.",
        "likes": 23
      },
      {
        "id": "rev-prod-17-10",
        "author": "유*경",
        "rating": 5,
        "date": "2026-08-31",
        "content": "소음이나 발열이 적어서 장시간 사용해도 안심이 됩니다.",
        "likes": 21
      },
      {
        "id": "rev-prod-17-11",
        "author": "고*수",
        "rating": 5,
        "date": "2026-08-28",
        "content": "친구 추천으로 샀는데 왜 인기 많은지 알겠네요.",
        "likes": 20
      },
      {
        "id": "rev-prod-17-12",
        "author": "문*우",
        "rating": 5,
        "date": "2026-08-25",
        "content": "블루투스 페어링 속도가 1초 만에 바로 잡혀서 감탄했습니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-17-13",
        "author": "양*희",
        "rating": 4,
        "date": "2026-08-22",
        "content": "내구성이 튼튼해서 오래오래 고장 없이 쓸 수 있을 것 같아요.",
        "likes": 16
      },
      {
        "id": "rev-prod-17-14",
        "author": "손*진",
        "rating": 5,
        "date": "2026-08-19",
        "content": "기능이 다양하면서도 불필요한 군더더기가 없어 만족스럽습니다.",
        "likes": 15
      },
      {
        "id": "rev-prod-17-15",
        "author": "배*아",
        "rating": 5,
        "date": "2026-08-16",
        "content": "선물용으로 구매했는데 받는 사람이 너무 유용하다고 칭찬하네요.",
        "likes": 13
      },
      {
        "id": "rev-prod-17-16",
        "author": "백*태",
        "rating": 5,
        "date": "2026-08-13",
        "content": "화면이나 음질, 반응속도 등 기본기가 탄탄하게 잡혀있습니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-17-17",
        "author": "허*현",
        "rating": 5,
        "date": "2026-08-10",
        "content": "한 손에 쏙 들어오는 그립감과 컴팩트함이 아주 매력적입니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-17-18",
        "author": "노*호",
        "rating": 5,
        "date": "2026-08-07",
        "content": "기술력이 뛰어난 게 느껴지는 완성도 높은 IT 디바이스입니다.",
        "likes": 8
      },
      {
        "id": "rev-prod-17-19",
        "author": "남*훈",
        "rating": 4,
        "date": "2026-08-04",
        "content": "이지샵 디지털 제품은 항상 믿고 구매하게 됩니다.",
        "likes": 7
      },
      {
        "id": "rev-prod-17-20",
        "author": "심*서",
        "rating": 5,
        "date": "2026-08-01",
        "content": "별 5개가 아깝지 않은 최고의 디지털 가전입니다. 강추!",
        "likes": 5
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-17-1",
        "author": "문*아",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-18",
    "name": "3in1 마그네틱 폴더블 무선 고속 충전 스탠드",
    "category": "디지털 / 가전",
    "categoryId": "cat-digital",
    "price": 49000,
    "originalPrice": 69000,
    "discountRate": 28,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 49,
    "isBest": true,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "스마트폰 + 워치 + 이어폰을 동시에 충전, 여행 시 접어서 휴대 가능한 미니멀 디자인",
    "description": "<h3>스마트폰 + 워치 + 이어폰을 동시에 충전, 여행 시 접어서 휴대 가능한 미니멀 디자인</h3>\n<p>3in1 마그네틱 폴더블 무선 고속 충전 스탠드은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80\" alt=\"3in1 마그네틱 폴더블 무선 고속 충전 스탠드 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">3in1 마그네틱 폴더블 무선 고속 충전 스탠드의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80\" alt=\"3in1 마그네틱 폴더블 무선 고속 충전 스탠드 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80\" alt=\"3in1 마그네틱 폴더블 무선 고속 충전 스탠드 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "스페이스 실버",
        "stock": 30
      },
      {
        "name": "딥 블랙",
        "stock": 25
      }
    ],
    "specs": {
      "출력": "스마트폰 15W + 워치 3W + 이어폰 5W",
      "재질": "알루미늄 합금"
    },
    "reviews": [
      {
        "id": "rev-prod-18-1",
        "author": "김*은",
        "rating": 4,
        "date": "2026-09-26",
        "content": "3in1 마그네틱 폴더블 무선 고속 충전 스탠드 성능이 기대 이상으로 훌륭합니다. 마감도 깔끔해요.",
        "likes": 38
      },
      {
        "id": "rev-prod-18-2",
        "author": "이*윤",
        "rating": 5,
        "date": "2026-09-23",
        "content": "연결이 빠르고 끊김 없이 안정적으로 동작해서 너무 편합니다.",
        "likes": 36
      },
      {
        "id": "rev-prod-18-3",
        "author": "박*민",
        "rating": 5,
        "date": "2026-09-20",
        "content": "디자인이 모던하고 미니멀해서 데스크테리어에 찰떡이에요.",
        "likes": 34
      },
      {
        "id": "rev-prod-18-4",
        "author": "최*지",
        "rating": 5,
        "date": "2026-09-17",
        "content": "배터리가 오래가서 충전 스트레스 없이 쓰고 있습니다.",
        "likes": 33
      },
      {
        "id": "rev-prod-18-5",
        "author": "정*정",
        "rating": 5,
        "date": "2026-09-14",
        "content": "버튼 조작감과 인터페이스가 직관적이라 사용하기 쉽네요.",
        "likes": 31
      },
      {
        "id": "rev-prod-18-6",
        "author": "강*영",
        "rating": 5,
        "date": "2026-09-11",
        "content": "무게가 가벼워서 휴대하고 다니기에 부담이 전혀 없습니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-18-7",
        "author": "조*원",
        "rating": 4,
        "date": "2026-09-08",
        "content": "가격 대비 스펙이 아주 훌륭한 가성비 종결템입니다.",
        "likes": 28
      },
      {
        "id": "rev-prod-18-8",
        "author": "윤*린",
        "rating": 5,
        "date": "2026-09-05",
        "content": "패키징도 꼼꼼하고 충전 케이블 등 부속품 퀄리티도 좋아요.",
        "likes": 26
      },
      {
        "id": "rev-prod-18-9",
        "author": "장*준",
        "rating": 5,
        "date": "2026-09-02",
        "content": "업무 효율이 확실히 올라갔습니다. 재택근무 필수품이에요.",
        "likes": 25
      },
      {
        "id": "rev-prod-18-10",
        "author": "임*경",
        "rating": 5,
        "date": "2026-08-30",
        "content": "소음이나 발열이 적어서 장시간 사용해도 안심이 됩니다.",
        "likes": 23
      },
      {
        "id": "rev-prod-18-11",
        "author": "한*수",
        "rating": 5,
        "date": "2026-08-27",
        "content": "친구 추천으로 샀는데 왜 인기 많은지 알겠네요.",
        "likes": 22
      },
      {
        "id": "rev-prod-18-12",
        "author": "오*우",
        "rating": 5,
        "date": "2026-08-24",
        "content": "블루투스 페어링 속도가 1초 만에 바로 잡혀서 감탄했습니다.",
        "likes": 20
      },
      {
        "id": "rev-prod-18-13",
        "author": "서*희",
        "rating": 4,
        "date": "2026-08-21",
        "content": "내구성이 튼튼해서 오래오래 고장 없이 쓸 수 있을 것 같아요.",
        "likes": 18
      },
      {
        "id": "rev-prod-18-14",
        "author": "신*진",
        "rating": 5,
        "date": "2026-08-18",
        "content": "기능이 다양하면서도 불필요한 군더더기가 없어 만족스럽습니다.",
        "likes": 17
      },
      {
        "id": "rev-prod-18-15",
        "author": "권*아",
        "rating": 5,
        "date": "2026-08-15",
        "content": "선물용으로 구매했는데 받는 사람이 너무 유용하다고 칭찬하네요.",
        "likes": 15
      },
      {
        "id": "rev-prod-18-16",
        "author": "황*태",
        "rating": 5,
        "date": "2026-08-12",
        "content": "화면이나 음질, 반응속도 등 기본기가 탄탄하게 잡혀있습니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-18-17",
        "author": "안*현",
        "rating": 5,
        "date": "2026-08-09",
        "content": "한 손에 쏙 들어오는 그립감과 컴팩트함이 아주 매력적입니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-18-18",
        "author": "송*호",
        "rating": 5,
        "date": "2026-08-06",
        "content": "기술력이 뛰어난 게 느껴지는 완성도 높은 IT 디바이스입니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-18-19",
        "author": "전*훈",
        "rating": 4,
        "date": "2026-08-03",
        "content": "이지샵 디지털 제품은 항상 믿고 구매하게 됩니다.",
        "likes": 9
      },
      {
        "id": "rev-prod-18-20",
        "author": "홍*서",
        "rating": 5,
        "date": "2026-07-31",
        "content": "별 5개가 아깝지 않은 최고의 디지털 가전입니다. 강추!",
        "likes": 7
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-18-1",
        "author": "양*태",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-19",
    "name": "무소음 초음파 무선 탁상용 미니 가습기 500ml",
    "category": "디지털 / 가전",
    "categoryId": "cat-digital",
    "price": 29000,
    "originalPrice": 39000,
    "discountRate": 25,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 56,
    "isBest": false,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "20dB 초저소음 미세 분무, 2000mAh 배터리 내장, 은은한 무드등 기능",
    "description": "<h3>20dB 초저소음 미세 분무, 2000mAh 배터리 내장, 은은한 무드등 기능</h3>\n<p>무소음 초음파 무선 탁상용 미니 가습기 500ml은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80\" alt=\"무소음 초음파 무선 탁상용 미니 가습기 500ml 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">무소음 초음파 무선 탁상용 미니 가습기 500ml의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80\" alt=\"무소음 초음파 무선 탁상용 미니 가습기 500ml 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80\" alt=\"무소음 초음파 무선 탁상용 미니 가습기 500ml 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "스노우 화이트",
        "stock": 45
      },
      {
        "name": "파스텔 핑크",
        "stock": 20
      }
    ],
    "specs": {
      "수조용량": "500ml",
      "분무량": "시간당 50ml",
      "소음": "20dB 이하"
    },
    "reviews": [
      {
        "id": "rev-prod-19-1",
        "author": "유*은",
        "rating": 4,
        "date": "2026-09-25",
        "content": "무소음 초음파 무선 탁상용 미니 가습기 500ml 성능이 기대 이상으로 훌륭합니다. 마감도 깔끔해요.",
        "likes": 40
      },
      {
        "id": "rev-prod-19-2",
        "author": "고*윤",
        "rating": 5,
        "date": "2026-09-22",
        "content": "연결이 빠르고 끊김 없이 안정적으로 동작해서 너무 편합니다.",
        "likes": 38
      },
      {
        "id": "rev-prod-19-3",
        "author": "문*민",
        "rating": 5,
        "date": "2026-09-19",
        "content": "디자인이 모던하고 미니멀해서 데스크테리어에 찰떡이에요.",
        "likes": 36
      },
      {
        "id": "rev-prod-19-4",
        "author": "양*지",
        "rating": 5,
        "date": "2026-09-16",
        "content": "배터리가 오래가서 충전 스트레스 없이 쓰고 있습니다.",
        "likes": 35
      },
      {
        "id": "rev-prod-19-5",
        "author": "손*정",
        "rating": 5,
        "date": "2026-09-13",
        "content": "버튼 조작감과 인터페이스가 직관적이라 사용하기 쉽네요.",
        "likes": 33
      },
      {
        "id": "rev-prod-19-6",
        "author": "배*영",
        "rating": 5,
        "date": "2026-09-10",
        "content": "무게가 가벼워서 휴대하고 다니기에 부담이 전혀 없습니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-19-7",
        "author": "백*원",
        "rating": 4,
        "date": "2026-09-07",
        "content": "가격 대비 스펙이 아주 훌륭한 가성비 종결템입니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-19-8",
        "author": "허*린",
        "rating": 5,
        "date": "2026-09-04",
        "content": "패키징도 꼼꼼하고 충전 케이블 등 부속품 퀄리티도 좋아요.",
        "likes": 28
      },
      {
        "id": "rev-prod-19-9",
        "author": "노*준",
        "rating": 5,
        "date": "2026-09-01",
        "content": "업무 효율이 확실히 올라갔습니다. 재택근무 필수품이에요.",
        "likes": 27
      },
      {
        "id": "rev-prod-19-10",
        "author": "남*경",
        "rating": 5,
        "date": "2026-08-29",
        "content": "소음이나 발열이 적어서 장시간 사용해도 안심이 됩니다.",
        "likes": 25
      },
      {
        "id": "rev-prod-19-11",
        "author": "심*수",
        "rating": 5,
        "date": "2026-08-26",
        "content": "친구 추천으로 샀는데 왜 인기 많은지 알겠네요.",
        "likes": 24
      },
      {
        "id": "rev-prod-19-12",
        "author": "김*우",
        "rating": 5,
        "date": "2026-08-23",
        "content": "블루투스 페어링 속도가 1초 만에 바로 잡혀서 감탄했습니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-19-13",
        "author": "이*희",
        "rating": 4,
        "date": "2026-08-20",
        "content": "내구성이 튼튼해서 오래오래 고장 없이 쓸 수 있을 것 같아요.",
        "likes": 20
      },
      {
        "id": "rev-prod-19-14",
        "author": "박*진",
        "rating": 5,
        "date": "2026-08-17",
        "content": "기능이 다양하면서도 불필요한 군더더기가 없어 만족스럽습니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-19-15",
        "author": "최*아",
        "rating": 5,
        "date": "2026-08-14",
        "content": "선물용으로 구매했는데 받는 사람이 너무 유용하다고 칭찬하네요.",
        "likes": 17
      },
      {
        "id": "rev-prod-19-16",
        "author": "정*태",
        "rating": 5,
        "date": "2026-08-11",
        "content": "화면이나 음질, 반응속도 등 기본기가 탄탄하게 잡혀있습니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-19-17",
        "author": "강*현",
        "rating": 5,
        "date": "2026-08-08",
        "content": "한 손에 쏙 들어오는 그립감과 컴팩트함이 아주 매력적입니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-19-18",
        "author": "조*호",
        "rating": 5,
        "date": "2026-08-05",
        "content": "기술력이 뛰어난 게 느껴지는 완성도 높은 IT 디바이스입니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-19-19",
        "author": "윤*훈",
        "rating": 4,
        "date": "2026-08-02",
        "content": "이지샵 디지털 제품은 항상 믿고 구매하게 됩니다.",
        "likes": 11
      },
      {
        "id": "rev-prod-19-20",
        "author": "장*서",
        "rating": 5,
        "date": "2026-07-30",
        "content": "별 5개가 아깝지 않은 최고의 디지털 가전입니다. 강추!",
        "likes": 9
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-19-1",
        "author": "손*현",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-20",
    "name": "슬림 마그네틱 맥세이프 보조배터리 10000mAh",
    "category": "디지털 / 가전",
    "categoryId": "cat-digital",
    "price": 39000,
    "originalPrice": 55000,
    "discountRate": 29,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 63,
    "isBest": true,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "12mm 초슬림 두께, 강력한 15N 네오디뮴 자력, 20W 유무선 동시 고속 충전",
    "description": "<h3>12mm 초슬림 두께, 강력한 15N 네오디뮴 자력, 20W 유무선 동시 고속 충전</h3>\n<p>슬림 마그네틱 맥세이프 보조배터리 10000mAh은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80\" alt=\"슬림 마그네틱 맥세이프 보조배터리 10000mAh 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">슬림 마그네틱 맥세이프 보조배터리 10000mAh의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80\" alt=\"슬림 마그네틱 맥세이프 보조배터리 10000mAh 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80\" alt=\"슬림 마그네틱 맥세이프 보조배터리 10000mAh 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "티타늄 그레이",
        "stock": 35
      },
      {
        "name": "펄 화이트",
        "stock": 25
      }
    ],
    "specs": {
      "용량": "10,000mAh",
      "유선출력": "20W PD",
      "무선출력": "15W Max"
    },
    "reviews": [
      {
        "id": "rev-prod-20-1",
        "author": "임*은",
        "rating": 4,
        "date": "2026-09-24",
        "content": "슬림 마그네틱 맥세이프 보조배터리 10000mAh 성능이 기대 이상으로 훌륭합니다. 마감도 깔끔해요.",
        "likes": 42
      },
      {
        "id": "rev-prod-20-2",
        "author": "한*윤",
        "rating": 5,
        "date": "2026-09-21",
        "content": "연결이 빠르고 끊김 없이 안정적으로 동작해서 너무 편합니다.",
        "likes": 40
      },
      {
        "id": "rev-prod-20-3",
        "author": "오*민",
        "rating": 5,
        "date": "2026-09-18",
        "content": "디자인이 모던하고 미니멀해서 데스크테리어에 찰떡이에요.",
        "likes": 38
      },
      {
        "id": "rev-prod-20-4",
        "author": "서*지",
        "rating": 5,
        "date": "2026-09-15",
        "content": "배터리가 오래가서 충전 스트레스 없이 쓰고 있습니다.",
        "likes": 37
      },
      {
        "id": "rev-prod-20-5",
        "author": "신*정",
        "rating": 5,
        "date": "2026-09-12",
        "content": "버튼 조작감과 인터페이스가 직관적이라 사용하기 쉽네요.",
        "likes": 35
      },
      {
        "id": "rev-prod-20-6",
        "author": "권*영",
        "rating": 5,
        "date": "2026-09-09",
        "content": "무게가 가벼워서 휴대하고 다니기에 부담이 전혀 없습니다.",
        "likes": 34
      },
      {
        "id": "rev-prod-20-7",
        "author": "황*원",
        "rating": 4,
        "date": "2026-09-06",
        "content": "가격 대비 스펙이 아주 훌륭한 가성비 종결템입니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-20-8",
        "author": "안*린",
        "rating": 5,
        "date": "2026-09-03",
        "content": "패키징도 꼼꼼하고 충전 케이블 등 부속품 퀄리티도 좋아요.",
        "likes": 30
      },
      {
        "id": "rev-prod-20-9",
        "author": "송*준",
        "rating": 5,
        "date": "2026-08-31",
        "content": "업무 효율이 확실히 올라갔습니다. 재택근무 필수품이에요.",
        "likes": 29
      },
      {
        "id": "rev-prod-20-10",
        "author": "전*경",
        "rating": 5,
        "date": "2026-08-28",
        "content": "소음이나 발열이 적어서 장시간 사용해도 안심이 됩니다.",
        "likes": 27
      },
      {
        "id": "rev-prod-20-11",
        "author": "홍*수",
        "rating": 5,
        "date": "2026-08-25",
        "content": "친구 추천으로 샀는데 왜 인기 많은지 알겠네요.",
        "likes": 26
      },
      {
        "id": "rev-prod-20-12",
        "author": "유*우",
        "rating": 5,
        "date": "2026-08-22",
        "content": "블루투스 페어링 속도가 1초 만에 바로 잡혀서 감탄했습니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-20-13",
        "author": "고*희",
        "rating": 4,
        "date": "2026-08-19",
        "content": "내구성이 튼튼해서 오래오래 고장 없이 쓸 수 있을 것 같아요.",
        "likes": 22
      },
      {
        "id": "rev-prod-20-14",
        "author": "문*진",
        "rating": 5,
        "date": "2026-08-16",
        "content": "기능이 다양하면서도 불필요한 군더더기가 없어 만족스럽습니다.",
        "likes": 21
      },
      {
        "id": "rev-prod-20-15",
        "author": "양*아",
        "rating": 5,
        "date": "2026-08-13",
        "content": "선물용으로 구매했는데 받는 사람이 너무 유용하다고 칭찬하네요.",
        "likes": 19
      },
      {
        "id": "rev-prod-20-16",
        "author": "손*태",
        "rating": 5,
        "date": "2026-08-10",
        "content": "화면이나 음질, 반응속도 등 기본기가 탄탄하게 잡혀있습니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-20-17",
        "author": "배*현",
        "rating": 5,
        "date": "2026-08-07",
        "content": "한 손에 쏙 들어오는 그립감과 컴팩트함이 아주 매력적입니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-20-18",
        "author": "백*호",
        "rating": 5,
        "date": "2026-08-04",
        "content": "기술력이 뛰어난 게 느껴지는 완성도 높은 IT 디바이스입니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-20-19",
        "author": "허*훈",
        "rating": 4,
        "date": "2026-08-01",
        "content": "이지샵 디지털 제품은 항상 믿고 구매하게 됩니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-20-20",
        "author": "노*서",
        "rating": 5,
        "date": "2026-07-29",
        "content": "별 5개가 아깝지 않은 최고의 디지털 가전입니다. 강추!",
        "likes": 11
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-20-1",
        "author": "배*호",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-21",
    "name": "스마트 블루투스 프리미엄 체지방 체중계 (BIA 16종 분석)",
    "category": "디지털 / 가전",
    "categoryId": "cat-digital",
    "price": 36000,
    "originalPrice": 49000,
    "discountRate": 26,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 70,
    "isBest": false,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "골격근량, 체지방률, 기초대사량 등 16가지 신체 데이터 앱 자동 기록",
    "description": "<h3>골격근량, 체지방률, 기초대사량 등 16가지 신체 데이터 앱 자동 기록</h3>\n<p>스마트 블루투스 프리미엄 체지방 체중계 (BIA 16종 분석)은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80\" alt=\"스마트 블루투스 프리미엄 체지방 체중계 (BIA 16종 분석) 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">스마트 블루투스 프리미엄 체지방 체중계 (BIA 16종 분석)의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80\" alt=\"스마트 블루투스 프리미엄 체지방 체중계 (BIA 16종 분석) 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80\" alt=\"스마트 블루투스 프리미엄 체지방 체중계 (BIA 16종 분석) 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "클라우드 화이트",
        "stock": 40
      },
      {
        "name": "미드나잇 블랙",
        "stock": 20
      }
    ],
    "specs": {
      "측정항목": "16가지 BIA 지표",
      "연동": "전용 한국어 앱 (iOS/Android)",
      "강화유리": "6mm"
    },
    "reviews": [
      {
        "id": "rev-prod-21-1",
        "author": "남*은",
        "rating": 4,
        "date": "2026-09-23",
        "content": "스마트 블루투스 프리미엄 체지방 체중계 (BIA 16종 분석) 성능이 기대 이상으로 훌륭합니다. 마감도 깔끔해요.",
        "likes": 34
      },
      {
        "id": "rev-prod-21-2",
        "author": "심*윤",
        "rating": 5,
        "date": "2026-09-20",
        "content": "연결이 빠르고 끊김 없이 안정적으로 동작해서 너무 편합니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-21-3",
        "author": "김*민",
        "rating": 5,
        "date": "2026-09-17",
        "content": "디자인이 모던하고 미니멀해서 데스크테리어에 찰떡이에요.",
        "likes": 30
      },
      {
        "id": "rev-prod-21-4",
        "author": "이*지",
        "rating": 5,
        "date": "2026-09-14",
        "content": "배터리가 오래가서 충전 스트레스 없이 쓰고 있습니다.",
        "likes": 29
      },
      {
        "id": "rev-prod-21-5",
        "author": "박*정",
        "rating": 5,
        "date": "2026-09-11",
        "content": "버튼 조작감과 인터페이스가 직관적이라 사용하기 쉽네요.",
        "likes": 27
      },
      {
        "id": "rev-prod-21-6",
        "author": "최*영",
        "rating": 5,
        "date": "2026-09-08",
        "content": "무게가 가벼워서 휴대하고 다니기에 부담이 전혀 없습니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-21-7",
        "author": "정*원",
        "rating": 4,
        "date": "2026-09-05",
        "content": "가격 대비 스펙이 아주 훌륭한 가성비 종결템입니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-21-8",
        "author": "강*린",
        "rating": 5,
        "date": "2026-09-02",
        "content": "패키징도 꼼꼼하고 충전 케이블 등 부속품 퀄리티도 좋아요.",
        "likes": 22
      },
      {
        "id": "rev-prod-21-9",
        "author": "조*준",
        "rating": 5,
        "date": "2026-08-30",
        "content": "업무 효율이 확실히 올라갔습니다. 재택근무 필수품이에요.",
        "likes": 21
      },
      {
        "id": "rev-prod-21-10",
        "author": "윤*경",
        "rating": 5,
        "date": "2026-08-27",
        "content": "소음이나 발열이 적어서 장시간 사용해도 안심이 됩니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-21-11",
        "author": "장*수",
        "rating": 5,
        "date": "2026-08-24",
        "content": "친구 추천으로 샀는데 왜 인기 많은지 알겠네요.",
        "likes": 18
      },
      {
        "id": "rev-prod-21-12",
        "author": "임*우",
        "rating": 5,
        "date": "2026-08-21",
        "content": "블루투스 페어링 속도가 1초 만에 바로 잡혀서 감탄했습니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-21-13",
        "author": "한*희",
        "rating": 4,
        "date": "2026-08-18",
        "content": "내구성이 튼튼해서 오래오래 고장 없이 쓸 수 있을 것 같아요.",
        "likes": 14
      },
      {
        "id": "rev-prod-21-14",
        "author": "오*진",
        "rating": 5,
        "date": "2026-08-15",
        "content": "기능이 다양하면서도 불필요한 군더더기가 없어 만족스럽습니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-21-15",
        "author": "서*아",
        "rating": 5,
        "date": "2026-08-12",
        "content": "선물용으로 구매했는데 받는 사람이 너무 유용하다고 칭찬하네요.",
        "likes": 11
      },
      {
        "id": "rev-prod-21-16",
        "author": "신*태",
        "rating": 5,
        "date": "2026-08-09",
        "content": "화면이나 음질, 반응속도 등 기본기가 탄탄하게 잡혀있습니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-21-17",
        "author": "권*현",
        "rating": 5,
        "date": "2026-08-06",
        "content": "한 손에 쏙 들어오는 그립감과 컴팩트함이 아주 매력적입니다.",
        "likes": 8
      },
      {
        "id": "rev-prod-21-18",
        "author": "황*호",
        "rating": 5,
        "date": "2026-08-03",
        "content": "기술력이 뛰어난 게 느껴지는 완성도 높은 IT 디바이스입니다.",
        "likes": 6
      },
      {
        "id": "rev-prod-21-19",
        "author": "안*훈",
        "rating": 4,
        "date": "2026-07-31",
        "content": "이지샵 디지털 제품은 항상 믿고 구매하게 됩니다.",
        "likes": 5
      },
      {
        "id": "rev-prod-21-20",
        "author": "송*서",
        "rating": 5,
        "date": "2026-07-28",
        "content": "별 5개가 아깝지 않은 최고의 디지털 가전입니다. 강추!",
        "likes": 3
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-21-1",
        "author": "백*훈",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-22",
    "name": "손목터널증후군 예방 무선 버티컬 인체공학 마우스",
    "category": "디지털 / 가전",
    "categoryId": "cat-digital",
    "price": 39000,
    "originalPrice": 55000,
    "discountRate": 29,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 77,
    "isBest": false,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "57도 악수 그립 자연스러운 손목 각도, 무소음 클릭, 블루투스 & 2.4G 듀얼 무선",
    "description": "<h3>57도 악수 그립 자연스러운 손목 각도, 무소음 클릭, 블루투스 & 2.4G 듀얼 무선</h3>\n<p>손목터널증후군 예방 무선 버티컬 인체공학 마우스은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80\" alt=\"손목터널증후군 예방 무선 버티컬 인체공학 마우스 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">손목터널증후군 예방 무선 버티컬 인체공학 마우스의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80\" alt=\"손목터널증후군 예방 무선 버티컬 인체공학 마우스 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80\" alt=\"손목터널증후군 예방 무선 버티컬 인체공학 마우스 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "차콜 그레이",
        "stock": 30
      },
      {
        "name": "밀크 베이지",
        "stock": 20
      }
    ],
    "specs": {
      "각도": "57도 버티컬",
      "연결": "BT 5.0 + 2.4GHz 무선",
      "DPI": "800/1200/1600/2400"
    },
    "reviews": [
      {
        "id": "rev-prod-22-1",
        "author": "전*은",
        "rating": 4,
        "date": "2026-09-29",
        "content": "손목터널증후군 예방 무선 버티컬 인체공학 마우스 성능이 기대 이상으로 훌륭합니다. 마감도 깔끔해요.",
        "likes": 36
      },
      {
        "id": "rev-prod-22-2",
        "author": "홍*윤",
        "rating": 5,
        "date": "2026-09-26",
        "content": "연결이 빠르고 끊김 없이 안정적으로 동작해서 너무 편합니다.",
        "likes": 34
      },
      {
        "id": "rev-prod-22-3",
        "author": "유*민",
        "rating": 5,
        "date": "2026-09-23",
        "content": "디자인이 모던하고 미니멀해서 데스크테리어에 찰떡이에요.",
        "likes": 32
      },
      {
        "id": "rev-prod-22-4",
        "author": "고*지",
        "rating": 5,
        "date": "2026-09-20",
        "content": "배터리가 오래가서 충전 스트레스 없이 쓰고 있습니다.",
        "likes": 31
      },
      {
        "id": "rev-prod-22-5",
        "author": "문*정",
        "rating": 5,
        "date": "2026-09-17",
        "content": "버튼 조작감과 인터페이스가 직관적이라 사용하기 쉽네요.",
        "likes": 29
      },
      {
        "id": "rev-prod-22-6",
        "author": "양*영",
        "rating": 5,
        "date": "2026-09-14",
        "content": "무게가 가벼워서 휴대하고 다니기에 부담이 전혀 없습니다.",
        "likes": 28
      },
      {
        "id": "rev-prod-22-7",
        "author": "손*원",
        "rating": 4,
        "date": "2026-09-11",
        "content": "가격 대비 스펙이 아주 훌륭한 가성비 종결템입니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-22-8",
        "author": "배*린",
        "rating": 5,
        "date": "2026-09-08",
        "content": "패키징도 꼼꼼하고 충전 케이블 등 부속품 퀄리티도 좋아요.",
        "likes": 24
      },
      {
        "id": "rev-prod-22-9",
        "author": "백*준",
        "rating": 5,
        "date": "2026-09-05",
        "content": "업무 효율이 확실히 올라갔습니다. 재택근무 필수품이에요.",
        "likes": 23
      },
      {
        "id": "rev-prod-22-10",
        "author": "허*경",
        "rating": 5,
        "date": "2026-09-02",
        "content": "소음이나 발열이 적어서 장시간 사용해도 안심이 됩니다.",
        "likes": 21
      },
      {
        "id": "rev-prod-22-11",
        "author": "노*수",
        "rating": 5,
        "date": "2026-08-30",
        "content": "친구 추천으로 샀는데 왜 인기 많은지 알겠네요.",
        "likes": 20
      },
      {
        "id": "rev-prod-22-12",
        "author": "남*우",
        "rating": 5,
        "date": "2026-08-27",
        "content": "블루투스 페어링 속도가 1초 만에 바로 잡혀서 감탄했습니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-22-13",
        "author": "심*희",
        "rating": 4,
        "date": "2026-08-24",
        "content": "내구성이 튼튼해서 오래오래 고장 없이 쓸 수 있을 것 같아요.",
        "likes": 16
      },
      {
        "id": "rev-prod-22-14",
        "author": "김*진",
        "rating": 5,
        "date": "2026-08-21",
        "content": "기능이 다양하면서도 불필요한 군더더기가 없어 만족스럽습니다.",
        "likes": 15
      },
      {
        "id": "rev-prod-22-15",
        "author": "이*아",
        "rating": 5,
        "date": "2026-08-18",
        "content": "선물용으로 구매했는데 받는 사람이 너무 유용하다고 칭찬하네요.",
        "likes": 13
      },
      {
        "id": "rev-prod-22-16",
        "author": "박*태",
        "rating": 5,
        "date": "2026-08-15",
        "content": "화면이나 음질, 반응속도 등 기본기가 탄탄하게 잡혀있습니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-22-17",
        "author": "최*현",
        "rating": 5,
        "date": "2026-08-12",
        "content": "한 손에 쏙 들어오는 그립감과 컴팩트함이 아주 매력적입니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-22-18",
        "author": "정*호",
        "rating": 5,
        "date": "2026-08-09",
        "content": "기술력이 뛰어난 게 느껴지는 완성도 높은 IT 디바이스입니다.",
        "likes": 8
      },
      {
        "id": "rev-prod-22-19",
        "author": "강*훈",
        "rating": 4,
        "date": "2026-08-06",
        "content": "이지샵 디지털 제품은 항상 믿고 구매하게 됩니다.",
        "likes": 7
      },
      {
        "id": "rev-prod-22-20",
        "author": "조*서",
        "rating": 5,
        "date": "2026-08-03",
        "content": "별 5개가 아깝지 않은 최고의 디지털 가전입니다. 강추!",
        "likes": 5
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-22-1",
        "author": "허*서",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-23",
    "name": "휴대용 무선 구강세정기 워터픽 300ml 대용량",
    "category": "디지털 / 가전",
    "categoryId": "cat-digital",
    "price": 49000,
    "originalPrice": 68000,
    "discountRate": 28,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 34,
    "isBest": false,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": true,
    "thumbnail": "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "분당 1800회 맥동 수압, IPX7 완전 방수, 4가지 맞춤 세정 모드 및 노즐 4종 증정",
    "description": "<h3>분당 1800회 맥동 수압, IPX7 완전 방수, 4가지 맞춤 세정 모드 및 노즐 4종 증정</h3>\n<p>휴대용 무선 구강세정기 워터픽 300ml 대용량은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=800&q=80\" alt=\"휴대용 무선 구강세정기 워터픽 300ml 대용량 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">휴대용 무선 구강세정기 워터픽 300ml 대용량의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=80\" alt=\"휴대용 무선 구강세정기 워터픽 300ml 대용량 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80\" alt=\"휴대용 무선 구강세정기 워터픽 300ml 대용량 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "매트 화이트 (노즐 4종 포함)",
        "stock": 35
      },
      {
        "name": "아쿠아 블루 (노즐 4종 포함)",
        "stock": 20
      }
    ],
    "specs": {
      "수압모드": "4단계",
      "물통용량": "300ml",
      "방수": "IPX7 완전방수"
    },
    "reviews": [
      {
        "id": "rev-prod-23-1",
        "author": "윤*은",
        "rating": 4,
        "date": "2026-09-28",
        "content": "휴대용 무선 구강세정기 워터픽 300ml 대용량 성능이 기대 이상으로 훌륭합니다. 마감도 깔끔해요.",
        "likes": 38
      },
      {
        "id": "rev-prod-23-2",
        "author": "장*윤",
        "rating": 5,
        "date": "2026-09-25",
        "content": "연결이 빠르고 끊김 없이 안정적으로 동작해서 너무 편합니다.",
        "likes": 36
      },
      {
        "id": "rev-prod-23-3",
        "author": "임*민",
        "rating": 5,
        "date": "2026-09-22",
        "content": "디자인이 모던하고 미니멀해서 데스크테리어에 찰떡이에요.",
        "likes": 34
      },
      {
        "id": "rev-prod-23-4",
        "author": "한*지",
        "rating": 5,
        "date": "2026-09-19",
        "content": "배터리가 오래가서 충전 스트레스 없이 쓰고 있습니다.",
        "likes": 33
      },
      {
        "id": "rev-prod-23-5",
        "author": "오*정",
        "rating": 5,
        "date": "2026-09-16",
        "content": "버튼 조작감과 인터페이스가 직관적이라 사용하기 쉽네요.",
        "likes": 31
      },
      {
        "id": "rev-prod-23-6",
        "author": "서*영",
        "rating": 5,
        "date": "2026-09-13",
        "content": "무게가 가벼워서 휴대하고 다니기에 부담이 전혀 없습니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-23-7",
        "author": "신*원",
        "rating": 4,
        "date": "2026-09-10",
        "content": "가격 대비 스펙이 아주 훌륭한 가성비 종결템입니다.",
        "likes": 28
      },
      {
        "id": "rev-prod-23-8",
        "author": "권*린",
        "rating": 5,
        "date": "2026-09-07",
        "content": "패키징도 꼼꼼하고 충전 케이블 등 부속품 퀄리티도 좋아요.",
        "likes": 26
      },
      {
        "id": "rev-prod-23-9",
        "author": "황*준",
        "rating": 5,
        "date": "2026-09-04",
        "content": "업무 효율이 확실히 올라갔습니다. 재택근무 필수품이에요.",
        "likes": 25
      },
      {
        "id": "rev-prod-23-10",
        "author": "안*경",
        "rating": 5,
        "date": "2026-09-01",
        "content": "소음이나 발열이 적어서 장시간 사용해도 안심이 됩니다.",
        "likes": 23
      },
      {
        "id": "rev-prod-23-11",
        "author": "송*수",
        "rating": 5,
        "date": "2026-08-29",
        "content": "친구 추천으로 샀는데 왜 인기 많은지 알겠네요.",
        "likes": 22
      },
      {
        "id": "rev-prod-23-12",
        "author": "전*우",
        "rating": 5,
        "date": "2026-08-26",
        "content": "블루투스 페어링 속도가 1초 만에 바로 잡혀서 감탄했습니다.",
        "likes": 20
      },
      {
        "id": "rev-prod-23-13",
        "author": "홍*희",
        "rating": 4,
        "date": "2026-08-23",
        "content": "내구성이 튼튼해서 오래오래 고장 없이 쓸 수 있을 것 같아요.",
        "likes": 18
      },
      {
        "id": "rev-prod-23-14",
        "author": "유*진",
        "rating": 5,
        "date": "2026-08-20",
        "content": "기능이 다양하면서도 불필요한 군더더기가 없어 만족스럽습니다.",
        "likes": 17
      },
      {
        "id": "rev-prod-23-15",
        "author": "고*아",
        "rating": 5,
        "date": "2026-08-17",
        "content": "선물용으로 구매했는데 받는 사람이 너무 유용하다고 칭찬하네요.",
        "likes": 15
      },
      {
        "id": "rev-prod-23-16",
        "author": "문*태",
        "rating": 5,
        "date": "2026-08-14",
        "content": "화면이나 음질, 반응속도 등 기본기가 탄탄하게 잡혀있습니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-23-17",
        "author": "양*현",
        "rating": 5,
        "date": "2026-08-11",
        "content": "한 손에 쏙 들어오는 그립감과 컴팩트함이 아주 매력적입니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-23-18",
        "author": "손*호",
        "rating": 5,
        "date": "2026-08-08",
        "content": "기술력이 뛰어난 게 느껴지는 완성도 높은 IT 디바이스입니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-23-19",
        "author": "배*훈",
        "rating": 4,
        "date": "2026-08-05",
        "content": "이지샵 디지털 제품은 항상 믿고 구매하게 됩니다.",
        "likes": 9
      },
      {
        "id": "rev-prod-23-20",
        "author": "백*서",
        "rating": 5,
        "date": "2026-08-02",
        "content": "별 5개가 아깝지 않은 최고의 디지털 가전입니다. 강추!",
        "likes": 7
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-23-1",
        "author": "노*은",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-24",
    "name": "스마트 미니 휴대용 빔프로젝터 FHD 1080P",
    "category": "디지털 / 가전",
    "categoryId": "cat-digital",
    "price": 189000,
    "originalPrice": 259000,
    "discountRate": 27,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 41,
    "isBest": true,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": true,
    "thumbnail": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "안드로이드 OS 자체 탑재, 오토 포커스 & 자동 키스톤, 최대 150인치 대화면",
    "description": "<h3>안드로이드 OS 자체 탑재, 오토 포커스 & 자동 키스톤, 최대 150인치 대화면</h3>\n<p>스마트 미니 휴대용 빔프로젝터 FHD 1080P은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80\" alt=\"스마트 미니 휴대용 빔프로젝터 FHD 1080P 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">스마트 미니 휴대용 빔프로젝터 FHD 1080P의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80\" alt=\"스마트 미니 휴대용 빔프로젝터 FHD 1080P 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80\" alt=\"스마트 미니 휴대용 빔프로젝터 FHD 1080P 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "스노우 화이트",
        "stock": 20
      },
      {
        "name": "다크 그레이",
        "stock": 15
      }
    ],
    "specs": {
      "해상도": "Native 1080P FHD",
      "밝기": "350 ANSI 루멘",
      "스피커": "Hi-Fi 스테레오 5W"
    },
    "reviews": [
      {
        "id": "rev-prod-24-1",
        "author": "허*은",
        "rating": 4,
        "date": "2026-09-27",
        "content": "스마트 미니 휴대용 빔프로젝터 FHD 1080P 성능이 기대 이상으로 훌륭합니다. 마감도 깔끔해요.",
        "likes": 40
      },
      {
        "id": "rev-prod-24-2",
        "author": "노*윤",
        "rating": 5,
        "date": "2026-09-24",
        "content": "연결이 빠르고 끊김 없이 안정적으로 동작해서 너무 편합니다.",
        "likes": 38
      },
      {
        "id": "rev-prod-24-3",
        "author": "남*민",
        "rating": 5,
        "date": "2026-09-21",
        "content": "디자인이 모던하고 미니멀해서 데스크테리어에 찰떡이에요.",
        "likes": 36
      },
      {
        "id": "rev-prod-24-4",
        "author": "심*지",
        "rating": 5,
        "date": "2026-09-18",
        "content": "배터리가 오래가서 충전 스트레스 없이 쓰고 있습니다.",
        "likes": 35
      },
      {
        "id": "rev-prod-24-5",
        "author": "김*정",
        "rating": 5,
        "date": "2026-09-15",
        "content": "버튼 조작감과 인터페이스가 직관적이라 사용하기 쉽네요.",
        "likes": 33
      },
      {
        "id": "rev-prod-24-6",
        "author": "이*영",
        "rating": 5,
        "date": "2026-09-12",
        "content": "무게가 가벼워서 휴대하고 다니기에 부담이 전혀 없습니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-24-7",
        "author": "박*원",
        "rating": 4,
        "date": "2026-09-09",
        "content": "가격 대비 스펙이 아주 훌륭한 가성비 종결템입니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-24-8",
        "author": "최*린",
        "rating": 5,
        "date": "2026-09-06",
        "content": "패키징도 꼼꼼하고 충전 케이블 등 부속품 퀄리티도 좋아요.",
        "likes": 28
      },
      {
        "id": "rev-prod-24-9",
        "author": "정*준",
        "rating": 5,
        "date": "2026-09-03",
        "content": "업무 효율이 확실히 올라갔습니다. 재택근무 필수품이에요.",
        "likes": 27
      },
      {
        "id": "rev-prod-24-10",
        "author": "강*경",
        "rating": 5,
        "date": "2026-08-31",
        "content": "소음이나 발열이 적어서 장시간 사용해도 안심이 됩니다.",
        "likes": 25
      },
      {
        "id": "rev-prod-24-11",
        "author": "조*수",
        "rating": 5,
        "date": "2026-08-28",
        "content": "친구 추천으로 샀는데 왜 인기 많은지 알겠네요.",
        "likes": 24
      },
      {
        "id": "rev-prod-24-12",
        "author": "윤*우",
        "rating": 5,
        "date": "2026-08-25",
        "content": "블루투스 페어링 속도가 1초 만에 바로 잡혀서 감탄했습니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-24-13",
        "author": "장*희",
        "rating": 4,
        "date": "2026-08-22",
        "content": "내구성이 튼튼해서 오래오래 고장 없이 쓸 수 있을 것 같아요.",
        "likes": 20
      },
      {
        "id": "rev-prod-24-14",
        "author": "임*진",
        "rating": 5,
        "date": "2026-08-19",
        "content": "기능이 다양하면서도 불필요한 군더더기가 없어 만족스럽습니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-24-15",
        "author": "한*아",
        "rating": 5,
        "date": "2026-08-16",
        "content": "선물용으로 구매했는데 받는 사람이 너무 유용하다고 칭찬하네요.",
        "likes": 17
      },
      {
        "id": "rev-prod-24-16",
        "author": "오*태",
        "rating": 5,
        "date": "2026-08-13",
        "content": "화면이나 음질, 반응속도 등 기본기가 탄탄하게 잡혀있습니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-24-17",
        "author": "서*현",
        "rating": 5,
        "date": "2026-08-10",
        "content": "한 손에 쏙 들어오는 그립감과 컴팩트함이 아주 매력적입니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-24-18",
        "author": "신*호",
        "rating": 5,
        "date": "2026-08-07",
        "content": "기술력이 뛰어난 게 느껴지는 완성도 높은 IT 디바이스입니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-24-19",
        "author": "권*훈",
        "rating": 4,
        "date": "2026-08-04",
        "content": "이지샵 디지털 제품은 항상 믿고 구매하게 됩니다.",
        "likes": 11
      },
      {
        "id": "rev-prod-24-20",
        "author": "황*서",
        "rating": 5,
        "date": "2026-08-01",
        "content": "별 5개가 아깝지 않은 최고의 디지털 가전입니다. 강추!",
        "likes": 9
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-24-1",
        "author": "남*윤",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-25",
    "name": "글로우 리바이탈라이징 나이트 앰플 세럼 50ml",
    "category": "뷰티 / 케어",
    "categoryId": "cat-beauty",
    "price": 46000,
    "originalPrice": 68000,
    "discountRate": 32,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 48,
    "isBest": true,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "8중 히알루론산 & 펩타이드 콤플렉스, 밤사이 되살아나는 탄력 수분 광채",
    "description": "<h3>8중 히알루론산 & 펩타이드 콤플렉스, 밤사이 되살아나는 탄력 수분 광채</h3>\n<p>글로우 리바이탈라이징 나이트 앰플 세럼 50ml은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80\" alt=\"글로우 리바이탈라이징 나이트 앰플 세럼 50ml 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">글로우 리바이탈라이징 나이트 앰플 세럼 50ml의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80\" alt=\"글로우 리바이탈라이징 나이트 앰플 세럼 50ml 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80\" alt=\"글로우 리바이탈라이징 나이트 앰플 세럼 50ml 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "단품 50ml",
        "stock": 50
      },
      {
        "name": "기획세트 (50ml + 미니어처 15ml)",
        "stock": 30
      }
    ],
    "specs": {
      "용량": "50ml",
      "피부타입": "모든 피부용 (민감성 테스트 완료)"
    },
    "reviews": [
      {
        "id": "rev-prod-25-1",
        "author": "안*은",
        "rating": 4,
        "date": "2026-09-26",
        "content": "글로우 리바이탈라이징 나이트 앰플 세럼 50ml 바르자마자 피부에 쏙 흡수되고 촉촉함이 오래가요.",
        "likes": 42
      },
      {
        "id": "rev-prod-25-2",
        "author": "송*윤",
        "rating": 5,
        "date": "2026-09-23",
        "content": "속건조가 심한 편인데 이거 바르고 당김이 싹 사라졌습니다.",
        "likes": 40
      },
      {
        "id": "rev-prod-25-3",
        "author": "전*민",
        "rating": 5,
        "date": "2026-09-20",
        "content": "순한 성분이라 민감한 제 피부에도 자극 없이 편안하네요.",
        "likes": 38
      },
      {
        "id": "rev-prod-25-4",
        "author": "홍*지",
        "rating": 5,
        "date": "2026-09-17",
        "content": "다음날 아침 화장이 들뜸 없이 찰떡같이 잘 먹어서 감동했어요.",
        "likes": 37
      },
      {
        "id": "rev-prod-25-5",
        "author": "유*정",
        "rating": 5,
        "date": "2026-09-14",
        "content": "향이 인공적이지 않고 은은해서 스킨케어할 때 힐링됩니다.",
        "likes": 35
      },
      {
        "id": "rev-prod-25-6",
        "author": "고*영",
        "rating": 5,
        "date": "2026-09-11",
        "content": "끈적임 없이 산뜻하게 마무리되어 계절 불문 데일리로 좋아요.",
        "likes": 34
      },
      {
        "id": "rev-prod-25-7",
        "author": "문*원",
        "rating": 4,
        "date": "2026-09-08",
        "content": "피부 결이 매끄러워지고 톤이 한층 맑아진 느낌입니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-25-8",
        "author": "양*린",
        "rating": 5,
        "date": "2026-09-05",
        "content": "용기도 위생적이고 양 조절하기 쉬워서 사용하기 편합니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-25-9",
        "author": "손*준",
        "rating": 5,
        "date": "2026-09-02",
        "content": "용량 대비 가격도 착하고 성분도 착해서 대만족이에요.",
        "likes": 29
      },
      {
        "id": "rev-prod-25-10",
        "author": "배*경",
        "rating": 5,
        "date": "2026-08-30",
        "content": "어머니께 선물해 드렸는데 너무 좋다고 또 사달라고 하셨어요.",
        "likes": 27
      },
      {
        "id": "rev-prod-25-11",
        "author": "백*수",
        "rating": 5,
        "date": "2026-08-27",
        "content": "붉은기 진정과 보습 장벽 강화에 확실히 효과를 봤습니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-25-12",
        "author": "허*우",
        "rating": 5,
        "date": "2026-08-24",
        "content": "비건 인증 제품이라 안심하고 온 가족이 함께 쓰고 있습니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-25-13",
        "author": "노*희",
        "rating": 4,
        "date": "2026-08-21",
        "content": "발림성이 부드럽고 소량으로도 얼굴 전체에 촉촉하게 펴 발려요.",
        "likes": 22
      },
      {
        "id": "rev-prod-25-14",
        "author": "남*진",
        "rating": 5,
        "date": "2026-08-18",
        "content": "벌써 2통째 비우고 있는 저의 찐 정착템입니다.",
        "likes": 21
      },
      {
        "id": "rev-prod-25-15",
        "author": "심*아",
        "rating": 5,
        "date": "2026-08-15",
        "content": "피부과 케어 받은 것처럼 피부가 쫀쫀하고 탄력 있어 보여요.",
        "likes": 19
      },
      {
        "id": "rev-prod-25-16",
        "author": "김*태",
        "rating": 5,
        "date": "2026-08-12",
        "content": "선물 포장도 예쁘게 와서 생일 선물용으로도 완벽합니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-25-17",
        "author": "이*현",
        "rating": 5,
        "date": "2026-08-09",
        "content": "유수분 밸런스를 딱 맞춰줘서 번들거림 없이 촉촉합니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-25-18",
        "author": "박*호",
        "rating": 5,
        "date": "2026-08-06",
        "content": "기초 라인 이것저것 방황하다가 드디어 인생템 정착했습니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-25-19",
        "author": "최*훈",
        "rating": 4,
        "date": "2026-08-03",
        "content": "트러블 유발 없이 순하게 피부 컨디션을 끌어올려 줍니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-25-20",
        "author": "정*서",
        "rating": 5,
        "date": "2026-07-31",
        "content": "피부 고민 있으신 분들은 꼭 한번 써보세요. 강력 추천!",
        "likes": 11
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-25-1",
        "author": "심*민",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-26",
    "name": "비건 세라마이드 보습 장벽 수분크림 100ml",
    "category": "뷰티 / 케어",
    "categoryId": "cat-beauty",
    "price": 34000,
    "originalPrice": 48000,
    "discountRate": 29,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 55,
    "isBest": false,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "100시간 보습 지속력 임상 완료, 5종 세라마이드로 무너진 피부 장벽 급속 리셋",
    "description": "<h3>100시간 보습 지속력 임상 완료, 5종 세라마이드로 무너진 피부 장벽 급속 리셋</h3>\n<p>비건 세라마이드 보습 장벽 수분크림 100ml은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80\" alt=\"비건 세라마이드 보습 장벽 수분크림 100ml 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">비건 세라마이드 보습 장벽 수분크림 100ml의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80\" alt=\"비건 세라마이드 보습 장벽 수분크림 100ml 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80\" alt=\"비건 세라마이드 보습 장벽 수분크림 100ml 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "본품 100ml 튜브형",
        "stock": 45
      },
      {
        "name": "대용량 200ml 펌프형",
        "stock": 20
      }
    ],
    "specs": {
      "용량": "100ml / 200ml",
      "인증": "이탈리아 V-LABEL 비건 인증"
    },
    "reviews": [
      {
        "id": "rev-prod-26-1",
        "author": "강*은",
        "rating": 4,
        "date": "2026-09-25",
        "content": "비건 세라마이드 보습 장벽 수분크림 100ml 바르자마자 피부에 쏙 흡수되고 촉촉함이 오래가요.",
        "likes": 34
      },
      {
        "id": "rev-prod-26-2",
        "author": "조*윤",
        "rating": 5,
        "date": "2026-09-22",
        "content": "속건조가 심한 편인데 이거 바르고 당김이 싹 사라졌습니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-26-3",
        "author": "윤*민",
        "rating": 5,
        "date": "2026-09-19",
        "content": "순한 성분이라 민감한 제 피부에도 자극 없이 편안하네요.",
        "likes": 30
      },
      {
        "id": "rev-prod-26-4",
        "author": "장*지",
        "rating": 5,
        "date": "2026-09-16",
        "content": "다음날 아침 화장이 들뜸 없이 찰떡같이 잘 먹어서 감동했어요.",
        "likes": 29
      },
      {
        "id": "rev-prod-26-5",
        "author": "임*정",
        "rating": 5,
        "date": "2026-09-13",
        "content": "향이 인공적이지 않고 은은해서 스킨케어할 때 힐링됩니다.",
        "likes": 27
      },
      {
        "id": "rev-prod-26-6",
        "author": "한*영",
        "rating": 5,
        "date": "2026-09-10",
        "content": "끈적임 없이 산뜻하게 마무리되어 계절 불문 데일리로 좋아요.",
        "likes": 26
      },
      {
        "id": "rev-prod-26-7",
        "author": "오*원",
        "rating": 4,
        "date": "2026-09-07",
        "content": "피부 결이 매끄러워지고 톤이 한층 맑아진 느낌입니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-26-8",
        "author": "서*린",
        "rating": 5,
        "date": "2026-09-04",
        "content": "용기도 위생적이고 양 조절하기 쉬워서 사용하기 편합니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-26-9",
        "author": "신*준",
        "rating": 5,
        "date": "2026-09-01",
        "content": "용량 대비 가격도 착하고 성분도 착해서 대만족이에요.",
        "likes": 21
      },
      {
        "id": "rev-prod-26-10",
        "author": "권*경",
        "rating": 5,
        "date": "2026-08-29",
        "content": "어머니께 선물해 드렸는데 너무 좋다고 또 사달라고 하셨어요.",
        "likes": 19
      },
      {
        "id": "rev-prod-26-11",
        "author": "황*수",
        "rating": 5,
        "date": "2026-08-26",
        "content": "붉은기 진정과 보습 장벽 강화에 확실히 효과를 봤습니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-26-12",
        "author": "안*우",
        "rating": 5,
        "date": "2026-08-23",
        "content": "비건 인증 제품이라 안심하고 온 가족이 함께 쓰고 있습니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-26-13",
        "author": "송*희",
        "rating": 4,
        "date": "2026-08-20",
        "content": "발림성이 부드럽고 소량으로도 얼굴 전체에 촉촉하게 펴 발려요.",
        "likes": 14
      },
      {
        "id": "rev-prod-26-14",
        "author": "전*진",
        "rating": 5,
        "date": "2026-08-17",
        "content": "벌써 2통째 비우고 있는 저의 찐 정착템입니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-26-15",
        "author": "홍*아",
        "rating": 5,
        "date": "2026-08-14",
        "content": "피부과 케어 받은 것처럼 피부가 쫀쫀하고 탄력 있어 보여요.",
        "likes": 11
      },
      {
        "id": "rev-prod-26-16",
        "author": "유*태",
        "rating": 5,
        "date": "2026-08-11",
        "content": "선물 포장도 예쁘게 와서 생일 선물용으로도 완벽합니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-26-17",
        "author": "고*현",
        "rating": 5,
        "date": "2026-08-08",
        "content": "유수분 밸런스를 딱 맞춰줘서 번들거림 없이 촉촉합니다.",
        "likes": 8
      },
      {
        "id": "rev-prod-26-18",
        "author": "문*호",
        "rating": 5,
        "date": "2026-08-05",
        "content": "기초 라인 이것저것 방황하다가 드디어 인생템 정착했습니다.",
        "likes": 6
      },
      {
        "id": "rev-prod-26-19",
        "author": "양*훈",
        "rating": 4,
        "date": "2026-08-02",
        "content": "트러블 유발 없이 순하게 피부 컨디션을 끌어올려 줍니다.",
        "likes": 5
      },
      {
        "id": "rev-prod-26-20",
        "author": "손*서",
        "rating": 5,
        "date": "2026-07-30",
        "content": "피부 고민 있으신 분들은 꼭 한번 써보세요. 강력 추천!",
        "likes": 3
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-26-1",
        "author": "김*지",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-27",
    "name": "시카 판테놀 급속 진정 토너 패드 (80매 대용량)",
    "category": "뷰티 / 케어",
    "categoryId": "cat-beauty",
    "price": 24000,
    "originalPrice": 32000,
    "discountRate": 25,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 62,
    "isBest": true,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "병풀추출물 85% 함유, 100% 순면 엠보면과 부드러운 매끈면 듀얼 케어",
    "description": "<h3>병풀추출물 85% 함유, 100% 순면 엠보면과 부드러운 매끈면 듀얼 케어</h3>\n<p>시카 판테놀 급속 진정 토너 패드 (80매 대용량)은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80\" alt=\"시카 판테놀 급속 진정 토너 패드 (80매 대용량) 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">시카 판테놀 급속 진정 토너 패드 (80매 대용량)의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80\" alt=\"시카 판테놀 급속 진정 토너 패드 (80매 대용량) 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80\" alt=\"시카 판테놀 급속 진정 토너 패드 (80매 대용량) 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "본품 80매 (에센스 200ml)",
        "stock": 60
      },
      {
        "name": "2개 묶음 세트 (80매 x 2)",
        "stock": 35
      }
    ],
    "specs": {
      "용량": "80매 (200ml)",
      "패드원단": "100% 무표백 순면"
    },
    "reviews": [
      {
        "id": "rev-prod-27-1",
        "author": "배*은",
        "rating": 4,
        "date": "2026-09-24",
        "content": "시카 판테놀 급속 진정 토너 패드 (80매 대용량) 바르자마자 피부에 쏙 흡수되고 촉촉함이 오래가요.",
        "likes": 36
      },
      {
        "id": "rev-prod-27-2",
        "author": "백*윤",
        "rating": 5,
        "date": "2026-09-21",
        "content": "속건조가 심한 편인데 이거 바르고 당김이 싹 사라졌습니다.",
        "likes": 34
      },
      {
        "id": "rev-prod-27-3",
        "author": "허*민",
        "rating": 5,
        "date": "2026-09-18",
        "content": "순한 성분이라 민감한 제 피부에도 자극 없이 편안하네요.",
        "likes": 32
      },
      {
        "id": "rev-prod-27-4",
        "author": "노*지",
        "rating": 5,
        "date": "2026-09-15",
        "content": "다음날 아침 화장이 들뜸 없이 찰떡같이 잘 먹어서 감동했어요.",
        "likes": 31
      },
      {
        "id": "rev-prod-27-5",
        "author": "남*정",
        "rating": 5,
        "date": "2026-09-12",
        "content": "향이 인공적이지 않고 은은해서 스킨케어할 때 힐링됩니다.",
        "likes": 29
      },
      {
        "id": "rev-prod-27-6",
        "author": "심*영",
        "rating": 5,
        "date": "2026-09-09",
        "content": "끈적임 없이 산뜻하게 마무리되어 계절 불문 데일리로 좋아요.",
        "likes": 28
      },
      {
        "id": "rev-prod-27-7",
        "author": "김*원",
        "rating": 4,
        "date": "2026-09-06",
        "content": "피부 결이 매끄러워지고 톤이 한층 맑아진 느낌입니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-27-8",
        "author": "이*린",
        "rating": 5,
        "date": "2026-09-03",
        "content": "용기도 위생적이고 양 조절하기 쉬워서 사용하기 편합니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-27-9",
        "author": "박*준",
        "rating": 5,
        "date": "2026-08-31",
        "content": "용량 대비 가격도 착하고 성분도 착해서 대만족이에요.",
        "likes": 23
      },
      {
        "id": "rev-prod-27-10",
        "author": "최*경",
        "rating": 5,
        "date": "2026-08-28",
        "content": "어머니께 선물해 드렸는데 너무 좋다고 또 사달라고 하셨어요.",
        "likes": 21
      },
      {
        "id": "rev-prod-27-11",
        "author": "정*수",
        "rating": 5,
        "date": "2026-08-25",
        "content": "붉은기 진정과 보습 장벽 강화에 확실히 효과를 봤습니다.",
        "likes": 20
      },
      {
        "id": "rev-prod-27-12",
        "author": "강*우",
        "rating": 5,
        "date": "2026-08-22",
        "content": "비건 인증 제품이라 안심하고 온 가족이 함께 쓰고 있습니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-27-13",
        "author": "조*희",
        "rating": 4,
        "date": "2026-08-19",
        "content": "발림성이 부드럽고 소량으로도 얼굴 전체에 촉촉하게 펴 발려요.",
        "likes": 16
      },
      {
        "id": "rev-prod-27-14",
        "author": "윤*진",
        "rating": 5,
        "date": "2026-08-16",
        "content": "벌써 2통째 비우고 있는 저의 찐 정착템입니다.",
        "likes": 15
      },
      {
        "id": "rev-prod-27-15",
        "author": "장*아",
        "rating": 5,
        "date": "2026-08-13",
        "content": "피부과 케어 받은 것처럼 피부가 쫀쫀하고 탄력 있어 보여요.",
        "likes": 13
      },
      {
        "id": "rev-prod-27-16",
        "author": "임*태",
        "rating": 5,
        "date": "2026-08-10",
        "content": "선물 포장도 예쁘게 와서 생일 선물용으로도 완벽합니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-27-17",
        "author": "한*현",
        "rating": 5,
        "date": "2026-08-07",
        "content": "유수분 밸런스를 딱 맞춰줘서 번들거림 없이 촉촉합니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-27-18",
        "author": "오*호",
        "rating": 5,
        "date": "2026-08-04",
        "content": "기초 라인 이것저것 방황하다가 드디어 인생템 정착했습니다.",
        "likes": 8
      },
      {
        "id": "rev-prod-27-19",
        "author": "서*훈",
        "rating": 4,
        "date": "2026-08-01",
        "content": "트러블 유발 없이 순하게 피부 컨디션을 끌어올려 줍니다.",
        "likes": 7
      },
      {
        "id": "rev-prod-27-20",
        "author": "신*서",
        "rating": 5,
        "date": "2026-07-29",
        "content": "피부 고민 있으신 분들은 꼭 한번 써보세요. 강력 추천!",
        "likes": 5
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-27-1",
        "author": "이*정",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-28",
    "name": "비타민C 브라이트닝 수분 선크림 SPF50+ PA++++ (50ml)",
    "category": "뷰티 / 케어",
    "categoryId": "cat-beauty",
    "price": 26000,
    "originalPrice": 35000,
    "discountRate": 26,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 69,
    "isBest": false,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "백탁 없는 투명 수분 로션 제형, 순수 비타민C 유도체로 자외선 차단과 톤업을 동시에",
    "description": "<h3>백탁 없는 투명 수분 로션 제형, 순수 비타민C 유도체로 자외선 차단과 톤업을 동시에</h3>\n<p>비타민C 브라이트닝 수분 선크림 SPF50+ PA++++ (50ml)은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80\" alt=\"비타민C 브라이트닝 수분 선크림 SPF50+ PA++++ (50ml) 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">비타민C 브라이트닝 수분 선크림 SPF50+ PA++++ (50ml)의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80\" alt=\"비타민C 브라이트닝 수분 선크림 SPF50+ PA++++ (50ml) 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80\" alt=\"비타민C 브라이트닝 수분 선크림 SPF50+ PA++++ (50ml) 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "단품 50ml",
        "stock": 50
      },
      {
        "name": "1+1 더블 기획세트 (50ml x 2)",
        "stock": 40
      }
    ],
    "specs": {
      "차단지수": "SPF50+ PA++++",
      "제형": "수분 에센스 로션"
    },
    "reviews": [
      {
        "id": "rev-prod-28-1",
        "author": "권*은",
        "rating": 4,
        "date": "2026-09-23",
        "content": "비타민C 브라이트닝 수분 선크림 SPF50+ PA++++ (50ml) 바르자마자 피부에 쏙 흡수되고 촉촉함이 오래가요.",
        "likes": 38
      },
      {
        "id": "rev-prod-28-2",
        "author": "황*윤",
        "rating": 5,
        "date": "2026-09-20",
        "content": "속건조가 심한 편인데 이거 바르고 당김이 싹 사라졌습니다.",
        "likes": 36
      },
      {
        "id": "rev-prod-28-3",
        "author": "안*민",
        "rating": 5,
        "date": "2026-09-17",
        "content": "순한 성분이라 민감한 제 피부에도 자극 없이 편안하네요.",
        "likes": 34
      },
      {
        "id": "rev-prod-28-4",
        "author": "송*지",
        "rating": 5,
        "date": "2026-09-14",
        "content": "다음날 아침 화장이 들뜸 없이 찰떡같이 잘 먹어서 감동했어요.",
        "likes": 33
      },
      {
        "id": "rev-prod-28-5",
        "author": "전*정",
        "rating": 5,
        "date": "2026-09-11",
        "content": "향이 인공적이지 않고 은은해서 스킨케어할 때 힐링됩니다.",
        "likes": 31
      },
      {
        "id": "rev-prod-28-6",
        "author": "홍*영",
        "rating": 5,
        "date": "2026-09-08",
        "content": "끈적임 없이 산뜻하게 마무리되어 계절 불문 데일리로 좋아요.",
        "likes": 30
      },
      {
        "id": "rev-prod-28-7",
        "author": "유*원",
        "rating": 4,
        "date": "2026-09-05",
        "content": "피부 결이 매끄러워지고 톤이 한층 맑아진 느낌입니다.",
        "likes": 28
      },
      {
        "id": "rev-prod-28-8",
        "author": "고*린",
        "rating": 5,
        "date": "2026-09-02",
        "content": "용기도 위생적이고 양 조절하기 쉬워서 사용하기 편합니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-28-9",
        "author": "문*준",
        "rating": 5,
        "date": "2026-08-30",
        "content": "용량 대비 가격도 착하고 성분도 착해서 대만족이에요.",
        "likes": 25
      },
      {
        "id": "rev-prod-28-10",
        "author": "양*경",
        "rating": 5,
        "date": "2026-08-27",
        "content": "어머니께 선물해 드렸는데 너무 좋다고 또 사달라고 하셨어요.",
        "likes": 23
      },
      {
        "id": "rev-prod-28-11",
        "author": "손*수",
        "rating": 5,
        "date": "2026-08-24",
        "content": "붉은기 진정과 보습 장벽 강화에 확실히 효과를 봤습니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-28-12",
        "author": "배*우",
        "rating": 5,
        "date": "2026-08-21",
        "content": "비건 인증 제품이라 안심하고 온 가족이 함께 쓰고 있습니다.",
        "likes": 20
      },
      {
        "id": "rev-prod-28-13",
        "author": "백*희",
        "rating": 4,
        "date": "2026-08-18",
        "content": "발림성이 부드럽고 소량으로도 얼굴 전체에 촉촉하게 펴 발려요.",
        "likes": 18
      },
      {
        "id": "rev-prod-28-14",
        "author": "허*진",
        "rating": 5,
        "date": "2026-08-15",
        "content": "벌써 2통째 비우고 있는 저의 찐 정착템입니다.",
        "likes": 17
      },
      {
        "id": "rev-prod-28-15",
        "author": "노*아",
        "rating": 5,
        "date": "2026-08-12",
        "content": "피부과 케어 받은 것처럼 피부가 쫀쫀하고 탄력 있어 보여요.",
        "likes": 15
      },
      {
        "id": "rev-prod-28-16",
        "author": "남*태",
        "rating": 5,
        "date": "2026-08-09",
        "content": "선물 포장도 예쁘게 와서 생일 선물용으로도 완벽합니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-28-17",
        "author": "심*현",
        "rating": 5,
        "date": "2026-08-06",
        "content": "유수분 밸런스를 딱 맞춰줘서 번들거림 없이 촉촉합니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-28-18",
        "author": "김*호",
        "rating": 5,
        "date": "2026-08-03",
        "content": "기초 라인 이것저것 방황하다가 드디어 인생템 정착했습니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-28-19",
        "author": "이*훈",
        "rating": 4,
        "date": "2026-07-31",
        "content": "트러블 유발 없이 순하게 피부 컨디션을 끌어올려 줍니다.",
        "likes": 9
      },
      {
        "id": "rev-prod-28-20",
        "author": "박*서",
        "rating": 5,
        "date": "2026-07-28",
        "content": "피부 고민 있으신 분들은 꼭 한번 써보세요. 강력 추천!",
        "likes": 7
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-28-1",
        "author": "박*영",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-29",
    "name": "어성초 약산성 마이크로 딥 클렌징 폼 150ml",
    "category": "뷰티 / 케어",
    "categoryId": "cat-beauty",
    "price": 18000,
    "originalPrice": 24000,
    "discountRate": 25,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 76,
    "isBest": false,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "국내산 지리산 어성초 추출물 30%, 세안 후에도 당김 없는 pH 5.5 약산성 거품",
    "description": "<h3>국내산 지리산 어성초 추출물 30%, 세안 후에도 당김 없는 pH 5.5 약산성 거품</h3>\n<p>어성초 약산성 마이크로 딥 클렌징 폼 150ml은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80\" alt=\"어성초 약산성 마이크로 딥 클렌징 폼 150ml 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">어성초 약산성 마이크로 딥 클렌징 폼 150ml의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80\" alt=\"어성초 약산성 마이크로 딥 클렌징 폼 150ml 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80\" alt=\"어성초 약산성 마이크로 딥 클렌징 폼 150ml 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "본품 150ml",
        "stock": 60
      },
      {
        "name": "2개 세트 (150ml x 2)",
        "stock": 30
      }
    ],
    "specs": {
      "용량": "150ml",
      "pH": "5.5 약산성 포뮬러"
    },
    "reviews": [
      {
        "id": "rev-prod-29-1",
        "author": "최*은",
        "rating": 4,
        "date": "2026-09-29",
        "content": "어성초 약산성 마이크로 딥 클렌징 폼 150ml 바르자마자 피부에 쏙 흡수되고 촉촉함이 오래가요.",
        "likes": 40
      },
      {
        "id": "rev-prod-29-2",
        "author": "정*윤",
        "rating": 5,
        "date": "2026-09-26",
        "content": "속건조가 심한 편인데 이거 바르고 당김이 싹 사라졌습니다.",
        "likes": 38
      },
      {
        "id": "rev-prod-29-3",
        "author": "강*민",
        "rating": 5,
        "date": "2026-09-23",
        "content": "순한 성분이라 민감한 제 피부에도 자극 없이 편안하네요.",
        "likes": 36
      },
      {
        "id": "rev-prod-29-4",
        "author": "조*지",
        "rating": 5,
        "date": "2026-09-20",
        "content": "다음날 아침 화장이 들뜸 없이 찰떡같이 잘 먹어서 감동했어요.",
        "likes": 35
      },
      {
        "id": "rev-prod-29-5",
        "author": "윤*정",
        "rating": 5,
        "date": "2026-09-17",
        "content": "향이 인공적이지 않고 은은해서 스킨케어할 때 힐링됩니다.",
        "likes": 33
      },
      {
        "id": "rev-prod-29-6",
        "author": "장*영",
        "rating": 5,
        "date": "2026-09-14",
        "content": "끈적임 없이 산뜻하게 마무리되어 계절 불문 데일리로 좋아요.",
        "likes": 32
      },
      {
        "id": "rev-prod-29-7",
        "author": "임*원",
        "rating": 4,
        "date": "2026-09-11",
        "content": "피부 결이 매끄러워지고 톤이 한층 맑아진 느낌입니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-29-8",
        "author": "한*린",
        "rating": 5,
        "date": "2026-09-08",
        "content": "용기도 위생적이고 양 조절하기 쉬워서 사용하기 편합니다.",
        "likes": 28
      },
      {
        "id": "rev-prod-29-9",
        "author": "오*준",
        "rating": 5,
        "date": "2026-09-05",
        "content": "용량 대비 가격도 착하고 성분도 착해서 대만족이에요.",
        "likes": 27
      },
      {
        "id": "rev-prod-29-10",
        "author": "서*경",
        "rating": 5,
        "date": "2026-09-02",
        "content": "어머니께 선물해 드렸는데 너무 좋다고 또 사달라고 하셨어요.",
        "likes": 25
      },
      {
        "id": "rev-prod-29-11",
        "author": "신*수",
        "rating": 5,
        "date": "2026-08-30",
        "content": "붉은기 진정과 보습 장벽 강화에 확실히 효과를 봤습니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-29-12",
        "author": "권*우",
        "rating": 5,
        "date": "2026-08-27",
        "content": "비건 인증 제품이라 안심하고 온 가족이 함께 쓰고 있습니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-29-13",
        "author": "황*희",
        "rating": 4,
        "date": "2026-08-24",
        "content": "발림성이 부드럽고 소량으로도 얼굴 전체에 촉촉하게 펴 발려요.",
        "likes": 20
      },
      {
        "id": "rev-prod-29-14",
        "author": "안*진",
        "rating": 5,
        "date": "2026-08-21",
        "content": "벌써 2통째 비우고 있는 저의 찐 정착템입니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-29-15",
        "author": "송*아",
        "rating": 5,
        "date": "2026-08-18",
        "content": "피부과 케어 받은 것처럼 피부가 쫀쫀하고 탄력 있어 보여요.",
        "likes": 17
      },
      {
        "id": "rev-prod-29-16",
        "author": "전*태",
        "rating": 5,
        "date": "2026-08-15",
        "content": "선물 포장도 예쁘게 와서 생일 선물용으로도 완벽합니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-29-17",
        "author": "홍*현",
        "rating": 5,
        "date": "2026-08-12",
        "content": "유수분 밸런스를 딱 맞춰줘서 번들거림 없이 촉촉합니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-29-18",
        "author": "유*호",
        "rating": 5,
        "date": "2026-08-09",
        "content": "기초 라인 이것저것 방황하다가 드디어 인생템 정착했습니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-29-19",
        "author": "고*훈",
        "rating": 4,
        "date": "2026-08-06",
        "content": "트러블 유발 없이 순하게 피부 컨디션을 끌어올려 줍니다.",
        "likes": 11
      },
      {
        "id": "rev-prod-29-20",
        "author": "문*서",
        "rating": 5,
        "date": "2026-08-03",
        "content": "피부 고민 있으신 분들은 꼭 한번 써보세요. 강력 추천!",
        "likes": 9
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-29-1",
        "author": "최*원",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-30",
    "name": "골든 모로칸 아르간 헤어 리페어 오일 100ml",
    "category": "뷰티 / 케어",
    "categoryId": "cat-beauty",
    "price": 29000,
    "originalPrice": 42000,
    "discountRate": 31,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 33,
    "isBest": true,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "모로코 유기농 아르간 오일 100%, 끈적임 없는 실키한 흡수감과 살롱급 단백질 영양",
    "description": "<h3>모로코 유기농 아르간 오일 100%, 끈적임 없는 실키한 흡수감과 살롱급 단백질 영양</h3>\n<p>골든 모로칸 아르간 헤어 리페어 오일 100ml은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80\" alt=\"골든 모로칸 아르간 헤어 리페어 오일 100ml 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">골든 모로칸 아르간 헤어 리페어 오일 100ml의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80\" alt=\"골든 모로칸 아르간 헤어 리페어 오일 100ml 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80\" alt=\"골든 모로칸 아르간 헤어 리페어 오일 100ml 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "본품 100ml 펌프형",
        "stock": 45
      },
      {
        "name": "기획세트 (100ml + 30ml 미니)",
        "stock": 25
      }
    ],
    "specs": {
      "용량": "100ml",
      "주요성분": "유기농 아르간커넬오일, 케라틴 단백질"
    },
    "reviews": [
      {
        "id": "rev-prod-30-1",
        "author": "양*은",
        "rating": 4,
        "date": "2026-09-28",
        "content": "골든 모로칸 아르간 헤어 리페어 오일 100ml 바르자마자 피부에 쏙 흡수되고 촉촉함이 오래가요.",
        "likes": 42
      },
      {
        "id": "rev-prod-30-2",
        "author": "손*윤",
        "rating": 5,
        "date": "2026-09-25",
        "content": "속건조가 심한 편인데 이거 바르고 당김이 싹 사라졌습니다.",
        "likes": 40
      },
      {
        "id": "rev-prod-30-3",
        "author": "배*민",
        "rating": 5,
        "date": "2026-09-22",
        "content": "순한 성분이라 민감한 제 피부에도 자극 없이 편안하네요.",
        "likes": 38
      },
      {
        "id": "rev-prod-30-4",
        "author": "백*지",
        "rating": 5,
        "date": "2026-09-19",
        "content": "다음날 아침 화장이 들뜸 없이 찰떡같이 잘 먹어서 감동했어요.",
        "likes": 37
      },
      {
        "id": "rev-prod-30-5",
        "author": "허*정",
        "rating": 5,
        "date": "2026-09-16",
        "content": "향이 인공적이지 않고 은은해서 스킨케어할 때 힐링됩니다.",
        "likes": 35
      },
      {
        "id": "rev-prod-30-6",
        "author": "노*영",
        "rating": 5,
        "date": "2026-09-13",
        "content": "끈적임 없이 산뜻하게 마무리되어 계절 불문 데일리로 좋아요.",
        "likes": 34
      },
      {
        "id": "rev-prod-30-7",
        "author": "남*원",
        "rating": 4,
        "date": "2026-09-10",
        "content": "피부 결이 매끄러워지고 톤이 한층 맑아진 느낌입니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-30-8",
        "author": "심*린",
        "rating": 5,
        "date": "2026-09-07",
        "content": "용기도 위생적이고 양 조절하기 쉬워서 사용하기 편합니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-30-9",
        "author": "김*준",
        "rating": 5,
        "date": "2026-09-04",
        "content": "용량 대비 가격도 착하고 성분도 착해서 대만족이에요.",
        "likes": 29
      },
      {
        "id": "rev-prod-30-10",
        "author": "이*경",
        "rating": 5,
        "date": "2026-09-01",
        "content": "어머니께 선물해 드렸는데 너무 좋다고 또 사달라고 하셨어요.",
        "likes": 27
      },
      {
        "id": "rev-prod-30-11",
        "author": "박*수",
        "rating": 5,
        "date": "2026-08-29",
        "content": "붉은기 진정과 보습 장벽 강화에 확실히 효과를 봤습니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-30-12",
        "author": "최*우",
        "rating": 5,
        "date": "2026-08-26",
        "content": "비건 인증 제품이라 안심하고 온 가족이 함께 쓰고 있습니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-30-13",
        "author": "정*희",
        "rating": 4,
        "date": "2026-08-23",
        "content": "발림성이 부드럽고 소량으로도 얼굴 전체에 촉촉하게 펴 발려요.",
        "likes": 22
      },
      {
        "id": "rev-prod-30-14",
        "author": "강*진",
        "rating": 5,
        "date": "2026-08-20",
        "content": "벌써 2통째 비우고 있는 저의 찐 정착템입니다.",
        "likes": 21
      },
      {
        "id": "rev-prod-30-15",
        "author": "조*아",
        "rating": 5,
        "date": "2026-08-17",
        "content": "피부과 케어 받은 것처럼 피부가 쫀쫀하고 탄력 있어 보여요.",
        "likes": 19
      },
      {
        "id": "rev-prod-30-16",
        "author": "윤*태",
        "rating": 5,
        "date": "2026-08-14",
        "content": "선물 포장도 예쁘게 와서 생일 선물용으로도 완벽합니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-30-17",
        "author": "장*현",
        "rating": 5,
        "date": "2026-08-11",
        "content": "유수분 밸런스를 딱 맞춰줘서 번들거림 없이 촉촉합니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-30-18",
        "author": "임*호",
        "rating": 5,
        "date": "2026-08-08",
        "content": "기초 라인 이것저것 방황하다가 드디어 인생템 정착했습니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-30-19",
        "author": "한*훈",
        "rating": 4,
        "date": "2026-08-05",
        "content": "트러블 유발 없이 순하게 피부 컨디션을 끌어올려 줍니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-30-20",
        "author": "오*서",
        "rating": 5,
        "date": "2026-08-02",
        "content": "피부 고민 있으신 분들은 꼭 한번 써보세요. 강력 추천!",
        "likes": 11
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-30-1",
        "author": "정*린",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-31",
    "name": "바쿠치올 & 펩타이드 주름 개선 아이크림 30ml",
    "category": "뷰티 / 케어",
    "categoryId": "cat-beauty",
    "price": 38000,
    "originalPrice": 52000,
    "discountRate": 27,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 40,
    "isBest": false,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "차세대 식물성 레티놀 바쿠치올 1%, 눈가 주름과 다크서클을 케어하는 저자극 아이 트리트먼트",
    "description": "<h3>차세대 식물성 레티놀 바쿠치올 1%, 눈가 주름과 다크서클을 케어하는 저자극 아이 트리트먼트</h3>\n<p>바쿠치올 & 펩타이드 주름 개선 아이크림 30ml은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80\" alt=\"바쿠치올 & 펩타이드 주름 개선 아이크림 30ml 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">바쿠치올 & 펩타이드 주름 개선 아이크림 30ml의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80\" alt=\"바쿠치올 & 펩타이드 주름 개선 아이크림 30ml 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80\" alt=\"바쿠치올 & 펩타이드 주름 개선 아이크림 30ml 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "본품 30ml 메탈 어플리케이터형",
        "stock": 35
      },
      {
        "name": "2개 세트 (30ml x 2)",
        "stock": 20
      }
    ],
    "specs": {
      "용량": "30ml",
      "기능성": "주름개선 / 미백 2중 기능성"
    },
    "reviews": [
      {
        "id": "rev-prod-31-1",
        "author": "서*은",
        "rating": 4,
        "date": "2026-09-27",
        "content": "바쿠치올 & 펩타이드 주름 개선 아이크림 30ml 바르자마자 피부에 쏙 흡수되고 촉촉함이 오래가요.",
        "likes": 34
      },
      {
        "id": "rev-prod-31-2",
        "author": "신*윤",
        "rating": 5,
        "date": "2026-09-24",
        "content": "속건조가 심한 편인데 이거 바르고 당김이 싹 사라졌습니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-31-3",
        "author": "권*민",
        "rating": 5,
        "date": "2026-09-21",
        "content": "순한 성분이라 민감한 제 피부에도 자극 없이 편안하네요.",
        "likes": 30
      },
      {
        "id": "rev-prod-31-4",
        "author": "황*지",
        "rating": 5,
        "date": "2026-09-18",
        "content": "다음날 아침 화장이 들뜸 없이 찰떡같이 잘 먹어서 감동했어요.",
        "likes": 29
      },
      {
        "id": "rev-prod-31-5",
        "author": "안*정",
        "rating": 5,
        "date": "2026-09-15",
        "content": "향이 인공적이지 않고 은은해서 스킨케어할 때 힐링됩니다.",
        "likes": 27
      },
      {
        "id": "rev-prod-31-6",
        "author": "송*영",
        "rating": 5,
        "date": "2026-09-12",
        "content": "끈적임 없이 산뜻하게 마무리되어 계절 불문 데일리로 좋아요.",
        "likes": 26
      },
      {
        "id": "rev-prod-31-7",
        "author": "전*원",
        "rating": 4,
        "date": "2026-09-09",
        "content": "피부 결이 매끄러워지고 톤이 한층 맑아진 느낌입니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-31-8",
        "author": "홍*린",
        "rating": 5,
        "date": "2026-09-06",
        "content": "용기도 위생적이고 양 조절하기 쉬워서 사용하기 편합니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-31-9",
        "author": "유*준",
        "rating": 5,
        "date": "2026-09-03",
        "content": "용량 대비 가격도 착하고 성분도 착해서 대만족이에요.",
        "likes": 21
      },
      {
        "id": "rev-prod-31-10",
        "author": "고*경",
        "rating": 5,
        "date": "2026-08-31",
        "content": "어머니께 선물해 드렸는데 너무 좋다고 또 사달라고 하셨어요.",
        "likes": 19
      },
      {
        "id": "rev-prod-31-11",
        "author": "문*수",
        "rating": 5,
        "date": "2026-08-28",
        "content": "붉은기 진정과 보습 장벽 강화에 확실히 효과를 봤습니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-31-12",
        "author": "양*우",
        "rating": 5,
        "date": "2026-08-25",
        "content": "비건 인증 제품이라 안심하고 온 가족이 함께 쓰고 있습니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-31-13",
        "author": "손*희",
        "rating": 4,
        "date": "2026-08-22",
        "content": "발림성이 부드럽고 소량으로도 얼굴 전체에 촉촉하게 펴 발려요.",
        "likes": 14
      },
      {
        "id": "rev-prod-31-14",
        "author": "배*진",
        "rating": 5,
        "date": "2026-08-19",
        "content": "벌써 2통째 비우고 있는 저의 찐 정착템입니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-31-15",
        "author": "백*아",
        "rating": 5,
        "date": "2026-08-16",
        "content": "피부과 케어 받은 것처럼 피부가 쫀쫀하고 탄력 있어 보여요.",
        "likes": 11
      },
      {
        "id": "rev-prod-31-16",
        "author": "허*태",
        "rating": 5,
        "date": "2026-08-13",
        "content": "선물 포장도 예쁘게 와서 생일 선물용으로도 완벽합니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-31-17",
        "author": "노*현",
        "rating": 5,
        "date": "2026-08-10",
        "content": "유수분 밸런스를 딱 맞춰줘서 번들거림 없이 촉촉합니다.",
        "likes": 8
      },
      {
        "id": "rev-prod-31-18",
        "author": "남*호",
        "rating": 5,
        "date": "2026-08-07",
        "content": "기초 라인 이것저것 방황하다가 드디어 인생템 정착했습니다.",
        "likes": 6
      },
      {
        "id": "rev-prod-31-19",
        "author": "심*훈",
        "rating": 4,
        "date": "2026-08-04",
        "content": "트러블 유발 없이 순하게 피부 컨디션을 끌어올려 줍니다.",
        "likes": 5
      },
      {
        "id": "rev-prod-31-20",
        "author": "김*서",
        "rating": 5,
        "date": "2026-08-01",
        "content": "피부 고민 있으신 분들은 꼭 한번 써보세요. 강력 추천!",
        "likes": 3
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-31-1",
        "author": "강*준",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-32",
    "name": "내추럴 올리브 & 시어버터 립 트리트먼트 밤 15g",
    "category": "뷰티 / 케어",
    "categoryId": "cat-beauty",
    "price": 14000,
    "originalPrice": 19000,
    "discountRate": 26,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 47,
    "isBest": false,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "스페인 유기농 엑스트라 버진 올리브유와 아프리카 시어버터의 극강 입술 보습",
    "description": "<h3>스페인 유기농 엑스트라 버진 올리브유와 아프리카 시어버터의 극강 입술 보습</h3>\n<p>내추럴 올리브 & 시어버터 립 트리트먼트 밤 15g은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80\" alt=\"내추럴 올리브 & 시어버터 립 트리트먼트 밤 15g 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">내추럴 올리브 & 시어버터 립 트리트먼트 밤 15g의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80\" alt=\"내추럴 올리브 & 시어버터 립 트리트먼트 밤 15g 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80\" alt=\"내추럴 올리브 & 시어버터 립 트리트먼트 밤 15g 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "무향 내추럴 (15g)",
        "stock": 50
      },
      {
        "name": "베리 틴티드 (생기 핑크 / 15g)",
        "stock": 40
      }
    ],
    "specs": {
      "용량": "15g",
      "성분": "EWG 올그린 등급 식물성 오일"
    },
    "reviews": [
      {
        "id": "rev-prod-32-1",
        "author": "이*은",
        "rating": 4,
        "date": "2026-09-26",
        "content": "내추럴 올리브 & 시어버터 립 트리트먼트 밤 15g 바르자마자 피부에 쏙 흡수되고 촉촉함이 오래가요.",
        "likes": 36
      },
      {
        "id": "rev-prod-32-2",
        "author": "박*윤",
        "rating": 5,
        "date": "2026-09-23",
        "content": "속건조가 심한 편인데 이거 바르고 당김이 싹 사라졌습니다.",
        "likes": 34
      },
      {
        "id": "rev-prod-32-3",
        "author": "최*민",
        "rating": 5,
        "date": "2026-09-20",
        "content": "순한 성분이라 민감한 제 피부에도 자극 없이 편안하네요.",
        "likes": 32
      },
      {
        "id": "rev-prod-32-4",
        "author": "정*지",
        "rating": 5,
        "date": "2026-09-17",
        "content": "다음날 아침 화장이 들뜸 없이 찰떡같이 잘 먹어서 감동했어요.",
        "likes": 31
      },
      {
        "id": "rev-prod-32-5",
        "author": "강*정",
        "rating": 5,
        "date": "2026-09-14",
        "content": "향이 인공적이지 않고 은은해서 스킨케어할 때 힐링됩니다.",
        "likes": 29
      },
      {
        "id": "rev-prod-32-6",
        "author": "조*영",
        "rating": 5,
        "date": "2026-09-11",
        "content": "끈적임 없이 산뜻하게 마무리되어 계절 불문 데일리로 좋아요.",
        "likes": 28
      },
      {
        "id": "rev-prod-32-7",
        "author": "윤*원",
        "rating": 4,
        "date": "2026-09-08",
        "content": "피부 결이 매끄러워지고 톤이 한층 맑아진 느낌입니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-32-8",
        "author": "장*린",
        "rating": 5,
        "date": "2026-09-05",
        "content": "용기도 위생적이고 양 조절하기 쉬워서 사용하기 편합니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-32-9",
        "author": "임*준",
        "rating": 5,
        "date": "2026-09-02",
        "content": "용량 대비 가격도 착하고 성분도 착해서 대만족이에요.",
        "likes": 23
      },
      {
        "id": "rev-prod-32-10",
        "author": "한*경",
        "rating": 5,
        "date": "2026-08-30",
        "content": "어머니께 선물해 드렸는데 너무 좋다고 또 사달라고 하셨어요.",
        "likes": 21
      },
      {
        "id": "rev-prod-32-11",
        "author": "오*수",
        "rating": 5,
        "date": "2026-08-27",
        "content": "붉은기 진정과 보습 장벽 강화에 확실히 효과를 봤습니다.",
        "likes": 20
      },
      {
        "id": "rev-prod-32-12",
        "author": "서*우",
        "rating": 5,
        "date": "2026-08-24",
        "content": "비건 인증 제품이라 안심하고 온 가족이 함께 쓰고 있습니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-32-13",
        "author": "신*희",
        "rating": 4,
        "date": "2026-08-21",
        "content": "발림성이 부드럽고 소량으로도 얼굴 전체에 촉촉하게 펴 발려요.",
        "likes": 16
      },
      {
        "id": "rev-prod-32-14",
        "author": "권*진",
        "rating": 5,
        "date": "2026-08-18",
        "content": "벌써 2통째 비우고 있는 저의 찐 정착템입니다.",
        "likes": 15
      },
      {
        "id": "rev-prod-32-15",
        "author": "황*아",
        "rating": 5,
        "date": "2026-08-15",
        "content": "피부과 케어 받은 것처럼 피부가 쫀쫀하고 탄력 있어 보여요.",
        "likes": 13
      },
      {
        "id": "rev-prod-32-16",
        "author": "안*태",
        "rating": 5,
        "date": "2026-08-12",
        "content": "선물 포장도 예쁘게 와서 생일 선물용으로도 완벽합니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-32-17",
        "author": "송*현",
        "rating": 5,
        "date": "2026-08-09",
        "content": "유수분 밸런스를 딱 맞춰줘서 번들거림 없이 촉촉합니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-32-18",
        "author": "전*호",
        "rating": 5,
        "date": "2026-08-06",
        "content": "기초 라인 이것저것 방황하다가 드디어 인생템 정착했습니다.",
        "likes": 8
      },
      {
        "id": "rev-prod-32-19",
        "author": "홍*훈",
        "rating": 4,
        "date": "2026-08-03",
        "content": "트러블 유발 없이 순하게 피부 컨디션을 끌어올려 줍니다.",
        "likes": 7
      },
      {
        "id": "rev-prod-32-20",
        "author": "유*서",
        "rating": 5,
        "date": "2026-07-31",
        "content": "피부 고민 있으신 분들은 꼭 한번 써보세요. 강력 추천!",
        "likes": 5
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-32-1",
        "author": "조*경",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-33",
    "name": "티트리 카밍 스팟 젤 20ml (응급 트러블 진정)",
    "category": "뷰티 / 케어",
    "categoryId": "cat-beauty",
    "price": 19000,
    "originalPrice": 26000,
    "discountRate": 27,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 54,
    "isBest": false,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "호주산 유기농 티트리잎 오일 10,000ppm + 살리실산(BHA) 0.5% 빠른 진정",
    "description": "<h3>호주산 유기농 티트리잎 오일 10,000ppm + 살리실산(BHA) 0.5% 빠른 진정</h3>\n<p>티트리 카밍 스팟 젤 20ml (응급 트러블 진정)은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80\" alt=\"티트리 카밍 스팟 젤 20ml (응급 트러블 진정) 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">티트리 카밍 스팟 젤 20ml (응급 트러블 진정)의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80\" alt=\"티트리 카밍 스팟 젤 20ml (응급 트러블 진정) 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80\" alt=\"티트리 카밍 스팟 젤 20ml (응급 트러블 진정) 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "본품 20ml 튜브형",
        "stock": 40
      }
    ],
    "specs": {
      "용량": "20ml",
      "임상": "논코메도제닉 테스트 완료"
    },
    "reviews": [
      {
        "id": "rev-prod-33-1",
        "author": "고*은",
        "rating": 4,
        "date": "2026-09-25",
        "content": "티트리 카밍 스팟 젤 20ml (응급 트러블 진정) 바르자마자 피부에 쏙 흡수되고 촉촉함이 오래가요.",
        "likes": 38
      },
      {
        "id": "rev-prod-33-2",
        "author": "문*윤",
        "rating": 5,
        "date": "2026-09-22",
        "content": "속건조가 심한 편인데 이거 바르고 당김이 싹 사라졌습니다.",
        "likes": 36
      },
      {
        "id": "rev-prod-33-3",
        "author": "양*민",
        "rating": 5,
        "date": "2026-09-19",
        "content": "순한 성분이라 민감한 제 피부에도 자극 없이 편안하네요.",
        "likes": 34
      },
      {
        "id": "rev-prod-33-4",
        "author": "손*지",
        "rating": 5,
        "date": "2026-09-16",
        "content": "다음날 아침 화장이 들뜸 없이 찰떡같이 잘 먹어서 감동했어요.",
        "likes": 33
      },
      {
        "id": "rev-prod-33-5",
        "author": "배*정",
        "rating": 5,
        "date": "2026-09-13",
        "content": "향이 인공적이지 않고 은은해서 스킨케어할 때 힐링됩니다.",
        "likes": 31
      },
      {
        "id": "rev-prod-33-6",
        "author": "백*영",
        "rating": 5,
        "date": "2026-09-10",
        "content": "끈적임 없이 산뜻하게 마무리되어 계절 불문 데일리로 좋아요.",
        "likes": 30
      },
      {
        "id": "rev-prod-33-7",
        "author": "허*원",
        "rating": 4,
        "date": "2026-09-07",
        "content": "피부 결이 매끄러워지고 톤이 한층 맑아진 느낌입니다.",
        "likes": 28
      },
      {
        "id": "rev-prod-33-8",
        "author": "노*린",
        "rating": 5,
        "date": "2026-09-04",
        "content": "용기도 위생적이고 양 조절하기 쉬워서 사용하기 편합니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-33-9",
        "author": "남*준",
        "rating": 5,
        "date": "2026-09-01",
        "content": "용량 대비 가격도 착하고 성분도 착해서 대만족이에요.",
        "likes": 25
      },
      {
        "id": "rev-prod-33-10",
        "author": "심*경",
        "rating": 5,
        "date": "2026-08-29",
        "content": "어머니께 선물해 드렸는데 너무 좋다고 또 사달라고 하셨어요.",
        "likes": 23
      },
      {
        "id": "rev-prod-33-11",
        "author": "김*수",
        "rating": 5,
        "date": "2026-08-26",
        "content": "붉은기 진정과 보습 장벽 강화에 확실히 효과를 봤습니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-33-12",
        "author": "이*우",
        "rating": 5,
        "date": "2026-08-23",
        "content": "비건 인증 제품이라 안심하고 온 가족이 함께 쓰고 있습니다.",
        "likes": 20
      },
      {
        "id": "rev-prod-33-13",
        "author": "박*희",
        "rating": 4,
        "date": "2026-08-20",
        "content": "발림성이 부드럽고 소량으로도 얼굴 전체에 촉촉하게 펴 발려요.",
        "likes": 18
      },
      {
        "id": "rev-prod-33-14",
        "author": "최*진",
        "rating": 5,
        "date": "2026-08-17",
        "content": "벌써 2통째 비우고 있는 저의 찐 정착템입니다.",
        "likes": 17
      },
      {
        "id": "rev-prod-33-15",
        "author": "정*아",
        "rating": 5,
        "date": "2026-08-14",
        "content": "피부과 케어 받은 것처럼 피부가 쫀쫀하고 탄력 있어 보여요.",
        "likes": 15
      },
      {
        "id": "rev-prod-33-16",
        "author": "강*태",
        "rating": 5,
        "date": "2026-08-11",
        "content": "선물 포장도 예쁘게 와서 생일 선물용으로도 완벽합니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-33-17",
        "author": "조*현",
        "rating": 5,
        "date": "2026-08-08",
        "content": "유수분 밸런스를 딱 맞춰줘서 번들거림 없이 촉촉합니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-33-18",
        "author": "윤*호",
        "rating": 5,
        "date": "2026-08-05",
        "content": "기초 라인 이것저것 방황하다가 드디어 인생템 정착했습니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-33-19",
        "author": "장*훈",
        "rating": 4,
        "date": "2026-08-02",
        "content": "트러블 유발 없이 순하게 피부 컨디션을 끌어올려 줍니다.",
        "likes": 9
      },
      {
        "id": "rev-prod-33-20",
        "author": "임*서",
        "rating": 5,
        "date": "2026-07-30",
        "content": "피부 고민 있으신 분들은 꼭 한번 써보세요. 강력 추천!",
        "likes": 7
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-33-1",
        "author": "윤*수",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-34",
    "name": "8중 히알루론산 딥 모이스처 마스크팩 (10매 세트)",
    "category": "뷰티 / 케어",
    "categoryId": "cat-beauty",
    "price": 25000,
    "originalPrice": 35000,
    "discountRate": 29,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 61,
    "isBest": true,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "1회 사용으로 수분량 240% 급상승, 밀착력 뛰어난 100% 텐셀 스킨 시트",
    "description": "<h3>1회 사용으로 수분량 240% 급상승, 밀착력 뛰어난 100% 텐셀 스킨 시트</h3>\n<p>8중 히알루론산 딥 모이스처 마스크팩 (10매 세트)은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80\" alt=\"8중 히알루론산 딥 모이스처 마스크팩 (10매 세트) 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">8중 히알루론산 딥 모이스처 마스크팩 (10매 세트)의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80\" alt=\"8중 히알루론산 딥 모이스처 마스크팩 (10매 세트) 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80\" alt=\"8중 히알루론산 딥 모이스처 마스크팩 (10매 세트) 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "10매 1박스 세트",
        "stock": 60
      },
      {
        "name": "20매 특별 더블 기획세트",
        "stock": 35
      }
    ],
    "specs": {
      "구성": "1박스 (30ml x 10매)",
      "시트원단": "비건 인증 텐셀 극세사"
    },
    "reviews": [
      {
        "id": "rev-prod-34-1",
        "author": "한*은",
        "rating": 4,
        "date": "2026-09-24",
        "content": "8중 히알루론산 딥 모이스처 마스크팩 (10매 세트) 바르자마자 피부에 쏙 흡수되고 촉촉함이 오래가요.",
        "likes": 40
      },
      {
        "id": "rev-prod-34-2",
        "author": "오*윤",
        "rating": 5,
        "date": "2026-09-21",
        "content": "속건조가 심한 편인데 이거 바르고 당김이 싹 사라졌습니다.",
        "likes": 38
      },
      {
        "id": "rev-prod-34-3",
        "author": "서*민",
        "rating": 5,
        "date": "2026-09-18",
        "content": "순한 성분이라 민감한 제 피부에도 자극 없이 편안하네요.",
        "likes": 36
      },
      {
        "id": "rev-prod-34-4",
        "author": "신*지",
        "rating": 5,
        "date": "2026-09-15",
        "content": "다음날 아침 화장이 들뜸 없이 찰떡같이 잘 먹어서 감동했어요.",
        "likes": 35
      },
      {
        "id": "rev-prod-34-5",
        "author": "권*정",
        "rating": 5,
        "date": "2026-09-12",
        "content": "향이 인공적이지 않고 은은해서 스킨케어할 때 힐링됩니다.",
        "likes": 33
      },
      {
        "id": "rev-prod-34-6",
        "author": "황*영",
        "rating": 5,
        "date": "2026-09-09",
        "content": "끈적임 없이 산뜻하게 마무리되어 계절 불문 데일리로 좋아요.",
        "likes": 32
      },
      {
        "id": "rev-prod-34-7",
        "author": "안*원",
        "rating": 4,
        "date": "2026-09-06",
        "content": "피부 결이 매끄러워지고 톤이 한층 맑아진 느낌입니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-34-8",
        "author": "송*린",
        "rating": 5,
        "date": "2026-09-03",
        "content": "용기도 위생적이고 양 조절하기 쉬워서 사용하기 편합니다.",
        "likes": 28
      },
      {
        "id": "rev-prod-34-9",
        "author": "전*준",
        "rating": 5,
        "date": "2026-08-31",
        "content": "용량 대비 가격도 착하고 성분도 착해서 대만족이에요.",
        "likes": 27
      },
      {
        "id": "rev-prod-34-10",
        "author": "홍*경",
        "rating": 5,
        "date": "2026-08-28",
        "content": "어머니께 선물해 드렸는데 너무 좋다고 또 사달라고 하셨어요.",
        "likes": 25
      },
      {
        "id": "rev-prod-34-11",
        "author": "유*수",
        "rating": 5,
        "date": "2026-08-25",
        "content": "붉은기 진정과 보습 장벽 강화에 확실히 효과를 봤습니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-34-12",
        "author": "고*우",
        "rating": 5,
        "date": "2026-08-22",
        "content": "비건 인증 제품이라 안심하고 온 가족이 함께 쓰고 있습니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-34-13",
        "author": "문*희",
        "rating": 4,
        "date": "2026-08-19",
        "content": "발림성이 부드럽고 소량으로도 얼굴 전체에 촉촉하게 펴 발려요.",
        "likes": 20
      },
      {
        "id": "rev-prod-34-14",
        "author": "양*진",
        "rating": 5,
        "date": "2026-08-16",
        "content": "벌써 2통째 비우고 있는 저의 찐 정착템입니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-34-15",
        "author": "손*아",
        "rating": 5,
        "date": "2026-08-13",
        "content": "피부과 케어 받은 것처럼 피부가 쫀쫀하고 탄력 있어 보여요.",
        "likes": 17
      },
      {
        "id": "rev-prod-34-16",
        "author": "배*태",
        "rating": 5,
        "date": "2026-08-10",
        "content": "선물 포장도 예쁘게 와서 생일 선물용으로도 완벽합니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-34-17",
        "author": "백*현",
        "rating": 5,
        "date": "2026-08-07",
        "content": "유수분 밸런스를 딱 맞춰줘서 번들거림 없이 촉촉합니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-34-18",
        "author": "허*호",
        "rating": 5,
        "date": "2026-08-04",
        "content": "기초 라인 이것저것 방황하다가 드디어 인생템 정착했습니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-34-19",
        "author": "노*훈",
        "rating": 4,
        "date": "2026-08-01",
        "content": "트러블 유발 없이 순하게 피부 컨디션을 끌어올려 줍니다.",
        "likes": 11
      },
      {
        "id": "rev-prod-34-20",
        "author": "남*서",
        "rating": 5,
        "date": "2026-07-29",
        "content": "피부 고민 있으신 분들은 꼭 한번 써보세요. 강력 추천!",
        "likes": 9
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-34-1",
        "author": "장*우",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-35",
    "name": "보태니컬 허브 아로마 바디워시 & 바디로션 세트 (각 500ml)",
    "category": "뷰티 / 케어",
    "categoryId": "cat-beauty",
    "price": 42000,
    "originalPrice": 58000,
    "discountRate": 28,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 68,
    "isBest": false,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": true,
    "thumbnail": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "로즈마리 & 라벤더 천연 에센셜 오일의 힐링 바디케어, 선물용 하드박스 패키지",
    "description": "<h3>로즈마리 & 라벤더 천연 에센셜 오일의 힐링 바디케어, 선물용 하드박스 패키지</h3>\n<p>보태니컬 허브 아로마 바디워시 & 바디로션 세트 (각 500ml)은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80\" alt=\"보태니컬 허브 아로마 바디워시 & 바디로션 세트 (각 500ml) 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">보태니컬 허브 아로마 바디워시 & 바디로션 세트 (각 500ml)의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80\" alt=\"보태니컬 허브 아로마 바디워시 & 바디로션 세트 (각 500ml) 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80\" alt=\"보태니컬 허브 아로마 바디워시 & 바디로션 세트 (각 500ml) 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "라벤더 & 로즈마리 세트",
        "stock": 30
      },
      {
        "name": "베르가못 & 시더우드 세트",
        "stock": 25
      }
    ],
    "specs": {
      "구성": "바디워시 500ml + 바디로션 500ml + 쇼핑백",
      "원산지": "대한민국"
    },
    "reviews": [
      {
        "id": "rev-prod-35-1",
        "author": "심*은",
        "rating": 4,
        "date": "2026-09-23",
        "content": "보태니컬 허브 아로마 바디워시 & 바디로션 세트 (각 500ml) 바르자마자 피부에 쏙 흡수되고 촉촉함이 오래가요.",
        "likes": 42
      },
      {
        "id": "rev-prod-35-2",
        "author": "김*윤",
        "rating": 5,
        "date": "2026-09-20",
        "content": "속건조가 심한 편인데 이거 바르고 당김이 싹 사라졌습니다.",
        "likes": 40
      },
      {
        "id": "rev-prod-35-3",
        "author": "이*민",
        "rating": 5,
        "date": "2026-09-17",
        "content": "순한 성분이라 민감한 제 피부에도 자극 없이 편안하네요.",
        "likes": 38
      },
      {
        "id": "rev-prod-35-4",
        "author": "박*지",
        "rating": 5,
        "date": "2026-09-14",
        "content": "다음날 아침 화장이 들뜸 없이 찰떡같이 잘 먹어서 감동했어요.",
        "likes": 37
      },
      {
        "id": "rev-prod-35-5",
        "author": "최*정",
        "rating": 5,
        "date": "2026-09-11",
        "content": "향이 인공적이지 않고 은은해서 스킨케어할 때 힐링됩니다.",
        "likes": 35
      },
      {
        "id": "rev-prod-35-6",
        "author": "정*영",
        "rating": 5,
        "date": "2026-09-08",
        "content": "끈적임 없이 산뜻하게 마무리되어 계절 불문 데일리로 좋아요.",
        "likes": 34
      },
      {
        "id": "rev-prod-35-7",
        "author": "강*원",
        "rating": 4,
        "date": "2026-09-05",
        "content": "피부 결이 매끄러워지고 톤이 한층 맑아진 느낌입니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-35-8",
        "author": "조*린",
        "rating": 5,
        "date": "2026-09-02",
        "content": "용기도 위생적이고 양 조절하기 쉬워서 사용하기 편합니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-35-9",
        "author": "윤*준",
        "rating": 5,
        "date": "2026-08-30",
        "content": "용량 대비 가격도 착하고 성분도 착해서 대만족이에요.",
        "likes": 29
      },
      {
        "id": "rev-prod-35-10",
        "author": "장*경",
        "rating": 5,
        "date": "2026-08-27",
        "content": "어머니께 선물해 드렸는데 너무 좋다고 또 사달라고 하셨어요.",
        "likes": 27
      },
      {
        "id": "rev-prod-35-11",
        "author": "임*수",
        "rating": 5,
        "date": "2026-08-24",
        "content": "붉은기 진정과 보습 장벽 강화에 확실히 효과를 봤습니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-35-12",
        "author": "한*우",
        "rating": 5,
        "date": "2026-08-21",
        "content": "비건 인증 제품이라 안심하고 온 가족이 함께 쓰고 있습니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-35-13",
        "author": "오*희",
        "rating": 4,
        "date": "2026-08-18",
        "content": "발림성이 부드럽고 소량으로도 얼굴 전체에 촉촉하게 펴 발려요.",
        "likes": 22
      },
      {
        "id": "rev-prod-35-14",
        "author": "서*진",
        "rating": 5,
        "date": "2026-08-15",
        "content": "벌써 2통째 비우고 있는 저의 찐 정착템입니다.",
        "likes": 21
      },
      {
        "id": "rev-prod-35-15",
        "author": "신*아",
        "rating": 5,
        "date": "2026-08-12",
        "content": "피부과 케어 받은 것처럼 피부가 쫀쫀하고 탄력 있어 보여요.",
        "likes": 19
      },
      {
        "id": "rev-prod-35-16",
        "author": "권*태",
        "rating": 5,
        "date": "2026-08-09",
        "content": "선물 포장도 예쁘게 와서 생일 선물용으로도 완벽합니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-35-17",
        "author": "황*현",
        "rating": 5,
        "date": "2026-08-06",
        "content": "유수분 밸런스를 딱 맞춰줘서 번들거림 없이 촉촉합니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-35-18",
        "author": "안*호",
        "rating": 5,
        "date": "2026-08-03",
        "content": "기초 라인 이것저것 방황하다가 드디어 인생템 정착했습니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-35-19",
        "author": "송*훈",
        "rating": 4,
        "date": "2026-07-31",
        "content": "트러블 유발 없이 순하게 피부 컨디션을 끌어올려 줍니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-35-20",
        "author": "전*서",
        "rating": 5,
        "date": "2026-07-28",
        "content": "피부 고민 있으신 분들은 꼭 한번 써보세요. 강력 추천!",
        "likes": 11
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-35-1",
        "author": "임*희",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-36",
    "name": "니치 퍼퓸 시그니처 핸드크림 3종 기프트 세트 (각 50ml)",
    "category": "뷰티 / 케어",
    "categoryId": "cat-beauty",
    "price": 32000,
    "originalPrice": 45000,
    "discountRate": 29,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 75,
    "isBest": true,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "프랑스 프리미엄 조향사의 3가지 향기 (상탈 우디 / 블랑 머스크 / 튤립 가든)",
    "description": "<h3>프랑스 프리미엄 조향사의 3가지 향기 (상탈 우디 / 블랑 머스크 / 튤립 가든)</h3>\n<p>니치 퍼퓸 시그니처 핸드크림 3종 기프트 세트 (각 50ml)은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80\" alt=\"니치 퍼퓸 시그니처 핸드크림 3종 기프트 세트 (각 50ml) 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">니치 퍼퓸 시그니처 핸드크림 3종 기프트 세트 (각 50ml)의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80\" alt=\"니치 퍼퓸 시그니처 핸드크림 3종 기프트 세트 (각 50ml) 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80\" alt=\"니치 퍼퓸 시그니처 핸드크림 3종 기프트 세트 (각 50ml) 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "시그니처 3종 트리오 세트 (50ml x 3)",
        "stock": 50
      }
    ],
    "specs": {
      "구성": "핸드크림 50ml x 3개입 하드케이스",
      "향지속력": "약 4~5시간"
    },
    "reviews": [
      {
        "id": "rev-prod-36-1",
        "author": "홍*은",
        "rating": 4,
        "date": "2026-09-29",
        "content": "니치 퍼퓸 시그니처 핸드크림 3종 기프트 세트 (각 50ml) 바르자마자 피부에 쏙 흡수되고 촉촉함이 오래가요.",
        "likes": 34
      },
      {
        "id": "rev-prod-36-2",
        "author": "유*윤",
        "rating": 5,
        "date": "2026-09-26",
        "content": "속건조가 심한 편인데 이거 바르고 당김이 싹 사라졌습니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-36-3",
        "author": "고*민",
        "rating": 5,
        "date": "2026-09-23",
        "content": "순한 성분이라 민감한 제 피부에도 자극 없이 편안하네요.",
        "likes": 30
      },
      {
        "id": "rev-prod-36-4",
        "author": "문*지",
        "rating": 5,
        "date": "2026-09-20",
        "content": "다음날 아침 화장이 들뜸 없이 찰떡같이 잘 먹어서 감동했어요.",
        "likes": 29
      },
      {
        "id": "rev-prod-36-5",
        "author": "양*정",
        "rating": 5,
        "date": "2026-09-17",
        "content": "향이 인공적이지 않고 은은해서 스킨케어할 때 힐링됩니다.",
        "likes": 27
      },
      {
        "id": "rev-prod-36-6",
        "author": "손*영",
        "rating": 5,
        "date": "2026-09-14",
        "content": "끈적임 없이 산뜻하게 마무리되어 계절 불문 데일리로 좋아요.",
        "likes": 26
      },
      {
        "id": "rev-prod-36-7",
        "author": "배*원",
        "rating": 4,
        "date": "2026-09-11",
        "content": "피부 결이 매끄러워지고 톤이 한층 맑아진 느낌입니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-36-8",
        "author": "백*린",
        "rating": 5,
        "date": "2026-09-08",
        "content": "용기도 위생적이고 양 조절하기 쉬워서 사용하기 편합니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-36-9",
        "author": "허*준",
        "rating": 5,
        "date": "2026-09-05",
        "content": "용량 대비 가격도 착하고 성분도 착해서 대만족이에요.",
        "likes": 21
      },
      {
        "id": "rev-prod-36-10",
        "author": "노*경",
        "rating": 5,
        "date": "2026-09-02",
        "content": "어머니께 선물해 드렸는데 너무 좋다고 또 사달라고 하셨어요.",
        "likes": 19
      },
      {
        "id": "rev-prod-36-11",
        "author": "남*수",
        "rating": 5,
        "date": "2026-08-30",
        "content": "붉은기 진정과 보습 장벽 강화에 확실히 효과를 봤습니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-36-12",
        "author": "심*우",
        "rating": 5,
        "date": "2026-08-27",
        "content": "비건 인증 제품이라 안심하고 온 가족이 함께 쓰고 있습니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-36-13",
        "author": "김*희",
        "rating": 4,
        "date": "2026-08-24",
        "content": "발림성이 부드럽고 소량으로도 얼굴 전체에 촉촉하게 펴 발려요.",
        "likes": 14
      },
      {
        "id": "rev-prod-36-14",
        "author": "이*진",
        "rating": 5,
        "date": "2026-08-21",
        "content": "벌써 2통째 비우고 있는 저의 찐 정착템입니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-36-15",
        "author": "박*아",
        "rating": 5,
        "date": "2026-08-18",
        "content": "피부과 케어 받은 것처럼 피부가 쫀쫀하고 탄력 있어 보여요.",
        "likes": 11
      },
      {
        "id": "rev-prod-36-16",
        "author": "최*태",
        "rating": 5,
        "date": "2026-08-15",
        "content": "선물 포장도 예쁘게 와서 생일 선물용으로도 완벽합니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-36-17",
        "author": "정*현",
        "rating": 5,
        "date": "2026-08-12",
        "content": "유수분 밸런스를 딱 맞춰줘서 번들거림 없이 촉촉합니다.",
        "likes": 8
      },
      {
        "id": "rev-prod-36-18",
        "author": "강*호",
        "rating": 5,
        "date": "2026-08-09",
        "content": "기초 라인 이것저것 방황하다가 드디어 인생템 정착했습니다.",
        "likes": 6
      },
      {
        "id": "rev-prod-36-19",
        "author": "조*훈",
        "rating": 4,
        "date": "2026-08-06",
        "content": "트러블 유발 없이 순하게 피부 컨디션을 끌어올려 줍니다.",
        "likes": 5
      },
      {
        "id": "rev-prod-36-20",
        "author": "윤*서",
        "rating": 5,
        "date": "2026-08-03",
        "content": "피부 고민 있으신 분들은 꼭 한번 써보세요. 강력 추천!",
        "likes": 3
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-36-1",
        "author": "한*진",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-37",
    "name": "미니멀 무선 마그네틱 터치 LED 무드등",
    "category": "리빙 / 인테리어",
    "categoryId": "cat-living",
    "price": 38000,
    "originalPrice": 55000,
    "discountRate": 30,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 32,
    "isBest": false,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "3단계 색온도 조절, 무단계 디밍, 2000mAh 대용량 배터리 무선 인테리어 조명",
    "description": "<h3>3단계 색온도 조절, 무단계 디밍, 2000mAh 대용량 배터리 무선 인테리어 조명</h3>\n<p>미니멀 무선 마그네틱 터치 LED 무드등은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80\" alt=\"미니멀 무선 마그네틱 터치 LED 무드등 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">미니멀 무선 마그네틱 터치 LED 무드등의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80\" alt=\"미니멀 무선 마그네틱 터치 LED 무드등 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=80\" alt=\"미니멀 무선 마그네틱 터치 LED 무드등 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "샌드 베이지",
        "stock": 30
      },
      {
        "name": "매트 화이트",
        "stock": 25
      }
    ],
    "specs": {
      "배터리": "2,000mAh",
      "충전": "Type-C",
      "색온도": "3000K/4000K/5700K"
    },
    "reviews": [
      {
        "id": "rev-prod-37-1",
        "author": "장*은",
        "rating": 4,
        "date": "2026-09-28",
        "content": "미니멀 무선 마그네틱 터치 LED 무드등 하나로 집안 분위기가 호텔처럼 아늑해졌습니다.",
        "likes": 36
      },
      {
        "id": "rev-prod-37-2",
        "author": "임*윤",
        "rating": 5,
        "date": "2026-09-25",
        "content": "디자인이 감각적이고 공간 어디에 두어도 인테리어가 사네요.",
        "likes": 34
      },
      {
        "id": "rev-prod-37-3",
        "author": "한*민",
        "rating": 5,
        "date": "2026-09-22",
        "content": "실용성이 뛰어나서 매일매일 유용하게 잘 쓰고 있습니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-37-4",
        "author": "오*지",
        "rating": 5,
        "date": "2026-09-19",
        "content": "마감 퀄리티가 정교하고 흠집 없이 깨끗하게 배송되었습니다.",
        "likes": 31
      },
      {
        "id": "rev-prod-37-5",
        "author": "서*정",
        "rating": 5,
        "date": "2026-09-16",
        "content": "집들이 선물로 가져갔는데 센스 있다는 칭찬 엄청 들었어요.",
        "likes": 29
      },
      {
        "id": "rev-prod-37-6",
        "author": "신*영",
        "rating": 5,
        "date": "2026-09-13",
        "content": "재질이 고급스럽고 내구성이 좋아서 오래 쓸 수 있겠어요.",
        "likes": 28
      },
      {
        "id": "rev-prod-37-7",
        "author": "권*원",
        "rating": 4,
        "date": "2026-09-10",
        "content": "사용법이 간편하고 세척 및 관리하기가 정말 수월합니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-37-8",
        "author": "황*린",
        "rating": 5,
        "date": "2026-09-07",
        "content": "원목과 패브릭의 따뜻한 감성이 일상에 큰 힐링을 줍니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-37-9",
        "author": "안*준",
        "rating": 5,
        "date": "2026-09-04",
        "content": "크기와 비율이 딱 적당해서 공간 차지도 많이 안 하고 좋아요.",
        "likes": 23
      },
      {
        "id": "rev-prod-37-10",
        "author": "송*경",
        "rating": 5,
        "date": "2026-09-01",
        "content": "가격 대비 만족도가 200%인 리빙 인테리어 소품입니다.",
        "likes": 21
      },
      {
        "id": "rev-prod-37-11",
        "author": "전*수",
        "rating": 5,
        "date": "2026-08-29",
        "content": "눈에 띌 때마다 기분이 좋아지는 감성 가득한 아이템이에요.",
        "likes": 20
      },
      {
        "id": "rev-prod-37-12",
        "author": "홍*우",
        "rating": 5,
        "date": "2026-08-26",
        "content": "선물 포장 상자부터 완충재까지 정성이 가득 담겨왔습니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-37-13",
        "author": "유*희",
        "rating": 4,
        "date": "2026-08-23",
        "content": "침실 협탁과 거실 선반 어디에 올려두어도 멋스럽습니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-37-14",
        "author": "고*진",
        "rating": 5,
        "date": "2026-08-20",
        "content": "튼튼하면서도 가벼워서 위치를 옮겨가며 쓰기 편해요.",
        "likes": 15
      },
      {
        "id": "rev-prod-37-15",
        "author": "문*아",
        "rating": 5,
        "date": "2026-08-17",
        "content": "집안에 머무는 시간이 더 행복해지는 기분 좋은 변화입니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-37-16",
        "author": "양*태",
        "rating": 5,
        "date": "2026-08-14",
        "content": "색감이 모던하고 은은해서 어떤 가구와도 잘 어울립니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-37-17",
        "author": "손*현",
        "rating": 5,
        "date": "2026-08-11",
        "content": "주변 지인들에게도 강력 추천하고 있는 애정템입니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-37-18",
        "author": "배*호",
        "rating": 5,
        "date": "2026-08-08",
        "content": "작은 소품 하나로 삶의 질이 수직 상승한 걸 느낍니다.",
        "likes": 8
      },
      {
        "id": "rev-prod-37-19",
        "author": "백*훈",
        "rating": 4,
        "date": "2026-08-05",
        "content": "이지샵 리빙 카테고리는 늘 실패가 없어서 믿고 삽니다.",
        "likes": 7
      },
      {
        "id": "rev-prod-37-20",
        "author": "허*서",
        "rating": 5,
        "date": "2026-08-02",
        "content": "가성비와 감성을 모두 잡은 최고의 인테리어 아이템입니다!",
        "likes": 5
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-37-1",
        "author": "오*아",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-38",
    "name": "시그니처 우디 아로마 디퓨저 & 캔들 세트",
    "category": "리빙 / 인테리어",
    "categoryId": "cat-living",
    "price": 52000,
    "originalPrice": 75000,
    "discountRate": 30,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 39,
    "isBest": false,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": true,
    "thumbnail": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "프랑스 그라스 향료 조향, 시더우드와 은은한 샌달우드가 전하는 힐링의 숲",
    "description": "<h3>프랑스 그라스 향료 조향, 시더우드와 은은한 샌달우드가 전하는 힐링의 숲</h3>\n<p>시그니처 우디 아로마 디퓨저 & 캔들 세트은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80\" alt=\"시그니처 우디 아로마 디퓨저 & 캔들 세트 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">시그니처 우디 아로마 디퓨저 & 캔들 세트의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80\" alt=\"시그니처 우디 아로마 디퓨저 & 캔들 세트 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80\" alt=\"시그니처 우디 아로마 디퓨저 & 캔들 세트 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "포레스트 레스트 (시더우드 & 앰버)",
        "stock": 40
      },
      {
        "name": "모닝 미스트 (유칼립투스 & 베르가못)",
        "stock": 30
      }
    ],
    "specs": {
      "구성": "디퓨저 200ml + 리드스틱 6개 + 소이캔들 180g"
    },
    "reviews": [
      {
        "id": "rev-prod-38-1",
        "author": "노*은",
        "rating": 4,
        "date": "2026-09-27",
        "content": "시그니처 우디 아로마 디퓨저 & 캔들 세트 하나로 집안 분위기가 호텔처럼 아늑해졌습니다.",
        "likes": 38
      },
      {
        "id": "rev-prod-38-2",
        "author": "남*윤",
        "rating": 5,
        "date": "2026-09-24",
        "content": "디자인이 감각적이고 공간 어디에 두어도 인테리어가 사네요.",
        "likes": 36
      },
      {
        "id": "rev-prod-38-3",
        "author": "심*민",
        "rating": 5,
        "date": "2026-09-21",
        "content": "실용성이 뛰어나서 매일매일 유용하게 잘 쓰고 있습니다.",
        "likes": 34
      },
      {
        "id": "rev-prod-38-4",
        "author": "김*지",
        "rating": 5,
        "date": "2026-09-18",
        "content": "마감 퀄리티가 정교하고 흠집 없이 깨끗하게 배송되었습니다.",
        "likes": 33
      },
      {
        "id": "rev-prod-38-5",
        "author": "이*정",
        "rating": 5,
        "date": "2026-09-15",
        "content": "집들이 선물로 가져갔는데 센스 있다는 칭찬 엄청 들었어요.",
        "likes": 31
      },
      {
        "id": "rev-prod-38-6",
        "author": "박*영",
        "rating": 5,
        "date": "2026-09-12",
        "content": "재질이 고급스럽고 내구성이 좋아서 오래 쓸 수 있겠어요.",
        "likes": 30
      },
      {
        "id": "rev-prod-38-7",
        "author": "최*원",
        "rating": 4,
        "date": "2026-09-09",
        "content": "사용법이 간편하고 세척 및 관리하기가 정말 수월합니다.",
        "likes": 28
      },
      {
        "id": "rev-prod-38-8",
        "author": "정*린",
        "rating": 5,
        "date": "2026-09-06",
        "content": "원목과 패브릭의 따뜻한 감성이 일상에 큰 힐링을 줍니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-38-9",
        "author": "강*준",
        "rating": 5,
        "date": "2026-09-03",
        "content": "크기와 비율이 딱 적당해서 공간 차지도 많이 안 하고 좋아요.",
        "likes": 25
      },
      {
        "id": "rev-prod-38-10",
        "author": "조*경",
        "rating": 5,
        "date": "2026-08-31",
        "content": "가격 대비 만족도가 200%인 리빙 인테리어 소품입니다.",
        "likes": 23
      },
      {
        "id": "rev-prod-38-11",
        "author": "윤*수",
        "rating": 5,
        "date": "2026-08-28",
        "content": "눈에 띌 때마다 기분이 좋아지는 감성 가득한 아이템이에요.",
        "likes": 22
      },
      {
        "id": "rev-prod-38-12",
        "author": "장*우",
        "rating": 5,
        "date": "2026-08-25",
        "content": "선물 포장 상자부터 완충재까지 정성이 가득 담겨왔습니다.",
        "likes": 20
      },
      {
        "id": "rev-prod-38-13",
        "author": "임*희",
        "rating": 4,
        "date": "2026-08-22",
        "content": "침실 협탁과 거실 선반 어디에 올려두어도 멋스럽습니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-38-14",
        "author": "한*진",
        "rating": 5,
        "date": "2026-08-19",
        "content": "튼튼하면서도 가벼워서 위치를 옮겨가며 쓰기 편해요.",
        "likes": 17
      },
      {
        "id": "rev-prod-38-15",
        "author": "오*아",
        "rating": 5,
        "date": "2026-08-16",
        "content": "집안에 머무는 시간이 더 행복해지는 기분 좋은 변화입니다.",
        "likes": 15
      },
      {
        "id": "rev-prod-38-16",
        "author": "서*태",
        "rating": 5,
        "date": "2026-08-13",
        "content": "색감이 모던하고 은은해서 어떤 가구와도 잘 어울립니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-38-17",
        "author": "신*현",
        "rating": 5,
        "date": "2026-08-10",
        "content": "주변 지인들에게도 강력 추천하고 있는 애정템입니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-38-18",
        "author": "권*호",
        "rating": 5,
        "date": "2026-08-07",
        "content": "작은 소품 하나로 삶의 질이 수직 상승한 걸 느낍니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-38-19",
        "author": "황*훈",
        "rating": 4,
        "date": "2026-08-04",
        "content": "이지샵 리빙 카테고리는 늘 실패가 없어서 믿고 삽니다.",
        "likes": 9
      },
      {
        "id": "rev-prod-38-20",
        "author": "안*서",
        "rating": 5,
        "date": "2026-08-01",
        "content": "가성비와 감성을 모두 잡은 최고의 인테리어 아이템입니다!",
        "likes": 7
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-38-1",
        "author": "서*태",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-39",
    "name": "핸드메이드 세라믹 머그 & 우드 코스터 세트",
    "category": "리빙 / 인테리어",
    "categoryId": "cat-living",
    "price": 24000,
    "originalPrice": 32000,
    "discountRate": 25,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 46,
    "isBest": false,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "도예 작가의 정성스런 손길로 빚은 질감, 월넛 천연목 코스터 포함",
    "description": "<h3>도예 작가의 정성스런 손길로 빚은 질감, 월넛 천연목 코스터 포함</h3>\n<p>핸드메이드 세라믹 머그 & 우드 코스터 세트은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80\" alt=\"핸드메이드 세라믹 머그 & 우드 코스터 세트 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">핸드메이드 세라믹 머그 & 우드 코스터 세트의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=800&q=80\" alt=\"핸드메이드 세라믹 머그 & 우드 코스터 세트 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80\" alt=\"핸드메이드 세라믹 머그 & 우드 코스터 세트 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "아이보리 매트 (350ml)",
        "stock": 20
      },
      {
        "name": "테라코타 샌드 (350ml)",
        "stock": 20
      }
    ],
    "specs": {
      "재질": "도자기 (머그), 북미산 월넛 (코스터)",
      "원산지": "대한민국 여주"
    },
    "reviews": [
      {
        "id": "rev-prod-39-1",
        "author": "송*은",
        "rating": 4,
        "date": "2026-09-26",
        "content": "핸드메이드 세라믹 머그 & 우드 코스터 세트 하나로 집안 분위기가 호텔처럼 아늑해졌습니다.",
        "likes": 40
      },
      {
        "id": "rev-prod-39-2",
        "author": "전*윤",
        "rating": 5,
        "date": "2026-09-23",
        "content": "디자인이 감각적이고 공간 어디에 두어도 인테리어가 사네요.",
        "likes": 38
      },
      {
        "id": "rev-prod-39-3",
        "author": "홍*민",
        "rating": 5,
        "date": "2026-09-20",
        "content": "실용성이 뛰어나서 매일매일 유용하게 잘 쓰고 있습니다.",
        "likes": 36
      },
      {
        "id": "rev-prod-39-4",
        "author": "유*지",
        "rating": 5,
        "date": "2026-09-17",
        "content": "마감 퀄리티가 정교하고 흠집 없이 깨끗하게 배송되었습니다.",
        "likes": 35
      },
      {
        "id": "rev-prod-39-5",
        "author": "고*정",
        "rating": 5,
        "date": "2026-09-14",
        "content": "집들이 선물로 가져갔는데 센스 있다는 칭찬 엄청 들었어요.",
        "likes": 33
      },
      {
        "id": "rev-prod-39-6",
        "author": "문*영",
        "rating": 5,
        "date": "2026-09-11",
        "content": "재질이 고급스럽고 내구성이 좋아서 오래 쓸 수 있겠어요.",
        "likes": 32
      },
      {
        "id": "rev-prod-39-7",
        "author": "양*원",
        "rating": 4,
        "date": "2026-09-08",
        "content": "사용법이 간편하고 세척 및 관리하기가 정말 수월합니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-39-8",
        "author": "손*린",
        "rating": 5,
        "date": "2026-09-05",
        "content": "원목과 패브릭의 따뜻한 감성이 일상에 큰 힐링을 줍니다.",
        "likes": 28
      },
      {
        "id": "rev-prod-39-9",
        "author": "배*준",
        "rating": 5,
        "date": "2026-09-02",
        "content": "크기와 비율이 딱 적당해서 공간 차지도 많이 안 하고 좋아요.",
        "likes": 27
      },
      {
        "id": "rev-prod-39-10",
        "author": "백*경",
        "rating": 5,
        "date": "2026-08-30",
        "content": "가격 대비 만족도가 200%인 리빙 인테리어 소품입니다.",
        "likes": 25
      },
      {
        "id": "rev-prod-39-11",
        "author": "허*수",
        "rating": 5,
        "date": "2026-08-27",
        "content": "눈에 띌 때마다 기분이 좋아지는 감성 가득한 아이템이에요.",
        "likes": 24
      },
      {
        "id": "rev-prod-39-12",
        "author": "노*우",
        "rating": 5,
        "date": "2026-08-24",
        "content": "선물 포장 상자부터 완충재까지 정성이 가득 담겨왔습니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-39-13",
        "author": "남*희",
        "rating": 4,
        "date": "2026-08-21",
        "content": "침실 협탁과 거실 선반 어디에 올려두어도 멋스럽습니다.",
        "likes": 20
      },
      {
        "id": "rev-prod-39-14",
        "author": "심*진",
        "rating": 5,
        "date": "2026-08-18",
        "content": "튼튼하면서도 가벼워서 위치를 옮겨가며 쓰기 편해요.",
        "likes": 19
      },
      {
        "id": "rev-prod-39-15",
        "author": "김*아",
        "rating": 5,
        "date": "2026-08-15",
        "content": "집안에 머무는 시간이 더 행복해지는 기분 좋은 변화입니다.",
        "likes": 17
      },
      {
        "id": "rev-prod-39-16",
        "author": "이*태",
        "rating": 5,
        "date": "2026-08-12",
        "content": "색감이 모던하고 은은해서 어떤 가구와도 잘 어울립니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-39-17",
        "author": "박*현",
        "rating": 5,
        "date": "2026-08-09",
        "content": "주변 지인들에게도 강력 추천하고 있는 애정템입니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-39-18",
        "author": "최*호",
        "rating": 5,
        "date": "2026-08-06",
        "content": "작은 소품 하나로 삶의 질이 수직 상승한 걸 느낍니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-39-19",
        "author": "정*훈",
        "rating": 4,
        "date": "2026-08-03",
        "content": "이지샵 리빙 카테고리는 늘 실패가 없어서 믿고 삽니다.",
        "likes": 11
      },
      {
        "id": "rev-prod-39-20",
        "author": "강*서",
        "rating": 5,
        "date": "2026-07-31",
        "content": "가성비와 감성을 모두 잡은 최고의 인테리어 아이템입니다!",
        "likes": 9
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-39-1",
        "author": "신*현",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-40",
    "name": "호텔식 60수 고밀도 프리미엄 순면 차렵이불 세트 (Q/K)",
    "category": "리빙 / 인테리어",
    "categoryId": "cat-living",
    "price": 139000,
    "originalPrice": 198000,
    "discountRate": 30,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 53,
    "isBest": true,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": true,
    "thumbnail": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "사각거리는 5성급 호텔 침구의 감촉, 마이크로 화이버 항균 솜 충전",
    "description": "<h3>사각거리는 5성급 호텔 침구의 감촉, 마이크로 화이버 항균 솜 충전</h3>\n<p>호텔식 60수 고밀도 프리미엄 순면 차렵이불 세트 (Q/K)은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80\" alt=\"호텔식 60수 고밀도 프리미엄 순면 차렵이불 세트 (Q/K) 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">호텔식 60수 고밀도 프리미엄 순면 차렵이불 세트 (Q/K)의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80\" alt=\"호텔식 60수 고밀도 프리미엄 순면 차렵이불 세트 (Q/K) 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80\" alt=\"호텔식 60수 고밀도 프리미엄 순면 차렵이불 세트 (Q/K) 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "클라우드 화이트 / 퀸(Q)",
        "stock": 15
      },
      {
        "name": "소프트 차콜 / 퀸(Q)",
        "stock": 15
      },
      {
        "name": "클라우드 화이트 / 킹(K)",
        "stock": 10
      }
    ],
    "specs": {
      "원단": "60수 고밀도 바이오워싱 순면 100%",
      "충전재": "마이크로화이버 항균솜"
    },
    "reviews": [
      {
        "id": "rev-prod-40-1",
        "author": "조*은",
        "rating": 4,
        "date": "2026-09-25",
        "content": "호텔식 60수 고밀도 프리미엄 순면 차렵이불 세트 (Q/K) 하나로 집안 분위기가 호텔처럼 아늑해졌습니다.",
        "likes": 42
      },
      {
        "id": "rev-prod-40-2",
        "author": "윤*윤",
        "rating": 5,
        "date": "2026-09-22",
        "content": "디자인이 감각적이고 공간 어디에 두어도 인테리어가 사네요.",
        "likes": 40
      },
      {
        "id": "rev-prod-40-3",
        "author": "장*민",
        "rating": 5,
        "date": "2026-09-19",
        "content": "실용성이 뛰어나서 매일매일 유용하게 잘 쓰고 있습니다.",
        "likes": 38
      },
      {
        "id": "rev-prod-40-4",
        "author": "임*지",
        "rating": 5,
        "date": "2026-09-16",
        "content": "마감 퀄리티가 정교하고 흠집 없이 깨끗하게 배송되었습니다.",
        "likes": 37
      },
      {
        "id": "rev-prod-40-5",
        "author": "한*정",
        "rating": 5,
        "date": "2026-09-13",
        "content": "집들이 선물로 가져갔는데 센스 있다는 칭찬 엄청 들었어요.",
        "likes": 35
      },
      {
        "id": "rev-prod-40-6",
        "author": "오*영",
        "rating": 5,
        "date": "2026-09-10",
        "content": "재질이 고급스럽고 내구성이 좋아서 오래 쓸 수 있겠어요.",
        "likes": 34
      },
      {
        "id": "rev-prod-40-7",
        "author": "서*원",
        "rating": 4,
        "date": "2026-09-07",
        "content": "사용법이 간편하고 세척 및 관리하기가 정말 수월합니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-40-8",
        "author": "신*린",
        "rating": 5,
        "date": "2026-09-04",
        "content": "원목과 패브릭의 따뜻한 감성이 일상에 큰 힐링을 줍니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-40-9",
        "author": "권*준",
        "rating": 5,
        "date": "2026-09-01",
        "content": "크기와 비율이 딱 적당해서 공간 차지도 많이 안 하고 좋아요.",
        "likes": 29
      },
      {
        "id": "rev-prod-40-10",
        "author": "황*경",
        "rating": 5,
        "date": "2026-08-29",
        "content": "가격 대비 만족도가 200%인 리빙 인테리어 소품입니다.",
        "likes": 27
      },
      {
        "id": "rev-prod-40-11",
        "author": "안*수",
        "rating": 5,
        "date": "2026-08-26",
        "content": "눈에 띌 때마다 기분이 좋아지는 감성 가득한 아이템이에요.",
        "likes": 26
      },
      {
        "id": "rev-prod-40-12",
        "author": "송*우",
        "rating": 5,
        "date": "2026-08-23",
        "content": "선물 포장 상자부터 완충재까지 정성이 가득 담겨왔습니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-40-13",
        "author": "전*희",
        "rating": 4,
        "date": "2026-08-20",
        "content": "침실 협탁과 거실 선반 어디에 올려두어도 멋스럽습니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-40-14",
        "author": "홍*진",
        "rating": 5,
        "date": "2026-08-17",
        "content": "튼튼하면서도 가벼워서 위치를 옮겨가며 쓰기 편해요.",
        "likes": 21
      },
      {
        "id": "rev-prod-40-15",
        "author": "유*아",
        "rating": 5,
        "date": "2026-08-14",
        "content": "집안에 머무는 시간이 더 행복해지는 기분 좋은 변화입니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-40-16",
        "author": "고*태",
        "rating": 5,
        "date": "2026-08-11",
        "content": "색감이 모던하고 은은해서 어떤 가구와도 잘 어울립니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-40-17",
        "author": "문*현",
        "rating": 5,
        "date": "2026-08-08",
        "content": "주변 지인들에게도 강력 추천하고 있는 애정템입니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-40-18",
        "author": "양*호",
        "rating": 5,
        "date": "2026-08-05",
        "content": "작은 소품 하나로 삶의 질이 수직 상승한 걸 느낍니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-40-19",
        "author": "손*훈",
        "rating": 4,
        "date": "2026-08-02",
        "content": "이지샵 리빙 카테고리는 늘 실패가 없어서 믿고 삽니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-40-20",
        "author": "배*서",
        "rating": 5,
        "date": "2026-07-30",
        "content": "가성비와 감성을 모두 잡은 최고의 인테리어 아이템입니다!",
        "likes": 11
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-40-1",
        "author": "권*호",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-41",
    "name": "천연 규조토 소프트 순간 흡수 발매트",
    "category": "리빙 / 인테리어",
    "categoryId": "cat-living",
    "price": 19000,
    "originalPrice": 28000,
    "discountRate": 32,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 60,
    "isBest": true,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "발 딛는 순간 1초 만에 뽀송하게 건조, 깨질 걱정 없는 폭신한 3세대 소프트 규조토",
    "description": "<h3>발 딛는 순간 1초 만에 뽀송하게 건조, 깨질 걱정 없는 폭신한 3세대 소프트 규조토</h3>\n<p>천연 규조토 소프트 순간 흡수 발매트은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80\" alt=\"천연 규조토 소프트 순간 흡수 발매트 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">천연 규조토 소프트 순간 흡수 발매트의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80\" alt=\"천연 규조토 소프트 순간 흡수 발매트 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80\" alt=\"천연 규조토 소프트 순간 흡수 발매트 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "모던 그레이 (60x40cm)",
        "stock": 50
      },
      {
        "name": "테라조 베이지 (60x40cm)",
        "stock": 40
      }
    ],
    "specs": {
      "재질": "천연 규조토 추출 분말 + 재생 고무",
      "크기": "60 x 40 cm"
    },
    "reviews": [
      {
        "id": "rev-prod-41-1",
        "author": "백*은",
        "rating": 4,
        "date": "2026-09-24",
        "content": "천연 규조토 소프트 순간 흡수 발매트 하나로 집안 분위기가 호텔처럼 아늑해졌습니다.",
        "likes": 34
      },
      {
        "id": "rev-prod-41-2",
        "author": "허*윤",
        "rating": 5,
        "date": "2026-09-21",
        "content": "디자인이 감각적이고 공간 어디에 두어도 인테리어가 사네요.",
        "likes": 32
      },
      {
        "id": "rev-prod-41-3",
        "author": "노*민",
        "rating": 5,
        "date": "2026-09-18",
        "content": "실용성이 뛰어나서 매일매일 유용하게 잘 쓰고 있습니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-41-4",
        "author": "남*지",
        "rating": 5,
        "date": "2026-09-15",
        "content": "마감 퀄리티가 정교하고 흠집 없이 깨끗하게 배송되었습니다.",
        "likes": 29
      },
      {
        "id": "rev-prod-41-5",
        "author": "심*정",
        "rating": 5,
        "date": "2026-09-12",
        "content": "집들이 선물로 가져갔는데 센스 있다는 칭찬 엄청 들었어요.",
        "likes": 27
      },
      {
        "id": "rev-prod-41-6",
        "author": "김*영",
        "rating": 5,
        "date": "2026-09-09",
        "content": "재질이 고급스럽고 내구성이 좋아서 오래 쓸 수 있겠어요.",
        "likes": 26
      },
      {
        "id": "rev-prod-41-7",
        "author": "이*원",
        "rating": 4,
        "date": "2026-09-06",
        "content": "사용법이 간편하고 세척 및 관리하기가 정말 수월합니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-41-8",
        "author": "박*린",
        "rating": 5,
        "date": "2026-09-03",
        "content": "원목과 패브릭의 따뜻한 감성이 일상에 큰 힐링을 줍니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-41-9",
        "author": "최*준",
        "rating": 5,
        "date": "2026-08-31",
        "content": "크기와 비율이 딱 적당해서 공간 차지도 많이 안 하고 좋아요.",
        "likes": 21
      },
      {
        "id": "rev-prod-41-10",
        "author": "정*경",
        "rating": 5,
        "date": "2026-08-28",
        "content": "가격 대비 만족도가 200%인 리빙 인테리어 소품입니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-41-11",
        "author": "강*수",
        "rating": 5,
        "date": "2026-08-25",
        "content": "눈에 띌 때마다 기분이 좋아지는 감성 가득한 아이템이에요.",
        "likes": 18
      },
      {
        "id": "rev-prod-41-12",
        "author": "조*우",
        "rating": 5,
        "date": "2026-08-22",
        "content": "선물 포장 상자부터 완충재까지 정성이 가득 담겨왔습니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-41-13",
        "author": "윤*희",
        "rating": 4,
        "date": "2026-08-19",
        "content": "침실 협탁과 거실 선반 어디에 올려두어도 멋스럽습니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-41-14",
        "author": "장*진",
        "rating": 5,
        "date": "2026-08-16",
        "content": "튼튼하면서도 가벼워서 위치를 옮겨가며 쓰기 편해요.",
        "likes": 13
      },
      {
        "id": "rev-prod-41-15",
        "author": "임*아",
        "rating": 5,
        "date": "2026-08-13",
        "content": "집안에 머무는 시간이 더 행복해지는 기분 좋은 변화입니다.",
        "likes": 11
      },
      {
        "id": "rev-prod-41-16",
        "author": "한*태",
        "rating": 5,
        "date": "2026-08-10",
        "content": "색감이 모던하고 은은해서 어떤 가구와도 잘 어울립니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-41-17",
        "author": "오*현",
        "rating": 5,
        "date": "2026-08-07",
        "content": "주변 지인들에게도 강력 추천하고 있는 애정템입니다.",
        "likes": 8
      },
      {
        "id": "rev-prod-41-18",
        "author": "서*호",
        "rating": 5,
        "date": "2026-08-04",
        "content": "작은 소품 하나로 삶의 질이 수직 상승한 걸 느낍니다.",
        "likes": 6
      },
      {
        "id": "rev-prod-41-19",
        "author": "신*훈",
        "rating": 4,
        "date": "2026-08-01",
        "content": "이지샵 리빙 카테고리는 늘 실패가 없어서 믿고 삽니다.",
        "likes": 5
      },
      {
        "id": "rev-prod-41-20",
        "author": "권*서",
        "rating": 5,
        "date": "2026-07-29",
        "content": "가성비와 감성을 모두 잡은 최고의 인테리어 아이템입니다!",
        "likes": 3
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-41-1",
        "author": "황*훈",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-42",
    "name": "북미산 천연 월넛 원목 북스탠드 독서대",
    "category": "리빙 / 인테리어",
    "categoryId": "cat-living",
    "price": 42000,
    "originalPrice": 58000,
    "discountRate": 28,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 67,
    "isBest": false,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "5단계 각도 조절, 두꺼운 전공서적과 태블릿도 안정적으로 지지하는 원목 독서대",
    "description": "<h3>5단계 각도 조절, 두꺼운 전공서적과 태블릿도 안정적으로 지지하는 원목 독서대</h3>\n<p>북미산 천연 월넛 원목 북스탠드 독서대은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80\" alt=\"북미산 천연 월넛 원목 북스탠드 독서대 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">북미산 천연 월넛 원목 북스탠드 독서대의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80\" alt=\"북미산 천연 월넛 원목 북스탠드 독서대 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80\" alt=\"북미산 천연 월넛 원목 북스탠드 독서대 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "월넛 (대형 / 39x28cm)",
        "stock": 30
      },
      {
        "name": "내추럴 오크 (대형 / 39x28cm)",
        "stock": 25
      }
    ],
    "specs": {
      "목재": "북미산 FAS등급 천연 월넛/오크",
      "무게": "약 980g"
    },
    "reviews": [
      {
        "id": "rev-prod-42-1",
        "author": "황*은",
        "rating": 4,
        "date": "2026-09-23",
        "content": "북미산 천연 월넛 원목 북스탠드 독서대 하나로 집안 분위기가 호텔처럼 아늑해졌습니다.",
        "likes": 36
      },
      {
        "id": "rev-prod-42-2",
        "author": "안*윤",
        "rating": 5,
        "date": "2026-09-20",
        "content": "디자인이 감각적이고 공간 어디에 두어도 인테리어가 사네요.",
        "likes": 34
      },
      {
        "id": "rev-prod-42-3",
        "author": "송*민",
        "rating": 5,
        "date": "2026-09-17",
        "content": "실용성이 뛰어나서 매일매일 유용하게 잘 쓰고 있습니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-42-4",
        "author": "전*지",
        "rating": 5,
        "date": "2026-09-14",
        "content": "마감 퀄리티가 정교하고 흠집 없이 깨끗하게 배송되었습니다.",
        "likes": 31
      },
      {
        "id": "rev-prod-42-5",
        "author": "홍*정",
        "rating": 5,
        "date": "2026-09-11",
        "content": "집들이 선물로 가져갔는데 센스 있다는 칭찬 엄청 들었어요.",
        "likes": 29
      },
      {
        "id": "rev-prod-42-6",
        "author": "유*영",
        "rating": 5,
        "date": "2026-09-08",
        "content": "재질이 고급스럽고 내구성이 좋아서 오래 쓸 수 있겠어요.",
        "likes": 28
      },
      {
        "id": "rev-prod-42-7",
        "author": "고*원",
        "rating": 4,
        "date": "2026-09-05",
        "content": "사용법이 간편하고 세척 및 관리하기가 정말 수월합니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-42-8",
        "author": "문*린",
        "rating": 5,
        "date": "2026-09-02",
        "content": "원목과 패브릭의 따뜻한 감성이 일상에 큰 힐링을 줍니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-42-9",
        "author": "양*준",
        "rating": 5,
        "date": "2026-08-30",
        "content": "크기와 비율이 딱 적당해서 공간 차지도 많이 안 하고 좋아요.",
        "likes": 23
      },
      {
        "id": "rev-prod-42-10",
        "author": "손*경",
        "rating": 5,
        "date": "2026-08-27",
        "content": "가격 대비 만족도가 200%인 리빙 인테리어 소품입니다.",
        "likes": 21
      },
      {
        "id": "rev-prod-42-11",
        "author": "배*수",
        "rating": 5,
        "date": "2026-08-24",
        "content": "눈에 띌 때마다 기분이 좋아지는 감성 가득한 아이템이에요.",
        "likes": 20
      },
      {
        "id": "rev-prod-42-12",
        "author": "백*우",
        "rating": 5,
        "date": "2026-08-21",
        "content": "선물 포장 상자부터 완충재까지 정성이 가득 담겨왔습니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-42-13",
        "author": "허*희",
        "rating": 4,
        "date": "2026-08-18",
        "content": "침실 협탁과 거실 선반 어디에 올려두어도 멋스럽습니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-42-14",
        "author": "노*진",
        "rating": 5,
        "date": "2026-08-15",
        "content": "튼튼하면서도 가벼워서 위치를 옮겨가며 쓰기 편해요.",
        "likes": 15
      },
      {
        "id": "rev-prod-42-15",
        "author": "남*아",
        "rating": 5,
        "date": "2026-08-12",
        "content": "집안에 머무는 시간이 더 행복해지는 기분 좋은 변화입니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-42-16",
        "author": "심*태",
        "rating": 5,
        "date": "2026-08-09",
        "content": "색감이 모던하고 은은해서 어떤 가구와도 잘 어울립니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-42-17",
        "author": "김*현",
        "rating": 5,
        "date": "2026-08-06",
        "content": "주변 지인들에게도 강력 추천하고 있는 애정템입니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-42-18",
        "author": "이*호",
        "rating": 5,
        "date": "2026-08-03",
        "content": "작은 소품 하나로 삶의 질이 수직 상승한 걸 느낍니다.",
        "likes": 8
      },
      {
        "id": "rev-prod-42-19",
        "author": "박*훈",
        "rating": 4,
        "date": "2026-07-31",
        "content": "이지샵 리빙 카테고리는 늘 실패가 없어서 믿고 삽니다.",
        "likes": 7
      },
      {
        "id": "rev-prod-42-20",
        "author": "최*서",
        "rating": 5,
        "date": "2026-07-28",
        "content": "가성비와 감성을 모두 잡은 최고의 인테리어 아이템입니다!",
        "likes": 5
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-42-1",
        "author": "안*서",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-43",
    "name": "미니멀 우드 프레임 LED 탁상 전자시계 (온습도계 겸용)",
    "category": "리빙 / 인테리어",
    "categoryId": "cat-living",
    "price": 28000,
    "originalPrice": 38000,
    "discountRate": 26,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 74,
    "isBest": false,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "음성 인식 절전 모드, 실시간 실내 온도 & 습도 표시, 3단계 밝기 조절",
    "description": "<h3>음성 인식 절전 모드, 실시간 실내 온도 & 습도 표시, 3단계 밝기 조절</h3>\n<p>미니멀 우드 프레임 LED 탁상 전자시계 (온습도계 겸용)은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80\" alt=\"미니멀 우드 프레임 LED 탁상 전자시계 (온습도계 겸용) 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">미니멀 우드 프레임 LED 탁상 전자시계 (온습도계 겸용)의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=80\" alt=\"미니멀 우드 프레임 LED 탁상 전자시계 (온습도계 겸용) 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80\" alt=\"미니멀 우드 프레임 LED 탁상 전자시계 (온습도계 겸용) 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "내추럴 우드",
        "stock": 35
      },
      {
        "name": "블랙 우드",
        "stock": 25
      }
    ],
    "specs": {
      "전원": "USB C타입 상시 전원 / AAA 건전지 겸용",
      "기능": "시간, 날짜, 온습도, 알람 3개"
    },
    "reviews": [
      {
        "id": "rev-prod-43-1",
        "author": "정*은",
        "rating": 4,
        "date": "2026-09-29",
        "content": "미니멀 우드 프레임 LED 탁상 전자시계 (온습도계 겸용) 하나로 집안 분위기가 호텔처럼 아늑해졌습니다.",
        "likes": 38
      },
      {
        "id": "rev-prod-43-2",
        "author": "강*윤",
        "rating": 5,
        "date": "2026-09-26",
        "content": "디자인이 감각적이고 공간 어디에 두어도 인테리어가 사네요.",
        "likes": 36
      },
      {
        "id": "rev-prod-43-3",
        "author": "조*민",
        "rating": 5,
        "date": "2026-09-23",
        "content": "실용성이 뛰어나서 매일매일 유용하게 잘 쓰고 있습니다.",
        "likes": 34
      },
      {
        "id": "rev-prod-43-4",
        "author": "윤*지",
        "rating": 5,
        "date": "2026-09-20",
        "content": "마감 퀄리티가 정교하고 흠집 없이 깨끗하게 배송되었습니다.",
        "likes": 33
      },
      {
        "id": "rev-prod-43-5",
        "author": "장*정",
        "rating": 5,
        "date": "2026-09-17",
        "content": "집들이 선물로 가져갔는데 센스 있다는 칭찬 엄청 들었어요.",
        "likes": 31
      },
      {
        "id": "rev-prod-43-6",
        "author": "임*영",
        "rating": 5,
        "date": "2026-09-14",
        "content": "재질이 고급스럽고 내구성이 좋아서 오래 쓸 수 있겠어요.",
        "likes": 30
      },
      {
        "id": "rev-prod-43-7",
        "author": "한*원",
        "rating": 4,
        "date": "2026-09-11",
        "content": "사용법이 간편하고 세척 및 관리하기가 정말 수월합니다.",
        "likes": 28
      },
      {
        "id": "rev-prod-43-8",
        "author": "오*린",
        "rating": 5,
        "date": "2026-09-08",
        "content": "원목과 패브릭의 따뜻한 감성이 일상에 큰 힐링을 줍니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-43-9",
        "author": "서*준",
        "rating": 5,
        "date": "2026-09-05",
        "content": "크기와 비율이 딱 적당해서 공간 차지도 많이 안 하고 좋아요.",
        "likes": 25
      },
      {
        "id": "rev-prod-43-10",
        "author": "신*경",
        "rating": 5,
        "date": "2026-09-02",
        "content": "가격 대비 만족도가 200%인 리빙 인테리어 소품입니다.",
        "likes": 23
      },
      {
        "id": "rev-prod-43-11",
        "author": "권*수",
        "rating": 5,
        "date": "2026-08-30",
        "content": "눈에 띌 때마다 기분이 좋아지는 감성 가득한 아이템이에요.",
        "likes": 22
      },
      {
        "id": "rev-prod-43-12",
        "author": "황*우",
        "rating": 5,
        "date": "2026-08-27",
        "content": "선물 포장 상자부터 완충재까지 정성이 가득 담겨왔습니다.",
        "likes": 20
      },
      {
        "id": "rev-prod-43-13",
        "author": "안*희",
        "rating": 4,
        "date": "2026-08-24",
        "content": "침실 협탁과 거실 선반 어디에 올려두어도 멋스럽습니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-43-14",
        "author": "송*진",
        "rating": 5,
        "date": "2026-08-21",
        "content": "튼튼하면서도 가벼워서 위치를 옮겨가며 쓰기 편해요.",
        "likes": 17
      },
      {
        "id": "rev-prod-43-15",
        "author": "전*아",
        "rating": 5,
        "date": "2026-08-18",
        "content": "집안에 머무는 시간이 더 행복해지는 기분 좋은 변화입니다.",
        "likes": 15
      },
      {
        "id": "rev-prod-43-16",
        "author": "홍*태",
        "rating": 5,
        "date": "2026-08-15",
        "content": "색감이 모던하고 은은해서 어떤 가구와도 잘 어울립니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-43-17",
        "author": "유*현",
        "rating": 5,
        "date": "2026-08-12",
        "content": "주변 지인들에게도 강력 추천하고 있는 애정템입니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-43-18",
        "author": "고*호",
        "rating": 5,
        "date": "2026-08-09",
        "content": "작은 소품 하나로 삶의 질이 수직 상승한 걸 느낍니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-43-19",
        "author": "문*훈",
        "rating": 4,
        "date": "2026-08-06",
        "content": "이지샵 리빙 카테고리는 늘 실패가 없어서 믿고 삽니다.",
        "likes": 9
      },
      {
        "id": "rev-prod-43-20",
        "author": "양*서",
        "rating": 5,
        "date": "2026-08-03",
        "content": "가성비와 감성을 모두 잡은 최고의 인테리어 아이템입니다!",
        "likes": 7
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-43-1",
        "author": "송*은",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-44",
    "name": "친환경 천연 사이잘삼 주방 수세미 & 우드 브러시 5종 세트",
    "category": "리빙 / 인테리어",
    "categoryId": "cat-living",
    "price": 21000,
    "originalPrice": 29000,
    "discountRate": 28,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 31,
    "isBest": false,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "미세플라스틱 0% 제로웨이스트 설거지, 냄비 스크래치 없는 천연 식물모 브러시",
    "description": "<h3>미세플라스틱 0% 제로웨이스트 설거지, 냄비 스크래치 없는 천연 식물모 브러시</h3>\n<p>친환경 천연 사이잘삼 주방 수세미 & 우드 브러시 5종 세트은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80\" alt=\"친환경 천연 사이잘삼 주방 수세미 & 우드 브러시 5종 세트 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">친환경 천연 사이잘삼 주방 수세미 & 우드 브러시 5종 세트의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80\" alt=\"친환경 천연 사이잘삼 주방 수세미 & 우드 브러시 5종 세트 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80\" alt=\"친환경 천연 사이잘삼 주방 수세미 & 우드 브러시 5종 세트 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "친환경 설거지 5종 풀패키지",
        "stock": 45
      }
    ],
    "specs": {
      "구성": "손잡이 브러시 2종 + 천연 수세미 3매 + 전용 거치 고리"
    },
    "reviews": [
      {
        "id": "rev-prod-44-1",
        "author": "손*은",
        "rating": 4,
        "date": "2026-09-28",
        "content": "친환경 천연 사이잘삼 주방 수세미 & 우드 브러시 5종 세트 하나로 집안 분위기가 호텔처럼 아늑해졌습니다.",
        "likes": 40
      },
      {
        "id": "rev-prod-44-2",
        "author": "배*윤",
        "rating": 5,
        "date": "2026-09-25",
        "content": "디자인이 감각적이고 공간 어디에 두어도 인테리어가 사네요.",
        "likes": 38
      },
      {
        "id": "rev-prod-44-3",
        "author": "백*민",
        "rating": 5,
        "date": "2026-09-22",
        "content": "실용성이 뛰어나서 매일매일 유용하게 잘 쓰고 있습니다.",
        "likes": 36
      },
      {
        "id": "rev-prod-44-4",
        "author": "허*지",
        "rating": 5,
        "date": "2026-09-19",
        "content": "마감 퀄리티가 정교하고 흠집 없이 깨끗하게 배송되었습니다.",
        "likes": 35
      },
      {
        "id": "rev-prod-44-5",
        "author": "노*정",
        "rating": 5,
        "date": "2026-09-16",
        "content": "집들이 선물로 가져갔는데 센스 있다는 칭찬 엄청 들었어요.",
        "likes": 33
      },
      {
        "id": "rev-prod-44-6",
        "author": "남*영",
        "rating": 5,
        "date": "2026-09-13",
        "content": "재질이 고급스럽고 내구성이 좋아서 오래 쓸 수 있겠어요.",
        "likes": 32
      },
      {
        "id": "rev-prod-44-7",
        "author": "심*원",
        "rating": 4,
        "date": "2026-09-10",
        "content": "사용법이 간편하고 세척 및 관리하기가 정말 수월합니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-44-8",
        "author": "김*린",
        "rating": 5,
        "date": "2026-09-07",
        "content": "원목과 패브릭의 따뜻한 감성이 일상에 큰 힐링을 줍니다.",
        "likes": 28
      },
      {
        "id": "rev-prod-44-9",
        "author": "이*준",
        "rating": 5,
        "date": "2026-09-04",
        "content": "크기와 비율이 딱 적당해서 공간 차지도 많이 안 하고 좋아요.",
        "likes": 27
      },
      {
        "id": "rev-prod-44-10",
        "author": "박*경",
        "rating": 5,
        "date": "2026-09-01",
        "content": "가격 대비 만족도가 200%인 리빙 인테리어 소품입니다.",
        "likes": 25
      },
      {
        "id": "rev-prod-44-11",
        "author": "최*수",
        "rating": 5,
        "date": "2026-08-29",
        "content": "눈에 띌 때마다 기분이 좋아지는 감성 가득한 아이템이에요.",
        "likes": 24
      },
      {
        "id": "rev-prod-44-12",
        "author": "정*우",
        "rating": 5,
        "date": "2026-08-26",
        "content": "선물 포장 상자부터 완충재까지 정성이 가득 담겨왔습니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-44-13",
        "author": "강*희",
        "rating": 4,
        "date": "2026-08-23",
        "content": "침실 협탁과 거실 선반 어디에 올려두어도 멋스럽습니다.",
        "likes": 20
      },
      {
        "id": "rev-prod-44-14",
        "author": "조*진",
        "rating": 5,
        "date": "2026-08-20",
        "content": "튼튼하면서도 가벼워서 위치를 옮겨가며 쓰기 편해요.",
        "likes": 19
      },
      {
        "id": "rev-prod-44-15",
        "author": "윤*아",
        "rating": 5,
        "date": "2026-08-17",
        "content": "집안에 머무는 시간이 더 행복해지는 기분 좋은 변화입니다.",
        "likes": 17
      },
      {
        "id": "rev-prod-44-16",
        "author": "장*태",
        "rating": 5,
        "date": "2026-08-14",
        "content": "색감이 모던하고 은은해서 어떤 가구와도 잘 어울립니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-44-17",
        "author": "임*현",
        "rating": 5,
        "date": "2026-08-11",
        "content": "주변 지인들에게도 강력 추천하고 있는 애정템입니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-44-18",
        "author": "한*호",
        "rating": 5,
        "date": "2026-08-08",
        "content": "작은 소품 하나로 삶의 질이 수직 상승한 걸 느낍니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-44-19",
        "author": "오*훈",
        "rating": 4,
        "date": "2026-08-05",
        "content": "이지샵 리빙 카테고리는 늘 실패가 없어서 믿고 삽니다.",
        "likes": 11
      },
      {
        "id": "rev-prod-44-20",
        "author": "서*서",
        "rating": 5,
        "date": "2026-08-02",
        "content": "가성비와 감성을 모두 잡은 최고의 인테리어 아이템입니다!",
        "likes": 9
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-44-1",
        "author": "전*윤",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-45",
    "name": "프렌치 내추럴 린넨 키친 크로스 티타월 (4종 세트)",
    "category": "리빙 / 인테리어",
    "categoryId": "cat-living",
    "price": 25000,
    "originalPrice": 34000,
    "discountRate": 26,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 38,
    "isBest": false,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "빠른 건조력과 뛰어난 흡수력, 플레이팅 매트 및 식기 건조용 다목적 린넨 패브릭",
    "description": "<h3>빠른 건조력과 뛰어난 흡수력, 플레이팅 매트 및 식기 건조용 다목적 린넨 패브릭</h3>\n<p>프렌치 내추럴 린넨 키친 크로스 티타월 (4종 세트)은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80\" alt=\"프렌치 내추럴 린넨 키친 크로스 티타월 (4종 세트) 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">프렌치 내추럴 린넨 키친 크로스 티타월 (4종 세트)의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80\" alt=\"프렌치 내추럴 린넨 키친 크로스 티타월 (4종 세트) 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80\" alt=\"프렌치 내추럴 린넨 키친 크로스 티타월 (4종 세트) 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "클래식 어스 4종 세트 (45x65cm)",
        "stock": 40
      }
    ],
    "specs": {
      "크기": "45 x 65 cm (4매입)",
      "소재": "린넨 55%, 코튼 45%"
    },
    "reviews": [
      {
        "id": "rev-prod-45-1",
        "author": "신*은",
        "rating": 4,
        "date": "2026-09-27",
        "content": "프렌치 내추럴 린넨 키친 크로스 티타월 (4종 세트) 하나로 집안 분위기가 호텔처럼 아늑해졌습니다.",
        "likes": 42
      },
      {
        "id": "rev-prod-45-2",
        "author": "권*윤",
        "rating": 5,
        "date": "2026-09-24",
        "content": "디자인이 감각적이고 공간 어디에 두어도 인테리어가 사네요.",
        "likes": 40
      },
      {
        "id": "rev-prod-45-3",
        "author": "황*민",
        "rating": 5,
        "date": "2026-09-21",
        "content": "실용성이 뛰어나서 매일매일 유용하게 잘 쓰고 있습니다.",
        "likes": 38
      },
      {
        "id": "rev-prod-45-4",
        "author": "안*지",
        "rating": 5,
        "date": "2026-09-18",
        "content": "마감 퀄리티가 정교하고 흠집 없이 깨끗하게 배송되었습니다.",
        "likes": 37
      },
      {
        "id": "rev-prod-45-5",
        "author": "송*정",
        "rating": 5,
        "date": "2026-09-15",
        "content": "집들이 선물로 가져갔는데 센스 있다는 칭찬 엄청 들었어요.",
        "likes": 35
      },
      {
        "id": "rev-prod-45-6",
        "author": "전*영",
        "rating": 5,
        "date": "2026-09-12",
        "content": "재질이 고급스럽고 내구성이 좋아서 오래 쓸 수 있겠어요.",
        "likes": 34
      },
      {
        "id": "rev-prod-45-7",
        "author": "홍*원",
        "rating": 4,
        "date": "2026-09-09",
        "content": "사용법이 간편하고 세척 및 관리하기가 정말 수월합니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-45-8",
        "author": "유*린",
        "rating": 5,
        "date": "2026-09-06",
        "content": "원목과 패브릭의 따뜻한 감성이 일상에 큰 힐링을 줍니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-45-9",
        "author": "고*준",
        "rating": 5,
        "date": "2026-09-03",
        "content": "크기와 비율이 딱 적당해서 공간 차지도 많이 안 하고 좋아요.",
        "likes": 29
      },
      {
        "id": "rev-prod-45-10",
        "author": "문*경",
        "rating": 5,
        "date": "2026-08-31",
        "content": "가격 대비 만족도가 200%인 리빙 인테리어 소품입니다.",
        "likes": 27
      },
      {
        "id": "rev-prod-45-11",
        "author": "양*수",
        "rating": 5,
        "date": "2026-08-28",
        "content": "눈에 띌 때마다 기분이 좋아지는 감성 가득한 아이템이에요.",
        "likes": 26
      },
      {
        "id": "rev-prod-45-12",
        "author": "손*우",
        "rating": 5,
        "date": "2026-08-25",
        "content": "선물 포장 상자부터 완충재까지 정성이 가득 담겨왔습니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-45-13",
        "author": "배*희",
        "rating": 4,
        "date": "2026-08-22",
        "content": "침실 협탁과 거실 선반 어디에 올려두어도 멋스럽습니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-45-14",
        "author": "백*진",
        "rating": 5,
        "date": "2026-08-19",
        "content": "튼튼하면서도 가벼워서 위치를 옮겨가며 쓰기 편해요.",
        "likes": 21
      },
      {
        "id": "rev-prod-45-15",
        "author": "허*아",
        "rating": 5,
        "date": "2026-08-16",
        "content": "집안에 머무는 시간이 더 행복해지는 기분 좋은 변화입니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-45-16",
        "author": "노*태",
        "rating": 5,
        "date": "2026-08-13",
        "content": "색감이 모던하고 은은해서 어떤 가구와도 잘 어울립니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-45-17",
        "author": "남*현",
        "rating": 5,
        "date": "2026-08-10",
        "content": "주변 지인들에게도 강력 추천하고 있는 애정템입니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-45-18",
        "author": "심*호",
        "rating": 5,
        "date": "2026-08-07",
        "content": "작은 소품 하나로 삶의 질이 수직 상승한 걸 느낍니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-45-19",
        "author": "김*훈",
        "rating": 4,
        "date": "2026-08-04",
        "content": "이지샵 리빙 카테고리는 늘 실패가 없어서 믿고 삽니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-45-20",
        "author": "이*서",
        "rating": 5,
        "date": "2026-08-01",
        "content": "가성비와 감성을 모두 잡은 최고의 인테리어 아이템입니다!",
        "likes": 11
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-45-1",
        "author": "홍*민",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-46",
    "name": "인체공학 C커브 3D 고밀도 메모리폼 경추베개",
    "category": "리빙 / 인테리어",
    "categoryId": "cat-living",
    "price": 49000,
    "originalPrice": 69000,
    "discountRate": 29,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 45,
    "isBest": true,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": true,
    "thumbnail": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "목뼈의 자연스러운 C자 곡선 완벽 지지, 텐셀 오가닉 항균 커버 포함",
    "description": "<h3>목뼈의 자연스러운 C자 곡선 완벽 지지, 텐셀 오가닉 항균 커버 포함</h3>\n<p>인체공학 C커브 3D 고밀도 메모리폼 경추베개은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80\" alt=\"인체공학 C커브 3D 고밀도 메모리폼 경추베개 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">인체공학 C커브 3D 고밀도 메모리폼 경추베개의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80\" alt=\"인체공학 C커브 3D 고밀도 메모리폼 경추베개 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80\" alt=\"인체공학 C커브 3D 고밀도 메모리폼 경추베개 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "스탠다드 (높이 9-11cm)",
        "stock": 35
      },
      {
        "name": "로우 (높이 7-9cm / 낮은 베개 선호)",
        "stock": 25
      }
    ],
    "specs": {
      "내장재": "60D 고밀도 메모리폼",
      "커버": "오가닉 텐셀 100% 분리세탁형"
    },
    "reviews": [
      {
        "id": "rev-prod-46-1",
        "author": "박*은",
        "rating": 4,
        "date": "2026-09-26",
        "content": "인체공학 C커브 3D 고밀도 메모리폼 경추베개 하나로 집안 분위기가 호텔처럼 아늑해졌습니다.",
        "likes": 34
      },
      {
        "id": "rev-prod-46-2",
        "author": "최*윤",
        "rating": 5,
        "date": "2026-09-23",
        "content": "디자인이 감각적이고 공간 어디에 두어도 인테리어가 사네요.",
        "likes": 32
      },
      {
        "id": "rev-prod-46-3",
        "author": "정*민",
        "rating": 5,
        "date": "2026-09-20",
        "content": "실용성이 뛰어나서 매일매일 유용하게 잘 쓰고 있습니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-46-4",
        "author": "강*지",
        "rating": 5,
        "date": "2026-09-17",
        "content": "마감 퀄리티가 정교하고 흠집 없이 깨끗하게 배송되었습니다.",
        "likes": 29
      },
      {
        "id": "rev-prod-46-5",
        "author": "조*정",
        "rating": 5,
        "date": "2026-09-14",
        "content": "집들이 선물로 가져갔는데 센스 있다는 칭찬 엄청 들었어요.",
        "likes": 27
      },
      {
        "id": "rev-prod-46-6",
        "author": "윤*영",
        "rating": 5,
        "date": "2026-09-11",
        "content": "재질이 고급스럽고 내구성이 좋아서 오래 쓸 수 있겠어요.",
        "likes": 26
      },
      {
        "id": "rev-prod-46-7",
        "author": "장*원",
        "rating": 4,
        "date": "2026-09-08",
        "content": "사용법이 간편하고 세척 및 관리하기가 정말 수월합니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-46-8",
        "author": "임*린",
        "rating": 5,
        "date": "2026-09-05",
        "content": "원목과 패브릭의 따뜻한 감성이 일상에 큰 힐링을 줍니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-46-9",
        "author": "한*준",
        "rating": 5,
        "date": "2026-09-02",
        "content": "크기와 비율이 딱 적당해서 공간 차지도 많이 안 하고 좋아요.",
        "likes": 21
      },
      {
        "id": "rev-prod-46-10",
        "author": "오*경",
        "rating": 5,
        "date": "2026-08-30",
        "content": "가격 대비 만족도가 200%인 리빙 인테리어 소품입니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-46-11",
        "author": "서*수",
        "rating": 5,
        "date": "2026-08-27",
        "content": "눈에 띌 때마다 기분이 좋아지는 감성 가득한 아이템이에요.",
        "likes": 18
      },
      {
        "id": "rev-prod-46-12",
        "author": "신*우",
        "rating": 5,
        "date": "2026-08-24",
        "content": "선물 포장 상자부터 완충재까지 정성이 가득 담겨왔습니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-46-13",
        "author": "권*희",
        "rating": 4,
        "date": "2026-08-21",
        "content": "침실 협탁과 거실 선반 어디에 올려두어도 멋스럽습니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-46-14",
        "author": "황*진",
        "rating": 5,
        "date": "2026-08-18",
        "content": "튼튼하면서도 가벼워서 위치를 옮겨가며 쓰기 편해요.",
        "likes": 13
      },
      {
        "id": "rev-prod-46-15",
        "author": "안*아",
        "rating": 5,
        "date": "2026-08-15",
        "content": "집안에 머무는 시간이 더 행복해지는 기분 좋은 변화입니다.",
        "likes": 11
      },
      {
        "id": "rev-prod-46-16",
        "author": "송*태",
        "rating": 5,
        "date": "2026-08-12",
        "content": "색감이 모던하고 은은해서 어떤 가구와도 잘 어울립니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-46-17",
        "author": "전*현",
        "rating": 5,
        "date": "2026-08-09",
        "content": "주변 지인들에게도 강력 추천하고 있는 애정템입니다.",
        "likes": 8
      },
      {
        "id": "rev-prod-46-18",
        "author": "홍*호",
        "rating": 5,
        "date": "2026-08-06",
        "content": "작은 소품 하나로 삶의 질이 수직 상승한 걸 느낍니다.",
        "likes": 6
      },
      {
        "id": "rev-prod-46-19",
        "author": "유*훈",
        "rating": 4,
        "date": "2026-08-03",
        "content": "이지샵 리빙 카테고리는 늘 실패가 없어서 믿고 삽니다.",
        "likes": 5
      },
      {
        "id": "rev-prod-46-20",
        "author": "고*서",
        "rating": 5,
        "date": "2026-07-31",
        "content": "가성비와 감성을 모두 잡은 최고의 인테리어 아이템입니다!",
        "likes": 3
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-46-1",
        "author": "유*지",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-47",
    "name": "이중 진공 단열 스테인리스 텀블러 710ml (스트로우 겸용)",
    "category": "리빙 / 인테리어",
    "categoryId": "cat-living",
    "price": 32000,
    "originalPrice": 45000,
    "discountRate": 29,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 52,
    "isBest": true,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "최대 24시간 보냉 & 12시간 보온, 차량 컵홀더 완벽 호환 대용량 텀블러",
    "description": "<h3>최대 24시간 보냉 & 12시간 보온, 차량 컵홀더 완벽 호환 대용량 텀블러</h3>\n<p>이중 진공 단열 스테인리스 텀블러 710ml (스트로우 겸용)은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80\" alt=\"이중 진공 단열 스테인리스 텀블러 710ml (스트로우 겸용) 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">이중 진공 단열 스테인리스 텀블러 710ml (스트로우 겸용)의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=800&q=80\" alt=\"이중 진공 단열 스테인리스 텀블러 710ml (스트로우 겸용) 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80\" alt=\"이중 진공 단열 스테인리스 텀블러 710ml (스트로우 겸용) 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "매트 크림 화이트 (710ml)",
        "stock": 40
      },
      {
        "name": "미드나잇 네이비 (710ml)",
        "stock": 30
      }
    ],
    "specs": {
      "용량": "710ml (24oz)",
      "보냉/보온": "보냉 24h, 보온 12h",
      "재질": "STS 304"
    },
    "reviews": [
      {
        "id": "rev-prod-47-1",
        "author": "문*은",
        "rating": 4,
        "date": "2026-09-25",
        "content": "이중 진공 단열 스테인리스 텀블러 710ml (스트로우 겸용) 하나로 집안 분위기가 호텔처럼 아늑해졌습니다.",
        "likes": 36
      },
      {
        "id": "rev-prod-47-2",
        "author": "양*윤",
        "rating": 5,
        "date": "2026-09-22",
        "content": "디자인이 감각적이고 공간 어디에 두어도 인테리어가 사네요.",
        "likes": 34
      },
      {
        "id": "rev-prod-47-3",
        "author": "손*민",
        "rating": 5,
        "date": "2026-09-19",
        "content": "실용성이 뛰어나서 매일매일 유용하게 잘 쓰고 있습니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-47-4",
        "author": "배*지",
        "rating": 5,
        "date": "2026-09-16",
        "content": "마감 퀄리티가 정교하고 흠집 없이 깨끗하게 배송되었습니다.",
        "likes": 31
      },
      {
        "id": "rev-prod-47-5",
        "author": "백*정",
        "rating": 5,
        "date": "2026-09-13",
        "content": "집들이 선물로 가져갔는데 센스 있다는 칭찬 엄청 들었어요.",
        "likes": 29
      },
      {
        "id": "rev-prod-47-6",
        "author": "허*영",
        "rating": 5,
        "date": "2026-09-10",
        "content": "재질이 고급스럽고 내구성이 좋아서 오래 쓸 수 있겠어요.",
        "likes": 28
      },
      {
        "id": "rev-prod-47-7",
        "author": "노*원",
        "rating": 4,
        "date": "2026-09-07",
        "content": "사용법이 간편하고 세척 및 관리하기가 정말 수월합니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-47-8",
        "author": "남*린",
        "rating": 5,
        "date": "2026-09-04",
        "content": "원목과 패브릭의 따뜻한 감성이 일상에 큰 힐링을 줍니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-47-9",
        "author": "심*준",
        "rating": 5,
        "date": "2026-09-01",
        "content": "크기와 비율이 딱 적당해서 공간 차지도 많이 안 하고 좋아요.",
        "likes": 23
      },
      {
        "id": "rev-prod-47-10",
        "author": "김*경",
        "rating": 5,
        "date": "2026-08-29",
        "content": "가격 대비 만족도가 200%인 리빙 인테리어 소품입니다.",
        "likes": 21
      },
      {
        "id": "rev-prod-47-11",
        "author": "이*수",
        "rating": 5,
        "date": "2026-08-26",
        "content": "눈에 띌 때마다 기분이 좋아지는 감성 가득한 아이템이에요.",
        "likes": 20
      },
      {
        "id": "rev-prod-47-12",
        "author": "박*우",
        "rating": 5,
        "date": "2026-08-23",
        "content": "선물 포장 상자부터 완충재까지 정성이 가득 담겨왔습니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-47-13",
        "author": "최*희",
        "rating": 4,
        "date": "2026-08-20",
        "content": "침실 협탁과 거실 선반 어디에 올려두어도 멋스럽습니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-47-14",
        "author": "정*진",
        "rating": 5,
        "date": "2026-08-17",
        "content": "튼튼하면서도 가벼워서 위치를 옮겨가며 쓰기 편해요.",
        "likes": 15
      },
      {
        "id": "rev-prod-47-15",
        "author": "강*아",
        "rating": 5,
        "date": "2026-08-14",
        "content": "집안에 머무는 시간이 더 행복해지는 기분 좋은 변화입니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-47-16",
        "author": "조*태",
        "rating": 5,
        "date": "2026-08-11",
        "content": "색감이 모던하고 은은해서 어떤 가구와도 잘 어울립니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-47-17",
        "author": "윤*현",
        "rating": 5,
        "date": "2026-08-08",
        "content": "주변 지인들에게도 강력 추천하고 있는 애정템입니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-47-18",
        "author": "장*호",
        "rating": 5,
        "date": "2026-08-05",
        "content": "작은 소품 하나로 삶의 질이 수직 상승한 걸 느낍니다.",
        "likes": 8
      },
      {
        "id": "rev-prod-47-19",
        "author": "임*훈",
        "rating": 4,
        "date": "2026-08-02",
        "content": "이지샵 리빙 카테고리는 늘 실패가 없어서 믿고 삽니다.",
        "likes": 7
      },
      {
        "id": "rev-prod-47-20",
        "author": "한*서",
        "rating": 5,
        "date": "2026-07-30",
        "content": "가성비와 감성을 모두 잡은 최고의 인테리어 아이템입니다!",
        "likes": 5
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-47-1",
        "author": "고*정",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-48",
    "name": "모던 세라믹 오브제 화병 꽃병 (2종 세트)",
    "category": "리빙 / 인테리어",
    "categoryId": "cat-living",
    "price": 34000,
    "originalPrice": 48000,
    "discountRate": 29,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 59,
    "isBest": false,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "감각적인 도넛 & 아치형 실루엣, 꽃 없이 오브제 자체로도 공간을 채우는 아트 피스",
    "description": "<h3>감각적인 도넛 & 아치형 실루엣, 꽃 없이 오브제 자체로도 공간을 채우는 아트 피스</h3>\n<p>모던 세라믹 오브제 화병 꽃병 (2종 세트)은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80\" alt=\"모던 세라믹 오브제 화병 꽃병 (2종 세트) 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">모던 세라믹 오브제 화병 꽃병 (2종 세트)의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80\" alt=\"모던 세라믹 오브제 화병 꽃병 (2종 세트) 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80\" alt=\"모던 세라믹 오브제 화병 꽃병 (2종 세트) 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "베이지 & 테라코타 2종 세트",
        "stock": 30
      }
    ],
    "specs": {
      "재질": "매트 도자기",
      "구성": "도넛 화병 1P + 아치 화병 1P"
    },
    "reviews": [
      {
        "id": "rev-prod-48-1",
        "author": "오*은",
        "rating": 4,
        "date": "2026-09-24",
        "content": "모던 세라믹 오브제 화병 꽃병 (2종 세트) 하나로 집안 분위기가 호텔처럼 아늑해졌습니다.",
        "likes": 38
      },
      {
        "id": "rev-prod-48-2",
        "author": "서*윤",
        "rating": 5,
        "date": "2026-09-21",
        "content": "디자인이 감각적이고 공간 어디에 두어도 인테리어가 사네요.",
        "likes": 36
      },
      {
        "id": "rev-prod-48-3",
        "author": "신*민",
        "rating": 5,
        "date": "2026-09-18",
        "content": "실용성이 뛰어나서 매일매일 유용하게 잘 쓰고 있습니다.",
        "likes": 34
      },
      {
        "id": "rev-prod-48-4",
        "author": "권*지",
        "rating": 5,
        "date": "2026-09-15",
        "content": "마감 퀄리티가 정교하고 흠집 없이 깨끗하게 배송되었습니다.",
        "likes": 33
      },
      {
        "id": "rev-prod-48-5",
        "author": "황*정",
        "rating": 5,
        "date": "2026-09-12",
        "content": "집들이 선물로 가져갔는데 센스 있다는 칭찬 엄청 들었어요.",
        "likes": 31
      },
      {
        "id": "rev-prod-48-6",
        "author": "안*영",
        "rating": 5,
        "date": "2026-09-09",
        "content": "재질이 고급스럽고 내구성이 좋아서 오래 쓸 수 있겠어요.",
        "likes": 30
      },
      {
        "id": "rev-prod-48-7",
        "author": "송*원",
        "rating": 4,
        "date": "2026-09-06",
        "content": "사용법이 간편하고 세척 및 관리하기가 정말 수월합니다.",
        "likes": 28
      },
      {
        "id": "rev-prod-48-8",
        "author": "전*린",
        "rating": 5,
        "date": "2026-09-03",
        "content": "원목과 패브릭의 따뜻한 감성이 일상에 큰 힐링을 줍니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-48-9",
        "author": "홍*준",
        "rating": 5,
        "date": "2026-08-31",
        "content": "크기와 비율이 딱 적당해서 공간 차지도 많이 안 하고 좋아요.",
        "likes": 25
      },
      {
        "id": "rev-prod-48-10",
        "author": "유*경",
        "rating": 5,
        "date": "2026-08-28",
        "content": "가격 대비 만족도가 200%인 리빙 인테리어 소품입니다.",
        "likes": 23
      },
      {
        "id": "rev-prod-48-11",
        "author": "고*수",
        "rating": 5,
        "date": "2026-08-25",
        "content": "눈에 띌 때마다 기분이 좋아지는 감성 가득한 아이템이에요.",
        "likes": 22
      },
      {
        "id": "rev-prod-48-12",
        "author": "문*우",
        "rating": 5,
        "date": "2026-08-22",
        "content": "선물 포장 상자부터 완충재까지 정성이 가득 담겨왔습니다.",
        "likes": 20
      },
      {
        "id": "rev-prod-48-13",
        "author": "양*희",
        "rating": 4,
        "date": "2026-08-19",
        "content": "침실 협탁과 거실 선반 어디에 올려두어도 멋스럽습니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-48-14",
        "author": "손*진",
        "rating": 5,
        "date": "2026-08-16",
        "content": "튼튼하면서도 가벼워서 위치를 옮겨가며 쓰기 편해요.",
        "likes": 17
      },
      {
        "id": "rev-prod-48-15",
        "author": "배*아",
        "rating": 5,
        "date": "2026-08-13",
        "content": "집안에 머무는 시간이 더 행복해지는 기분 좋은 변화입니다.",
        "likes": 15
      },
      {
        "id": "rev-prod-48-16",
        "author": "백*태",
        "rating": 5,
        "date": "2026-08-10",
        "content": "색감이 모던하고 은은해서 어떤 가구와도 잘 어울립니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-48-17",
        "author": "허*현",
        "rating": 5,
        "date": "2026-08-07",
        "content": "주변 지인들에게도 강력 추천하고 있는 애정템입니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-48-18",
        "author": "노*호",
        "rating": 5,
        "date": "2026-08-04",
        "content": "작은 소품 하나로 삶의 질이 수직 상승한 걸 느낍니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-48-19",
        "author": "남*훈",
        "rating": 4,
        "date": "2026-08-01",
        "content": "이지샵 리빙 카테고리는 늘 실패가 없어서 믿고 삽니다.",
        "likes": 9
      },
      {
        "id": "rev-prod-48-20",
        "author": "심*서",
        "rating": 5,
        "date": "2026-07-29",
        "content": "가성비와 감성을 모두 잡은 최고의 인테리어 아이템입니다!",
        "likes": 7
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-48-1",
        "author": "문*영",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-49",
    "name": "스페셜티 드립백 커피 시그니처 4종 기프트 세트",
    "category": "푸드 / 키친",
    "categoryId": "cat-food",
    "price": 28000,
    "originalPrice": 35000,
    "discountRate": 20,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 66,
    "isBest": true,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "에티오피아 예가체프, 과테말라 안티구아, 콜롬비아 수프리모 등 최고 등급 20개입",
    "description": "<h3>에티오피아 예가체프, 과테말라 안티구아, 콜롬비아 수프리모 등 최고 등급 20개입</h3>\n<p>스페셜티 드립백 커피 시그니처 4종 기프트 세트은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80\" alt=\"스페셜티 드립백 커피 시그니처 4종 기프트 세트 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">스페셜티 드립백 커피 시그니처 4종 기프트 세트의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80\" alt=\"스페셜티 드립백 커피 시그니처 4종 기프트 세트 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80\" alt=\"스페셜티 드립백 커피 시그니처 4종 기프트 세트 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "시그니처 버라이어티 20개입",
        "stock": 60
      },
      {
        "name": "다크 로스팅 에디션 20개입",
        "stock": 30
      }
    ],
    "specs": {
      "구성": "드립백 10g x 20개",
      "포장": "선물용 하드케이스 & 쇼핑백"
    },
    "reviews": [
      {
        "id": "rev-prod-49-1",
        "author": "김*은",
        "rating": 4,
        "date": "2026-09-23",
        "content": "스페셜티 드립백 커피 시그니처 4종 기프트 세트 맛과 풍미가 깊고 신선함이 입안 가득 느껴집니다.",
        "likes": 40
      },
      {
        "id": "rev-prod-49-2",
        "author": "이*윤",
        "rating": 5,
        "date": "2026-09-20",
        "content": "포장 상태가 너무 정갈해서 선물용으로도 손색이 없네요.",
        "likes": 38
      },
      {
        "id": "rev-prod-49-3",
        "author": "박*민",
        "rating": 5,
        "date": "2026-09-17",
        "content": "자연 그대로의 건강한 단맛과 감칠맛이 일품입니다.",
        "likes": 36
      },
      {
        "id": "rev-prod-49-4",
        "author": "최*지",
        "rating": 5,
        "date": "2026-09-14",
        "content": "아이들과 온 가족이 모두 맛있다고 간식으로 순삭했어요.",
        "likes": 35
      },
      {
        "id": "rev-prod-49-5",
        "author": "정*정",
        "rating": 5,
        "date": "2026-09-11",
        "content": "신선한 재료 본연의 맛이 살아있어 요리의 품격이 올라갑니다.",
        "likes": 33
      },
      {
        "id": "rev-prod-49-6",
        "author": "강*영",
        "rating": 5,
        "date": "2026-09-08",
        "content": "아침 식사 대용이나 홈카페 티타임에 곁들이기 딱 좋아요.",
        "likes": 32
      },
      {
        "id": "rev-prod-49-7",
        "author": "조*원",
        "rating": 4,
        "date": "2026-09-05",
        "content": "유통기한도 넉넉하고 제조일자가 최근이라 안심하고 먹습니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-49-8",
        "author": "윤*린",
        "rating": 5,
        "date": "2026-09-02",
        "content": "시중 마트 제품과는 비교가 안 되는 프리미엄 퀄리티입니다.",
        "likes": 28
      },
      {
        "id": "rev-prod-49-9",
        "author": "장*준",
        "rating": 5,
        "date": "2026-08-30",
        "content": "부모님께 보내드렸는데 너무 맛있다고 극찬을 아끼지 않으셨어요.",
        "likes": 27
      },
      {
        "id": "rev-prod-49-10",
        "author": "임*경",
        "rating": 5,
        "date": "2026-08-27",
        "content": "패키지 디자인도 세련되고 보관하기 편한 용기라 만족합니다.",
        "likes": 25
      },
      {
        "id": "rev-prod-49-11",
        "author": "한*수",
        "rating": 5,
        "date": "2026-08-24",
        "content": "자극적이지 않고 깔끔해서 매일 먹어도 질리지 않아요.",
        "likes": 24
      },
      {
        "id": "rev-prod-49-12",
        "author": "오*우",
        "rating": 5,
        "date": "2026-08-21",
        "content": "원산지와 유기농 인증이 확실해서 믿고 먹을 수 있습니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-49-13",
        "author": "서*희",
        "rating": 4,
        "date": "2026-08-18",
        "content": "친구들 놀러 왔을 때 대접했는데 다들 어디서 샀냐고 물어보네요.",
        "likes": 20
      },
      {
        "id": "rev-prod-49-14",
        "author": "신*진",
        "rating": 5,
        "date": "2026-08-15",
        "content": "정기배송하고 싶을 정도로 만족스러운 고품격 푸드입니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-49-15",
        "author": "권*아",
        "rating": 5,
        "date": "2026-08-12",
        "content": "신선도를 유지해 주는 꼼꼼한 이중 포장에 감동했습니다.",
        "likes": 17
      },
      {
        "id": "rev-prod-49-16",
        "author": "황*태",
        "rating": 5,
        "date": "2026-08-09",
        "content": "홈카페와 홈쿠킹 퀄리티가 전문점 수준으로 업그레이드됐어요.",
        "likes": 16
      },
      {
        "id": "rev-prod-49-17",
        "author": "안*현",
        "rating": 5,
        "date": "2026-08-06",
        "content": "재구매 의사 1000%입니다. 다 먹으면 또 주문할게요.",
        "likes": 14
      },
      {
        "id": "rev-prod-49-18",
        "author": "송*호",
        "rating": 5,
        "date": "2026-08-03",
        "content": "지인 답례품으로 돌렸는데 반응이 역대급으로 좋았습니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-49-19",
        "author": "전*훈",
        "rating": 4,
        "date": "2026-07-31",
        "content": "정성이 가득 담긴 건강한 먹거리라 몸도 마음도 든든합니다.",
        "likes": 11
      },
      {
        "id": "rev-prod-49-20",
        "author": "홍*서",
        "rating": 5,
        "date": "2026-07-28",
        "content": "맛, 영양, 포장까지 3박자를 모두 갖춘 최고의 제품입니다!",
        "likes": 9
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-49-1",
        "author": "양*원",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-50",
    "name": "유기농 프리미엄 마누카 꿀 UMF 15+ MGO 514 (250g/500g)",
    "category": "푸드 / 키친",
    "categoryId": "cat-food",
    "price": 88000,
    "originalPrice": 125000,
    "discountRate": 29,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 73,
    "isBest": true,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": true,
    "thumbnail": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "뉴질랜드 100% 정품 인증, 풍부한 항산화와 면역력을 챙기는 프리미엄 천연 꿀",
    "description": "<h3>뉴질랜드 100% 정품 인증, 풍부한 항산화와 면역력을 챙기는 프리미엄 천연 꿀</h3>\n<p>유기농 프리미엄 마누카 꿀 UMF 15+ MGO 514 (250g/500g)은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80\" alt=\"유기농 프리미엄 마누카 꿀 UMF 15+ MGO 514 (250g/500g) 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">유기농 프리미엄 마누카 꿀 UMF 15+ MGO 514 (250g/500g)의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80\" alt=\"유기농 프리미엄 마누카 꿀 UMF 15+ MGO 514 (250g/500g) 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=800&q=80\" alt=\"유기농 프리미엄 마누카 꿀 UMF 15+ MGO 514 (250g/500g) 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "마누카 UMF 15+ (250g)",
        "stock": 25
      },
      {
        "name": "마누카 UMF 15+ (500g)",
        "stock": 20
      }
    ],
    "specs": {
      "등급": "UMF 15+ (MGO 514+)",
      "원산지": "뉴질랜드 100% 직수입"
    },
    "reviews": [
      {
        "id": "rev-prod-50-1",
        "author": "유*은",
        "rating": 4,
        "date": "2026-09-29",
        "content": "유기농 프리미엄 마누카 꿀 UMF 15+ MGO 514 (250g/500g) 맛과 풍미가 깊고 신선함이 입안 가득 느껴집니다.",
        "likes": 42
      },
      {
        "id": "rev-prod-50-2",
        "author": "고*윤",
        "rating": 5,
        "date": "2026-09-26",
        "content": "포장 상태가 너무 정갈해서 선물용으로도 손색이 없네요.",
        "likes": 40
      },
      {
        "id": "rev-prod-50-3",
        "author": "문*민",
        "rating": 5,
        "date": "2026-09-23",
        "content": "자연 그대로의 건강한 단맛과 감칠맛이 일품입니다.",
        "likes": 38
      },
      {
        "id": "rev-prod-50-4",
        "author": "양*지",
        "rating": 5,
        "date": "2026-09-20",
        "content": "아이들과 온 가족이 모두 맛있다고 간식으로 순삭했어요.",
        "likes": 37
      },
      {
        "id": "rev-prod-50-5",
        "author": "손*정",
        "rating": 5,
        "date": "2026-09-17",
        "content": "신선한 재료 본연의 맛이 살아있어 요리의 품격이 올라갑니다.",
        "likes": 35
      },
      {
        "id": "rev-prod-50-6",
        "author": "배*영",
        "rating": 5,
        "date": "2026-09-14",
        "content": "아침 식사 대용이나 홈카페 티타임에 곁들이기 딱 좋아요.",
        "likes": 34
      },
      {
        "id": "rev-prod-50-7",
        "author": "백*원",
        "rating": 4,
        "date": "2026-09-11",
        "content": "유통기한도 넉넉하고 제조일자가 최근이라 안심하고 먹습니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-50-8",
        "author": "허*린",
        "rating": 5,
        "date": "2026-09-08",
        "content": "시중 마트 제품과는 비교가 안 되는 프리미엄 퀄리티입니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-50-9",
        "author": "노*준",
        "rating": 5,
        "date": "2026-09-05",
        "content": "부모님께 보내드렸는데 너무 맛있다고 극찬을 아끼지 않으셨어요.",
        "likes": 29
      },
      {
        "id": "rev-prod-50-10",
        "author": "남*경",
        "rating": 5,
        "date": "2026-09-02",
        "content": "패키지 디자인도 세련되고 보관하기 편한 용기라 만족합니다.",
        "likes": 27
      },
      {
        "id": "rev-prod-50-11",
        "author": "심*수",
        "rating": 5,
        "date": "2026-08-30",
        "content": "자극적이지 않고 깔끔해서 매일 먹어도 질리지 않아요.",
        "likes": 26
      },
      {
        "id": "rev-prod-50-12",
        "author": "김*우",
        "rating": 5,
        "date": "2026-08-27",
        "content": "원산지와 유기농 인증이 확실해서 믿고 먹을 수 있습니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-50-13",
        "author": "이*희",
        "rating": 4,
        "date": "2026-08-24",
        "content": "친구들 놀러 왔을 때 대접했는데 다들 어디서 샀냐고 물어보네요.",
        "likes": 22
      },
      {
        "id": "rev-prod-50-14",
        "author": "박*진",
        "rating": 5,
        "date": "2026-08-21",
        "content": "정기배송하고 싶을 정도로 만족스러운 고품격 푸드입니다.",
        "likes": 21
      },
      {
        "id": "rev-prod-50-15",
        "author": "최*아",
        "rating": 5,
        "date": "2026-08-18",
        "content": "신선도를 유지해 주는 꼼꼼한 이중 포장에 감동했습니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-50-16",
        "author": "정*태",
        "rating": 5,
        "date": "2026-08-15",
        "content": "홈카페와 홈쿠킹 퀄리티가 전문점 수준으로 업그레이드됐어요.",
        "likes": 18
      },
      {
        "id": "rev-prod-50-17",
        "author": "강*현",
        "rating": 5,
        "date": "2026-08-12",
        "content": "재구매 의사 1000%입니다. 다 먹으면 또 주문할게요.",
        "likes": 16
      },
      {
        "id": "rev-prod-50-18",
        "author": "조*호",
        "rating": 5,
        "date": "2026-08-09",
        "content": "지인 답례품으로 돌렸는데 반응이 역대급으로 좋았습니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-50-19",
        "author": "윤*훈",
        "rating": 4,
        "date": "2026-08-06",
        "content": "정성이 가득 담긴 건강한 먹거리라 몸도 마음도 든든합니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-50-20",
        "author": "장*서",
        "rating": 5,
        "date": "2026-08-03",
        "content": "맛, 영양, 포장까지 3박자를 모두 갖춘 최고의 제품입니다!",
        "likes": 11
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-50-1",
        "author": "손*린",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-51",
    "name": "지중해 유기농 엑스트라 버진 올리브오일 500ml (산도 0.2% 이하)",
    "category": "푸드 / 키친",
    "categoryId": "cat-food",
    "price": 36000,
    "originalPrice": 48000,
    "discountRate": 25,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 30,
    "isBest": true,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "스페인 안달루시아 단일 품종 조기 수확, 싱그러운 풀향과 매콤한 폴리페놀의 풍미",
    "description": "<h3>스페인 안달루시아 단일 품종 조기 수확, 싱그러운 풀향과 매콤한 폴리페놀의 풍미</h3>\n<p>지중해 유기농 엑스트라 버진 올리브오일 500ml (산도 0.2% 이하)은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80\" alt=\"지중해 유기농 엑스트라 버진 올리브오일 500ml (산도 0.2% 이하) 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">지중해 유기농 엑스트라 버진 올리브오일 500ml (산도 0.2% 이하)의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80\" alt=\"지중해 유기농 엑스트라 버진 올리브오일 500ml (산도 0.2% 이하) 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=800&q=80\" alt=\"지중해 유기농 엑스트라 버진 올리브오일 500ml (산도 0.2% 이하) 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "본품 500ml 유리병",
        "stock": 40
      },
      {
        "name": "선물용 2본입 세트 (500ml x 2)",
        "stock": 25
      }
    ],
    "specs": {
      "산도": "0.18% (엑스트라 버진 기준 충족)",
      "추출": "냉압착 방식"
    },
    "reviews": [
      {
        "id": "rev-prod-51-1",
        "author": "임*은",
        "rating": 4,
        "date": "2026-09-28",
        "content": "지중해 유기농 엑스트라 버진 올리브오일 500ml (산도 0.2% 이하) 맛과 풍미가 깊고 신선함이 입안 가득 느껴집니다.",
        "likes": 34
      },
      {
        "id": "rev-prod-51-2",
        "author": "한*윤",
        "rating": 5,
        "date": "2026-09-25",
        "content": "포장 상태가 너무 정갈해서 선물용으로도 손색이 없네요.",
        "likes": 32
      },
      {
        "id": "rev-prod-51-3",
        "author": "오*민",
        "rating": 5,
        "date": "2026-09-22",
        "content": "자연 그대로의 건강한 단맛과 감칠맛이 일품입니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-51-4",
        "author": "서*지",
        "rating": 5,
        "date": "2026-09-19",
        "content": "아이들과 온 가족이 모두 맛있다고 간식으로 순삭했어요.",
        "likes": 29
      },
      {
        "id": "rev-prod-51-5",
        "author": "신*정",
        "rating": 5,
        "date": "2026-09-16",
        "content": "신선한 재료 본연의 맛이 살아있어 요리의 품격이 올라갑니다.",
        "likes": 27
      },
      {
        "id": "rev-prod-51-6",
        "author": "권*영",
        "rating": 5,
        "date": "2026-09-13",
        "content": "아침 식사 대용이나 홈카페 티타임에 곁들이기 딱 좋아요.",
        "likes": 26
      },
      {
        "id": "rev-prod-51-7",
        "author": "황*원",
        "rating": 4,
        "date": "2026-09-10",
        "content": "유통기한도 넉넉하고 제조일자가 최근이라 안심하고 먹습니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-51-8",
        "author": "안*린",
        "rating": 5,
        "date": "2026-09-07",
        "content": "시중 마트 제품과는 비교가 안 되는 프리미엄 퀄리티입니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-51-9",
        "author": "송*준",
        "rating": 5,
        "date": "2026-09-04",
        "content": "부모님께 보내드렸는데 너무 맛있다고 극찬을 아끼지 않으셨어요.",
        "likes": 21
      },
      {
        "id": "rev-prod-51-10",
        "author": "전*경",
        "rating": 5,
        "date": "2026-09-01",
        "content": "패키지 디자인도 세련되고 보관하기 편한 용기라 만족합니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-51-11",
        "author": "홍*수",
        "rating": 5,
        "date": "2026-08-29",
        "content": "자극적이지 않고 깔끔해서 매일 먹어도 질리지 않아요.",
        "likes": 18
      },
      {
        "id": "rev-prod-51-12",
        "author": "유*우",
        "rating": 5,
        "date": "2026-08-26",
        "content": "원산지와 유기농 인증이 확실해서 믿고 먹을 수 있습니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-51-13",
        "author": "고*희",
        "rating": 4,
        "date": "2026-08-23",
        "content": "친구들 놀러 왔을 때 대접했는데 다들 어디서 샀냐고 물어보네요.",
        "likes": 14
      },
      {
        "id": "rev-prod-51-14",
        "author": "문*진",
        "rating": 5,
        "date": "2026-08-20",
        "content": "정기배송하고 싶을 정도로 만족스러운 고품격 푸드입니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-51-15",
        "author": "양*아",
        "rating": 5,
        "date": "2026-08-17",
        "content": "신선도를 유지해 주는 꼼꼼한 이중 포장에 감동했습니다.",
        "likes": 11
      },
      {
        "id": "rev-prod-51-16",
        "author": "손*태",
        "rating": 5,
        "date": "2026-08-14",
        "content": "홈카페와 홈쿠킹 퀄리티가 전문점 수준으로 업그레이드됐어요.",
        "likes": 10
      },
      {
        "id": "rev-prod-51-17",
        "author": "배*현",
        "rating": 5,
        "date": "2026-08-11",
        "content": "재구매 의사 1000%입니다. 다 먹으면 또 주문할게요.",
        "likes": 8
      },
      {
        "id": "rev-prod-51-18",
        "author": "백*호",
        "rating": 5,
        "date": "2026-08-08",
        "content": "지인 답례품으로 돌렸는데 반응이 역대급으로 좋았습니다.",
        "likes": 6
      },
      {
        "id": "rev-prod-51-19",
        "author": "허*훈",
        "rating": 4,
        "date": "2026-08-05",
        "content": "정성이 가득 담긴 건강한 먹거리라 몸도 마음도 든든합니다.",
        "likes": 5
      },
      {
        "id": "rev-prod-51-20",
        "author": "노*서",
        "rating": 5,
        "date": "2026-08-02",
        "content": "맛, 영양, 포장까지 3박자를 모두 갖춘 최고의 제품입니다!",
        "likes": 3
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-51-1",
        "author": "배*준",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-52",
    "name": "국산 100% 저온압착 프리미엄 생들기름 300ml",
    "category": "푸드 / 키친",
    "categoryId": "cat-food",
    "price": 29000,
    "originalPrice": 38000,
    "discountRate": 24,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 37,
    "isBest": false,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "충북 음성 100% 햇들깨, 벤조피렌 걱정 없는 맑고 깨끗한 저온 착유 오메가-3",
    "description": "<h3>충북 음성 100% 햇들깨, 벤조피렌 걱정 없는 맑고 깨끗한 저온 착유 오메가-3</h3>\n<p>국산 100% 저온압착 프리미엄 생들기름 300ml은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80\" alt=\"국산 100% 저온압착 프리미엄 생들기름 300ml 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">국산 100% 저온압착 프리미엄 생들기름 300ml의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80\" alt=\"국산 100% 저온압착 프리미엄 생들기름 300ml 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=800&q=80\" alt=\"국산 100% 저온압착 프리미엄 생들기름 300ml 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "생들기름 300ml",
        "stock": 35
      },
      {
        "name": "생참기름 300ml",
        "stock": 30
      }
    ],
    "specs": {
      "원재료": "국내산 통들깨 100%",
      "유통기한": "제조일로부터 9개월"
    },
    "reviews": [
      {
        "id": "rev-prod-52-1",
        "author": "남*은",
        "rating": 4,
        "date": "2026-09-27",
        "content": "국산 100% 저온압착 프리미엄 생들기름 300ml 맛과 풍미가 깊고 신선함이 입안 가득 느껴집니다.",
        "likes": 36
      },
      {
        "id": "rev-prod-52-2",
        "author": "심*윤",
        "rating": 5,
        "date": "2026-09-24",
        "content": "포장 상태가 너무 정갈해서 선물용으로도 손색이 없네요.",
        "likes": 34
      },
      {
        "id": "rev-prod-52-3",
        "author": "김*민",
        "rating": 5,
        "date": "2026-09-21",
        "content": "자연 그대로의 건강한 단맛과 감칠맛이 일품입니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-52-4",
        "author": "이*지",
        "rating": 5,
        "date": "2026-09-18",
        "content": "아이들과 온 가족이 모두 맛있다고 간식으로 순삭했어요.",
        "likes": 31
      },
      {
        "id": "rev-prod-52-5",
        "author": "박*정",
        "rating": 5,
        "date": "2026-09-15",
        "content": "신선한 재료 본연의 맛이 살아있어 요리의 품격이 올라갑니다.",
        "likes": 29
      },
      {
        "id": "rev-prod-52-6",
        "author": "최*영",
        "rating": 5,
        "date": "2026-09-12",
        "content": "아침 식사 대용이나 홈카페 티타임에 곁들이기 딱 좋아요.",
        "likes": 28
      },
      {
        "id": "rev-prod-52-7",
        "author": "정*원",
        "rating": 4,
        "date": "2026-09-09",
        "content": "유통기한도 넉넉하고 제조일자가 최근이라 안심하고 먹습니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-52-8",
        "author": "강*린",
        "rating": 5,
        "date": "2026-09-06",
        "content": "시중 마트 제품과는 비교가 안 되는 프리미엄 퀄리티입니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-52-9",
        "author": "조*준",
        "rating": 5,
        "date": "2026-09-03",
        "content": "부모님께 보내드렸는데 너무 맛있다고 극찬을 아끼지 않으셨어요.",
        "likes": 23
      },
      {
        "id": "rev-prod-52-10",
        "author": "윤*경",
        "rating": 5,
        "date": "2026-08-31",
        "content": "패키지 디자인도 세련되고 보관하기 편한 용기라 만족합니다.",
        "likes": 21
      },
      {
        "id": "rev-prod-52-11",
        "author": "장*수",
        "rating": 5,
        "date": "2026-08-28",
        "content": "자극적이지 않고 깔끔해서 매일 먹어도 질리지 않아요.",
        "likes": 20
      },
      {
        "id": "rev-prod-52-12",
        "author": "임*우",
        "rating": 5,
        "date": "2026-08-25",
        "content": "원산지와 유기농 인증이 확실해서 믿고 먹을 수 있습니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-52-13",
        "author": "한*희",
        "rating": 4,
        "date": "2026-08-22",
        "content": "친구들 놀러 왔을 때 대접했는데 다들 어디서 샀냐고 물어보네요.",
        "likes": 16
      },
      {
        "id": "rev-prod-52-14",
        "author": "오*진",
        "rating": 5,
        "date": "2026-08-19",
        "content": "정기배송하고 싶을 정도로 만족스러운 고품격 푸드입니다.",
        "likes": 15
      },
      {
        "id": "rev-prod-52-15",
        "author": "서*아",
        "rating": 5,
        "date": "2026-08-16",
        "content": "신선도를 유지해 주는 꼼꼼한 이중 포장에 감동했습니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-52-16",
        "author": "신*태",
        "rating": 5,
        "date": "2026-08-13",
        "content": "홈카페와 홈쿠킹 퀄리티가 전문점 수준으로 업그레이드됐어요.",
        "likes": 12
      },
      {
        "id": "rev-prod-52-17",
        "author": "권*현",
        "rating": 5,
        "date": "2026-08-10",
        "content": "재구매 의사 1000%입니다. 다 먹으면 또 주문할게요.",
        "likes": 10
      },
      {
        "id": "rev-prod-52-18",
        "author": "황*호",
        "rating": 5,
        "date": "2026-08-07",
        "content": "지인 답례품으로 돌렸는데 반응이 역대급으로 좋았습니다.",
        "likes": 8
      },
      {
        "id": "rev-prod-52-19",
        "author": "안*훈",
        "rating": 4,
        "date": "2026-08-04",
        "content": "정성이 가득 담긴 건강한 먹거리라 몸도 마음도 든든합니다.",
        "likes": 7
      },
      {
        "id": "rev-prod-52-20",
        "author": "송*서",
        "rating": 5,
        "date": "2026-08-01",
        "content": "맛, 영양, 포장까지 3박자를 모두 갖춘 최고의 제품입니다!",
        "likes": 5
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-52-1",
        "author": "백*경",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-53",
    "name": "수제 유기농 오트밀 너츠 그래놀라 400g (메이플 피칸)",
    "category": "푸드 / 키친",
    "categoryId": "cat-food",
    "price": 18000,
    "originalPrice": 24000,
    "discountRate": 25,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 44,
    "isBest": true,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "캐나다산 100% 퓨어 메이플 시럽, 피칸과 아몬드가 통째로 씹히는 바삭한 홈메이드 식감",
    "description": "<h3>캐나다산 100% 퓨어 메이플 시럽, 피칸과 아몬드가 통째로 씹히는 바삭한 홈메이드 식감</h3>\n<p>수제 유기농 오트밀 너츠 그래놀라 400g (메이플 피칸)은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80\" alt=\"수제 유기농 오트밀 너츠 그래놀라 400g (메이플 피칸) 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">수제 유기농 오트밀 너츠 그래놀라 400g (메이플 피칸)의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80\" alt=\"수제 유기농 오트밀 너츠 그래놀라 400g (메이플 피칸) 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80\" alt=\"수제 유기농 오트밀 너츠 그래놀라 400g (메이플 피칸) 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "메이플 피칸 400g",
        "stock": 45
      },
      {
        "name": "다크 카카오 헤이즐넛 400g",
        "stock": 35
      }
    ],
    "specs": {
      "용량": "400g 지퍼백",
      "원료": "유기농 오트밀 45%, 피칸 15%, 통아몬드 15%"
    },
    "reviews": [
      {
        "id": "rev-prod-53-1",
        "author": "전*은",
        "rating": 4,
        "date": "2026-09-26",
        "content": "수제 유기농 오트밀 너츠 그래놀라 400g (메이플 피칸) 맛과 풍미가 깊고 신선함이 입안 가득 느껴집니다.",
        "likes": 38
      },
      {
        "id": "rev-prod-53-2",
        "author": "홍*윤",
        "rating": 5,
        "date": "2026-09-23",
        "content": "포장 상태가 너무 정갈해서 선물용으로도 손색이 없네요.",
        "likes": 36
      },
      {
        "id": "rev-prod-53-3",
        "author": "유*민",
        "rating": 5,
        "date": "2026-09-20",
        "content": "자연 그대로의 건강한 단맛과 감칠맛이 일품입니다.",
        "likes": 34
      },
      {
        "id": "rev-prod-53-4",
        "author": "고*지",
        "rating": 5,
        "date": "2026-09-17",
        "content": "아이들과 온 가족이 모두 맛있다고 간식으로 순삭했어요.",
        "likes": 33
      },
      {
        "id": "rev-prod-53-5",
        "author": "문*정",
        "rating": 5,
        "date": "2026-09-14",
        "content": "신선한 재료 본연의 맛이 살아있어 요리의 품격이 올라갑니다.",
        "likes": 31
      },
      {
        "id": "rev-prod-53-6",
        "author": "양*영",
        "rating": 5,
        "date": "2026-09-11",
        "content": "아침 식사 대용이나 홈카페 티타임에 곁들이기 딱 좋아요.",
        "likes": 30
      },
      {
        "id": "rev-prod-53-7",
        "author": "손*원",
        "rating": 4,
        "date": "2026-09-08",
        "content": "유통기한도 넉넉하고 제조일자가 최근이라 안심하고 먹습니다.",
        "likes": 28
      },
      {
        "id": "rev-prod-53-8",
        "author": "배*린",
        "rating": 5,
        "date": "2026-09-05",
        "content": "시중 마트 제품과는 비교가 안 되는 프리미엄 퀄리티입니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-53-9",
        "author": "백*준",
        "rating": 5,
        "date": "2026-09-02",
        "content": "부모님께 보내드렸는데 너무 맛있다고 극찬을 아끼지 않으셨어요.",
        "likes": 25
      },
      {
        "id": "rev-prod-53-10",
        "author": "허*경",
        "rating": 5,
        "date": "2026-08-30",
        "content": "패키지 디자인도 세련되고 보관하기 편한 용기라 만족합니다.",
        "likes": 23
      },
      {
        "id": "rev-prod-53-11",
        "author": "노*수",
        "rating": 5,
        "date": "2026-08-27",
        "content": "자극적이지 않고 깔끔해서 매일 먹어도 질리지 않아요.",
        "likes": 22
      },
      {
        "id": "rev-prod-53-12",
        "author": "남*우",
        "rating": 5,
        "date": "2026-08-24",
        "content": "원산지와 유기농 인증이 확실해서 믿고 먹을 수 있습니다.",
        "likes": 20
      },
      {
        "id": "rev-prod-53-13",
        "author": "심*희",
        "rating": 4,
        "date": "2026-08-21",
        "content": "친구들 놀러 왔을 때 대접했는데 다들 어디서 샀냐고 물어보네요.",
        "likes": 18
      },
      {
        "id": "rev-prod-53-14",
        "author": "김*진",
        "rating": 5,
        "date": "2026-08-18",
        "content": "정기배송하고 싶을 정도로 만족스러운 고품격 푸드입니다.",
        "likes": 17
      },
      {
        "id": "rev-prod-53-15",
        "author": "이*아",
        "rating": 5,
        "date": "2026-08-15",
        "content": "신선도를 유지해 주는 꼼꼼한 이중 포장에 감동했습니다.",
        "likes": 15
      },
      {
        "id": "rev-prod-53-16",
        "author": "박*태",
        "rating": 5,
        "date": "2026-08-12",
        "content": "홈카페와 홈쿠킹 퀄리티가 전문점 수준으로 업그레이드됐어요.",
        "likes": 14
      },
      {
        "id": "rev-prod-53-17",
        "author": "최*현",
        "rating": 5,
        "date": "2026-08-09",
        "content": "재구매 의사 1000%입니다. 다 먹으면 또 주문할게요.",
        "likes": 12
      },
      {
        "id": "rev-prod-53-18",
        "author": "정*호",
        "rating": 5,
        "date": "2026-08-06",
        "content": "지인 답례품으로 돌렸는데 반응이 역대급으로 좋았습니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-53-19",
        "author": "강*훈",
        "rating": 4,
        "date": "2026-08-03",
        "content": "정성이 가득 담긴 건강한 먹거리라 몸도 마음도 든든합니다.",
        "likes": 9
      },
      {
        "id": "rev-prod-53-20",
        "author": "조*서",
        "rating": 5,
        "date": "2026-07-31",
        "content": "맛, 영양, 포장까지 3박자를 모두 갖춘 최고의 제품입니다!",
        "likes": 7
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-53-1",
        "author": "허*수",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-54",
    "name": "명인 수제 전통 찹쌀 유과 & 한과 프리미엄 선물세트",
    "category": "푸드 / 키친",
    "categoryId": "cat-food",
    "price": 48000,
    "originalPrice": 65000,
    "discountRate": 26,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 51,
    "isBest": false,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": true,
    "thumbnail": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "국내산 찹쌀과 천연 조청으로 빚은 입안에서 사르르 녹는 전통 명품 디저트",
    "description": "<h3>국내산 찹쌀과 천연 조청으로 빚은 입안에서 사르르 녹는 전통 명품 디저트</h3>\n<p>명인 수제 전통 찹쌀 유과 & 한과 프리미엄 선물세트은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80\" alt=\"명인 수제 전통 찹쌀 유과 & 한과 프리미엄 선물세트 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">명인 수제 전통 찹쌀 유과 & 한과 프리미엄 선물세트의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80\" alt=\"명인 수제 전통 찹쌀 유과 & 한과 프리미엄 선물세트 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80\" alt=\"명인 수제 전통 찹쌀 유과 & 한과 프리미엄 선물세트 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "전통 2단 한과 선물세트",
        "stock": 30
      }
    ],
    "specs": {
      "구성": "찹쌀유과, 약과, 다식, 매작과 등 600g 하드박스 포장"
    },
    "reviews": [
      {
        "id": "rev-prod-54-1",
        "author": "윤*은",
        "rating": 4,
        "date": "2026-09-25",
        "content": "명인 수제 전통 찹쌀 유과 & 한과 프리미엄 선물세트 맛과 풍미가 깊고 신선함이 입안 가득 느껴집니다.",
        "likes": 40
      },
      {
        "id": "rev-prod-54-2",
        "author": "장*윤",
        "rating": 5,
        "date": "2026-09-22",
        "content": "포장 상태가 너무 정갈해서 선물용으로도 손색이 없네요.",
        "likes": 38
      },
      {
        "id": "rev-prod-54-3",
        "author": "임*민",
        "rating": 5,
        "date": "2026-09-19",
        "content": "자연 그대로의 건강한 단맛과 감칠맛이 일품입니다.",
        "likes": 36
      },
      {
        "id": "rev-prod-54-4",
        "author": "한*지",
        "rating": 5,
        "date": "2026-09-16",
        "content": "아이들과 온 가족이 모두 맛있다고 간식으로 순삭했어요.",
        "likes": 35
      },
      {
        "id": "rev-prod-54-5",
        "author": "오*정",
        "rating": 5,
        "date": "2026-09-13",
        "content": "신선한 재료 본연의 맛이 살아있어 요리의 품격이 올라갑니다.",
        "likes": 33
      },
      {
        "id": "rev-prod-54-6",
        "author": "서*영",
        "rating": 5,
        "date": "2026-09-10",
        "content": "아침 식사 대용이나 홈카페 티타임에 곁들이기 딱 좋아요.",
        "likes": 32
      },
      {
        "id": "rev-prod-54-7",
        "author": "신*원",
        "rating": 4,
        "date": "2026-09-07",
        "content": "유통기한도 넉넉하고 제조일자가 최근이라 안심하고 먹습니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-54-8",
        "author": "권*린",
        "rating": 5,
        "date": "2026-09-04",
        "content": "시중 마트 제품과는 비교가 안 되는 프리미엄 퀄리티입니다.",
        "likes": 28
      },
      {
        "id": "rev-prod-54-9",
        "author": "황*준",
        "rating": 5,
        "date": "2026-09-01",
        "content": "부모님께 보내드렸는데 너무 맛있다고 극찬을 아끼지 않으셨어요.",
        "likes": 27
      },
      {
        "id": "rev-prod-54-10",
        "author": "안*경",
        "rating": 5,
        "date": "2026-08-29",
        "content": "패키지 디자인도 세련되고 보관하기 편한 용기라 만족합니다.",
        "likes": 25
      },
      {
        "id": "rev-prod-54-11",
        "author": "송*수",
        "rating": 5,
        "date": "2026-08-26",
        "content": "자극적이지 않고 깔끔해서 매일 먹어도 질리지 않아요.",
        "likes": 24
      },
      {
        "id": "rev-prod-54-12",
        "author": "전*우",
        "rating": 5,
        "date": "2026-08-23",
        "content": "원산지와 유기농 인증이 확실해서 믿고 먹을 수 있습니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-54-13",
        "author": "홍*희",
        "rating": 4,
        "date": "2026-08-20",
        "content": "친구들 놀러 왔을 때 대접했는데 다들 어디서 샀냐고 물어보네요.",
        "likes": 20
      },
      {
        "id": "rev-prod-54-14",
        "author": "유*진",
        "rating": 5,
        "date": "2026-08-17",
        "content": "정기배송하고 싶을 정도로 만족스러운 고품격 푸드입니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-54-15",
        "author": "고*아",
        "rating": 5,
        "date": "2026-08-14",
        "content": "신선도를 유지해 주는 꼼꼼한 이중 포장에 감동했습니다.",
        "likes": 17
      },
      {
        "id": "rev-prod-54-16",
        "author": "문*태",
        "rating": 5,
        "date": "2026-08-11",
        "content": "홈카페와 홈쿠킹 퀄리티가 전문점 수준으로 업그레이드됐어요.",
        "likes": 16
      },
      {
        "id": "rev-prod-54-17",
        "author": "양*현",
        "rating": 5,
        "date": "2026-08-08",
        "content": "재구매 의사 1000%입니다. 다 먹으면 또 주문할게요.",
        "likes": 14
      },
      {
        "id": "rev-prod-54-18",
        "author": "손*호",
        "rating": 5,
        "date": "2026-08-05",
        "content": "지인 답례품으로 돌렸는데 반응이 역대급으로 좋았습니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-54-19",
        "author": "배*훈",
        "rating": 4,
        "date": "2026-08-02",
        "content": "정성이 가득 담긴 건강한 먹거리라 몸도 마음도 든든합니다.",
        "likes": 11
      },
      {
        "id": "rev-prod-54-20",
        "author": "백*서",
        "rating": 5,
        "date": "2026-07-30",
        "content": "맛, 영양, 포장까지 3박자를 모두 갖춘 최고의 제품입니다!",
        "likes": 9
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-54-1",
        "author": "노*우",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-55",
    "name": "제주 유기농 말차 파우더 & 라떼 믹스 200g",
    "category": "푸드 / 키친",
    "categoryId": "cat-food",
    "price": 22000,
    "originalPrice": 29000,
    "discountRate": 24,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 58,
    "isBest": false,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "제주 다원의 어린 찻잎만을 곱게 갈아낸 선명한 녹색과 쌉싸름하고 진한 풍미",
    "description": "<h3>제주 다원의 어린 찻잎만을 곱게 갈아낸 선명한 녹색과 쌉싸름하고 진한 풍미</h3>\n<p>제주 유기농 말차 파우더 & 라떼 믹스 200g은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80\" alt=\"제주 유기농 말차 파우더 & 라떼 믹스 200g 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">제주 유기농 말차 파우더 & 라떼 믹스 200g의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=800&q=80\" alt=\"제주 유기농 말차 파우더 & 라떼 믹스 200g 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80\" alt=\"제주 유기농 말차 파우더 & 라떼 믹스 200g 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "순수 유기농 말차 100% (100g 캔)",
        "stock": 35
      },
      {
        "name": "스위트 말차 라떼 믹스 (250g 지퍼백)",
        "stock": 40
      }
    ],
    "specs": {
      "원산지": "제주특별자치도 100%",
      "인증": "국립농산물품질관리원 유기농 인증"
    },
    "reviews": [
      {
        "id": "rev-prod-55-1",
        "author": "허*은",
        "rating": 4,
        "date": "2026-09-24",
        "content": "제주 유기농 말차 파우더 & 라떼 믹스 200g 맛과 풍미가 깊고 신선함이 입안 가득 느껴집니다.",
        "likes": 42
      },
      {
        "id": "rev-prod-55-2",
        "author": "노*윤",
        "rating": 5,
        "date": "2026-09-21",
        "content": "포장 상태가 너무 정갈해서 선물용으로도 손색이 없네요.",
        "likes": 40
      },
      {
        "id": "rev-prod-55-3",
        "author": "남*민",
        "rating": 5,
        "date": "2026-09-18",
        "content": "자연 그대로의 건강한 단맛과 감칠맛이 일품입니다.",
        "likes": 38
      },
      {
        "id": "rev-prod-55-4",
        "author": "심*지",
        "rating": 5,
        "date": "2026-09-15",
        "content": "아이들과 온 가족이 모두 맛있다고 간식으로 순삭했어요.",
        "likes": 37
      },
      {
        "id": "rev-prod-55-5",
        "author": "김*정",
        "rating": 5,
        "date": "2026-09-12",
        "content": "신선한 재료 본연의 맛이 살아있어 요리의 품격이 올라갑니다.",
        "likes": 35
      },
      {
        "id": "rev-prod-55-6",
        "author": "이*영",
        "rating": 5,
        "date": "2026-09-09",
        "content": "아침 식사 대용이나 홈카페 티타임에 곁들이기 딱 좋아요.",
        "likes": 34
      },
      {
        "id": "rev-prod-55-7",
        "author": "박*원",
        "rating": 4,
        "date": "2026-09-06",
        "content": "유통기한도 넉넉하고 제조일자가 최근이라 안심하고 먹습니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-55-8",
        "author": "최*린",
        "rating": 5,
        "date": "2026-09-03",
        "content": "시중 마트 제품과는 비교가 안 되는 프리미엄 퀄리티입니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-55-9",
        "author": "정*준",
        "rating": 5,
        "date": "2026-08-31",
        "content": "부모님께 보내드렸는데 너무 맛있다고 극찬을 아끼지 않으셨어요.",
        "likes": 29
      },
      {
        "id": "rev-prod-55-10",
        "author": "강*경",
        "rating": 5,
        "date": "2026-08-28",
        "content": "패키지 디자인도 세련되고 보관하기 편한 용기라 만족합니다.",
        "likes": 27
      },
      {
        "id": "rev-prod-55-11",
        "author": "조*수",
        "rating": 5,
        "date": "2026-08-25",
        "content": "자극적이지 않고 깔끔해서 매일 먹어도 질리지 않아요.",
        "likes": 26
      },
      {
        "id": "rev-prod-55-12",
        "author": "윤*우",
        "rating": 5,
        "date": "2026-08-22",
        "content": "원산지와 유기농 인증이 확실해서 믿고 먹을 수 있습니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-55-13",
        "author": "장*희",
        "rating": 4,
        "date": "2026-08-19",
        "content": "친구들 놀러 왔을 때 대접했는데 다들 어디서 샀냐고 물어보네요.",
        "likes": 22
      },
      {
        "id": "rev-prod-55-14",
        "author": "임*진",
        "rating": 5,
        "date": "2026-08-16",
        "content": "정기배송하고 싶을 정도로 만족스러운 고품격 푸드입니다.",
        "likes": 21
      },
      {
        "id": "rev-prod-55-15",
        "author": "한*아",
        "rating": 5,
        "date": "2026-08-13",
        "content": "신선도를 유지해 주는 꼼꼼한 이중 포장에 감동했습니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-55-16",
        "author": "오*태",
        "rating": 5,
        "date": "2026-08-10",
        "content": "홈카페와 홈쿠킹 퀄리티가 전문점 수준으로 업그레이드됐어요.",
        "likes": 18
      },
      {
        "id": "rev-prod-55-17",
        "author": "서*현",
        "rating": 5,
        "date": "2026-08-07",
        "content": "재구매 의사 1000%입니다. 다 먹으면 또 주문할게요.",
        "likes": 16
      },
      {
        "id": "rev-prod-55-18",
        "author": "신*호",
        "rating": 5,
        "date": "2026-08-04",
        "content": "지인 답례품으로 돌렸는데 반응이 역대급으로 좋았습니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-55-19",
        "author": "권*훈",
        "rating": 4,
        "date": "2026-08-01",
        "content": "정성이 가득 담긴 건강한 먹거리라 몸도 마음도 든든합니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-55-20",
        "author": "황*서",
        "rating": 5,
        "date": "2026-07-29",
        "content": "맛, 영양, 포장까지 3박자를 모두 갖춘 최고의 제품입니다!",
        "likes": 11
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-55-1",
        "author": "남*희",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-56",
    "name": "자연 그대로 담은 무첨가 건조 과일칩 5종 세트",
    "category": "푸드 / 키친",
    "categoryId": "cat-food",
    "price": 24000,
    "originalPrice": 32000,
    "discountRate": 25,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 65,
    "isBest": false,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "동결건조 딸기, 사과, 바나나, 망고, 블루베리 원물 100% 영양 간식",
    "description": "<h3>동결건조 딸기, 사과, 바나나, 망고, 블루베리 원물 100% 영양 간식</h3>\n<p>자연 그대로 담은 무첨가 건조 과일칩 5종 세트은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=800&q=80\" alt=\"자연 그대로 담은 무첨가 건조 과일칩 5종 세트 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">자연 그대로 담은 무첨가 건조 과일칩 5종 세트의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80\" alt=\"자연 그대로 담은 무첨가 건조 과일칩 5종 세트 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80\" alt=\"자연 그대로 담은 무첨가 건조 과일칩 5종 세트 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "5종 버라이어티 팩 (각 30g x 5봉)",
        "stock": 50
      }
    ],
    "specs": {
      "구성": "딸기, 사과, 망고, 바나나, 블루베리 각 1봉씩"
    },
    "reviews": [
      {
        "id": "rev-prod-56-1",
        "author": "안*은",
        "rating": 4,
        "date": "2026-09-23",
        "content": "자연 그대로 담은 무첨가 건조 과일칩 5종 세트 맛과 풍미가 깊고 신선함이 입안 가득 느껴집니다.",
        "likes": 34
      },
      {
        "id": "rev-prod-56-2",
        "author": "송*윤",
        "rating": 5,
        "date": "2026-09-20",
        "content": "포장 상태가 너무 정갈해서 선물용으로도 손색이 없네요.",
        "likes": 32
      },
      {
        "id": "rev-prod-56-3",
        "author": "전*민",
        "rating": 5,
        "date": "2026-09-17",
        "content": "자연 그대로의 건강한 단맛과 감칠맛이 일품입니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-56-4",
        "author": "홍*지",
        "rating": 5,
        "date": "2026-09-14",
        "content": "아이들과 온 가족이 모두 맛있다고 간식으로 순삭했어요.",
        "likes": 29
      },
      {
        "id": "rev-prod-56-5",
        "author": "유*정",
        "rating": 5,
        "date": "2026-09-11",
        "content": "신선한 재료 본연의 맛이 살아있어 요리의 품격이 올라갑니다.",
        "likes": 27
      },
      {
        "id": "rev-prod-56-6",
        "author": "고*영",
        "rating": 5,
        "date": "2026-09-08",
        "content": "아침 식사 대용이나 홈카페 티타임에 곁들이기 딱 좋아요.",
        "likes": 26
      },
      {
        "id": "rev-prod-56-7",
        "author": "문*원",
        "rating": 4,
        "date": "2026-09-05",
        "content": "유통기한도 넉넉하고 제조일자가 최근이라 안심하고 먹습니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-56-8",
        "author": "양*린",
        "rating": 5,
        "date": "2026-09-02",
        "content": "시중 마트 제품과는 비교가 안 되는 프리미엄 퀄리티입니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-56-9",
        "author": "손*준",
        "rating": 5,
        "date": "2026-08-30",
        "content": "부모님께 보내드렸는데 너무 맛있다고 극찬을 아끼지 않으셨어요.",
        "likes": 21
      },
      {
        "id": "rev-prod-56-10",
        "author": "배*경",
        "rating": 5,
        "date": "2026-08-27",
        "content": "패키지 디자인도 세련되고 보관하기 편한 용기라 만족합니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-56-11",
        "author": "백*수",
        "rating": 5,
        "date": "2026-08-24",
        "content": "자극적이지 않고 깔끔해서 매일 먹어도 질리지 않아요.",
        "likes": 18
      },
      {
        "id": "rev-prod-56-12",
        "author": "허*우",
        "rating": 5,
        "date": "2026-08-21",
        "content": "원산지와 유기농 인증이 확실해서 믿고 먹을 수 있습니다.",
        "likes": 16
      },
      {
        "id": "rev-prod-56-13",
        "author": "노*희",
        "rating": 4,
        "date": "2026-08-18",
        "content": "친구들 놀러 왔을 때 대접했는데 다들 어디서 샀냐고 물어보네요.",
        "likes": 14
      },
      {
        "id": "rev-prod-56-14",
        "author": "남*진",
        "rating": 5,
        "date": "2026-08-15",
        "content": "정기배송하고 싶을 정도로 만족스러운 고품격 푸드입니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-56-15",
        "author": "심*아",
        "rating": 5,
        "date": "2026-08-12",
        "content": "신선도를 유지해 주는 꼼꼼한 이중 포장에 감동했습니다.",
        "likes": 11
      },
      {
        "id": "rev-prod-56-16",
        "author": "김*태",
        "rating": 5,
        "date": "2026-08-09",
        "content": "홈카페와 홈쿠킹 퀄리티가 전문점 수준으로 업그레이드됐어요.",
        "likes": 10
      },
      {
        "id": "rev-prod-56-17",
        "author": "이*현",
        "rating": 5,
        "date": "2026-08-06",
        "content": "재구매 의사 1000%입니다. 다 먹으면 또 주문할게요.",
        "likes": 8
      },
      {
        "id": "rev-prod-56-18",
        "author": "박*호",
        "rating": 5,
        "date": "2026-08-03",
        "content": "지인 답례품으로 돌렸는데 반응이 역대급으로 좋았습니다.",
        "likes": 6
      },
      {
        "id": "rev-prod-56-19",
        "author": "최*훈",
        "rating": 4,
        "date": "2026-07-31",
        "content": "정성이 가득 담긴 건강한 먹거리라 몸도 마음도 든든합니다.",
        "likes": 5
      },
      {
        "id": "rev-prod-56-20",
        "author": "정*서",
        "rating": 5,
        "date": "2026-07-28",
        "content": "맛, 영양, 포장까지 3박자를 모두 갖춘 최고의 제품입니다!",
        "likes": 3
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-56-1",
        "author": "심*진",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-57",
    "name": "히말라야 핑크솔트 & 캄폿 블랙페퍼 글라인더 세트",
    "category": "푸드 / 키친",
    "categoryId": "cat-food",
    "price": 29000,
    "originalPrice": 39000,
    "discountRate": 26,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 72,
    "isBest": true,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "2억 년 전 청정 암염의 깔끔한 감칠맛과 캄보디아 캄폿 프리미엄 통후추의 톡 쏘는 아로마",
    "description": "<h3>2억 년 전 청정 암염의 깔끔한 감칠맛과 캄보디아 캄폿 프리미엄 통후추의 톡 쏘는 아로마</h3>\n<p>히말라야 핑크솔트 & 캄폿 블랙페퍼 글라인더 세트은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=800&q=80\" alt=\"히말라야 핑크솔트 & 캄폿 블랙페퍼 글라인더 세트 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">히말라야 핑크솔트 & 캄폿 블랙페퍼 글라인더 세트의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=800&q=80\" alt=\"히말라야 핑크솔트 & 캄폿 블랙페퍼 글라인더 세트 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80\" alt=\"히말라야 핑크솔트 & 캄폿 블랙페퍼 글라인더 세트 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "핑크솔트(200g) + 블랙페퍼(100g) 그라인더 세트",
        "stock": 45
      }
    ],
    "specs": {
      "헤드": "내구성 뛰어난 세라믹 분쇄날",
      "포장": "선물용 크라프트 박스"
    },
    "reviews": [
      {
        "id": "rev-prod-57-1",
        "author": "강*은",
        "rating": 4,
        "date": "2026-09-29",
        "content": "히말라야 핑크솔트 & 캄폿 블랙페퍼 글라인더 세트 맛과 풍미가 깊고 신선함이 입안 가득 느껴집니다.",
        "likes": 36
      },
      {
        "id": "rev-prod-57-2",
        "author": "조*윤",
        "rating": 5,
        "date": "2026-09-26",
        "content": "포장 상태가 너무 정갈해서 선물용으로도 손색이 없네요.",
        "likes": 34
      },
      {
        "id": "rev-prod-57-3",
        "author": "윤*민",
        "rating": 5,
        "date": "2026-09-23",
        "content": "자연 그대로의 건강한 단맛과 감칠맛이 일품입니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-57-4",
        "author": "장*지",
        "rating": 5,
        "date": "2026-09-20",
        "content": "아이들과 온 가족이 모두 맛있다고 간식으로 순삭했어요.",
        "likes": 31
      },
      {
        "id": "rev-prod-57-5",
        "author": "임*정",
        "rating": 5,
        "date": "2026-09-17",
        "content": "신선한 재료 본연의 맛이 살아있어 요리의 품격이 올라갑니다.",
        "likes": 29
      },
      {
        "id": "rev-prod-57-6",
        "author": "한*영",
        "rating": 5,
        "date": "2026-09-14",
        "content": "아침 식사 대용이나 홈카페 티타임에 곁들이기 딱 좋아요.",
        "likes": 28
      },
      {
        "id": "rev-prod-57-7",
        "author": "오*원",
        "rating": 4,
        "date": "2026-09-11",
        "content": "유통기한도 넉넉하고 제조일자가 최근이라 안심하고 먹습니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-57-8",
        "author": "서*린",
        "rating": 5,
        "date": "2026-09-08",
        "content": "시중 마트 제품과는 비교가 안 되는 프리미엄 퀄리티입니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-57-9",
        "author": "신*준",
        "rating": 5,
        "date": "2026-09-05",
        "content": "부모님께 보내드렸는데 너무 맛있다고 극찬을 아끼지 않으셨어요.",
        "likes": 23
      },
      {
        "id": "rev-prod-57-10",
        "author": "권*경",
        "rating": 5,
        "date": "2026-09-02",
        "content": "패키지 디자인도 세련되고 보관하기 편한 용기라 만족합니다.",
        "likes": 21
      },
      {
        "id": "rev-prod-57-11",
        "author": "황*수",
        "rating": 5,
        "date": "2026-08-30",
        "content": "자극적이지 않고 깔끔해서 매일 먹어도 질리지 않아요.",
        "likes": 20
      },
      {
        "id": "rev-prod-57-12",
        "author": "안*우",
        "rating": 5,
        "date": "2026-08-27",
        "content": "원산지와 유기농 인증이 확실해서 믿고 먹을 수 있습니다.",
        "likes": 18
      },
      {
        "id": "rev-prod-57-13",
        "author": "송*희",
        "rating": 4,
        "date": "2026-08-24",
        "content": "친구들 놀러 왔을 때 대접했는데 다들 어디서 샀냐고 물어보네요.",
        "likes": 16
      },
      {
        "id": "rev-prod-57-14",
        "author": "전*진",
        "rating": 5,
        "date": "2026-08-21",
        "content": "정기배송하고 싶을 정도로 만족스러운 고품격 푸드입니다.",
        "likes": 15
      },
      {
        "id": "rev-prod-57-15",
        "author": "홍*아",
        "rating": 5,
        "date": "2026-08-18",
        "content": "신선도를 유지해 주는 꼼꼼한 이중 포장에 감동했습니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-57-16",
        "author": "유*태",
        "rating": 5,
        "date": "2026-08-15",
        "content": "홈카페와 홈쿠킹 퀄리티가 전문점 수준으로 업그레이드됐어요.",
        "likes": 12
      },
      {
        "id": "rev-prod-57-17",
        "author": "고*현",
        "rating": 5,
        "date": "2026-08-12",
        "content": "재구매 의사 1000%입니다. 다 먹으면 또 주문할게요.",
        "likes": 10
      },
      {
        "id": "rev-prod-57-18",
        "author": "문*호",
        "rating": 5,
        "date": "2026-08-09",
        "content": "지인 답례품으로 돌렸는데 반응이 역대급으로 좋았습니다.",
        "likes": 8
      },
      {
        "id": "rev-prod-57-19",
        "author": "양*훈",
        "rating": 4,
        "date": "2026-08-06",
        "content": "정성이 가득 담긴 건강한 먹거리라 몸도 마음도 든든합니다.",
        "likes": 7
      },
      {
        "id": "rev-prod-57-20",
        "author": "손*서",
        "rating": 5,
        "date": "2026-08-03",
        "content": "맛, 영양, 포장까지 3박자를 모두 갖춘 최고의 제품입니다!",
        "likes": 5
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-57-1",
        "author": "김*아",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-58",
    "name": "지리산 생과일 수제 과일청 3종 기프트 세트 (각 300g)",
    "category": "푸드 / 키친",
    "categoryId": "cat-food",
    "price": 35000,
    "originalPrice": 48000,
    "discountRate": 27,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 79,
    "isBest": false,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": true,
    "thumbnail": "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "자몽 레몬청, 백향과(패션후르츠)청, 생강 배도라지청으로 즐기는 홈카페 에이드 & 티",
    "description": "<h3>자몽 레몬청, 백향과(패션후르츠)청, 생강 배도라지청으로 즐기는 홈카페 에이드 & 티</h3>\n<p>지리산 생과일 수제 과일청 3종 기프트 세트 (각 300g)은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80\" alt=\"지리산 생과일 수제 과일청 3종 기프트 세트 (각 300g) 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">지리산 생과일 수제 과일청 3종 기프트 세트 (각 300g)의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80\" alt=\"지리산 생과일 수제 과일청 3종 기프트 세트 (각 300g) 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=800&q=80\" alt=\"지리산 생과일 수제 과일청 3종 기프트 세트 (각 300g) 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "인기 3종 세트 (자몽레몬 + 패션후르츠 + 생강배도라지)",
        "stock": 35
      }
    ],
    "specs": {
      "구성": "300g x 3병 + 미니 우드 스푼",
      "보관": "수령 후 냉장 보관"
    },
    "reviews": [
      {
        "id": "rev-prod-58-1",
        "author": "배*은",
        "rating": 4,
        "date": "2026-09-28",
        "content": "지리산 생과일 수제 과일청 3종 기프트 세트 (각 300g) 맛과 풍미가 깊고 신선함이 입안 가득 느껴집니다.",
        "likes": 38
      },
      {
        "id": "rev-prod-58-2",
        "author": "백*윤",
        "rating": 5,
        "date": "2026-09-25",
        "content": "포장 상태가 너무 정갈해서 선물용으로도 손색이 없네요.",
        "likes": 36
      },
      {
        "id": "rev-prod-58-3",
        "author": "허*민",
        "rating": 5,
        "date": "2026-09-22",
        "content": "자연 그대로의 건강한 단맛과 감칠맛이 일품입니다.",
        "likes": 34
      },
      {
        "id": "rev-prod-58-4",
        "author": "노*지",
        "rating": 5,
        "date": "2026-09-19",
        "content": "아이들과 온 가족이 모두 맛있다고 간식으로 순삭했어요.",
        "likes": 33
      },
      {
        "id": "rev-prod-58-5",
        "author": "남*정",
        "rating": 5,
        "date": "2026-09-16",
        "content": "신선한 재료 본연의 맛이 살아있어 요리의 품격이 올라갑니다.",
        "likes": 31
      },
      {
        "id": "rev-prod-58-6",
        "author": "심*영",
        "rating": 5,
        "date": "2026-09-13",
        "content": "아침 식사 대용이나 홈카페 티타임에 곁들이기 딱 좋아요.",
        "likes": 30
      },
      {
        "id": "rev-prod-58-7",
        "author": "김*원",
        "rating": 4,
        "date": "2026-09-10",
        "content": "유통기한도 넉넉하고 제조일자가 최근이라 안심하고 먹습니다.",
        "likes": 28
      },
      {
        "id": "rev-prod-58-8",
        "author": "이*린",
        "rating": 5,
        "date": "2026-09-07",
        "content": "시중 마트 제품과는 비교가 안 되는 프리미엄 퀄리티입니다.",
        "likes": 26
      },
      {
        "id": "rev-prod-58-9",
        "author": "박*준",
        "rating": 5,
        "date": "2026-09-04",
        "content": "부모님께 보내드렸는데 너무 맛있다고 극찬을 아끼지 않으셨어요.",
        "likes": 25
      },
      {
        "id": "rev-prod-58-10",
        "author": "최*경",
        "rating": 5,
        "date": "2026-09-01",
        "content": "패키지 디자인도 세련되고 보관하기 편한 용기라 만족합니다.",
        "likes": 23
      },
      {
        "id": "rev-prod-58-11",
        "author": "정*수",
        "rating": 5,
        "date": "2026-08-29",
        "content": "자극적이지 않고 깔끔해서 매일 먹어도 질리지 않아요.",
        "likes": 22
      },
      {
        "id": "rev-prod-58-12",
        "author": "강*우",
        "rating": 5,
        "date": "2026-08-26",
        "content": "원산지와 유기농 인증이 확실해서 믿고 먹을 수 있습니다.",
        "likes": 20
      },
      {
        "id": "rev-prod-58-13",
        "author": "조*희",
        "rating": 4,
        "date": "2026-08-23",
        "content": "친구들 놀러 왔을 때 대접했는데 다들 어디서 샀냐고 물어보네요.",
        "likes": 18
      },
      {
        "id": "rev-prod-58-14",
        "author": "윤*진",
        "rating": 5,
        "date": "2026-08-20",
        "content": "정기배송하고 싶을 정도로 만족스러운 고품격 푸드입니다.",
        "likes": 17
      },
      {
        "id": "rev-prod-58-15",
        "author": "장*아",
        "rating": 5,
        "date": "2026-08-17",
        "content": "신선도를 유지해 주는 꼼꼼한 이중 포장에 감동했습니다.",
        "likes": 15
      },
      {
        "id": "rev-prod-58-16",
        "author": "임*태",
        "rating": 5,
        "date": "2026-08-14",
        "content": "홈카페와 홈쿠킹 퀄리티가 전문점 수준으로 업그레이드됐어요.",
        "likes": 14
      },
      {
        "id": "rev-prod-58-17",
        "author": "한*현",
        "rating": 5,
        "date": "2026-08-11",
        "content": "재구매 의사 1000%입니다. 다 먹으면 또 주문할게요.",
        "likes": 12
      },
      {
        "id": "rev-prod-58-18",
        "author": "오*호",
        "rating": 5,
        "date": "2026-08-08",
        "content": "지인 답례품으로 돌렸는데 반응이 역대급으로 좋았습니다.",
        "likes": 10
      },
      {
        "id": "rev-prod-58-19",
        "author": "서*훈",
        "rating": 4,
        "date": "2026-08-05",
        "content": "정성이 가득 담긴 건강한 먹거리라 몸도 마음도 든든합니다.",
        "likes": 9
      },
      {
        "id": "rev-prod-58-20",
        "author": "신*서",
        "rating": 5,
        "date": "2026-08-02",
        "content": "맛, 영양, 포장까지 3박자를 모두 갖춘 최고의 제품입니다!",
        "likes": 7
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-58-1",
        "author": "이*태",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-59",
    "name": "유기농 루이보스 & 카모마일 허브 블렌딩 티백 세트 (30티백)",
    "category": "푸드 / 키친",
    "categoryId": "cat-food",
    "price": 23000,
    "originalPrice": 32000,
    "discountRate": 28,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 36,
    "isBest": false,
    "isNew": false,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "무카페인 안심 허브티, 생분해성 사탕수수 PLA 삼각 티백의 맑고 은은한 휴식",
    "description": "<h3>무카페인 안심 허브티, 생분해성 사탕수수 PLA 삼각 티백의 맑고 은은한 휴식</h3>\n<p>유기농 루이보스 & 카모마일 허브 블렌딩 티백 세트 (30티백)은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=800&q=80\" alt=\"유기농 루이보스 & 카모마일 허브 블렌딩 티백 세트 (30티백) 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">유기농 루이보스 & 카모마일 허브 블렌딩 티백 세트 (30티백)의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80\" alt=\"유기농 루이보스 & 카모마일 허브 블렌딩 티백 세트 (30티백) 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80\" alt=\"유기농 루이보스 & 카모마일 허브 블렌딩 티백 세트 (30티백) 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "루이보스 바닐라 & 슬립 카모마일 (각 15티백)",
        "stock": 40
      }
    ],
    "specs": {
      "구성": "삼각티백 30개입 틴케이스",
      "티백재질": "친환경 PLA 사탕수수 필터"
    },
    "reviews": [
      {
        "id": "rev-prod-59-1",
        "author": "권*은",
        "rating": 4,
        "date": "2026-09-27",
        "content": "유기농 루이보스 & 카모마일 허브 블렌딩 티백 세트 (30티백) 맛과 풍미가 깊고 신선함이 입안 가득 느껴집니다.",
        "likes": 40
      },
      {
        "id": "rev-prod-59-2",
        "author": "황*윤",
        "rating": 5,
        "date": "2026-09-24",
        "content": "포장 상태가 너무 정갈해서 선물용으로도 손색이 없네요.",
        "likes": 38
      },
      {
        "id": "rev-prod-59-3",
        "author": "안*민",
        "rating": 5,
        "date": "2026-09-21",
        "content": "자연 그대로의 건강한 단맛과 감칠맛이 일품입니다.",
        "likes": 36
      },
      {
        "id": "rev-prod-59-4",
        "author": "송*지",
        "rating": 5,
        "date": "2026-09-18",
        "content": "아이들과 온 가족이 모두 맛있다고 간식으로 순삭했어요.",
        "likes": 35
      },
      {
        "id": "rev-prod-59-5",
        "author": "전*정",
        "rating": 5,
        "date": "2026-09-15",
        "content": "신선한 재료 본연의 맛이 살아있어 요리의 품격이 올라갑니다.",
        "likes": 33
      },
      {
        "id": "rev-prod-59-6",
        "author": "홍*영",
        "rating": 5,
        "date": "2026-09-12",
        "content": "아침 식사 대용이나 홈카페 티타임에 곁들이기 딱 좋아요.",
        "likes": 32
      },
      {
        "id": "rev-prod-59-7",
        "author": "유*원",
        "rating": 4,
        "date": "2026-09-09",
        "content": "유통기한도 넉넉하고 제조일자가 최근이라 안심하고 먹습니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-59-8",
        "author": "고*린",
        "rating": 5,
        "date": "2026-09-06",
        "content": "시중 마트 제품과는 비교가 안 되는 프리미엄 퀄리티입니다.",
        "likes": 28
      },
      {
        "id": "rev-prod-59-9",
        "author": "문*준",
        "rating": 5,
        "date": "2026-09-03",
        "content": "부모님께 보내드렸는데 너무 맛있다고 극찬을 아끼지 않으셨어요.",
        "likes": 27
      },
      {
        "id": "rev-prod-59-10",
        "author": "양*경",
        "rating": 5,
        "date": "2026-08-31",
        "content": "패키지 디자인도 세련되고 보관하기 편한 용기라 만족합니다.",
        "likes": 25
      },
      {
        "id": "rev-prod-59-11",
        "author": "손*수",
        "rating": 5,
        "date": "2026-08-28",
        "content": "자극적이지 않고 깔끔해서 매일 먹어도 질리지 않아요.",
        "likes": 24
      },
      {
        "id": "rev-prod-59-12",
        "author": "배*우",
        "rating": 5,
        "date": "2026-08-25",
        "content": "원산지와 유기농 인증이 확실해서 믿고 먹을 수 있습니다.",
        "likes": 22
      },
      {
        "id": "rev-prod-59-13",
        "author": "백*희",
        "rating": 4,
        "date": "2026-08-22",
        "content": "친구들 놀러 왔을 때 대접했는데 다들 어디서 샀냐고 물어보네요.",
        "likes": 20
      },
      {
        "id": "rev-prod-59-14",
        "author": "허*진",
        "rating": 5,
        "date": "2026-08-19",
        "content": "정기배송하고 싶을 정도로 만족스러운 고품격 푸드입니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-59-15",
        "author": "노*아",
        "rating": 5,
        "date": "2026-08-16",
        "content": "신선도를 유지해 주는 꼼꼼한 이중 포장에 감동했습니다.",
        "likes": 17
      },
      {
        "id": "rev-prod-59-16",
        "author": "남*태",
        "rating": 5,
        "date": "2026-08-13",
        "content": "홈카페와 홈쿠킹 퀄리티가 전문점 수준으로 업그레이드됐어요.",
        "likes": 16
      },
      {
        "id": "rev-prod-59-17",
        "author": "심*현",
        "rating": 5,
        "date": "2026-08-10",
        "content": "재구매 의사 1000%입니다. 다 먹으면 또 주문할게요.",
        "likes": 14
      },
      {
        "id": "rev-prod-59-18",
        "author": "김*호",
        "rating": 5,
        "date": "2026-08-07",
        "content": "지인 답례품으로 돌렸는데 반응이 역대급으로 좋았습니다.",
        "likes": 12
      },
      {
        "id": "rev-prod-59-19",
        "author": "이*훈",
        "rating": 4,
        "date": "2026-08-04",
        "content": "정성이 가득 담긴 건강한 먹거리라 몸도 마음도 든든합니다.",
        "likes": 11
      },
      {
        "id": "rev-prod-59-20",
        "author": "박*서",
        "rating": 5,
        "date": "2026-08-01",
        "content": "맛, 영양, 포장까지 3박자를 모두 갖춘 최고의 제품입니다!",
        "likes": 9
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-59-1",
        "author": "박*현",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  },
  {
    "id": "prod-60",
    "name": "제주 화산암반수 저온추출 더치 콜드브루 원액 500ml",
    "category": "푸드 / 키친",
    "categoryId": "cat-food",
    "price": 19000,
    "originalPrice": 26000,
    "discountRate": 27,
    "rating": 4.8,
    "reviewCount": 20,
    "stock": 43,
    "isBest": true,
    "isNew": true,
    "isSale": true,
    "isFreeShipping": false,
    "thumbnail": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80"
    ],
    "summary": "12시간 동안 한 방울씩 정성으로 내린 깊고 진한 와인 같은 커피의 눈물",
    "description": "<h3>12시간 동안 한 방울씩 정성으로 내린 깊고 진한 와인 같은 커피의 눈물</h3>\n<p>제주 화산암반수 저온추출 더치 콜드브루 원액 500ml은(는) 일상의 가치를 한 단계 높여주는 프리미엄 라이프스타일 아이템입니다. 최고급 원자재와 정밀한 공정을 거쳐 탄생하여 탁월한 완성도와 지속 가능한 만족감을 선사합니다.</p>\n\n<div class=\"product-detail-image-gallery mt-8 space-y-8\">\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80\" alt=\"제주 화산암반수 저온추출 더치 콜드브루 원액 500ml 상세 사진 01\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #01 - 프리미엄 퀄리티 & 핵심 디테일</span>\n      <span class=\"text-slate-500 font-medium\">제주 화산암반수 저온추출 더치 콜드브루 원액 500ml의 엄선된 최고급 퀄리티와 정교한 마감 설계를 확인해보세요.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80\" alt=\"제주 화산암반수 저온추출 더치 콜드브루 원액 500ml 상세 사진 02\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #02 - 소재 및 마감 완성도 클로즈업</span>\n      <span class=\"text-slate-500 font-medium\">일상 속 자연스러운 편안함과 세련된 감성을 더해주는 디테일 뷰입니다.</span>\n    </div>\n  </div>\n  <div class=\"rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white\">\n    <img src=\"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80\" alt=\"제주 화산암반수 저온추출 더치 콜드브루 원액 500ml 상세 사진 03\" class=\"w-full h-auto object-cover max-h-[560px]\" loading=\"lazy\" />\n    <div class=\"p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs\">\n      <span class=\"font-bold text-slate-800\">📸 DETAIL VIEW #03 - 실사용 라이프스타일 컷</span>\n      <span class=\"text-slate-500 font-medium\">프리미엄 라이프스타일 큐레이션 EASYSHOP이 보증하는 정품 퀄리티입니다.</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"mt-8 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 text-xs text-slate-700 leading-relaxed space-y-2\">\n  <div class=\"font-bold text-indigo-900 flex items-center gap-1.5 text-sm mb-2\">\n    <span>💡 EASYSHOP 안심 케어 보증</span>\n  </div>\n  <p>• 100% 본사 직발송 정품 인증 상품입니다.</p>\n  <p>• 주문 결제 완료 후 꼼꼼한 2차 검수를 거쳐 안전하게 완충 포장되어 출고됩니다.</p>\n  <p>• 상품 수령 후 파손 및 불량 발생 시 7일 이내 100% 무상 교환 및 반품이 보장됩니다.</p>\n</div>",
    "options": [
      {
        "name": "더치 원액 500ml 유리병",
        "stock": 50
      },
      {
        "name": "더치 원액 1000ml 대용량",
        "stock": 30
      }
    ],
    "specs": {
      "용량": "500ml / 1000ml",
      "추출": "12시간 점적식 저온 추출"
    },
    "reviews": [
      {
        "id": "rev-prod-60-1",
        "author": "최*은",
        "rating": 4,
        "date": "2026-09-26",
        "content": "제주 화산암반수 저온추출 더치 콜드브루 원액 500ml 맛과 풍미가 깊고 신선함이 입안 가득 느껴집니다.",
        "likes": 42
      },
      {
        "id": "rev-prod-60-2",
        "author": "정*윤",
        "rating": 5,
        "date": "2026-09-23",
        "content": "포장 상태가 너무 정갈해서 선물용으로도 손색이 없네요.",
        "likes": 40
      },
      {
        "id": "rev-prod-60-3",
        "author": "강*민",
        "rating": 5,
        "date": "2026-09-20",
        "content": "자연 그대로의 건강한 단맛과 감칠맛이 일품입니다.",
        "likes": 38
      },
      {
        "id": "rev-prod-60-4",
        "author": "조*지",
        "rating": 5,
        "date": "2026-09-17",
        "content": "아이들과 온 가족이 모두 맛있다고 간식으로 순삭했어요.",
        "likes": 37
      },
      {
        "id": "rev-prod-60-5",
        "author": "윤*정",
        "rating": 5,
        "date": "2026-09-14",
        "content": "신선한 재료 본연의 맛이 살아있어 요리의 품격이 올라갑니다.",
        "likes": 35
      },
      {
        "id": "rev-prod-60-6",
        "author": "장*영",
        "rating": 5,
        "date": "2026-09-11",
        "content": "아침 식사 대용이나 홈카페 티타임에 곁들이기 딱 좋아요.",
        "likes": 34
      },
      {
        "id": "rev-prod-60-7",
        "author": "임*원",
        "rating": 4,
        "date": "2026-09-08",
        "content": "유통기한도 넉넉하고 제조일자가 최근이라 안심하고 먹습니다.",
        "likes": 32
      },
      {
        "id": "rev-prod-60-8",
        "author": "한*린",
        "rating": 5,
        "date": "2026-09-05",
        "content": "시중 마트 제품과는 비교가 안 되는 프리미엄 퀄리티입니다.",
        "likes": 30
      },
      {
        "id": "rev-prod-60-9",
        "author": "오*준",
        "rating": 5,
        "date": "2026-09-02",
        "content": "부모님께 보내드렸는데 너무 맛있다고 극찬을 아끼지 않으셨어요.",
        "likes": 29
      },
      {
        "id": "rev-prod-60-10",
        "author": "서*경",
        "rating": 5,
        "date": "2026-08-30",
        "content": "패키지 디자인도 세련되고 보관하기 편한 용기라 만족합니다.",
        "likes": 27
      },
      {
        "id": "rev-prod-60-11",
        "author": "신*수",
        "rating": 5,
        "date": "2026-08-27",
        "content": "자극적이지 않고 깔끔해서 매일 먹어도 질리지 않아요.",
        "likes": 26
      },
      {
        "id": "rev-prod-60-12",
        "author": "권*우",
        "rating": 5,
        "date": "2026-08-24",
        "content": "원산지와 유기농 인증이 확실해서 믿고 먹을 수 있습니다.",
        "likes": 24
      },
      {
        "id": "rev-prod-60-13",
        "author": "황*희",
        "rating": 4,
        "date": "2026-08-21",
        "content": "친구들 놀러 왔을 때 대접했는데 다들 어디서 샀냐고 물어보네요.",
        "likes": 22
      },
      {
        "id": "rev-prod-60-14",
        "author": "안*진",
        "rating": 5,
        "date": "2026-08-18",
        "content": "정기배송하고 싶을 정도로 만족스러운 고품격 푸드입니다.",
        "likes": 21
      },
      {
        "id": "rev-prod-60-15",
        "author": "송*아",
        "rating": 5,
        "date": "2026-08-15",
        "content": "신선도를 유지해 주는 꼼꼼한 이중 포장에 감동했습니다.",
        "likes": 19
      },
      {
        "id": "rev-prod-60-16",
        "author": "전*태",
        "rating": 5,
        "date": "2026-08-12",
        "content": "홈카페와 홈쿠킹 퀄리티가 전문점 수준으로 업그레이드됐어요.",
        "likes": 18
      },
      {
        "id": "rev-prod-60-17",
        "author": "홍*현",
        "rating": 5,
        "date": "2026-08-09",
        "content": "재구매 의사 1000%입니다. 다 먹으면 또 주문할게요.",
        "likes": 16
      },
      {
        "id": "rev-prod-60-18",
        "author": "유*호",
        "rating": 5,
        "date": "2026-08-06",
        "content": "지인 답례품으로 돌렸는데 반응이 역대급으로 좋았습니다.",
        "likes": 14
      },
      {
        "id": "rev-prod-60-19",
        "author": "고*훈",
        "rating": 4,
        "date": "2026-08-03",
        "content": "정성이 가득 담긴 건강한 먹거리라 몸도 마음도 든든합니다.",
        "likes": 13
      },
      {
        "id": "rev-prod-60-20",
        "author": "문*서",
        "rating": 5,
        "date": "2026-07-31",
        "content": "맛, 영양, 포장까지 3박자를 모두 갖춘 최고의 제품입니다!",
        "likes": 11
      }
    ],
    "qnas": [
      {
        "id": "qna-prod-60-1",
        "author": "최*호",
        "date": "2026-09-20",
        "question": "오늘 주문하면 언제 출고되나요?",
        "answer": "고객님 안녕하세요! 오후 2시 이전 결제 완료 시 당일 안전하게 로켓 출고됩니다."
      }
    ]
  }
];

const DEFAULT_USERS = [
  {
    "id": "usr-1001",
    "email": "kim.minjun@gmail.com",
    "name": "김민준",
    "phone": "010-3849-1928",
    "grade": "VIP",
    "points": 45000,
    "orderCount": 18,
    "totalSpent": 2450000,
    "status": "정상",
    "device": "Mobile (iOS)",
    "lastLogin": "2026-10-06 17:35:12",
    "joinedAt": "2026-03-15",
    "address": "서울특별시 강남구 테헤란로 152",
    "addressDetail": "강남파이낸스센터 12층"
  },
  {
    "id": "usr-1002",
    "email": "lee.seoyeon@naver.com",
    "name": "이서연",
    "phone": "010-9281-4710",
    "grade": "GOLD",
    "points": 21000,
    "orderCount": 9,
    "totalSpent": 1120000,
    "status": "정상",
    "device": "Mobile (Android)",
    "lastLogin": "2026-10-06 16:50:20",
    "joinedAt": "2026-04-02",
    "address": "경기도 성남시 분당구 판교역로 235",
    "addressDetail": "에이치스퀘어 N동 801호"
  },
  {
    "id": "usr-1003",
    "email": "park.dohyun@kakao.com",
    "name": "박도현",
    "phone": "010-7712-3948",
    "grade": "VIP",
    "points": 68000,
    "orderCount": 24,
    "totalSpent": 3890000,
    "status": "정상",
    "device": "PC (Windows)",
    "lastLogin": "2026-10-06 17:42:05",
    "joinedAt": "2026-02-10",
    "address": "부산광역시 해운대구 센텀중앙로 78",
    "addressDetail": "센텀타워 1503호"
  },
  {
    "id": "usr-1004",
    "email": "jung.jiwoo@daum.net",
    "name": "정지우",
    "phone": "010-4491-8273",
    "grade": "SILVER",
    "points": 8500,
    "orderCount": 4,
    "totalSpent": 430000,
    "status": "정상",
    "device": "Mobile (iOS)",
    "lastLogin": "2026-10-06 14:20:11",
    "joinedAt": "2026-06-18",
    "address": "인천광역시 연수구 송도과학로 32",
    "addressDetail": "송도테크노파크 IT센터 502호"
  },
  {
    "id": "usr-1005",
    "email": "choi.yujin@gmail.com",
    "name": "최유진",
    "phone": "010-6102-9938",
    "grade": "GOLD",
    "points": 18200,
    "orderCount": 7,
    "totalSpent": 890000,
    "status": "정상",
    "device": "PC (Mac)",
    "lastLogin": "2026-10-06 15:10:45",
    "joinedAt": "2026-05-11",
    "address": "대구광역시 수성구 달구벌대로 2450",
    "addressDetail": "수성빌딩 4층"
  },
  {
    "id": "usr-1006",
    "email": "kang.hyunwoo@naver.com",
    "name": "강현우",
    "phone": "010-8831-2049",
    "grade": "일반",
    "points": 3000,
    "orderCount": 1,
    "totalSpent": 79000,
    "status": "정상",
    "device": "Mobile (Android)",
    "lastLogin": "2026-10-06 17:15:30",
    "joinedAt": "2026-09-28",
    "address": "대전광역시 유성구 대학로 99",
    "addressDetail": "카이스트 창업원 201호"
  },
  {
    "id": "usr-1007",
    "email": "yoon.chaewon@gmail.com",
    "name": "윤채원",
    "phone": "010-5592-1847",
    "grade": "SILVER",
    "points": 12000,
    "orderCount": 5,
    "totalSpent": 560000,
    "status": "정상",
    "device": "Mobile (iOS)",
    "lastLogin": "2026-10-05 21:40:18",
    "joinedAt": "2026-07-04",
    "address": "광주광역시 서구 상무중앙로 110",
    "addressDetail": "상무타워 11층"
  },
  {
    "id": "usr-1008",
    "email": "jang.minseok@kakao.com",
    "name": "장민석",
    "phone": "010-3329-8172",
    "grade": "일반",
    "points": 1500,
    "orderCount": 0,
    "totalSpent": 0,
    "status": "신규",
    "device": "Mobile (iOS)",
    "lastLogin": "2026-10-06 17:40:02",
    "joinedAt": "2026-10-06",
    "address": "울산광역시 남구 삼산로 217",
    "addressDetail": "삼산현대아파트 102동 504호"
  },
  {
    "id": "usr-1009",
    "email": "han.sohee@naver.com",
    "name": "한소희",
    "phone": "010-9948-1234",
    "grade": "VIP",
    "points": 92000,
    "orderCount": 31,
    "totalSpent": 5120000,
    "status": "정상",
    "device": "PC (Windows)",
    "lastLogin": "2026-10-06 16:25:50",
    "joinedAt": "2026-01-20",
    "address": "서울특별시 용산구 한남대로 91",
    "addressDetail": "나인원한남 105동 801호"
  },
  {
    "id": "usr-1010",
    "email": "oh.seungjin@gmail.com",
    "name": "오승진",
    "phone": "010-1284-9023",
    "grade": "일반",
    "points": 0,
    "orderCount": 2,
    "totalSpent": 149000,
    "status": "휴면",
    "device": "PC (Windows)",
    "lastLogin": "2026-07-12 09:15:00",
    "joinedAt": "2026-04-19",
    "address": "세종특별자치시 한누리대로 411",
    "addressDetail": "행정프라자 3층"
  },
  {
    "id": "usr-1011",
    "email": "shin.haerim@daum.net",
    "name": "신해림",
    "phone": "010-6729-3810",
    "grade": "GOLD",
    "points": 34000,
    "orderCount": 12,
    "totalSpent": 1680000,
    "status": "정상",
    "device": "Mobile (iOS)",
    "lastLogin": "2026-10-06 11:30:19",
    "joinedAt": "2026-03-30",
    "address": "경기도 수원시 영통구 광교중앙로 170",
    "addressDetail": "광교효성해링턴타워 702호"
  },
  {
    "id": "usr-1012",
    "email": "kwon.taewon@naver.com",
    "name": "권태원",
    "phone": "010-4820-1948",
    "grade": "일반",
    "points": 500,
    "orderCount": 1,
    "totalSpent": 49000,
    "status": "정지",
    "device": "Mobile (Android)",
    "lastLogin": "2026-09-14 18:02:11",
    "joinedAt": "2026-08-01",
    "address": "충청북도 청주시 흥덕구 직지대로 436",
    "addressDetail": "청주지웰시티몰 2층"
  }
];

function getRelativeOrderDate(daysAgo, timeStr = '12:00:00') {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd} ${timeStr}`;
}

function getAdaptiveDefaultOrders() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const ymd = `${yyyy}${mm}${dd}`;

  return [
    {
      "orderId": `ORD-${ymd}-9921`,
      "orderDate": getRelativeOrderDate(0, "17:15:30"),
      "customerName": "김민준",
      "customerPhone": "010-3849-1928",
      "customerEmail": "kim.minjun@gmail.com",
      "shippingAddress": "서울특별시 강남구 테헤란로 152 강남파이낸스센터 12층",
      "shippingNote": "부재 시 경비실에 맡겨주세요.",
      "paymentMethod": "신용카드 (현대카드)",
      "totalAmount": 289000,
      "shippingFee": 0,
      "discountAmount": 100000,
      "status": "결제완료",
      "trackingNumber": "",
      "items": [
        {
          "productId": "prod-01",
          "name": "프리미엄 캐시미어 블렌드 오버핏 코트",
          "option": "오트밀 베이지 / L(105)",
          "quantity": 1,
          "price": 289000,
          "thumbnail": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      "orderId": `ORD-${ymd}-8412`,
      "orderDate": getRelativeOrderDate(0, "14:30:15"),
      "customerName": "이서연",
      "customerPhone": "010-9281-4710",
      "customerEmail": "lee.seoyeon@naver.com",
      "shippingAddress": "경기도 성남시 분당구 판교역로 235 에이치스퀘어 N동 801호",
      "shippingNote": "배송 전 연락 부탁드립니다.",
      "paymentMethod": "카카오페이",
      "totalAmount": 168000,
      "shippingFee": 0,
      "discountAmount": 20000,
      "status": "결제완료",
      "trackingNumber": "",
      "items": [
        {
          "productId": "prod-03",
          "name": "엑스트라 파인 메리노울 터틀넥 니트",
          "option": "오트밀 베이지 / M(95-100)",
          "quantity": 1,
          "price": 89000,
          "thumbnail": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80"
        },
        {
          "productId": "prod-02",
          "name": "프렌치 린넨 100% 루즈핏 스트라이프 셔츠",
          "option": "스카이블루 / M(95-100)",
          "quantity": 1,
          "price": 79000,
          "thumbnail": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      "orderId": `ORD-${ymd}-7103`,
      "orderDate": getRelativeOrderDate(0, "11:20:00"),
      "customerName": "박도현",
      "customerPhone": "010-7712-3948",
      "customerEmail": "park.dohyun@kakao.com",
      "shippingAddress": "부산광역시 해운대구 센텀중앙로 78 센텀타워 1503호",
      "shippingNote": "문 앞에 놓아주세요.",
      "paymentMethod": "네이버페이",
      "totalAmount": 249000,
      "shippingFee": 0,
      "discountAmount": 30000,
      "status": "상품준비",
      "trackingNumber": "",
      "items": [
        {
          "productId": "prod-13",
          "name": "에어사운드 노이즈캔슬링 무선 헤드폰 프로",
          "option": "미드나잇 블랙",
          "quantity": 1,
          "price": 249000,
          "thumbnail": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      "orderId": `ORD-${ymd}-6541`,
      "orderDate": getRelativeOrderDate(1, "18:45:20"),
      "customerName": "정지우",
      "customerPhone": "010-4491-8273",
      "customerEmail": "jung.jiwoo@daum.net",
      "shippingAddress": "인천광역시 연수구 송도과학로 32 송도테크노파크 IT센터 502호",
      "shippingNote": "부재 시 연락주세요.",
      "paymentMethod": "신용카드 (삼성카드)",
      "totalAmount": 128000,
      "shippingFee": 0,
      "discountAmount": 15000,
      "status": "배송중",
      "trackingNumber": "CJ68291039841",
      "items": [
        {
          "productId": "prod-14",
          "name": "울트라 슬림 기계식 무선 블루투스 키보드",
          "option": "화이트 / 적축(리니어)",
          "quantity": 1,
          "price": 128000,
          "thumbnail": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      "orderId": `ORD-${ymd}-5920`,
      "orderDate": getRelativeOrderDate(1, "15:10:40"),
      "customerName": "최유진",
      "customerPhone": "010-8823-1194",
      "customerEmail": "choi.yujin@naver.com",
      "shippingAddress": "대구광역시 수성구 달구벌대로 2450 범어스퀘어 7층",
      "shippingNote": "택배함에 넣어주세요.",
      "paymentMethod": "토스페이",
      "totalAmount": 88000,
      "shippingFee": 0,
      "discountAmount": 10000,
      "status": "배송중",
      "trackingNumber": "HJ99201847120",
      "items": [
        {
          "productId": "prod-04",
          "name": "미니멀 레귤러 스트레이트 로우 데님 팬츠",
          "option": "딥 인디고 / 30(M)",
          "quantity": 1,
          "price": 88000,
          "thumbnail": "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      "orderId": `ORD-${ymd}-4819`,
      "orderDate": getRelativeOrderDate(2, "20:15:10"),
      "customerName": "강현우",
      "customerPhone": "010-3329-8761",
      "customerEmail": "kang.hw@gmail.com",
      "shippingAddress": "대전광역시 유성구 대덕대로 512 신세계 엑스포타워 1102호",
      "shippingNote": "문 앞 배송",
      "paymentMethod": "신용카드 (KB국민카드)",
      "totalAmount": 178000,
      "shippingFee": 0,
      "discountAmount": 20000,
      "status": "배송완료",
      "trackingNumber": "LOTTE481920391",
      "items": [
        {
          "productId": "prod-15",
          "name": "인체공학 버티컬 무선 마우스 마스터 에디션",
          "option": "스페이스 그레이",
          "quantity": 1,
          "price": 89000,
          "thumbnail": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80"
        },
        {
          "productId": "prod-03",
          "name": "엑스트라 파인 메리노울 터틀넥 니트",
          "option": "오트밀 베이지 / L(105)",
          "quantity": 1,
          "price": 89000,
          "thumbnail": "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      "orderId": `ORD-${ymd}-3921`,
      "orderDate": getRelativeOrderDate(2, "13:05:00"),
      "customerName": "한소희",
      "customerPhone": "010-5561-2290",
      "customerEmail": "han.sohee@kakao.com",
      "shippingAddress": "광주광역시 서구 상무중앙로 45 상무타워 804호",
      "shippingNote": "부재 시 경비실에 보관",
      "paymentMethod": "카카오페이",
      "totalAmount": 215000,
      "shippingFee": 0,
      "discountAmount": 25000,
      "status": "배송완료",
      "trackingNumber": "CJ39210948271",
      "items": [
        {
          "productId": "prod-08",
          "name": "타임리스 미니멀 실크 플리츠 롱 스커트",
          "option": "샴페인 베이지 / Free",
          "quantity": 1,
          "price": 115000,
          "thumbnail": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80"
        },
        {
          "productId": "prod-05",
          "name": "모던 클래식 블레이저 & 슬랙스 셋업 슈트",
          "option": "차콜 그레이 / M(95-100)",
          "quantity": 1,
          "price": 100000,
          "thumbnail": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      "orderId": `ORD-${ymd}-2810`,
      "orderDate": getRelativeOrderDate(3, "16:22:45"),
      "customerName": "윤채원",
      "customerPhone": "010-7782-9913",
      "customerEmail": "yoon.cw@gmail.com",
      "shippingAddress": "울산광역시 남구 삼산로 182 삼산하이츠 1401호",
      "shippingNote": "배송 후 문자 부탁드립니다.",
      "paymentMethod": "신용카드 (신한카드)",
      "totalAmount": 142000,
      "shippingFee": 0,
      "discountAmount": 10000,
      "status": "배송완료",
      "trackingNumber": "POST2810938472",
      "items": [
        {
          "productId": "prod-25",
          "name": "천연 소가죽 클래식 브리프케이스 서류가방",
          "option": "빈티지 브라운",
          "quantity": 1,
          "price": 142000,
          "thumbnail": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
        }
      ]
    }
  ];
}

const DEFAULT_ORDERS = getAdaptiveDefaultOrders();

const ShopAPI = {
  BASE_URL: window.location.origin,

  async request(endpoint, options = {}) {
    const defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    // If on GitHub Pages, directly use static fallback / localStorage
    if (window.location.hostname.includes('github.io')) {
      return await this.fallback(endpoint, options);
    }

    try {
      const response = await fetch(`${this.BASE_URL}${endpoint}`, {
        ...options,
        headers: {
          ...defaultHeaders,
          ...options.headers
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      return await this.fallback(endpoint, options);
    }
  },

  async fallback(endpoint, options = {}) {
    try {
      // 1. Categories
      if (endpoint.startsWith('/api/categories')) {
        try {
          const res = await fetch('data/categories.json?_t=' + Date.now());
          if (res.ok) return await res.json();
        } catch {}
        return DEFAULT_CATEGORIES;
      }

      // 2. Products
      if (endpoint.startsWith('/api/products')) {
        let list = [...DEFAULT_PRODUCTS];
        const method = (options.method || 'GET').toUpperCase();
        const urlObj = new URL('http://dummy.com' + endpoint);
        const id = urlObj.searchParams.get('id');

        // Check localStorage custom products
        try {
          const localCustom = localStorage.getItem('easyshop_custom_products');
          if (localCustom) {
            const customs = JSON.parse(localCustom);
            customs.forEach(cp => {
              const idx = list.findIndex(p => p.id === cp.id);
              if (idx >= 0) list[idx] = cp;
              else list.unshift(cp);
            });
          }
        } catch {}

        if (method === 'GET') {
          if (id) {
            const item = list.find(p => p.id === id);
            return item || list[0] || null;
          }

          const category = urlObj.searchParams.get('category');
          const search = (urlObj.searchParams.get('search') || '').toLowerCase();
          const sort = urlObj.searchParams.get('sort');
          const isBest = urlObj.searchParams.get('isBest');
          const isNew = urlObj.searchParams.get('isNew');
          const isSale = urlObj.searchParams.get('isSale');

          let filtered = [...list];
          if (category && category !== '전체') {
            filtered = filtered.filter(p => p.category === category || p.categoryId === category);
          }
          if (search) {
            filtered = filtered.filter(p => (p.name || '').toLowerCase().includes(search) || (p.summary || '').toLowerCase().includes(search));
          }
          if (isBest === 'true') filtered = filtered.filter(p => p.isBest);
          if (isNew === 'true') filtered = filtered.filter(p => p.isNew);
          if (isSale === 'true') filtered = filtered.filter(p => p.isSale);

          if (sort === 'price_asc') filtered.sort((a, b) => a.price - b.price);
          else if (sort === 'price_desc') filtered.sort((a, b) => b.price - a.price);
          else if (sort === 'rating') filtered.sort((a, b) => (b.rating || 5) - (a.rating || 5));
          else if (sort === 'reviews') filtered.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));

          return filtered;
        }

        if (method === 'POST') {
          const body = JSON.parse(options.body || '{}');
          body.id = 'prod-' + Date.now();
          body.rating = 5.0;
          body.reviewCount = 0;
          body.reviews = [];
          list.unshift(body);
          try {
            const localCustom = JSON.parse(localStorage.getItem('easyshop_custom_products') || '[]');
            localCustom.unshift(body);
            localStorage.setItem('easyshop_custom_products', JSON.stringify(localCustom));
          } catch {}
          return body;
        }

        if (method === 'PUT') {
          const body = JSON.parse(options.body || '{}');
          const idx = list.findIndex(p => p.id === id);
          if (idx >= 0) {
            list[idx] = { ...list[idx], ...body };
            try {
              const localCustom = JSON.parse(localStorage.getItem('easyshop_custom_products') || '[]');
              const cIdx = localCustom.findIndex(p => p.id === id);
              if (cIdx >= 0) localCustom[cIdx] = list[idx];
              else localCustom.unshift(list[idx]);
              localStorage.setItem('easyshop_custom_products', JSON.stringify(localCustom));
            } catch {}
            return list[idx];
          }
        }

        if (method === 'DELETE') {
          list = list.filter(p => p.id !== id);
          try {
            let localCustom = JSON.parse(localStorage.getItem('easyshop_custom_products') || '[]');
            localCustom = localCustom.filter(p => p.id !== id);
            localStorage.setItem('easyshop_custom_products', JSON.stringify(localCustom));
          } catch {}
          return { success: true };
        }

        return list;
      }

            // 3. Orders (Full CRUD & Date Range Filtering)
      if (endpoint.startsWith('/api/orders')) {
        let orderList = [];
        try {
          const localOrders = localStorage.getItem('easyshop_orders');
          if (localOrders) {
            const parsed = JSON.parse(localOrders);
            if (Array.isArray(parsed) && parsed.length > 0) {
              orderList = parsed;
            } else {
              orderList = getAdaptiveDefaultOrders();
              localStorage.setItem('easyshop_orders', JSON.stringify(orderList));
            }
          } else {
            orderList = getAdaptiveDefaultOrders();
            localStorage.setItem('easyshop_orders', JSON.stringify(orderList));
          }
        } catch {
          orderList = getAdaptiveDefaultOrders();
        }

        const method = (options.method || 'GET').toUpperCase();
        const urlObj = new URL('http://dummy.com' + endpoint);
        const orderId = urlObj.searchParams.get('orderId');

        if (method === 'GET') {
          if (orderId) {
            const ord = orderList.find(o => o.orderId === orderId);
            return ord || null;
          }
          const status = urlObj.searchParams.get('status');
          const search = urlObj.searchParams.get('search');
          const startDate = urlObj.searchParams.get('startDate');
          const endDate = urlObj.searchParams.get('endDate');

          let filtered = [...orderList];
          if (status && status !== '전체') {
            filtered = filtered.filter(o => o.status === status);
          }
          if (search) {
            const q = search.toLowerCase();
            filtered = filtered.filter(o =>
              (o.orderId && o.orderId.toLowerCase().includes(q)) ||
              (o.customerName && o.customerName.toLowerCase().includes(q)) ||
              (o.customerPhone && o.customerPhone.includes(q)) ||
              (o.items && o.items.some(it => it.name && it.name.toLowerCase().includes(q)))
            );
          }
          if (startDate) {
            filtered = filtered.filter(o => o.orderDate && o.orderDate.slice(0, 10) >= startDate);
          }
          if (endDate) {
            filtered = filtered.filter(o => o.orderDate && o.orderDate.slice(0, 10) <= endDate);
          }
          return filtered;
        }

        if (method === 'POST') {
          const body = JSON.parse(options.body || '{}');
          body.orderId = body.orderId || ('ORD-' + Date.now().toString().slice(-8));
          body.orderDate = body.orderDate || new Date().toISOString().replace('T', ' ').slice(0, 19);
          body.status = body.status || '결제완료';
          body.trackingNumber = body.trackingNumber || '';
          orderList.unshift(body);
          try {
            localStorage.setItem('easyshop_orders', JSON.stringify(orderList));
          } catch {}
          return { success: true, order: body, orderId: body.orderId };
        }

        if (method === 'PUT') {
          const updateData = JSON.parse(options.body || '{}');
          const idx = orderList.findIndex(o => o.orderId === orderId);
          if (idx >= 0) {
            orderList[idx] = { ...orderList[idx], ...updateData };
            try {
              localStorage.setItem('easyshop_orders', JSON.stringify(orderList));
            } catch {}
            return { success: true, order: orderList[idx] };
          }
          return { success: false, message: 'Order not found' };
        }

        if (method === 'DELETE') {
          orderList = orderList.filter(o => o.orderId !== orderId);
          try {
            localStorage.setItem('easyshop_orders', JSON.stringify(orderList));
          } catch {}
          return { success: true };
        }

        return orderList;
      }



      // 5. Users
      if (endpoint.startsWith('/api/users')) {
        let userList = [];
        try {
          const stored = localStorage.getItem('easyshop_users_v3');
          if (stored) {
            userList = JSON.parse(stored);
          } else {
            userList = [...DEFAULT_USERS];
            localStorage.setItem('easyshop_users_v3', JSON.stringify(userList));
          }
        } catch {
          userList = [...DEFAULT_USERS];
        }

        const method = (options.method || 'GET').toUpperCase();
        const urlObj = new URL('http://dummy.com' + endpoint);
        const id = urlObj.searchParams.get('id');

        if (method === 'GET') {
          if (id) {
            return userList.find(u => u.id === id) || null;
          }
          const search = urlObj.searchParams.get('search');
          const grade = urlObj.searchParams.get('grade');
          const status = urlObj.searchParams.get('status');

          let filtered = [...userList];
          if (search) {
            const q = search.toLowerCase();
            filtered = filtered.filter(u =>
              (u.name && u.name.toLowerCase().includes(q)) ||
              (u.email && u.email.toLowerCase().includes(q)) ||
              (u.phone && u.phone.includes(q))
            );
          }
          if (grade && grade !== '전체') {
            filtered = filtered.filter(u => u.grade === grade);
          }
          if (status && status !== '전체') {
            filtered = filtered.filter(u => u.status === status);
          }
          return filtered;
        }

        if (method === 'POST') {
          const newUser = JSON.parse(options.body || '{}');
          newUser.id = newUser.id || 'usr-' + Date.now().toString().slice(-4);
          newUser.joinedAt = newUser.joinedAt || new Date().toISOString().slice(0, 10);
          newUser.lastLogin = newUser.lastLogin || new Date().toISOString().replace('T', ' ').slice(0, 19);
          newUser.status = newUser.status || '정상';
          newUser.grade = newUser.grade || '일반';
          newUser.points = parseInt(newUser.points) || 0;
          newUser.orderCount = parseInt(newUser.orderCount) || 0;
          newUser.totalSpent = parseInt(newUser.totalSpent) || 0;
          userList.unshift(newUser);
          localStorage.setItem('easyshop_users_v3', JSON.stringify(userList));
          return { success: true, user: newUser };
        }

        if (method === 'PUT') {
          const updateData = JSON.parse(options.body || '{}');
          const idx = userList.findIndex(u => u.id === id);
          if (idx >= 0) {
            userList[idx] = { ...userList[idx], ...updateData };
            localStorage.setItem('easyshop_users_v3', JSON.stringify(userList));
            return { success: true, user: userList[idx] };
          }
          return { success: false, message: 'User not found' };
        }

        if (method === 'DELETE') {
          userList = userList.filter(u => u.id !== id);
          localStorage.setItem('easyshop_users_v3', JSON.stringify(userList));
          return { success: true };
        }
      }

      // 4. Inquiries
      if (endpoint.startsWith('/api/inquiries')) {
        return DEFAULT_INQUIRIES;
      }
    } catch (e) {
      console.error('Fallback error:', e);
    }
    return [];
  },

  // Categories
  async getCategories() {
    return await this.request('/api/categories');
  },

  // Products
  async getProducts(params = {}) {
    const query = new URLSearchParams();
    if (params.category && params.category !== '전체') query.append('category', params.category);
    if (params.search) query.append('search', params.search);
    if (params.sort) query.append('sort', params.sort);
    if (params.minPrice) query.append('minPrice', params.minPrice);
    if (params.maxPrice) query.append('maxPrice', params.maxPrice);
    if (params.isBest) query.append('isBest', 'true');
    if (params.isNew) query.append('isNew', 'true');
    if (params.isSale) query.append('isSale', 'true');
    if (params.isFreeShipping) query.append('isFreeShipping', 'true');

    const qs = query.toString() ? '?' + query.toString() : '';
    return await this.request('/api/products' + qs);
  },

  async getProductById(id) {
    return await this.request('/api/products?id=' + encodeURIComponent(id));
  },

  async createProduct(productData) {
    return await this.request('/api/products', {
      method: 'POST',
      body: JSON.stringify(productData)
    });
  },

  async updateProduct(id, productData) {
    return await this.request('/api/products?id=' + encodeURIComponent(id), {
      method: 'PUT',
      body: JSON.stringify(productData)
    });
  },

  async deleteProduct(id) {
    return await this.request('/api/products?id=' + encodeURIComponent(id), {
      method: 'DELETE'
    });
  },

  // Users Management API
  async getUsers(params = {}) {
    const query = new URLSearchParams();
    if (params.search) query.append('search', params.search);
    if (params.grade && params.grade !== '전체') query.append('grade', params.grade);
    if (params.status && params.status !== '전체') query.append('status', params.status);
    const qs = query.toString() ? '?' + query.toString() : '';
    return await this.request('/api/users' + qs);
  },

  async getUserById(id) {
    return await this.request('/api/users?id=' + encodeURIComponent(id));
  },

  async createUser(userData) {
    return await this.request('/api/users', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  },

  async updateUser(id, userData) {
    return await this.request('/api/users?id=' + encodeURIComponent(id), {
      method: 'PUT',
      body: JSON.stringify(userData)
    });
  },

  async deleteUser(id) {
    return await this.request('/api/users?id=' + encodeURIComponent(id), {
      method: 'DELETE'
    });
  },

  // Orders
  async getOrders(params = {}) {
    const query = new URLSearchParams();
    if (params.status && params.status !== '전체') query.append('status', params.status);
    if (params.search) query.append('search', params.search);
    const qs = query.toString() ? '?' + query.toString() : '';
    return await this.request('/api/orders' + qs);
  },

  async getOrderById(orderId) {
    return await this.request('/api/orders?orderId=' + encodeURIComponent(orderId));
  },

  async createOrder(orderData) {
    return await this.request('/api/orders', {
      method: 'POST',
      body: JSON.stringify(orderData)
    });
  },

  async updateOrderStatus(orderId, status, trackingNumber = '') {
    return await this.request('/api/orders?orderId=' + encodeURIComponent(orderId), {
      method: 'PUT',
      body: JSON.stringify({ status, trackingNumber })
    });
  },

  // Inquiries
  async getInquiries() {
    return await this.request('/api/inquiries');
  },

  async createInquiry(inquiryData) {
    return await this.request('/api/inquiries', {
      method: 'POST',
      body: JSON.stringify(inquiryData)
    });
  },

  async answerInquiry(id, answer) {
    return await this.request('/api/inquiries?id=' + encodeURIComponent(id), {
      method: 'PUT',
      body: JSON.stringify({ answer, status: '답변완료', answeredAt: new Date().toISOString().replace('T', ' ').substring(0, 16) })
    });
  },

  // Admin Stats
  async getStats() {
    return await this.request('/api/stats');
  }
};
