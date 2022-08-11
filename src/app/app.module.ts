import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InputSearchComponent } from './components/input-search/input-search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputSearchComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
