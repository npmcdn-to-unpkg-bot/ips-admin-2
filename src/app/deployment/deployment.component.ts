import * as dep from './deployment';

import '../../css/styles.less';
import './deployment.component.less';

@dep.Component({
    selector: 'app-deployment',
    templateUrl: '../src/app/deployment/deployment.component.html',
    directives: [dep.BreadcrumbComponent]
})

export class DeploymentComponent {

    navHeader: string = "Settings > Deployment";
}