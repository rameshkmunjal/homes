import { Component, OnInit } from '@angular/core';
import {HomeService} from './../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allHomes=[];

  constructor(public homeService:HomeService) { }

  ngOnInit() { 
    console.log("Home component nginit called");       
      this.allHomes=this.homeService.getAllHomes().subscribe(data=>{      
          console.log(data);
          this.allHomes=data;          
        }, error=> {
          console.log("some error happened");      
      });          
  } 
   
}
