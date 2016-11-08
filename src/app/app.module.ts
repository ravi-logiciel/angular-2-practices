import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRouteModule, RouteComponents } from './routes/app.route.module';

import { HttpService } from './services/http.service';

import { AppComponent } from './app.component';

import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
    imports: [
        BrowserModule,
        AppRouteModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        FlashMessagesModule,
    ],
    declarations: [
        AppComponent,
        RouteComponents,
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        HttpService,
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
