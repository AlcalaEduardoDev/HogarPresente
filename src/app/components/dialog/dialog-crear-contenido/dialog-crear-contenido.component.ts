import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NuevoContenido } from 'src/app/models/nuevo-contenido';
import { ContenidosService } from 'src/app/Service/contenidos.service';

@Component({
  selector: 'app-dialog-crear-contenido',
  templateUrl: './dialog-crear-contenido.component.html',
  styleUrls: ['./dialog-crear-contenido.component.css']
})
export class DialogCrearContenidoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public id : number,
    public dialogRef: MatDialogRef<DialogCrearContenidoComponent>,
    private contenidoService: ContenidosService
  ) { }

  tituloContenido: string;
  descripcionContenido: string;
  enlaceContenido: string;

  ngOnInit(): void {
  }

  onCreate():void{
    const newContent = new NuevoContenido(this.tituloContenido, this.descripcionContenido, this.enlaceContenido, this.id)
    this.contenidoService.nuevo(newContent).subscribe(
      data=>{
        window.location.reload();
      }
    )
  }

  onNoClick(): void{
    this.dialogRef.close();
  }
}
