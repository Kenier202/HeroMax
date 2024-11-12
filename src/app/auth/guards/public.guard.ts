import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, Observable, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PublicGuard implements CanActivate, CanMatch {

  constructor(private autService: AuthService, private routes: Router) { }

  private isLoggedIn(): boolean | Observable<boolean>{
    return this.autService.checkAuthentication()
    .pipe(
      tap( isLoggin => {
        if (isLoggin){
          this.routes.navigate(['./']);
        }
      }),
      map( isLoggin => !isLoggin)
    );
  }

  canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {

    return this.isLoggedIn();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.isLoggedIn();
  }

}
