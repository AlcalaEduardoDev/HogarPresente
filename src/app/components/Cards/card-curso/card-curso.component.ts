import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/Interface/curso';
import { ListaCursosService } from 'src/app/Service/lista-cursos.service';

@Component({
  selector: 'app-card-curso',
  templateUrl: './card-curso.component.html',
  styleUrls: ['./card-curso.component.css']
})
export class CardCursoComponent implements OnInit {

  constructor(private dataService:ListaCursosService, private route:Router) { }
  @Input() curso:Curso;
 // @Output() cursoActivo = new EventEmitter<Curso>();

  

  ngOnInit(): void {
  }
  irCurso(){
    this.dataService.cursoActivo = this.curso;
    console.log(this.dataService.cursoActivo);
    this.route.navigate(['/ficha-curso']);
  }

}
