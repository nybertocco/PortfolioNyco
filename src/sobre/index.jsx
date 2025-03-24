import "./index.css";
import { Link } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/index.jsx";
import html5 from "../assets/html5.svg";
import css3 from "../assets/css3.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import github from "../assets/github.svg";
import discover from "../assets/discover.png";
import htmlcss from "../assets/htmlcss.png";
import backend from "../assets/backend.png";
import javascript2 from "../assets/javascript.png";

export default function Sobre() {
  return (
    <main className="content-personal">
      <Header />

      <div className="container">
        <div className="bio-section">
          <h1>Sobre Mim</h1>
          <p>
            Olá, me chamo Nycolas, sou desenvolvedor Front-End e comecei meu
            primeiro curso de programação em 2023, da RocketSeat, no meu último ano do ensino
            médio.
            <br /> Em 2024 fiz um ano de graduação de Engenharia de Software no
            Instituo Infnet (EAD), e em 2025 migrei pra Ánalise e
            Desenvolvimento de Sistemas no Centro Universitário Facens.
            <br /> Minhas principais habilidades são HTML, CSS, Javascript e
            React.js, e para versionamento de código, GitHub.{" "}
          </p>
        </div>
      </div>

      <div className="skills-section">
        <h2>Habilidades</h2>

        <div className="skills">
          <menu>
            <ol>
              <p>
                <img src={html5} alt="Logo HTML" />
                HTML
              </p>
              <p>
                <img src={css3} alt="Logo CSS" />
                CSS
              </p>
              <p>
                <img src={javascript} alt="Logo Javascript" />
                JavaScript
              </p>
              <p>
                <img src={react} alt="Logo React" />
                React.js
              </p>
              <p>
                <img src={github} alt="Logo GitHub" />
                GitHub
              </p>
            </ol>
          </menu>
        </div>
      </div>

      <div className="certifications-section">
        <h2>Formação Acadêmica</h2>

        <div className="register-cert">
          <h3>Desenvolvedor de Software</h3>
          <p>RocketSeat - Curso Online</p>
          <span>2023 - 2024</span>
        </div>
        <div className="register-cert">
          <h3>Engenharia de Software</h3>
          <p>Instituto Infnet</p>
          <span>2024 - 2025</span>
        </div>
        <div className="register-cert">
          <h3>Ánalise e Desenvolvimento de Sistemas</h3>
          <p>Centro Universitário Facens</p>
          <span>2025 - 2027</span>
        </div>
      </div>

      <h2 className="h2-cert">Meus Certificados</h2>

      <div className="cert-views">
        <div className="cert">
          <img src={discover} alt="Certificado Discover RocketSeat" />
          <div className="info-cert">
            <h3 className="discover">Discover</h3>
            <p>RocketSeat</p>
            <span>2023</span>
          </div>
        </div>
        <div className="cert">
          <img src={htmlcss} alt="Certificado HTML e CSS RocketSeat" />
          <div className="info-cert">
            <h3>HTML e CSS</h3>
            <p>RocketSeat</p>
            <span>2024</span>
          </div>
        </div>
        <div className="cert">
          <img src={backend} alt="Certificado Backend RocketSeat" />
          <div className="info-cert">
            <h3>Backend JR</h3>
            <p>RocketSeat</p>
            <span>2024</span>
          </div>
        </div>
        <div className="cert">
          <img src={javascript2} alt="Certificado JavaScript" />
          <div className="info-cert">
            <h3>JavaScript</h3>
            <p>RocketSeat</p>
            <span>2024</span>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
