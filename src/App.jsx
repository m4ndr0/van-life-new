import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Vans from "../pages/Vans"
import VanDetails from '../pages/VanDetails'
import Header from '../components/Header'
import Footer from "../components/Footer"

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />}/>
        <Route path="/Vans" element={<Vans />} />
        <Route path="/Vans/:id" element={<VanDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
