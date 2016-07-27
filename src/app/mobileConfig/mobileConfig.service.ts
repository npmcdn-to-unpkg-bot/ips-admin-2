import { Injectable } from '@angular/core';
import { IMobileConfig } from './mobileConfig.interface';

@Injectable()

export class MobileConfigService {
    
    getAllFixtureTypes(): IMobileConfig[] {
        return [
        {
            "mobileConfigID": 1,
            "lumicastSDKVersion": "1.023a",
            "mobileConfigString": "Config config config",
            "lastUpdatedBy": "Adam"
        },
        {
            "mobileConfigID": 2,
            "lumicastSDKVersion": "1.023b",
            "mobileConfigString": "Configggggggggggggggg configgggggggggggggg configgggggggggggg",
            "lastUpdatedBy": "Danny"
        }];
    }
}