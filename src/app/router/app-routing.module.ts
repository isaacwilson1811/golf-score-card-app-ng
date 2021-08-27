import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// View Components
import { 
  TestDataComponent,
  CourseSelectionComponent
} from '../components/views/';

const routes: Routes = [
  { path: '', redirectTo: 'new', pathMatch: 'full' },
  { path: 'new', component: CourseSelectionComponent },
  { path: 'test', component: TestDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
