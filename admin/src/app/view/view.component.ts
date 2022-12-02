import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor( private userservice : UserService ) { }

  ngOnInit(): void {
    this.getuser()
  }
  userdata=[]

getuser(){
  // this.spinner.show()
    this.userservice.getuser().subscribe({
  next:(res:any)=>{
      // this.spinner.hide()
      this.userdata=res.response.data
    },
    error:(err:any)=>{

      // this.spinner.hide()
      console.log(err)
    },
    complete:()=>{
      // this.spinner.hide()
    }
  })
}
deleteuser(id:any)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userservice.deleteuser(id).subscribe({
          next:(result:any)=>{
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.getuser()
          },
          error:(err:any)=>{
            Swal.fire(
              'Try Again!',
              'Your file has not been deleted.',
              'error'
            )
          }
        })
      }
    })
  }
}

