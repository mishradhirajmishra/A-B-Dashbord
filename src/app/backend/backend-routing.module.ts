import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../shared/auth.guard";
import { BackendComponent } from './backend.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: BackendComponent  ,
    children:[
      {path:'dashboard',component:DashboardComponent,canActivateChild:[AuthGuard]},
    ],canActivate:[AuthGuard]
   }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendRoutingModule { }
