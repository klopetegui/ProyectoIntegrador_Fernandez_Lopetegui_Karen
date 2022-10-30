import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/app/service/image.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  constructor(private proyectosS: ProyectosService, private router: Router, public imageService:ImageService,private activatedRouter: ActivatedRoute) { }
  nombreP: string;
  descripcion: string;
  img :string;
  ngOnInit(): void {
  }

  onCreate(): void {
  this.img=this.imageService.url;
    const proyectos = new Proyectos(this.nombreP, this.descripcion,this.img);
    
    this.proyectosS.save(proyectos).subscribe(data => {
      alert("Proyecto añadido");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']); 
    }
    )
  }

  uploadImageP($event:any){
    const id=this.activatedRouter.snapshot.params['id'];
    const name= "photo_"+id;
    this.imageService.uploadImageProyect($event)
  }

  

}
