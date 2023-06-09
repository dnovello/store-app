import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'; //Per usare il model Recipe sotto, dobbiamo prima importarlo

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  // Possiamo definire il type per questa proprietà, aggiungendone il model definito nel file recipe.model.ts mediante la sintassi: "recipes: Recipe[] = [];"). In questo modo all'interno dell'array NON potremo mai avere stringhe, nunmeri, etc, ma solamente 1) un array vuoto, 2) degli oggetti secondo il cotruttore "Recipe"
  recipes: Recipe[] = [
    //Ora con la keyword "new" ed utilizzando il Constructor "Recipe" creo un nuovo oggetto "Recipe" basato sul blueprint definito dalla classe "Recipe", contenuta nel file di modello. Definition: A class is a blueprint, or recipe for an object. A class defines what every instance of it should contain.
    new Recipe(
      'Pizza fatta in casa',
      'Far lievitare a temperatura ambiente l’impasto così ottenuto coperto da pellicola trasparente fino al raddoppio di volume prima di passare a fare le pieghe come spiegato più sotto.',
      'https://blog.giallozafferano.it/inventaricette/wp-content/uploads/2017/12/pizza-fatta-in-casa-perfetta-2-vid-1.jpg'
    ),
  ];

  constructor() {}
  ngOnInit() {}
}
