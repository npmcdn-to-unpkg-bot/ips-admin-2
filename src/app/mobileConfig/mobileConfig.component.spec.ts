import {
    addProviders,
    inject
} from '@angular/core/testing';
import { provide } from '@angular/core';
import { MobileConfigComponent } from './mobileConfig.component';
import { MobileConfigService } from './mobileConfig.service';
import { IMobileConfig } from './mobileConfig.interface';

class MockMobileConfigService {

    getAllFixtureTypes(): IMobileConfig[] {
        return [
            {
                'mobileConfigID': 1,
                'lumicastSDKVersion': '1.023a',
                'mobileConfigString': 'Config config config',
                'lastUpdatedBy': 'Adam'
            },
            {
                'mobileConfigID': 2,
                'lumicastSDKVersion': '1.023b',
                'mobileConfigString': 'Configggggggggggggggg configgggggggggggggg configgggggggggggg',
                'lastUpdatedBy': 'Danny'
            }];
    }
}

describe('MobileConfigComponent::', () => {

    beforeEach(() => {
        addProviders([
            MobileConfigComponent,
            provide(MobileConfigService, {useClass: MockMobileConfigService})
        ]);
    });

    it('should instantiate by injection', inject([MobileConfigComponent], (component: MobileConfigComponent) => {
        expect(component).toEqual(jasmine.any(MobileConfigComponent));
    }));

    it('should have a navHeader', inject([MobileConfigComponent], (component: MobileConfigComponent) => {
        expect(component.navHeader).toEqual('Settings > Mobile Config');
    }));

    it('should have sites', inject([MobileConfigComponent], (component: MobileConfigComponent) => {
        expect(component.mobileConfigs.length).toBeGreaterThan(0);
    }));

    it('should do something when clicked', inject([MobileConfigComponent], (component: MobileConfigComponent) => {
        spyOn(window, 'alert');
        component.mobileConfigClick(1);
        expect(alert).toHaveBeenCalled();
    }));

    it('should have filters values', inject([MobileConfigComponent], (component: MobileConfigComponent) => {
        expect(component.filterValues.length).toBeGreaterThan(0);
        expect(component.filterValues[0]).toEqual('Filter');
    }));
});