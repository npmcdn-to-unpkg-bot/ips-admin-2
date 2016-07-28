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

    it('should have a navHeader', inject([UsersComponent], (component: UsersComponent) => {
        expect(component.navHeader).toEqual('Users');
    }));
});