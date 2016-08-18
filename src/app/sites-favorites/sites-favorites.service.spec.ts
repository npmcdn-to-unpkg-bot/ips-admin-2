import {
    addProviders,
    inject
} from '@angular/core/testing';

import { ISiteFavorites } from './sites-favorites.interface';
import { SiteFavoritesService } from './sites-favorites.service';

describe('SiteGroupsService::', () => {

    beforeEach(() => {
        addProviders([SiteFavoritesService]);
    });

    it('should instantiate by injection', inject([SiteFavoritesService], (service: SiteFavoritesService) => {
        expect(service).toEqual(jasmine.any(SiteFavoritesService));
    }));

    it('should return sites', inject([SiteFavoritesService], (service: SiteFavoritesService) => {
        let sites = service.getAllSiteFavorites(); 
        expect(sites.length).toBeGreaterThan(0);
        let sightType: ISiteFavorites = {
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