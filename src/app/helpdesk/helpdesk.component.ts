import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helpdesk',
  templateUrl: './helpdesk.component.html',
  styleUrls: ['./helpdesk.component.css']
})
export class HelpdeskComponent implements OnInit {

  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
  }
createquery(createquery:any){
  return this._http.post("http://localhost:3000/users",createquery);

}
}
