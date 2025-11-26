import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/UI/SectionTitle';
import Button from '../components/UI/Button';
import { BUSINESS_PLAN, SYSTEM_IMG } from '../images/assets';
import { CheckCircle2, TrendingUp, Infinity, RefreshCcw, PlayCircle } from 'lucide-react';

const BusinessPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={BUSINESS_PLAN} alt="Business Planning" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            성공을 위한 로드맵
          </motion.h1>
          <p className="text-xl text-gray-300">잠자는 동안에도 들어오는 권리소득의 비밀</p>
        </div>
      </section>

      {/* What is Platform Business */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={SYSTEM_IMG} alt="System" className="rounded-xl shadow-lg" />
            </motion.div>
            <div>
              <SectionTitle 
                title={
                  <a href="https://youtu.be/S-_q43_16uc" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-600 transition-colors group cursor-pointer">
                    플랫폼 비즈니스란?
                    <PlayCircle className="ml-3 text-secondary group-hover:scale-110 transition-transform" size={32} />
                  </a>
                } 
                align="left" 
              />
              <p className="text-gray-600 mb-6 leading-relaxed">
                쿠팡, 우버, 에어비앤비, 배달의민족의 공통점은 무엇일까요? 바로 '플랫폼'입니다.
                유사나 비즈니스는 여러분이 직접 제품을 제조하거나 배송할 필요가 없습니다.
                <br /><br />
                이미 구축된 유사나의 글로벌 인프라(제조, 연구, 물류, 전산)를 활용하여
                소비자와 회사를 연결하고, 그에 따른 멤버십 자산을 구축하는 일입니다.
                점포도, 재고도, 직원도 필요 없는 가장 스마트한 사업 모델입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compensation Plan Features */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title={
              <a href="https://youtu.be/SXz2xqBXEwU" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center hover:text-blue-600 transition-colors group cursor-pointer">
                유사나 보상 플랜의 4가지 특징
                <PlayCircle className="ml-3 text-secondary group-hover:scale-110 transition-transform" size={32} />
              </a>
            }
            subtitle="업계에서 가장 공정하고 합리적인 보상 시스템" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: RefreshCcw, title: "주급 지급", desc: "매주 금요일, 한 주간의 실적에 대해 즉시 보상합니다." },
              { icon: Infinity, title: "무한 깊이 인정", desc: "나로부터 시작된 모든 파트너십의 매출을 단계 제한 없이 공유받습니다." },
              { icon: TrendingUp, title: "잔여 실적 이월", desc: "수당을 지급받고 남은 실적은 사라지지 않고 다음 주로 이월됩니다." },
              { icon: CheckCircle2, title: "동일 비율 적용", desc: "직급에 상관없이 누구에게나 20%의 동일한 후원수당 비율을 적용합니다." },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">구체적인 수익 시뮬레이션이 궁금하신가요?</h2>
          <p className="text-gray-600 mb-8">
            초기 비용부터 월 천만 원 소득 플랜까지, 상세한 가이드북을 보내드립니다.
          </p>
          <a href="https://youtu.be/zjdohroy7as" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="lg">
              유사나 보상플랜 <PlayCircle size={20} className="ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default BusinessPage;