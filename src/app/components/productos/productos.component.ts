import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';
declare var iziToast:any;


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public user_id : any = undefined;
  
  productos:any = {};

  constructor(
    private _productoService : ProductosService,
    private _carritoService: CarritoService,
    private _router:Router
  ) {
    this.user_id = localStorage.getItem('user_id');
    
   }

  ngOnInit(): void {

    this._productoService.getProducto().subscribe(response =>{
      // console.log(response);
       this.productos = response;
    })

  }

  agregarAlCarrito(zapatoId:any){

    let data = {
       zapCodigo : zapatoId,
       perCodigo : this.user_id 
    }
    
    console.log(data);

    if(this.user_id != undefined){
      this._carritoService.postAgregarCarrito(data).subscribe(
        response => {
          console.log(response);
          iziToast.show({
            title: 'SUCCESS',
            titleColor: '#1DC74C',
            color: '#FFF',
            class: 'text-success',
            position: 'topLeft',
            message: 'Se agrego correctamente el producto al carrito.'
          });
        });
    }else{
      iziToast.show({ 
        title: 'ERROR',
        titleColor: '#FF0000',
        color: '#FFF', 
        class: 'text-danger',
        position: 'topRight',
        message: 'Debe iniciar sesion para agregar producto en carito!'
      });
      

      this._router.navigate(['/login']);

    }
    
    

    
  }

}
