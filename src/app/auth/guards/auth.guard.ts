import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, GuardResult, MaybeAsync, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate,CanMatch {

  constructor() { }

  canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    console.log("can match");

    console.log(segments, route);
    return true;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    console.log("can activate");
    console.log(route, state);
    return true;
  }

}
