import {
    addProviders,
    inject
} from '@angular/core/testing';
import { provide } from '@angular/core'
import { ISiteGroups } from './sites-groups.interface';
import { SiteGroupsService } from './sites-groups.service';
import { SitesGroupsComponent } from './sites-groups.component';

class MockSiteGroupsService {
    getAllSiteGroups(): ISiteGroups[] {
        return [
            {
                'siteGroupID': 1,
                'organization_ID': 1,
                'siteGroupName': 'Group 1',
                'description': 'This is the first site group'
            },
            {
                'siteGroupID': 2,
                'organization_ID': 1,
                'siteGroupName': 'Group 2',
                'description': 'This is the second site group'
            }
        ]
    }
}

describe('SitesGroupsComponent::', () => {

    beforeEach(() => {
        addProviders([
            SitesGroupsComponent,
            provide(SiteGroupsService, {useClass: MockSiteGroupsService})
        ]);
    });

    it('should instantiate by injection', inject([SitesGroupsComponent], (component: SitesGroupsComponent) => {
        expect(component).toEqual(jasmine.any(SitesGroupsComponent));
    }));

    it('should have sites', inject([SitesGroupsComponent], (component: SitesGroupsComponent) => {
        expect(component.siteGroups.length).toBeGreaterThan(0);
    }));

    it('should have a navHeader', inject([SitesGroupsComponent], (component: SitesGroupsComponent) => {
        expect(component.navHeader).toEqual('Sites > Site Groups');
    }));

    it('should do something when clicked', inject([SitesGroupsComponent], (component: SitesGroupsComponent) => {
        spyOn(window, 'alert');
        component.sitesGroupsClick(1);
        expect(alert).toHaveBeenCalled();
    }));

    it('should have filters values', inject([SitesGroupsComponent], (component: SitesGroupsComponent) => {
        expect(component.filterValues.length).toBeGreaterThan(0);
        expect(component.filterValues[0]).toEqual('Filter');
    }));

});