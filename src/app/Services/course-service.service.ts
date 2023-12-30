// course-service.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../Model/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  private apiUrl = 'http://localhost:9090/course';

  constructor(private http: HttpClient) {}

  addCourse(course: Course, file: File): Observable<Course> {
    const formData: FormData = new FormData();
    formData.append('title', course.title);
    formData.append('price', course.price.toString());
    formData.append('imagePath', file, file.name);

    return this.http.post<Course>(`${this.apiUrl}/addCourse`, formData);
  }

  updateCourse(course: Course, file: File | null, id: number): Observable<Course> {
    const formData: FormData = new FormData();
    formData.append('title', course.title);
    formData.append('price', course.price.toString());
    if (file) {
      formData.append('image', file, file.name);
    }

    return this.http.put<Course>(`${this.apiUrl}/updatecourse/${id}`, formData);
  }

  
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/getCourse/${id}`);
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/getAllCourses`);
  }
  
  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteCourse/${id}`);
  }
}
