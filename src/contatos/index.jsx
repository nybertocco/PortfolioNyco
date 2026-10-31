import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { useLang } from "../i18n.jsx";

const items = [
  [<FaEnvelope />, "email", "nybertocco@gmail.com", "mailto:nybertocco@gmail.com"],
  [<FaLinkedin />, "LinkedIn", "linkedin.com/in/nycolasbertocco", "https://www.linkedin.com/in/nycolasbertocco/"],
  [<FaGithub />, "GitHub", "github.com/nybertocco", "https://github.com/nybertocco"],
];

export default function Contato() {
  const { t } = useLang();
  return (
    <section className="narrow">
      <header className="page-head">
        <h1>{t.contact.title}</h1>
        <p className="muted">{t.contact.lead}</p>
        <p className="status"><span className="dot" /> {t.contact.status}</p>
      </header>

      <ul className="contact-list">
        {items.map(([icon, label, text, href]) => (
          <li key={label}>
            <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
              {icon}
              <span className="contact-label">{label === "email" ? t.contact.email : label}</span>
              <span className="contact-value">{text}</span>
              <span className="arrow" aria-hidden="true">→</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
