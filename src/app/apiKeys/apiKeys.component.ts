import { Component } from '@angular/core';

import '../../css/styles.less';
import './apiKeys.component.less';

@Component({
    selector: 'app-apiKeys',
    templateUrl: '../src/app/apiKeys/apiKeys.component.html'
})

export class APIKeysComponent {

    headerTitle: string = "API Keys";
}