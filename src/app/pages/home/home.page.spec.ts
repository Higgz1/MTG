import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { MockComponent } from 'ng-mocks';
import { SetsComponent } from 'src/app/components/sets/sets.component';


import { HomePage } from './home.page';

describe('HomePage', () => {
  let homeComponent: HomePage;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage, MockComponent(SetsComponent)],

      imports: [IonicModule.forRoot(), HttpClientTestingModule,]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    homeComponent = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(homeComponent).toBeTruthy();
  });

  function findComponent<T>(fixture: ComponentFixture<T>, selector: string,): DebugElement {
    return fixture.debugElement.query(By.css(selector));
  }

  // function childComponents(): ChildComponent[] {
  //   return fixture.debugElement
  //     .queryAll(By.directive(ChildComponent))
  //     .map(el => el.componentInstance);
  // }

  it('renders an independent sets component', () => {
    homeComponent.sets = [{
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
  },
  {
      "code": "2ED",
      "name": "Unlimited Edition",
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
          "common",
          "common"
      ],
      "releaseDate": "1993-12-01",
      "block": "Core Set",
      "onlineOnly": false
  }]; // 1
    // const compiled = fixture.debugElement.nativeElement;
    // fixture.detectChanges();
   const sets = findComponent(fixture, 'app-sets');
    expect(sets).toBeTruthy();

  });

  // helper function to query all the ChildComponents

});
