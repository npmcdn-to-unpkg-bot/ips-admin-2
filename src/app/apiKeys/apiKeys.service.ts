import { Injectable } from '@angular/core';
import { IAPIKeys } from './apiKeys.interface';

@Injectable()

export class APIKeysService {

    getAllAPIKeys(): IAPIKeys[] {
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
            }, {
                'apiKeyID': 3,
                'apiKeyValue': 'agavesoundsgoodrightnow',
                'effectiveFrom': 1,
                'effectiveTo': 1,
                'type': 'Margaritas',
                'description': 'Sample key for margaritas'
        }];
    }
}