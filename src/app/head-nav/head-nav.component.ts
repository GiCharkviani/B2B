import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import {AngularFireAuth} from '@angular/fire/auth'
import { readSync } from 'fs';
import { CheckLogService } from '../check-log.service';
@Component({
  selector: 'app-head-nav',
  templateUrl: './head-nav.component.html',
  styleUrls: ['./head-nav.component.css']
})
export class HeadNavComponent implements OnInit {


  constructor(public auth: AngularFireAuth, public checkLog:  CheckLogService) { }

  

  signOut(){
    this.auth.signOut().then(()=>{
      localStorage.removeItem('loggedIn')
      localStorage.removeItem('error')
      let check = localStorage.getItem('loggedIn')
    if(check){
      this.checkLog.buttonCheck = true;
    }else {
      this.checkLog.buttonCheck = false;
    } 
    window.location.reload()
    }).catch((error) => {
    });
  }
  
  ngOnInit(): void {
    let check = localStorage.getItem('loggedIn')
    if(check){
      this.checkLog.buttonCheck = true;
    }else {
      this.checkLog.buttonCheck = false;
    }
  }

}
