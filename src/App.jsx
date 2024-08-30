import './App.css'
import ProductCard from './product'
import CartPage from './cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductCard />} />
        <Route path="/cart" element={<CartPage />} />

      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
