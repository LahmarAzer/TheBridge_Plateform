// course-service.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../Model/Course';
// Angular service for handling HTTP requests related to courses.
@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
    // Base URL for the course-related API endpoints.
  private apiUrl = 'http://localhost:9090/course';
  // Injecting the HttpClient service for making HTTP requests.
  constructor(private http: HttpClient) {}

    // Method to add a new course. It takes a Course object and an image file.
  addCourse(course: Course, file: File): Observable<Course> {
    const formData: FormData = new FormData();
    formData.append('title', course.title);
    formData.append('price', course.price.toString());
    formData.append('imagePath', file, file.name);
    // Makes a POST request to add a new course and returns the observable.
    return this.http.post<Course>(`${this.apiUrl}/addCourse`, formData);
  }

    // Method to update an existing course. It takes a Course object, an optional image file, and the course ID.
  updateCourse(course: Course, file: File | null, id: number): Observable<Course> {
    const formData: FormData = new FormData();
    formData.append('title', course.title);
    formData.append('price', course.price.toString());
    if (file) {
      formData.append('image', file, file.name);
    }
    // Makes a PUT request to update the course and returns the observable.
    return this.http.put<Course>(`${this.apiUrl}/updatecourse/${id}`, formData);
  }

    // Method to fetch a course by its ID. Returns an Observable of the Course object.
  getCourseById(id: number): Observable<Course> {
        // Makes a GET request to retrieve a specific course by ID.
    return this.http.get<Course>(`${this.apiUrl}/getCourse/${id}`);
  }
  // Method to fetch all courses. Returns an Observable of an array of Course objects.
  getAllCourses(): Observable<Course[]> {
        // Makes a GET request to retrieve all courses.
    return this.http.get<Course[]>(`${this.apiUrl}/getAllCourses`);
  }
    // Method to delete a course by its ID. Returns an Observable of the HTTP response.
  deleteCourse(id: number): Observable<any> {
        // Makes a DELETE request to remove a specific course by ID.
    return this.http.delete(`${this.apiUrl}/deleteCourse/${id}`);
  }
}
