import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/cart/cart";
import Shop from "./pages/shop/shop";
import Home from "./pages/home/Home";
import ProductDetail from "./pages/shop/productDetail";
import { ShopContextProvider } from "./shop-context";
import Footer from "./components/Footer";
import { Products } from "./products";
import CartSuccess from "./pages/cart/cartSuccess";
import CartCancel from "./pages/cart/cartCancel";

function App() {
  return (
    <div className="App" style={{ margin: "0", padding: "0" }}>
      <ShopContextProvider>
        <HashRouter basename="/">
          <Navbar />
          <Routes>
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/product/:id"
              element={<ProductDetail products={Products} />}
            />
            <Route path="/" element={<Home />} />
            <Route path="/cart/success" component={<CartSuccess />} />
            <Route path="/cart/cancel" component={<CartCancel />} />
          </Routes>
          <Footer />
        </HashRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
