import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeService} from './../home.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.component.html',
  styleUrls: ['./home-edit.component.css']
})
export class HomeEditComponent implements OnInit {
  public currentHome;  

  constructor(
    private _route:ActivatedRoute,
    private homeService:HomeService, 
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit() {
    console.log("edit home component works");
    let homeId = this._route.snapshot.paramMap.get('homeId');
    console.log(homeId);
    this.homeService.getSingleHomeView(homeId).subscribe(data=>{
      console.log(data);
      this.currentHome=data;
      
    }, (err)=>{
      console.log(err);

    })
  }

  public editThisHome:any=()=>{  
    this.homeService.editThisHome(this.currentHome.id, this.currentHome).subscribe(data=>{
      this.currentHome=data;
      console.log(this.currentHome);
      this.toastr.success("Record edited successfully", "Notification");    
      this.router.navigate(['/home']);    
    }, (err)=>{
      console.log(err);
      this.toastr.error("Some Error", "Oops!");
    })  

  }

}
