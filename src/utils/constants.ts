import { Project, Skill, SocialLink, NavItem } from '../types';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  Code, 
  Server, 
  Palette, 
  Wrench
} from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Food Delivery Website',
    description: 'A full-featured food delivery website with product listing, cart functionality, user authentication, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    imageUrl: 'https://blog.ipleaders.in/wp-content/uploads/2019/11/foodmitho.jpg',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    category: 'web',
  },
  {
    id: 2,
    title: 'Password Generator App',
    description: 'A simple powerful password generator web app that allows users to create strong and customizable passwords.',
    technologies: ['HTML', 'CSS', 'JS'],
    imageUrl: 'https://camo.githubusercontent.com/fb3697588afd8a0089f496768316da8d29ab1eecea920e41bde36d63ff870785/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d3151435964475f58723363684e65444865704d374265335a7646676a4470647836',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    category: 'web',
  },
  {
    id: 3,
    title: 'Weather Forecast App',
    description: 'A weather application that provides real-time forcast for various weather factors based on given location.',
    technologies: ['HTML', 'OpenWeather API','CSS','JS'],
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/akshat11x/Projects/tree/main/weather%20app',
    featured: false,
    category: 'web',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A professionally designed portfolio website showcasing projects, skills, and experience with a modern UI/UX design.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: 'https://mir-s3-cdn-cf.behance.net/projects/404/bf1e68214791583.Y3JvcCwzMDY4LDI0MDAsNjgsMA.jpg',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
    category: 'web',
  },
  {
    id: 5,
    title: 'Netflix Stock Price Prediction System',
    description: 'AI model that can forecast the approximate price of the shares of a company using the historical data.',
    technologies: ['Numpy', 'Pandas', 'RNN','Tensorflow'],
    imageUrl: 'https://m.economictimes.com/thumb/msid-120069718,width-1200,height-900,resizemode-4,imgsize-141979/ahead-of-market-10-things-that-will-decide-stock-market-action-on-tuesday.jpg',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/akshat11x/Projects/tree/main/netflix%20stock%20price%20prediction',
    featured: false,
    category: 'other',
  },
  {
    id: 6,
    title: 'Lumpy Skin disease predictor',
    description: 'An AI model that can predict lumpy skin disease inn dairy cows in order to prevent economic losses in farming sector.',
    technologies: ['Numpy', 'Pandas', 'CNN','Matplotlib'],
    imageUrl: 'https://cdn.britannica.com/53/157153-050-E5582B5A/Holstein-cow.jpg',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
    category: 'other',
  },
];

export const SKILLS: Skill[] = [
  { name: 'HTML/CSS', icon: 'code', category: 'frontend', level: 5 },
  { name: 'JavaScript', icon: 'code', category: 'frontend', level: 5 },
  { name: 'TypeScript', icon: 'code', category: 'frontend', level: 4 },
  { name: 'React', icon: 'code', category: 'frontend', level: 5 },
  { name: 'Next.js', icon: 'code', category: 'frontend', level: 4 },
  { name: 'Tailwind CSS', icon: 'code', category: 'frontend', level: 5 },
  
  { name: 'Node.js', icon: 'server', category: 'backend', level: 4 },
  { name: 'Express', icon: 'server', category: 'backend', level: 4 },
  { name: 'MongoDB', icon: 'server', category: 'backend', level: 4 },
  { name: 'PostgreSQL', icon: 'server', category: 'backend', level: 3 },
  { name: 'Firebase', icon: 'server', category: 'backend', level: 4 },
  { name: 'REST API', icon: 'server', category: 'backend', level: 5 },
  
  { name: 'Figma', icon: 'palette', category: 'design', level: 4 },
  { name: 'Adobe XD', icon: 'palette', category: 'design', level: 3 },
  { name: 'UI/UX', icon: 'palette', category: 'design', level: 4 },
  { name: 'Responsive Design', icon: 'palette', category: 'design', level: 5 },
  
  { name: 'Git', icon: 'wrench', category: 'tools', level: 5 },
  { name: 'Webpack', icon: 'wrench', category: 'tools', level: 3 },
  { name: 'Jest', icon: 'wrench', category: 'tools', level: 4 },
  { name: 'CI/CD', icon: 'wrench', category: 'tools', level: 3 },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/akshat11x', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/akshat-jain-5917a9256/', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { name: 'Email', url: 'mailto:akshatjain2k3@gmail.com', icon: 'mail' }
];