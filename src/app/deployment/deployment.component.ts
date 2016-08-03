import { Component, BreadcrumbComponent } from './deployment';

import './deployment.component.less';

@Component({
    selector: 'app-deployment',
    templateUrl: '../src/app/deployment/deployment.component.html',
    directives: [BreadcrumbComponent]
})

export class DeploymentComponent {

    navHeader: string = 'Settings > Deployment';
}