const imgs = import.meta.glob("../assets/*.png", { eager: true, import: "default" });

// Para mostrar as tecnologias de cada projeto, preencha o campo "tags".
const projects = [
  { img: "CasaHamburguer", title: "Casa do Hamburguer", tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Tailwind CSS"],
    desc: "Site de hamburgueria com carrinho para adicionar e remover produtos. Meu primeiro projeto full stack.", url: "https://github.com/nybertocco/casa-do-hamburguer", label: "Ver código" },
  { img: "NetflixClone", title: "Netflix Clone", tags: ["React"],
    desc: "Clone da interface da Netflix, com funções de adicionar e remover da lista.", url: "https://netflix-clone-update-brown.vercel.app/" },
  { img: "MoviePB", title: "MoviePB", tags: ["React", "React Router"],
    desc: "Catálogo de filmes em alta, com sinopse, classificação e data.", url: "https://nybertocco.github.io/moviepb/" },
  { img: "CatalogoHoteis", title: "Catálogo de Hotéis", tags: ["React", "Flexbox", "CSS Grid"],
    desc: "Cadastro, avaliação e classificação de hotéis para aluguel.", url: "https://nybertocco.github.io/hoteis-catalogo/" },
  { img: "PortalNB", title: "PortalNB", tags: ["API GNews"],
    desc: "Portal de notícias do mundo todo, com busca por palavras-chave usando a API GNews.", url: "https://news-page-1kyh-nybertoccos-projects.vercel.app" },
  { img: "NewDevLinks", title: "New-DevLinks", tags: [],
    desc: "Atualização do DevLinks, mini portfólio do curso da RocketSeat para reunir links de projetos e redes sociais.", url: "https://new-dev-links.vercel.app" },
  { img: "AgendaSemanal", title: "Agenda Semanal", tags: [],
    desc: "Cronograma de dias e horários, útil para academias, clínicas e outros negócios.", url: "https://nybertocco.github.io/Agenda/" },
  { img: "CadastroLogin", title: "FormTest", tags: [],
    desc: "Formulário de cadastro e login para sites e aplicativos.", url: "https://nybertocco.github.io/formtest/" },
];

export default function Projetos() {
  return (
    <section className="section">
      <h1 className="title reveal">Meus projetos</h1>
      <div className="grid">
        {projects.map((p) => (
          <article key={p.title} className="card project reveal">
            <img src={imgs[`../assets/${p.img}.png`]} alt={`Projeto ${p.title}`} loading="lazy" />
            <div className="body">
              <h3>{p.title}</h3>
              {p.tags.length > 0 && <ul>{p.tags.map((t) => <li key={t} className="chip small">{t}</li>)}</ul>}
              <p>{p.desc}</p>
              <a className="btn" href={p.url} target="_blank" rel="noopener noreferrer">{p.label || "Ver projeto"}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
