export class Proyectos {
    id?: number;
    nombreP: string;
    descripcion: string;
    img: string;
    constructor(nombreP: string, descripcion: string, img: string) {
        this.nombreP = nombreP;
        this.img = img;
        this.descripcion = descripcion;
    }
}
