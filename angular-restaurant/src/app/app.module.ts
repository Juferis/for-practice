import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenusComponent } from './menus/menus.component';
import { FormsModule } from '@angular/forms';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';

@NgModule({
  declarations: [AppComponent, MenusComponent, MenuDetailComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
