import { Component, OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredientsChanged = new EventEmitter<Ingredient[]>()
  ingredients: Ingredient[]

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients()
    this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients
        }
      )
  }



}