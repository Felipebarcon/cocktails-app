// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SelectedDirective } from './shared/directives/selected.directive'; // pipes
import { APP_ROUTES } from './app.routes';
import { PanierModule } from './features/panier/panier.module';
import { CocktailModule } from './features/cocktail/cocktail.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SelectedDirective],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    CocktailModule,
    PanierModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
