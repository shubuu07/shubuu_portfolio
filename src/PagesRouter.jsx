import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
const PagesRouter = () => {
  return (
    <>
      <div className="h-screen w-screen relative">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Contact />} />
          </Routes>
      </div>
    </>
  )
}

export default PagesRouter