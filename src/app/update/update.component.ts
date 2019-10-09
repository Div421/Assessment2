import { Component, OnInit } from '@angular/core';
import { personalinfo } from '../personalinfo';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id:number;
  personalInfo1:personalinfo;

  constructor(private svc:DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.svc.personalInfo.forEach(element => {
      if(element.id == this.id){
         this.personalInfo1 = element;
      }
    });
    
  }

  editPersonal() {
    this.svc.personalInfo[this.svc.personalInfo.indexOf(this.personalInfo1)] = this.personalInfo1;
  }

}
