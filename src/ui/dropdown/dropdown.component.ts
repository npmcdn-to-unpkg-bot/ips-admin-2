import { Component, Output, Input, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-dropdown',
    template:
    `
    <div>
        <select #dd (change)="select.emit(dd.value)">
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
        this.select.emit(this.values[0]);
    }
}