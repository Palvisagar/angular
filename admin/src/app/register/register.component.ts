import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user/user.service';
import { ToastrService } from 'ngx-toastr';
// import { NgxSpinnerModule } from "ngx-spinner";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = {
    name:'',
    email:'',
    password:''
  }

  constructor( private toastr : ToastrService,private router : Router,private userservice : UserService) { }

  ngOnInit(): void {
  }
  
  regi(){
    this.userservice.register(this.registerForm).subscribe({

      next:(res:any)=>{
        console.log(res.response.status)
        if(res.response.status == true)
        {
          this.toastr.success("Success",res.response.msg)
          this.router.navigateByUrl("/login")
        }
        else{
          this.toastr.error("Error",res.response.msg)
        }
        
      },
      error:(err)=>{
        this.toastr.error("Error","Try Again")
      },
      complete:()=>{}
    })
  }

}
