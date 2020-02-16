import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.modal';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
// App Broken something with recipeSelected vs selectedRecipe i think????

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Lamb Chops', 'This is a test description', '../assets/chop.jpg', [
            new Ingredient('Lamb Chop', 300),
            new Ingredient('Chips', 300),
            new Ingredient('Tomato', 100),
            new Ingredient('Lettice', 100),
        ]),
        new Recipe('Seafood Paella', 'This is a test description', '../assets/pailla.jpg', [
            new Ingredient('Rice', 300),
            new Ingredient('Prawns', 300),
            new Ingredient('Mussels', 150),
            new Ingredient('Tomato', 100)
        ])
    ];

    constructor(private slService: ShoppingListService) {

    }
    // Custom Functions
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingreients: Ingredient[]) {
        this.slService.addIngredients(ingreients)
    }
}

