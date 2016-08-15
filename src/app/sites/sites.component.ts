import { Component, ButtonAddComponent,
  SitesAllContainer, SitesGroupsComponent, ROUTER_DIRECTIVES, MapComponent } from './sites';

import './sites.component.less';

@Component({
    selector: 'app-sites',
    templateUrl: '../src/app/sites/sites.component.html',
    directives: [ButtonAddComponent, SitesAllContainer,
                  SitesGroupsComponent, ROUTER_DIRECTIVES, MapComponent],
})

export class SitesComponent {

        
}