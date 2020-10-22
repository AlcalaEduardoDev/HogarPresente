import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  constructor() { }
  filter="";
  public cursos:Array<any>=[
    {img:"assets/hogar.jpg",
    nom:"Edu",
    tittle:"CEO & Founder",
    text:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
    },
    {
    img:"assets/hogar.jpg",
    nom:"John Doe",
    tittle:"CEO & Founder",
    text:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
    },
    {img:"assets/hogar.jpg",
    nom:"John Doe",
    tittle:"CEO & Founder",
    text:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
    },
    {img:"assets/hogar.jpg",
    nom:"John Doe",
    tittle:"CEO & Founder",
    text:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
    },
    {img:"assets/hogar.jpg",
    nom:"John Doe",
    tittle:"CEO & Founder",
    text:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
    },
    {img:"assets/hogar.jpg",
    nom:"John Doe",
    tittle:"CEO & Founder",
    text:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
    },
    {img:"assets/hogar.jpg",
    nom:"John Doe",
    tittle:"CEO & Founder",
    text:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
    },
    {img:"assets/hogar.jpg",
    nom:"John Doe",
    tittle:"CEO & Founder",
    text:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
    },
    {img:"assets/hogar.jpg",
    nom:"John Doe",
    tittle:"CEO & Founder",
    text:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
    },
    {img:"assets/hogar.jpg",
    nom:"John Doe",
    tittle:"CEO & Founder",
    text:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
    },
    {img:"assets/hogar.jpg",
    nom:"John Doe",
    tittle:"CEO & Founder",
    text:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
    },
    {img:"assets/hogar.jpg",
    nom:"John Doe",
    tittle:"CEO & Founder",
    text:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
    }
  ];

  ngOnInit(): void {
  }

}
