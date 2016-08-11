import { Component, ChangeDetectionStrategy,
    Observable, Store, LightsList,
    ILights, LightsService, ButtonComponent, FilterComponent,
    BreadcrumbComponent, AppStore} from '../lights';

import './lights.container.less';

//-------------------------------------------------------------------
// MAIN COMPONENT
//-------------------------------------------------------------------
@Component({
    selector: 'app-lights',
    providers: [],
    templateUrl: '../src/app/lights/containers/lights.container.html',
    directives: [ButtonComponent, FilterComponent, BreadcrumbComponent, LightsList],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class LightsContainer {

    lights: Observable<Array<ILights>>;

    navHeader: string = 'Lights';
    columns = ['Name'];
    filterValues = ['Filter', 'By', 'A', 'Different', 'Value'];
    errorMessage: string;

    constructor(private _lightsService: LightsService, private store: Store<AppStore>) {

    }

    ngOnInit() {
        this.lights = this._lightsService.myLights;
        this._lightsService.loadLights();
    }

    lightsClick(luminaireTypeId: number): void {
        alert('Opening luminaire type with luminaireTypeId: ' + luminaireTypeId);
    }

    selectItem(item: ILights) {
        this.store.dispatch({type: 'SELECT_ITEM', payload: item});
    }

    deleteItem(item: ILights) {
        this._lightsService.deleteLight(item);
    }
}
