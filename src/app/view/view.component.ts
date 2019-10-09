import { Component, OnInit } from '@angular/core';
import { eduinfo } from '../eduinfo';
import { personalinfo } from '../personalinfo';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  personalInfo:personalinfo[]=[];
  eduInfo:eduinfo[]=[];

  constructor(private svc:DataService) { }

  ngOnInit() {
    this.personalInfo = this.svc.personalInfo;
    this.eduInfo = this.svc.eduInfo;

  }
  remove(i:number)
  {
    console.log("remove")
    this.svc.eduInfo.splice(i,1);
    this.svc.personalInfo.splice(i,1);
    console.log(this.svc.personalInfo)
    console.log(this.svc.eduInfo)
  }
  

}
