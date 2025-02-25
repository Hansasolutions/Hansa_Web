'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const TeamSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // 团队成员数据
  const teamMembers = [
    { 
      id: 1, 
      name: '肖凯', 
      title: 'CEO', 
      image: '/images/team/xiao-kai.jpg',
      description: '拥有十年欧洲市场经验，精通跨境商务与国际贸易，致力于为中国企业提供全方位的欧洲市场拓展服务。'
    },
    { 
      id: 2, 
      name: 'Anna', 
      title: '联合创始人', 
      image: '/images/team/anna.jpg',
      description: '欧洲本土专家，深谙欧洲商业环境与文化，专注于帮助中国企业实现本土化战略，建立可持续的欧洲业务。'
    }
  ];

  return (
    <section className="py-16 bg-[var(--background)] dark:bg-[var(--background)]">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] dark:text-white">
            {t('partners.title')}
          </h2>
          <div className="w-16 h-1 bg-[var(--secondary)] mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-64 h-64 mb-6 rounded-full overflow-hidden border-4 border-[var(--accent)]/20">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center 20%'
                  }}
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] dark:text-white">{member.name}</h3>
              <p className="text-[var(--accent)] font-medium mb-3">{member.title}</p>
              <p className="text-center text-[var(--foreground)]/80 dark:text-white/80 max-w-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 