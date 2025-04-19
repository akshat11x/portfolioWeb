import React from 'react';
import SocialLinks from '../ui/SocialLinks';
import { SOCIAL_LINKS, NAV_ITEMS } from '../../utils/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">Portfolio</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              A passionate developer focused on creating beautiful, functional, and user-friendly applications.
            </p>
            <SocialLinks links={SOCIAL_LINKS} />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Contact</h3>
            <address className="not-italic text-slate-600 dark:text-slate-400">
              <p className="mb-2">Email: akshatjain2k3@gmail.com</p>
              <p className="mb-2">Location: DELHI, INDIA</p>
              <p>Available for remote work worldwide</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8 text-center text-slate-600 dark:text-slate-400">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;