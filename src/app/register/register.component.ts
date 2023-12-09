import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent  implements OnInit{
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router:Router
  ) 
{}
  ngOnInit(): void{
    this.registerForm=this.formBuilder.group({
      username:'',
      email: '',
      password: ''
    });
  }

  onSubmit(): void {
   this.http.post('http://localhost:3000/auth/register',this.registerForm.getRawValue())
    .subscribe(() =>this.router.navigate(['/login'])
      
    );
  }

}


