import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./components/NavBar/CartWidget/CartWidget";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow bg-gray-100">
          <ItemListContainer greeting="Bienvenidos a nuestra tienda E-Premier!" />
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;