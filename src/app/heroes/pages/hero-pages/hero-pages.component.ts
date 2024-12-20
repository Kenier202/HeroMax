import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-pages',
  templateUrl: './hero-pages.component.html',
  styles: ``
})
export class HeroPagesComponent implements OnInit{

  public hero?: Heroe;
  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(switchMap(({id}) => this.heroesService.getHeroById(id)))
    .subscribe(hero => {
      if (!hero)  return this.router.navigate(['/heroes/list']);

      this.hero = hero;
      return;
    })
  }

  goBack(){
    this.router.navigate(['/heroes/list']);
  }
}
