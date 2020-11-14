import { Component, Input, OnInit, TemplateRef  } from '@angular/core';
import { Unidad } from 'src/app/Interface/unidad';
import { ListaCursosService } from 'src/app/Service/lista-cursos.service';
import {UserAlumnoService} from 'src/app/Service/user-alumno.service';
import { Curso } from '../../interface/curso';
import {Router} from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-ficha-curso',
  templateUrl: './ficha-curso.component.html',
  styleUrls: ['./ficha-curso.component.css']
})
export class FichaCursoComponent implements OnInit {
 
 
  constructor(
    public dataService:ListaCursosService,
    public userAlumnoService:UserAlumnoService, 
    private route:Router,
    private modalService: BsModalService
    ) { 

  }
  
  modalRef: BsModalRef;
  curso : Curso = this.dataService.cursoActivo;
  unidades : Array<Unidad> = this.curso.unidades;
  visibilidad = true;


  ngOnInit(): void { }

  verificarLogg( template: TemplateRef<any>){
    if (this.userAlumnoService.loggeado == true){
      this.route.navigate(["/curso"]);
    } else {
      this.modalRef = this.modalService.show(
        template,
        Object.assign({}, { class: 'gray modal-sm' })
      );  
    }
    
  }

  hide(){
    this.modalRef.hide();
  }

}
