import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

// Routing Module
import { AppRoutingModule } from './router/app-routing.module';
// 'View' components are barrel exported from the file src/app/components/views/index.ts
import { 
  CourseSelectionComponent,
  CourseDetailsComponent
} from './components/views/';

// Main app component
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/ui/top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseSelectionComponent,
    CourseDetailsComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
