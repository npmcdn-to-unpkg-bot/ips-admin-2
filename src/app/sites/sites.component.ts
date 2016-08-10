import { Component, BreadcrumbComponent, ButtonAddComponent,
  SitesAllComponent, SitesGroupsComponent, ROUTER_DIRECTIVES, MapComponent } from './sites';

import './sites.component.less';

@Component({
    selector: 'app-sites',
    templateUrl: '../src/app/sites/sites.component.html',
    directives: [BreadcrumbComponent, ButtonAddComponent, SitesAllComponent,
                  SitesGroupsComponent, ROUTER_DIRECTIVES, MapComponent],
})

export class SitesComponent {

  navHeader: string = "Sites";

  allTabClick(): void {
    this.navHeader = "Sites > All Sites";
  }

  groupTabClick(): void {
    this.navHeader = "Sites > Site Groups";
  }

  favTabClick(): void {
    alert("This view does not exist.");
  }
        
}