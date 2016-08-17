import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ISite, AllSitesService, ButtonComponent, FilterComponent, BreadcrumbComponent } from '../sites-all';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon/icon';



@Component({
    selector: 'app-sites-all',
    template: require('./sites-all.container.html'),
    styles: [require('./sites-all.container.less')],
    directives: [ButtonComponent, FilterComponent, BreadcrumbComponent, MdIcon],
    providers: [AllSitesService]
})

export class SitesAllContainer {
    
    navHeader: string = 'Sites > All Sites';
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
