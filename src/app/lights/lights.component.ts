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
    errorMessage: string;

    constructor(private _lightsService: LightsService) {}

    ngOnInit() {
        this._lightsService.getLights().subscribe(
                lights => this.lights = lights,
                error =>  this.errorMessage = <any>error);
    }

    lightsClick(luminaireTypeId: number): void {
        alert('Opening luminaire type with luminaireTypeId: ' + luminaireTypeId);
    }
}