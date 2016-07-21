import { Component } from "@angular/core";
import { ButtonComponent } from '../../shared/button/button.component';

//import less
import '../../css/styles.less';
import './sites-all.component.less';

@Component({
    selector: 'app-sites-all',
    directives: [ButtonComponent],
    templateUrl: '../src/app/sites-all/sites-all.component.html'
})

export class SitesAllComponent {
    
    headerTitle: string = "Sites > All Sites"
}