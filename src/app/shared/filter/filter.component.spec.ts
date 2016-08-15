import {
    addProviders,
    inject
} from '@angular/core/testing';

import { FilterComponent } from './filter.component';

describe('FilterComponent::', () => {

    beforeEach(() => {
        addProviders([FilterComponent]);
    });

    it('should instantiate by injection', inject([FilterComponent], (component: FilterComponent) => {
        expect(component).toEqual(jasmine.any(FilterComponent));
    }));

    it('should emit a value', inject([FilterComponent], (component: FilterComponent) => {
        spyOn(component.select, 'emit');
        component.onSelect(component.values[0]);
        expect(component.select.emit).toHaveBeenCalled();
    }));
});