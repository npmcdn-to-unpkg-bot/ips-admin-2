import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';

import '../../css/styles.less';

@Component({
    selector: 'app-settings',
    templateUrl: '../src/app/settings/settings.component.html',
    directives: [SidebarComponent]
})

export class SettingsComponent {

    headerTitle: string = "Settings";
    sidebarButtons = [
        { name: "General Settings", path: 'general'},
        { name: "Codebooks", path: 'codebooks'},
        { name: "Mobile Config", path: 'mobile-config'},
        { name: "API Keys", path: 'api-keys'},
        { name: "Deployment", path: 'deployment'}
    ];
}