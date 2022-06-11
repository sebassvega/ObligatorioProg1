window.addEventListener("load", inicio);
let unEmpleado = new Empleado ();

function inicio() {
    document.getElementById("agregarEmpleado").addEventListener("click", agregarEmpleado);

    document.getElementById("agregarRubro").addEventListener("click", agregarRubro);

    document.getElementById("agregarOferta").addEventListener("click", agregarOferta);

    document.getElementById("borrarOferta").addEventListener("click", borrarOferta);

    document.getElementById("consultar").addEventListener("click", consultar);
}

//Datos

function agregarEmpleado() {
    let formulario = document.getElementById("formAlta");
    if(formulario.reportValidity()){
        let nombreEmpleado = document.getElementById("name").value;
        let departamento = document.getElementById("departamento").value;
        let edad = document.getElementById("edad").value;

        let cedula = document.getElementById("cedula").value;
        if(!Empleado.cedulaRepetida(cedula)){
			let unEmpleado = new Empleado (nombreEmpleado, cedula, departamento, edad);
			Empleado.agregar(unEmpleado);
			formulario.reset();
            actualizar();
		}else{
			alert("¡Cedula repetida!");
		}
    }
}

function agregarRubro() {
    let formulario = document.getElementById("formRubro");
    if(formulario.reportValidity()){
        let nombreRubro = document.getElementById("nameRubro").value;
        let descripcion = document.getElementById("desc").value;
        let unRubro = new Rubro (nombreRubro, descripcion);
        Rubro.agregar(unRubro);
        formulario.reset();
        actualizar();
    }    
}

function agregarOferta() {
    let formulario = document.getElementById("formOferta");
    if(formulario.reportValidity()){
        let elegirEmpleado = document.getElementById("elegirEmpleado").value;
        let elegirRubro = document.getElementById("elegirRubro").value;
        let detalle =  document.getElementById("detalle").value;
        let precio =  document.getElementById("precio");
        let unaOferta = new Oferta(elegirEmpleado, elegirRubro, detalle, precio);
        Oferta.agregar(unaOferta);
    }
}

function borrarOferta() {
    let formulario = document.getElementById("formBaja");
    if(formulario.reportValidity()){
        let laOferta = document.getElementById("ofertaElegida").selectedIndex;
        Oferta.borrar(laOferta);
    }
}

function actualizar() {
    cargarCombo();
}

function cargarComboEmpleado(){
    let combo = document.getElementById("empleadoOferta");
    combo.innerHTML = "";
    let datos = Empleado.darEmpleados();
    for (let elem of datos) {
        let nodo = document.createElement("option");
        let cont = elem.nombreEmpleado;
        let nodoT = document.createTextNode(cont);
        nodo.appendChild(nodoT);
        combo.appendChild(nodo);
    }
}

function cargarComboRubro() {
    let combo = document.getElementById("rubroOferta");
    combo.innerHTML = "";
    let datos = Rubro.darRubro();
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


