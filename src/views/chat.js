

export const renderChat = () => {


const contenedor= document.createElement("div");


contenedor.innerHTML+= `
<form>
    <input type="text" placeholder="Chatea con tu personaje favorita"></input>
    <button type= "button" id="sendButton"></button>
</form>
`

return contenedor;
}