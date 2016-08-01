import { Component, BreadcrumbComponent } from './general';

import './general.component.less';

@Component({
    selector: 'app-general',
    templateUrl: '../src/app/general/general.component.html',
    directives: [BreadcrumbComponent]
})

export class GeneralComponent {

    navHeader: string = 'Settings > General';
}