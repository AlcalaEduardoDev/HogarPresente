import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/Interface/alumno';
import {UserAlumnoService} from 'src/app/Service/user-alumno.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public alumnos: Array<Alumno> = [];

  constructor(private userAlumnoService:UserAlumnoService) { }
  

  ngOnInit(): void {
    this.userAlumnoService
    .findAll()
    .subscribe((response: Array<Alumno>) =>{
      this.alumnos=response;
    }
    )
  }


}
