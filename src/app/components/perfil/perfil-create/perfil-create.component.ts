import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
declare var iziToast:any;

@Component({
  selector: 'app-perfil-create',
  templateUrl: './perfil-create.component.html',
  styleUrls: ['./perfil-create.component.css']
})
export class PerfilCreateComponent implements OnInit {

  public usuario:any={}


  constructor(
    private _personaService : PersonaService,
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  registrar(actualizarForm:any){
    if(actualizarForm.valid){
    console.log(this.usuario);
      this._personaService.postCreatePersona(this.usuario).subscribe(
        response=>{
          iziToast.show({
            title: 'SUCCESS',
            titleColor: '#1DC74C',
            color: '#FFF',
            class: 'text-success',
            position: 'topRight',
            message: 'Se creo correctamente el usuario'
          });
          this._router.navigate(['/']);
          
        }
      )

    }else{
      iziToast.show({ 
        title: 'ERROR',
        titleColor: '#FF0000',
        color: '#FFF', 
        class: 'text-danger',
        position: 'topRight',
        message: 'Debe completar los campos requeridos'
      });
      
    }
    
  }

}
