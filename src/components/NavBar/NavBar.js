import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget.js";
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
        <img src="/logo.png" alt="Store Logo" />
      </div>
      {isMobile ? (
        <>
          <button className="hamburger" onClick={toggleMenu}>
 
          </button>
          <ul className={`navbar-links-mobile ${isMenuOpen ? 'open' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category/remeras">Catálogo</Link></li>
            <li><Link to="/about">Nosotros</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </>
      ) : (
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category/remeras">Catálogo</Link></li>
          <li><Link to="/about">Nosotros</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      )}
      <CartWidget />
    </nav>
  );
}

export default NavBar;