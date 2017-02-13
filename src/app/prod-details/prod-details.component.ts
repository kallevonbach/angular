import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'prod-details',
    templateUrl: './app/prod-details/prod-details.component.html'
})

export class ProdDetailsComponent implements OnInit {
    productid: number;

    constructor(private _route: ActivatedRoute,
                private router: Router) {

                }


    ngOnInit(){
        this.productid = +this._route.snapshot.params ['id'];
    }
 
}