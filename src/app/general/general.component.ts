import * as gen from './general';

import '../../css/styles.less';
import './general.component.less';

@gen.Component({
    selector: 'app-general',
    templateUrl: '../src/app/general/general.component.html',
    directives: [gen.BreadcrumbComponent]
})

export class GeneralComponent {

    navHeader: string = "Settings > General";
}