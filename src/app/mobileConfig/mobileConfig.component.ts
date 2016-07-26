import * as mc from './mobileConfig';

import '../../css/styles.less';
import './mobileConfig.component.less';

@mc.Component({
    selector: 'app-mobileConfig',
    templateUrl: '../src/app/mobileConfig/mobileConfig.component.html',
    providers: [mc.MobileConfigService]
})

export class MobileConfigComponent {

    headerTitle: string = "Mobile Config";
    mobileConfigs: mc.IMobileConfig[];

    constructor(private _mobileConfigService: mc.MobileConfigService) {
        this.mobileConfigs = _mobileConfigService.getAllFixtureTypes();
    }
}