import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className='home-container'>
      <div className='info'>
      <h1> Carla Dalila Castillo Castillo</h1>
      <h2>Matrona Universidad de Chile</h2>
      <Link to='/contact'><button className='button'>Contáctame</button></Link>
      </div>
    </div>
  )
}
export default Home
