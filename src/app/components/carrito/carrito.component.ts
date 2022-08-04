import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public carrito:any={};
  public user_id : any = undefined;
  public user_nombre : any = undefined;
  public user_apellido : any = undefined;
  public user_direccion : any = undefined;
  public user_identificacion : any = undefined;

  constructor(
    private _carritoService: CarritoService,
  ) { 

    this.user_nombre = localStorage.getItem('user_nombre');
    this.user_id = localStorage.getItem('user_id');
    this.user_apellido = localStorage.getItem('user_apellido');
    this.user_direccion = localStorage.getItem('user_direccion');
    this.user_identificacion = localStorage.getItem('user_identificacion');


    if(this.user_id != undefined){
      this._carritoService.getProductosCarrito(this.user_id).subscribe(
        response=>{
          this.carrito = response;
          console.log(this.carrito);
        });
    }
  }

  ngOnInit(): void {
  }
  eliminar_item(id:any){

  }

}
