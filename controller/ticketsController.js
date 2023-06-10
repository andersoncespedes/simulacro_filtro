form_ticket["rutas"].addEventListener("click", function(){
    let id = this.value;
    let rutas = JSON.parse( localSto.getItem("rutas"));
    rutas.find((e) => {
        if(e.id == id){
            let iva = e.valor * 0.16;
            let airTasa = e.valor * 0.04;
            form_ticket["precio"].value = e.valor;
            form_ticket["iva"].value = parseFloat(iva).toFixed(2);
            form_ticket["aeropuerto"].value = parseFloat(airTasa).toFixed(2);
            let suma = iva +airTasa+ e.valor
            form_ticket["total"].value =  parseFloat(suma).toFixed(2);
            form_ticket["puntos"].value = e.puntos;
            return;
        }
    })
})
function guardar(ev){
   let id = form_ticket["cliente"].value;
   console.log(id);
   let json = JSON.parse( localSto.getItem("cliente"));
   json.find(e => {
    if(e.id == id){
        e.puntos = parseInt(e.puntos) + parseInt(form_ticket["puntos"].value);
        return;
    }
   })
   localSto.setItem("cliente", JSON.stringify(json));
}
form_ticket["guardar"].addEventListener("click", guardar)