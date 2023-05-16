import './Footer.css'

function Footer() {
  return (
    <div className="footer_container">
        <div className='info-footer'>
          <p> Ⓒ 2023 Todos los derechos reservados</p>
          <button onClick={() => (window.location = "https://claunicole.netlify.app/")}>Creado por Claunicode</button>
        </div>
    </div>
  )
}

export default Footer
