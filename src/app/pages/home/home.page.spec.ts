import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { MockComponent } from 'ng-mocks';
import { SetsComponent } from 'src/app/components/sets/sets.component';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { of } from 'rxjs';
import {RouterTestingModule} from "@angular/router/testing";
import { HomePage } from './home.page';
import { SetsService } from 'src/app/services/sets/sets.service';
import { CardsService } from 'src/app/services/cards/cards.service';

describe('HomePage', () => {
  let homeComponent: HomePage;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<HomePage>;
  let fakesetsService: SetsService;
  let fakecardsService: CardsService;

  beforeEach(
    waitForAsync(() => {
      // Create fake SetsService and its methods
      fakesetsService = jasmine.createSpyObj<SetsService>('SetsService', {
        getSets: of(),
        getSingleSet: of(),
      });

      fakecardsService = jasmine.createSpyObj<CardsService>('CardsService', {
        getCards: of(),
      });

      TestBed.configureTestingModule({
        declarations: [HomePage, MockComponent(SetsComponent)],
        imports: [IonicModule.forRoot(), HttpClientTestingModule,RouterTestingModule],
        // Use fake instead of original
        providers: [{ provide: SetsService, useValue: fakesetsService },{ provide: CardsService, useValue: fakecardsService }],
      }).compileComponents();

      fixture = TestBed.createComponent(HomePage);
      homeComponent = fixture.componentInstance;
      httpTestingController = TestBed.inject(HttpTestingController);
      fixture.detectChanges();

      homeComponent.sets = [
        {
          object: 'set',
          id: '59a2059f-5482-433f-8761-eb2e17859b71',
          code: 'neo',
          mtgo_code: 'neo',
          arena_code: 'neo',
          name: 'Kamigawa: Neon Dynasty',
          uri: 'https://api.scryfall.com/sets/59a2059f-5482-433f-8761-eb2e17859b71',
          scryfall_uri: 'https://scryfall.com/sets/neo',
          search_uri:
            'https://api.scryfall.com/cards/search?order=set&q=e%3Aneo&unique=prints',
          released_at: '2022-02-18',
          set_type: 'expansion',
          card_count: 0,
          digital: false,
          nonfoil_only: true,
          foil_only: true,
          icon_svg_uri:
            'https://c2.scryfall.com/file/scryfall-symbols/sets/default.svg?1637557200',
        },
      ];
    })
  );

  it('should have "sets" populated ', () => {
    expect(homeComponent.sets.length).toBeGreaterThan(0);
  });

  it('should call getSets() in Homepage file ngOnInit()', () => {
    spyOn(homeComponent, 'getSets').and.callThrough();
    homeComponent.ngOnInit();
    expect(homeComponent.getSets).toHaveBeenCalledTimes(1);
    expect(fakesetsService.getSets).toHaveBeenCalled();
  });

  it('should bind (app-sets) [set] value ', () => {
    expect(childComponents().map((c) => c.set)).toEqual(homeComponent.sets);
  });

  it('should create and have the (app-sets) component rendered', () => {
    expect(homeComponent).toBeTruthy();
    const setsRender = findComponent(fixture, 'app-sets');
    expect(setsRender.properties).toBeTruthy();
  });

  it('should create one child component (app-sets) for each set', () => {
    expect(childComponents().length).toEqual(homeComponent.sets.length);
  });
//change this to routing
  // it('on clicking (app-sets) it should call a function getCards()', () => {
  //   fixture.detectChanges();
  //   const uri = 'https://api.scryfall.com/cards/search?order=set&q=e%3Apmid&unique=prints';
  //   const card = fixture.debugElement.nativeElement.querySelector('app-sets');
  //   card.click();
  //   homeComponent.getCards(uri);
  // });

  //find component within the parent DOM
  function findComponent<T>(
    fixture: ComponentFixture<T>,
    selector: string
  ): DebugElement {
    fixture.detectChanges();
    return fixture.debugElement.query(By.css(selector));
    // return fixture.debugElement.nativeElement.querySelector((selector))
  }

  //find component within the parent Child
  function childComponents(): SetsComponent[] {
    fixture.detectChanges();
    return fixture.debugElement
      .queryAll(By.directive(SetsComponent))
      .map((el) => el.componentInstance);
  }

  // it('should make get request for sets', () => {
  //   const sets = homeComponent.getSets()
  //   expect(sets).toBe({ empty: true });

  // });
});
