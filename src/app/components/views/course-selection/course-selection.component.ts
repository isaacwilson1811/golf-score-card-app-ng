import { Component, OnInit } from '@angular/core';
import { GolfCourse, GolfCourseDataService } from 'src/app/services/golf-course-data.service';

@Component({
  selector: 'app-course-selection',
  templateUrl: './course-selection.component.html',
  styleUrls: ['./course-selection.component.css']
})
export class CourseSelectionComponent implements OnInit {

  public courselist: GolfCourse[] = [];

  constructor(
    private dataService: GolfCourseDataService
  ) { }

  ngOnInit(): void {
    this.getAllCourseData();
  }

  getAllCourseData(): void {
    this.dataService.fetchGolfCoursesData().subscribe(data=>{
      this.courselist = data.courses;
    })
  }

}
