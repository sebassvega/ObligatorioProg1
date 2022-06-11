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
    }    
}

function agregarOferta() {
    let formulario = document.getElementById("formOferta");
    if(formulario.reportValidity()){
        let elegirEmpleado = document.getElementById("elegirEmpleado").value;
        let elegirRubro = document.getElementById("elegirRubro").value;
        let detalle =  document.getElementById("detalle").value;
        let precio =  document.getElementById("precio");
    }
}

function borrarOferta() {
    let formulario = document.getElementById("formBaja");
    if(formulario.reportValidity()){
        let laOferta = document.getElementById("ofertaElegida").selectedIndex;
        Oferta.borrar(laOferta);
    }
}

//Consultas

function consultar() {
    let formulario = document.getElementById("elegirRubro");
    if(formulario.reportValidity()){
        let consultarRubro = document.getElementById("rubroConsulta").value;
    }
}


