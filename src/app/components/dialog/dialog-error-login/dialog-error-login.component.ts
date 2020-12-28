import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-error-login',
  templateUrl: './dialog-error-login.component.html',
  styleUrls: ['./dialog-error-login.component.css']
})
export class DialogErrorLoginComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:string
  ) { }
  
  ngOnInit(): void {

  }

}
