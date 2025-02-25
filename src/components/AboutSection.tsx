'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCheckCircle, FaGlobeEurope, FaHandshake, FaUserFriends } from 'react-icons/fa';

const AboutSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // 将标题分割为两部分，以便单独设置样式
  const titleParts = t('about.title').split('——');
  const titleFirst = titleParts[0] || '';
  const titleSecond = titleParts[1] || '';

  return (
    <section 
      className="section bg-white dark:bg-[var(--gray-light)] relative py-20"
      style={{
        backgroundImage: 'url("/images/background/1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(255, 255, 255, 0.95)'
      }}
    >
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16 whitespace-nowrap overflow-hidden"
          >
            <h2 className="inline-flex items-center justify-center flex-wrap text-2xl md:text-4xl font-bold text-[var(--primary)] dark:text-white">
              <span className="font-extrabold text-[var(--accent)]">{titleFirst}</span>
              <span className="mx-2 text-xl md:text-2xl">—</span>
              <span>{titleSecond}</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div variants={itemVariants}>
              <div className="space-y-8 text-[var(--foreground)] dark:text-white/90">
                <p className="text-lg leading-relaxed">{t('about.description1')}</p>
                
                <div className="bg-white/70 dark:bg-[var(--gray-dark)]/70 rounded-lg p-6 shadow-md border-l-4 border-[var(--accent)]">
                  <h3 className="text-xl font-bold mb-4 text-[var(--primary)] flex items-center">
                    <FaGlobeEurope className="mr-2 text-[var(--accent)]" />
                    核心优势
                  </h3>
                  <div className="space-y-3">
                    {t('about.description2').split('\n').filter(line => line.includes('✓')).map((line, index) => (
                      <div key={index} className="flex items-start">
                        <FaCheckCircle className="text-[var(--accent)] mt-1 mr-3 flex-shrink-0" />
                        <p>{line.replace('✓ ', '')}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-[var(--accent)]/10 dark:bg-[var(--accent)]/20 rounded-lg p-6 border-l-4 border-[var(--accent)]">
                  <h3 className="text-xl font-bold mb-4 text-[var(--primary)] flex items-center">
                    <FaUserFriends className="mr-2 text-[var(--accent)]" />
                    联合创始人理念
                  </h3>
                  <p className="text-lg leading-relaxed">{t('about.coreValue')}</p>
                </div>
                
                <div className="bg-[var(--primary)]/10 dark:bg-[var(--primary)]/20 rounded-lg p-6 border-l-4 border-[var(--primary)]">
                  <h3 className="text-xl font-bold mb-4 text-[var(--primary)] flex items-center">
                    <FaHandshake className="mr-2 text-[var(--primary)]" />
                    服务理念
                  </h3>
                  <p className="text-lg italic">{t('about.description3')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 