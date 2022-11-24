import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail.interface';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    {
      name: 'Mojito',
      img: 'https://lacocotte.net/wp-content/uploads/2021/03/Mojito.jpg',
      description:
        'Ce classique cubain peut sembler dépassé à côté de la mode actuelle des cocktails – comme s’il était un héritage des années 2000 – et pourtant il reste un véritable classique, très apprécié des connaisseurs. La fraîcheur de la menthe et de l’eau, l’éclat du rhum, du citron vert et de la cassonade avec de la glace en font toujours une boisson désaltérantes',
      ingredients: [
        {
          name: 'Perrier',
          quantity: 1,
        },
        {
          name: 'Menthe',
          quantity: 2,
        },
        {
          name: 'Rhum',
          quantity: 3,
        },
      ],
    },
    {
      name: 'Bellini',
      img: 'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2019-11/bellini_1.jpg?itok=IGogglim',
      description:
        'Venu tout droit de Norvège l’Aquavit est l’alcool le plus trendy du moment. On l’aime tout particulièrement sous forme de cocktail « Fresh » et pour le réaliser, voici la marche à suivre : mélangez 4cl d’Aquavit, 1cl de Grand Marnier, du jus d’orange et quelques feuilles de menthe. Servez-le accompagné de petits canapés de saumon de Norvège et baies roses et vous voilà avec un combo d’apéro parfait !',
      ingredients: [
        {
          name: 'Purée de pèches',
          quantity: 3,
        },
        {
          name: 'Prosecco',
          quantity: 10,
        },
      ],
    },
    {
      name: 'Sangria',
      img: 'https://maisonfoody.com/sites/default/files/styles/article_paragraph_image/public/2019-11/sangria.jpg?itok=LjVLCYpj',
      description:
        'Offrez à vos invités un petit détour par l’Espagne avec une Sangria rouge (il existe également des versions blanches et rose). Pour un pichet de 6 personnes, mélangez 1l de vin rouge, 25cl de limonade, 20cl de jus d’orange, 10cl de Cointreau ainsi que deux oranges et un citron jaune coupés en tranches. Ajoutez une gousse de vanille, 50g de sucre en poudre et ½ cuillère à café de cannelle moulue. Et si pour aller un peu plus loin dans le thème vous proposiez à vos invités quelques tranches de jambon Serrano ?',
      ingredients: [
        {
          name: 'Vin rouge',
          quantity: 1,
        },
        {
          name: 'Limonade',
          quantity: 0.25,
        },
        {
          name: 'Oranges',
          quantity: 2,
        },
        {
          name: 'Sucre',
          quantity: 50,
        },
      ],
    },
  ]);

  public selectedCocktail$: BehaviorSubject<Cocktail> = new BehaviorSubject(
    this.cocktails$.value[0]
  );

  constructor() {}

  public selectCocktail(index: number): void {
    this.selectedCocktail$.next(this.cocktails$.value[index]);
  }
}
