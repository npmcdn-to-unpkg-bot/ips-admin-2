import { Component, AuthenticationComponent, ChangeDetectionStrategy,
    Observable, Store, UsersList, UsersDetail,
    IUser, UsersService, ButtonComponent, FilterComponent,
    BreadcrumbComponent, AppStore } from '../users';

import './users.container.less';

@Component({
    selector: 'app-users',
    providers: [UsersService],
    templateUrl: '../src/app/users/containers/users.container.html',
    directives: [BreadcrumbComponent, AuthenticationComponent, UsersList, UsersDetail],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersContainer {

    users: Observable<Array<IUser>>;
    selectedUser: Observable<IUser>;

    navHeader: string = 'Users';

    constructor(private usersService: UsersService, private store: Store<AppStore>) {

    }

    ngOnInit() {
        this.users = this.usersService.users;
        this.usersService.getUsers();
    }

    selectItem(item: IUser) {
        this.store.dispatch({type: 'SELECT_ITEM', payload: item});
    }

    deleteItem(item: IUser) {
        this.usersService.deleteUser(item);
    }
}