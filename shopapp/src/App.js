import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/cart/cart";
import Shop from "./pages/shop/shop";
import Home from "./pages/home/Home";
import ProductDetail from "./pages/shop/productDetail";
import { ShopContextProvider } from "./shop-context";
import Footer from "./components/Footer";
import { Products } from "./products";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/product/:id"
              element={<ProductDetail products={Products} />}
            />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
