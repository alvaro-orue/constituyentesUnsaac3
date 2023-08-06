import { NgModule } from "@angular/core";
import { ComponentesModule } from "./componentes/componentes.module";
import { RouterModule ,Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { EditarComponent } from "./pages/editar/editar.component";
import { ExperienciaComponent } from "./pages/experiencia/experiencia.component";
import { CapacitacionesComponent } from "./pages/capacitaciones/capacitaciones.component";

const routes:Routes=[
    {
        path:"home",component:HomeComponent
    },
    {
        path:"editar",component:EditarComponent
    },
    {
        path:"experiencia",component:ExperienciaComponent
    },
    {
        path:"capacitaciones",component:CapacitacionesComponent
    },
    {
        path:"**",component:HomeComponent
    }

]
@NgModule({
    declarations:[],
    imports:[
        ComponentesModule,
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]



})
export class AppRoutingModule{}