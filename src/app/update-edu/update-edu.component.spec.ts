import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEduComponent } from './update-edu.component';

describe('UpdateEduComponent', () => {
  let component: UpdateEduComponent;
  let fixture: ComponentFixture<UpdateEduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
