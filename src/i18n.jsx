import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "lang";

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "pt" || saved === "en") return saved;
  } catch {
    // localStorage indisponível (modo privado etc.)
  }
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

const LangContext = createContext({ lang: "pt", setLang: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignora
    }
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = texts[lang].meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", texts[lang].meta.description);
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const { lang, setLang } = useContext(LangContext);
  return { lang, setLang, t: texts[lang] };
}

// Escolhe o texto do idioma atual em objetos { pt, en }
// eslint-disable-next-line react-refresh/only-export-components
export const pick = (value, lang) => (value && typeof value === "object" ? value[lang] : value);

const texts = {
  pt: {
    meta: {
      title: "Nycolas Bertocco | Desenvolvedor Front-End",
      description: "Portfólio de Nycolas Bertocco, desenvolvedor Front-End com foco em React.js e em evolução para Full Stack.",
    },
    nav: { home: "Início", about: "Sobre", projects: "Projetos", contact: "Contato", menu: "Abrir menu", switchLang: "Switch to English" },
    home: {
      photoAlt: "Foto de Nycolas Bertocco",
      eyebrow: "Desenvolvedor Front-End · Sorocaba, SP",
      hello: "Olá, eu sou o Nycolas.",
      tagline: " Crio interfaces simples, rápidas e bem cuidadas com React.",
      ctaProjects: "Ver projetos",
      ctaContact: "Entrar em contato",
    },
    about: {
      title: "Sobre mim",
      p1: "Sou Desenvolvedor Front-End e comecei a programar em 2023, com o primeiro curso da RocketSeat, no meu último ano do ensino médio. Em 2024 cursei Engenharia de Software na Infnet e, em 2025, migrei para Análise e Desenvolvimento de Sistemas na Facens.",
      p2: "Minha base é o front-end: HTML, CSS, JavaScript e React.js. Agora estou ampliando meus estudos para o Full Stack, com TypeScript, Node.js, Express, PostgreSQL, Prisma e Tailwind CSS.",
      skills: "Habilidades",
      tools: "Ferramentas",
      education: "Formação",
      certificates: "Certificados",
      certificate: "Certificado",
      close: "Fechar",
    },
    projects: {
      title: "Projetos",
      lead: "Uma seleção do que construí enquanto estudo front-end e full stack.",
      all: "Todos",
      featured: "Destaque",
      view: "Ver projeto",
      viewSite: "Ver site",
      project: "Projeto",
    },
    contact: {
      title: "Contato",
      lead: "Estou aberto a oportunidades como Desenvolvedor Front-End Júnior ou Estagiário. A forma mais rápida de falar comigo é por e-mail.",
      status: "Disponível para novas oportunidades",
      email: "E-mail",
    },
  },
  en: {
    meta: {
      title: "Nycolas Bertocco | Front-End Developer",
      description: "Portfolio of Nycolas Bertocco, a Front-End developer focused on React.js and growing into Full Stack.",
    },
    nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact", menu: "Open menu", switchLang: "Mudar para português" },
    home: {
      photoAlt: "Photo of Nycolas Bertocco",
      eyebrow: "Front-End Developer · Sorocaba, Brazil",
      hello: "Hi, I'm Nycolas.",
      tagline: " I build simple, fast and well-crafted interfaces with React.",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
    },
    about: {
      title: "About me",
      p1: "I'm a Front-End Developer and I started coding in 2023 with my first RocketSeat course, during my last year of high school. In 2024 I studied Software Engineering at Infnet, and in 2025 I switched to Systems Analysis and Development at Facens.",
      p2: "My foundation is front-end: HTML, CSS, JavaScript and React.js. I'm now expanding into Full Stack with TypeScript, Node.js, Express, PostgreSQL, Prisma and Tailwind CSS.",
      skills: "Skills",
      tools: "Tools",
      education: "Education",
      certificates: "Certificates",
      certificate: "Certificate",
      close: "Close",
    },
    projects: {
      title: "Projects",
      lead: "A selection of what I've built while studying front-end and full stack.",
      all: "All",
      featured: "Featured",
      view: "View project",
      viewSite: "View site",
      project: "Project",
    },
    contact: {
      title: "Contact",
      lead: "I'm open to opportunities as a Junior Front-End Developer or Intern. The fastest way to reach me is by email.",
      status: "Available for new opportunities",
      email: "Email",
    },
  },
};
