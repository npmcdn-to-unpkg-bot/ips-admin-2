import { Component, Output, Input, EventEmitter  } from '@angular/core';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input/input';

import './filter.component.less';

@Component({
    selector: 'ui-filter',
    templateUrl: '../src/shared/filter/filter.component.html',
    directives: [MD_INPUT_DIRECTIVES]
})

export class FilterComponent {

    @Output() select = new EventEmitter();
    @Input() values = [];

    ngOnInit() {
        this.onSelect(this.values[0]);
    }

    onSelect(val) {
        this.select.emit(val);
    }
}