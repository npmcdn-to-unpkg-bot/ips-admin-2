import { Component } from "@angular/core";
import { ButtonComponent } from '../../shared/button/button.component';
import { FilterComponent } from '../../shared/filter/filter.component';
import { IAllSites } from './sites-all.interface.ts';
import { AllSitesService } from './sites-all.service.ts';

//import less
import '../../css/styles.less';
import './sites-all.component.less';

@Component({
    selector: 'app-sites-all',
    directives: [ButtonComponent, FilterComponent],
    templateUrl: '../src/app/sites-all/sites-all.component.html',
    providers: [AllSitesService]
})

export class SitesAllComponent {
    
    headerTitle: string = "Sites > All Sites"
    allSites: IAllSites[];
    filterValues = ["Filter", "By", "A", "Value"];

    constructor(private _allSitesService: AllSitesService) {
        this.allSites = this._allSitesService.getAllSites();
    }
}