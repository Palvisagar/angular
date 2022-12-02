import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  createData(response:any){
    localStorage.setItem("email",response.data.email)
    localStorage.setItem("token",response.token)
  }

  getEmail(){
    return localStorage.getItem("email")
  }
  getToken(){
    return localStorage.getItem("token")
  }

  removeData(){
    localStorage.removeItem("email")
  }
}
