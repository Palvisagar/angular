import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import{ToastrService} from 'ngx-toastr';
import { UserService } from '../shared/user/user.service';
import { AuthService } from '../shared/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),})

  constructor(private router : Router, private toastr : ToastrService, private userservice : UserService , private authservice : AuthService) { }

  ngOnInit(): void {
  }
  login(){
    this.userservice.login(this.loginForm.value).subscribe({
      next:(result:any)=>{
        if(result.response.status)
        {
          this.authservice.createData(result.response)
          this.toastr.success("sucessfull",result.response.msg)
          this.router.navigateByUrl('/layout/dashboard')
        }
        else{
          this.toastr.error("Try Again!!",result.response.msg)
        }
        error:(err:any)=>{
          this.toastr.error("server error",err)
        }
      }
    })
    
  }
}
