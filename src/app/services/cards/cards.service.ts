import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private apiService:ApiService) { }

  getCards(setId){
    return this.apiService.get('sets/'+ setId +'/booster');
  }

}
