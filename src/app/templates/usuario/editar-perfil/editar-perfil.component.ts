import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import {Alumno} from '../../../interface/alumno';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  user:Alumno = new Alumno();

  constructor(
    private activatedRoute:ActivatedRoute,
    private dataUser:UserService
  ) { }

  ngOnInit(): void { 
   }

  update(){
    this.dataUser.update(this.user).subscribe(
      e=> console.log('Datos modificados con exito!')
    );
  }
}
