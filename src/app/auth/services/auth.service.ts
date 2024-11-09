import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroment';
import { User } from '../interfaces/user.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  private baseUrl = enviroment.baseURL;
  private user?: User;

   constructor( private http: HttpClient) { }


   get currentUser() : User | undefined {
    if (!this.user) return;

    return structuredClone (this.user);

   }

   login (email : string, password : string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/1`)
    .pipe(
      tap( user => {
        this.user = user;
        localStorage.setItem('token', 'sdf423534f.123123asd.weqwe123e');
      })
    )
    ;
   }

   checkAuthentication(): Observable<boolean> {
    if (!localStorage.getItem('token')) return of(false);

    const token = localStorage.getItem('token');

    return this.http.get<User>(`${this.baseUrl}/users/1`)
    .pipe(
      tap(user => this.user = user),
      map(user => !!user),
      catchError( error => of(false))
    )
  }

   logout(){
    this.user = undefined;
    localStorage.clear();
   }

}
