import { Component, OnInit } from '@angular/core';
import { personalinfo } from '../personalinfo';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { eduinfo } from '../eduinfo';

@Component({
  selector: 'app-update-edu',
  templateUrl: './update-edu.component.html',
  styleUrls: ['./update-edu.component.css']
})
export class UpdateEduComponent implements OnInit {

  id:number;
  eduInfo1:eduinfo;

  constructor(private svc:DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.eduInfo.forEach(element => {
      if(element.id == this.id){
         this.eduInfo1 = element;
         
      }
    });
  }

  editEdu() {
    
    this.svc.eduInfo[this.svc.eduInfo.indexOf(this.eduInfo1)] = this.eduInfo1;
    console.log(this.svc.eduInfo)
    
  }


}
