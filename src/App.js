import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import "./global.css"
import Home from './Components/Home'
import Veiw from './Components/Veiw'
import Profile from './Components/Profile'
import Navbar from './Components/Navbar'

const App = () => {
  
  return (
    <>
    <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            fontSize: "1.2rem",
            fontWeight: "bold",
            background: "rgba(0, 0, 0, 0.8)",
            color: "#fff",
          },
        }}
      />
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/page3/:id' element={<Veiw />} />
        <Route path='/page2' element={<Profile   />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
