import { Component, IAllSites, AllSitesService, ButtonComponent, FilterComponent,
    BreadcrumbComponent } from './sites-all';

//import less
import './sites-all.component.less';

@Component({
    selector: 'app-sites-all',
    directives: [ButtonComponent, FilterComponent, BreadcrumbComponent],
    templateUrl: '../src/app/sites-all/sites-all.component.html',
    providers: [AllSitesService]
})

export class SitesAllComponent {
    
    navHeader: string = 'Sites > All Sites'
    allSites: IAllSites[];
    filterValues = ['Filter', 'By', 'A', 'Value'];

    constructor(private _allSitesService: AllSitesService) {
        this.allSites = this._allSitesService.getAllSites();
    }

    allSitesClick(siteId: number): void {
        alert('Opening site with siteId: ' + siteId);
    }
}