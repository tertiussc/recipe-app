import { OnInit, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.modal'

export class ShoppingListService implements OnInit {
    ingredientsChanged = new EventEmitter<Ingredient[]>()
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 3),
        new Ingredient('Onoins', 1)
    ];

    getIngredients() {
        return this.ingredients.slice()
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    constructor() {

    }

    ngOnInit() {

    }

    // Customer funtions

}