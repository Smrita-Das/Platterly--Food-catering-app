import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Products from './pages/Products'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Menus from './pages/Menus'
import Intro from './pages/Intro'
import platerllyLOGO from './assets/platterly_Logo.png'
import { GiGreenhouse } from 'react-icons/gi';
import { FaRegClock } from 'react-icons/fa6';
import { MdOutlinePublishedWithChanges } from 'react-icons/md';
import { PiPackageLight } from 'react-icons/pi';
import {useAuth0} from '@auth0/auth0-react'


function App() {
    // const {user , isAuthenticated} =useAuth0();
       
  return (
    <>

    {/* {
      isAuthenticated ? <Home/> : <Intro/>
    }
    */}
 
    
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
