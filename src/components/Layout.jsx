import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { useLang } from "../i18n.jsx";

const links = [
  ["/", "home"],
  ["/sobre", "about"],
  ["/projetos", "projects"],
  ["/contato", "contact"],
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="shell">
      <header className="nav">
        <div className="container nav-inner">
          <Link to="/" className="brand">Nycolas Bertocco</Link>
          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label={t.nav.menu} aria-expanded={open}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
          <nav className={open ? "open" : ""}>
            {links.map(([to, key]) => (
              <NavLink key={to} to={to} end>{t.nav[key]}</NavLink>
            ))}
          </nav>
          <div className="lang-switch" role="group" aria-label={t.nav.switchLang}>
            {["pt", "en"].map((l) => (
              <button key={l} className={lang === l ? "active" : ""} aria-pressed={lang === l} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="container page" key={pathname}>
        <Outlet />
      </main>

      <footer className="container footer">
        <span>© {new Date().getFullYear()} Nycolas Bertocco</span>
        <span className="footer-links">
          <a href="https://github.com/nybertocco" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/nycolasbertocco/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </span>
      </footer>
    </div>
  );
}
