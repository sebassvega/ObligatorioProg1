class Empleado {
    constructor(elNombreEmpleado, laCedula, elDepto, laEdad, laOferta) {
        this.nombreEmpleado = elNombreEmpleado;
        this.cedula = laCedula;
        this.depto = elDepto;
        this.edad = laEdad;
        this.oferta = laOferta
    }
    toString(){
        return this.nombreEmpleado+ ". CI: "+this.cedula;
    }
}

class Rubro {
    constructor(elNombreRubro, laDescripcion, elContador) {
        this.nombreRubro = elNombreRubro;
        this.descripcion = laDescripcion;
        this.contador = elContador;
    }
    toString() {
        return this.nombreRubro;
    }
}

class Oferta {
    constructor(elNombreEmpleado, elNombreRubro, elDetalle, elPrecio) {
        this.empleado = elNombreEmpleado;
        this.rubro = elNombreRubro;
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

    ordenarPorPrecio(){
        this.listaOfetas.sort();
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

    nombreRepetido(nombreRubro) {
        let existe = false;
        for(let i = 0; i < this.listaRubros.length && !existe; i++){
            if(this.listaRubros[i].nombreRubro == nombreRubro){
                existe = true;
            }
        }
        return existe;
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
    
    buscarCedula(cedula) {
        let esta = false;
        let empleado = sistema.listaEmpleados[0];
        for (let i = 1; i < this.listaEmpleados.length && !esta; i++){
            if(this.listaEmpleados[i].cedula == cedula){
                esta = true;
                empleado = this.listaEmpleados[i];
            }
        }
        return empleado;
    }
    
    buscarNombre(nombre){
        let esta = false;
        let rubro = sistema.listaRubros[0];
        for (let i = 1; i < this.listaRubros.length && !esta; i++){
            if(this.listaRubros[i].nombreRubro == nombre) {
                esta = true;
                rubro = this.listaRubros[i];
            }
        }
        return rubro;
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
    cantidadOfertas(empleado){
            let cantidad = empleado.oferta;
            for (let j = 0; j < this.listaOfertas.length; j++){
                if (this.listaOfertas[j].empleado.nombreEmpleado == empleado.nombreEmpleado){
                    cantidad += 1;
                }
            }
        return cantidad;
    }
}



    

 