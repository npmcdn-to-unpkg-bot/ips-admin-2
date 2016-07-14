import { Component } from '@angular/core';

import '../style/styles.less';
import './users.component.less';

@Component({
    selector: 'app-users',
    templateUrl: '../src/users/users.component.html'
})

export class UsersComponent {

    headerTitle: string = "Users";
}