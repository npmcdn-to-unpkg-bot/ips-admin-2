import * as user from './users';

import '../../css/styles.less';
import './users.component.less';

@user.Component({
    selector: 'app-users',
    templateUrl: '../src/app/users/users.component.html',
    directives: [user.BreadcrumbComponent]
})

export class UsersComponent {

    navHeader: string = "Users";
}