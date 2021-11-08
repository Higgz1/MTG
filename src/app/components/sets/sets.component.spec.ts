import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetsComponent } from './sets.component';

describe('SetsComponent', () => {
  let component: SetsComponent;
  let fixture: ComponentFixture<SetsComponent>;
  let h6: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SetsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetsComponent);
    component = fixture.componentInstance;
    h6 = fixture.nativeElement.querySelector('h6')
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('no title in the DOM after createComponent()', () => {
    expect(h6.textContent).toEqual('');
  });
});
