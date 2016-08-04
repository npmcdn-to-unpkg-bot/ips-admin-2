import { Component, BreadcrumbComponent, AuthenticationComponent } from './users';

import './users.component.less';

@Component({
    selector: 'app-users',
    templateUrl: '../src/app/users/users.component.html',
    directives: [BreadcrumbComponent, AuthenticationComponent]
})

export class UsersComponent {

    navHeader: string = 'Users';
}