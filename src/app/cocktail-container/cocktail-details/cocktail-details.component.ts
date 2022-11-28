import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/interfaces/cocktail.interface';
import { PanierService } from '../../shared/services/panier.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit {
  @Input() cocktail: Cocktail;

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {}

  public addToPanier(): void {
    this.panierService.addToPanier(this.cocktail.ingredients);
  }
}
