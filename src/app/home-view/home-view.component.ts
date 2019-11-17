import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from  '@angular/router';
import {HomeService} from './../home.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
    public currentHome;

  constructor(public route:ActivatedRoute, public homeService:HomeService, public location:Location, public router:Router) { }

  ngOnInit() {
    let myHomeId=this.route.snapshot.paramMap.get('homeId');
    console.log(myHomeId);
    this.homeService.getSingleHomeView(myHomeId).subscribe(data=>{
        console.log(data);
        this.currentHome=data;
    }, (err)=>{
      console.log(err);
    })
  }

  public goBack=()=>{
        this.location.back();
  }

  public deleteHome():any{
    //console.log("Do you really want to delete it?");
    let homeId=this.currentHome.id;
    this.homeService.deleteHome(homeId).subscribe(data=>{
      console.log("this record deleted");
      console.log(data);
      setTimeout(()=>{this.router.navigate(['/']);}, 1000)
      }, (err)=>{
      console.log(err);
    })
  }
}


