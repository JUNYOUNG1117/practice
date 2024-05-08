// AppModule
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // FormsModule import 추가
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // HeroDetailComponent import 추가
import { HeroesComponent } from './heroes/heroes.component'; // HeroesComponent import 추가
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


@NgModule({
    declarations: [
      AppComponent,
      MessagesComponent,
      DashboardComponent,
      HeroDetailComponent,
      HeroesComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      RouterModule,
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, {dataEncapsulation: false}
      )
      

    ],
    providers: [],
    bootstrap: [AppComponent]
  })
// @NgModule({
//   declarations: [
//     AppComponent,
//     MessagesComponent,
//     DashboardComponent,
//   ],
//   imports: [
    
//     BrowserModule,
//     FormsModule, // FormsModule 추가
//     AppRoutingModule,
//     HeroDetailComponent, // HeroDetailComponent 선언 추가
//     HeroesComponent // HeroesComponent 선언 추가
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
export class AppModule { }

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// // import { HeroesComponent } from './heroes/heroes.component';
// import { FormsModule } from '@angular/forms';
// import { HeroesComponent } from './heroes/heroes.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// import { MessagesComponent } from './messages/messages.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     MessagesComponent,
//     DashboardComponent,

//     // HeroesComponent
//   ],
//   providers: [],
//   bootstrap: [AppComponent],

//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     HeroDetailComponent,
//     HeroesComponent,
//   ],
// })
// export class AppModule {}
