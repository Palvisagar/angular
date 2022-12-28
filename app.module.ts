import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './admin/category/category.component';
import { NotesComponent } from './admin/notes/notes.component';
import { QuizComponent } from './admin/quiz/quiz.component';
import { QuizQuestionComponent } from './admin/quiz-question/quiz-question.component';
import { QuizResultComponent } from './admin/quiz-result/quiz-result.component';
import { LoginComponent } from './admin/login/login.component';
import { ViewUserComponent } from './admin/view-user/view-user.component';
import { UserComponent } from './user/user.component';
import { Header1Component } from './user/header1/header1.component';
import { ViewcategoryComponent } from './user/viewcategory/viewcategory.component';
import { ViewnotesComponent } from './user/viewnotes/viewnotes.component';
import { ViewquizComponent } from './user/viewquiz/viewquiz.component';
import { ViewresultComponent } from './user/viewresult/viewresult.component';
import { RegisterComponent } from './user/register/register.component';
import { QuizTestComponent } from './user/quiz-test/quiz-test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CategoryComponent,
    NotesComponent,
    QuizComponent,
    QuizQuestionComponent,
    QuizResultComponent,
    LoginComponent,
    ViewUserComponent,
    UserComponent,
    Header1Component,
    ViewcategoryComponent,
    ViewnotesComponent,
    ViewquizComponent,
    ViewresultComponent,
    RegisterComponent,
    QuizTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
