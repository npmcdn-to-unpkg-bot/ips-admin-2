import { Component, ICodebooks, CodebooksService, ButtonComponent, FilterComponent,
    BreadcrumbComponent, ButtonSaveComponent } from './codebooks';

import './codebooks.component.less';

@Component({
    selector: 'app-codebooks',
    directives: [ButtonComponent, FilterComponent, BreadcrumbComponent, ButtonSaveComponent],
    templateUrl: '../src/app/codebooks/codebooks.component.html',
    providers: [CodebooksService]
})

export class CodebooksComponent {

    navHeader: string = "Settings > Codebooks";
    codebooks: ICodebooks[];
    filterValues = ["Filter", "By", "A", "Value"];
    errorMessage: string;

    constructor(private _codebooksService: CodebooksService) {}

    ngOnInit() {
        this._codebooksService.getCodebooks().subscribe(
                codebooks => this.codebooks = codebooks,
                error =>  this.errorMessage = <any>error);
    }


    codebookClick(codeBookId: number): void {
        alert("Opening codebook with codeBookId: " + codeBookId);
    }

    codebookSave(e): void {
        alert("Saving codebook!");
    }
}