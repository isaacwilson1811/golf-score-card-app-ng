import { Component, OnInit } from '@angular/core';
import { GolfCourse, GolfCourseDataService } from 'src/app/services/golf-course-data.service';
import { Observable } from 'rxjs';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-course-selection',
  templateUrl: './course-selection.component.html',
  styleUrls: ['./course-selection.component.css']
})
export class CourseSelectionComponent implements OnInit {

  public courseList$!: Observable<GolfCourse[]>; // the ! is to declare a definite type

  constructor(
    private dataService: GolfCourseDataService,
    private storageService: SessionStorageService
  ) { }

  ngOnInit(): void {
    this.storageService.set({selectedGolfCourse: 'none'});
    this.getCourseList$();
  }

  getCourseList$(): void {
    this.courseList$ = this.dataService.fetchGolfCourses()
  }

  saveSelectedCourse(id:string): void {
    this.storageService.set({selectedGolfCourse: id})
  }

}
