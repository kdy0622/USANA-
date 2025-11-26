
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Users, ArrowRight, Bot } from 'lucide-react';
import Button from '../components/UI/Button';
import SectionTitle from '../components/UI/SectionTitle';
import { HERO_BG, FEATURE_INCOME, FEATURE_HEALTH, FEATURE_FREEDOM } from '../images/assets';
import { PERSONAL_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_BG} 
            alt="Business Meeting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              건강한 삶과 <span className="text-secondary">재정적 자유</span>.<br />
              당신의 노후는 안녕하십니까?
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 font-light">
              시간과 공간의 제약 없는 유사나 플랫폼 비즈니스로,<br className="hidden md:block" />
              평생 소득의 파이프라인을 지금 구축하세요.
            </p>
            
            {/* 2x2 Button Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <Link to="/business" className="w-full">
                <Button variant="primary" size="lg" fullWidth className="bg-blue-700 hover:bg-blue-600">
                  비즈니스 가이드
                </Button>
              </Link>
              
              <a href={PERSONAL_INFO.LITTLY} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="white" size="lg" fullWidth>
                  유사나 자세히보기
                </Button>
              </a>
              
              <Link to="/contact" className="w-full">
                <Button variant="outline" size="lg" fullWidth className="border-white text-white hover:bg-white hover:text-primary">
                  1:1 파트너 상담 신청
                </Button>
              </Link>
              
              <a href={PERSONAL_INFO.AI_CONSULT_HEALTH} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="secondary" size="lg" fullWidth className="border-2 border-secondary hover:bg-white hover:text-secondary">
                  <Bot className="mr-2" size={20}/> AI 건강상담
                </Button>
              </a>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Why Now? - Problem Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Why Now?" 
            subtitle="월급만으로는 부족한 시대, 당신의 대안은 무엇입니까?"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                img: FEATURE_INCOME, 
                title: "불안한 노후", 
                desc: "100세 시대, 은퇴 후 40년을 지탱할 자산이 준비되어 있나요?",
                link: "https://youtu.be/_oPPwGgTu1U"
              },
              { 
                img: FEATURE_HEALTH, 
                title: "건강의 위기", 
                desc: "스트레스와 환경 오염 속에서 나와 가족의 건강을 지킬 방법은?",
                link: "https://youtu.be/fP8_RI1GIGk"
              },
              { 
                img: FEATURE_FREEDOM, 
                title: "시간의 구속", 
                desc: "돈을 벌기 위해 나의 소중한 시간을 맞바꾸고 있지는 않나요?",
                link: "https://youtu.be/uLYwkhd3q6M"
              },
            ].map((item, index) => (
              <motion.a 
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 block cursor-pointer group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 flex items-center justify-between">
                    {item.title}
                    <ArrowRight size={20} className="text-secondary" />
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Why USANA? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <SectionTitle 
                title="Why USANA?" 
                subtitle="세포 과학 뉴트리션 전문 기업"
                align="left"
              />
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: "뉴욕증시(NYSE) 상장", text: "투명하고 건실한 재무 구조를 가진 글로벌 기업입니다." },
                  { icon: TrendingUp, title: "최고 등급의 제품력", text: "컨슈머랩, PDR 등재 등 객관적인 제3기관이 인증했습니다." },
                  { icon: Users, title: "공정한 보상 플랜", text: "누구나 노력한 만큼 보상받는 합리적인 수익 구조입니다." },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600 mt-1">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a href="https://youtu.be/rR2dtRkglDg" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary">
                    유사나의 특별함 <ArrowRight size={18} className="ml-2" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src="https://picsum.photos/seed/lab_science/800/800" 
                alt="USANA Science" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">지금이 가장 빠른 시작입니다</h2>
          <p className="text-xl text-blue-100 mb-10">
            혼자가 아닙니다. 검증된 성공 시스템과 밀착 멘토링으로 당신의 성장을 돕습니다.
            <br />지금 바로 새로운 기회의 문을 두드리세요.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg" className="shadow-lg transform hover:scale-105 transition-transform">
              무료 비즈니스 상담 신청하기 <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
