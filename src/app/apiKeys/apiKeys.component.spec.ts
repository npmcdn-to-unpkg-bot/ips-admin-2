import {
    addProviders,
    inject
} from '@angular/core/testing';
import { provide } from '@angular/core';
import { APIKeysComponent } from './apiKeys.component';
import { APIKeysService } from './apiKeys.service';
import { IAPIKeys } from './apiKeys.interface';

class MockAPIKeysService {
    public getAllAPIKeys(): IAPIKeys[] {
        return [{
            'apiKeyID': 1,
            'apiKeyValue': 'agadw^&#224ag#$',
            'effectiveFrom': 7262016,
            'effectiveTo': 912016,
            'type': 'Auth',
            'description': 'Sample key for auth'
        }, {
            'apiKeyID': 2,
            'apiKeyValue': 'sample#%^database@#$@#$keyvalue',
            'effectiveFrom': 7262016,
            'effectiveTo': 7262017,
            'type': 'Connection String',
            'description': 'Sample key for the database'
        }];
    }
}

describe('APIKeysComponent::', () => {

    beforeEach(() => {
        addProviders([
                APIKeysComponent,
                provide(APIKeysService, {useClass: MockAPIKeysService})
        ]);
    });

    it('should instantiate by injection', inject([APIKeysComponent], (component: APIKeysComponent) => {
        expect(component).toEqual(jasmine.any(APIKeysComponent));
    }));

    it('should have a navHeader', inject([APIKeysComponent], (component: APIKeysComponent) => {
        expect(component.navHeader).toEqual('Settings > API Keys');
    }));

    it('should have api keys', inject([APIKeysComponent], (component: APIKeysComponent) => {
        expect(component.apiKeys.length).toBeGreaterThan(0);
    }));

    it('should do something when clicked', inject([APIKeysComponent], (component: APIKeysComponent) => {
        spyOn(window, 'alert');
        component.apiKeysClick(1);
        expect(alert).toHaveBeenCalled();
    }));

    it('should have filters values', inject([APIKeysComponent], (component: APIKeysComponent) => {
        expect(component.filterValues.length).toBeGreaterThan(0);
        expect(component.filterValues[0]).toEqual('Filter');
    }));

});