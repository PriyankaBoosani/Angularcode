import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-addmyskills',
  templateUrl: './addmyskills.component.html',
  styleUrls: ['./addmyskills.component.css']
})
export class AddmyskillsComponent implements OnInit {
  result:any=[];
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/selfservice/allskills") 
   .subscribe((result)=>{
        this.result = result
   })
  }
  addskill(data:any) {
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json'}  )
    //console.log(headers)
   this.http.post("http://localhost:8080/mssli",data,{ 'headers': headers }) 
   .subscribe((result)=>{
        console.warn("result",result)
        this.router.navigate(['myskills'])
        
   })
    //console.warn(data);
    
   
  }

}