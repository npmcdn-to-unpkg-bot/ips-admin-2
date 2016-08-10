import { provideRouter, RouterConfig, DashboardComponent, SitesAllComponent,
     SitesGroupsComponent, BlankComponent, UsersComponent, SettingsComponent,
    LightsComponent, APIKeysComponent, CodebooksComponent, DeploymentComponent, 
    MobileConfigComponent, GeneralComponent, AuthenticationComponent, 
    NotFoundComponent, SitesComponent} from './app'


//BlankComponent == I haven't implemented it yet ​

export const routes: RouterConfig = [
    { path: '', component: DashboardComponent },
    { 
        path: 'sites', 
        component: SitesComponent,
        children: [
            { path: '', 
              redirectTo: 'all',
              pathMatch: 'full' 
            },
            { path: 'all', component: SitesAllComponent },
            { path: 'groups', component: SitesGroupsComponent }
        ] },
    { path: 'lights', component: LightsComponent },
    { path: 'users', component: UsersComponent },
    { 
        path: 'settings', 
        component: SettingsComponent,
        children: [
            { path: '', component: BlankComponent }, //this is a dummy component...can't fix this?
            { path: 'general', component: GeneralComponent },
            { path: 'codebooks', component: CodebooksComponent },
            { path: 'mobile-config', component: MobileConfigComponent },
            { path: 'api-keys', component: APIKeysComponent },
            { path: 'deployment', component: DeploymentComponent }
        ] 
    },
    { path: 'login', component: AuthenticationComponent },
    { path: '**', component: NotFoundComponent } //404 support
];

//if you need to route 2+ levels deep, it'd be like this 
//(say you're drilling down from sites)
//   { path: 'sites/all', component: <component> },
//   { path: 'sites/groups', component: <component> },
//
// and in the html:
// [routerLink]='['/sites/all']'
​
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];