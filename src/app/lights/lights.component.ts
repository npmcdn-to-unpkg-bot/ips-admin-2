import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { ILights, LightsService, ButtonComponent, FilterComponent,
    BreadcrumbComponent, AppStore} from './lights';

import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import './lights.component.less';

//-------------------------------------------------------------------
// LIGHTS-LIST
//-------------------------------------------------------------------
@Component({
    selector: 'lights-list',
    template: `
                <div class="dataRow" *ngFor="let item of items" (click)="selected.emit(item)">
                    <div class="big blue">{{item.displayName}}</div>
                    <div class="small">{{item.interiorWidth + ' x ' + item.interiorLength}}</div>
                    <div class="small">{{item.exteriorWidth + ' x ' + item.exteriorLength}}</div>
                    <div class="mdl-card__menu">
                        <button (click)="deleted.emit(item); $event.stopPropagation();"
                        class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                            <i class="material-icons">close</i>
                        </button>
                    </div>
                </div>`
})
class ItemsList {
    @Input() items: ILights[];
    @Output() selected = new EventEmitter();
    @Output() deleted = new EventEmitter();
}

//-------------------------------------------------------------------
// MAIN COMPONENT
//-------------------------------------------------------------------
@Component({
    selector: 'app-lights',
    providers: [],
    templateUrl: '../src/app/lights/lights.component.html',
    directives: [ButtonComponent, FilterComponent, BreadcrumbComponent, ItemsList],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class LightsComponent {

    lights: ILights[];

    myLights: Observable<Array<ILights>>;

    navHeader: string = 'Lights';
    columns = ['Name'];
    filterValues = ['Filter', 'By', 'A', 'Different', 'Value'];
    errorMessage: string;

    constructor(private _lightsService: LightsService, private store: Store<AppStore>) {

    }

    ngOnInit() {
        this.myLights = this._lightsService.myLights;
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
