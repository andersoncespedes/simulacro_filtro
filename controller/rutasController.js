
function guardarRutas(ev){
    let tr = document.createElement("tr");
    let id = document.createElement("td");
    let arr = ["nombre_ticket", "valor", "ciudad_origen", "ciudad_destino", "puntos"]
    let obj = {};
    let nuevo = JSON.parse(localSto.getItem("rutas") );
    id.innerHTML = nuevo.length + 1;
    obj["id"] = nuevo.length;
    id.setAttribute("data-id" , nuevo.length + 1)
    tr.appendChild(id);
    [...formRutas].map((e,i) => {
        if(i < [...formRutas].length - 1){
            obj[arr[i]] = e.value;

            let td = document.createElement("td");
            td.setAttribute(`data-${e.name}` , e.value.toString())
            td.innerHTML = e.value;
            tr.appendChild(td);
        }
    });
    nuevo.push(obj);
    localSto.setItem("rutas", JSON.stringify(nuevo));
    let btn = document.createElement("td");
    btn.innerHTML = `<button type="button" class = "btn btn-danger" onclick = "eliminarRutas(this)">ELiminar</button>`;
    form_ticket["rutas"].innerHTML += `<option value="${obj["id"]}"> ${[obj["ciudad_origen"], obj["ciudad_destino"]].join("-")}</option>`;
    tr.appendChild(btn);
    console.log(JSON.parse( localSto["rutas"]))
    tableRutas.appendChild(tr);
    count++;
    formRutas.reset();
}
function eliminarRutas(ev){
    let elemento = ev;
    let id =  elemento.parentNode.parentNode.children[0].innerHTML;
    let table =  elemento.parentNode.parentNode.parentNode;
    let nuevo = JSON.parse(localSto.getItem("rutas") );
    let x = nuevo.filter((e, i) => e.id != id - 1);
    localSto.setItem("rutas", JSON.stringify(x));
    elemento.parentNode.parentNode.innerHTML = "";
}
formRutas["guardar"].addEventListener("click", guardarRutas)