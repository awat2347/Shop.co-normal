import React from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import Shop from './pages/Shop'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
       <Header/>

    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/shop' element={<Shop/>} />
    </Routes>

      <Footer/>
    </>
  )
}

export default App