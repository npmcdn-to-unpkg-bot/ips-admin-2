import { Component } from '@angular/core';
import { MdButton } from '@angular2-material/button/button';

import './button.component.less';

@Component({
    selector: 'ui-button',
    template: 
    `
    <button md-raised-button color="primary" (click)="onClick($event)">
        <ng-content></ng-content>
    </button>
    `,
    directives: [MdButton]
})

export class ButtonComponent {

    onClick(e) {
        alert("Button clicked for: " + e.currentTarget.innerText);
    }
}