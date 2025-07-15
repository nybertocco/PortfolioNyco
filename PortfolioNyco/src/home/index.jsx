import "./index.css";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <div className="container-profile">
      <img src={profile} alt="Foto de Nycolas" />
      <h1>Nycolas Bertocco</h1>
      <p>Desenvolvedor de Software Front-End</p>
      <menu>
        <ol>
          <Link to="/sobre">
            <button>Sobre</button>
          </Link>
          <Link to="/projetos">
            <button>Projetos</button>
          </Link>
          <Link to="/contato">
            <button>Contato</button>
          </Link>
        </ol>
      </menu>
    </div>
  );
}
