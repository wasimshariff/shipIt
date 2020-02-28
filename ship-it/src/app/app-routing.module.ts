import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {PageOneComponent} from "./page-one/page-one.component";


const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent},
  { path: 'pageOne', component: PageOneComponent},
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
