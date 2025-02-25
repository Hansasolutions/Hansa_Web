'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaFacebook, FaWeixin } from 'react-icons/fa';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const currentLang = i18n.language;
  const companyName = currentLang === 'zh' ? '汉萨智联' : 'HANSEATIC SOLUTIONS';

  return (
    <footer className="bg-[var(--primary-dark)] text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image 
                src="/images/logo.png" 
                alt={`${companyName} Logo`} 
                width={40} 
                height={40} 
                className="mr-3"
              />
              <span className="text-xl font-bold">{companyName}</span>
            </Link>
            <p className="text-white/80 mb-6 max-w-md">
              {currentLang === 'zh' 
                ? '我们提供中国企业进军欧洲市场的一站式本地化服务，从市场咨询到落地执行，助力企业无缝融入欧洲市场。'
                : 'We offer end-to-end localization services for Chinese companies expanding into the European market, ensuring seamless market entry and growth.'}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="WeChat"
              >
                <FaWeixin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">联系我们</h3>
            <ul className="space-y-2">
              <li className="text-white/80">
                <span className="block">德国办公室</span>
                <span className="block">+ 49 4131 6059284</span>
              </li>
              <li className="text-white/80">info@company-example.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            {t('footer.copyright').replace('2024', currentYear.toString()).replace('公司名称', companyName).replace('Company Name', companyName)}
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-white/70 hover:text-white text-sm transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link href="#" className="text-white/70 hover:text-white text-sm transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 