import { useEffect, useRef, useState } from "react";
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
  const track = useRef(null);
  const scroll = (dir) =>
    track.current.scrollBy({
      left: dir * track.current.clientWidth * 0.8,
      behavior: "smooth",
    });
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
      <section className="section narrow">
        <h1 className="title reveal">Sobre mim</h1>
        <p className="lead reveal">
          Sou Desenvolvedor Front-End e comecei a programar em 2023, com o
          primeiro curso da RocketSeat, no meu último ano do ensino médio. Em
          2024 cursei Engenharia de Software na Infnet e, em 2025, migrei para
          Análise e Desenvolvimento de Sistemas na Facens.
        </p>
        <p className="lead reveal">
          Minha base é o front-end: HTML, CSS, JavaScript e React.js. Agora
          estou ampliando meus estudos para o Full Stack, com TypeScript,
          Node.js, Express, PostgreSQL, Prisma e Tailwind CSS.
        </p>
      </section>

      <section className="section narrow">
        <h2 className="subtitle reveal">Habilidades</h2>
        {skills.map(([group, list]) => (
          <div key={group} className="skill-group reveal">
            <h3>{group}</h3>
            <ul>
              {list.map(([icon, name]) => (
                <li key={name} className="chip">
                  {icon} {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="section narrow">
        <h2 className="subtitle reveal">Formação</h2>
        <div className="timeline">
          {education.map(([title, place, date]) => (
            <div key={title} className="card reveal">
              <h3>{title}</h3>
              <p>{place}</p>
              <span className="accent">{date}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="subtitle reveal">Certificados</h2>
        <div className="carousel reveal">
          <button onClick={() => scroll(-1)} aria-label="Anterior">
            ‹
          </button>
          <div className="track" ref={track}>
            {certs.map(([file, title, org, year]) => (
              <article
                key={file}
                className="card cert"
                role="button"
                tabIndex={0}
                onClick={() => setSelected({ src: img(file), title })}
                onKeyDown={(e) =>
                  e.key === "Enter" && setSelected({ src: img(file), title })
                }
              >
                <img
                  src={img(file)}
                  alt={`Certificado ${title}`}
                  loading="lazy"
                />
                <h3>{title}</h3>
                <p>
                  {org} · <span className="accent">{year}</span>
                </p>
              </article>
            ))}
          </div>
          <button onClick={() => scroll(1)} aria-label="Próximo">
            ›
          </button>
        </div>
      </section>
      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <button className="lightbox-close" aria-label="Fechar">
            ✕
          </button>
          <img
            src={selected.src}
            alt={`Certificado ${selected.title}`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
