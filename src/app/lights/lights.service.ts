import { Injectable } from '@angular/core';
import { ILights } from './lights.interface';

@Injectable()

export class LightsService {
    
    getAllFixtureTypes(): ILights[] {
        return [
        {
            "luminaireTypeId": 1,
            "organization_ID": 1,
            "displayName": "Light 1",
            "exteriorWidth": 2,
            "exteriorLength": 2,
            "interiorWidth": 2,
            "interiorLength": 1
        },
        {
            "luminaireTypeId": 2,
            "organization_ID": 1,
            "displayName": "Light 2",
            "exteriorWidth": 4,
            "exteriorLength": 4,
            "interiorWidth": 4,
            "interiorLength": 1
        }];
    }
}