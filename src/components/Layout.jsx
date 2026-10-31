import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  ["/", "Início"],
  ["/sobre", "Sobre"],
  ["/projetos", "Projetos"],
  ["/contato", "Contato"],
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="shell">
      <header className="nav">
        <div className="container nav-inner">
          <Link to="/" className="brand">Nycolas Bertocco</Link>
          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
          <nav className={open ? "open" : ""}>
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} end>{label}</NavLink>
            ))}
          </nav>
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
