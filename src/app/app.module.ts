import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './FrontOffice/public/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomepagefrontComponent } from './FrontOffice/homepagefront/homepagefront.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { IndexComponent } from './BackOffice/index/index.component';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './FrontOffice/public/footer/footer.component';
import { SidebarComponent } from './BackOffice/public/sidebar/sidebar.component';
import { TopHeaderComponent } from './BackOffice/public/top-header/top-header.component';
import { ListCoursesComponent } from './FrontOffice/list-courses/list-courses.component';
import { ContactUSComponent } from './FrontOffice/contact-us/contact-us.component';
import { AddCourseComponent } from './BackOffice/add-course/add-course.component';
import { UpdateCourseComponent } from './BackOffice/update-course/update-course.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepagefrontComponent,
    IndexComponent,
    FooterComponent,


    SidebarComponent,
        TopHeaderComponent,
        ListCoursesComponent,
        ContactUSComponent,
        AddCourseComponent,
        UpdateCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    IonicModule
    
    
    
    


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
