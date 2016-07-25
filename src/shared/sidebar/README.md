## SidebarComponent usage guide

#### Import the SidebarComponent and add it to the directives.

```typescript
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
```

#### Create an array of objects with name and path properties. 
##### Make sure your ID value is UNIQUE.

```typescript
    sidebarButtons = [
        { name: "General Settings", path: "general", id: "sbGeneral"},
        { name: "Codebooks", path: "codebooks", id: "sbCodebooks"},
        { name: "Mobile Config", path: "mobile-config", id: "sbMobileconfig"},
        { name: "API Keys", path: "api-keys", id: "sbAPIKeys"},
        { name: "Deployment", path: "deployment", id: "sbDeployment"}
    ];
```

#### Add this to your template using the selector you provided

```html
<ui-sidebar [values]="sidebarButtons" [(value)]="value"></ui-sidebar>
```