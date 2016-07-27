import {
    addProviders,
    inject
} from '@angular/core/testing';

import { AuthRedirectComponent } from './authRedirect.component';

describe('AuthRedirectComponent::', () => {

    beforeEach(() => {
        addProviders([AuthRedirectComponent]);
    });

    it('should instantiate by injection', inject([AuthRedirectComponent], (component: AuthRedirectComponent) => {
        expect(component).toEqual(jasmine.any(AuthRedirectComponent));
    }));

});