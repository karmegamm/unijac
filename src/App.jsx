import React from 'react'
import Home from './pages/home/home'
import AboutIndex from './pages/about/aboutindex'
import ServiceIndex from './pages/service/serviceindex'
import ContactIndex from './pages/contact/contactIndex'
import Navbar from './pages/navbar'
import Footer from './pages/footer'
import {Routes,Route} from 'react-router-dom'
function App() {
  return <div>
    <Navbar/>
     <hr />
    <Routes>
      <Route path={'/*'} element={<Home/>}/>
      <Route path={'/about'} element={<AboutIndex/>}/>
      <Route path={'/services'} element={<ServiceIndex/>}/>
      <Route path={'/contact'} element={<ContactIndex/>}/>
    </Routes>
    <hr />
    <Footer />
  </div>
}

export default App
