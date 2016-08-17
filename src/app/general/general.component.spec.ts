import {
    addProviders,
    inject
} from '@angular/core/testing';

import { GeneralComponent } from './general.component';

describe('GeneralComponent::', () => {

    beforeEach(() => {
        addProviders([GeneralComponent]);
    });

    it('should instantiate by injection', inject([GeneralComponent], (component: GeneralComponent) => {
        expect(component).toEqual(jasmine.any(GeneralComponent));
    }));

});