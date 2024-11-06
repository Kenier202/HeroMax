import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/hero.interface';
import { enviroment } from '../../../enviroments/enviroment';

@Injectable({providedIn: 'root'})
export class HeroesService {

  private baseURL : string = enviroment.baseURL;
  constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.httpClient.get<Heroe[]>(`${this.baseURL}/heroes`);
  }


}
