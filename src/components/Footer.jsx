import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">E-Premier</h3>
            <p className="text-sm">Tu mejor tienda de moda.</p>
          </div>
        </div>
        <div className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} E-Premier. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
