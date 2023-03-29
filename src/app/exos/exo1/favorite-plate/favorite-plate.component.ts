import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite-plate',
  templateUrl: './favorite-plate.component.html',
  styleUrls: ['./favorite-plate.component.scss']
})
export class FavoritePlateComponent {
	platFavoris: string = "Pizza";
}
