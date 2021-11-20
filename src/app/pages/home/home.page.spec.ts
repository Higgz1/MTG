import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { MockComponent } from 'ng-mocks';
import { SetsComponent } from 'src/app/components/sets/sets.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { HomePage } from './home.page';
import { SetsService } from 'src/app/services/sets/sets.service';
import { of } from 'rxjs';

describe('HomePage', () => {
  let homeComponent: HomePage;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<HomePage>;
  let fakesetsService: SetsService;

  beforeEach(waitForAsync(() => {
    // Create fake SetsService and its methods
    fakesetsService = jasmine.createSpyObj<SetsService>(
      'SetsService',
      {
        getSets: of(),
        getSingleSet: of()
      }
    );

    TestBed.configureTestingModule({
      declarations: [HomePage, MockComponent(SetsComponent)],
      imports: [IonicModule.forRoot(), HttpClientTestingModule,],
      // Use fake instead of original
      providers: [
        { provide: SetsService, useValue: fakesetsService }
      ],
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

  it('should have "sets" populated ', () => {
    expect(homeComponent.sets.length).toBeGreaterThan(0);
  });

  it('should call getSets() in Homepage file ngOnInit()', () => {
    spyOn(homeComponent, 'getSets').and.callThrough();
    homeComponent.ngOnInit();
    expect(homeComponent.getSets).toHaveBeenCalledTimes(1);
    expect(fakesetsService.getSets).toHaveBeenCalled();

  });

  it('should create and have the (app-sets) component rendered', () => {
    expect(homeComponent).toBeTruthy();
    const setsRender = findComponent(fixture, 'app-sets');
    expect(setsRender.properties).toBeTruthy();
  });

  it('should create one child component (app-sets) for each set', () => {
    expect(childComponents().length).toEqual(homeComponent.sets.length);
  });

  it('should bind (app-sets) [set] value ', () => {
    expect(childComponents().map(c => c.set)).toEqual(homeComponent.sets);
  });

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

  // it('should make get request for sets', () => {
  //   const sets = homeComponent.getSets()
  //   expect(sets).toBe({ empty: true });



  // });

});
