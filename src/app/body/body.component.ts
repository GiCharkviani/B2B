
import { Component, OnInit } from '@angular/core';
import { HotelsListServiceService } from '../hotels-list-service.service';
import {AngularFireAuth} from '@angular/fire/auth'
import { CheckLogService } from '../check-log.service';




@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})




export class BodyComponent implements OnInit {

  hotels!: any;
  staticHotel!: any;
  panelOpenState = false;
  showFiller = false;
  dateVal: any = new Date();
  details:boolean = false;
  reserved!:string;


  changeCard(){
    if(this.details){
      this.details = false;
    }else {
      this.details = true;
    }
  }
 

  constructor(public hotelService: HotelsListServiceService,public auth: AngularFireAuth, public checkLog:  CheckLogService) {
    this.hotels = JSON.parse(localStorage.getItem('hotel') || '{}');

    hotelService.hotels = JSON.parse(localStorage.getItem('hotel') || '{}')

    if(!localStorage.getItem('hotel')){
      localStorage.setItem('hotel', JSON.stringify(hotelService.hotelsEmpty))
    }
    this.staticHotel = this.hotelService.staticHotel
   }

  ngOnInit(): void {
  
   if(!localStorage.getItem('loggedIn')){
    this.hotelService.hotels = JSON.parse(localStorage.getItem('hotel') || '{}')
      this.auth.signOut().then(()=>{
        localStorage.removeItem('loggedIn')
        localStorage.removeItem('error')
        let check = localStorage.getItem('loggedIn')
      if(check){
        this.checkLog.buttonCheck = true;
       
      }else {
        this.checkLog.buttonCheck = false;
      
      }  
      }).catch((error) => {
     
      });
     
   }


  }


}
