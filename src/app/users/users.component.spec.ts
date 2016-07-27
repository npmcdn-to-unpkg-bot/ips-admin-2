import {
    addProviders,
    inject
} from '@angular/core/testing';

import { UsersComponent } from './users.component';

describe('UsersComponent::', () => {

    beforeEach(() => {
        addProviders([UsersComponent]);
    });

    it('should instantiate by injection', inject([UsersComponent], (component: UsersComponent) => {
        expect(component).toEqual(jasmine.any(UsersComponent));
    }));

    it('should have a headerTitle', inject([UsersComponent], (component: UsersComponent) => {
        expect(component.headerTitle).toEqual('Users');
    }));
});