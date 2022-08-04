import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BASE_URL } from './models/constants';
import { environment } from 'src/environments/environment';
import { ZapatoComponent } from './components/zapato/zapato.component';
import { ZapatoUpdateComponent } from './components/zapato/zapato-update/zapato-update.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FiltersPipe } from './pipes/filters.pipe';
import { PerfilUpdateComponent } from './components/perfil/perfil-update/perfil-update.component';
import { PerfilCreateComponent } from './components/perfil/perfil-create/perfil-create.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    ProductosComponent,
    HomeComponent,
    ZapatoComponent,
    ZapatoUpdateComponent,
    LoginComponent,
    PerfilComponent,
    CarritoComponent,
    FiltersPipe,
    PerfilUpdateComponent,
    PerfilCreateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    //   {
    //   provide: BASE_URL, useValue:(environment.baseUrl.length >0 ? environment.baseUrl : 'http://localhost:8080')
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
