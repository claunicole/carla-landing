import { Link } from "react-router-dom"

function NavLinks({mobile, desktop}) {
  return (
    <>
         <div className={desktop} id={mobile}>
             <li className='item'>
              <Link to='/'>Inicio</Link>
            </li>
            <li className='item'>
              <Link to='/perfil'>Perfil</Link>
            </li>
            <li className='item'>
              <Link to='/servicios'>Servicios</Link>
            </li>
            <li className='item'>
              <Link to='/contact'>Contacto</Link>
            </li>
          
            </div>
    </>
  )
}
export default NavLinks
