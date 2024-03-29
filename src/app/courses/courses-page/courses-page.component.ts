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

  public inorganic = [];
  public physical = [];
  public organic = [];

  public isTS;

  constructor(private course: CoursesDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.courses = this.course.getCourses();
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.courseID = id;
    this.courseDetails = this.courses[id - 1];
    this.inorganic = this.courseDetails.inorganicSyllabus;
    this.organic = this.courseDetails.organicSyllabus;
    this.physical = this.courseDetails.physicalSyllabus;
    this.isTS=this.courseDetails.isTS;
  }
  
}
