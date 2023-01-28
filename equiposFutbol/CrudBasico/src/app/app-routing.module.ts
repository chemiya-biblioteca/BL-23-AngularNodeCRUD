import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './COMPONENTES/agregar/agregar.component';

import { InicioComponent } from './COMPONENTES/inicio/inicio.component';
import { ModificarComponent } from './COMPONENTES/modificar/modificar.component';

const routes: Routes = [
  { path:'', redirectTo:'/inicio', pathMatch:'full'},//ruta basica
  {path:'inicio' , component: InicioComponent},//ruta y al componente al que dirigen y editar con el id
  {path:'add', component:AgregarComponent},
  {path:'edit/:id', component:ModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
