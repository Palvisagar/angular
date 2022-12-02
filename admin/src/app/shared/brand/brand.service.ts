import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  baseurl :any
  token : any
  constructor(private http : HttpClient,@Inject('baseurl') _baseurl:any,private authservice : AuthService) { 
    this.baseurl = _baseurl
    this.token = this.authservice.getToken()
  }

  add(form:any){
    var header_object = new HttpHeaders().set('Authorization',"Bearer "+this.token);
    
    return this.http.post(this.baseurl+"addBrand",form,{headers:header_object})
  }
}


