/* eslint-disable @typescript-eslint/naming-convention */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DebugElement } from '@angular/core';
import { SingleCardComponent } from './single-card.component';
import { MockData } from '../../../assets/mockData';


describe('SingleCardComponent', () => {
  let singleCardComponent: SingleCardComponent;
  let fixture: ComponentFixture<SingleCardComponent>;
  let el: DebugElement;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleCardComponent);
    singleCardComponent = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement;
  }));

  it('should create', () => {
    expect(singleCardComponent).toBeTruthy();
    const n1 = MockData.data.filter((item)=>
    item.layout === 'split');
  console.log(n1[0]);
  });
});
