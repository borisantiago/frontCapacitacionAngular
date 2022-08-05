import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
declare var iziToast:any;


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public zapCanasta:any={};

  public user_role : any = undefined;
  public user_nombre : any = undefined;
  public user_id : any = undefined;
  public user_apellido : any = undefined;

  constructor(
    private _carritoService: CarritoService,
    private _router : Router
  ) { 
    this.user_role = localStorage.getItem('user_role');
    this.user_nombre = localStorage.getItem('user_nombre');
    this.user_id = localStorage.getItem('user_id');
    this.user_apellido = localStorage.getItem('user_apellido');

    if(this.user_id != undefined){
      this._carritoService.getProductosCarrito(this.user_id).subscribe(
        response=>{
          this.zapCanasta = response;
          console.log(this.zapCanasta);
        });
    }
    
  }

  ngOnInit(): void {
  }

  logout(){
    
    localStorage.clear();
    setTimeout(() => {
      window.location.reload();
    }, 3000);
    this._router.navigate(['/']);
    iziToast.show({
      title: 'SUCCESS',
      titleColor: '#1DC74C',
      color: '#FFF',
      class: 'text-success',
      position: 'topRight',
      message: 'Sesión cerrada con exito!'
    });
  }




}
