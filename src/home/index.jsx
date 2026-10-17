import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <div className="home">
      <img src={profile} alt="Foto de Nycolas" />
      <h1>Nycolas Bertocco</h1>
      <p>Desenvolvedor Front-End</p>
      <nav>
        <Link to="/sobre" className="btn">Sobre</Link>
        <Link to="/projetos" className="btn">Projetos</Link>
        <Link to="/contato" className="btn">Contato</Link>
      </nav>
    </div>
  );
}
