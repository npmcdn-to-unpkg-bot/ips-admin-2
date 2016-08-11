import {
    addProviders,
    inject
} from '@angular/core/testing';

import { ISite } from './sites-all.interface';
import { AllSitesService } from './sites-all.service';

describe('AllSitesService::', () => {

    beforeEach(() => {
        addProviders([AllSitesService]);
    });

    it('should instantiate by injection', inject([AllSitesService], (service: AllSitesService) => {
        expect(service).toEqual(jasmine.any(AllSitesService));
    }));

    it('should return sites', inject([AllSitesService], (service: AllSitesService) => {
        let sites = service.getAllSites();
        expect(sites.length).toBeGreaterThan(0);
        let sightType: ISite = {
            'siteId': 1,
            'siteName': 'Site 1',
            'city': 'Atlanta',
            'stateProvince': 'GA',
            'country': 'USA',
            'serviceStatus': 'ACTIVE',
            'timeZoneId': 1
        };
        expect(typeof sites).toBe(typeof sightType);
    }));
});