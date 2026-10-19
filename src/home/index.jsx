import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs, SiExpress, SiPostgresql, SiPrisma, SiGit, SiVite } from "react-icons/si";
import profile from "../assets/profile.jpg";

const roles = ["Desenvolvedor Front-End", "React.js · JavaScript · TypeScript", "Em evolução para Full Stack"];
const techs = [SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs, SiExpress, SiPostgresql, SiPrisma, SiGit, SiVite];

function useTyping() {
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    const full = roles[i];
    const wait = !erasing && n === full.length ? 1600 : erasing ? 30 : 70;
    const t = setTimeout(() => {
      if (!erasing) return n < full.length ? setN(n + 1) : setErasing(true);
      if (n > 0) return setN(n - 1);
      setErasing(false);
      setI((i + 1) % roles.length);
    }, wait);
    return () => clearTimeout(t);
  }, [i, n, erasing]);

  return roles[i].slice(0, n);
}

export default function Home() {
  const text = useTyping();
  return (
    <div className="home">
      <div className="avatar"><img src={profile} alt="Foto de Nycolas" /></div>
      <h1>Nycolas Bertocco</h1>
      <p className="typing">{text}<span className="caret" /></p>
      <nav>
        <Link to="/sobre" className="btn">Sobre</Link>
        <Link to="/projetos" className="btn">Projetos</Link>
        <Link to="/contato" className="btn">Contato</Link>
      </nav>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...techs, ...techs].map((Icon, k) => <Icon key={k} />)}
        </div>
      </div>
    </div>
  );
}
