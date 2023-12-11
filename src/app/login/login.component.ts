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
      
    
  ){
    this.ngOnInit();
  }
  get emailNoValido(){
    return this.loginForm.get('email')?.invalid && this.loginForm.get('email')?.touched;
  }
  
  get passwordNoValido(){
    return this.loginForm.get('password')?.invalid && this.loginForm.get('password')?.touched;
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(11)]],
    });
  }
  
  onSubmit():void{
    console.log(this.loginForm);
    if (this.loginForm.invalid){
      return Object.values(this.loginForm.controls).forEach(control=>{

        control.markAllAsTouched();
      })
    }
    this.http.post('http://localhost:3000/auth/login', this.loginForm.getRawValue(),
    {withCredentials: true}).subscribe(() => this.router.navigate(['/panel']));
  }
}
