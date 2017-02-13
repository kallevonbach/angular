import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../shared/product';
import { PRODUCTSDATA } from '../shared/demo-data';

@Component({
    selector: "products-list",
    moduleId: module.id,
    templateUrl: "products-list.component.html"
})
export class ProductListComponent implements OnInit{
    products: Iproduct[];

    ngOnInit() {
        this.products = PRODUCTSDATA;
    }
}
