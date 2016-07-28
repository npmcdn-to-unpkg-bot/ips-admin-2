import * as dash from './dashboard';

import '../../css/styles.less';
import './dashboard.component.less';

@dash.Component({
    selector: 'app-dashboard',
    templateUrl: '../src/app/dashboard/dashboard.component.html',
    directives: [dash.BreadcrumbComponent],
})

export class DashboardComponent {

    navHeader: string = "Dashboard";


}