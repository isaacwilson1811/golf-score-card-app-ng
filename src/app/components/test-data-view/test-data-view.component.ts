import { Component, OnInit } from '@angular/core';

import { GolfCourseDataService } from 'src/app/services/golf-course-data.service';

@Component({
  selector: 'app-test-data-view',
  templateUrl: './test-data-view.component.html',
  styleUrls: ['./test-data-view.component.css']
})
export class TestDataViewComponent implements OnInit {

  testData_AllCourses: any = {};
  testData_OneCourse: any = {};

  constructor(
    private golfCourseDataService: GolfCourseDataService
  ) { }
  
  ngOnInit(): void {
    this.getAllCourseData();
    this.getCourseData('18300');
  }

  getAllCourseData(): void {
    this.golfCourseDataService.fetchAllData().subscribe( res => {
      this.testData_AllCourses = res;
    });
  }

  getCourseData(id:string): void {
    this.golfCourseDataService.fetchDataById(id).subscribe( res => {
      this.testData_OneCourse = res;
    });
  }

}
