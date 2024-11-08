import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Heroe, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

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
    private snackbar : MatSnackBar,
    private dialog : MatDialog

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
        this.showSnackBar(`${hero.superhero} updated` !);
      } );
      return;
    }

    this.heroesService.addHero(this.currentHero)
    .subscribe(hero =>{
    this.router.navigate(['/heroes/edit', hero.id]);
    } );
    return;
  }

  onDeleteHero(){
    if(!this.currentHero.id)  throw new Error('Hero id is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value
    });

    dialogRef.afterClosed()
    .subscribe(result => {
      if(!result) return;

      this.heroesService.deleteHeroById(this.currentHero.id)
      .subscribe(wasDelete =>
        {
          if (wasDelete)
          this.router.navigate(['/heroes']);

      });

    });
  }

  showSnackBar(message: string){
    this.snackbar.open(message, "cerrar", { duration: 2500 });
  }

}
