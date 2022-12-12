import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/interfaces/cocktail.interface';
import { PanierService } from '../../shared/services/panier.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CocktailService } from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail!: Cocktail;

  constructor(
    private panierService: PanierService,
    private activatedRoute: ActivatedRoute,
    private cocktailService: CocktailService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const cocktailIndex = paramMap.get('index');
      if (cocktailIndex) {
        this.cocktail = this.cocktailService.getCocktail(+cocktailIndex);
      }
    });
  }

  public addToPanier(): void {
    if (this.cocktail) {
      this.panierService.addPanier(this.cocktail.ingredients);
    }
  }
}
