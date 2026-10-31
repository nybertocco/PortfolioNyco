import { useState } from "react";
import { useLang, pick } from "../i18n.jsx";

const imgs = import.meta.glob("../assets/*.png", { eager: true, import: "default" });

// Para mostrar as tecnologias de cada projeto, preencha o campo "tags".
const projects = [
  { img: "CasaHamburguer", title: "Casa do Hamburguer", tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Tailwind CSS"],
    desc: { pt: "Hamburgueria full stack com cadastro, login, carrinho e painel de pedidos para o administrador. Front-end no Netlify, API no Render e banco no Neon. A primeira visita pode demorar um pouco, pois o servidor é gratuito.",
      en: "Full stack burger shop with sign-up, login, cart and an order dashboard for the admin. Front-end on Netlify, API on Render and database on Neon. The first visit may take a moment because the server runs on a free tier." },
    url: "https://casa-do-hamburguer-nb.netlify.app/", label: "viewSite", featured: true },
  { img: "NetflixClone", title: "Netflix Clone", tags: ["React"],
    desc: { pt: "Clone da interface da Netflix, com funções de adicionar e remover da lista.",
      en: "Netflix interface clone with add and remove from list features." }, url: "https://netflix-clone-update-brown.vercel.app/" },
  { img: "MoviePB", title: "MoviePB", tags: ["React", "React Router"],
    desc: { pt: "Catálogo de filmes em alta, com sinopse, classificação e data.",
      en: "Trending movies catalog with synopsis, rating and release date." }, url: "https://nybertocco.github.io/moviepb/" },
  { img: "CatalogoHoteis", title: { pt: "Catálogo de Hotéis", en: "Hotel Catalog" }, tags: ["React", "Flexbox", "CSS Grid"],
    desc: { pt: "Cadastro, avaliação e classificação de hotéis para aluguel.",
      en: "Register, review and rank hotels available for rent." }, url: "https://nybertocco.github.io/hoteis-catalogo/" },
  { img: "PortalNB", title: "PortalNB", tags: ["API GNews"],
    desc: { pt: "Portal de notícias do mundo todo, com busca por palavras-chave usando a API GNews.",
      en: "Worldwide news portal with keyword search using the GNews API." }, url: "https://news-page-1kyh-nybertoccos-projects.vercel.app" },
  { img: "NewDevLinks", title: "New-DevLinks", tags: [],
    desc: { pt: "Atualização do DevLinks, mini portfólio do curso da RocketSeat para reunir links de projetos e redes sociais.",
      en: "Updated version of DevLinks, a mini portfolio from the RocketSeat course that gathers project and social links." }, url: "https://new-dev-links.vercel.app" },
  { img: "AgendaSemanal", title: { pt: "Agenda Semanal", en: "Weekly Schedule" }, tags: [],
    desc: { pt: "Cronograma de dias e horários, útil para academias, clínicas e outros negócios.",
      en: "Weekly schedule of days and times, useful for gyms, clinics and other businesses." }, url: "https://nybertocco.github.io/Agenda/" },
  { img: "CadastroLogin", title: "FormTest", tags: [],
    desc: { pt: "Formulário de cadastro e login para sites e aplicativos.",
      en: "Sign-up and login form for websites and apps." }, url: "https://nybertocco.github.io/formtest/" },
];

const category = (p) => (p.tags.includes("Node.js") ? "Full Stack" : "Front-End");

export default function Projetos() {
  const { lang, t } = useLang();
  const [filter, setFilter] = useState("all");
  const visible = projects.filter((p) => filter === "all" || category(p) === filter);
  const filterLabel = (f) => (f === "all" ? t.projects.all : f);

  return (
    <section>
      <header className="page-head">
        <h1>{t.projects.title}</h1>
        <p className="muted">{t.projects.lead}</p>
      </header>

      <div className="filters" role="tablist">
        {["all", "Full Stack", "Front-End"].map((f) => (
          <button key={f} role="tab" aria-selected={filter === f} className={`filter${filter === f ? " active" : ""}`} onClick={() => setFilter(f)}>
            {filterLabel(f)}
          </button>
        ))}
      </div>

      <div className="projects">
        {visible.map((p) => (
          <a
            key={p.img}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`project${p.featured && filter === "all" ? " featured" : ""}`}
          >
            <div className="project-img">
              <img src={imgs[`../assets/${p.img}.png`]} alt={`${t.projects.project} ${pick(p.title, lang)}`} loading="lazy" />
            </div>
            <div className="project-body">
              <div className="project-title">
                <h3>{pick(p.title, lang)}</h3>
                {p.featured && filter === "all" && <span className="tag-featured">{t.projects.featured}</span>}
              </div>
              <p>{pick(p.desc, lang)}</p>
              {p.tags.length > 0 && <p className="tags">{p.tags.join(" · ")}</p>}
              <span className="link">{t.projects[p.label || "view"]} →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
