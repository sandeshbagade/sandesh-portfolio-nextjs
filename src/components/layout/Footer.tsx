"use client";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  // Handle biodata download
  const handleBiodataDownload = () => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        if ((window as any).generateBiodataPDF) {
          (window as any).generateBiodataPDF();
        } else {
          console.error("Biodata PDF generator not available");
          alert(
            "PDF generator is loading. Please wait a moment and try again.",
          );
        }
      }, 100);
    }
  };

  return (
    <footer className='bg-gray-50 dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {/* Name and brief description */}
          <div>
            <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>
              <span className='text-blue-600'>S</span>andesh Bagade
            </h3>
            <p className='text-gray-600 dark:text-gray-400 mb-4 max-w-md'>
              Freelance Full Stack Web Developer | Pickleball Enthusiast | Flute
              Player | Photography Lover
            </p>
            <button
              onClick={handleBiodataDownload}
              className='flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors'
              aria-label='Download Biodata'
            >
              <HiDownload className='h-4 w-4' />
              {t.biodata.downloadButton}
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#home'
                  className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors cursor-pointer'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors cursor-pointer'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#education'
                  className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors cursor-pointer'
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href='#experience'
                  className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors cursor-pointer'
                >
                  Work Experience
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors cursor-pointer'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
              Contact
            </h3>
            <div className='space-y-3'>
              <p className='text-gray-600 dark:text-gray-400 flex items-center'>
                <FaEnvelope className='mr-2 text-blue-600' />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className='hover:text-blue-600 dark:hover:text-blue-500 transition-colors'
                >
                  {personalInfo.email}
                </a>
              </p>
              <p className='text-gray-600 dark:text-gray-400'>
                {personalInfo.location}
              </p>

              {/* Social Links */}
              <div className='flex space-x-4 mt-4'>
                <a
                  href={personalInfo.links.instagram}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-500 transition-colors'
                  aria-label='Instagram'
                >
                  <FaInstagram className='h-5 w-5' />
                </a>
                <a
                  href={personalInfo.links.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors'
                  aria-label='Github'
                >
                  <FaGithub className='h-5 w-5' />
                </a>
                <a
                  href={personalInfo.links.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors'
                  aria-label='LinkedIn'
                >
                  <FaLinkedin className='h-5 w-5' />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center'>
          <p className='text-gray-600 dark:text-gray-400 text-sm'>
            © {currentYear} Sandesh Bagade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
