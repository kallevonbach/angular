import { Injectable } from '@angular/core';
import { PRODUCTSDATA } from './demo-data';
import { Iproduct } from './product';

@Injectable()
export class DemoDataService{
    getDemoData() :Iproduct[] {
        return PRODUCTSDATA;
    }

    getDemoDataById(id: number) {
        return PRODUCTSDATA.find(product => product.id == id);
  }

}
