import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AuthenticationComponent } from '../authentication/authentication.component';
//import { AuthRedirectComponent } from '../authRedirect/authRedirect.component';
import { HomeComponent } from '../home/home.component';
import { MdButton } from '@angular2-material/button/button';
import { MdToolbar } from '@angular2-material/toolbar/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav/sidenav';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon/icon';



import '../style/styles.less';
import './app.component.less';

@Component({
   selector: 'app',
   templateUrl: '../src/app/app.component.html',
   styleUrls: ['../src/app/app.component.less'],
   directives: [ROUTER_DIRECTIVES, AuthenticationComponent, MD_SIDENAV_DIRECTIVES, MdButton, MdToolbar, MdIcon],
   viewProviders: [MdIconRegistry],
   changeDetection: ChangeDetectionStrategy.OnPush
})



export class AppComponent {
    toolbarColor: string = "#FD6769";

    //text decoration values for sublist anchors
    tdAllSites: string = "none";

    //clicked values
    clickedSites: boolean = false;



    //for future use with advanced icons and stuff
    // constructor(mdIconRegistry: MdIconRegistry) {
    //     mdIconRegistry
    //         .addSvgIcon('thumb-up', '/icon/assets/thumbup-icon.svg')
    //         .addSvgIconSetInNamespace('core', '/icon/assets/core-icon-set.svg')
    //         .registerFontClassAlias('fontawesome', 'fa');
    // }

    sideNavClick(): void {

        this.clickedSites = !this.clickedSites;
        console.log("sites clicked: " + this.clickedSites);
    }

    sideNavAlert(e): void {
        alert("hey");    
    }

    sideNavClose() : void {
        console.log("ul item clicked");
    }

}