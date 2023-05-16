
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './App.css'
import Navbar from './Navbar/Navbar'
import About from './About/About'
import MainPage from './MainPage/MainPage'
import Footer from './Footer/Footer'
import Services from './Services/Services'
import Contact from './Contact/Contact'

function App() {

  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/perfil' element={<About/>}/>
          <Route path='/servicios' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path ="/*" element ={<Navigate to ="/" replace/>}/>
        </Routes>
        <div className='info-icons'> 
          <a href='https://wa.me/56964224650' target='blank'><FontAwesomeIcon icon={faWhatsapp} color='white' ></FontAwesomeIcon></a>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
