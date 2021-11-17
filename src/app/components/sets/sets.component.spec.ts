import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { SetsComponent } from './sets.component';

xdescribe('SetsComponent', () => {
  let setsComponent: SetsComponent;
  let fixture: ComponentFixture<SetsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SetsComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [IonicModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetsComponent);
    setsComponent = fixture.componentInstance;
    fixture.detectChanges();

    setsComponent.set = {
      "code": "10E",
      "name": "Tenth Edition",
      "type": "core",
      "booster": [
        "rare",
        "uncommon",
        "uncommon",
        "uncommon",
        "common",
        "common",
        "common",
        "common",
        "common",
        "common",
        "common",
        "common",
        "common",
        "common"
      ],
      "releaseDate": "2007-07-13",
      "block": "Core Set",
      "onlineOnly": false
    }

    fixture.detectChanges();
  });

  function findComponent<T>(fixture: ComponentFixture<T>, selector: string,): DebugElement {
    fixture.detectChanges();
    return fixture.debugElement.query(By.css(selector));
  }

  it('should create', () => {
    const name = findComponent(fixture,'.h5');
    expect(name).toBeTruthy();

  });


  // it('should correctly render the passed @Input value', () => {
  //   expect(setsComponent.set).toBe(undefined);

  //   // const compiled = fixture.debugElement.nativeElement;//  
  //   // fixture.detectChanges();
  //   // expect(compiled.querySelector('.set-name').textContent).toEqual(setsComponent.set.name);

  //   // expect(compiled.querySelector('h5').textContent).toContain(component.set.name);
  //   // expect(compiled.querySelector('.name-circle').textContent).toBe(' T ');
  //   // expect(compiled.querySelector('h5').textContent).toBe(component.set.name);
  //   // expect(compiled.querySelector('h6').textContent).toBe('13.07.2007');
  //   // expect(compiled.querySelector('h6').textContent).toBe('13.07.2007'); // 3
  //   // expect(compiled.querySelector('p').textContent).toBe('Core Set | core | Jul.2007');
  //   // expect(compiled.querySelector('.name-circle').style.background).toBe('rgb(46, 175, 159)'); 

  // });


});
