import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { HomepagefrontComponent } from './FrontOffice/homepagefront/homepagefront.component';
import { IndexComponent } from './BackOffice/index/index.component';
import { AddCourseComponent } from './BackOffice/add-course/add-course.component';
const routes: Routes = [
   
        
        {
          path:'home',
          component:HomepagefrontComponent
        }
        ,{
          path:'admin',
          component:IndexComponent
        },
        {
          path:'addCourse',
          component:AddCourseComponent
        },

        {
        path: "",
        redirectTo: "/home",
          pathMatch: "full",
        }
   
  
  
  
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
