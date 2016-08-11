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
    errorMessage: string;

    constructor(private _apiKeysService: APIKeysService) {}

    ngOnInit() {
        this._apiKeysService.getApiKeys().subscribe(
                sites => this.apiKeys = sites,
                error =>  this.errorMessage = <any>error);
    }

    apiKeysClick(apiKeyID: number): void {
        alert('Opening api key with apiKeyID: ' + apiKeyID);
    }

    apiKeySave(e): void {
        alert('Saving api key!');
    }
}