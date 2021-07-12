import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';



import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  { path: "", component:HomepageComponent },
  {path:"feedback",component:FeedbackComponent}

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
