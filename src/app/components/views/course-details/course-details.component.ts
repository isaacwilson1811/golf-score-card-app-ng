import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDetails, GolfCourseDataService } from 'src/app/services/golf-course-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  public courseDetails$!: Observable<CourseDetails>;

  constructor(
    private route: ActivatedRoute,
    private golfCourseDataService: GolfCourseDataService
    ) { }

  ngOnInit(): void {
    this.getCourseDetails$(this.route.snapshot.params.id);
  }

  getCourseDetails$(id:string): void {
    this.courseDetails$ = this.golfCourseDataService.fetchCourseDetails(id);
  }

}
