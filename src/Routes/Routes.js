import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import NavBar from '../components/NavBar/NavBar';
import NotFound from '../components/NotFound/NotFound'; // Importar componente NotFound


const RoutesApp = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a nuestro e-commerce!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} /> // Ruta 404
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;