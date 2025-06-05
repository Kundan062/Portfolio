import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { socialLinks } from '../data';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  // Create a mapping of icon names to their components
  const LucideIcons: { [key: string]: React.ComponentType<any> } = {
    Github,
    Linkedin,
    Mail
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have a question or want to work together? Feel free to reach out!"
          center
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-dark-200 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center mr-4 mt-1">
                    <Mail size={18} className="text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm mb-1">Email</h4>
                    <a href="mailto:kundankumargupta800@gmail.com" className="text-white hover:text-neon-blue transition-colors">
                      kundankumargupta800@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-neon-pink/20 flex items-center justify-center mr-4 mt-1">
                    <MapPin size={18} className="text-neon-pink" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm mb-1">Location</h4>
                    <p className="text-white">
                      Bhopal, Madhya Pradesh, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-neon-green/20 flex items-center justify-center mr-4 mt-1">
                    <Phone size={18} className="text-neon-green" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm mb-1">Phone</h4>
                    <p className="text-white">
                      Available upon request
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-gray-400 text-sm mb-3">Connect on Social Media</h4>
                <div className="flex gap-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon ? LucideIcons[link.icon] : null;
                    return (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-dark-300 text-gray-400 hover:text-neon-blue p-3 rounded-full transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={link.name}
                      >
                        {Icon && <Icon size={20} />}
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-dark-200 p-6 rounded-lg border border-gray-800 h-full">
              <h3 className="text-xl font-bold mb-6 text-white">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-sm mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-300 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-neon-blue transition-colors"
                    placeholder="Your Respective Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-400 text-sm mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-300 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-neon-blue transition-colors"
                    placeholder="Name@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-400 text-sm mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-dark-300 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-neon-blue transition-colors"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`cyberpunk-btn w-full flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                          <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} className="ml-2" />
                      </>
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <p className="mt-2 text-sm text-neon-green">
                      Your message has been sent successfully!
                    </p>
                  )}
                  
                  {submitStatus === 'error' && (
                    <p className="mt-2 text-sm text-red-500">
                      There was an error sending your message. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;