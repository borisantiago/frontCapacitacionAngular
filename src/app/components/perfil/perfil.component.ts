import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario:any={};
  public user_id : any = undefined;


  

  constructor() {
    this.user_id = localStorage.getItem('user_id');
    console.log(this.user_id);
    
   }

  ngOnInit(): void {
  }

}
