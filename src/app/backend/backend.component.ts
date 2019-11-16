
import { OnInit, Component, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.scss']
})
export class BackendComponent implements  OnInit{
@ViewChild('mySidenav',{static:false}) mySidenav:ElementRef;
@ViewChild('main',{static:false}) main:ElementRef;
opened:Boolean=true;
  constructor(private router:Router){}
  
  ngOnInit(){

    // this.router.navigate(['backend/dashboard'])
  }
   openNav() {
     console.log(this.mySidenav.nativeElement)
     this.mySidenav.nativeElement.style.width = "250px";
     this.main.nativeElement.style.marginLeft = "250px";
     this.opened=true;
  }
  
  closeNav() {
    this.mySidenav.nativeElement.style.width = "0";
    this.main.nativeElement.style.marginLeft= "0";
    this.opened=false;
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
