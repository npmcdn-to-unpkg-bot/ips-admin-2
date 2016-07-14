import { Component, Output, Input } from "@angular/core";

import './sidebar.component.less';

@Component({
    selector: 'ui-sidebar',
    template:
    `
    <div class="sidebar">
        <div *ngFor="let value of values; let i = index" class="button">
            <span>{{ value }}</span>
        </div>
    </div>
    `
})

//that's a crappy template. sorry

export class SidebarComponent {

    //@Output() select = new EventEmitter();
    @Input() values = [];

    ngOnInit() {
        console.log("A UI sidebar component was initialized");
    }
}

