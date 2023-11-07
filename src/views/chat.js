

export const renderChat = () => {


const contenedor = document.createElement("div");
contenedor.id = "chatContainer"


contenedor.innerHTML+= `

    <textarea id="inputChat" type="text" placeholder="Chatea con tu personaje favorita" rows="10" col = "100"></textarea>
    <button type= "button" id="sendButton">Enviar</button>

`

return contenedor;
}