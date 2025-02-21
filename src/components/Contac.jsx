

function Contac() {
  return (
    <div id="contact">
        <h1>Contactame</h1>
        <form>
            <input type="text" placeholder="Nombre completo" required />
            <input type="email" placeholder="Escribi tu email" required />
            <textarea placeholder="Escribi tu consulta" name="message"></textarea>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Contac