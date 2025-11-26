
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/UI/SectionTitle';
import Button from '../components/UI/Button';
import { MENTOR_PROFILE, TEAM_ACTIVITY } from '../images/assets';
import { Quote, Bot } from 'lucide-react';

const MentorPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Mentor Intro */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <img src={MENTOR_PROFILE} alt="Mentor" className="rounded-2xl shadow-2xl w-full" />
            </motion.div>
            <div className="md:w-2/3">
              <h2 className="text-primary font-bold text-lg mb-2">Independent Associate</h2>
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-dark">당신의 페이스메이커가 되겠습니다</h1>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  안녕하세요. 저는 평범한 직장인으로 살아가던 중, 건강 악화와 미래에 대한 불안감을 안고 살았습니다.
                  우연히 접한 유사나 제품으로 건강을 되찾았고, 그 과정에서 비즈니스의 비전을 보았습니다.
                </p>
                <p>
                  처음엔 "내가 과연 영업을 할 수 있을까?" 두려웠습니다. 하지만 유사나는 영업이 아닌 '공유'였고,
                  경쟁이 아닌 '팀워크'였습니다.
                </p>
                <p>
                  이제 저는 시간적, 경제적 자유를 얻고 파트너들의 성장을 돕는 리더로서 제2의 인생을 살고 있습니다.
                  여러분의 꿈을 현실로 만드는 여정에 제가 가장 든든한 가이드가 되어드리겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="우리는 이렇게 일합니다" subtitle="함께 성장하는 팀 문화" />
          
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl h-96 relative group">
            <img src={TEAM_ACTIVITY} alt="Team Activity" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <p className="text-white text-2xl md:text-3xl font-bold">"경쟁보다는 상생을, 속도보다는 방향을"</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "AI활용 전문가 팀", desc: "AI를 활용하여 누구나 전문가로 만들어 드립니다.", icon: Bot },
              { title: "체계적인 온보딩", desc: "신규 사업자를 위한 8주 집중 교육 프로그램 제공", icon: Quote },
              { title: "온/오프라인 하이브리드", desc: "줌(Zoom) 미팅과 오프라인 세미나를 병행하여 시공간 제약 극복", icon: Quote },
              { title: "존중과 격려", desc: "강요하지 않습니다. 각자의 속도에 맞춰 성장을 기다려주고 응원합니다.", icon: Quote }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col">
                <item.icon className="text-secondary mb-4 opacity-80" size={32} />
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-gray-600 flex-grow">{item.desc}</p>
                {item.title === "AI활용 전문가 팀" && (
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <a href="https://litt.ly/dreamon" target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" size="sm" fullWidth>
                        비즈니스 툴
                      </Button>
                    </a>
                    <p className="text-xs text-gray-400 mt-2 text-center">(비즈니스파트너 전용)</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorPage;
