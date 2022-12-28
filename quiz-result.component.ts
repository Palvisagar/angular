import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {

  resultForm = {
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
