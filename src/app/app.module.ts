import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducer } from './store/reducers/school-management.reducer';
import { SchoolManagementEffects } from './store/effects/school-management.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ sms: reducer }),
    EffectsModule.forRoot([SchoolManagementEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
