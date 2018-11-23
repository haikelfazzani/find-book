import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { NavTopComponent } from './partials/nav-top/nav-top.component';
import { TopSearchComponent } from './partials/top-search/top-search.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FooterComponent } from './partials/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    PageNotFoundComponent,
    AboutComponent,
    NavTopComponent,
    TopSearchComponent,
    LoaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule , FormsModule, 
    NgxPaginationModule , 
    HttpClientModule ,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
