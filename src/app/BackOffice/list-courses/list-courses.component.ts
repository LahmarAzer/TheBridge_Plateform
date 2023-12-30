import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/Services/course-service.service';
import { Course } from 'src/app/Model/Course';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseServiceService) {}

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(
      (data) => {
        this.courses = data;
      },
      (error) => {
        console.error('Failed to get courses', error);
      }
    );
  }

  getImageFileName(path: string): string {
    const pathParts = path.split('/');
    return pathParts[pathParts.length - 1];
  }
}
