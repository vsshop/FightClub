import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DataService } from '../services/program/data.service';

@Injectable({
  providedIn: 'root'
})
export class InitGuard implements CanActivate {

  constructor(private data: DataService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let isReady = this.data.init;
    if (!isReady) 
      this.router.navigate(['/']);
    
    return isReady;
  }
}
