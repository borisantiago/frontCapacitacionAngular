import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  public id_pedido = '';
  public pedidos:any={};


  public user_nombre : any = undefined;
  public user_apellido : any = undefined;
  public user_direccion : any = undefined;

  
  
  constructor(
    private _carritoService: CarritoService,
    private _route: ActivatedRoute
  ) { 
    this._route.params.subscribe(
      params => {
        this.id_pedido = params['perCodigo'];
      });

      this.user_nombre = localStorage.getItem('user_nombre');
      this.user_apellido = localStorage.getItem('user_apellido');
      this.user_direccion = localStorage.getItem('user_direccion');


      this._carritoService.getPedidos(this.id_pedido).subscribe(
        response=>{
          this.pedidos = response;
          console.log(response); 
        });
  }

  ngOnInit(): void {
  }

}
