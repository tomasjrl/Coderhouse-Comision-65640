import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';
// import ItemDetailContainer from '../Components/ItemDetailContainer/ItemDetailContainer';
import NavBar from '../Components/NavBar/NavBar';

/* <Route path="/item/:itemId" element={<ItemDetailContainer />} />  */

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a nuestro e-commerce!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;