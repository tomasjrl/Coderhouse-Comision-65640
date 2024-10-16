import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bienvenidos a E-Premier</h1>
      <p className="mb-8">
        Descubre nuestra última colección de vestidos y trajes Premier.
      </p>
      <ItemListContainer />
    </div>
  );
};

export default Home;