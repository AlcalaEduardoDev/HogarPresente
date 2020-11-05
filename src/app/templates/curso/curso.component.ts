import { Component, OnInit } from '@angular/core';

import { getVideoId } from 'get-video-id';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  constructor() { }

  pdfSrc ="";
  video : boolean = true;
 
  
  
  videoId = getVideoId('https://www.youtube.com/watch?v=DKlZRKmMdRQ&ab_channel=CodingShiksha').id; 

  ngOnInit(): void {
  }

}
