import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-curso',
  templateUrl: './card-curso.component.html',
  styleUrls: ['./card-curso.component.css']
})
export class CardCursoComponent implements OnInit {

  constructor() { }
  @Input() curso:any;
  ngOnInit(): void {
  }

}
