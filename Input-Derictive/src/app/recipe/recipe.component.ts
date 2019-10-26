import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipeData:any='';
  recipes=[
       {
         name:' Mexican Grilled Corn',
         img:'https://image.shutterstock.com/image-photo/pumpkin-soup-food-photography-recipe-260nw-1117916249.jpg',
          description:'I consider this to be the greatest corn-on-the-cob recipe of all time," says Chef John. "The way the mild, subtly salted cheese works with an ancho-lime mayonnaise, along with that buttery, smoky corn, is a magnificent combination of flavors. Perfecto'
       },
       {
         name:'Fish Tacos Ultimo',
         img:'https://images.media-allrecipes.com/userphotos/650x465/1130091.jpg',
         description:'With chipotle peppers and plenty of cilantro, the spicy yogurt sauce makes this fish taco the ultimate. "These are great!" raves FOOFUS. "I made these as a lunch special for Cinco de Mayo at the restaurant where I work and everybody loved them! Only changes I made, I used lettuce instead of cabbage and pineapple salsa instead of plain salsa'
       }
      ];
  constructor() { }
  sendRecipe(recipe)
  {
    this.recipeData=recipe;
    console.log(recipe);
  }
  ngOnInit() {
  }

}
