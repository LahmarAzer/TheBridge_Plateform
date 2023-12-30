// add-course.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from 'src/app/Model/Course';
import { CourseServiceService } from 'src/app/Services/course-service.service';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  course: Course = new Course();
  selectedFile: File | null = null;

  constructor(private courseService: CourseServiceService) {}

  onSubmit(form: NgForm) {
    if (form.valid && this.selectedFile) {
      this.courseService.addCourse(this.course, this.selectedFile).subscribe(
        response => {
          console.log('Course added successfully!', response);
          form.reset();
          // Ici, vous pouvez ajouter une redirection ou un autre comportement après la soumission réussie
        },
        error => console.error('Error adding course', error)
      );
    }
  }

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
