import { Component } from '@angular/core';
import { Cocktail } from './interfaces/cocktail.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cocktail: Cocktail = {
    name: 'Mojito',
    img: 'https://lacocotte.net/wp-content/uploads/2021/03/Mojito.jpg',
    description:
      'Ce classique cubain peut sembler dépassé à côté de la mode actuelle des cocktails – comme s’il était un héritage des années 2000 – et pourtant il reste un véritable classique, très apprécié des connaisseurs. La fraîcheur de la menthe et de l’eau, l’éclat du rhum, du citron vert et de la cassonade avec de la glace en font toujours une boisson désaltérante.s',
  };
}
