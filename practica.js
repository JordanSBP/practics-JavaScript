class Evento{
    constructor(id, nombre, cantidadAsistentes, precioPorAsistente){
        this.id = id;
        this.nombre = nombre; 
        this.cantidadAsistentes = cantidadAsistentes;
        this.precioPorAsistente = precioPorAsistente;
    }
    enlace(){
        return `/Evento/${this.id}`;
    }
    dineroTotalRecaudado(){
        return this.cantidadAsistentes * this.precioPorAsistente;
    }
}

var Evento1 = new Evento(2,"e1",10,6);
console.log(Evento1.enlace());
console.log(Evento1.dineroTotalRecaudado());