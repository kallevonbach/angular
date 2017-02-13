import { Component } from '@angular/core';

@Component({
    selector: 'site-header',
    template: `
        <header class="site-header">
            <nav>
                <ul>
                    <li><a href="#" [routerLink]="['home']">Home</a></li>
                    <li><a href="#" [routerLink]="['contact']">Contact</a></li>
                </ul>
            </nav>
        </header>
        `
})
export class HeaderComponent {

}