import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/footer/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageControllerComponent } from './homepage-controller/homepage-controller.component';
import { ListPageComponent } from './list-page/list-page.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    HomepageControllerComponent,
    ListPageComponent,
    FeedbackComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
