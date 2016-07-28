import * as all from './sites-all';

//import less
import '../../css/styles.less';
import './sites-all.component.less';

@all.Component({
    selector: 'app-sites-all',
    directives: [all.ButtonComponent, all.FilterComponent, all.BreadcrumbComponent],
    templateUrl: '../src/app/sites-all/sites-all.component.html',
    providers: [all.AllSitesService]
})

export class SitesAllComponent {
    
    navHeader: string = "Sites > All Sites"
    allSites: all.IAllSites[];
    filterValues = ["Filter", "By", "A", "Value"];

    constructor(private _allSitesService: all.AllSitesService) {
        this.allSites = this._allSitesService.getAllSites();
    }

    allSitesClick(siteId: number): void {
        alert("Opening site with siteId: " + siteId);
    }
}