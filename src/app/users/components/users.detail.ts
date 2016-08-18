/**
 * Created by sxd15 on 8/11/2016.
 */

import { Component, Input, Output, EventEmitter, IUser } from '../users';

//-------------------------------------------------------------------
// LIGHTS-LIST
//-------------------------------------------------------------------
@Component({
    selector: 'users-detail',
    template: `
        <h2>Editing {{originalName}}</h2>
        <form novalidate>
                  <div class="mdl-textfield mdl-js-textfield">
                    <label>Item Name</label>
                    <input [(ngModel)]="selectedItem.displayName" name="displayName"
                      placeholder="Enter a name"
                      class="mdl-textfield__input" type="text">
                  </div>
        </form>`
})
export class UsersDetail {

    originalName: string;
    selectedItem: IUser;
    @Output() saved = new EventEmitter();
    @Output() cancelled = new EventEmitter();

    @Input('item') set item(value: IUser){
        if (value) this.originalName = value.displayName;
        this.selectedItem = Object.assign({}, value);
    }
}