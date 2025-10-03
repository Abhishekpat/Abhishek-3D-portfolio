import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Stepper, { Step } from "./Stepper";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!form.name.trim()) {
        newErrors.name = 'Name is required';
      } else if (form.name.trim().length < 2) {
        newErrors.name = 'Name must be at least 2 characters';
      }
    }

    if (step === 2) {
      if (!form.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        newErrors.email = 'Please enter a valid email address';
      }

      if (form.phone && !/^[0-9+\-\s()]+$/.test(form.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    if (step === 3) {
      if (!form.message.trim()) {
        newErrors.message = 'Message is required';
      } else if (form.message.trim().length < 10) {
        newErrors.message = 'Message must be at least 10 characters';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFinalSubmit = () => {
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Abhishek Patil",
          from_email: form.email,
          to_email: "abhi.patil19102233@gmail.com",
          phone: form.phone,
          message: form.message,
        }
      )
      .then(
        () => {
          setLoading(false);
          setShowSuccess(true);

          setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
          });

          setTimeout(() => {
            setShowSuccess(false);
          }, 5000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-6 sm:gap-8 md:gap-10 overflow-hidden px-4 sm:px-0`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100/20 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl w-full'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} break-words`}>Contact.</h3>

        <div className='mt-12'>
          <Stepper
            initialStep={1}
            onStepChange={(step) => {
              console.log('Current step:', step);
            }}
            onFinalStepCompleted={handleFinalSubmit}
            backButtonText="Previous"
            nextButtonText="Next"
            onBeforeNext={(currentStep) => validateStep(currentStep)}
          >
            <Step>
              <div className='flex flex-col'>
                <h3 className='text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6'>Personal Information</h3>
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base'>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#915eff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Your Name
                  </span>
                  <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    className={`bg-tertiary/50 backdrop-blur-sm py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white text-sm sm:text-base rounded-xl outline-none border font-medium transition-all duration-300 focus:shadow-[0_0_20px_rgba(145,94,255,0.3)] ${
                      errors.name
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#915eff]/20 focus:border-[#915eff]'
                    }`}
                  />
                  {errors.name && (
                    <span className='text-red-500 text-xs sm:text-sm mt-2'>{errors.name}</span>
                  )}
                </label>
              </div>
            </Step>

            <Step>
              <div className='flex flex-col gap-4 sm:gap-6'>
                <h3 className='text-white text-lg sm:text-xl font-semibold mb-1 sm:mb-2'>Contact Details</h3>
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base'>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#915eff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Your Email
                  </span>
                  <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    className={`bg-tertiary/50 backdrop-blur-sm py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white text-sm sm:text-base rounded-xl outline-none border font-medium transition-all duration-300 focus:shadow-[0_0_20px_rgba(145,94,255,0.3)] ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#915eff]/20 focus:border-[#915eff]'
                    }`}
                  />
                  {errors.email && (
                    <span className='text-red-500 text-xs sm:text-sm mt-2'>{errors.email}</span>
                  )}
                </label>
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base'>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#915eff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Your Phone <span className="text-secondary text-xs sm:text-sm">(Optional)</span>
                  </span>
                  <input
                    type='tel'
                    name='phone'
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Your phone number?"
                    className={`bg-tertiary/50 backdrop-blur-sm py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white text-sm sm:text-base rounded-xl outline-none border font-medium transition-all duration-300 focus:shadow-[0_0_20px_rgba(145,94,255,0.3)] ${
                      errors.phone
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#915eff]/20 focus:border-[#915eff]'
                    }`}
                  />
                  {errors.phone && (
                    <span className='text-red-500 text-xs sm:text-sm mt-2'>{errors.phone}</span>
                  )}
                </label>
              </div>
            </Step>

            <Step>
              <div className='flex flex-col'>
                <h3 className='text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6'>Your Message</h3>
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base'>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#915eff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    Message
                  </span>
                  <textarea
                    rows={6}
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder='What do you want to say?'
                    className={`bg-tertiary/50 backdrop-blur-sm py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white text-sm sm:text-base rounded-xl outline-none border font-medium transition-all duration-300 focus:shadow-[0_0_20px_rgba(145,94,255,0.3)] resize-none ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#915eff]/20 focus:border-[#915eff]'
                    }`}
                  />
                  {errors.message && (
                    <span className='text-red-500 text-xs sm:text-sm mt-2'>{errors.message}</span>
                  )}
                </label>
              </div>
            </Step>
          </Stepper>

          {loading && (
            <div className='mt-4 text-center'>
              <p className='text-white'>Sending...</p>
            </div>
          )}

          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='mt-6 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-2xl backdrop-blur-sm'
            >
              <div className='flex items-start gap-4'>
                <div className='flex-shrink-0'>
                  <svg className='w-6 h-6 text-green-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </div>
                <div className='flex-1'>
                  <h4 className='text-white font-semibold text-lg mb-1'>Message Sent Successfully!</h4>
                  <p className='text-gray-300 text-sm'>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[500px] sm:h-[400px] h-[300px] w-full'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
