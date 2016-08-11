import * as a from './app'
import './rxjs-operators';

//there isn't a LESS loader in ng2 yet
import './app.component.less';

@a.Component({
   selector: 'app',
   templateUrl: '../src/app/app.component.html',
   directives: [a.ROUTER_DIRECTIVES, a.AuthenticationComponent, a.MD_SIDENAV_DIRECTIVES, a.MdButton, 
                    a.DashboardComponent, a.MdToolbar, a.MdIcon, a.Dropdown],
   viewProviders: [a.MdIconRegistry],
   changeDetection: a.ChangeDetectionStrategy.OnPush
})



export class AppComponent {

    //text decoration values for sublist anchors
    clicked: string = null;
    private selectedAnchorId: string;
    dropdownValues = ['Adam', 'This', 'Is', 'Just', 'A', 'Sample', 'Component'];

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