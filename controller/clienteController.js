const formCliente = document.getElementById("formCliente");
const tableCliente = document.getElementById("tablaVerd");
const form = document.getElementById("editCliente");
let count = 1;

function guardarCliente(ev){
    let tr = document.createElement("tr");
    let id = document.createElement("td");
    
    let arr = ["Nombres", "Apellidos", "Telefono", "Email", "Nacimiento", "Nacionalidad"]
    let obj = {};
    let nuevo = JSON.parse(localSto.getItem("cliente") );
    id.innerHTML = nuevo.length + 1;
    id.setAttribute("data-id" , nuevo.length + 1)
    tr.appendChild(id);
    [...formCliente].map((e,i) => {
        if(i < [...formCliente].length - 1){
            obj[arr[i]] = e.value;
            let td = document.createElement("td");
            td.setAttribute(`data-${e.name}` , e.value.toString())
            td.innerHTML = e.value;
            tr.appendChild(td);
        }
    })
    nuevo.push(obj);
    localSto.setItem("cliente", JSON.stringify(nuevo));
    let btn = document.createElement("td");
    btn.innerHTML = `<button type="button" class = "btn btn-danger" onclick = "eliminarCliente(this)">ELiminar</button>
    <button type="button" class = "btn btn-warning edit_cliente" data-bs-target="#ModalEditar" onclick = "editarCliente(this)" data-bs-toggle="modal">Editar</button>
    `;
    tr.appendChild(btn);
    console.log(JSON.parse( localSto["cliente"]))
    tableCliente.appendChild(tr);
    count++;
    formCliente.reset();
}
function eliminarCliente(ev){
    let elemento = ev;
    let id =  elemento.parentNode.parentNode.children[0].innerHTML;
    let table =  elemento.parentNode.parentNode.parentNode;
    
    let nuevo = JSON.parse(localSto.getItem("cliente") );
    let x = nuevo.filter((e, i) => i != parseInt(id - 1));
    localSto.setItem("cliente", JSON.stringify(x));
    elemento.parentNode.parentNode.innerHTML = "";
    table
}
function editarCliente(ev){
    let id = ev.parentNode.parentNode.children[0].innerHTML;
    let nombre = ev.parentNode.parentNode.children[1].innerHTML;
    let apellido = ev.parentNode.parentNode.children[2].innerHTML;
    let telefono = ev.parentNode.parentNode.children[3].innerHTML;
    let email = ev.parentNode.parentNode.children[4].innerHTML;
    let nacimiento = ev.parentNode.parentNode.children[5].innerHTML;
    let nacionalidad = ev.parentNode.parentNode.children[6].innerHTML;
    let form = document.getElementById("editCliente");
    form["nombre"].value = nombre;
    form["apellido"].value = apellido;
    form["telefono"].value = telefono;
    form["nacimiento"].value = nacimiento;
    form["email"].value = email;
    form["nacionalidad"].value = nacionalidad;
    
    
    
    console.log(id)
    let updated = JSON.parse(localSto.getItem("cliente"));
    updated[id - 1] 
}

formCliente["guardar"].addEventListener("click", guardarCliente)