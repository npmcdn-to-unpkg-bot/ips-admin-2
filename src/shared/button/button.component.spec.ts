import {
    addProviders,
    inject
} from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent::', () => {

    beforeEach(() => {
        addProviders([ButtonComponent]);
    });

    it('should instantiate by injection', inject([ButtonComponent], (component: ButtonComponent) => {
        expect(component).toEqual(jasmine.any(ButtonComponent));
    }));

    it('should do something when clicked', inject([ButtonComponent], (component: ButtonComponent) => {
        spyOn(window, 'alert');
        component.onClick({currentTarget: {innerText: 'Test Event Object Text'}});
        expect(alert).toHaveBeenCalled();
    }));
});