import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// View Components
import { 
  CourseSelectionComponent,
  CourseDetailsComponent
} from '../components/views/index';

const routes: Routes = [
  { path: '', redirectTo: 'new', pathMatch: 'full' },
  { path: 'new', component: CourseSelectionComponent },
  { path: 'course/:id', component: CourseDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
