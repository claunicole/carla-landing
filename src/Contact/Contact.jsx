import emailjs from 'emailjs-com';
import swal from 'sweetalert'
import { useRef, useState } from 'react';
import './Contact.css'

function Contact() {

  const[dataForm, setDataForm] = useState({email: "", name: "", message:""})
  const form = useRef();
  
  const service = import.meta.env.VITE_SERVICE;
  const template = import.meta.env.VITE_TEMPLATE;
  const public_key = import.meta.env.VITE_PUBLIC_KEY;

  async function sendEmail (e) {
    e.preventDefault();
    let messages = {}

    if(dataForm.name && dataForm.email && dataForm.message ) {
      messages.user = dataForm

    await emailjs
      .sendForm(
        service, 
        template, 
        form.current, 
        public_key
        )
      .then((result) => {
          console.log(result.text);
          swal({
            title:'Gracias por tu mensaje, será respondido a la brevedad',
            icon: "success"})
      }, (error) => {
          console.log(error.text);
          swal({
            title:"No fue posible enviar el mensaje, intenta nuevamente",
            icon: "warning"});
      });}

      else {
        swal({
          title:"Por favor, verifica que los datos sean correctos",
          icon: "warning"})
      }}

      const handlerChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })}

  return (
    <div className='form-container'>
      <h2>CONTACTO</h2>
      <form className="form" ref={form} onSubmit={sendEmail} >
          <input name="name" type="text" placeholder='Nombre' value={dataForm.name} onChange={handlerChange} className='user-info'></input>
          <input name="email" type="email" placeholder='Email' value={dataForm.email} onChange={handlerChange} className='user-info'></input>
          <input name='message' type="text" placeholder='Ingresa tu mensaje' value={dataForm.message} onChange={handlerChange} className='message-info'></input>
          <button type="submit" className='button-message'>Enviar Mensaje</button>
      </form>
</div>
  )
}
export default Contact
