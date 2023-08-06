import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CapacitacionesComponent } from './capacitaciones/capacitaciones.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EditarComponent } from './editar/editar.component';



@NgModule({
  declarations: [
    HomeComponent,
    CapacitacionesComponent,
    ExperienciaComponent,
    PerfilComponent,
    EditarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
