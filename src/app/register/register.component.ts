import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup= new FormGroup({});

  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router){
  }
  ngOnInit(){
    this.formRegister = this.formBuilder.group({
      username:[''],
      email:[''],
      password: ['']

    });

  }
  submit():void{
    this.http.post('http://localhost:3000/auth/register', this.formRegister.getRawValue())
    .subscribe( res =>{
      console.log(res);
    });
  }

}


