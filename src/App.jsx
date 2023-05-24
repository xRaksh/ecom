import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import AllProducts from './Pages/AllProducts'
import Contact from './Components/Contact'
// import SingleProduct from './Pages/SingleProduct'

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/contact" element={<Contact/>} />
          {/* <Route path="/singleproduct/:id" element={<SingleProduct />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
