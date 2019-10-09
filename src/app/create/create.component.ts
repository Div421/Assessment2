import { Component, OnInit } from '@angular/core';
import { eduinfo } from '../eduinfo';
import { personalinfo } from '../personalinfo';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  name:string;
  dob:string;
  addr:string;
  phone:number;
  degree:String;
  marks:number;
  stream:string;
  college:string;
  newEduInfo:eduinfo;
  newPersonalInfo:personalinfo;

  constructor(private svc:DataService) { }

  ngOnInit() {
  }

  create(){
      this.newPersonalInfo = new personalinfo(this.name,this.dob,this.addr,this.phone);
     
      this.svc.personalCreate(this.newPersonalInfo);
      this.newEduInfo = new eduinfo(this.degree,this.marks,this.stream,this.college);
      
      this.svc.eduCreate(this.newEduInfo);
      this.reset(); 
  }

reset(){
    this.name ="";
    this.addr = "";
    this.phone = 0;
    this.dob="";
  }

}
