import {
    addProviders,
    inject
} from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent::', () => {

    beforeEach(() => {
        addProviders([SidebarComponent]);
    });

    it('should instantiate by injection', inject([SidebarComponent], (component: SidebarComponent) => {
        expect(component).toEqual(jasmine.any(SidebarComponent));
    }));

    it('should set the selected anchor', inject([SidebarComponent], (component: SidebarComponent) => {
        component.setSelectedAnchor({currentTarget: {id: 'testAnchorId'}});
        let classes = component.setClasses('testAnchorId');
        expect(classes.sublistAnchorClicked).toBe(true);
    }));
});