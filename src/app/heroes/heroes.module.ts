import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPagesComponent } from './pages/hero-pages/hero-pages.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { ListPagesComponent } from './pages/list-pages/list-pages.component';
import { MaterialModule } from '../material/material.module';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { NgModule } from '@angular/core';
import { SearchPageComponent } from './pages/search-page/search-page.component';

@NgModule({
  declarations: [
    HeroPagesComponent,
    LayoutPagesComponent,
    ListPagesComponent,
    NewPageComponent,
    SearchPageComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
  ]
})
export class HeroesModule { }
