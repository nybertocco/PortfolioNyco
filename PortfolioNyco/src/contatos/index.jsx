import "./index.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/index.jsx";

export default function Contato() {
  return (
    <main>
      <Header />
      <div className="contato-container">
        <h2>Entre em Contato, Vamos Conversar!</h2>
        <div className="contato-card">
          <a
            href="https://workspace.google.com/intl/pt-BR/gmail/"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope /> nybertocco@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/nycolasbertocco/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> linkedin.com/in/nycolasbertocco
          </a>
          <a
            href="https://github.com/nybertocco"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> github.com/nybertocco
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
