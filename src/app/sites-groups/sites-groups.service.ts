import { Injectable } from '@angular/core';
import { ISiteGroups } from './sites-groups.interface';

@Injectable()

export class SiteGroupsService {

    getAllSiteGroups(): ISiteGroups[] {
        return [
            {
                'siteGroupID': 1,
                'organization_ID': 1,
                'siteGroupName': 'Group 1',
                'description': 'This is the first site group'
            },
            {
                'siteGroupID': 2,
                'organization_ID': 1,
                'siteGroupName': 'Group 2',
                'description': 'This is the second site group'
            }
        ]
    }
}