// NavBar.jsx
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { CartContext } from "./CartWidget";
import categories from "../data/categories"; // Importa tus categorías

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-cyan-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">
            E-Premier
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-blue-200 transition duration-200 ease-in-out">Inicio</Link>
            <Link to="/about" className="hover:text-blue-200 transition duration-200 ease-in-out">Sobre</Link>
            {categories.map(category => (
              <Link 
                key={category.id} 
                to={`/category/${category.id}`} 
                className="hover:text-blue-200 transition duration-200 ease-in-out"
              >
                {category.name}
              </Link>
            ))}
            <Link to="/contact" className="hover:text-blue-200 transition duration-200 ease-in-out">Contacto</Link>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </div>
            <button className="md:hidden ml-4" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 text-center sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-200 transition duration-200 ease-in-out">Inicio</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-200 transition duration-200 ease-in-out">Sobre</Link>
            {categories.map(category => (
              <Link 
                key={category.id} 
                to={`/category/${category.id}`} 
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-200 transition duration-200 ease-in-out"
              >
                {category.name}
              </Link>
            ))}
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-200 transition duration-200 ease-in-out">Contacto</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
