import {
    addProviders,
    inject
} from '@angular/core/testing';

import { UsersDetail } from './users.details';

describe('UsersDetail::', () => {

    beforeEach(() => {
        addProviders([UsersDetail]);
    });

    it('should instantiate by injection', inject([UsersDetail], (component: UsersDetail) => {
        expect(component).toEqual(jasmine.any(UsersDetail));
    }));
});