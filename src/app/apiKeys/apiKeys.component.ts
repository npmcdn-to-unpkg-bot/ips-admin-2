import * as api from './apiKeys';

import '../../css/styles.less';
import './apiKeys.component.less';

@api.Component({
    selector: 'app-apiKeys',
    directives: [api.ButtonComponent, api.FilterComponent, api.BreadcrumbComponent, api.ButtonSaveComponent],
    templateUrl: '../src/app/apiKeys/apiKeys.component.html',
    providers: [api.APIKeysService]
})

export class APIKeysComponent {

    apiKeys: api.IAPIKeys[];
    navHeader: string = "Settings > API Keys";
    filterValues = ["Filter", "By", "A", "Value"];

    constructor(private _apiKeysService: api.APIKeysService) {
        this.apiKeys = _apiKeysService.getAllAPIKeys();
    }

    apiKeysClick(apiKeyID: number): void {
        alert("Opening api key with apiKeyID: " + apiKeyID);
    }
}