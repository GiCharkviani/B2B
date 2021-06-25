import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import { CheckLogService } from '../check-log.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  panelOpenState = false;
  email!:string;
  password!:string;
  error!:boolean;
  errorMessage!:any;
  constructor(public auth: AngularFireAuth, public checkLog: CheckLogService) {}

  ngOnInit(): void {
 
  }

  login(){
    console.log(`Email: ${this.email} \n Password: ${this.password}`);
    this.auth.signInWithEmailAndPassword(this.email, this.password).catch(error => {
      console.log(error);
      localStorage.setItem('error','1');
      this.error = true;
      this.errorMessage = error;
    }).then(result => {
      console.log(result);
      if(!localStorage.getItem('error')){
       
        localStorage.setItem('loggedIn','1');
        window.location.reload();
        
      }else if(localStorage.getItem('error')){
        localStorage.removeItem('error');
      }
     
    })
    let check = localStorage.getItem('loggedIn')
    if(check){
      this.checkLog.buttonCheck = true;
      console.log(true)
    }else {
      this.checkLog.buttonCheck = false;
      console.log(false)
    }
    
  }
  

}
