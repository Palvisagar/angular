import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './admin/category/category.component';
import { LoginComponent } from './admin/login/login.component';
import { NotesComponent } from './admin/notes/notes.component';
import { QuizQuestionComponent } from './admin/quiz-question/quiz-question.component';
import { QuizResultComponent } from './admin/quiz-result/quiz-result.component';
import { QuizComponent } from './admin/quiz/quiz.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { ViewUserComponent } from './admin/view-user/view-user.component';
import {UserComponent} from'./user/user.component';
import { ViewcategoryComponent } from './user/viewcategory/viewcategory.component';
import { ViewnotesComponent } from './user/viewnotes/viewnotes.component';
import { ViewquizComponent } from './user/viewquiz/viewquiz.component';
import { ViewresultComponent } from './user/viewresult/viewresult.component';
import { RegisterComponent} from './user/register/register.component';
import { QuizTestComponent } from './user/quiz-test/quiz-test.component';

const routes: Routes = [ 
{
  path:'',redirectTo:'/layout/dashboard',pathMatch:'full'
},
{
  path:'layout',component:LayoutComponent,
  children:[
    {
      path:'dashboard',component:DashboardComponent,
    },
    {
      path:'category',component:CategoryComponent,
     },
     {
      path:'notes',component:NotesComponent,
     },
     {
      path:'quiz',component:QuizComponent,
     },
     {
      path:'quiz_question',component:QuizQuestionComponent,
     },
     {
      path:'quiz_result',component:QuizResultComponent,
     },
     {
      path:'view_user',component:ViewUserComponent,
     },
     
  ]
},
{
  path:'login',component:LoginComponent,
},
{
  path:'user',component:UserComponent,
  children:[
    {
      path:'viewcategory',component:ViewcategoryComponent,
    },
    {
      path:'viewnotes',component:ViewnotesComponent,
    },
    {
      path:'viewquiz',component:ViewquizComponent,
    },
    {
      path:'quiztest',component:QuizTestComponent,
    },
    {
      path:'viewresult',component:ViewresultComponent,
    },
  ]
},
{
  path:'register',component:RegisterComponent,
},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
