import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";
import { useLang } from "../i18n.jsx";

const stack = ["React.js", "JavaScript", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"];

export default function Home() {
  const { t } = useLang();
  return (
    <section className="hero">
      <img className="avatar" src={profile} alt={t.home.photoAlt} />
      <p className="eyebrow">{t.home.eyebrow}</p>
      <h1>
        {t.home.hello}
        <span className="muted">{t.home.tagline}</span>
      </h1>
      <p className="hero-stack">{stack.join(" · ")}</p>
      <div className="hero-actions">
        <Link to="/projetos" className="btn primary">{t.home.ctaProjects}</Link>
        <Link to="/contato" className="btn">{t.home.ctaContact}</Link>
      </div>
    </section>
  );
}
