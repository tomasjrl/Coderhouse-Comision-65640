// NavLinks.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = ({ isMobile }) => {
  const links = [
    { to: '/', label: 'Inicio' },
    { to: '/about', label: 'Sobre' },
    { to: '/category/vestidos', label: 'Vestidos' },
    { to: '/category/trajes', label: 'Trajes' },
    { to: '/contact', label: 'Contacto' },
  ];

  return (
    <div className={isMobile ? "px-2 pt-2 pb-3 space-y-1 text-center sm:px-3" : "hidden md:flex space-x-4"}>
      {links.map((link) => (
        <Link 
          key={link.to} 
          to={link.to} 
          className={`block ${isMobile ? "px-3 py-2 rounded-md text-base font-medium" : ""} hover:text-blue-200 transition duration-200 ease-in-out`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
