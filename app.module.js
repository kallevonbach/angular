"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var page_header_component_1 = require('./page-header/page-header.component');
var contact_component_1 = require('./contact/contact.component');
var products_list_component_1 = require('./prod-details/products-list.component');
var prod_details_component_1 = require('./prod-details/prod-details.component');
var frontpage_component_1 = require('./frontpage/frontpage.component');
var page_footer_component_1 = require('./page-footer/page-footer.component');
var demodata_service_1 = require('./shared/demodata.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: 'home', component: frontpage_component_1.FrontpageComponent },
                    { path: 'productdetail/:productid', component: prod_details_component_1.ProdDetailsComponent },
                    { path: 'contact', component: contact_component_1.ContactComponent },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', redirectTo: 'home', pathMatch: 'full' }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                page_header_component_1.PageHeaderComponent,
                contact_component_1.ContactComponent,
                products_list_component_1.ProductListComponent,
                frontpage_component_1.FrontpageComponent,
                prod_details_component_1.ProdDetailsComponent,
                page_footer_component_1.PageFooterComponent
            ],
            providers: [demodata_service_1.DemoDataService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map