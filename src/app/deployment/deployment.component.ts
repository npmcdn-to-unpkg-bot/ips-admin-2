import { Component } from '@angular/core';

import '../../css/styles.less';
import './deployment.component.less';

@Component({
    selector: 'app-deployment',
    templateUrl: '../src/app/deployment/deployment.component.html'
})

export class DeploymentComponent {

    headerTitle: string = "Deployment";
}