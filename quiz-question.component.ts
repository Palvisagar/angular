import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent implements OnInit {
  quiz_questionForm={
    quiz_name:'',
    quiz_question:'',
    option1:'',
    option2:'',
    option3:'',
    option4:''
  }
  constructor() { }

  ngOnInit(): void {
  }
}
