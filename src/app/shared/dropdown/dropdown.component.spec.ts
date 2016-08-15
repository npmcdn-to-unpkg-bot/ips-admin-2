import {
    addProviders,
    inject
} from '@angular/core/testing';

import { Dropdown } from './dropdown.component';

describe('Dropdown::', () => {

    beforeEach(() => {
        addProviders([Dropdown]);
    });

    it('should instantiate by injection', inject([Dropdown], (component: Dropdown) => {
        expect(component).toEqual(jasmine.any(Dropdown));
    }));

    it('should emit a value', inject([Dropdown], (component: Dropdown) => {
        spyOn(component.select, 'emit');
        component.onSelect(component.values[0]);
        expect(component.select.emit).toHaveBeenCalled();
    }));
});