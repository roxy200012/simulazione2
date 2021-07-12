import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from './models/Feedback';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
 apiUrl="http://localhost:3000/feedback"
  constructor(private http:HttpClient) { }
  postFeedback(feedback):Observable<Feedback>{
    return this.http.post<Feedback>(this.apiUrl,feedback);
  }
}
