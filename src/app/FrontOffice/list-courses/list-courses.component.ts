import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Model/Course';
import { CourseServiceService } from 'src/app/Services/course-service.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {
  courses: Course[] = [];
  paginatedCourses: Course[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 6;

  constructor(private courseService: CourseServiceService) {}

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(
      (courses) => {
        this.courses = courses;
        this.paginateCourses(); // Initialise the paginatedCourses array
      },
      (error) => {
        console.error('Error fetching courses', error);
      }
    );
  }

  getImageFileName(path: string): string {
    const pathParts = path.split('/');
    const fileName = pathParts[pathParts.length - 1];
    return fileName;
  }

  paginateCourses(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedCourses = this.courses.slice(startIndex, endIndex);
  }

  goToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.paginateCourses();
  }

  pageNumbers(): number[] {
    const pageCount = Math.ceil(this.courses.length / this.itemsPerPage);
    return Array(pageCount).fill(0).map((x, i) => i + 1);
  }
}
