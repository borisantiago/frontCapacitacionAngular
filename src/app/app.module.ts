import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { MarcaComponent } from './components/marca/marca.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BASE_URL } from './models/constants';
import { environment } from 'src/environments/environment';
import { ZapatoComponent } from './components/zapato/zapato.component';
import { ZapatoUpdateComponent } from './components/zapato-update/zapato-update.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    CarritoComponent,
    ProductosComponent,
    HomeComponent,
    MarcaComponent,
    ZapatoComponent,
    ZapatoUpdateComponent,
    LoginComponent
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
