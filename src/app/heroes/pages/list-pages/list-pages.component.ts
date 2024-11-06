import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-pages',
  templateUrl: './list-pages.component.html',
  styles: ``
})
export class ListPagesComponent implements OnInit {

  public heroes : Heroe[] = [];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
