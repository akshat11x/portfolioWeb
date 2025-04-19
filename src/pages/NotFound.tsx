import React from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-950">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400">404</h1>
            <div className="h-1 w-20 bg-primary-600 mx-auto mb-6"></div>
          </div>
          
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Oops! The page you are looking for doesn't exist or has been moved.
          </p>
          
          <Button href="/" variant="primary" icon={<Home size={20} />}>
            Back to Home
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;