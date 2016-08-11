/**
 * Created by sxd15 on 8/11/2016.
 */

import { Component, Input, Output, EventEmitter, ILight } from '../lights';

//-------------------------------------------------------------------
// LIGHTS-LIST
//-------------------------------------------------------------------
@Component({
    selector: 'lights-detail',
    template: `<div class="defaultPlaceholder">Select a light to view details</div>`
})
export class LightsDetail {
     @Input() item: ILight;
    // @Output() selected = new EventEmitter();
    // @Output() deleted = new EventEmitter();
}