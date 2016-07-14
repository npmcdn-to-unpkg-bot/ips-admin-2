import { Component } from '@angular/core';
import { LightsService } from './lights.service';
import { ILights } from './lights.interface';

import '../style/styles.less';
import './lights.component.less';

@Component({
    selector: 'app-lights',
    templateUrl: '../src/lights/lights.component.html',
    providers: [LightsService]
})

export class LightsComponent {

    lights: ILights[];

    constructor(private _lightsService: LightsService) {

        this.lights = this._lightsService.getAllFixtureTypes();
    }
}