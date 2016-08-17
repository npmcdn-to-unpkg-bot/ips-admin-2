import {
    addProviders,
    inject
} from '@angular/core/testing';

import { UsersContainer } from './users.container';

describe('UsersComponent::', () => {

    beforeEach(() => {
        addProviders([UsersContainer]);
    });

    it('should instantiate by injection', inject([UsersContainer], (component: UsersContainer) => {
        expect(component).toEqual(jasmine.any(UsersContainer));
    }));

});