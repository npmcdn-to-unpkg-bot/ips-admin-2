import * as cb from './codebooks';

import '../../css/styles.less';
import './codebooks.component.less';

@cb.Component({
    selector: 'app-codebooks',
    directives: [cb.ButtonComponent, cb.FilterComponent, cb.BreadcrumbComponent, cb.ButtonSaveComponent],
    templateUrl: '../src/app/codebooks/codebooks.component.html',
    providers: [cb.CodebooksService]
})

export class CodebooksComponent {

    navHeader: string = "Settings > Codebooks";
    codebooks: cb.ICodebooks[];
    filterValues = ["Filter", "By", "A", "Value"];

    constructor(private _codebooksService: cb.CodebooksService) {
        this.codebooks = _codebooksService.getAllFixtureTypes();
    }

    codebookClick(codeBookId: number): void {
        alert("Opening codebook with codeBookId: " + codeBookId);
    }
}