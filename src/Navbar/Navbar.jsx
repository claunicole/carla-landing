import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useState } from "react";
import { Link } from 'react-router-dom';
import NavLinks from '../NavLinks/NavLinks';


function Navbar() {

const [menu, setMenu ] = useState(false)

const showMenu = () => setMenu(!menu)

  return (
    <header className={!menu ? 'navbar' : 'nav-menu'}>
        <ul className='nav-links-container'>
        <div className='info-icons'> 
          <Link to='/'><FontAwesomeIcon icon={faWhatsapp} size="2x" color='black' ></FontAwesomeIcon></Link>
        </div>
        <NavLinks desktop='item-container-desktop'/>
        </ul>
        <Link to ='#' className='menu-bars'>
          <FontAwesomeIcon icon={faBars} size="2x" onClick={showMenu}></FontAwesomeIcon>
        </Link>
        <nav className={!menu ? 'menu-hidden' : 'menu'}>
          <ul className='menu-items' onClick={showMenu}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-x'>
                <FontAwesomeIcon icon={faXmark} size="2x" ></FontAwesomeIcon>
              </Link>
            </li>
           <NavLinks mobile='item-container-mobile'/>
          </ul>
        </nav>
    </header>
  )
}

export default Navbar
