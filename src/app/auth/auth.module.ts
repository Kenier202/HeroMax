import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPagesComponent,
    RegisterPageComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
