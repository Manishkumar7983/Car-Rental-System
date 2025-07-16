import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom';
import Cardetails from './pages/Cardetails';
import Mybooking from './pages/Mybooking';
import Home from './pages/Home';
import Cars from './pages/Cars';

const App = () => {

  const[showLogin,setShowLogin]=useState(false);
  const isOwnerPath=useLocation().pathname.startsWith('/owner')
  return (
    <>
      { !isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/car-details' element={<Cardetails/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/my-booking' element={<Mybooking/>}/>
      </Routes>
    </>
  )
}

export default App

