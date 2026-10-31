import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const items = [
  [<FaEnvelope />, "E-mail", "nybertocco@gmail.com", "mailto:nybertocco@gmail.com"],
  [<FaLinkedin />, "LinkedIn", "linkedin.com/in/nycolasbertocco", "https://www.linkedin.com/in/nycolasbertocco/"],
  [<FaGithub />, "GitHub", "github.com/nybertocco", "https://github.com/nybertocco"],
];

export default function Contato() {
  return (
    <section className="narrow">
      <header className="page-head">
        <h1>Contato</h1>
        <p className="muted">
          Estou aberto a oportunidades como Desenvolvedor Front-End Júnior ou Estagiário.
          A forma mais rápida de falar comigo é por e-mail.
        </p>
        <p className="status"><span className="dot" /> Disponível para novas oportunidades</p>
      </header>

      <ul className="contact-list">
        {items.map(([icon, label, text, href]) => (
          <li key={label}>
            <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
              {icon}
              <span className="contact-label">{label}</span>
              <span className="contact-value">{text}</span>
              <span className="arrow" aria-hidden="true">→</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
