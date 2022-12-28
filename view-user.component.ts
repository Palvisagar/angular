import { Component , OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  userForm = {
    user_name:'',
    quiz_name:'',
    quiz_type:'',
    quiz_question:'',
    quiz_result:'',
    quiz_total:''
  }

  constructor() { }

  ngOnInit(): void {
  }
}
