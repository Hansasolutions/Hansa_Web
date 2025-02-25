'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const currentLang = i18n.language;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#f0f0f0] shadow-md py-2'
          : 'bg-[#f0f0f0] py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.png" 
            alt="汉萨智联 Logo" 
            width={50} 
            height={50} 
            className="mr-3"
          />
          <div>
            <span className="text-xl font-bold text-[var(--primary)] block">
              {currentLang === 'zh' ? '汉萨智联' : 'HANSEATIC SOLUTIONS'}
            </span>
            {currentLang === 'zh' && (
              <span className="text-xs text-[var(--primary)]/80 block">
                HANSEATIC SOLUTIONS
              </span>
            )}
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#home"
            className="text-gray-700 hover:text-[var(--primary)] transition-colors"
          >
            {t('nav.home')}
          </Link>
          <Link
            href="#services"
            className="text-gray-700 hover:text-[var(--primary)] transition-colors"
          >
            {t('nav.services')}
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 hover:text-[var(--primary)] transition-colors"
          >
            {t('nav.contact')}
          </Link>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label={isOpen ? '关闭菜单' : '打开菜单'}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#f0f0f0] shadow-lg"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              <Link
                href="#home"
                className="text-gray-700 py-2 border-b border-gray-200"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link
                href="#services"
                className="text-gray-700 py-2 border-b border-gray-200"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.services')}
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 py-2 border-b border-gray-200"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <div className="py-2">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 