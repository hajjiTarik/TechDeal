import { Component, OnInit } from '@angular/core';
import {GetItemsFromCacheService} from '../../services/get-items-from-cache.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  nbItems: number;
  total: number;

  constructor(private getItemsFromCache: GetItemsFromCacheService) {

    console.log(getItemsFromCache.getItem);
  }

  ngOnInit() {
    console.log(this.getItemsFromCache.getItem());
  }

}
