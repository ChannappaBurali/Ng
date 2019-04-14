import { Component, OnInit } from '@angular/core';    
import { Router } from '@angular/router';    
import { LoginService } from '../login.service';    
 import { FormsModule,ReactiveFormsModule } from '@angular/forms';    
 import { FormGroup, FormBuilder, Validators } from '@angular/forms';
    
@Component({    
  selector: 'app-login',    
  templateUrl: './login.component.html',    
  styleUrls: ['./login.component.css']    
})    
export class LoginComponent {    
    
  model : any={};    
  form: FormGroup;
  errorMessage:string;    
  constructor(private router:Router,private LoginService:LoginService,private formBuilder: FormBuilder) { }    
    
    
  ngOnInit() { 
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });   
    sessionStorage.removeItem('Email');    
    sessionStorage.clear();
        
  }    
  login(){    
    debugger;    
    this.LoginService.Login(this.model).subscribe(    
      data => {    
        debugger;    
        if(data.Status=="Success")    
        {       
          this.router.navigate(['/dashboard']);    
          debugger;    
        }    
        else{    
          this.errorMessage = data.Message;    
        }    
      },    
      error => {    
        this.errorMessage = error.message;    
      });    
  };    
 }     