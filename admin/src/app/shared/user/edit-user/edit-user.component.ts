import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  edit_user=new FormGroup({
    'name':new FormControl(''),
    'email':new FormControl(''),
    'password': new FormControl('')
 })

 id:any
  constructor( private activatrdroute:ActivatedRoute, private user: UserService, private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.activatrdroute.snapshot.paramMap.get('id')
    this.getdata()
  }
  getdata(){
    this.user.getsingleuser(this.id).subscribe({
      next:(result:any)=>{
        this.edit_user.patchValue({'name':result.response.data.name})
        this.edit_user.patchValue({'email':result.response.data.email})
      
      },
      error:(err:any)=>{

      }
    })
  }

  update(){
    this.user.updateuser(this.id,this.edit_user.value).subscribe({
      next:(result:any)=>{
        if(result.response.status==true){
          this.toastr.success("Sucess",result.response.msg)
          this.router.navigateByUrl("/layout/viewuser")
        }
        else{
          this.toastr.error("Error",result.response.msg)
        }
      },
      error:(err:any)=>{

      }
    })
  }
}
