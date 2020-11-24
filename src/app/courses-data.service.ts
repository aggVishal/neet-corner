import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesDataService {

  constructor() { }

  getCourses() {
    return [
      {
        "id": "1",
        "title": "Chemistry Course for Neet Droppers",
        "img": "assets/images/courses/droppers.jpeg",
        "teacher": "Dr. Slok Sir",
        "price": "10000",
        "cutPrice": "30000",
      },
      {
        "id": "2",
        "title": "Chemistry Course for class 11",
        "img": "assets/images/courses/11th.jpeg",
        "teacher": "Dr. Slok Sir",
        "price": "12000",
        "cutPrice": "25000",
      },
      {
        "id": "3",
        "title": "Chemistry Course for class 12",
        "img": "assets/images/courses/12th.jpeg",
        "teacher": "Dr. Slok Sir",
        "price": "12000",
        "cutPrice": "25000",
      },
      {
        "id": "4",
        "title": "Chemistry Course for freshers",
        "img": "assets/images/courses/freshers.jpeg",
        "teacher": "Dr. Slok Sir",
        "price": "12000",
        "cutPrice": "35000",
      },
    ]
  }
}
