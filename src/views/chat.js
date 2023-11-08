

export const renderChat = () => {


const contenedor = document.createElement("div");
contenedor.id = "chatContainer"


contenedor.innerHTML+= `

    <textarea id="inputChat" type="text" placeholder="Chatea con tu personaje favorito" ></textarea>
    <button type= "button" id="sendButton"><i class="bi bi-send"></i></button>

`

return contenedor;
}