let sistema = new Sistema ();
window.addEventListener("load", inicio);

function inicio() {
    document.getElementById("agregarEmpleado").addEventListener("click", function(){
        agregarEmpleado(sistema);
    });

    document.getElementById("agregarRubro").addEventListener("click", function(){
        agregarRubro(sistema)});

    document.getElementById("agregarOferta").addEventListener("click", function(){
        agregarOferta(sistema)
    });

    document.getElementById("borrarOferta").addEventListener("click", function(){
        borrarOferta(sistema)
    });

    document.getElementById("consultar").addEventListener("click", function(){
        consultar(sistema)});
}

//Datos

function agregarEmpleado(sistema) {
    let formulario = document.getElementById("formAlta");
    if(formulario.reportValidity()){
        let nombreEmpleado = document.getElementById("name").value;
        let departamento = document.getElementById("departamento").value;
        let edad = parseInt(document.getElementById("edad").value);
        let cedula = document.getElementById("cedula").value;
        if(!sistema.cedulaRepetida(cedula)){
			let unEmpleado = new Empleado (nombreEmpleado, cedula, departamento, edad, 0);
			sistema.agregarEmpleado(unEmpleado);
			formulario.reset();
            cargarComboEmpleado(sistema, cedula);
		}else{
			alert("¡Cedula repetida!");
		}
    }
}

function cargarComboEmpleado(sistema, cedula){
    let combo = document.getElementById("empleadoOferta");
    combo.innerHTML = "";
    let datos = sistema.darEmpleados();
    for (let i = 0; i < datos.length; i++) {
        let nodo = document.createElement("option");
        let cont = datos[i].toString();
        let nodoT = document.createTextNode(cont);
        nodo.appendChild(nodoT);
        combo.appendChild(nodo);
        
        nodo.setAttribute("value", datos[i].cedula);
    }
}

function agregarRubro(sistema) {
    let formulario = document.getElementById("formRubro");
    if(formulario.reportValidity()){
        let descripcion = document.getElementById("desc").value;
        let nombreRubro = document.getElementById("nameRubro").value;
        if(!sistema.nombreRepetido(nombreRubro)){
            let unRubro = new Rubro (nombreRubro, descripcion, 0);
            sistema.agregarRubro(unRubro);
            formulario.reset();
            cargarComboRubro(sistema, nombreRubro);
		}else{
			alert("¡Rubro repetido!");
		}  
    }    
}

function cargarComboRubro(sistema, nombreRubro) {
    let combo = document.getElementById("rubroOferta");
    let combo2 = document.getElementById("rubro-consulta");
    combo.innerHTML = "";
    combo2.innerHTML = "";
    let datos = sistema.darRubro();
    for (let i = 0; i < datos.length; i++) {
        let nodo = document.createElement("option");
        let cont = datos[i].toString();
        let nodoT = document.createTextNode(cont);
        nodo.appendChild(nodoT);
        combo.appendChild(nodo);
        
        nodo.setAttribute("value", datos[i].nombreRubro);
    }
    for (let i = 0; i < datos.length; i++) {
        let nodo = document.createElement("option");
        let cont = datos[i].toString();
        let nodoT = document.createTextNode(cont);
        nodo.appendChild(nodoT);
        combo2.appendChild(nodo);
        
        nodo.setAttribute("value", datos[i].nombreRubro);
    }
}

function agregarOferta(sistema) {
    let formulario = document.getElementById("formOferta");
    if(formulario.reportValidity()){
        let cedulaEmpleado = document.getElementById("empleadoOferta").value;
        let nombreRubro = document.getElementById("rubroOferta").value;

        let detalle =  document.getElementById("detalle").value;
        let precio =  parseFloat(document.getElementById("precio").value);

        let empleado = sistema.buscarCedula(cedulaEmpleado);
        let rubro = sistema.buscarNombre(nombreRubro);

        let unaOferta = new Oferta(empleado, rubro, detalle, precio);
        
        sistema.agregarOferta(unaOferta);
        formulario.reset();
        cargarComboOfertas(sistema);
    }
}

function cargarComboOfertas(sistema){
    let combo = document.getElementById("ofertaElegida");
    combo.innerHTML = "";
    let datos = sistema.darOfertas();
    for (let elem of datos){
        let nodo = document.createElement("option");
        let cont = elem.rubro.nombreRubro+" / "+elem.detalle+" / "+elem.precio+" / "+elem.empleado.nombreEmpleado;
        let nodoT = document.createTextNode(cont);
        nodo.appendChild(nodoT);
        combo.appendChild(nodo)
        ;
    }
}

function borrarOferta(sistema) {
    let combo = document.getElementById("ofertaElegida");
    sistema.borrar(combo.selectedIndex);
    combo.remove(combo.selectedIndex);
    
}

//Consultas

function consultar(sistema){
    datos(sistema);
    cantidadOfertas(sistema);
    tablaEmpleado(sistema);
}

function datos(sistema){
    let datos = sistema.darOfertas();
    let seleccionado = document.getElementById("rubro-consulta").value;
    let nombre = document.getElementById("parrafoNombreRubro");
    let promedio = document.getElementById("parrafoPromedio");
    let cont = 0;
    let suma = 0;
    for (let elem of datos){
        if (elem.rubro.nombreRubro == seleccionado){
              nombre.innerHTML = elem.rubro.nombreRubro;
            cont++;
            suma += elem.precio;
            promedio.innerHTML = suma/cont;
        }
    }
}


function radioChecked(sistema) {
    let radioPrecio = document.getElementById("radioPrecio");
    let radioDepto = document.getElementById("radioDepto");
    if (radioPrecio.checked){
        sistema.ordenarPorPrecio();
    } else if (radioDepto.checked){
        sistema.ordenarPorDepto();
    }
}

function cantidadOfertas(sistema) {
    let rubros = sistema.darRubro();
    let ofertas = sistema.darOfertas();
    let listaSinOfertas = document.getElementById("lista-sin-ofertas");
    listaSinOfertas.innerHTML = "";
    for (let i = 0; i < rubros.length; i++){
        for (let j = 0; j < ofertas.length; j++){
          if (rubros[i].nombreRubro == ofertas[j].rubro.nombreRubro){

              
            }else{
                let nodo = document.createElement("LI");
                let cont = rubros[i].toString();
                let  textnode = document.createTextNode(cont);
                nodo.appendChild(textnode);
                listaSinOfertas.appendChild(nodo);
            }
        }
    }
}

function tablaEmpleado(sistema){
    let  tabla = document.getElementById("tablaEmpleado");
    let empleados = sistema.darEmpleados();
    for(elem of empleados){
        let  fila = tabla.insertRow();
        let celdaNombre = fila.insertCell();
        celdaNombre.innerHTML= elem.nombreEmpleado;
        let celdaCedula = fila.insertCell();
        celdaCedula.innerHTML= elem.cedula;
        let celdaDepartamento = fila.insertCell();
        celdaDepartamento.innerHTML= elem.depto;
        let celdaEdad = fila.insertCell();
        celdaEdad.innerHTML= elem.edad;
        let celdaOfertas = fila.insertCell();
        celdaOfertas.innerHTML= sistema.cantidadOfertas(elem);
    }

}

