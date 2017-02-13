import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <page-header></page-header>
    <router-outlet></router-outlet>
    <page-footer></page-footer>
  `,
})
export class AppComponent  { name = 'Angular'; }
