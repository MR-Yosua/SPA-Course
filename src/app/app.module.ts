import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//ROUTES
import { APP_ROUTING } from './app.routes';

//SERVICES
import { HeroesService } from "./services/heroes.service";
//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
  ],
  //AQUI SERVICES
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
