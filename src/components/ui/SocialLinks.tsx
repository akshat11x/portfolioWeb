import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { SocialLink } from '../../types';

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
  iconSize?: number;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  links, 
  className = '',
  iconSize = 20 
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github size={iconSize} />;
      case 'linkedin':
        return <Linkedin size={iconSize} />;
      case 'twitter':
        return <Twitter size={iconSize} />;
      case 'mail':
        return <Mail size={iconSize} />;
      default:
        return null;
    }
  };

  return (
    <div className={`flex space-x-4 ${className}`}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-500 transition-colors"
          aria-label={link.name}
        >
          {getIcon(link.icon)}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;