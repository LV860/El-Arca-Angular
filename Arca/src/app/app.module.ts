import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './landingPage/home/home.component';
import { ServicesPageComponent } from './landingPage/services-page/services-page.component';
import { HeaderPageComponent } from './landingPage/header-page/header-page.component';
import { FooterPageComponent } from './landingPage/footer-page/footer-page.component';
import { LocationPageComponent } from './landingPage/location-page/location-page.component';
import { AboutUsPageComponent } from './landingPage/about-us-page/about-us-page.component';
import { ContactPageComponent } from './landingPage/contact-page/contact-page.component';
import { InicioClienteComponent } from './landingPage/inicio-cliente/inicio-cliente.component';
import { InicioVeterinarioComponent } from './landingPage/inicio-veterinario/inicio-veterinario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesPageComponent,
    HeaderPageComponent,
    FooterPageComponent,
    LocationPageComponent,
    AboutUsPageComponent,
    ContactPageComponent,
    InicioClienteComponent,
    InicioVeterinarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
