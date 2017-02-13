import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class Newsletter {
    contactname: string;
    contactemail: string;
    newstype: string;
}

@Component({
    templateUrl: './app/contact/contact.component.html'
})


export class ContactComponent implements OnInit{
    model:Newsletter = new Newsletter();
    newstypes: Array<string>; 
    ngOnInit() {
        this.newstypes = ['Baking', 'Dinners', 'Starters'];
    }

}