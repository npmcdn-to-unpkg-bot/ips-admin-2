/**
 * Created by sxd15 on 8/11/2016.
 */

import { Component, Input, Output, EventEmitter, IUser } from '../users';

//-------------------------------------------------------------------
// LIGHTS-LIST
//-------------------------------------------------------------------
@Component({
    selector: 'users-detail',
    template: `<div class="defaultPlaceholder">Select a user to view details</div>`
})
export class UsersDetail {
     @Input() item: IUser;
    // @Output() selected = new EventEmitter();
    // @Output() deleted = new EventEmitter();
}