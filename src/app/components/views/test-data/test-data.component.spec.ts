import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDataViewComponent } from './test-data.component';

describe('TestDataViewComponent', () => {
  let component: TestDataViewComponent;
  let fixture: ComponentFixture<TestDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDataViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
