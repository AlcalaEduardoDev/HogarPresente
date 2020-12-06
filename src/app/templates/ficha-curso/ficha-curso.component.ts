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
    ) { 
      
  }
  
  modalRef: BsModalRef;
  datosCurso : Curso;

  ngOnInit(): void { 
    let cursoId = this.activeRouter.snapshot.paramMap.get('id');
    this.cursoService.findOne(cursoId).subscribe(
      data=>this.datosCurso = data     
    )
  }
  irContenido(){
    this.route.navigate(['/ficha-curso',this.datosCurso.id,'curso']);
  }


  /*verificarLogg( template: TemplateRef<any>){
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
    
  }*/

}
