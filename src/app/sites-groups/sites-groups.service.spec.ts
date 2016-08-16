import {
    addProviders,
    inject
} from '@angular/core/testing';

import { ISiteGroups } from './sites-groups.interface';
import { SiteGroupsService } from './sites-groups.service';

describe('SiteGroupsService::', () => {

    beforeEach(() => {
        addProviders([SiteGroupsService]);
    });

    it('should instantiate by injection', inject([SiteGroupsService], (service: SiteGroupsService) => {
        expect(service).toEqual(jasmine.any(SiteGroupsService));
    }));

    it('should return sites', inject([SiteGroupsService], (service: SiteGroupsService) => {
        let sites = service.getAllSiteGroups(); 
        expect(sites.length).toBeGreaterThan(0);
        let sightType: ISiteGroups = {
            'siteGroupID': 1,
            'organization_ID': 1,
            'siteGroupName': 'Group 1',
            'description': 'This is the first site group'
        };
        expect(typeof sites).toBe(typeof sightType);
    }));
});