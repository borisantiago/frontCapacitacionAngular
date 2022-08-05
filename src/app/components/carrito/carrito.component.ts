import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
declare var iziToast:any;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  
  public user_id : any = undefined;
  public user_nombre : any = undefined;
  public user_apellido : any = undefined;
  public user_direccion : any = undefined;
  public user_identificacion : any = undefined;
  public carrito:any={};

  constructor(
    private _carritoService: CarritoService,
    private _router:Router
  ) { 

    this.user_nombre = localStorage.getItem('user_nombre');
    this.user_id = localStorage.getItem('user_id');
    this.user_apellido = localStorage.getItem('user_apellido');
    this.user_direccion = localStorage.getItem('user_direccion');
    this.user_identificacion = localStorage.getItem('user_identificacion');

    this.carrito={
      pedIva : 12,
      pedFactura : "FACT-1003",
      perCodigo: this.user_id
      
    };
    console.log(this.carrito);

    if(this.user_id != undefined){
      this._carritoService.getProductosCarrito(this.user_id).subscribe(
        response=>{
          // this.carrito = response;
          // console.log(this.carrito);
        });
    }
  }

  ngOnInit(): void {
  }
  eliminar_item(id:any){

  }

  crearPedido(){
    this._carritoService.postAgregarPedido(this.carrito).subscribe(
      response=>{
        console.log(response);
        iziToast.show({ 
          title: 'SUCCESS',
          titleColor: '#1DC74C',
          color: '#FFF',
          class: 'text-success',
          position: 'topRight',
          message: 'Pedido realizado con existo!'
        });

        this._router.navigate(['/usuario_pedido/', this.user_id]);

        
      },error=>{
        console.log("Error");
        
      }
    )
  }

}
