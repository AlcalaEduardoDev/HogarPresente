import { Component, Input, OnInit } from '@angular/core';
import { Unidad } from 'src/app/Interface/unidad';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit {

  constructor() { }
  @Input() unidad:any;
  ngOnInit(): void {
  }
}
