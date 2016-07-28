import {
    addProviders,
    inject
} from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent::', () => {

    beforeEach(() => {
        addProviders([DashboardComponent]);
    });

    it('should instantiate by injection', inject([DashboardComponent], (component: DashboardComponent) => {
        expect(component).toEqual(jasmine.any(DashboardComponent));
    }));
});