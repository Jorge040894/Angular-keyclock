import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosFormComponent } from './components/alumnos/alumnos-form.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
   {path: 'alumnos/form/:id', component: AlumnosFormComponent},
  {path: 'alumnos',component:AlumnosComponent}, 
  {path: 'alumnos/form',component:AlumnosFormComponent}, 
  {path: 'cursos',component:CursosComponent},
  {path: '',component:NavbarComponent},
  {path: 'alumnos/form: id',component:AlumnosFormComponent}, 
  {path: 'home',component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
