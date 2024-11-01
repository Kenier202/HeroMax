import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroPagesComponent } from './pages/hero-pages/hero-pages.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { ListPagesComponent } from './pages/list-pages/list-pages.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { NewPageComponent } from './pages/new-page/new-page.component';



@NgModule({
  declarations: [
    HeroPagesComponent,
    LayoutPagesComponent,
    ListPagesComponent,
    SearchPageComponent,
    NewPageComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
  ]
})
export class HeroesModule { }
