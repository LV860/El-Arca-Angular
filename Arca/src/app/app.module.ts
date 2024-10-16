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
import { MascotasTableComponent } from './Veterinario/mascotas-table/mascotas-table.component';
import { HeaderVeterinarioComponent } from './Veterinario/header-veterinario/header-veterinario.component';
import { InicioClienteComponent } from './landingPage/inicio-cliente/inicio-cliente.component';
import { InicioVeterinarioComponent } from './landingPage/inicio-veterinario/inicio-veterinario.component';
import { MascotasDetailComponent } from './Veterinario/mascotas-detail/mascotas-detail.component';
import { MascotasAddComponent } from './Veterinario/mascotas-add/mascotas-add.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientesTableComponent } from './Veterinario/clientes-table/clientes-table.component';
import { ClientesAddComponent } from './Veterinario/clientes-add/clientes-add.component';
import { ClientesEditComponent } from './Veterinario/clientes-edit/clientes-edit.component';

import { PerfilVeterinarioComponent } from './Veterinario/perfil-veterinario/perfil-veterinario.component';
import { HeaderClienteComponent } from './Cliente/header-cliente/header-cliente.component';
import { PerfilClienteComponent } from './Cliente/perfil-cliente/perfil-cliente.component';
import { MascotasClienteComponent } from './Cliente/mascotas-cliente/mascotas-cliente.component';
import { HeaderAdminComponent } from './Administrador/header-admin/header-admin.component';
import { PerfilAdmiComponent } from './Administrador/perfil-admi/perfil-admi.component';
import { InicioAdmiComponent } from './landingPage/inicio-admi/inicio-admi.component';
import { TableClientesComponent } from './Administrador/Clientes/table-clientes/table-clientes.component';
import { EditClientesComponent } from './Administrador/Clientes/edit-clientes/edit-clientes.component';
import { AddClientesComponent } from './Administrador/Clientes/add-clientes/add-clientes.component';
import { AddMascotasComponent } from './Administrador/Mascotas/add-mascotas/add-mascotas.component';
import { TableMascotasComponent } from './Administrador/Mascotas/table-mascotas/table-mascotas.component';
import { EditMascotasComponent } from './Administrador/Mascotas/edit-mascotas/edit-mascotas.component';
import { TableVeterinariosComponent } from './Administrador/Veterinarios/table-veterinarios/table-veterinarios.component';
import { AddVeterinariosComponent } from './Administrador/Veterinarios/add-veterinarios/add-veterinarios.component';
import { EditVeterinariosComponent } from './Administrador/Veterinarios/edit-veterinarios/edit-veterinarios.component';
import { UnidadesDrogaComponent } from './Administrador/Dashboard/unidades-droga/unidades-droga.component';
import { MascotasTratamientoComponent } from './Veterinario/mascotas-tratamiento/mascotas-tratamiento.component';
import { TratamientosTableComponent } from './Cliente/tratamientos-table/tratamientos-table.component';

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
    MascotasTableComponent,
    HeaderVeterinarioComponent,
    InicioClienteComponent,
    InicioVeterinarioComponent,
    MascotasDetailComponent,
    MascotasAddComponent,
    ClientesTableComponent,
    ClientesAddComponent,
    ClientesEditComponent,
    PerfilVeterinarioComponent,
    HeaderClienteComponent,
    PerfilClienteComponent,
    MascotasClienteComponent,
    HeaderAdminComponent,
    PerfilAdmiComponent,
    InicioAdmiComponent,
    TableClientesComponent,
    EditClientesComponent,
    AddClientesComponent,
    AddMascotasComponent,
    TableMascotasComponent,
    EditMascotasComponent,
    TableVeterinariosComponent,
    AddVeterinariosComponent,
    EditVeterinariosComponent,
    UnidadesDrogaComponent,
    MascotasTratamientoComponent,
    TratamientosTableComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
