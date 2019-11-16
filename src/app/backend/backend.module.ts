import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendRoutingModule } from './backend-routing.module';
import { BackendComponent } from './backend.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '../shared/auth.guard';

@NgModule({
  declarations: [
    BackendComponent,
 
    SidebarComponent,
    DashboardComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BackendRoutingModule,
  ],
  providers: [AuthGuard],

})
export class BackendModule { }
