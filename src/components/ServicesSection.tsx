'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaSearchDollar, 
  FaBalanceScale, 
  FaBullhorn, 
  FaHandshake, 
  FaUsersCog,
  FaWarehouse
} from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="card hover:translate-y-[-5px]"
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl text-[var(--primary)] mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-[var(--primary)] dark:text-white">{title}</h3>
        <p className="text-[var(--foreground)]/80 dark:text-white/80">{description}</p>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const services = [
    {
      icon: <FaSearchDollar />,
      titleKey: 'services.market_research.title',
      descriptionKey: 'services.market_research.description',
      delay: 0.1,
    },
    {
      icon: <FaBalanceScale />,
      titleKey: 'services.legal.title',
      descriptionKey: 'services.legal.description',
      delay: 0.2,
    },
    {
      icon: <FaBullhorn />,
      titleKey: 'services.marketing.title',
      descriptionKey: 'services.marketing.description',
      delay: 0.3,
    },
    {
      icon: <FaHandshake />,
      titleKey: 'services.business.title',
      descriptionKey: 'services.business.description',
      delay: 0.4,
    },
    {
      icon: <FaWarehouse />,
      titleKey: 'services.logistics.title',
      descriptionKey: 'services.logistics.description',
      delay: 0.5,
    },
    {
      icon: <FaUsersCog />,
      titleKey: 'services.operations.title',
      descriptionKey: 'services.operations.description',
      delay: 0.6,
    },
  ];

  return (
    <section id="services" className="section bg-[var(--background)] dark:bg-[var(--background)]">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--primary)] dark:text-white">
            {t('services.title')}
          </h2>
          <div className="w-20 h-1 bg-[var(--secondary)] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={t(service.titleKey)}
              description={t(service.descriptionKey)}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 