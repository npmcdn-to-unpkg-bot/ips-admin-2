import * as mc from './mobileConfig';

import '../../css/styles.less';
import './mobileConfig.component.less';

@mc.Component({
    selector: 'app-mobileConfig',
    directives: [mc.ButtonComponent, mc.FilterComponent, mc.BreadcrumbComponent, mc.ButtonSaveComponent],
    templateUrl: '../src/app/mobileConfig/mobileConfig.component.html',
    providers: [mc.MobileConfigService]
})

export class MobileConfigComponent {

    navHeader: string = "Settings > Mobile Config";
    mobileConfigs: mc.IMobileConfig[];
    filterValues = ["Filter", "By", "A", "Value"];

    constructor(private _mobileConfigService: mc.MobileConfigService) {
        this.mobileConfigs = _mobileConfigService.getAllFixtureTypes();
    }

    mobileConfigClick(mobileConfigID: number): void {
        alert("Opening mobile config with mobileConfigID: " + mobileConfigID);
    }
}