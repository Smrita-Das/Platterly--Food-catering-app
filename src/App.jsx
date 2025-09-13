import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Products/>}/>
    </Routes>
    </>
  )
}

export default App;
