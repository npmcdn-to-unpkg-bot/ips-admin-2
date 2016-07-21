import { Component } from '@angular/core';

import '../../css/styles.less';
import './users.component.less';

@Component({
    selector: 'app-users',
    templateUrl: '../src/app/users/users.component.html'
})

export class UsersComponent {

    headerTitle: string = "Users";
}