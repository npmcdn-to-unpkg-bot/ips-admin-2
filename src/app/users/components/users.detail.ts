/**
 * Created by sxd15 on 8/11/2016.
 */

import { Component, Input, Output, EventEmitter, IUser } from '../users';

//-------------------------------------------------------------------
// LIGHTS-LIST
//-------------------------------------------------------------------
@Component({
    selector: 'users-detail',
    template: require('./users.detail.html')
})
export class UsersDetail {

    originalName: string;
    selectedItem: IUser;
    @Output() saved = new EventEmitter();       //TODO: wire up a save event
    @Output() cancelled = new EventEmitter();   //TODO: wire up a cancel & reset event

    @Input('item') set item(value: IUser){
        if (value) this.originalName = value.displayName;
        this.selectedItem = Object.assign({}, value);
    }
}