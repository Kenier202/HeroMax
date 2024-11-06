import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  ngOnInit(): void {
    if (!this.hero) throw new Error('Hero is required');
  }

  @Input()
  public hero! : Heroe;
}
