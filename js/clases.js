class Empleado {
    constructor(elNombreEmpleado, laCedula, elDepto, laEdad) {
        this.nombreEmpleado = elNombreEmpleado;
        this.cedula = laCedula;
        this.depto = elDepto;
        this.edad = laEdad;
    }
}

class Rubro {
    constructor(elNombreRubro, laDescripcion) {
        this.nombreRubro = elNombreRubro;
        this.descripcion = laDescripcion;
    }
  
}

class Oferta {
    constructor(elNombreEmpleado, elNombreRubro, elDetalle, elPrecio) {
        this.nombreEmpleado = elNombreEmpleado;
        this.nombreRubro = elNombreRubro;
        this.detalle = elDetalle;
        this.precio = elPrecio;
    }
}

class Sistema {
    constructor(){
        this.listaEmpleados = [];
        this.listaRubros = [];
        this.listaOfertas = [];
    }

    darEmpleados(){
        return this.listaEmpleados;
    }

    darRubro(){
        return this.listaRubros;
    }

    darOfertas(){
        return this.listaOfertas;
    }

    cedulaRepetida(cedula) {
        let existe = false;
        for(let i = 0; i < this.listaEmpleados.length && !existe; i++){
            if(this.listaEmpleados[i].cedula == cedula){
                existe = true;
            }
        }
        return existe;
    }

    agregarEmpleado(unEmpleado) {
        this.listaEmpleados.push(unEmpleado);
    }


    agregarOferta(unaOferta) {
        this.listaOfertas.push(unaOferta);
    }

    agregarRubro(unRubro) {
        this.listaRubros.push(unRubro);
    }

    borrar(posicion) {
        if(posicion >= 0 && posicion < this.listaOfertas.length){
            this.listaOfertas.splice(posicion, 1);
        }
    }
}

    

 