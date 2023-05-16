import './About.css'

function About() {
  return (
    <div className='about-container'>
      <div className='info-profile'>
        <img className='img-profile' src='/image-about.jpg' alt="a" width={350} height={350}/>
        <div className='text-profile'>
          <h2>Perfil</h2>
          <p>Matrona egresada hace 9 años de la Universidad de Chile.</p>
          <p>Diplomada de gestión en salud.</p>
          <p>Diplomada ejercicio fisico y embarazo.</p>
          <p>Trabajo actualmente con gestantes, adolescentes y mujeres en todo su ciclo vital en atención primaria de la salud.</p>
          <p>Tengo experiencia en métodos anticonceptivos, climaterio, salud sexual y reproductiva, gestación y ejercicio fisico durante la gestación.</p>
        </div>
      </div>
    </div>
  )
}
export default About
