'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { FaWeixin, FaGlobeAsia, FaLink, FaUsers, FaHistory, FaHandshake, FaLandmark } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const [showQRCode, setShowQRCode] = useState(false);
  const currentLang = i18n.language;
  const companyName = currentLang === 'zh' ? '汉萨智联' : 'HANSEATIC SOLUTIONS';

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-[#3B4A63]"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url("/images/background/background.jpeg")' }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#2A3749] to-[#3B4A63] opacity-60"></div>
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="flex items-center mb-6">
              <Image 
                src="/images/logo.png" 
                alt={`${companyName} Logo`} 
                width={60} 
                height={60} 
                className="mr-4"
              />
              <h1 className="text-3xl md:text-4xl font-bold text-white">{companyName}</h1>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              {t('hero.slogan')}
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-xl">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white"
              >
                {t('hero.cta.consult')}
              </a>
              <button
                onClick={() => setShowQRCode(!showQRCode)}
                className="btn bg-transparent border border-white text-white hover:bg-white/10 flex items-center gap-2"
              >
                <FaWeixin />
                {t('hero.cta.wechat')}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="bg-gray-200 p-10 rounded-lg border border-gray-300 shadow-xl">
              <div className="w-full flex flex-col items-center justify-center">
                <div className="grid grid-cols-3 gap-5 w-full">
                  <div className="flex flex-col items-center p-5 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors">
                    <FaGlobeAsia className="text-5xl text-[var(--primary)] mb-4" />
                    <span className="text-gray-900 font-semibold text-center text-base">全球视野</span>
                  </div>
                  <div className="flex flex-col items-center p-5 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors">
                    <FaLandmark className="text-5xl text-[var(--primary)] mb-4" />
                    <span className="text-gray-900 font-semibold text-center text-base">欧洲专家</span>
                  </div>
                  <div className="flex flex-col items-center p-5 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors">
                    <FaLink className="text-5xl text-[var(--primary)] mb-4" />
                    <span className="text-gray-900 font-semibold text-center text-base">全链条服务体系</span>
                  </div>
                  <div className="flex flex-col items-center p-5 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors">
                    <FaUsers className="text-5xl text-[var(--primary)] mb-4" />
                    <span className="text-gray-900 font-semibold text-center text-base">资深本土化团队</span>
                  </div>
                  <div className="flex flex-col items-center p-5 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors">
                    <FaHistory className="text-5xl text-[var(--primary)] mb-4" />
                    <span className="text-gray-900 font-semibold text-center text-base">十年资源积累</span>
                  </div>
                  <div className="flex flex-col items-center p-5 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors">
                    <FaHandshake className="text-5xl text-[var(--primary)] mb-4" />
                    <span className="text-gray-900 font-semibold text-center text-base">定制化合作共赢</span>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-[var(--primary)] font-bold text-2xl italic">
                    &ldquo;您的欧洲首站，从这里开始&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 微信二维码弹窗 */}
      {showQRCode && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowQRCode(false)}
        >
          <div 
            className="bg-white rounded-lg p-6 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-[var(--primary)]">{t('contact.wechat')}</h3>
              <button
                onClick={() => setShowQRCode(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaWeixin className="text-2xl" />
              </button>
            </div>
            <div className="flex justify-center">
              <Image 
                src="/images/Wechat_code.jpg" 
                alt="WeChat QR Code" 
                width={200} 
                height={200} 
                className="rounded-md"
                priority
                unoptimized
              />
            </div>
            <p className="text-center mt-4 text-gray-600">扫描二维码联系我们</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection; 