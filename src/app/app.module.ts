import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './auth/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {MainComponent} from './main/main/main.component';
import {RegisterComponent} from './auth/register/register.component';
import {FormsModule} from '@angular/forms';
import {HotelListComponent} from './main/main/hotel-list/hotel-list.component';
import {CommonModule} from '@angular/common';
import {MapComponent} from './main/main/hotel-list/map/map.component';
import {AgmCoreModule} from '@agm/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from './main/main/date-picker/date-picker.component';
import { RoomDetailComponent } from './main/room-detail/room-detail.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        PageNotFoundComponent,
        MainComponent,
        RegisterComponent,
        HotelListComponent,
        MapComponent,
        DatePickerComponent,
        RoomDetailComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgbModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBMI6wpkC90IowArIGxnJPJnn0_cn6h1S4'
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
