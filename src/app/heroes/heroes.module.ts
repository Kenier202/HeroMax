import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroPagesComponent } from './pages/hero-pages/hero-pages.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { ListPagesComponent } from './pages/list-pages/list-pages.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';



@NgModule({
  declarations: [
    HeroPagesComponent,
    LayoutPagesComponent,
    ListPagesComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
