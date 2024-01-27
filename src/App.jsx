import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from "../components/Header"
import HomeContext from "../components/HomeContext"
import Footer from "../components/Footer"
import VansContext from "../components/VansContext"
import './App.css'


function Home() {
  return (
    <>
      <Header />
      <HomeContext />
      <Footer />
    </>
  )
}

function Vans() {
  return (
    <>
      <Header />
      <VansContext />
      <Footer />
    </>
  )
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Vans" element={<Vans />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
