import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  constructor( private tokenService:TokenService) { }
  isLogged : boolean=false;
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

}
