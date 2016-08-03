import { Injectable } from '@angular/core';
import { IAllSites } from './sites-all.interface';

@Injectable()

export class AllSitesService {
    
    getAllSites(): IAllSites[] {
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
        {
            'siteId': 3,
            'siteName': 'Site 3',
            'city': 'Atlanta',
            'stateProvince': 'GA',
            'country': 'USA',
            'serviceStatus': 'ACTIVE',
            'timeZoneId': 1
        },
        {
            'siteId': 4,
            'siteName': 'Site 4',
            'city': 'Atlanta',
            'stateProvince': 'GA',
            'country': 'USA',
            'serviceStatus': 'ACTIVE',
            'timeZoneId': 1
        }];
    }
}