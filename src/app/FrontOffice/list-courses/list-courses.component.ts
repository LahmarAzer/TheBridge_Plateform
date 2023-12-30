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

  constructor(private courseService: CourseServiceService) {}

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(
      (courses) => {
        this.courses = courses;
      },
      (error) => {
        console.error('Error fetching courses', error);
      }
    );
  }


  getImageFileName(path: string): string {
    // Séparez le chemin en utilisant le séparateur de dossier '/'
    const pathParts = path.split('/');
    // Récupérez le dernier élément du tableau, qui est le nom de fichier
    const fileName = pathParts[pathParts.length - 1];
    console.log('Chemin de l\'image :', fileName);
    return fileName;
  }
}
