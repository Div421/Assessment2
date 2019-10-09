import { Injectable } from '@angular/core';
import { eduinfo } from './eduinfo';
import { personalinfo } from './personalinfo';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  eduInfo:eduinfo[]=[];
  personalInfo:personalinfo[]=[];
  // p:personalinfo;
  e:eduinfo;
  id1:number=0;
  id2:number=0;

  constructor() { }
  personalCreate(p: personalinfo){
    this.id1++;
    p.id=this.id1;
    this.personalInfo.push(p);
  }
  eduCreate(e: eduinfo){
    this.id2++;
    e.id=this.id2;
    this.eduInfo.push(e);
  }
}
