import {
    addProviders,
    inject
} from '@angular/core/testing';

import { ILight } from './lights.interface';
import { LightsService } from './lights.service';

describe('LightsService::', () => {

    beforeEach(() => {
        addProviders([LightsService]);
    });

    it('should instantiate by injection', inject([LightsService], (service: LightsService) => {
        expect(service).toEqual(jasmine.any(LightsService));
    }));

    it('should return fixture types', inject([LightsService], (service: LightsService) => {
        let fixtureTypes = service.getAllFixtureTypes();
        expect(fixtureTypes.length).toBeGreaterThan(0);
        let lightType: ILight = {
            'luminaireTypeId': 1,
            'organization_ID': 1,
            'displayName': 'Light 1',
            'exteriorWidth': 2,
            'exteriorLength': 2,
            'interiorWidth': 2,
            'interiorLength': 1
        };
        expect(typeof fixtureTypes).toBe(typeof lightType);
    }));
});