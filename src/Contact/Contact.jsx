import './Contact.css'

function Contact() {
  return (
    <div className='form-container'>
      <h2>CONTACTO</h2>
      <form className="form" >
          <input name="name" type="text" placeholder='Nombre' className='user-info'></input>
          <input name="email" type="email" placeholder='Email'  className='user-info'></input>
          <input name='message' type="text" placeholder='Ingresa tu mensaje'  className='message-info'></input>
          <button type="submit" className='button-message'>Enviar Mensaje</button>
      </form>
</div>
  )
}
export default Contact
