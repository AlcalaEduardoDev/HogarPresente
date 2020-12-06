import { Component, OnInit } from '@angular/core';
import { NuevoCurso } from 'src/app/models/nuevo-curso';
import { CursoService } from 'src/app/Service/curso.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-creador-curso',
  templateUrl: './creador-curso.component.html',
  styleUrls: ['./creador-curso.component.css']
})
export class CreadorCursoComponent implements OnInit {

  constructor(
    private cursoService : CursoService,
    private tokenService : TokenService
    ) { }

  ngOnInit(): void {
    this.idAdministrador = this.tokenService.getId();
  }
  imagen='';
  titulo ='';
  precio: number;
  descripcion='';
  categoria ='';
  idAdministrador;


  onCreate(){
    const nuevoCurso = new NuevoCurso(this.titulo, this.descripcion, this.categoria,this.precio, this.imagen, this.idAdministrador);
    this.cursoService.nuevo(nuevoCurso).subscribe(
      data => {
        console.log("Curso creado correctamente")
      }
    )
  }

}
