export class MockData {
  createDb() {
    let sites = [
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
        },
        {
            'siteId': 5,
            'siteName': 'Site 5',
            'city': 'Atlanta',
            'stateProvince': 'GA',
            'country': 'USA',
            'serviceStatus': 'ACTIVE',
            'timeZoneId': 1
        },
        {
            'siteId': 6,
            'siteName': 'Site 6',
            'city': 'Atlanta',
            'stateProvince': 'GA',
            'country': 'USA',
            'serviceStatus': 'ACTIVE',
            'timeZoneId': 1
        },        
        {
            'siteId': 7,
            'siteName': 'Site 7',
            'city': 'Atlanta',
            'stateProvince': 'GA',
            'country': 'USA',
            'serviceStatus': 'ACTIVE',
            'timeZoneId': 1
        },
        {
            'siteId': 8,
            'siteName': 'Site 8',
            'city': 'Atlanta',
            'stateProvince': 'GA',
            'country': 'USA',
            'serviceStatus': 'ACTIVE',
            'timeZoneId': 1
        },
        {
            'siteId': 9,
            'siteName': 'Site 9',
            'city': 'Atlanta',
            'stateProvince': 'GA',
            'country': 'USA',
            'serviceStatus': 'ACTIVE',
            'timeZoneId': 1
        },
        {
            'siteId': 10,
            'siteName': 'Site 10',
            'city': 'Atlanta',
            'stateProvince': 'GA',
            'country': 'USA',
            'serviceStatus': 'ACTIVE',
            'timeZoneId': 1
        },
        {
            'siteId': 11,
            'siteName': 'Site 11',
            'city': 'Atlanta',
            'stateProvince': 'GA',
            'country': 'USA',
            'serviceStatus': 'ACTIVE',
            'timeZoneId': 1
        },
        {
            'siteId': 12,
            'siteName': 'Site 12',
            'city': 'Atlanta',
            'stateProvince': 'GA',
            'country': 'USA',
            'serviceStatus': 'ACTIVE',
            'timeZoneId': 1
        },
        {
            'siteId': 13,
            'siteName': 'Site 13',
            'city': 'Atlanta',
            'stateProvince': 'GA',
            'country': 'USA',
            'serviceStatus': 'ACTIVE',
            'timeZoneId': 1
        },
        {
            'siteId': 14,
            'siteName': 'Site 14',
            'city': 'Atlanta',
            'stateProvince': 'GA',
            'country': 'USA',
            'serviceStatus': 'ACTIVE',
            'timeZoneId': 1
        },
        {
            'siteId': 15,
            'siteName': 'Site 15',
            'city': 'Atlanta',
            'stateProvince': 'GA',
            'country': 'USA',
            'serviceStatus': 'ACTIVE',
            'timeZoneId': 1
        },
        {
            'siteId': 16,
            'siteName': 'Site 16',
            'city': 'Atlanta',
            'stateProvince': 'GA',
            'country': 'USA',
            'serviceStatus': 'ACTIVE',
            'timeZoneId': 1
        },
        {
            'siteId': 17,
            'siteName': 'Site 17',
            'city': 'Atlanta',
            'stateProvince': 'GA',
            'country': 'USA',
            'serviceStatus': 'ACTIVE',
            'timeZoneId': 1
        }];
    let siteGroups = [
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
    ];
    let mobileConfigs = [
      {
        'mobileConfigID': 1,
        'lumicastSDKVersion': '1.023a',
        'mobileConfigString': 'Config config config',
        'lastUpdatedBy': 'Adam'
      },
      {
        'mobileConfigID': 2,
        'lumicastSDKVersion': '1.023b',
        'mobileConfigString': 'Configggggggggggggggg configgggggggggggggg configgggggggggggg',
        'lastUpdatedBy': 'Danny'
      }];
    let apiKeys = [{
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
    let codeBooks = [
      {
        'codeBookId': 1,
        'codeBookName': 'Codebook 1',
        'codeWords': 'codez, codez, codez',
        'codeWordCount': 2,
        'symbolPattern': 'symbol patern',
        'lastUpdateBy': 'Adam'
      },
      {
        'codeBookId': 2,
        'codeBookName': 'Codebook 2',
        'codeWords': 'codez, codez, codez',
        'codeWordCount': 5,
        'symbolPattern': 'symbol patern',
        'lastUpdateBy': 'Danny'
      }];
    let lights = [
      {
        'luminaireTypeId': 1,
        'organization_ID': 1,
        'displayName': 'Light 1',
        'exteriorWidth': 2,
        'exteriorLength': 2,
        'interiorWidth': 2,
        'interiorLength': 1
      },
      {
        'luminaireTypeId': 2,
        'organization_ID': 1,
        'displayName': 'Light 2',
        'exteriorWidth': 4,
        'exteriorLength': 4,
        'interiorWidth': 4,
        'interiorLength': 1
      }];

    return {
      sites: sites,
      siteGroups: siteGroups,
      mobileConfigs: mobileConfigs,
      apiKeys: apiKeys,
      codeBooks: codeBooks,
      lights: lights
    };
  }
}

