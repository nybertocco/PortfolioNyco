import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navigation">
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <menu className={`menu-list ${isMenuOpen ? "open" : ""}`}>
        <ol>
          <Link to="/" onClick={toggleMenu}>
            <p className="home">Home</p>
          </Link>
          <Link to="/sobre" onClick={toggleMenu}>
            <p className="sobre">Sobre</p>
          </Link>
          <Link to="/projetos" onClick={toggleMenu}>
            <p className="projetos">Projetos</p>
          </Link>
          <Link to="/contato" onClick={toggleMenu}>
            <p className="contato">Contato</p>
          </Link>
        </ol>
      </menu>
    </header>
  );
}
