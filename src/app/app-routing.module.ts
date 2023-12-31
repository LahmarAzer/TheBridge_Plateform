import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { HomepagefrontComponent } from './FrontOffice/homepagefront/homepagefront.component';
import { IndexComponent } from './BackOffice/index/index.component';
import { AddCourseComponent } from './BackOffice/add-course/add-course.component';
import { UpdateCourseComponent } from './BackOffice/update-course/update-course.component';
const routes: Routes = [
   
            // Route for the homepage.
        {
          path:'home',
          component:HomepagefrontComponent
        }
            // Route for the admin page.
        ,{
          path:'admin',
          component:IndexComponent
        },
            // Route for adding a course.
        {
          path:'addCourse',
          component:AddCourseComponent
        },
            // Route for updating a course. ':id' is a route parameter.
        {
          path:'updateCourse/:id',
          component:UpdateCourseComponent
        },
            // Default route. Redirects to '/home' if no other paths match.
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
