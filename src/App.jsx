import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomeIndex from './components/home/HomeIndex';
import CartPage from './pages/cart/CartPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import Footer from './components/footer/Footer';
import ProductDetail from './pages/Products/ProductDetail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/checkoutpage" element={<CheckoutPage />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
