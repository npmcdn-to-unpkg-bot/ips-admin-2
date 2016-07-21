import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AuthenticationComponent } from './authentication/authentication.component';
//import { AuthRedirectComponent } from './authRedirect/authRedirect.component';
import { MdButton } from '@angular2-material/button/button';
import { MdToolbar } from '@angular2-material/toolbar/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav/sidenav';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon/icon';
import { Dropdown } from '../shared/dropdown/dropdown.component';
import { DashboardComponent } from './dashboard/dashboard.component';


//there isn't a LESS loader in ng2 yet
import '../css/styles.less';
import './app.component.less';

@Component({
   selector: 'app',
   templateUrl: '../src/app/app.component.html',
   directives: [ROUTER_DIRECTIVES, AuthenticationComponent, MD_SIDENAV_DIRECTIVES, MdButton, 
                    DashboardComponent, MdToolbar, MdIcon, Dropdown],
   viewProviders: [MdIconRegistry],
   changeDetection: ChangeDetectionStrategy.OnPush
})



export class AppComponent {

    //text decoration values for sublist anchors
    clicked: string = null;
    private selectedAnchorId: string;
    dropdownValues = ["Adam", "This", "Is", "Just", "A", "Sample", "Component"];

    //for future use with advanced icons and stuff
    // constructor(mdIconRegistry: MdIconRegistry) {
    //     mdIconRegistry
    //         .addSvgIcon('thumb-up', '/icon/assets/thumbup-icon.svg')
    //         .addSvgIconSetInNamespace('core', '/icon/assets/core-icon-set.svg')
    //         .registerFontClassAlias('fontawesome', 'fa');
    // }

    sideNavClick(clicked: string): void {

        this.clicked = this.clicked == clicked ? null : clicked;
    }

    setSelectedAnchor(e): void {
      this.selectedAnchorId = e.currentTarget.id;
    }

    setClasses(elementId: string) {

        return {
            sublistAnchor: true,
            sublistAnchorClicked: this.selectedAnchorId === elementId
        }
    }
}