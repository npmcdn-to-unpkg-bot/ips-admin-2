import { Component, BreadcrumbComponent } from './users';

import './users.component.less';

@Component({
    selector: 'app-users',
    templateUrl: '../src/app/users/users.component.html',
    directives: [BreadcrumbComponent]
})

export class UsersComponent {

    navHeader: string = 'Users';
}