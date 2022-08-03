import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MarcaComponent } from './components/marca/marca.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ZapatoUpdateComponent } from './components/zapato-update/zapato-update.component';
import { ZapatoComponent } from './components/zapato/zapato.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'marca', component: MarcaComponent},
  {path:'productos', component: ProductosComponent},
  {path:'zapato/:zapCodigo', component: ZapatoComponent},
  {path:'zapato/actualizar/:zapCodigo', component: ZapatoUpdateComponent},

  {path:'**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
