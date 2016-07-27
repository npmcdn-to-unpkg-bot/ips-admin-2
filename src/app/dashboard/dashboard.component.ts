import { Component } from "@angular/core";
import { BreadcrumbComponent } from '../../shared/breadcrumbs/breadcrumbs.component'

import '../../css/styles.less';

@Component({
    selector: 'app-dashboard',
    templateUrl: '../src/app/dashboard/dashboard.component.html',
    //directives: [BreadcrumbComponent],
    //providers: [BreadcrumbComponent]
})

export class DashboardComponent {

    // constructor(private _bread: BreadcrumbComponent) {
    //     _bread.navHeader = "Dashboard";
    // }
}