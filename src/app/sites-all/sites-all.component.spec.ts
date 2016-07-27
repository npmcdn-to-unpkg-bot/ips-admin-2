import {
    addProviders,
    inject
} from '@angular/core/testing';
import { provide } from '@angular/core'
import { IAllSites } from './sites-all.interface';
import { AllSitesService } from './sites-all.service';
import { SitesAllComponent } from './sites-all.component';

class MockAllSitesService {
    public getAllSites(): IAllSites[] {
        return [
            {
                "siteId": 1,
                "siteName": "Site 1",
                "city": "Atlanta",
                "stateProvince": "GA",
                "country": "USA",
                "serviceStatus": "ACTIVE",
                "timeZoneId": 1
            },
            {
                "siteId": 2,
                "siteName": "Site 2",
                "city": "Atlanta",
                "stateProvince": "GA",
                "country": "USA",
                "serviceStatus": "ACTIVE",
                "timeZoneId": 1
            }];
    }
}

describe('SitesAllComponent::', () => {

    beforeEach(() => {
        addProviders([
            SitesAllComponent,
            provide(AllSitesService, {useClass: MockAllSitesService})
        ]);
    });

    it('should instantiate by injection', inject([SitesAllComponent], (component: SitesAllComponent) => {
        expect(component).toEqual(jasmine.any(SitesAllComponent));
    }));

    it('should have sites', inject([SitesAllComponent], (component: SitesAllComponent) => {
        expect(component.allSites.length).toBeGreaterThan(0);
    }));

    it('should have a headerTitle', inject([SitesAllComponent], (component: SitesAllComponent) => {
        expect(component.headerTitle).toEqual('Sites > All Sites');
    }));

    it('should do something when clicked', inject([SitesAllComponent], (component: SitesAllComponent) => {
        spyOn(window, 'alert');
        component.allSitesClick(1);
        expect(alert).toHaveBeenCalled();
    }));

    it('should have filters values', inject([SitesAllComponent], (component: SitesAllComponent) => {
        expect(component.filterValues.length).toBeGreaterThan(0);
        expect(component.filterValues[0]).toEqual('Filter');
    }));

});