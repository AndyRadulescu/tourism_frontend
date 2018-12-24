import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MainComponent} from './main/main/main.component';
import {RegisterComponent} from './auth/register/register.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '', component: MainComponent},
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
