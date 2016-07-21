import { Component } from '@angular/core';

import '../../css/styles.less';
import './mobileConfig.component.less';

@Component({
    selector: 'app-mobileConfig',
    templateUrl: '../src/app/mobileConfig/mobileConfig.component.html'
})

export class MobileConfigComponent {

    headerTitle: string = "Mobile Config";
}