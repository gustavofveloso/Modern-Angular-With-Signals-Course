import { Component, inject, signal } from '@angular/core';
import { Course } from '../models/course.model';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
})
export class CourseComponent {
  courses = signal<Course[]>([]);

  coursesService = inject(CoursesService);
}
