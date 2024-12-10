import React from "react";

const Contacto = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contactanos</h1>
      <p className="mb-4">
        Nos encantaría escuchar de tí. Por favor, no dudes en ponerte en
        contacto utilizando la información a continuación:
      </p>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Soporte al cliente</h2>
        <p>Correo electrónico: clientes@epremier.com</p>
        <p>Teléfono: +54 (11) 1234-5678</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Consultas comerciales</h2>
        <p>Correo electrónico: info@epremier.com</p>
        <p>Teléfono: +54 (11) 1234-5678</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Visitanos</h2>
        <p>Av. Santa Fé 1234</p>
        <p>CP 12345 CABA</p>
        <p>Argentina</p>
      </div>
    </div>
  );
};

export default Contacto;
