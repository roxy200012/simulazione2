import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { Feedback } from '../models/Feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
 name;
 surname;
 date;
 vote;
 notes;
 feedback:Feedback=new Feedback();
  constructor(private service:FeedbackService) { }
  submit(){
    this.feedback.name=this.name;
    this.feedback.surname=this.surname;
    this.feedback.date=this.date;
    this.feedback.notes=this.notes;
    this.service.postFeedback(this.feedback).subscribe(()=>{

      
    })
  }
  ngOnInit() {
  }

}
