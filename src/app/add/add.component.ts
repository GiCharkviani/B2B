import { Component, OnInit } from '@angular/core';
import { HotelsListServiceService } from '../hotels-list-service.service';
import { AngularFireAuth } from '@angular/fire/auth'
import { CheckLogService } from '../check-log.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  hotel: { name: string, city: string, street: string, rating: number, pic: string, pic1?: string, pic2?: string, pic3?: string, pic4?: string, description: string, rooms?:any[]} = {
    name: '',
    city: '',
    street: '',
    rating: 1,
    pic: '',
    pic1: '',
    pic2: '',
    pic3: '',
    pic4: '',
    description: '',
    rooms: []
  }

  rooms:{numberi:number, places:number, pp:string,genInfo:string,reserved:boolean,date:any}={
    numberi: 0,
    places: 0,
    pp: '',
    genInfo: '',
    reserved: false,
    date: ''
  }

  datePick:boolean = false;

  datePicking(){
    if(this.datePick == false){
      this.datePick = true;
    }else {
      this.datePick = false;
    }
   
  }


  roomAdded:boolean = false;
  roomsActive: boolean = false;
  counter:number = 0;
  makeRoomsActive() {
    this.roomsActive = true;
  }
  makeRoomsDective() {
    this.roomsActive = false;
  }

  constructor(public addingHotel: HotelsListServiceService, public hotelService: HotelsListServiceService, public auth: AngularFireAuth, public checkLog: CheckLogService) {
    addingHotel.hotels = JSON.parse(localStorage.getItem('hotel') || '{}')
  }

  ngOnInit(): void {
    if (!localStorage.getItem('loggedIn')) {
      this.hotelService.hotels = JSON.parse(localStorage.getItem('hotel') || '{}')
      this.checkLog.buttonCheck = false;
    }
  }
  addRoom() {
    this.hotel.rooms?.push(this.rooms)

    this.roomAdded = true;
    this.counter++;
    setTimeout(() => {
      this.roomAdded = false;
    }, 3000);

    this.rooms = {
      numberi: 0,
      places: 0,
      genInfo: '',
      pp: '',
      reserved: false,
      date: ''
    }
    console.log(this.hotel.rooms)
  }

  onSubmit() {
  

    console.log('დაემატა', this.hotel,  'ჯენერალი', this.addingHotel.hotels);
    this.addingHotel.addHotel(this.hotel);
    this.hotel = {
      name: '',
      city: '',
      street: '',
      rating: 0,
      pic: '',
      pic2: '',
      pic3: '',
      pic4: '',
      description: '',
      rooms: []
    }

  }

}
