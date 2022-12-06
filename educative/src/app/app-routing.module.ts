import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../app/layout/layout.component';
import { AdminComponent } from './admin/admin.component';
import { ExamComponent } from './admin/exam/exam.component';
import { GraducationComponent } from './admin/exam/graducation/graducation.component';
import { IntermediateComponent } from './admin/exam/intermediate/intermediate.component';
import { PostGraducationComponent } from './admin/exam/post-graducation/post-graducation.component';
import { NotesComponent } from './admin/notes/notes.component';
import { QuizQuestionComponent } from './admin/quiz-question/quiz-question.component';
import { QuizResultComponent } from './admin/quiz-result/quiz-result.component';
import { QuizComponent } from './admin/quiz/quiz.component';
import { ViweUserComponent } from './admin/viwe-user/viwe-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginDashboardComponent } from './login-dashboard/login-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/layout/dashboard',pathMatch:'full'
  },
  {
    path:'logindashboard',component:LoginDashboardComponent
  },
  {
     path:'layout',component:LayoutComponent,
    children:[
        {
          path:'dashboard',component:DashboardComponent
        },   
    ]
  },
  {
    path:'login',component:LoginComponent
  },

  {
    path:'register',component:RegisterComponent
  },
  {
    path:'admin',component:AdminComponent,
    children:[
      
       {
        path:'notes',component:NotesComponent,
       },
       {
        path:'quiz',component:QuizComponent,
       },
       {
        path:'quiz-question',component:QuizQuestionComponent,
       },
       {
        path:'quiz-result',component:QuizResultComponent,
       },
       {
        path:'view-user',component:ViweUserComponent
       },
    ]
  },
  {
    path:'exam',component:ExamComponent,
    children:[
      {
        path:'intermediate',component:IntermediateComponent,
      },
      {
        path:'graducation',component:GraducationComponent,
      },
      {
        path:'post-graducation',component:PostGraducationComponent,
      }
    ]
   },
  

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
