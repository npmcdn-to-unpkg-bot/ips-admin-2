import {Component, ISiteGroups, SiteGroupsService, ButtonComponent, FilterComponent, 
    BreadcrumbComponent } from './sites-groups';

@Component({
    selector: 'app-sites-groups',
    template: require('./sites-groups.component.html'),
    styles: [require('./sites-groups.component.less')],
    directives: [ButtonComponent, FilterComponent, BreadcrumbComponent],
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