import { Component, OnInit } from '@angular/core';
import { Parco } from '../models/parco';
import { ParcoService } from '../parco.service';
@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  parchi:Parco[]=[];
   starttime:string;
  constructor( private service:ParcoService) { }
 filteredData=[];

 search(){
   if(this.starttime=" "){
    this.service.getParchi().subscribe(data=>{
      this.parchi=data;
      
    });
   }else{
    this.service.getParchi().subscribe(data=>{ 
      this.parchi=data;
      this.filteredData=this.parchi.filter(item=>item.starttime=this.starttime );
     console.log(this.filteredData);
    
    }) 
   }
      
 }
  
  ngOnInit() {
    this.service.getParchi().subscribe(data=>{ 
      this.parchi=data;
    });
  }

}
