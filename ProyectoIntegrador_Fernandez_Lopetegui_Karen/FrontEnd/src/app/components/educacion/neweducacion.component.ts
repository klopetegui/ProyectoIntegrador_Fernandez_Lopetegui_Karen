import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {

  constructor(private educacionS: EducacionService, private router: Router) { }
  nombreE: string;
  descripcionE: string;
  ngOnInit(): void {
  }

  onCreate(): void {

    const expe = new Educacion(this.nombreE, this.descripcionE);
    this.educacionS.save(expe).subscribe(data => {
      alert("Educacion añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }


}
