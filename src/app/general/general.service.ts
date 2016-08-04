import { Injectable } from '@angular/core';
import { IBusinessAddress, IPointOfContact } from './general.interface';

@Injectable()

export class GeneralSettingsService {

    getBusinessAddress(id: number): IBusinessAddress{
        return {
            'businessAddressId': 1,
            'line1': 'Codebook 1',
            'line2': 'codez, codez, codez',
            'city': 'symbol patern',
            'state': 'Adam',
            'postalCode': 'stringy',
            'country': 'country'
        };
    }

    getPointOfContact(id: number): IPointOfContact {
        return {
            'contactId': 1,
            'firstName': 'Adam',
            'lastName': 'Paul',
            'title': 'Application Developer',
            'phone': '770-860-2926'
        };
    }
}