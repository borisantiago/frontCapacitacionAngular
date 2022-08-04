import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public id:number=0;
  public usuario:any={};
  public user_id : any = undefined;


  constructor(
    private _personaService:PersonaService,
    private _route :ActivatedRoute
  ) {
    this.user_id = localStorage.getItem('user_id');
    this.id=this.user_id;

    
    

    this._personaService.getPersonaId(this.id).subscribe(
      response=>{
        this.usuario = response;
        console.log(this.usuario);
        
      }
    )
    
   }

  ngOnInit(): void {
  }

  actualizar(id:any){

  }

}
