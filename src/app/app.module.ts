import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './prod-details/products-list.component';
import { ProdDetailsComponent} from './prod-details/prod-details.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { PageFooterComponent} from './page-footer/page-footer.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: FrontpageComponent },
      { path: 'productdetail/:id', component: ProdDetailsComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]) 
    ],
  
  declarations: [ 
  AppComponent, 
  PageHeaderComponent,
  ContactComponent,
  ProductListComponent,
  FrontpageComponent,
  ProdDetailsComponent,  
  PageFooterComponent
  
  ],
  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }