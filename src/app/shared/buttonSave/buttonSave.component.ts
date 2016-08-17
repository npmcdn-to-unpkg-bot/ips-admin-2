import { Component, MdButton, MdIcon, MdIconRegistry } from './buttonSave';

import './buttonSave.component.less';

@Component({
    selector: 'ui-buttonSave',
    template:
    `
    <button md-fab color="accent">
       <md-icon class="md-24">save</md-icon>
    </button>
    `,
    directives: [MdButton, MdIcon],
    viewProviders: [MdIconRegistry]
})

export class ButtonSaveComponent {

}