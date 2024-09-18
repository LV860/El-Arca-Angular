import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landingPage/home/home.component';
import { AboutUsPageComponent } from './landingPage/about-us-page/about-us-page.component';
import { ContactPageComponent } from './landingPage/contact-page/contact-page.component';
import { ServicesPageComponent } from './landingPage/services-page/services-page.component';
import { LocationPageComponent } from './landingPage/location-page/location-page.component';
import { InicioClienteComponent } from './landingPage/inicio-cliente/inicio-cliente.component';
import { InicioVeterinarioComponent } from './landingPage/inicio-veterinario/inicio-veterinario.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'location', component: LocationPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'loginCliente', component: InicioClienteComponent },
  { path: 'loginVeterinario', component: InicioVeterinarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
