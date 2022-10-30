import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-newt-skill',
  templateUrl: './newt-skill.component.html',
  styleUrls: ['./newt-skill.component.css']
})
export class NewtSkillComponent implements OnInit {
  nombre:string;
  porcentaje:number;
  constructor(private s_Skill: SkillService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {

    const skill = new Skill(this.nombre, this.porcentaje);
    this.s_Skill.save(skill).subscribe(data => {
      alert("Skill añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }
}
