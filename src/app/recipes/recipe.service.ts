import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.modal';
// App Broken something with recipeSelected vs selectedRecipe i think????

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Lamb Chops', 'This is a test description', '../assets/chop.jpg', [
            new Ingredient('Lamb Chop', 1),
            new Ingredient('Chips', 50),
            new Ingredient('Tomato', 1),
            new Ingredient('Lettice', 3),
        ]),
        new Recipe('Seafood Paella', 'This is a test description', '../assets/pailla.jpg', [
            new Ingredient('Rice', 1),
            new Ingredient('Prawns', 8),
            new Ingredient('Mussels', 4),
            new Ingredient('Tomato', 2)
        ])
    ];

    // Custom Functions
    getRecipes() {
        return this.recipes.slice();
    }
}

