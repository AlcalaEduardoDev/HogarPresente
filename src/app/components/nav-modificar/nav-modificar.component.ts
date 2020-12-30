import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UnidadService } from 'src/app/Service/unidad-service.service';
import { Unidad } from '../../Interface/unidad';
import { DialogModifUnidadComponent } from '../../components/dialog/dialog-modif-unidad/dialog-modif-unidad.component'
import { DialogDeleteUnidadComponent } from '../../components/dialog/dialog-delete-unidad/dialog-delete-unidad.component'


@Component({
  selector: 'app-nav-modificar',
  templateUrl: './nav-modificar.component.html',
  styleUrls: ['./nav-modificar.component.css']
})
export class NavModificarComponent implements OnInit {

  @Input() unidades:Array<Unidad>;
  constructor(
    private unidadService : UnidadService,    
    private modalService: BsModalService,
    private dialog: MatDialog
  ) {}

   ngOnInit(): void {
     console.log(this.unidades);
    }
    
  i : number =0;
  unidadId;
  active:number;
  nombreUnidad : string;
  descripcionUnidad : string;
  textareaNombreUnidad: boolean = false;
  textareaDescripcionUnidad : boolean = false;
  modalRef:BsModalRef;

  activarTextareaNombreUnidad(){
    if(this.textareaNombreUnidad){
      this.textareaNombreUnidad=false
    } else this.textareaNombreUnidad = true
  }
  activarTextareaDescripcionUnidad(){
    if (this.textareaDescripcionUnidad){
      this.textareaDescripcionUnidad = false
    } else this.textareaDescripcionUnidad = true
  }
  updateNombreUnidad(id){
    this.unidadService.updateNombre(id, this.nombreUnidad).subscribe(
      data=>{
        window.location.reload();
      }
    )
  }
  updateDescripcionUnidad(id){
    this.unidadService.updateDescripcion(id, this.descripcionUnidad).subscribe(
      data=>{
        window.location.reload();
      }
    )
  }
  activarModal(unidad : Unidad): void{
    const dialogRef = this.dialog.open(DialogModifUnidadComponent,{
      data: unidad
    })
  }
  activarModalEliminar(id){
    const dialogRef = this.dialog.open(DialogDeleteUnidadComponent);
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.unidadId = id;
        this.onDelete();
      } else {
        dialogRef.close();
      }
    })
  }
  onDelete(): void{
    this.unidadService.delete(this.unidadId).subscribe(
      data=> window.location.reload()
    )
  }
}
