import {
    addProviders,
    inject
} from '@angular/core/testing';
import { provide } from '@angular/core'
import { ISite } from '../sites-all.interface';
import { AllSitesService } from '../sites-all.service';
import { SitesAllContainer } from './sites-all.container';

class MockAllSitesService {
    public getAllSites(): ISite[] {
    return [
        {
            'siteId': 1,
            'siteName': 'Site 1',
            'city': 'Atlanta',
            'stateProvince': 'GA',
            'country': 'USA',
            'serviceStatus': 'ACTIVE',
            'timeZoneId': 1
        },
        {
            'siteId': 2,
            'siteName': 'Site 2',
            'city': 'Atlanta',
            'stateProvince': 'GA',
            'country': 'USA',
            'serviceStatus': 'ACTIVE',
            'timeZoneId': 1
        },
        // {
        //     'siteId': 3,
        //     'siteName': 'Site 3',
        //     'city': 'Atlanta',
        //     'stateProvince': 'GA',
        //     'country': 'USA',
        //     'serviceStatus': 'ACTIVE',
        //     'timeZoneId': 1
        // },
        // {
        //     'siteId': 4,
        //     'siteName': 'Site 4',
        //     'city': 'Atlanta',
        //     'stateProvince': 'GA',
        //     'country': 'USA',
        //     'serviceStatus': 'ACTIVE',
        //     'timeZoneId': 1
        // },
        // {
        //     'siteId': 5,
        //     'siteName': 'Site 5',
        //     'city': 'Atlanta',
        //     'stateProvince': 'GA',
        //     'country': 'USA',
        //     'serviceStatus': 'ACTIVE',
        //     'timeZoneId': 1
        // },
        // {
        //     'siteId': 6,
        //     'siteName': 'Site 6',
        //     'city': 'Atlanta',
        //     'stateProvince': 'GA',
        //     'country': 'USA',
        //     'serviceStatus': 'ACTIVE',
        //     'timeZoneId': 1
        // },        
        // {
        //     'siteId': 7,
        //     'siteName': 'Site 7',
        //     'city': 'Atlanta',
        //     'stateProvince': 'GA',
        //     'country': 'USA',
        //     'serviceStatus': 'ACTIVE',
        //     'timeZoneId': 1
        // },
        // {
        //     'siteId': 8,
        //     'siteName': 'Site 8',
        //     'city': 'Atlanta',
        //     'stateProvince': 'GA',
        //     'country': 'USA',
        //     'serviceStatus': 'ACTIVE',
        //     'timeZoneId': 1
        // },
        // {
        //     'siteId': 9,
        //     'siteName': 'Site 9',
        //     'city': 'Atlanta',
        //     'stateProvince': 'GA',
        //     'country': 'USA',
        //     'serviceStatus': 'ACTIVE',
        //     'timeZoneId': 1
        // },
        // {
        //     'siteId': 10,
        //     'siteName': 'Site 10',
        //     'city': 'Atlanta',
        //     'stateProvince': 'GA',
        //     'country': 'USA',
        //     'serviceStatus': 'ACTIVE',
        //     'timeZoneId': 1
        // },
        // {
        //     'siteId': 11,
        //     'siteName': 'Site 11',
        //     'city': 'Atlanta',
        //     'stateProvince': 'GA',
        //     'country': 'USA',
        //     'serviceStatus': 'ACTIVE',
        //     'timeZoneId': 1
        // },
        // {
        //     'siteId': 12,
        //     'siteName': 'Site 12',
        //     'city': 'Atlanta',
        //     'stateProvince': 'GA',
        //     'country': 'USA',
        //     'serviceStatus': 'ACTIVE',
        //     'timeZoneId': 1
        // },
        // {
        //     'siteId': 13,
        //     'siteName': 'Site 13',
        //     'city': 'Atlanta',
        //     'stateProvince': 'GA',
        //     'country': 'USA',
        //     'serviceStatus': 'ACTIVE',
        //     'timeZoneId': 1
        // },
        // {
        //     'siteId': 14,
        //     'siteName': 'Site 14',
        //     'city': 'Atlanta',
        //     'stateProvince': 'GA',
        //     'country': 'USA',
        //     'serviceStatus': 'ACTIVE',
        //     'timeZoneId': 1
        // },
        // {
        //     'siteId': 15,
        //     'siteName': 'Site 15',
        //     'city': 'Atlanta',
        //     'stateProvince': 'GA',
        //     'country': 'USA',
        //     'serviceStatus': 'ACTIVE',
        //     'timeZoneId': 1
        // },
        // {
        //     'siteId': 16,
        //     'siteName': 'Site 16',
        //     'city': 'Atlanta',
        //     'stateProvince': 'GA',
        //     'country': 'USA',
        //     'serviceStatus': 'ACTIVE',
        //     'timeZoneId': 1
        // },
        // {
        //     'siteId': 17,
        //     'siteName': 'Site 17',
        //     'city': 'Atlanta',
        //     'stateProvince': 'GA',
        //     'country': 'USA',
        //     'serviceStatus': 'ACTIVE',
        //     'timeZoneId': 1
        // }
        ];
    }
}

describe('SitesAllContainer::', () => {

    beforeEach(() => {
        addProviders([
            SitesAllContainer,
            provide(AllSitesService, {useClass: MockAllSitesService})
        ]);
    });

    it('should instantiate by injection', inject([SitesAllContainer], (component: SitesAllContainer) => {
        expect(component).toEqual(jasmine.any(SitesAllContainer));
    }));

    it('should have sites', inject([SitesAllContainer], (component: SitesAllContainer) => {
        expect(component.allSites.length).toBeGreaterThan(0);
    }));

    it('should have a navHeader', inject([SitesAllContainer], (component: SitesAllContainer) => {
        expect(component.navHeader).toEqual('Sites > All Sites');
    }));

    it('should do something when clicked', inject([SitesAllContainer], (component: SitesAllContainer) => {
        spyOn(window, 'alert');
        component.allSitesClick(1);
        expect(alert).toHaveBeenCalled();
    }));

    it('should have filters values', inject([SitesAllContainer], (component: SitesAllContainer) => {
        expect(component.filterValues.length).toBeGreaterThan(0);
        expect(component.filterValues[0]).toEqual('Filter');
    }));

});