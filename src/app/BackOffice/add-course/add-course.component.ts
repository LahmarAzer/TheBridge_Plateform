// add-course.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    private courseService: CourseServiceService,
    private router: Router
  ) {}

  onSubmit(form: NgForm) {
    if (form.valid && this.selectedFile) {
      this.courseService.addCourse(this.course, this.selectedFile).subscribe(
        response => {
          alert('Course added successfully!');
          this.router.navigate(['/admin']); // Assurez-vous que ce chemin correspond à votre route de liste de cours.
          form.reset();
        },
        error => {
          console.error('Error adding course', error);
          alert('Failed to add course.');
        }
      );
    } else {
      alert('Please fill all the fields correctly.');
    }
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }
}
