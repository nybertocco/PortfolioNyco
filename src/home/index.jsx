import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";

const stack = ["React.js", "JavaScript", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"];

export default function Home() {
  return (
    <section className="hero">
      <img className="avatar" src={profile} alt="Foto de Nycolas Bertocco" />
      <p className="eyebrow">Desenvolvedor Front-End · Sorocaba, SP</p>
      <h1>
        Olá, eu sou o Nycolas.
        <span className="muted"> Crio interfaces simples, rápidas e bem cuidadas com React.</span>
      </h1>
      <p className="hero-stack">{stack.join(" · ")}</p>
      <div className="hero-actions">
        <Link to="/projetos" className="btn primary">Ver projetos</Link>
        <Link to="/contato" className="btn">Entrar em contato</Link>
      </div>
    </section>
  );
}
