
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
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
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
