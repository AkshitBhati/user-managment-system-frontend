import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useSelector } from 'react-redux'
import "./global.css"
import Home from './Components/Home'
import Veiw from './Components/Veiw'
import Profile from './Components/Profile'
import Navbar from './Components/Navbar'

const App = () => {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/veiw/:id' element={<Veiw />} />
        <Route path='/profile' element={<Profile   />} />
      </Routes>
    </Router>
  )
}

export default App
