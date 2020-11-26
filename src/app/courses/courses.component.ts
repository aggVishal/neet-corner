import { Component, OnInit } from '@angular/core';
import { CoursesDataService } from '../courses-data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses = [];

  constructor(private course: CoursesDataService, private router: Router) { }

  ngOnInit(): void {
    this.courses = this.course.getCourses();
  }

  // onSelect(course) {
  //   this.router.navigate(['/courses-page', course.id]);
  // }

}
