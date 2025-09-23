import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Menus from './pages/Menus'
import Intro from './pages/Intro'


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/menus' element={<Menus/>} />
      <Route path='/intro' element={<Intro/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
