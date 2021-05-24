import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Employee } from 'src/app/models/Employee';
import { EmpserviceService } from 'src/app/services/empservice.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  employee : Employee;

  constructor(private app : AppComponent,private empservice : EmpserviceService,private router:Router) { }

  ngOnInit(): void {
    let empId = localStorage.getItem('emp');
    this.empservice.getOne(empId).then((value)=>{
      if(value.success){
        this.employee = value.data;
      }
    });
  }
  updateimage(){
    
  }
  checkout(){
    this.router.navigateByUrl('/checkout');
  }

}
