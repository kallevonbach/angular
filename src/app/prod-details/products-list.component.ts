import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../shared/product';
import { DemoDataService } from '../shared/demodata.service';

@Component({
    selector: "products-list",
    moduleId: module.id,
    templateUrl: "products-list.component.html"
})
export class ProductListComponent implements OnInit{
    products: Iproduct[];

    constructor(private demoDataService: DemoDataService) {}
    
    ngOnInit() {
        this.products = this.demoDataService.getDemoData();
    }
}
