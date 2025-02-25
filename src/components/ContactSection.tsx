'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWeixin } from 'react-icons/fa';

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟表单提交
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', company: '', contact: '', message: '' });
    
    // 重置成功状态
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <section id="contact" className="section bg-[var(--primary)]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {t('contact.title')}
          </h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 联系信息 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--accent)]">
                    {t('contact.address.china')}
                  </h3>
                  <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt className="text-[var(--accent)] mt-1" />
                    <p>江苏省无锡市惠山区晴山蓝城76号</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--accent)]">
                    {t('contact.address.germany')}
                  </h3>
                  <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt className="text-[var(--accent)] mt-1" />
                    <p>Gerhart-Hauptmann-Straße 4, Lüneburg, Germany</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <FaPhone className="text-[var(--accent)]" />
                    <div>
                      <p className="font-medium text-[var(--accent)]">{t('contact.phone')}</p>
                      <p>+49 15229059791 (手机)</p>
                      <p>+ 49 4131 6059284 (固话)</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 mb-4">
                    <FaEnvelope className="text-[var(--accent)]" />
                    <div>
                      <p className="font-medium text-[var(--accent)]">{t('contact.email')}</p>
                      <p>info@company-example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <FaWeixin className="text-[var(--accent)]" />
                    <div>
                      <p className="font-medium text-[var(--accent)]">{t('contact.wechat')}</p>
                      <p>Hansa-solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 联系表单 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-[var(--primary)]">
                {t('contact.form.title')}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.contact')}
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 bg-[var(--primary)] text-white rounded-md font-medium transition-all ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[var(--primary-dark)]'
                  }`}
                >
                  {isSubmitting ? '提交中...' : t('contact.form.submit')}
                </button>

                {submitSuccess && (
                  <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                    提交成功！我们将尽快与您联系。
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 