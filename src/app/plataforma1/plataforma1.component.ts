import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-plataforma1',
  templateUrl: './plataforma1.component.html',
  styleUrls: ['./plataforma1.component.css']
})
export class Plataforma1Component implements OnInit{
  filterpost='';
  posts =[
    {
      id:1,
      titulo:"Deberes",
      fecha:"12f3"
    },
    {
      id:2,
      titulo:"notas",
      fecha:"123"
    },
    {
      id:3,
      titulo:"carreras",
      fecha:"123"
    },
    {
      id:4,
      titulo:"asd",
      fecha:"123"
    },
    {
      id:5,
      titulo:"dwadw",
      fecha:"123"
    },
  ]
  
  constructor(){

  }
  ngOnInit(): void{}
}
