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
    // Array to hold courses for the current page.
  paginatedCourses: Course[] = [];
    // Current page number for pagination.
  currentPage: number = 1;
    // Number of items (courses) to display per page.
  itemsPerPage: number = 6;
  // Injecting CourseServiceService to fetch course data.
  constructor(private courseService: CourseServiceService) {}

  ngOnInit(): void {
        // Subscribe to the course service to get all courses.
    this.courseService.getAllCourses().subscribe(
      (courses) => {
        this.courses = courses;// Store fetched courses.
        this.paginateCourses(); // Initialise the paginatedCourses array
      },
      (error) => {
        console.error('Error fetching courses', error);
      }
    );
  }
  // Extracts the filename from a given file path.
  getImageFileName(path: string): string {
    const pathParts = path.split('/');
    const fileName = pathParts[pathParts.length - 1];
    return fileName;
  }
  // Slices the courses array for pagination based on currentPage and itemsPerPage.
  paginateCourses(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedCourses = this.courses.slice(startIndex, endIndex);
  }
  // Changes the current page and updates paginated courses accordingly.
  goToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.paginateCourses();
  }
  // Generates an array of page numbers for pagination controls.
  pageNumbers(): number[] {
    const pageCount = Math.ceil(this.courses.length / this.itemsPerPage);
    return Array(pageCount).fill(0).map((x, i) => i + 1);
  }
}
