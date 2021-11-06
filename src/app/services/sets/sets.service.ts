import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class SetsService {
  sets: string = '/sets';
  constructor(private api: ApiService) { }

  getSets(){
    return this.api.get(this.sets);
  }
}
