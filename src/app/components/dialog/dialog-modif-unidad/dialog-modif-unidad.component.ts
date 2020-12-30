import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Unidad } from 'src/app/Interface/unidad';
import { UnidadService } from 'src/app/Service/unidad-service.service';

@Component({
  selector: 'app-dialog-modif-unidad',
  templateUrl: './dialog-modif-unidad.component.html',
  styleUrls: ['./dialog-modif-unidad.component.css']
})
export class DialogModifUnidadComponent implements OnInit {
  tituloUnidad:string ="";
  descripcionUnidad:string ="";


  constructor(
    @Inject(MAT_DIALOG_DATA) public data:Unidad,
    public dialogRef: MatDialogRef<DialogModifUnidadComponent>,
    private unidadService : UnidadService
    ) { }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onUpdate(){
    if (this.tituloUnidad != ""){
      this.unidadService.updateNombre(this.data.id, this.tituloUnidad).subscribe(
        data => {
          
      })
    }
    if (this.descripcionUnidad != "") {
      this.unidadService.updateDescripcion(this.data.id,this.descripcionUnidad).subscribe(
        data=>{
          
        }
      );
      window.location.reload();
    }
    //window.location.reload();
  }

}
