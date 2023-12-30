// update-course.component.ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseServiceService } from 'src/app/Services/course-service.service';
import { Course } from 'src/app/Model/Course';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  course: Course = new Course();
  selectedFile: File | null = null;

  constructor(
    private courseService: CourseServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const courseId = Number(this.route.snapshot.paramMap.get('id'));
    if (courseId) {
      this.courseService.getCourseById(courseId).subscribe(
        (data) => {
          this.course = data;
        },
        (error) => {
          console.error('Failed to get course', error);
          // Handle not found course or show notification
        }
      );
    }
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid && this.course.id) {
      this.courseService.updateCourse(this.course, this.selectedFile, this.course.id).subscribe(
        (response) => {
          console.log('Course updated successfully!', response);
          alert('Course updated successfully!');

          // Redirect to course list or display success message
          this.router.navigate(['/admin']); // Ensure this route is correct
        },
        (error) => {
          alert('Failed to update course.');
          console.error('Error updating course', error);
          // Display error notification if needed
        }
      );
    } else {
      alert('Please fill all the fields correctly.');
    }
  }
}
