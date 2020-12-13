import { Component, OnInit, Input,TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/Interface/curso';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { ListaCursosService } from 'src/app/Service/lista-cursos.service';
import { CursoService } from 'src/app/Service/curso.service';
import { TokenService } from 'src/app/Service/token.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-card-curso',
  templateUrl: './card-curso.component.html',
  styleUrls: ['./card-curso.component.css']
})
export class CardCursoComponent implements OnInit {

  constructor(
    private cursoService: CursoService,
    private route: Router,
    private dataToken: TokenService,
    private modalService: BsModalService) { }

  @Input() curso: Curso;

  faEllipsisH = faEllipsisH;
  modalRef: BsModalRef;
  isAdmin: boolean = false;
  isCapacitador: boolean = false;
  oscurecer = "oscurecer";
  dBlock = 'd-block';


  ngOnInit(): void {
    if (this.dataToken.getToken()) {
      if (this.authAdmin()) {
        this.isAdmin = true;
        console.log("El usuario es un administrador")
      } else this.isAdmin = false;
    }
    if (this.dataToken.getToken()) {
      if (this.authCapacitador()) {
        this.isCapacitador = true;
        console.log("El usuario es un capacitador")
      } else this.isCapacitador = false;
    }
  }
  authAdmin(): boolean {
    var roles: string[] = this.dataToken.getAuthorities();
    if (roles.includes('ROLE_ADMIN')) {
      return true;
    } else return false;
  }
  authCapacitador(): boolean {
    var roles: string[] = this.dataToken.getAuthorities();
    if (roles.includes('ROLE_CAPACITADOR')) {
      return true;
    } else return false;
  }
  irCurso(id) {
    this.route.navigate(['/ficha-curso', id]);
  }

  gotoModificarTaller(id) {
    this.route.navigate(['/modificar_taller', id]);
  }

  eliminarTaller(modalConfirmacion: TemplateRef<any>, modalHabilitado:TemplateRef<any>) {
    if (this.curso.habilitado) {
      this.modalRef = this.modalService.show(
        modalHabilitado,
        Object.assign({}, { class: 'gray modal-sm' })
      );  
    }else{
      this.modalRef = this.modalService.show(
        modalConfirmacion,
        Object.assign({}, { class: 'gray modal-sm' })
      );
    }

  }
  delete(id) {
    this.cursoService.delete(id).subscribe(
      data => {
        console.log("curso eliminado correctamente");
        window.location.reload();

      }
    )
  }

  habilitarTaller(id) {
    this.cursoService.habilitar(id, this.curso).subscribe(
      data => {
        window.location.reload();

      }
    )
  }
  
  hide(){
    this.modalRef.hide();    
  }
}
