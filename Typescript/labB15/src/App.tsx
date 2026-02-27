import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './Pages/Home';
import Services from './Pages/Service'
import Contact from './Pages/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
  
    <header>
      <Navbar/>
    </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
