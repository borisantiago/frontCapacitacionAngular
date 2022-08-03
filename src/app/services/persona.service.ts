import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { GLOBAL } from '../models/constants';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  endpoint:string = '';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
  ) {
    this.endpoint = GLOBAL.url;
   }

   postLoginPersona(persona:any){
    let apiUrl = `${this.endpoint}persona/login`;
    return this.http.post(apiUrl, persona).pipe(catchError(this.error));
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
