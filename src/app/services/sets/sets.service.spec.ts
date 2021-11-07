import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SetsService } from './sets.service';

describe('SetsService', () => {
  let setService: SetsService;
 
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    setService = TestBed.inject(SetsService);
  });

  it('should be created', () => {
    expect(setService).toBeTruthy();
  });

  it('should make a get request', () => {
    // let sets =[];
    let sets = [];
    setService.getSets().subscribe((resp:any)=>{
      sets.push(resp)
      expect(resp).toEqual(sets, 'should return expected sets'),
        fail

    });
    // expect(sets.length).toBeGreaterThan(0);
  });
});
