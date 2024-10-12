import React from "react";
import CartWidget from "../CartWidget/CartWidget.js";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src="/logo.png" alt="Store Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">Catálogo</a>
        </li>
        <li>
          <a href="/about">Nosotros</a>
        </li>
        <li>
          <a href="/contact">Contacto</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
