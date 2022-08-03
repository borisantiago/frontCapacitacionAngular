import { Inject, Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, throwError} from 'rxjs';
import { GLOBAL } from '../models/constants';
// import { BASE_URL } from '../models/constants';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  // baseUrl = environment.baseUrl;
  endpoint:string='';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    // @Inject(BASE_URL) endpoint:string
    ) {
      this.endpoint = GLOBAL.url;
     }

    getProducto():Observable<any>{
      let apiUrl = `${this.endpoint}zapato/todos`;
      return this.http.get(apiUrl).pipe(catchError(this.error));
    }

    getZapato(zapCodigo:any){
      let apiUrl = `${this.endpoint}zapato/`+zapCodigo;
      return this.http.get(apiUrl, zapCodigo).pipe(catchError(this.error));
    }

    updateZapato(data:any){
      let apiUrl = `${this.endpoint}zapato/actualizar`;
      return this.http.post(apiUrl, data).pipe(catchError(this.error));
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
