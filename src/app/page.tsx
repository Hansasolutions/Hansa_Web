'use client';

import { useEffect } from 'react';
import I18nProvider from '@/components/I18nProvider';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/PartnersSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  // 创建图片文件夹
  useEffect(() => {
    // 这里只是为了在客户端渲染时执行
    // 实际项目中，应该在public/images中放置真实的图片
    
    // 确保背景色应用到整个页面
    document.documentElement.style.backgroundColor = 'var(--background)';
    document.body.style.backgroundColor = 'var(--background)';
  }, []);

  return (
    <I18nProvider>
      <main className="min-h-screen bg-[var(--background)]">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <ContactSection />
        <Footer />
      </main>
    </I18nProvider>
  );
}
