import { Component } from '@angular/core';
import { SidebarComponent } from '../ui/sidebar/sidebar.component';

@Component({
    selector: 'app-settings',
    templateUrl: '../src/settings/settings.component.html',
    directives: [SidebarComponent]
})

export class SettingsComponent {

    headerTitle: string = "Settings";
    sidebarButtons = ["General Settings", "Codebooks", "Mobile Config",  "API Keys", "Deployment"];
}