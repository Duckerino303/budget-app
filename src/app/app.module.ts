import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SummaryHeaderComponent } from './summary-header/summary-header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SummaryHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
