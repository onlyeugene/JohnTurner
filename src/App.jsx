import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import HomeIndex from './components/home/HomeIndex'
import CartPage from './pages/cart/CartPage'
import CheckoutPage from './pages/checkout/CheckoutPage'
import Footer from './components/footer/Footer'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route index='/' element = {<HomeIndex />}/>
          <Route path='cartpage' element = {<CartPage />} />
          <Route path='checkoutpage' element = {<CheckoutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
