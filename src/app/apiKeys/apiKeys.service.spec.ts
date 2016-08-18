import {
    addProviders,
    inject
} from '@angular/core/testing';
import { XHRBackend, HTTP_PROVIDERS } from '@angular/http';
import { InMemoryBackendService, SEED_DATA }  from 'angular2-in-memory-web-api';
import { MockData }   from '../api/mock-data';

import { IAPIKeys, APIKeysService } from './apiKeys';
import 'rxjs/add/operator/catch';

describe('APIKeysService::', () => {

    beforeEach(() => {
        addProviders([
            APIKeysService,
            HTTP_PROVIDERS,
            { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem mock http server
            { provide: SEED_DATA,  useClass: MockData }                // in-mem mock server data
        ]);
    });

    it('should instantiate by injection', inject([APIKeysService], (service: APIKeysService) => {
        expect(service).toEqual(jasmine.any(APIKeysService));
    }));

});