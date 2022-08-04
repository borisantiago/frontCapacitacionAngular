import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilCreateComponent } from './components/perfil/perfil-create/perfil-create.component';
import { PerfilUpdateComponent } from './components/perfil/perfil-update/perfil-update.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ZapatoUpdateComponent } from './components/zapato/zapato-update/zapato-update.component';
import { ZapatoComponent } from './components/zapato/zapato.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'productos', component: ProductosComponent},
  {path:'zapato/:zapCodigo', component: ZapatoComponent},
  {path:'zapato/actualizar/:zapCodigo', component: ZapatoUpdateComponent},
  {path:'usuario/:id', component: PerfilComponent},
  {path:'usuario/actualizar/:perCodigo', component: PerfilUpdateComponent},
  {path:'usuarios/registro', component: PerfilCreateComponent},


  {path:'carrito', component: CarritoComponent},



  
  {path:'**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
