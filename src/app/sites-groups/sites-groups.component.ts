import { Component } from "@angular/core";
import { ButtonComponent } from '../../shared/button/button.component';
import { FilterComponent } from '../../shared/filter/filter.component';
import { SiteGroupsService } from './site-groups.service';
import { ISiteGroups } from './site-groups.interface';

import '../../css/styles.less';
import './sites-groups.component.less';

@Component({
    selector: 'app-sites-groups',
    directives: [ButtonComponent, FilterComponent],
    templateUrl: '../src/app/sites-groups/sites-groups.component.html',
    providers: [SiteGroupsService]
})

export class SitesGroupsComponent {
    
    headerTitle: string = "Sites > Site Groups"
    siteGroups: ISiteGroups[];
    filterValues = ["Filter", "By", "A", "Value"];

    constructor(private _siteGroupsService: SiteGroupsService) {

        this.siteGroups = this._siteGroupsService.getAllSiteGroups();
    }
}