## SidebarComponent usage guide

#### Import the SidebarComponent and add it to the directives.

```
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
```

#### Create an array of objects with name and path properties. 

```
    sidebarButtons = [
        { name: "General Settings", path: 'general'},
        { name: "Codebooks", path: 'codebooks'},
        { name: "Mobile Config", path: 'mobile-config'},
        { name: "API Keys", path: 'api-keys'},
        { name: "Deployment", path: 'deployment'}
    ];
```

#### Add this to your template using the selector you provided

<ui-sidebar [values]="sidebarButtons" [(value)]="value"></ui-sidebar>