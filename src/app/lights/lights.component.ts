import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { FilterComponent } from '../../shared/filter/filter.component';
import { LightsService } from './lights.service';
import { ILights } from './lights.interface';

import '../../css/styles.less';
import './lights.component.less';

@Component({
    selector: 'app-lights',
    directives: [ButtonComponent, FilterComponent],
    templateUrl: '../src/app/lights/lights.component.html',
    providers: [LightsService]
})

export class LightsComponent {

    lights: ILights[];
    headerTitle: string = "Lights";
    columns = ["Name"];
    filterValues = ["Filter", "By", "A", "Value"];

    constructor(private _lightsService: LightsService) {

        this.lights = this._lightsService.getAllFixtureTypes();
    }
}