import React, { useState, useEffect } from "react";
import CartWidget from "./CartWidget/CartWidget.js";
import "./NavBar.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 640);
    if (window.innerWidth >= 640) {
      setIsMenuOpen(false); // Cerrar el menú si se cambia a vista de escritorio
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <h1>E-Premier</h1>
      </div>
      {isMobile ? (
        <>
        <CartWidget />
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
          <ul className={`navbar-links-mobile ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="/">Inicio</a></li>
            <li><a href="/vestidos">Vestidos</a></li>
            <li><a href="/trajes">Trajes</a></li>
            <li><a href="/about">Sobre</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </>
      ) : (
        <>
        <ul className="navbar-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">Sobre</a></li>
            <li><a href="/vestidos">Vestidos</a></li>
            <li><a href="/trajes">Trajes</a></li>
            <li><a href="/contact">Contacto</a></li>
        </ul>
        <CartWidget />
        </>
      )}
    </nav>
  );
}

export default NavBar;