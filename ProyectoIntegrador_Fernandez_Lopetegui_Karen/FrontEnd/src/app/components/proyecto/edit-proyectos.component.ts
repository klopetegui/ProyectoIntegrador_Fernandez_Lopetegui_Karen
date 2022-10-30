import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/app/service/image.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {
  proyectos:Proyectos = null;
  constructor(private proyectoS:ProyectosService , private activatedRouter: ActivatedRoute, private router: Router, public imageService:ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(data => {
      this.proyectos = data;
    }, err => {
      alert("Error al modificar");
      this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void {
    
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectos.img=this.imageService.url;
    this.proyectoS.update(id, this.proyectos).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar");
      this.router.navigate(['']);
    }
    )
  }

  uploadImageP($event:any){
    const id=this.activatedRouter.snapshot.params['id'];
    const name= "imagen_"+id;
    this.imageService.uploadImageProyect($event)
  }

}
