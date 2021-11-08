import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetsComponent } from './sets.component';

describe('SetsComponent', () => {
  let component: SetsComponent;
  let fixture: ComponentFixture<SetsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SetsComponent],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(SetsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input value', () => {
    component.set = {
      code: '10E',
      name: 'Tenth Edition',
      type: 'core',
      booster: [
        'rare',
        'uncommon',
        'uncommon',
        'uncommon',
        'common',
        'common',
        'common',
        'common',
        'common',
        'common',
        'common',
        'common',
        'common',
        'common',
      ],
      releaseDate: '2007-07-13',
      block: 'Core Set',
      onlineOnly: false,
    }; // 1
    fixture.detectChanges(); // 2
    const compiled = fixture.debugElement.nativeElement; // 2
    expect(compiled.querySelector('h5').textContent).toBe('Tenth Edition');
    expect(compiled.querySelector('h6').textContent).toBe('13.07.2007');
    expect(compiled.querySelector('h6').textContent).toBe('13.07.2007'); // 3
    expect(compiled.querySelector('p').textContent).toBe('Core Set | core'); 
    // 3
     // 3
     // 3
  });
});
