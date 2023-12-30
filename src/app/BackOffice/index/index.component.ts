// index.component.ts
import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from 'src/app/Services/course-service.service';
import { Course } from 'src/app/Model/Course';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
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

  deleteCourse(id: number): void {
    if(confirm('Are you sure you want to delete this course?')) {
      this.courseService.deleteCourse(id).subscribe(
        () => {
          console.log('Course deleted successfully');
          this.courses = this.courses.filter(course => course.id !== id);
        },
        (error) => {
          console.error('Failed to delete course', error);
        }
      );
    }
  }}
