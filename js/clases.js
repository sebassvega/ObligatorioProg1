class Empleado {
    constructor(elNombreEmpleado, laCedula, elDepto, laEdad) {
        this.nombreEmpleado = elNombreEmpleado;
        this.cedula = laCedula;
        this.depto = elDepto;
        this.edad = laEdad;
    }

    agregar(unEmpleado) {
        Sistema.listaEmpleados.push(unEmpleado);
    }

    darEmpleados(){
        return Sistema.listaEmpleados;
    }

    cedulaRepetida(cedula) {
            let existe = false;
            for(let i = 0; i < Sistema.listaEmpleados.length && !esta; i++){
                if(Sistema.listaEmpleados[i].cedula == cedula){
                    existe = true;
                }
            }
            return existe;
        }
}
class Rubro {
    constructor(elNombreRubro, laDescripcion) {
        this.nombreRubro = elNombreRubro;
        this.descripcion = laDescripcion;
    }

    agregar(unRubro) {
        this.listaRubros.push(unRubro);
    }

    
}

class Oferta {
    constructor(elNombreEmpleado, elNombreRubro, elDetalle, elPrecio) {
        this.nombre = elNombreEmpleado;
        this.nombre = elNombreRubro;
        this.detalle = elDetalle;
        this.precio = elPrecio;
    }

    agregar(unaOferta) {
        Sistema.listaEOfertas.push(unaOferta);
    }

    borrar(posicion) {
        if(posicion >= 0 && posicion < this.lista.length){
            this.lista.splice(posicion, 1);
        }
    }
}

class Sistema {
    constructor(){
        this.listaEmpleados = [];
        this.listaRubros = [];
        this.listaOfertas = [];
    }
}

 