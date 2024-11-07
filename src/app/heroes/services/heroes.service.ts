import { catchError, map, Observable, of } from 'rxjs';
import { enviroment } from '../../../enviroments/enviroment';
import { Heroe } from '../interfaces/hero.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class HeroesService {

  private baseURL : string = enviroment.baseURL;
  constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.httpClient.get<Heroe[]>(`${this.baseURL}/heroes`);
  }

  getHeroById(id :string): Observable<Heroe | undefined>{
    return this.httpClient.get<Heroe>(`${this.baseURL}/heroes/${id}`)
    .pipe(catchError( error => of(undefined)));
  }

  getSuggestions(query : string): Observable<Heroe[]>{
    return this.httpClient.get<Heroe[]>(`${this.baseURL}/heroes?q=${query}&_limit=6`);
  }

  addHero(hero: Heroe): Observable<Heroe>{
    return this.httpClient.post<Heroe>(`${this.baseURL}/heroes`, hero);
  }

}
