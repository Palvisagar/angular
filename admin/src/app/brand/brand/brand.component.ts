import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/shared/brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class brandComponent implements OnInit {

    brandForm = new FormGroup({
    brand_name : new FormControl(),
    brand_logo: new FormControl()
  })
  constructor(private spinner : NgxSpinnerService, private toastr : ToastrService, private brand : BrandService) { }

  ngOnInit(): void {
  }
  
  photo(event:any){
    this.brandForm.patchValue({'brand_logo':event.target.files[0]})
  }

  submit(){
    this.spinner.show()
    const data = new FormData()
    data.append('brand_name',this.brandForm.value.brand_name)
    data.append('brand_logo',this.brandForm.value.brand_logo)

    this.brand.add(data).subscribe({
      next:(result:any)=>{
        this.spinner.hide()
        if(result.response.status)
        {
          this.toastr.success("Success",result.response.msg)
        }
        else{
          this.toastr.error("Try again",result.response.msg)
        }
      },
      error:(err:any)=>{
        this.spinner.hide()
        console.log(err)
        this.toastr.error("server error",err)

      },
      
    })
  }
}
