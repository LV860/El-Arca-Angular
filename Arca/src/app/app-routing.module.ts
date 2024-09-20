import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landingPage/home/home.component';
import { AboutUsPageComponent } from './landingPage/about-us-page/about-us-page.component';
import { ContactPageComponent } from './landingPage/contact-page/contact-page.component';
import { ServicesPageComponent } from './landingPage/services-page/services-page.component';
import { LocationPageComponent } from './landingPage/location-page/location-page.component';
import { MascotasTableComponent } from './Veterinario/mascotas-table/mascotas-table.component';
import { MascotasAddComponent } from './Veterinario/mascotas-add/mascotas-add.component';
import { MascotasDetailComponent } from './Veterinario/mascotas-detail/mascotas-detail.component';
import { InicioClienteComponent } from './landingPage/inicio-cliente/inicio-cliente.component';
import { InicioVeterinarioComponent } from './landingPage/inicio-veterinario/inicio-veterinario.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'location', component: LocationPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'mascotas', component: MascotasTableComponent },
  { path: 'mascotasAdd', component: MascotasAddComponent },
  { path: 'mascotasDetail', component: MascotasDetailComponent },
  { path: 'loginCliente', component: InicioClienteComponent },
  { path: 'loginVeterinario', component: InicioVeterinarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
