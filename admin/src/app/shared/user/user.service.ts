import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //global
  baseurl :any
  token : any
  constructor(private http : HttpClient,@Inject('baseurl') _baseurl:any,private authservice : AuthService) { 
    this.baseurl = _baseurl
    this.token = this.authservice.getToken()
  }

  register(form:any){
      return this.http.post(this.baseurl+"registeruser",form)
  }

  login(form:any){
    return this.http.post(this.baseurl+"login",form)
  }
  
  getuser(){
    // console.log(this.token)
    var header_object = new HttpHeaders().set('Authorization',"Bearer "+this.token);

    return this.http.get(this.baseurl+"getStudent",{headers:header_object})
  }
  getsingleuser(id:any){
    var header_object = new HttpHeaders().set('Authorization',"Bearer "+this.token);
    return this.http.get(this.baseurl+"getStudentById/"+id,{headers:header_object})
  }
  
  updateuser(id:any,form:any){
    var header_object = new HttpHeaders().set('Authorization',"Bearer "+this.token);
    return this.http.post(this.baseurl+"updateStudent/"+id,form,{headers:header_object})
  }

  deleteuser(id:any){
    var header_object = new HttpHeaders().set('Authorization',"Bearer "+this.token);
    return this.http.delete(this.baseurl+"deleteStudent/"+id,{headers:header_object})

  }
}
