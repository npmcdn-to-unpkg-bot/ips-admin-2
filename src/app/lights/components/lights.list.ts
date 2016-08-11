/**
 * Created by sxd15 on 8/11/2016.
 */

import { Component, Input, Output, EventEmitter, ILights } from '../lights';

import '../lights.component.less';

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
export class LightsList {
    @Input() items: ILights[];
    @Output() selected = new EventEmitter();
    @Output() deleted = new EventEmitter();
}