import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenusComponent } from './menus/menus.component';
import { FormsModule } from '@angular/forms';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { BucketComponent } from './bucket/bucket.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenusComponent,
    MenuDetailComponent,
    BucketComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
