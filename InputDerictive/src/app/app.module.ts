import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { MobileComponent } from './mobile/mobile.component';
import { MobileDetailsComponent } from './mobile-details/mobile-details.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarDetailsComponent,
    MobileComponent,
    MobileDetailsComponent,
    NewsComponent,
    NewsDetailsComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
   RouterModule.forRoot([
    { path:'recipe', component:RecipeComponent }, 
    { path:'news', component:NewsComponent }, 
    { path:'mobile', component:MobileComponent }, 
    {path:'car' , component:CarComponent}
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
