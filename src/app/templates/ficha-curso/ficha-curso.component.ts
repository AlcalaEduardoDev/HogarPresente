import { Component, OnInit, TemplateRef  } from '@angular/core';
import { Unidad } from 'src/app/Interface/unidad';
import { CursoService } from 'src/app/Service/curso.service';
import {UserService} from 'src/app/Service/user.service';
import { Curso } from '../../interface/curso';
import {Router, ActivatedRoute} from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-ficha-curso',
  templateUrl: './ficha-curso.component.html',
  styleUrls: ['./ficha-curso.component.css']
})
export class FichaCursoComponent implements OnInit {
 
  
  constructor(
    public userAlumnoService:UserService,
    private route:Router,
    private activeRouter:ActivatedRoute,
    private modalService: BsModalService,
    private cursoService : CursoService,
    private userService : UserService
    ) {}
  
  modalRef: BsModalRef;
  datosCurso : Curso;
  nombreCapacitador:string;
  ngOnInit(): void { 
    let cursoId = this.activeRouter.snapshot.paramMap.get('id');
    this.cursoService.findOne(cursoId).subscribe(
      data=>{
        this.datosCurso = data
        this.userService.findOne(this.datosCurso.id_usuario_creador).subscribe(response=>{
        this.nombreCapacitador = response.nombre +' '+ response.apellido;
          })
        }   
    )
  }
  irContenido(){
    this.route.navigate(['/ficha-curso',this.datosCurso.id,'curso']);
  }


  /*
  hide(){
    this.modalRef.hide();
    
  }*/

}
