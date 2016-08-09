import { ILights, LightsService, MyLights, ButtonComponent, FilterComponent,
    BreadcrumbComponent, AppStore} from './lights';

import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
//import {MyLights, AppStore} from './lights.service';

import './lights.component.less';


@Component({
    selector: 'items-list',
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

@Component({
    selector: 'app-lights',
    directives: [ButtonComponent, FilterComponent, BreadcrumbComponent, ItemsList],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: '../src/app/lights/lights.component.html',
    // providers: [LightsService]
})

export class LightsComponent {

    lights: ILights[];

    myLights: Observable<Array<ILights>>;

    navHeader: string = 'Lights';
    columns = ['Name'];
    filterValues = ['Filter', 'By', 'A', 'Different', 'Value'];
    errorMessage: string;

    constructor(private _lightsService: LightsService, private store: Store<AppStore>) {

        this.myLights = _lightsService.lights;

    }

    ngOnInit() {
        this._lightsService.getLights().subscribe(
                lights => this.lights = lights,
                error =>  this.errorMessage = <any>error);
    }

    lightsClick(luminaireTypeId: number): void {
        alert('Opening luminaire type with luminaireTypeId: ' + luminaireTypeId);
    }
}
