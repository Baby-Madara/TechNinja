
import { Project, Skill, Education, Experience, ContactInfo } from './types';

// Image Imports (Placeholders/Commented paths as requested)
import calculatorImg from './images/calculator.png';
import pianoImg from './images/piano.png';
import printerImg from './images/3d_printer.jpg';
import smartHomeImg from './images/smart-home.jpg';
import quadrupedImg from './images/quadruped-robot.png';
import prostheticImg from './images/prosthetic.jpg';


import cppImg from './images/c++.png';
import pythonImg from './images/python.png';
import rosImg from './images/ros.webp';
import frontendImg from './images/frontend.png';
import matlabImg from './images/matlab.png';
import solidworksImg from './images/solidworks.png';
import fusionImg from './images/fusion.png';
import esp32Img from './images/esp32.png';

// Document Imports
import cvPdf from './documents/Ahmed-Farahat-CV-2026.pdf';
import amitCert from './documents/Ahmed-Farahat-Certificates-AMIT-Embedded-Systems-Diploma.pdf';
// import catalystCert from './documents/Catalyst-Finalist-Cert.pdf';
import catalystCert from './documents/Ahmed-Farahat-Certificates-Innovation-Catalyst.pdf';
import graduationCert from './documents/Graduation-Certificate-Ceremony.pdf';
import ariaCert from './documents/aria.pdf';
import elmarakbyCert from './documents/elmarakby.pdf';


// Fallback image urls
// const PLACEHOLDER_IMG = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop";

export const PROJECTS: Project[] = [
  {
    id: 'quadruped',
    name: '12 DoF Quadruped Robot',
    description: 'Autonomous Quadruped Robot optimized with motion analysis and topology optimization. Developed using ROS2 & MATLAB, simulated on PyBullet, and implemented on ESP32 with OTA firmware updates.',
    image: quadrupedImg,
    link: '',
    tags: ['ROS2', 'MATLAB', 'ESP32', 'SolidWorks']
  },
  {
    id: 'calculator',
    name: 'Scientific Calculator',
    description: 'A fully functional scientific calculator modelled as a one-page website. Built with vanilla JavaScript and hosted on GitHub Pages.',
    image: calculatorImg,
    link: 'https://baby-madara.github.io/Calculator-JS/',
    tags: ['JavaScript']
  },
  {
    id: 'smarthome',
    name: 'Smart Home System',
    description: 'Based on ATmega32, controls lights, fans, and AC over Bluetooth with multi-user access levels. Features multi-layered security and real-time monitoring.',
    image: smartHomeImg,
    link: 'https://github.com/Baby-Madara/AMIT_Embedded_Systems_FinalProject',
    tags: ['Embedded C', 'AVR', 'Bluetooth']
  },
  {
    id: 'prosthetic',
    name: 'EMG-based Prosthetic Arm',
    description: 'Finalist at Innovation Catalyst 2022. Features automatic/manual modes, custom mechanical design, and PCB fabrication with force feedback.',
    image: prostheticImg,
    link: '',
    tags: ['Biomedical', 'PCB Design', 'SolidWorks']
  },

  {
    id: 'piano',
    name: 'Recording Piano using Arduino',
    description: 'A piano made by Arduino that can be used to play tones and record them. Simulation available on TinkerCAD.',
    image: pianoImg,
    link: 'https://www.tinkercad.com/things/e7aTJ7GvGUO',
    tags: ['Arduino', 'C++', 'TinkerCAD']
  },
  {
    id: 'printer',
    name: 'Homemade 3D Printer',
    description: 'A modular, cost-efficient 3D printer designed for rapid prototyping and educational purposes.',
    image: printerImg,
    link: '',
    tags: ['Mechanical', 'CNC', 'Prototyping']
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'Mechatronics Engineer Intern',
    company: 'GAT Solutions',
    period: 'Jan 2026 - Now',
    type: 'Internship',
    description: [
      'Developing software applications to support mechanical engineering workflows.',
      'Integrating automated design scripts to streamline CAD processes.',
    ],
    certificate: ''
  },
  {
    role: 'Part-Time Robotics Instructor',
    company: 'Little Engineer Academy',
    period: 'Oct 2025 - Now',
    type: 'Job',
    description: [
      'Teaching robotics concepts to students aged 8-20 years through hands-on learning based on Arduino.',
    ],
    certificate: ''
  },
  {
    role: 'Full-Stack Robotics Engineer',
    company: 'FiveM Group',
    period: 'February 2025 - June 2025',
    type: 'Job',
    description: [
      'Mechanical and control design of a custom delta robot (project-based contract).',
    ],
    certificate: ''
  },
  {
    role: 'Mechanical & Automations Intern',
    company: 'ARIA Technologies - Summer Program',
    period: 'Jul 2024 - Sep 2024',
    type: 'Internship',
    description: [
      'Contributed to the development of ARIA P60 Robot Arm.',
    ],
    certificate: ariaCert
  },
  {
    role: 'Hydraulics & Heavy Equipment Intern',
    company: 'Elmarakby Steel - Summer Program',
    period: 'Aug 2022',
    type: 'Internship',
    description: [
      'Gained theoretical knowledge about hydraulic systems and heavy machinery.',
    ],
    certificate: elmarakbyCert
  },
  {
    role: 'Smart Home Graduation Project (95%)',
    company: 'AMIT Learning - Embedded Systems',
    period: 'Jul 2022 - Nov 2022',
    type: 'Project',
    description: [
      'Interfacing mainly based on AVR microcontrollers with introduction to ARM architecture.',
      'Developed a smart home hub with Bluetooth and security features.',
    ],
    certificate: amitCert
  },
  {
    role: 'Innovation Catalyst Finalist',
    company: 'Competition (Prosthetic Arm)',
    period: '2022',
    type: 'Competition',
    description: [
      'Qualified as national finalist with an EMG-based prosthetic arm.',
    ],
    certificate: catalystCert
  },
  {
    role: 'Engine Mechanics Trainee',
    company: 'Arab Contractors',
    period: 'Sep 2021',
    type: 'Activity',
    description: [
      'Practical Training in Engine Mechanics.',
    ],
    certificate: ''
  }
];

