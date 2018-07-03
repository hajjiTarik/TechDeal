import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GetItemsFromCacheService {

  constructor() {
  }

  getItem(): Array<Object> {
    return JSON.parse(localStorage.getItem('TMP_ITEMS'));
  }
}
