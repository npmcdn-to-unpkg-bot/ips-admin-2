import { Component } from '@angular/core';

import '../../css/styles.less';
import './codebooks.component.less';

@Component({
    selector: 'app-codebooks',
    templateUrl: '../src/app/codebooks/codebooks.component.html'
})

export class CodebooksComponent {

    headerTitle: string = "Codebooks";
}