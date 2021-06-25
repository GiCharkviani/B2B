import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  email!:string;
  password!:string;
  error!:boolean;
  errorMessage!:any;
  constructor(private _formBuilder: FormBuilder, public auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  signUp(){
   
    this.auth.createUserWithEmailAndPassword(this.email, this.password).catch(error => {
      
      localStorage.setItem('error','1');
      this.error = true;
      this.errorMessage = error;
    }).then(result => {
      
      if(!localStorage.getItem('error')){
       
        localStorage.setItem('loggedIn','1');
        window.location.reload();
        
      }else if(localStorage.getItem('error')){
        localStorage.removeItem('error');
      }
    })
    
  }
}
