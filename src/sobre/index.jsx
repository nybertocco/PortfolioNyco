import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
import { useLang, pick } from "../i18n.jsx";

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
    "tools",
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
    { pt: "Análise e Desenvolvimento de Sistemas", en: "Systems Analysis and Development" },
    { pt: "Centro Universitário Facens", en: "Facens University Center" },
    { pt: "2025 - 2027 (previsão)", en: "2025 - 2027 (expected)" },
  ],
  [{ pt: "Engenharia de Software", en: "Software Engineering" }, { pt: "Instituto Infnet", en: "Infnet Institute" }, "2024"],
  [{ pt: "Desenvolvimento Web (Front-End)", en: "Web Development (Front-End)" }, "RocketSeat", "2023 - 2024"],
];

const certs = [
  ["fullstack", { pt: "Full Stack: React, Node, PostgreSQL e TS", en: "Full Stack: React, Node, PostgreSQL and TS" }, "Udemy", 2026],
  ["udemy-n8n", { pt: "Automação com n8n", en: "Automation with n8n" }, "Udemy", 2026],
  ["senai", { pt: "Fluência - Fundamentos da IA", en: "AI Fluency - Fundamentals" }, "Senai", 2026],
  ["senai2", { pt: "Ética na IA", en: "AI Ethics" }, "Senai", 2026],
  ["senaiPowerBI", "Microsoft Power BI", "Senai", 2026],
  ["dio-netflix", { pt: "Recriando Interface Netflix", en: "Recreating the Netflix Interface" }, "Dio", 2026],
  ["dio-bootstrap", { pt: "Construindo páginas com Bootstrap", en: "Building Pages with Bootstrap" }, "Dio", 2026],
  ["dio-scrum", { pt: "Projetos ágeis com SCRUM", en: "Agile Projects with SCRUM" }, "Dio", 2026],
  ["javascript", "JavaScript", "RocketSeat", 2024],
  ["backend", "Backend Jr.", "RocketSeat", 2024],
  ["htmlcss", { pt: "HTML e CSS", en: "HTML and CSS" }, "RocketSeat", 2024],
  ["discover", "Discover", "RocketSeat", 2023],
];

export default function Sobre() {
  const { lang, t } = useLang();
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
          <h1>{t.about.title}</h1>
        </header>
        <div className="prose">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>
      </section>

      <section className="narrow block">
        <h2 className="section-title">{t.about.skills}</h2>
        <dl className="rows">
          {skills.map(([group, list]) => (
            <div key={group} className="row">
              <dt>{group === "tools" ? t.about.tools : group}</dt>
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
        <h2 className="section-title">{t.about.education}</h2>
        <dl className="rows">
          {education.map(([title, place, date]) => (
            <div key={pick(title, "pt")} className="row">
              <dt>{pick(date, lang)}</dt>
              <dd>
                <strong>{pick(title, lang)}</strong>
                <span className="muted">{pick(place, lang)}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="block">
        <h2 className="section-title">{t.about.certificates} <span className="count">{certs.length}</span></h2>
        <div className="certs">
          {certs.map(([file, title, org, year]) => (
            <button key={file} className="cert" onClick={() => setSelected({ src: img(file), title: pick(title, lang) })}>
              <img src={img(file)} alt={`${t.about.certificate} ${pick(title, lang)}`} loading="lazy" />
              <span className="cert-title">{pick(title, lang)}</span>
              <span className="muted small">{org} · {year}</span>
            </button>
          ))}
        </div>
      </section>

      {selected && createPortal(
        <div className="lightbox" onClick={() => setSelected(null)} role="dialog" aria-label={`${t.about.certificate} ${selected.title}`}>
          <button className="lightbox-close" aria-label={t.about.close}>✕</button>
          <img src={selected.src} alt={`${t.about.certificate} ${selected.title}`} onClick={(e) => e.stopPropagation()} />
        </div>,
        document.body
      )}
    </>
  );
}
