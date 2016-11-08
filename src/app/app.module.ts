import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRouteModule, AppRouteComponents } from './routes/app.route.module';

/* Services */
import { HttpService } from './services/http.service';
import { ModalService } from './services/modal.service';

/* Components */
import { AppComponent } from './app.component';
import { PopupOneComponent } from './popups/popup-one/popup-one.component';

/* Third Party Packages */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
    imports: [
        BrowserModule,
        AppRouteModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        FlashMessagesModule,
        NgbModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        PopupOneComponent,
        AppRouteComponents,
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        HttpService,
        ModalService,
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
