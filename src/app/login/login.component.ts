import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isFormInvalid = false;

  constructor() { }

  ngOnInit(): void {
  }

  onsubmit(signInForm: NgForm){
    if(!signInForm.valid){
       this.isFormInvalid = true;
       return;
    }
  }

}
