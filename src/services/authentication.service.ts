import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
 private url = 'http://localhost:3000/api/auth';

 constructor(private http: HttpClient) {}

 logIn(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.url}/login`, { username, password })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      }));
 }

 logOut(): void {
    localStorage.removeItem('currentUser');
 }

 private baseUrl = 'http://localhost:3000/api/auth'; // Cambia la URL por la del backend

 register(userData: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/register`, userData);
}

login(loginData: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/login`, loginData);
}
}