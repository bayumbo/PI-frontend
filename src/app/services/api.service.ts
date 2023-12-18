import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService { 
  
  BASE_URL: string = 'http://localhost:3000'; 
  constructor(private http: HttpClient) { }

  getUsers(): Observable<user[]>{
    return this.http.get<user[]>(`${this.BASE_URL}/users`);
  }
  getUser(id: number): Observable<user>{
    return this.http.get<user>(`${this.BASE_URL}/users/${id}`);
  } 
  createUser(user: user): Observable<user> {
    return this.http.post<user>(`${this.BASE_URL}/users`,user);
  }
  deleteUser(id: string): Observable<user>{
    return this.http.delete<user>(`${this.BASE_URL}/users/?userID=${id}`)
  }
  updateUser(id: string, user: user): Observable<user>{
    return this.http.put<user>(`${this.BASE_URL}/users/?userID=${id}`,user)
  }
  
  
  
}
