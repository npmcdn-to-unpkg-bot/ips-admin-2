// @Routes([
//     { path: '/', component: HomeComponent },
//     //{ path: '/redirect', component: AuthRedirectComponent }
//     { path: '/dashboard', component: HomeComponent },
//     { path: '/sites', component: HomeComponent },
//     { path: '/lights', component: HomeComponent },
//     { path: '/users', component: HomeComponent },
//     { path: '/settings', component: HomeComponent }
// ])


import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from '../home/home.component';

​
export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    //{ path: '/redirect', component: AuthRedirectComponent }
    { path: 'dashboard', component: HomeComponent },
    { path: 'sites', component: HomeComponent },
    { path: 'lights', component: HomeComponent },
    { path: 'users', component: HomeComponent },
    { path: 'settings', component: HomeComponent }
];
​
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];