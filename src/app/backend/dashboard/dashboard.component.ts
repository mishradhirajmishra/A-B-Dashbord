import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators} from '@angular/forms';
import { BackendService } from 'src/app/shared/backend.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title: String = 'Dashboard';
 constructor(){

 }
 ngOnInit(){

}
}
