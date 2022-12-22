import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CocktailService } from '../../shared/services/cocktail.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.scss'],
})
export class CocktailFormComponent implements OnInit {
  public cocktailForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    img: ['', Validators.required],
    description: ['', Validators.required],
    ingredients: this.fb.array([], Validators.required),
  });

  constructor(
    private fb: FormBuilder,
    private cocktailService: CocktailService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public get ingredients() {
    return this.cocktailForm.get('ingredients') as FormArray;
  }

  public addIngredient(): void {
    this.ingredients.push(
      this.fb.group({
        name: ['', Validators.required],
        quantity: [0, Validators.required],
      })
    );
  }

  ngOnInit(): void {}

  public submit(): void {
    this.cocktailService.addCocktail(this.cocktailForm.value);
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }
}
