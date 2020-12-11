import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/Interface/curso';
import {Imagen} from 'src/app/Interface/imagen';

import {faEllipsisH} from '@fortawesome/free-solid-svg-icons'
import { ListaCursosService } from 'src/app/Service/lista-cursos.service';
@Component({
  selector: 'app-card-curso',
  templateUrl: './card-curso.component.html',
  styleUrls: ['./card-curso.component.css']
})
export class CardCursoComponent implements OnInit {

  constructor( private route:Router) { 
  }
  @Input() curso:Curso;
 // @Output() cursoActivo = new EventEmitter<Curso>();
 faEllipsisH = faEllipsisH;
 imagen:Imagen;
 oscurecer = "oscurecer";
 ngOnInit(): void {
  }
  irCurso(id){
    this.route.navigate(['/ficha-curso', id]);
  }

  gotoModificarTaller(id){
    this.route.navigate(['/modificar_taller', id]);
  }

}
