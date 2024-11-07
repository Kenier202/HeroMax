import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Heroe, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { HeroImagePipe } from '../../pipes/hero-image.pipe';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
})
export class NewPageComponent implements OnInit{

  public heroForm = new FormGroup({
    id:         new FormControl(''),
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
    private router: Router,

  )
    { }

  get currentHero(): Heroe{
    const hero = this.heroForm.value as Heroe;
    return hero;
  }

  ngOnInit(): void {

    if ( !this.router.url.includes('edit') ) return;

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroesService.getHeroById( id ) ),
      ).subscribe( hero => {

        if ( !hero ) {
          return this.router.navigateByUrl('/');
        }
        this.heroForm.reset( hero);
        return;
      });
  }

  onSubmit(){

    if(this.heroForm.invalid) return;

    if(this.currentHero.id){
      this.heroesService.updateHero(this.currentHero)
      .subscribe(hero =>{
      } );
      return;
    }

    this.heroesService.addHero(this.currentHero)
    .subscribe(hero =>{} );
    return;
  }
}
