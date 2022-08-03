import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
declare var iziToast:any;

@Component({
  selector: 'app-zapato-update',
  templateUrl: './zapato-update.component.html',
  styleUrls: ['./zapato-update.component.css']
})
export class ZapatoUpdateComponent implements OnInit {

  public zapato:any = {};
  public zapCodigo:any;

  constructor(
    private productoService: ProductosService,
    private _route: ActivatedRoute,
    //private _router: Route
  ) { 
    this._route.params.subscribe(
      params=>{
        this.zapCodigo = params['zapCodigo'];
        console.log(this.zapCodigo);
      });
  }

  ngOnInit(): void {
    this.productoService.getZapato(this.zapCodigo).subscribe(
      response=>{
        this.zapato = response;
        console.log(this.zapato);
        
      }
    )
  }

  actualizar(actualizarForm: any){
    if(actualizarForm.valid){
      console.log(this.zapato);

      var data :any = {};
      

      data.zapCodigo = this.zapato.zapCodigo;
      data.zapNombre = this.zapato.zapNombre;
      data.zapTalla = this.zapato.zapTalla;
      data.zapCodigo = this.zapato.zapCodigo;
      data.zapColor = this.zapato.zapColor;
      data.zapModelo = this.zapato.zapModelo;
      data.zapPrecio = this.zapato.zapPrecio;
      data.zapGenero = this.zapato.zapGenero;


    
      this.productoService.updateZapato(data).subscribe(
        response=>{
          console.log(response);
          iziToast.show({
            title: 'SUCCESS',
            titleColor: '#1DC74C',
            color: '#FFF',
            class: 'text-success',
            position: 'topRight',
            message: 'Se actualizo correctamente el producto.'
          });

          //this._router.navigate(['/productos']);
          
        },
        error=>{
          console.log(error);
        }

        
      )
      
    }else{
      iziToast.show({
        title: 'ERROR',
        titleColor: '#FF0000',
        color: '#FFF',
        class: 'text-danger',
        position: 'topRight',
        message: 'Los datos del formulario no son validos'
      });
      
    }
  }

}
