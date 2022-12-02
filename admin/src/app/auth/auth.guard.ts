import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authservice : AuthService,private router : Router) { }

  canActivate():boolean{
    // console.log(this._authservice.getEmail())
    if(this._authservice.getToken() == null)
    {
        this.router.navigateByUrl("/login")
        return false
    }
    else{
        return true
    }
  }
}