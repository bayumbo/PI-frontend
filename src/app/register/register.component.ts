import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import {user} from '../interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent  implements OnInit{
 
    registerForm!: FormGroup;
    datosFormulario: user = new user();

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router:Router,
    private userService :ApiService
  ) 
{
  
  this.ngOnInit();
}

get userNoValido(){
  return this.registerForm.get('username')?.invalid && this.registerForm.get('username')?.touched;
}
get emailNoValido(){
  return this.registerForm.get('email')?.invalid && this.registerForm.get('email')?.touched;
}

get passwordNoValido(){
  return this.registerForm.get('password')?.invalid && this.registerForm.get('password')?.touched;
};

user: user = {
  username: '',
  email: '',
  password:'',
};

  ngOnInit(): void{
    this.getUser();
    this.registerForm=this.formBuilder.group({
      username:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      email: ['',[Validators.required,Validators.email,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(11)]],
    }
    
    );
  }
  getUser(){
    this.userService.getUsers()
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  };

  saveUser(){
    this.userService.createUser(this.user).subscribe((data)=>{
      this.router.navigateByUrl('');
      alert('Usuario creado');
    },(error)=>{
      alert('Error al crear usuario');
    });
  }


  onSubmit(): void {
    this.userService.createUser(this.user).subscribe((data)=>{
      this.router.navigateByUrl('');
      alert('Usuario creado');
    },(error)=>{
      alert('Error al crear usuario');
    });
   this.http.post('http://localhost:3000/auth/register',this.registerForm.getRawValue())
    .subscribe(() =>this.router.navigate(['/login'])
      
    );
  }

}


