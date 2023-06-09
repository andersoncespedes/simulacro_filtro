const localSto = window.localStorage;
if(typeof localSto["cliente"] === "undefined"){
    localSto.setItem("cliente", JSON.stringify([]));
}else{
     let objValue = JSON.parse( localSto["cliente"] );
     
     for(let i = 0; i < objValue.length; i++){
            let arr = Object.values( objValue[i]);
            let tr = document.createElement("tr");
            let id = document.createElement("td");
            id.setAttribute("id", "id");
            id.innerHTML = i + 1;
            tr.appendChild(id);
            arr.map(e => {
                let td = document.createElement("td");
                td.innerHTML = e;
                tr.appendChild(td);
            })
            let btn = document.createElement("td");
            btn.innerHTML = `<button type="button" class = "btn btn-danger" onclick = "eliminarCliente(this)">ELiminar</button>
            <button type="button" class = "btn btn-warning" data-bs-target="#ModalEditar" data-bs-toggle="modal">Editar</button>
            `;
            tr.appendChild(btn);
            console.log(JSON.parse( localSto["cliente"]))
            tableCliente.appendChild(tr);
        }
        
}
if(typeof localSto["rutas"] == "undefined"){
    localSto.setItem("rutas", JSON.stringify([]));
}