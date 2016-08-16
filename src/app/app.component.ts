import { Component, ChangeDetectionStrategy, ROUTER_DIRECTIVES, provideRouter, 
    RouterConfig, Store, Observable, AuthenticationComponent, MdButton, MdToolbar,
    MD_LIST_DIRECTIVES, MdIcon, MdIconRegistry, Dropdown, DashboardComponent, 
    SitesAllContainer, SitesGroupsComponent, BlankComponent, UsersComponent,
    SettingsComponent, LightsContainer, APIKeysComponent, CodebooksComponent,
    DeploymentComponent, MobileConfigComponent, GeneralComponent, NotFoundComponent} from './app'
import './rxjs-operators';

//there isn't a LESS loader in ng2 yet
import './app.component.less';

@Component({
   selector: 'app',
   templateUrl: '../src/app/app.component.html',
   directives: [ROUTER_DIRECTIVES, AuthenticationComponent, MdButton, MD_LIST_DIRECTIVES, 
   DashboardComponent, MdToolbar, MdIcon, Dropdown],
   viewProviders: [MdIconRegistry]
})



export class AppComponent {

    //text decoration values for sublist anchors
    clicked: string = null;
    private selectedAnchorId: string;
    user: string = "Adam"; //this will later be replaced with dynamic user profile info

    setSelectedAnchor(e): void {

      this.selectedAnchorId = e.currentTarget.id;
    }

    setClasses(elementId: string) {

        return {
            anchor: true,
            anchorClicked: this.selectedAnchorId === elementId
        }
    }
}
