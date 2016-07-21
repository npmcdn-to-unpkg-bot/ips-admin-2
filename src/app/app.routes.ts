import { provideRouter, RouterConfig } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SitesAllComponent } from './sites-all/sites-all.component';
import { SitesGroupsComponent } from './sites-groups/sites-groups.component';
import { BlankComponent } from './blank/blank.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { LightsComponent } from './lights/lights.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { APIKeysComponent } from './apiKeys/apiKeys.component';
import { CodebooksComponent } from './codebooks/codebooks.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { MobileConfigComponent } from './mobileConfig/mobileConfig.component';
import { GeneralComponent } from './general/general.component';

//BlankComponent == I haven't implemented it yet ​

export const routes: RouterConfig = [
    { path: '', component: DashboardComponent },
    { path: 'sites-all', component: SitesAllComponent },
    { path: 'sites-groups', component: SitesGroupsComponent },
    { path: 'lights', component: LightsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'login', component: AuthenticationComponent },
    { path: 'general', component: GeneralComponent },
    { path: 'codebooks', component: CodebooksComponent },
    { path: 'mobile-config', component: MobileConfigComponent },
    { path: 'api-keys', component: APIKeysComponent },
    { path: 'deployment', component: DeploymentComponent }

];

//if you need to route 2+ levels deep, it'd be like this 
//(say you're drilling down from sites)
//   { path: 'sites/all', component: <component> },
//   { path: 'sites/groups', component: <component> },
//
// and in the html:
// [routerLink]="['/sites/all']"
​
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];