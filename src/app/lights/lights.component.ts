import * as li from './lights';

import '../../css/styles.less';
import './lights.component.less';

@li.Component({
    selector: 'app-lights',
    directives: [li.ButtonComponent, li.FilterComponent, li.BreadcrumbComponent],
    templateUrl: '../src/app/lights/lights.component.html',
    providers: [li.LightsService]
})

export class LightsComponent {

    lights: li.ILights[];
    navHeader: string = "Lights";
    columns = ["Name"];
    filterValues = ["Filter", "By", "A", "Value"];

    constructor(private _lightsService: li.LightsService) {

        this.lights = this._lightsService.getAllFixtureTypes();
    }

    lightsClick(luminaireTypeId: number): void {
        alert("Opening luminaire type with luminaireTypeId: " + luminaireTypeId);
    }
}