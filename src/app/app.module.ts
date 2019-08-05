import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import {Components,AppRouter } from './app.routingModules';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { MainService } from './services/main.service';
import { SidebarExpandService } from './services/sidebarExpand.service'
@NgModule({
  declarations:[AppComponent,Components],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRouter,
    HttpClientModule
  ],
  providers: [MainService, SidebarExpandService],
  bootstrap: [AppComponent],
})
export class AppModule { }
