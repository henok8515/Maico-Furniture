import { CartProvider } from "./components/CartContext";
import Features from "./components/Features";
import FeaturesSecond from "./components/FeaturesSecond";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import NewItems from "./components/NewItems";
import NewsLetters from "./components/NewsLetters";
import Products from "./components/Products";
import SendEmailButton from "./components/SendEmailbutton";
import Testimonial from "./components/Testimonial";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const itemsInCart = 3;
  return (
    <div className="w-full mx-auto bg-white">
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/cart" element={<Cart />} />

            {/* You can add more routes here as needed */}
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
