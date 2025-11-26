import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Mail, Globe, Youtube } from 'lucide-react';
import { PERSONAL_INFO } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">USANA</h3>
            <p className="text-gray-400 mb-4">
              세상에서 가장 건강한 가족,<br />
              유사나 헬스사이언스와 함께<br />
              진정한 건강과 부를 누리세요.
            </p>
            <div className="flex space-x-4">
              <a 
                href={PERSONAL_INFO.INSTAGRAM} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href={PERSONAL_INFO.YOUTUBE} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors"
              >
                <Youtube size={24} />
              </a>
              <a 
                href={PERSONAL_INFO.KAKAO_OPENCHAT} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors"
              >
                <MessageCircle size={24} />
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.EMAIL}`} 
                className="text-gray-400 hover:text-secondary transition-colors"
              >
                <Mail size={24} />
              </a>
              <a 
                href={PERSONAL_INFO.LITTLY} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors"
              >
                <Globe size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">바로가기</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">홈</Link></li>
              <li><Link to="/business" className="text-gray-400 hover:text-white">비즈니스 가이드</Link></li>
              <li><Link to="/product" className="text-gray-400 hover:text-white">제품 소개</Link></li>
              <li><Link to="/mentor" className="text-gray-400 hover:text-white">멘토 소개</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">문의하기</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">법적 고지</h4>
            <p className="text-gray-400 text-sm mb-2">
              본 웹사이트는 유사나 헬스사이언스의 독립 디스트리뷰터가 운영하는 개인 사이트입니다.
            </p>
            <p className="text-gray-400 text-sm">
              유사나 본사의 공식 의견과 다를 수 있으며, 제품은 질병의 예방 및 치료를 위한 의약품이 아닙니다.
            </p>
          </div>
        </div>
        
        <div className="pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.TITLE}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;