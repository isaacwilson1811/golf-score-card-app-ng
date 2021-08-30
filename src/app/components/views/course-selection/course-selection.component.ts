import { Component, OnInit } from '@angular/core';
import { GolfCourse, GolfCourseDataService } from 'src/app/services/golf-course-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-selection',
  templateUrl: './course-selection.component.html',
  styleUrls: ['./course-selection.component.css']
})
export class CourseSelectionComponent implements OnInit {

  public courseList$!: Observable<GolfCourse[]>; // the ! is to declare a definite type

  constructor(
    private dataService: GolfCourseDataService,
  ) { }

  ngOnInit(): void {
    this.getCourseList$()
  }

  getCourseList$(): void {
    this.courseList$ = this.dataService.fetchGolfCourses()
    // this.dataService.fetchGolfCoursesData().subscribe(data=>{
    //   this.courselist = data;
    // })
  }

}
