import { Component, OnInit } from '@angular/core';
import {HomeService} from './../home.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-home-create',
  templateUrl: './home-create.component.html',
  styleUrls: ['./home-create.component.css']
})
export class HomeCreateComponent implements OnInit {
  public city:string;
  public type:string;
  public size:string;
  public developer:string;
  public price:string;
  public status:string;

  constructor(public homeService:HomeService, public toastr:ToastrService) { }

  ngOnInit() {
  }

  public createHome=()=>{
    let homeData={
      city:this.city,
      type:this.type,
      size:this.size,
      developer:this.developer,
      price:this.price,
      status:this.status
    }

    this.homeService.createHome(homeData).subscribe(data=>{
      console.log(data);
      this.toastr.success("Record created successfuly", "Notification");
    },(err)=>{
      console.log(err);
      this.toastr.error("Some error occurred", "Oops!");
    })
  }

}
