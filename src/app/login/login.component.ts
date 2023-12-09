import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
      
    
  ){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:'',
      password:''
    });
  }
  onSubmit():void{
    this.http.post('http://localhost:3000/auth/login', this.loginForm.getRawValue(),
    {withCredentials: true}).subscribe(() => this.router.navigate(['/panel']));
  }
}
