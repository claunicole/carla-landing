
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import About from './About/About'
import MainPage from './MainPage/MainPage'

function App() {

  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/perfil' element={<About/>}/>
          <Route path ="/*" element ={<Navigate to ="/" replace/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
