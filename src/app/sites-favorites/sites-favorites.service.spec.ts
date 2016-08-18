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

});