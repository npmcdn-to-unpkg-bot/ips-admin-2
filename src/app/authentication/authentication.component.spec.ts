import {
    addProviders,
    inject
} from '@angular/core/testing';

import { AuthenticationComponent } from './authentication.component';

describe('AuthenticationComponent::', () => {

    beforeEach(() => {
        addProviders([AuthenticationComponent]);
    });

    it('should instantiate by injection', inject([AuthenticationComponent], (component: AuthenticationComponent) => {
        expect(component).toEqual(jasmine.any(AuthenticationComponent));
    }));
});