export const SKILLS: Skill[] = [
  { name: 'C++ / C', category: 'Programming', icon: 'Code', image: cppImg },
  { name: 'Python', category: 'Programming', icon: 'Code', image: pythonImg },
  { name: 'JavaScript / React', category: 'Web', icon: 'Globe', image: frontendImg },
  { name: 'ROS & ROS2', category: 'Robotics', icon: 'Cpu', image: rosImg },
  { name: 'MATLAB / Simulink', category: 'Control', icon: 'Activity', image: matlabImg },
  { name: 'SolidWorks', category: 'CAD', icon: 'Layers', image: solidworksImg },
  { name: 'Fusion 360', category: 'CAD', icon: 'Box', image: fusionImg },
  { name: 'ESP32 / AVR', category: 'Embedded', icon: 'Zap', image: esp32Img },
];

export const EDUCATION: Education[] = [
  {
    degree: 'B.Sc. Mechatronics Systems Engineering',
    school: 'MSA University',
    period: 'Oct 2019 - Jun 2024',
    details: 'GPA: 3.77 (Ranked 5th). Graduation Project Grade: Excellent.',
    certificate: graduationCert
  },
  {
    degree: 'Embedded Systems Diploma',
    school: 'AMIT Learning',
    period: 'Jul 2022 - Nov 2022',
    details: 'Intensive training on AVR microcontrollers and Embedded C.',
    certificate: amitCert
  },
  {
    degree: 'STEM Education',
    school: 'STEM October High School',
    period: 'Sep 2016 - Jul 2018',
    details: '',
    certificate: '' // No certificate preview as requested
  }
];

export const CONTACT: ContactInfo = {
  email: 'ahmedfarahat1177@gmail.com',
  linkedin: 'www.linkedin.com/in/ahmed-farahat-87038320b/',
  github: 'github.com/Baby-Madara',
  location: 'Cairo, Egypt',
  cv: cvPdf
};

export const SOCIAL_LINKS = [
  { name: 'Gmail', href: 'mailto:ahmedfarahat1177@gmail.com', icon: 'Mail' },
  { name: 'WhatsApp', href: 'https://wa.link/wm2plp', icon: 'Phone' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmed-farahat-87038320b/', icon: 'Linkedin' },
  { name: 'GitHub', href: 'https://github.com/Baby-Madara', icon: 'Github' },
];
