class Empleado {
    constructor(elNombreEmpleado, laCedula, elDepto, laEdad) {
        this.nombreEmpleado = elNombreEmpleado;
        this.cedula = laCedula;
        this.depto = elDepto;
        this.edad = laEdad;
        this.listaEmpleados = [];
    }

    agregar(unEmpleado) {
        this.listaEmpleados.push(unEmpleado);
    }

    cedulaRepetida(cedula) {
            let existe = false;
            for(let i = 0; i < this.listaEmpleados.length && !esta; i++){
                if(this.listaEmpleados[i].cedula == cedula){
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
        this.listaRubros = [];
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
        this.lista = [];
    }
    borrar(posicion) {
        if(posicion >= 0 && posicion < this.lista.length){
            this.lista.splice(posicion, 1);
        }
    }
}

class Sistema {
    constructor(){

    }
}

 