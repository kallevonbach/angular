import { Component } from '@angular/core';
import { IRecipe } from './recipe';
@Component({
    selector: 'recipe-list',
    templateUrl: `./app/recipe/recipe-list.component.html`
})
export class RecipeListComponent {
    recipes:IRecipe[] = [{
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
    }]
}