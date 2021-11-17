import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { MockComponent } from 'ng-mocks';
import { SetsComponent } from 'src/app/components/sets/sets.component';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
}
  from '@angular/platform-browser-dynamic/testing';


import { HomePage } from './home.page';

describe('HomePage', () => {
  let homeComponent: HomePage;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage,
        MockComponent(SetsComponent)
      ],

      imports: [IonicModule.forRoot(), HttpClientTestingModule,]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    homeComponent = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
    
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
    }];
  }));

  //find component within the parent DOM
  function findComponent<T>(fixture: ComponentFixture<T>, selector: string,): DebugElement {
    fixture.detectChanges();
    return fixture.debugElement.query(By.css(selector));
  }

  //find component within the parent Child
  function childComponents(): SetsComponent[] {
    fixture.detectChanges();
    return fixture.debugElement.queryAll(By.directive(SetsComponent)).map(el => el.componentInstance);
  }

  it('should create', () => {
    expect(homeComponent).toBeTruthy();
    const counter = findComponent(fixture, 'app-sets');
    expect(counter.properties).toBeTruthy();
  });

  it('should create one child component for each child', () => {
    expect(childComponents().length).toEqual(homeComponent.sets.length);
  });

  it('should set to the name of the set Input', () => {
    expect(childComponents().map(c => c.set)).toEqual(homeComponent.sets);
  });

});
