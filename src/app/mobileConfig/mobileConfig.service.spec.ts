import {
    addProviders,
    inject
} from '@angular/core/testing';

import { IMobileConfig } from './mobileConfig.interface';
import { MobileConfigService } from './mobileConfig.service';

describe('MobileConfigService::', () => {

    beforeEach(() => {
        addProviders([MobileConfigService]);
    });

    it('should instantiate by injection', inject([MobileConfigService], (service: MobileConfigService) => {
        expect(service).toEqual(jasmine.any(MobileConfigService));
    }));

    it('should return configs', inject([MobileConfigService], (service: MobileConfigService) => {
        let configs = service.getAllFixtureTypes();
        expect(configs.length).toBeGreaterThan(0);
        let configType: IMobileConfig = {
            "mobileConfigID": 1,
            "lumicastSDKVersion": "1.023a",
            "mobileConfigString": "Config config config",
            "lastUpdatedBy": "Adam"
        };
        expect(typeof configs).toBe(typeof configType);
    }));
});