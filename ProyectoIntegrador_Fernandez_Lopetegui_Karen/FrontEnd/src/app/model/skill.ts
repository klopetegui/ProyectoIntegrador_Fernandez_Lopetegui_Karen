import { NodeCompatibleEventEmitter } from "rxjs/internal/observable/fromEvent";

export class Skill {
    id:number;
    nombre:string;
    porcentaje:number;

    constructor(nombre:string, porcentaje:number){
        this.nombre=nombre;
        this.porcentaje=porcentaje;
    }

}
