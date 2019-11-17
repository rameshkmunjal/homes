import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeViewComponent } from './home-view/home-view.component';

import {HomeService} from './home.service';
import { HomeCreateComponent } from './home-create/home-create.component';
import { HomeEditComponent } from './home-edit/home-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeViewComponent,
    HomeCreateComponent,
    HomeEditComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path:'home', component:HomeComponent, pathMatch:'full'},
      {path:'view/:homeId', component:HomeViewComponent, pathMatch:'full'},
      {path:'create', component:HomeCreateComponent, pathMatch:'full'},
      {path:'edit/:homeId', component:HomeEditComponent, pathMatch:'full'},
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'**', component:HomeComponent}
    ])
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})

export class AppModule { }
