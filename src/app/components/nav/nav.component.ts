import { Component, OnInit, Input } from '@angular/core';
import { Unidad } from '../../Interface/unidad';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  @Input() unidades:Array<Unidad>;
  active = 'top';
  i : number =0;
  ngOnInit(): void {
    console.log(this.unidades);
  }

}
