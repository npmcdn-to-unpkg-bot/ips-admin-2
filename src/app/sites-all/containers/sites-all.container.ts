import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ISite, AllSitesService, ButtonComponent, FilterComponent, BreadcrumbComponent } from '../sites-all';
import { MapComponent } from '../../../shared/map/map.component';

//import less
import './sites-all.container.less';

@Component({
    selector: 'app-sites-all',
    directives: [ButtonComponent, FilterComponent, BreadcrumbComponent, MapComponent],
    templateUrl: '../src/app/sites-all/containers/sites-all.container.html',
    providers: [AllSitesService]
})

export class SitesAllContainer {
    
    navHeader: string = 'Sites > All Sites'
    allSites: ISite[];
    filterValues = ['Filter', 'By', 'A', 'Value'];
    errorMessage: string;

    constructor(private _allSitesService: AllSitesService) {}

    ngOnInit() {
        this._allSitesService.getSites().subscribe(
                sites => this.allSites = sites,
                error =>  this.errorMessage = <any>error);
    }

    allSitesClick(siteId: number): void {
        alert('Opening site with siteId: ' + siteId);
    }
}