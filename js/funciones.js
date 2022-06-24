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

    document.getElementById("consultar").addEventListener("click", consultar);
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
			let unEmpleado = new Empleado (nombreEmpleado, cedula, departamento, edad);
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
    for (let elem of datos) {
        let nodo = document.createElement("option");
        let cont = elem.toString();
        let nodoT = document.createTextNode(cont);
        nodo.appendChild(nodoT);
        combo.appendChild(nodo);

        nodo.setAttribute("value", cedula);
    }
}

function agregarRubro(sistema) {
    let formulario = document.getElementById("formRubro");
    if(formulario.reportValidity()){
        let descripcion = document.getElementById("desc").value;
        let nombreRubro = document.getElementById("nameRubro").value;
        if(!sistema.nombreRepetido(nombreRubro)){
            let unRubro = new Rubro (nombreRubro, descripcion);
            sistema.agregarRubro(unRubro);
            formulario.reset();
            cargarComboRubroOferta(sistema, nombreRubro);
            cargarComboRubroConsulta(sistema, nombreRubro)
		}else{
			alert("¡Rubro repetido!");
		}  
    }    
}

function cargarComboRubroOferta(sistema, nombreRubro) {
    let combo = document.getElementById("rubroOferta");
    let combo2 = document.getElementById("rubro-consulta");
    combo.innerHTML = "";
    let datos = sistema.darRubro();
    for (let elem of datos) {
        let nodo = document.createElement("option");
        let cont = elem;
        let nodoT = document.createTextNode(cont);
        nodo.appendChild(nodoT);
        combo.appendChild(nodo);

        nodo.setAttribute("value", nombreRubro);
    }
    for (let elem of datos) {
        let nodo = document.createElement("option");
        let cont = elem;
        let nodoT = document.createTextNode(cont);
        nodo.appendChild(nodoT);
        combo2.appendChild(nodo);

        nodo.setAttribute("value", nombreRubro);
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
        cargarComboOfertas(sistema)
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

function radioChecked(sistema) {
    let radioPrecio = document.getElementById("radioPrecio");
    let radioDepto = document.getElementById("radioDepto");
    if (radioPrecio.checked){
        sistema.ordenarPorPrecio();
    } else if (radioDepto.checked){
        sistema.ordenarPorDepto();
    }
}



//Consultas

function consultar() {
    let formulario = document.getElementById("elegirRubro");
    if(formulario.reportValidity()){
        let consultarRubro = document.getElementById("rubroConsulta").value;
    }
}


