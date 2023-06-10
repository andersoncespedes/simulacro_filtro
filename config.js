const localSto = window.localStorage;
const formRutas = document.getElementById("formRutas");
const tableRutas = document.getElementById("rutas");
const edit_clientes = document.getElementById("edit_clientes");
const formCliente = document.getElementById("formCliente");
const tableCliente = document.getElementById("tablaVerd");
const form = document.getElementById("editCliente");
const form_ticket = document.getElementById("ticket");
/*
    localSto.setItem("rutas", JSON.stringify([]));
    localSto.setItem("cliente", JSON.stringify([]));

*/
if(typeof localSto["cliente"] === "undefined"){
    localSto.setItem("cliente", JSON.stringify([]));
}else{
     let objValue = JSON.parse( localSto["cliente"] );
     
     for(let i = 0; i < objValue.length; i++){
            let arr = Object.values(objValue[i]);
            console.log(arr[0])
            let tr = document.createElement("tr");
            let id = document.createElement("td");
            id.setAttribute("id", "id");
            id.innerHTML = i + 1;
            form_ticket["cliente"].innerHTML += `<option value="${arr[0]}"> ${arr[1]}`
            tr.appendChild(id);
            arr.map((e, i) => {
                if(i > 0){
                    
                    let td = document.createElement("td");
                    td.innerHTML = e;
                    tr.appendChild(td);    
                }
            })
            let btn = document.createElement("td");
            btn.innerHTML = `<button type="button" class = "btn btn-danger" onclick = "eliminarCliente(this)">ELiminar</button>
            <button type="button" class = "btn btn-warning" data-bs-target="#ModalEditar" onclick = "editarCliente(this)" data-bs-toggle="modal">Editar</button>
            `;
            tr.appendChild(btn);
            console.log(JSON.parse( localSto["cliente"]))
            tableCliente.appendChild(tr);
        }
}
if(typeof localSto["rutas"] == "undefined"){
    localSto.setItem("rutas", JSON.stringify([]));
}else{
    let objValue = JSON.parse( localSto["rutas"] );
     for(let i = 0; i < objValue.length; i++){
            let arr = Object.values(objValue[i]);
            let tr = document.createElement("tr");
            let id = document.createElement("td");
            id.innerHTML = i + 1;
            form_ticket["rutas"].innerHTML += `<option value="${arr[0]}"> ${[arr[3], arr[4]].join("-")}</option>`
            tr.appendChild(id);
            arr.map((e, i) => {
                if(i > 0){
                    let td = document.createElement("td");
                    td.innerHTML = e;
                    tr.appendChild(td);    
                }
            })
            let btn = document.createElement("td");
            btn.innerHTML = `<button type="button" class = "btn btn-danger" onclick = "eliminarRutas(this)">ELiminar</button>
            `;
            tr.appendChild(btn);
            console.log(JSON.parse( localSto["rutas"]))
            tableRutas.appendChild(tr);
        }
}