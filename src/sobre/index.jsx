import { useEffect, useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiVite,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";

const imgs = import.meta.glob("../assets/*.png", {
  eager: true,
  import: "default",
});
const img = (name) => imgs[`../assets/${name}.png`];

const skills = [
  [
    "Front-End",
    [
      [<SiHtml5 />, "HTML5"],
      [<SiCss3 />, "CSS3"],
      [<SiJavascript />, "JavaScript"],
      [<SiReact />, "React.js"],
      [<SiTypescript />, "TypeScript"],
      [<SiTailwindcss />, "Tailwind CSS"],
    ],
  ],
  [
    "Back-End",
    [
      [<SiNodedotjs />, "Node.js"],
      [<SiExpress />, "Express"],
      [<SiPostgresql />, "PostgreSQL"],
      [<SiPrisma />, "Prisma"],
    ],
  ],
  [
    "Ferramentas",
    [
      [<SiGit />, "Git"],
      [<SiGithub />, "GitHub"],
      [<SiVite />, "Vite"],
      [<SiVercel />, "Vercel"],
    ],
  ],
];

const education = [
  [
    "Análise e Desenvolvimento de Sistemas",
    "Centro Universitário Facens",
    "2025 - 2027 (previsão)",
  ],
  ["Engenharia de Software", "Instituto Infnet", "2024"],
  ["Desenvolvimento Web (Front-End)", "RocketSeat", "2023 - 2024"],
];

const certs = [
  ["fullstack", "Full Stack: React, Node, PostgreSQL e TS", "Udemy", 2026],
  ["udemy-n8n", "Automação com n8n", "Udemy", 2026],
  ["senai", "Fluência - Fundamentos da IA", "Senai", 2026],
  ["senai2", "Ética na IA", "Senai", 2026],
  ["senaiPowerBI", "Microsoft Power BI", "Senai", 2026],
  ["dio-netflix", "Recriando Interface Netflix", "Dio", 2026],
  ["dio-bootstrap", "Construindo páginas com Bootstrap", "Dio", 2026],
  ["dio-scrum", "Projetos ágeis com SCRUM", "Dio", 2026],
  ["javascript", "JavaScript", "RocketSeat", 2024],
  ["backend", "Backend Jr.", "RocketSeat", 2024],
  ["htmlcss", "HTML e CSS", "RocketSeat", 2024],
  ["discover", "Discover", "RocketSeat", 2023],
];

export default function Sobre() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <section className="narrow">
        <header className="page-head">
          <h1>Sobre mim</h1>
        </header>
        <div className="prose">
          <p>
            Sou Desenvolvedor Front-End e comecei a programar em 2023, com o
            primeiro curso da RocketSeat, no meu último ano do ensino médio. Em
            2024 cursei Engenharia de Software na Infnet e, em 2025, migrei para
            Análise e Desenvolvimento de Sistemas na Facens.
          </p>
          <p>
            Minha base é o front-end: HTML, CSS, JavaScript e React.js. Agora
            estou ampliando meus estudos para o Full Stack, com TypeScript,
            Node.js, Express, PostgreSQL, Prisma e Tailwind CSS.
          </p>
        </div>
      </section>

      <section className="narrow block">
        <h2 className="section-title">Habilidades</h2>
        <dl className="rows">
          {skills.map(([group, list]) => (
            <div key={group} className="row">
              <dt>{group}</dt>
              <dd className="skills">
                {list.map(([icon, name]) => (
                  <span key={name} className="skill">{icon} {name}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="narrow block">
        <h2 className="section-title">Formação</h2>
        <dl className="rows">
          {education.map(([title, place, date]) => (
            <div key={title} className="row">
              <dt>{date}</dt>
              <dd>
                <strong>{title}</strong>
                <span className="muted">{place}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="block">
        <h2 className="section-title">Certificados <span className="count">{certs.length}</span></h2>
        <div className="certs">
          {certs.map(([file, title, org, year]) => (
            <button key={file} className="cert" onClick={() => setSelected({ src: img(file), title })}>
              <img src={img(file)} alt={`Certificado ${title}`} loading="lazy" />
              <span className="cert-title">{title}</span>
              <span className="muted small">{org} · {year}</span>
            </button>
          ))}
        </div>
      </section>

      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)} role="dialog" aria-label={`Certificado ${selected.title}`}>
          <button className="lightbox-close" aria-label="Fechar">✕</button>
          <img src={selected.src} alt={`Certificado ${selected.title}`} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
