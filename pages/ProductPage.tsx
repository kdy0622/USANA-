
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/UI/SectionTitle';
import { PRODUCT_VITAMIN, PRODUCT_SKINCARE, PRODUCT_DIET, SYSTEM_IMG } from '../images/assets';
import Button from '../components/UI/Button';
import { ExternalLink, ShoppingCart, BookOpen, ArrowRight, Bot } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const ProductPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'nutrition' | 'skincare' | 'foodEnergy' | 'all'>('nutrition');

  const products = {
    nutrition: {
      tabName: "뉴트리션",
      tabSub: "(영양제)",
      title: "뉴트리션 (영양제)",
      desc: "세계 최고의 기술력, 인셀리전스 테크놀로지가 적용된 종합 비타민과 미네랄",
      img: PRODUCT_VITAMIN,
      items: [
        { text: "1992년 이후 30년이상 기술력으로 만드는 자체 포물러", link: "https://issuu.com/usanakorea/docs/business_guidebook_vol2_2020/12" },
        { text: "의약품 수준의 제조품질로 직접 제조 (FDA, GMP)", link: "https://youtu.be/JWTTVbpuqjM" },
        { text: "150명의 과학자 연구개발", link: "https://youtu.be/oR23L9jRs40" },
        { text: "인셀리전스 : 구글검색 10632101, 수명연장관련조성물 미국특허 취득", link: "https://youtu.be/MWJSTu16pb4" },
        { text: "영양제비교가이드 효능 안정성 1등(1999년 부터 26년간)", link: "https://youtu.be/WlGIbe0Hrhg" },
        { text: "전세계 5천명 이상의 엘리트선수들의 선택", link: "https://youtu.be/rFlCroMqFcU" },
        { text: "캐나다 의사 처방전(CPS), 미국 의사용 탁상편(PDR) 유사나제품 등재", link: "https://issuu.com/usanakorea/docs/business_guidebook_vol2_2020/18" }
      ],
      link: `${PERSONAL_INFO.WEBSITE}/ux/cart/kr-KR/category/123`,
      catalogLink: "https://issuu.com/usanakorea/docs/2025_ver.3"
    },
    skincare: {
      tabName: "스킨케어",
      tabSub: "(화장품)",
      title: "스킨케어 (화장품)",
      desc: "피부 본연의 힘을 깨우는 유사나 독점 과학기술",
      img: PRODUCT_SKINCARE,
      items: [
        { text: "인셀리전스 세포과학 기술 접목", link: "https://youtu.be/MWJSTu16pb4" },
        { text: "풍부한 항산화 성분으로 피부세포 영양보충", link: "https://youtu.be/nN7IUBqu2hI" },
        { text: "파라벤, 설페이트 등 경피독프리 특허받은 자가보존 포뮬러", link: "https://youtu.be/ALJwDTDUzSE" },
        { text: "바이탈라이징 세럼✨보습 & 흡수력 & 유분기 & pH 테스트 체험🔍", link: "https://youtu.be/l_Xd0cKkBdQ" },
        { text: "컨투어링 페이스 앤 넥 크림✨보습 & pH 테스트 체험🔍", link: "https://youtu.be/c4IgWuf793Y" },
        { text: "트리플 액션 아이크림✨탄력 & pH 테스트 체험🔍", link: "https://youtu.be/aDwQ2FTQzWU" }
      ],
      link: `${PERSONAL_INFO.WEBSITE}/ux/cart/kr-KR/category/121`,
      catalogLink: "https://issuu.com/usanakorea/docs/2025_27fcde3a78e679"
    },
    foodEnergy: {
      tabName: "푸드&에너지",
      tabSub: "(다이어트)",
      title: "푸드&에너지 (다이어트)",
      desc: "건강한 체중 조절과 에너지 대사를 돕는 과학적인 다이어트 프로그램",
      img: PRODUCT_DIET,
      items: [
        { text: "건강한 식사대용식(240kcal, 20g단백질, 9g 식이섬유, 15가지 영양소)", link: "https://youtu.be/iddIoGfTDK4" },
        { text: "요요없는 건강한 다이어트", link: "https://youtu.be/hyiD5W3odOw?si=m-TtPmj2_5LtYv3G" },
        { text: "소화 건강 지원(유기농 곡물효소)", link: "https://youtu.be/VP14Q_TesNI" },
        { text: "혈행 건강 지원(산화질소 써큘레이트플러스)", link: "https://youtu.be/I53V1uD5IUA?si=G5VhqAVIX3_1o2Lc" },
        { text: "장 건강 지원(식이섬유 화이버지)", link: "https://youtu.be/Qm7bOU5fxsg" },
        { text: "근육 건강 지원(코어 아미노)", link: "https://youtu.be/PA7js_JMYQU" },
        { text: "건강한 수분섭취(허브티믹스&미네랄드링크)", link: "https://youtu.be/1w8-9PzUCxs" }
      ],
      link: `${PERSONAL_INFO.WEBSITE}/ux/cart/kr-KR/category/221`,
      catalogLink: "https://issuu.com/usanakorea/docs/2025_ver.3"
    },
    all: {
      tabName: "전체제품",
      tabSub: "(쇼핑몰)",
      title: "전체제품 보기",
      desc: "유사나의 모든 제품을 공식 쇼핑몰에서 확인하세요.",
      img: SYSTEM_IMG,
      items: [
        { text: "뉴트리션, 스킨케어, 푸드&에너지 전 라인업" },
        { text: "회원가입 없이 둘러보기 가능" },
        { text: "본사 직배송 정품 보장" }
      ],
      link: `${PERSONAL_INFO.WEBSITE}/ux/dotcom/kor-KR/home`,
      catalogLink: "https://issuu.com/usanakorea/docs/2025_ver.3"
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-primary text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-5xl font-bold mb-4"
          >
            세상에서 가장 건강한 가족
          </motion.h1>
          <p className="text-xl text-blue-200">타협하지 않는 품질, 과학에 기반한 제품력</p>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs Container */}
          <div className="flex justify-start md:justify-center mb-12 overflow-x-auto py-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
            <div className="flex space-x-2 md:space-x-4 min-w-max">
              {(Object.keys(products) as Array<keyof typeof products>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 md:px-6 md:py-3 rounded-2xl font-medium transition-all duration-300 ${
                    activeTab === key 
                      ? 'bg-primary text-white shadow-lg scale-105' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <div className="flex flex-col md:flex-row items-center justify-center leading-tight md:space-x-1">
                    <span className="text-sm md:text-base font-bold whitespace-nowrap">{products[key].tabName}</span>
                    {products[key].tabSub && (
                      <span className={`text-xs md:text-base whitespace-nowrap ${activeTab === key ? 'text-blue-100' : 'text-gray-500'}`}>
                        {products[key].tabSub}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="h-64 md:h-auto relative"
              >
                <img 
                  src={products[activeTab].img} 
                  alt={products[activeTab].title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <motion.div
                   key={`${activeTab}-content`}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4 flex-wrap">
                    <h3 className="text-3xl font-bold text-primary">{products[activeTab].title}</h3>
                    {activeTab === 'nutrition' && (
                        <a href={PERSONAL_INFO.AI_CONSULT_HEALTH} target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" size="sm" className="rounded-full px-4 py-1 text-sm">
                                <Bot size={16} className="mr-1.5"/> 건강상담
                            </Button>
                        </a>
                    )}
                    {activeTab === 'skincare' && (
                        <a href={PERSONAL_INFO.AI_CONSULT_SKINCARE} target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" size="sm" className="rounded-full px-4 py-1 text-sm">
                                <Bot size={16} className="mr-1.5"/> 스킨케어상담
                            </Button>
                        </a>
                    )}
                  </div>
                  <p className="text-gray-600 text-lg mb-8">{products[activeTab].desc}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {products[activeTab].items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="leading-relaxed hover:text-blue-600 transition-colors font-medium flex items-center group"
                          >
                            <span className="border-b border-transparent group-hover:border-blue-600">
                              {item.text}
                            </span>
                            <ArrowRight size={16} className="ml-2 text-secondary" />
                          </a>
                        ) : (
                          <span className="leading-relaxed">{item.text}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={products[activeTab].link} target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" className="w-full sm:w-auto">
                        제품 구매하기 <ShoppingCart size={18} className="ml-2 inline-block" />
                      </Button>
                    </a>
                    {products[activeTab].catalogLink && (
                      <a href={products[activeTab].catalogLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full sm:w-auto">
                          카탈로그 보기 <BookOpen size={18} className="ml-2 inline-block" />
                        </Button>
                      </a>
                    )}
                  </div>
                  {(activeTab === 'nutrition' || activeTab === 'foodEnergy') && (
                    <p className="text-sm text-gray-600 mt-3 font-medium">
                      (회원 혜택 : 첫구매 10% 쿠폰, 두번째 주문부터 10%DC)
                    </p>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <SectionTitle title="믿을 수 있는 품질" subtitle="전 세계 25개국에서 검증받은 안전성" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'FDA GMP 등록 시설', color: 'bg-blue-900', text: 'FDA GMP' },
              { name: 'NSF 인터내셔널 스포츠인증', color: 'bg-blue-600', text: 'NSF Sport' },
              { name: 'ConsumerLab 인증', color: 'bg-red-700', text: 'ConsumerLab' },
              { name: 'USA', color: 'bg-gray-800', text: 'Made in USA' }
            ].map((cert, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow h-40 group">
                {/* Logo Placeholder */}
                <div className={`w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-center p-2 mb-3 shadow-inner ${cert.color} transform group-hover:scale-110 transition-transform duration-300`}>
                   {cert.text}
                </div>
                <span className="text-sm font-medium text-gray-700">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
