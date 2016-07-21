import { Component } from '@angular/core';

@Component({
    selector: 'ui-button',
    template: 
    `
    <button (click)="onClick($event)">
        <ng-content></ng-content>
    </button>
    `
})

export class ButtonComponent {

    onClick(e) {
        alert("Button clicked for: " + e.currentTarget.innerText);
    }
}