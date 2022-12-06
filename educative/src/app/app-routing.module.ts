import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './admin/category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';

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
  ]
},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
