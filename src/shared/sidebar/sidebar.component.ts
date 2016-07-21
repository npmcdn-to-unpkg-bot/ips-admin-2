import { Component, Output, Input } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';


import './sidebar.component.less';

@Component({
    selector: 'ui-sidebar',
    template:
    `
    <div class="sidebar">
        <div *ngFor="let value of values; let i = index" class="button" [routerLink]="value.path">
            <a>{{ value.name }}</a>
        </div>
    </div>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

//that's a crappy template. sorry

export class SidebarComponent {

    //@Output() select = new EventEmitter();
    @Input() values = [];

    ngOnInit() {
        console.log("A UI sidebar component was initialized");
    }
}

