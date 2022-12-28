import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})
export class ViewcategoryComponent {
  viewcategoryForm = {
    view_category:''
  }

  constructor() { }

  ngOnInit(): void {
  }
}
