import {Component, ISiteGroups, SiteGroupsService, ButtonComponent, FilterComponent, 
    BreadcrumbComponent } from './sites-groups';

//less files
import './sites-groups.component.less';

@Component({
    selector: 'app-sites-groups',
    directives: [ButtonComponent, FilterComponent, BreadcrumbComponent],
    templateUrl: '../src/app/sites-groups/sites-groups.component.html',
    providers: [SiteGroupsService]
})

export class SitesGroupsComponent {
    
    navHeader: string = 'Sites > Site Groups'
    siteGroups: ISiteGroups[];
    filterValues = ['Filter', 'By', 'A', 'Value'];
    errorMessage: string;

    constructor(private _siteGroupsService: SiteGroupsService) {}

    ngOnInit() {
        this._siteGroupsService.getSiteGroups().subscribe(
                siteGroups => this.siteGroups = siteGroups,
                error =>  this.errorMessage = <any>error);
    }

    sitesGroupsClick(siteGroupID: number): void {
        alert('Opening site with siteId: ' + siteGroupID);
    }
}