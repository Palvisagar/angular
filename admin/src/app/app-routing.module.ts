import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../app/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import{ AuthGuard} from './auth/auth.guard';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { EditUserComponent } from './shared/user/edit-user/edit-user.component';
import { brandComponent } from './brand/brand/brand.component';
const routes: Routes = [
  {
    path:'',redirectTo:'/login',pathMatch:'full'
  },
  {
     path:'layout',component:LayoutComponent,
    children:[
        {
          path:'dashboard',component:DashboardComponent
        },
        {
          path:'view',component:ViewComponent
        },
        {
          path:'edit_user/:id',component:EditUserComponent
        }
       
    ]
  },
  {
    path:'login',component:LoginComponent
  },

  {
    path:'register',component:RegisterComponent
  },
  {
    path:'brand',component:brandComponent
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
