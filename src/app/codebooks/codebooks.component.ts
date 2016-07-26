import * as cb from './codebooks';

import '../../css/styles.less';
import './codebooks.component.less';

@cb.Component({
    selector: 'app-codebooks',
    templateUrl: '../src/app/codebooks/codebooks.component.html',
    providers: [cb.CodebooksService]
})

export class CodebooksComponent {

    headerTitle: string = "Codebooks";
    codebooks: cb.ICodebooks[];

    constructor(private _codebooksService: cb.CodebooksService) {
        this.codebooks = _codebooksService.getAllFixtureTypes();
    }
}