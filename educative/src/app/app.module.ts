import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginDashboardComponent } from './login-dashboard/login-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ExamComponent } from './admin/exam/exam.component';
import { NotesComponent } from './admin/notes/notes.component';
import { QuizComponent } from './admin/quiz/quiz.component';
import { QuizQuestionComponent } from './admin/quiz-question/quiz-question.component';
import { QuizResultComponent } from './admin/quiz-result/quiz-result.component';
import { ViweUserComponent } from './admin/viwe-user/viwe-user.component';
import { UserComponent } from './user/user.component';
import { ViewExamComponent } from './user/view-exam/view-exam.component';
import { ViewNotesComponent } from './user/view-notes/view-notes.component';
import { ViewQuizComponent } from './user/view-quiz/view-quiz.component';
import { PlayQuizComponent } from './user/play-quiz/play-quiz.component';
import { ViewResultComponent } from './user/view-result/view-result.component';
import { GraducationComponent } from './admin/exam/graducation/graducation.component';
import { IntermediateComponent } from './admin/exam/intermediate/intermediate.component';
import { PostGraducationComponent } from './admin/exam/post-graducation/post-graducation.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    LoginDashboardComponent,
    AdminComponent,
    ExamComponent,
    NotesComponent,
    QuizComponent,
    QuizQuestionComponent,
    QuizResultComponent,
    ViweUserComponent,
    UserComponent,
    ViewExamComponent,
    ViewNotesComponent,
    ViewQuizComponent,
    PlayQuizComponent,
    ViewResultComponent,
    IntermediateComponent,
    PostGraducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
