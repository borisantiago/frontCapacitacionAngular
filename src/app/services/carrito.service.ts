import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { GLOBAL } from '../models/constants';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  endpoint:string = '';

  constructor(
    private http: HttpClient,

  ) {
    this.endpoint = GLOBAL.url;
   }

   postAgregarCarrito(carrito:any){
    let apiUrl = this.endpoint+"carrito/agregar";
    return this.http.post(apiUrl, carrito).pipe(catchError(this.error))
   }

   getProductosCarrito(idPersona:any){
    let apiUrl = `${this.endpoint}carrito/cliente/`+idPersona;
      return this.http.get(apiUrl, idPersona).pipe(catchError(this.error));
   }

   postAgregarPedido(pedido:any){
    let apiUrl = this.endpoint+"pedido/agregar";
    return this.http.post(apiUrl, pedido).pipe(catchError(this.error))
   }

  
   error(error: HttpErrorResponse){ 
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }

  console.log(errorMessage);
    return throwError(()=>{
      return errorMessage;
    })
}
}
