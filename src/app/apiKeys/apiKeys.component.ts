import { Component, IAPIKeys, APIKeysService, ButtonComponent, FilterComponent,
    BreadcrumbComponent, ButtonSaveComponent } from './apiKeys';

import './apiKeys.component.less';

@Component({
    selector: 'app-apiKeys',
    directives: [ButtonComponent, FilterComponent, BreadcrumbComponent, ButtonSaveComponent],
    templateUrl: '../src/app/apiKeys/apiKeys.component.html',
    providers: [APIKeysService]
})

export class APIKeysComponent {

    apiKeys: IAPIKeys[];
    navHeader: string = 'Settings > API Keys';
    filterValues = ['Filter', 'By', 'A', 'Value'];

    constructor(private _apiKeysService: APIKeysService) {
        this.apiKeys = _apiKeysService.getAllAPIKeys();
    }

    apiKeysClick(apiKeyID: number): void {
        alert('Opening api key with apiKeyID: ' + apiKeyID);
    }

    apiKeySave(e): void {
        alert('Saving api key!');
    }
}