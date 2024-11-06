import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { HeroPagesComponent } from './pages/hero-pages/hero-pages.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPagesComponent } from './pages/list-pages/list-pages.component';
import { NewPageComponent } from './pages/new-page/new-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPagesComponent,
    children: [
      {
        path: 'new-hero',
        component: NewPageComponent
      },
      {
        path: 'search',
        component: SearchPageComponent
      }
      ,{
        path: 'edit/:id',
        component: NewPageComponent
      },
      {
        path: 'list',
        component: ListPagesComponent
      },
      {
        path: ':id',
        component: HeroPagesComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule { }
