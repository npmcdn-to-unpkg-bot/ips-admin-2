import { Component, ChangeDetectionStrategy,
    Observable, Store, LightsList, LightsDetail,
    ILight, LightsService, ButtonComponent, FilterComponent,
    BreadcrumbComponent, AppStore} from '../lights';

import './lights.container.less';

//-------------------------------------------------------------------
// MAIN COMPONENT
//-------------------------------------------------------------------
@Component({
    selector: 'app-lights',
    providers: [],
    templateUrl: '../src/app/lights/containers/lights.container.html',
    directives: [ButtonComponent, FilterComponent, BreadcrumbComponent, LightsList, LightsDetail],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class LightsContainer {

    lights: Observable<Array<ILight>>;
    selectedLight: Observable<ILight>;

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

    selectItem(item: ILight) {
        this.store.dispatch({type: 'SELECT_ITEM', payload: item});
    }

    deleteItem(item: ILight) {
        this._lightsService.deleteLight(item);
    }
}
