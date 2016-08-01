import { Component, BreadcrumbComponent } from './dashboard';

import './dashboard.component.less';

@Component({
    selector: 'app-dashboard',
    templateUrl: '../src/app/dashboard/dashboard.component.html',
    directives: [BreadcrumbComponent],
})

export class DashboardComponent {

    navHeader: string = 'Dashboard';


}