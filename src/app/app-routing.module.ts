import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { HomepagefrontComponent } from './FrontOffice/homepagefront/homepagefront.component';
import { IndexComponent } from './BackOffice/index/index.component';
import { ListCoursesComponent } from './FrontOffice/list-courses/list-courses.component';
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
          path:'courses',
          component:ListCoursesComponent
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
