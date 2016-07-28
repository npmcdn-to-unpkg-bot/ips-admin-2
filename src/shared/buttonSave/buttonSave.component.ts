import * as save from './buttonSave';

import './buttonSave.component.less';

@save.Component({
    selector: 'ui-buttonSave',
    template:
    `
    <button md-fab color="accent">
       <md-icon class="md-24">save</md-icon>
    </button>
    `,
    directives: [save.MdButton, save.MdIcon],
    viewProviders: [save.MdIconRegistry]
})

export class ButtonSaveComponent {

}