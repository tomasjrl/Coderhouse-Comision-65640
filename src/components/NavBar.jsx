import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { CartContext } from "../context/cartProvider";
import NavLinks from './NavLinks';

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart solo puede ser utilizado dentro del contexto de un proveedor CartProvider');
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
          <Link to="/" className="text-2xl font-bold">E-Premier</Link>
          <NavLinks isMobile={false} />
          <div className="flex items-center">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </Link>
            <button className="md:hidden ml-4" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <NavLinks isMobile={true} />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
