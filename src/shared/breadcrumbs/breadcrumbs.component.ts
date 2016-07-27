import { Component } from '@angular/core';

import './breadcrumbs.component.less';

@Component({
    selector: 'ui-breadcrumb',
    template: 
    `
    <div>{{navHeader}}</div>
    `
})

export class BreadcrumbComponent {

    navHeader: "Dashboard";
}