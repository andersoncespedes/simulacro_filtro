
let count = 1;

function guardarCliente(ev){
    let tr = document.createElement("tr");
    let id = document.createElement("td");
    let arr = ["Nombres", "Apellidos", "Telefono", "Email", "Nacimiento", "Nacionalidad"];
    let obj = {};
    let nuevo = JSON.parse(localSto.getItem("cliente"));
    id.setAttribute("id", "id");
    id.innerHTML = nuevo.length + 1;
    obj["id"] = nuevo.length;
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
    });
    let points = document.createElement("td");
    points.innerHTML = 0;
    tr.appendChild(points);

    obj["puntos"] = 0;
    nuevo.push(obj);
    form_ticket["rutas"].innerHTML += `<option value="${obj["id"]}"> ${[obj["ciudad_origen"], obj["ciudad_destino"]].join("-")}</option>`;

    localSto.setItem("cliente", JSON.stringify(nuevo));
    form_ticket["cliente"].innerHTML += `<option value="${obj["id"]}"> ${[obj["Nombres"], obj["Apellidos"]].join(" ")}</option>`;

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
    let x = nuevo.filter((e, i) => e.id != id - 1);
    localSto.setItem("cliente", JSON.stringify(x));
    elemento.parentNode.parentNode.innerHTML = "";
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
    form["detect"].value = id;
    let updated = JSON.parse(localSto.getItem("cliente"));
}
function updated(ev) {
    let target = localSto.getItem("cliente");
    target = JSON.parse(target);
    let id = form["detect"].value - 1;
    target.map(e => {
        if(e.id == id){
            e.Nombres= form["nombre"].value;
            e.Apellidos= form["apellido"].value ;
            e.Telefono = form["telefono"].value ;
            e.Nacimiento = form["nacimiento"].value;
            e.Email=  form["email"].value;
            e.Nacionalidad = form["nacionalidad"].value;
            return;
        }
    });
    let tr = document.getElementsByTagName("tr");
    let x = [...tr].filter(e => e.querySelector("#id") )
    x.map(e => {
        console.log(e)
        if(e.childNodes[0].innerHTML == id + 1){
            e.childNodes[1].innerHTML = form["nombre"].value;
            e.childNodes[2].innerHTML = form["apellido"].value;
            e.childNodes[3].innerHTML = form["telefono"].value;
            e.childNodes[4].innerHTML = form["email"].value;
            e.childNodes[5].innerHTML = form["nacimiento"].value;
            e.childNodes[6].innerHTML = form["nacionalidad"].value;
            return;
        }
    })
    
    localSto.setItem("cliente", JSON.stringify(target) );
}
form["guardar"].addEventListener("click", updated)
formCliente["guardar"].addEventListener("click", guardarCliente)