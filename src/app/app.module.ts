import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloAngularComponent } from './demos/hello-angular/hello-angular.component';
import { TitleComponent } from './demos/title/title.component';
import { DemoBindingComponent } from './demos/demo-binding/demo-binding.component';
import { FormsModule } from '@angular/forms';
import { Exo1Component } from './exos/exo1/exo1.component';
import { HeaderComponent } from './exos/exo1/header/header.component';
import { MainBodyComponent } from './exos/exo1/main-body/main-body.component';
import { FavoritePlateComponent } from './exos/exo1/favorite-plate/favorite-plate.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloAngularComponent,
    TitleComponent,
    DemoBindingComponent,
    Exo1Component,
    HeaderComponent,
    MainBodyComponent,
    FavoritePlateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
