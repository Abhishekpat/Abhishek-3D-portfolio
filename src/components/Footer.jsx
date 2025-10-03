import React from 'react';
import { motion } from 'framer-motion';
import GooeyNav from './GooeyNav';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abhishek-patil-175a49243/" },
    { label: "GitHub", href: "https://github.com/Abhishekpat"  },
    { label: "LeetCode", href: "https://leetcode.com/u/AbhishekPatil19/" },
    { label: "Instagram", href: "https://www.instagram.com/abhishek_patil1910/"} 
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <motion.div
          className="footer-top"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-brand">
            <h2 className="footer-title">Let's Connect</h2>
            <p className="footer-subtitle">Find me on these platforms</p>
          </div>

          <div className="footer-nav-wrapper">
            <GooeyNav
              items={socialLinks}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={-1}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>
        </motion.div>

        <motion.div
          className="footer-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.div
          className="footer-contact-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="contact-info">
              <h4 className="contact-label">WhatsApp</h4>
              <a href="https://wa.me/919321997116" target="_blank" rel="noopener noreferrer" className="contact-value">
                +91 9321997116
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="contact-info">
              <h4 className="contact-label">Email</h4>
              <a href="mailto:abhi.patil19102233@gmail.com" className="contact-value">
                abhi.patil19102233@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="contact-info">
              <h4 className="contact-label">Address</h4>
              <p className="contact-value">
                A4/404 RNA Park Vashi Naka<br />
                Chembur, Mumbai<br />
                Maharashtra 400074
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="copyright">
            &copy; {new Date().getFullYear()} Abhishek Patil. All rights reserved.
          </p>
          <p className="made-with">
            Crafted with passion and creativity
          </p>
        </motion.div>
      </div>

      <div className="footer-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>
    </footer>
  );
};

export default Footer;

