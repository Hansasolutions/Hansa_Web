'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  
  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = currentLang === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all"
      aria-label="切换语言 / Switch Language"
    >
      <FaGlobe className="text-sm" />
      <span>{currentLang === 'zh' ? '中文 / EN' : 'EN / 中文'}</span>
    </button>
  );
};

export default LanguageSwitcher; 