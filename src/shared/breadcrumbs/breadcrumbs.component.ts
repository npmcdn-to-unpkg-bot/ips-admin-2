import { Component, Input } from '@angular/core';

import './breadcrumbs.component.less';

@Component({
    selector: 'ui-breadcrumb',
    template: 
    `
    <div>{{navHeader}}</div>
    `
})

export class BreadcrumbComponent {

    @Input() navHeader; //not declaring a type because I think I can append HTML...idk
}