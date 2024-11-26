import { FaGithub, FaLinkedin, FaBriefcase } from 'react-icons/fa'
import { FaSheetPlastic, FaWhatsapp } from "react-icons/fa6"

export const links = [
    { name: 'Whatsapp', url: 'https://api.whatsapp.com/send/?phone=3489594918&text&type=phone_number&app_absent=0', icon: FaWhatsapp },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gullo-jose-leandro/', icon: FaLinkedin },
    { name: 'GitHub', url: 'https://github.com/gullojoseleandro', icon: FaGithub },
    { name: 'Portfolio', url: 'https://gullojl-dev.netlify.app/PortfolioPage', icon: FaBriefcase },
    { name: 'Curriculum', url: 'https://gullojl-dev.netlify.app/CVPage', icon: FaSheetPlastic },
  ]

export const translations = {
    en: {
      name: 'José Leandro Gullo',
      portfolio: 'Portfolio',
      resume: 'Resume',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
      changeLanguage: 'Change Language',
      phone: 'Phone',
      footer: 'Created with ❤️ by JLGDevelopment',
    },
    es: {
      name: 'José Leandro Gullo',
      portfolio: 'Portafolio',
      resume: 'Curriculum',
      darkMode: 'Modo Oscuro',
      lightMode: 'Modo Claro',
      changeLanguage: 'Cambiar Idioma',
      phone: 'Celular',
      footer: 'Creado con ❤️ por JLGDevelopment',
    },
  }