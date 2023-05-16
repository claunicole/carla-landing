import './Services.css'

function Services() {
  return (
    <div className="services-container">
      <h2>Servicios</h2>
      <ul>
        <li className='info-services'>
          <img src="../../public/calendar.svg"></img>
          <div>
            <h3>CONSEJERIA SOBRE METODOS ANTICONCEPTIVOS Y SALUD SEXUAL</h3>
            <p>Consiste en brindar información sobre metodos anticonceptivos a elegir y/u orientar sobre dudas con respecto a salud sexual</p>
          </div>
        </li>
        <li className='info-services'>
          <img src="../../public/hospital.svg"></img>
          <div>
            <h3>INSERCION/EXTRACCION DE IMPLANTES ANTICONCEPTIVOS</h3>
            <p>Inserción o extracción de Implantes anticonceptivos como: Implanon, Jadelle . Se realiza bajo tecnica aseptica , con implementos esteriles . Se cobra el servicio de consulta más nserción, junto con esto incluyo el valor del implante anticonceptivo</p>
          </div>
        </li>
        <li className='info-services'>
          <img src="../../public/time.svg"></img>
          <div>
            <h3>CONSEJERIA SOBRE GESTACION Y EJERCICIO FISICO</h3>
            <p>Consiste en brindar información sobre procesos fisiologico de la gestación y el ejercicio fisico adecuado para cada trimestre de gestacion, puede ser online o presencial .</p>
          </div>
        </li>
        <li className='info-services'>
          <img src="../../public/heart.svg"></img>
          <div>
            <h3>TALLERES PRIVADOS Y GRUPALES SOBRE GESTACION</h3>
          </div>
        </li>
      </ul>
    </div>
  )
}
export default Services
