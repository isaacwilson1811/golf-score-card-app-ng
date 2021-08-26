import { Component, OnInit } from '@angular/core';

import { GolfCourseDataService } from 'src/app/services/golf-course-data.service';

@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.css']
})
export class TestDataComponent implements OnInit {

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
    this.golfCourseDataService.fetchAllData().subscribe( data => {
      this.testData_AllCourses = data;
    });
  }

  getCourseData(id:string): void {
    this.golfCourseDataService.fetchDataById(id).subscribe( data => {
      this.testData_OneCourse = data;
    });
  }

}
