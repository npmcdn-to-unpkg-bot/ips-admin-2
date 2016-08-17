import { Component, Output, Input, EventEmitter } from "@angular/core";

@Component({
    selector: 'ui-dropdown',
    template:
    `
    <div>
        <select #dd (change)="onSelect(dd.value)">
            <option *ngFor="let value of values; let i = index">
                {{ value }}
            </option>
        </select>
    </div>
    `
})

export class Dropdown {

    @Output() select = new EventEmitter();
    @Input() values = [];

    ngOnInit() {
        this.onSelect(this.values[0]);
    }

    onSelect(val) {
        this.select.emit(val);
    }
}