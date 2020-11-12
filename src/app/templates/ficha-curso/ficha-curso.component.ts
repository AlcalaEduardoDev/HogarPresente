import { Component, Input, OnInit } from '@angular/core';
import { Unidad } from 'src/app/Interface/unidad';
import { ListaCursosService } from 'src/app/Service/lista-cursos.service';
import {UserAlumnoService} from 'src/app/Service/user-alumno.service';
import { Curso } from '../../interface/curso';
import {Router} from '@angular/router';



@Component({
  selector: 'app-ficha-curso',
  templateUrl: './ficha-curso.component.html',
  styleUrls: ['./ficha-curso.component.css']
})
export class FichaCursoComponent implements OnInit {
 
 
  constructor(
    public dataService:ListaCursosService,
    public userAlumnoService:UserAlumnoService, 
    private route:Router
    ) { 

  }
  
  curso : Curso = this.dataService.cursoActivo;
  unidades : Array<Unidad> = this.curso.unidades;
  visibilidad : string = "invisible";
  ngOnInit(): void {
  }

  verificarLogg(){
    if (this.userAlumnoService.loggeado == true){
      this.route.navigate(["/curso"]);
    } else this.visibilidad="visible";
  }

}
