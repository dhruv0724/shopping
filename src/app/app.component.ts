import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from './commonservice.service';
import { Employee } from './models/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finalpocV5712';
  isLogin = false;
  isAdmin = true;
  employee : Employee;
  constructor(private route : Router ,private commonService:CommonserviceService){
    if(localStorage.getItem('currentUser')){
      this.isLogin = true;
    }else{
      this.isLogin = false;
    }
  }
  ngOnChanges(){
  }
  logout(){
    localStorage.removeItem('currentUser');
    this.isLogin=false;
    this.route.navigateByUrl('/login');
  }
  
}


