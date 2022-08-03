import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:any = {};

  constructor(
    private productoService : ProductosService
  ) {

    
   }

  ngOnInit(): void {

    this.productoService.getProducto().subscribe(response =>{
      console.log(response);
       this.productos = response;
    })


  }

}
