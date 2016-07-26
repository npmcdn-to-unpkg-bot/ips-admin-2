import * as sg from './sites-groups';

//less files
import '../../css/styles.less';
import './sites-groups.component.less';

@sg.Component({
    selector: 'app-sites-groups',
    directives: [sg.ButtonComponent, sg.FilterComponent],
    templateUrl: '../src/app/sites-groups/sites-groups.component.html',
    providers: [sg.SiteGroupsService]
})

export class SitesGroupsComponent {
    
    headerTitle: string = "Sites > Site Groups"
    siteGroups: sg.ISiteGroups[];
    filterValues = ["Filter", "By", "A", "Value"];

    constructor(private _siteGroupsService: sg.SiteGroupsService) {

        this.siteGroups = this._siteGroupsService.getAllSiteGroups();
    }

    sitesGroupsClick(siteGroupID: number): void {
        alert("Opening site with siteId: " + siteGroupID);
    }
}