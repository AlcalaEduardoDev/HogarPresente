import { Component, OnInit, Input,TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/Interface/curso';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { ListaCursosService } from 'src/app/Service/lista-cursos.service';
import { CursoService } from 'src/app/Service/curso.service';
import { TokenService } from 'src/app/Service/token.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MatDialog } from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../../dialog/confirm-dialog/confirm-dialog.component'


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
    private modalService: BsModalService,
    private dialog: MatDialog) { }


  @Input() curso: Curso;

  estado:string='';  //es un string que cambia segun si el curso esta habilitado o deshabilitado
  faEllipsisH = faEllipsisH;
  modalRef: BsModalRef;
  isAdmin: boolean = false;
  isCapacitador: boolean = false;
  oscurecer = "oscurecer";
  noOscurecer = "noOscurecer";
  dBlock = 'd-block';
  habilitado : boolean;


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
    this.habilitado = this.curso.habilitado;
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
  modalHabilitar(e, modalConfirmacionHabilitar: TemplateRef<any>){
    if(this.curso.habilitado){
      this.estado = "deshabilitar"
    } else this.estado = "habilitar"
    this.modalRef = this.modalService.show(
      modalConfirmacionHabilitar,
      Object.assign({}, { class: 'gray modal-sm' })
    ); 
  }
  habilitarTaller() {
    this.cursoService.habilitar(this.curso.id , this.curso).subscribe(
      data => {
        window.location.reload();
      }
    )
  }
  deshabilitarTaller(e){
    if (this.curso.habilitado) {
    e.source.habilitado = true;      
    }else e.source.habilitado = false;
    this.modalRef.hide();
  }
  
  hide(){
    this.modalRef.hide();    
  }

  change(e) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
      dialogRef.afterClosed().subscribe(response => {
        if (response) {
           this.habilitado = !this.habilitado;
           this.habilitarTaller();
        } else {
          e.source.checked = this.habilitado;
        }
      })
  }
}
