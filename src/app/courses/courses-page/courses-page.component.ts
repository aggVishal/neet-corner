import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesDataService } from '../../courses-data.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

  public courseDetails;
  public courses = [];
  public courseID;

  constructor(private course: CoursesDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.courses = this.course.getCourses();
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.courseID = id;
    this.courseDetails = this.courses[id - 1];
  }
}
