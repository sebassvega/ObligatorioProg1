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
        let edad = document.getElementById("edad").value;

        let cedula = document.getElementById("cedula").value;
        if(!sistema.cedulaRepetida(cedula)){
			let unEmpleado = new Empleado (nombreEmpleado, cedula, departamento, edad);
			sistema.agregarEmpleado(unEmpleado);
			formulario.reset();
            cargarComboEmpleado(sistema);
		}else{
			alert("¡Cedula repetida!");
		}
    }
}

function agregarRubro(sistema) {
    let formulario = document.getElementById("formRubro");
    if(formulario.reportValidity()){
        let nombreRubro = document.getElementById("nameRubro").value;
        let descripcion = document.getElementById("desc").value;
        let unRubro = new Rubro (nombreRubro, descripcion);
        sistema.agregarRubro(unRubro);
        formulario.reset();
        cargarComboRubro(sistema);
    }    
}

function agregarOferta(sistema) {
    let formulario = document.getElementById("formOferta");
    if(formulario.reportValidity()){
        let elegirEmpleado = document.getElementById("empleadoOferta").value;
        let elegirRubro = document.getElementById("rubroOferta").value;
        let detalle =  document.getElementById("detalle").value;
        let precio =  document.getElementById("precio").value;
        let unaOferta = new Oferta(elegirEmpleado, elegirRubro, detalle, precio);
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
        let cont = elem.nombreRubro+" / "+elem.detalle+" / "+elem.precio+" / "+elem.nombreEmpleado;
        let nodoT = document.createTextNode(cont);
        nodo.appendChild(nodoT);
        combo.appendChild(nodo);
    }
}

function borrarOferta(sistema) {
    let combo = document.getElementById("ofertaElegida");
    combo.remove(combo.selectedIndex);
    sistema.borrar(combo.selectedIndex);
}

function cargarComboEmpleado(sistema){
    let combo = document.getElementById("empleadoOferta");
    combo.innerHTML = "";
    let datos = sistema.darEmpleados();
    for (let elem of datos) {
        let nodo = document.createElement("option");
        let cont = elem.nombreEmpleado+". CI: "+elem.cedula;
        let nodoT = document.createTextNode(cont);
        nodo.appendChild(nodoT);
        combo.appendChild(nodo);
    }
}

function cargarComboRubro(sistema) {
    let combo = document.getElementById("rubroOferta");
    combo.innerHTML = "";
    let datos = sistema.darRubro();
    for (let elem of datos) {
        let nodo = document.createElement("option");
        let cont = elem.nombreRubro;
        let nodoT = document.createTextNode(cont);
        nodo.appendChild(nodoT);
        combo.appendChild(nodo);
    }
}

//Consultas

function consultar() {
    let formulario = document.getElementById("elegirRubro");
    if(formulario.reportValidity()){
        let consultarRubro = document.getElementById("rubroConsulta").value;
    }
}


