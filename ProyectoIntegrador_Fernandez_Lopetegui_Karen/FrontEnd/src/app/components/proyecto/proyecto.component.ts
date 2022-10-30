import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectos: Proyectos[] = [];
  constructor(public proyectosService: ProyectosService, private tokenService: TokenService) { }
  isLogged=false;
  ngOnInit(): void {
    this.cargarProyectos();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  cargarProyectos() {
    this.proyectosService.lista().subscribe(data => { this.proyectos = data; })
  }
  delete(id?: number) {
    if (id != undefined) {
      this.proyectosService.delete(id).subscribe(data => {
        this.cargarProyectos();
      }, err => {
        alert("No se pudo borrar el proyecto");
      }
      )
    }
  }
  }


