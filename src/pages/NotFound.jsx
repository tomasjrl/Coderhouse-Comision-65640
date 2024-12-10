import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
      <p className="text-lg mb-2">
        Lo sentimos, la página solicitada no existe.
      </p>
      <p className="text-sm text-gray-600">
        Por favor, verifica la URL o vuelve a la página principal.
      </p>
    </div>
  );
};

export default NotFound;
