import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carrito:any={};


  constructor() { }

  ngOnInit(): void {
  }
  eliminar_item(id:any){

  }

}
