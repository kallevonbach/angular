import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Iproduct } from '../shared/product'
import { DemoDataService } from '../shared/demodata.service';

@Component({
    selector: 'prod-details',
    templateUrl: './app/prod-details/prod-details.component.html'
})

export class ProdDetailsComponent implements OnInit {
    product: Iproduct;
    
    constructor(private _route: ActivatedRoute, private demoDataService: DemoDataService) { }


    ngOnInit(){
        let productid = this._route.snapshot.params ['productid'];
        this.product = this.demoDataService.getDemoDataById(productid);
    }
 
}
