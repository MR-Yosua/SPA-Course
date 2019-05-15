import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import {AboutComponent  } from './components/about/about.component';
import {HeroesComponent  } from './components/heroes/heroes.component';
const APP_ROUTES: Routes =[
    {path: 'home',component: HomeComponent},
    {path: '**',pathMatch:'full',redirectTo: 'home'},
    {path: '**',pathMatch:'full',redirectTo: 'about'},
    {path: '**',pathMatch:'full',redirectTo: 'heroes'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);