import * as api from './apiKeys';

import '../../css/styles.less';
import './apiKeys.component.less';

@api.Component({
    selector: 'app-apiKeys',
    templateUrl: '../src/app/apiKeys/apiKeys.component.html',
    providers: [api.APIKeysService]
})

export class APIKeysComponent {

    apiKeys: api.IAPIKeys[];
    headerTitle: string = "API Keys";

    constructor(private _apiKeysService: api.APIKeysService) {
        this.apiKeys = _apiKeysService.getAllAPIKeys();
    }
}