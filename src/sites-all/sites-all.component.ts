import { Component } from "@angular/core";
import { ButtonComponent } from '../ui/button/button.component';

//import less
import '../style/styles.less';
import './sites-all.component.less';

@Component({
    selector: 'app-sites-all',
    directives: [ButtonComponent],
    templateUrl: '../src/sites-all/sites-all.component.html'
})

export class SitesAllComponent {
    
    headerTitle: string = "Sites > All Sites"
}