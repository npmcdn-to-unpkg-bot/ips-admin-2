import { Component, ILights, LightsService, ButtonComponent, FilterComponent, 
    BreadcrumbComponent} from './lights';

import './lights.component.less';

@Component({
    selector: 'app-lights',
    directives: [ButtonComponent, FilterComponent, BreadcrumbComponent],
    templateUrl: '../src/app/lights/lights.component.html',
    providers: [LightsService]
})

export class LightsComponent {

    lights: ILights[];
    navHeader: string = 'Lights';
    columns = ['Name'];
    filterValues = ['Filter', 'By', 'A', 'Different', 'Value'];

    constructor(private _lightsService: LightsService) {

        this.lights = this._lightsService.getAllFixtureTypes();
    }

    lightsClick(luminaireTypeId: number): void {
        alert('Opening luminaire type with luminaireTypeId: ' + luminaireTypeId);
    }
}