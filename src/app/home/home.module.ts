import { DatePipe } from './../pipes/date.pipe';
import { UrlPipe } from './../pipes/url.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule }from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HackerNewsEffects } from '../store/effects';
import * as fromReducers from '../store/reducer';



@NgModule({
  declarations: [HomeComponent, UrlPipe, DatePipe],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forFeature(fromReducers.newsFeatureKey, fromReducers.reducer),
    EffectsModule.forFeature([HackerNewsEffects])
  ],
})
export class HomeModule { }
