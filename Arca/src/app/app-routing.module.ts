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
import { ClientesTableComponent } from './Veterinario/clientes-table/clientes-table.component';
import { ClientesAddComponent } from './Veterinario/clientes-add/clientes-add.component';
import { ClientesEditComponent } from './Veterinario/clientes-edit/clientes-edit.component';
import { PerfilVeterinarioComponent } from './Veterinario/perfil-veterinario/perfil-veterinario.component';
import { MascotasClienteComponent } from './Cliente/mascotas-cliente/mascotas-cliente.component';
import { HeaderClienteComponent } from './Cliente/header-cliente/header-cliente.component';
import { PerfilClienteComponent } from './Cliente/perfil-cliente/perfil-cliente.component';
import { PerfilAdmiComponent } from './Administrador/perfil-admi/perfil-admi.component';
import { InicioAdmiComponent } from './landingPage/inicio-admi/inicio-admi.component';
import { TableMascotasComponent } from './Administrador/Mascotas/table-mascotas/table-mascotas.component';
import { AddMascotasComponent } from './Administrador/Mascotas/add-mascotas/add-mascotas.component';
import { EditMascotasComponent } from './Administrador/Mascotas/edit-mascotas/edit-mascotas.component';
import { TableClientesComponent } from './Administrador/Clientes/table-clientes/table-clientes.component';
import { AddClientesComponent } from './Administrador/Clientes/add-clientes/add-clientes.component';
import { EditClientesComponent } from './Administrador/Clientes/edit-clientes/edit-clientes.component';
import { TableVeterinariosComponent } from './Administrador/Veterinarios/table-veterinarios/table-veterinarios.component';
import { AddVeterinariosComponent } from './Administrador/Veterinarios/add-veterinarios/add-veterinarios.component';
import { EditVeterinariosComponent } from './Administrador/Veterinarios/edit-veterinarios/edit-veterinarios.component';
import { UnidadesDrogaComponent } from './Administrador/Dashboard/unidades-droga/unidades-droga.component';
import { MascotasTratamientoComponent } from './Veterinario/mascotas-tratamiento/mascotas-tratamiento.component';
import { TratamientosTableComponent } from './Cliente/tratamientos-table/tratamientos-table.component';
import { MainDashboardComponent } from './Administrador/Dashboard/main-dashboard/main-dashboard.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'location', component: LocationPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'mascotas', component: MascotasTableComponent },
  { path: 'mascotasAdd', component: MascotasAddComponent },
  { path: 'mascotasDetail/:id', component: MascotasDetailComponent },
  { path: 'loginCliente', component: InicioClienteComponent },
  { path: 'loginVeterinario', component: InicioVeterinarioComponent },
  { path: 'clientes', component: ClientesTableComponent },
  { path: 'clientesAdd', component: ClientesAddComponent },
  { path: 'clientesDetail/:id', component: ClientesEditComponent},
  { path: 'perfilVeterinario/:cedula', component: PerfilVeterinarioComponent},
  { path: 'mascotasCliente', component: MascotasClienteComponent },
  { path: 'headerCliente', component: HeaderClienteComponent },
  { path: 'perfilCliente/:cedula', component: PerfilClienteComponent },
  { path: 'perfilAdmin/:id', component: PerfilAdmiComponent },
  { path: 'loginAdmin', component: InicioAdmiComponent },
  { path: 'mascotasAdmin', component: TableMascotasComponent },
  { path: 'mascotasAddAdmin', component: AddMascotasComponent },
  { path: 'mascotasDetailAdmin/:id', component: EditMascotasComponent },
  { path: 'clientesAdmin', component: TableClientesComponent },
  { path: 'clientesAddAdmin', component: AddClientesComponent },
  { path: 'clientesDetailAdmin/:id', component: EditClientesComponent },
  { path: 'veterinariosAdmin', component: TableVeterinariosComponent },
  { path: 'veterinariosAddAdmin', component: AddVeterinariosComponent },
  { path: 'veterinariosDetailAdmin/:id', component: EditVeterinariosComponent },
  { path: 'mascotasAddTratamiento/:id', component: EditVeterinariosComponent },
  { path: 'mascotasTratamiento/:id', component: MascotasTratamientoComponent },
  { path: 'dashboard', component: MainDashboardComponent },
  { path: 'tratamientosMascota/:id', component: TratamientosTableComponent },


  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
