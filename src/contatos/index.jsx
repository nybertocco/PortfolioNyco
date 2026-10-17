import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const items = [
  [() => <FaEnvelope />, "E-mail", "nybertocco@gmail.com", "mailto:nybertocco@gmail.com"],
  [() => <FaLinkedin />, "LinkedIn", "linkedin.com/in/nycolasbertocco", "https://www.linkedin.com/in/nycolasbertocco/"],
  [() => <FaGithub />, "GitHub", "github.com/nybertocco", "https://github.com/nybertocco"],
];

export default function Contato() {
  return (
    <section className="section narrow">
      <h1 className="title reveal">Vamos conversar!</h1>
      <p className="lead reveal">Aberto a oportunidades como Desenvolvedor Front-End Júnior ou Estagiário.</p>
      <div className="contact-grid">
        {items.map(([icon, label, text, href]) => (
          <a key={label} className="card contact reveal" href={href} target="_blank" rel="noreferrer">
            {icon()}
            <span><small>{label}</small>{text}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
