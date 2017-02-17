import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class MessageForm {
    contactname: string;
    contactemail: string;
    contactmessage: string;
}

@Component({
    selector: 'contact',
    templateUrl: './app/contact/contact.component.html',
})

export class ContactComponent implements OnInit { 
    model:MessageForm = new MessageForm();
    submitted: boolean;

    ngOnInit() {
        this.submitted = false;
    }

    send(form:NgForm, event:Event) {

        event.preventDefault();
        this.submitted = true;
    }

}