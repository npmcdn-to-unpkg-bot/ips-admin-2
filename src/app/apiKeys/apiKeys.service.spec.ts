import {
    addProviders,
    inject
} from '@angular/core/testing';

import { IAPIKeys } from './apiKeys.interface';
import { APIKeysService } from './apiKeys.service';

describe('APIKeysService::', () => {

    beforeEach(() => {
        addProviders([APIKeysService]);
    });

    it('should instantiate by injection', inject([APIKeysService], (service: APIKeysService) => {
        expect(service).toEqual(jasmine.any(APIKeysService));
    }));

    it('should return sites', inject([APIKeysService], (service: APIKeysService) => {
        let apikeys = service.getAllAPIKeys();
        expect(apikeys.length).toBeGreaterThan(0);
        let keyType: IAPIKeys = {
            'apiKeyID': 1,
            'apiKeyValue': 'agadw^&#224ag#$',
            'effectiveFrom': 7262016,
            'effectiveTo': 912016,
            'type': 'Auth',
            'description': 'Sample key for auth'
        };
        expect(typeof apikeys).toBe(typeof keyType);
    }));
});