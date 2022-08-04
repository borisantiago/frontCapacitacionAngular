import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
declare var iziToast:any;

@Component({
  selector: 'app-perfil-update',
  templateUrl: './perfil-update.component.html',
  styleUrls: ['./perfil-update.component.css']
})
export class PerfilUpdateComponent implements OnInit {

  public perCodigo='';
  public usuario:any={}

  constructor(
    private _personaService:PersonaService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._route.params.subscribe(
      params=>{
        this.perCodigo = params['perCodigo'];
      });

      this._personaService.getPersonaId(this.perCodigo).subscribe(
        response=>{
          this.usuario = response;
          console.log(this.usuario);
          
        }
      )

      console.log(this.perCodigo);
      
   }

  ngOnInit(): void {
  }
  actualizar(actualizarForm:any){
    
    if(actualizarForm.valid){
      console.log(this.usuario);
    
    this._personaService.postUpdatePersona(this.usuario).subscribe(
      response=>{
        console.log(response);
        iziToast.show({
          title: 'SUCCESS',
          titleColor: '#1DC74C',
          color: '#FFF',
          class: 'text-success',
          position: 'topRight',
          message: 'Se actualizo correctamente la información'
        });
        this._router.navigate(['/usuario/', this.perCodigo]);
      });
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
