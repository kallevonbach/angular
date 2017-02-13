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
var RecipeListComponent = (function () {
    function RecipeListComponent() {
        this.recipes = [{
                id: 1,
                name: 'Strawberry tart',
                description: 'this is a very nice cake with stuff in it',
                method: "ajkns sjkdn jdndfkj naf njdjk fnjkdfn jdnsafækjndkfn gajksæfn",
                ingredients: ["250g flour", "100g butter",],
                preptime: 40,
                cookingtime: 60,
                isfeatured: true,
                estimatedcost: 99.99,
                starrating: 2
            },
            {
                id: 2,
                name: 'Apple pie',
                description: 'this is a very nice cake with stuff in it',
                method: "ajkns sjkdn jdndfkj naf njdjk fnjkdfn jdnsafækjndkfn gajksæfn",
                ingredients: ["250g flour", "100g butter",],
                preptime: 20,
                cookingtime: 60,
                isfeatured: false,
                estimatedcost: 129.99,
                starrating: 5
            }];
    }
    RecipeListComponent = __decorate([
        core_1.Component({
            selector: 'recipe-list',
            templateUrl: "./app/recipe/recipe-list.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], RecipeListComponent);
    return RecipeListComponent;
}());
exports.RecipeListComponent = RecipeListComponent;
//# sourceMappingURL=recipe-list.component.js.map