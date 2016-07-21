import { Component } from '@angular/core';

import '../../css/styles.less';
import './general.component.less';

@Component({
    selector: 'app-general',
    templateUrl: '../src/app/general/general.component.html'
})

export class GeneralComponent {

    headerTitle: string = "General";
}