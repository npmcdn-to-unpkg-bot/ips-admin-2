import { Component, AuthenticationComponent, ChangeDetectionStrategy,
    Observable, Store, UsersList, UsersDetail,
    IUser, UsersService, ButtonComponent, FilterComponent,
    BreadcrumbComponent, AppStore } from '../users';

@Component({
    selector: 'app-users',
    template: require('./users.container.html'),
    styles: [require('./users.container.less')],
    providers: [UsersService],
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
        this.selectedUser = this.usersService.selectedUser;
        this.usersService.getUsers();
    }

    selectItem(item: IUser) {
        this.usersService.selectUser(item);
    }

    deleteItem(item: IUser) {
        this.usersService.deleteUser(item);
    }

    resetItem() {
        this.usersService.resetUser()
    }

    saveItem(user: IUser) {
        this.usersService.createUser(user);

        // Generally, we would want to wait for the result of `itemsService.saveItem`
        // before resetting the current item.
        this.resetItem();
    }
}