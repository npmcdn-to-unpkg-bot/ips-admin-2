import {
    addProviders,
    inject
} from '@angular/core/testing';
import { provide } from '@angular/core'
import { ISiteFavorites } from '../sites-favorites.interface';
import { SiteFavoritesService } from '../sites-favorites.service';
import { SitesFavoritesComponent } from './sites-favorites.container';

class MockSiteFavoritesService {
    getAllSiteFavorites(): ISiteFavorites[] {
        return [
            {
                'siteId': 1,
                'siteName': 'Site 1',
                'city': 'Atlanta',
                'stateProvince': 'GA',
                'country': 'USA',
                'serviceStatus': 'ACTIVE',
                'timeZoneId': 1
            }
        ]
    }
}

describe('SitesFavoritesComponent::', () => {

    beforeEach(() => {
        addProviders([
            SitesFavoritesComponent,
            provide(SiteFavoritesService, {useClass: MockSiteFavoritesService})
        ]);
    });

    it('should instantiate by injection', inject([SitesFavoritesComponent], (component: SitesFavoritesComponent) => {
        expect(component).toEqual(jasmine.any(SitesFavoritesComponent));
    }));

    it('should have sites', inject([SitesFavoritesComponent], (component: SitesFavoritesComponent) => {
        expect(component.siteFavs.length).toBeGreaterThan(0);
    }));

    it('should do something when clicked', inject([SitesFavoritesComponent], (component: SitesFavoritesComponent) => {
        spyOn(window, 'alert');
        component.favoritesClick();
        expect(alert).toHaveBeenCalled();
    }));


});