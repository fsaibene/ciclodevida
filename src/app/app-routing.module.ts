import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';


const routes = [
{ path: '',   redirectTo: 'login', pathMatch: 'full' },
{ path: 'login',  component: LoginComponent },
{ path: 'home',  component: BienvenidaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
