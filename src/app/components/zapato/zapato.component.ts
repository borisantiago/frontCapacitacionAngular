import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-zapato',
  templateUrl: './zapato.component.html',
  styleUrls: ['./zapato.component.css']
})
export class ZapatoComponent implements OnInit {

  public zapato:any = {};
  public zapCodigo:any;
  public user_role : any = undefined;

  constructor(
    private productoService: ProductosService,
    private _route: ActivatedRoute

  ) {
    this._route.params.subscribe(
      params=>{
        this.zapCodigo = params['zapCodigo'];
      });

    this.user_role = localStorage.getItem('user_role');

  
   }

  ngOnInit(): void {
    this.productoService.getZapato(this.zapCodigo).subscribe(
      response=>{
        this.zapato = response;
      }
    )
    
  }


  

  buscarZapato(){
    
  }

}
