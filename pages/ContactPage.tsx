import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/UI/SectionTitle';
import Button from '../components/UI/Button';
import { CONTACT_BG } from '../images/assets';
import { Phone, Mail, MessageCircle, Plus, Minus, CheckCircle2, Globe, Laptop } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        {isOpen ? <Minus className="text-secondary" /> : <Plus className="text-gray-400" />}
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="mt-3 text-gray-600 pb-2">{answer}</p>
      </motion.div>
    </div>
  );
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    category: '비즈니스/부업 문의',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `[USANA 상담 신청]
성함: ${formData.name}
연락처: ${formData.phone}
거주 지역: ${formData.location}
관심 분야: ${formData.category}
문의 내용: ${formData.message}`;

    try {
      await navigator.clipboard.writeText(text);
      alert('상담 신청 내용이 복사되었습니다.\n오픈채팅방에서 붙여넣기(Ctrl+V) 해주세요.');
    } catch (err) {
      console.error('Clipboard copy failed:', err);
      alert('카카오톡 오픈채팅방으로 이동합니다.\n상담 내용을 입력해주세요.');
    }

    window.open(PERSONAL_INFO.KAKAO_OPENCHAT, '_blank');
    
    // Reset form after redirect
    setFormData({
      name: '',
      phone: '',
      location: '',
      category: '비즈니스/부업 문의',
      message: ''
    });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center bg-dark text-white">
        <div className="absolute inset-0 opacity-40">
          <img src={CONTACT_BG} alt="Contact" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-bold mb-4">새로운 기회의 문을 두드리세요</h1>
          <p className="text-xl text-gray-300">단순 제품 문의부터 사업 설명회 초대까지 편하게 문의주세요.</p>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info & FAQ */}
            <div>
              <SectionTitle title="무엇이든 물어보세요" align="left" />
              
              <div className="flex flex-col gap-4 mb-12">
                <a 
                  href={PERSONAL_INFO.KAKAO_OPENCHAT} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-yellow-100 p-3 rounded-full mr-4 text-yellow-700">
                    <MessageCircle />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">카카오톡 오픈채팅</div>
                    <div className="font-bold">실시간 상담하기</div>
                  </div>
                </a>
                <a href={`tel:${PERSONAL_INFO.PHONE.replace(/-/g, '')}`} className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                   <div className="bg-green-100 p-3 rounded-full mr-4 text-green-700">
                    <Phone />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">전화 문의</div>
                    <div className="font-bold">{PERSONAL_INFO.PHONE}</div>
                  </div>
                </a>
                <a href={`mailto:${PERSONAL_INFO.EMAIL}`} className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                   <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-700">
                    <Mail />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">이메일 문의</div>
                    <div className="font-bold">{PERSONAL_INFO.EMAIL}</div>
                  </div>
                </a>
                <a 
                  href={PERSONAL_INFO.LITTLY} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                   <div className="bg-purple-100 p-3 rounded-full mr-4 text-purple-700">
                    <Globe />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">개인 홈페이지</div>
                    <div className="font-bold">{PERSONAL_INFO.LITTLY.replace('https://', '')}</div>
                  </div>
                </a>
                <a 
                  href={PERSONAL_INFO.WEBSITE} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                   <div className="bg-indigo-100 p-3 rounded-full mr-4 text-indigo-700">
                    <Laptop />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">유사나 퍼스널 웹사이트</div>
                    <div className="font-bold">{PERSONAL_INFO.WEBSITE.replace('https://', '')}</div>
                  </div>
                </a>
              </div>

              <h3 className="text-xl font-bold mb-6 text-primary">자주 묻는 질문 (FAQ)</h3>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <FAQItem 
                  question="초기 비용이 많이 드나요?" 
                  answer="아니요. 유사나는 점포나 재고 비용이 들지 않습니다. 본인이 사용할 제품을 구매하는 것으로 사업 자격을 획득할 수 있는 합리적인 구조입니다." 
                />
                <FAQItem 
                  question="영업 경험이 전혀 없어도 되나요?" 
                  answer="네, 가능합니다. 저희 팀의 체계적인 교육 시스템과 멘토링을 통해 비즈니스 초보자도 전문가로 성장할 수 있도록 돕습니다." 
                />
                <FAQItem 
                  question="투잡으로도 가능한가요?" 
                  answer="물론입니다. 하루 1-2시간의 자투리 시간을 활용하여 시작하시는 분들이 많으며, 시스템이 구축되면 본업 이상의 소득도 가능합니다." 
                />
                 <FAQItem 
                  question="재고가 발생하지 않나요?" 
                  answer="아니요. 유사나는 수익구조상 재고가 발생하지 않습니다. 재고를 떠안고 판매하는 것이 아닌, 본인이나 가족이 사용할 제품 구매와 정보전달만으로도 충분합니다." 
                />               
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">상담 신청서</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">성함</label>
                  <input 
                    required 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" 
                    placeholder="홍길동" 
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                      <input 
                        required 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" 
                        placeholder="010-0000-0000" 
                      />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">거주 지역</label>
                      <input 
                        type="text" 
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" 
                        placeholder="서울 강남구" 
                      />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">관심 분야</label>
                  <select 
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  >
                    <option>비즈니스/부업 문의</option>
                    <option>제품 구매/섭취 문의</option>
                    <option>기타 문의</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">문의 내용</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" 
                    placeholder="궁금하신 내용을 자유롭게 적어주세요."
                  ></textarea>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg text-sm text-yellow-800 mb-4">
                  <p>※ <strong>상담 신청하기</strong>를 누르면 내용이 복사되고 <strong>카카오톡 오픈채팅</strong>으로 연결됩니다.</p>
                </div>

                <Button 
                  variant="primary" 
                  fullWidth 
                >
                  상담 신청하기
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;