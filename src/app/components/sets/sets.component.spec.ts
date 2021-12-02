import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { SetsComponent } from './sets.component';

describe('SetsComponent', () => {
  let setsComponent: SetsComponent;
  let fixture: ComponentFixture<SetsComponent>;
  let el: DebugElement;

  const mockResponse = {
    "object": "list",
    "has_more": false,
    "data": [
      {
        "object": "set",
        "id": "78a7f4da-4838-4011-9f58-de8020d1fd2d",
        "code": "cc2",
        "tcgplayer_id": 2905,
        "name": "Commander Collection: Black",
        "uri": "https://api.scryfall.com/sets/78a7f4da-4838-4011-9f58-de8020d1fd2d",
        "scryfall_uri": "https://scryfall.com/sets/cc2",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Acc2&unique=prints",
        "released_at": "2022-01-28",
        "set_type": "from_the_vault",
        "card_count": 9,
        "digital": false,
        "nonfoil_only": false,
        "foil_only": false,
        "icon_svg_uri": "https://c2.scryfall.com/file/scryfall-symbols/sets/cc2.svg?1636952400"
      }, {
        "object": "set",
        "id": "a4a0db50-8826-4e73-833c-3fd934375f96",
        "code": "aer",
        "mtgo_code": "aer",
        "arena_code": "aer",
        "tcgplayer_id": 1857,
        "name": "Aether Revolt",
        "uri": "https://api.scryfall.com/sets/a4a0db50-8826-4e73-833c-3fd934375f96",
        "scryfall_uri": "https://scryfall.com/sets/aer",
        "search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aaer&unique=prints",
        "released_at": "2017-01-20",
        "set_type": "expansion",
        "card_count": 194,
        "printed_size": 184,
        "digital": false,
        "nonfoil_only": false,
        "foil_only": false,
        "block_code": "kld",
        "block": "Kaladesh",
        "icon_svg_uri": "https://c2.scryfall.com/file/scryfall-symbols/sets/aer.svg?1637557200"
      }
    ]
  }


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SetsComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SetsComponent);
    setsComponent = fixture.componentInstance;
    el = fixture.debugElement;
  }));


  it('should create', () => {
    setsComponent.set = mockResponse.data;
    fixture.detectChanges();

    const sets = el.queryAll(By.css('ion-card'));
    expect(sets).toBeTruthy("no sets coming through");
    expect(sets.length).toBe(1);
  });

  it('should display the correct Set Card content', () => {

    setsComponent.set = mockResponse.data[0];
    fixture.detectChanges();

    const setCard = el.queryAll(By.css('ion-card')),
      name = setCard[0].query(By.css('.set-name')),
      first_badge = setCard[0].query(By.css('.first-badge')),
      second_badge = setCard[0].query(By.css('.second-badge')),
      icon = setCard[0].query(By.css('ion-img'));

    expect(setCard).toBeTruthy("Could not find set card");
    expect(name.nativeElement.textContent).toBe(setsComponent.set.name);
    expect(first_badge.nativeElement.textContent).toBe(' '+setsComponent.set.card_count + ' cards ');
    expect(second_badge.nativeElement.textContent).toBe(' '+setsComponent.set.set_type + ' ');
    expect(icon.nativeElement.src).toBe(setsComponent.set.icon_svg_uri);

  });


});
