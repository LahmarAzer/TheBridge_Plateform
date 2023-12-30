// update-course.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseServiceService } from 'src/app/Services/course-service.service';
import { Course } from 'src/app/Model/Course';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent {
  course: Course = new Course();
  selectedFile: File | null = null;

  constructor(
    private courseService: CourseServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get course id from route parameters and retrieve the course details
    const courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.courseService.getCourseById(courseId).subscribe(
      (data) => {
        this.course = data;
      },
      (error) => {
        console.error('Failed to get course', error);
      }
    );
  }

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const courseId = this.course.id;
      this.courseService.updateCourse(this.course, this.selectedFile, courseId).subscribe(
        (response) => {
          console.log('Course updated successfully!', response);
          // Redirect to course list or display success message
        },
        (error) => {
          console.error('Error updating course', error);
        }
      );
    }
  }
}
