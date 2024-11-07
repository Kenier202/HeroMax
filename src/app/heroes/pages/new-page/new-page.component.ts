import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Heroe, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
})
export class NewPageComponent implements OnInit{

  public heroForm = new FormGroup({
    superhero:  new FormControl('', {nonNullable: true}),
    alter_ego:  new FormControl(''),
    publisher:  new FormControl<Publisher>( Publisher.DCComics),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img:   new FormControl(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router)
    { }

  get currentHero(): Heroe{
    const hero = this.heroForm.value as Heroe;
    return hero;
  }

  ngOnInit(): void {
    const urlSegments = this.activatedRoute.snapshot.url.map(segment => segment.path);

    if (!urlSegments.includes('edit')) return;
  }




  onSubmit(){
    if(this.heroForm.invalid) return;

    if(this.currentHero.id){
      this.heroesService.updateHero(this.currentHero)
      .subscribe(hero =>{} );
      return;
    }


    this.heroesService.addHero(this.currentHero)
    .subscribe(hero =>{} );
    return;
  }
}
