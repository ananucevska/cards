import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImagesComponent } from './components/images/images.component';
import { freeApiService } from 'src/app/services/freeapi.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AnimationComponent } from './components/animation/animation.component';


@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    AnimationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }