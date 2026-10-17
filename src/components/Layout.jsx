import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  ["/", "Home"],
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
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <>
      <header className="nav">
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          {open ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={open ? "open" : ""}>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end>{label}</NavLink>
          ))}
        </nav>
      </header>
      <main className="page"><Outlet /></main>
      <footer className="footer">© {new Date().getFullYear()} Nycolas Bertocco</footer>
    </>
  );
}
