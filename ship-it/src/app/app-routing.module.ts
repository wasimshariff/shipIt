import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {PageOneComponent} from './page-one/page-one.component';
import {PageTwoComponent} from './page-two/page-two.component';
import {PageThreeComponent} from './page-three/page-three.component';


const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent},
  { path: 'pageOne', component: PageOneComponent},
  { path: 'pageTwo', component: PageTwoComponent},
  { path: 'pageThree', component: PageThreeComponent},
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
