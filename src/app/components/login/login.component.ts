import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
declare var iziToast:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public persona:any={}

  constructor(
    private _personaService:PersonaService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  registro(registroForm:any){
    console.log(this.persona);
    if(registroForm.valid){
      this._personaService.postLoginPersona(this.persona).subscribe(
        response =>{
          this.persona = response;
          console.log(this.persona);
          
          if(this.persona != undefined){
            localStorage.setItem('_role', this.persona.perRole);
            this._router.navigate(['/productos']);
            iziToast.show({
              title: 'SUCCESS',
              titleColor: '#1DC74C',
              color: '#FFF',
              class: 'text-success',
              position: 'topRight',
              message: 'Se inicio correctamente la sesión'
            });

          }else{

            iziToast.show({ 
              title: 'ERROR',
              titleColor: '#FF0000',
              color: '#FFF', 
              class: 'text-danger',
              position: 'topRight',
              message: 'Usuario o contraseña incorrectos!'
            });

            console.log("No entró");
            
          }
          
        });
  
    }
    
    
  }

}
